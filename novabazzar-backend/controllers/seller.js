const Seller = require("../models/Seller");
const { createError } = require("../utils/Error");
const { s3 } = require("../utils/awsS3");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const registerSeller = async (req, res, next) => {
	const username = req.body.username;
	const email = req.body.email;
	const phone = req.body.phone;
	const password = await bcrypt.hash(req.body.password, 10);

	const newSellerData = {
		name: req.body.name,
		username,
		email,
		phone,
		password,
		profile_picture: "",
	};

	const newSeller = new Seller(newSellerData);

	try {
		const emailCheck = await Seller.findOne({ email });
		if (emailCheck) return next(createError(409, "email already registered!"));

		const phoneCheck = await Seller.findOne({ phone });
		if (phoneCheck)
			return next(createError(409, "phone no. already registered!"));

		const usernameCheck = await Seller.findOne({ username });
		if (usernameCheck) return next(createError(409, "username not available!"));

		const seller = await newSeller.save();

		const token = jwt.sign(
			{
				name: username,
				email: email,
				seller_id: seller._id,
			},
			process.env.JWT
		);

		return res.status(200).json({
			message: "Register Success",
			token: token,
		});
	} catch (err) {
		next(err);
	}
};

const loginSeller = async (req, res, next) => {
	const username = req.body.username;
	const pass = req.body.password;
	const email = req.body.email;

	try {
		const seller = await Seller.findOne({
			$or: [{ username }, { email: username }],
		});

		if (!seller) return next(createError(404, "seller not found!"));

		const isCorrect = await bcrypt.compare(pass, seller.password);

		if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

		const token = jwt.sign(
			{
				name: seller.username,
				email: seller.email,
				seller_id: seller._id,
			},
			process.env.JWT
		);

		return res.status(200).json({
			message: "Login Success",
			token: token,
		});
	} catch (err) {
		next(err);
	}
};

const getSeller = async (req, res, next) => {
	try {
		const seller = await Seller.findOne({ _id: req.params.sellerid });

		if (!seller) return next(createError(404, "seller not found!"));

		res.status(200).json({ seller, message: "seller details" });
	} catch (err) {
		next(err);
	}
};

const editSellerDetails = async (req, res, next) => {
	try {
		const seller = await Seller.findOne({ _id: req.params.sellerid });

		if (!seller) return next(createError(404, "seller not found!"));

		const updatedSeller = {
			...seller._doc,
			name: req.body.name,
			email: req.body.name,
			phone: req.body.phone,
			profile_picture: req.body.profile_pic,
		};

		const latestSeller = await Seller.findByIdAndUpdate(
			req.params.sellerid,
			{ $set: updatedSeller },
			{ new: true }
		);

		return res
			.status(200)
			.json({ message: "seller updated", seller: latestSeller });
	} catch (err) {
		next(err);
	}
};

const editSellerPassword = async (req, res, next) => {
	try {
		const seller = await Seller.findOne({ _id: req.params.sellerid });

		if (!seller) return next(createError(404, "seller not found!"));

		if (!req.body.password)
			return next(createError(409, "password cannot be empty!"));

		const hashedPassword = await bcrypt.hash(req.body.password, 10);

		const updatedSeller = { ...seller._doc, password: hashedPassword };

		const latestSeller = await Seller.findByIdAndUpdate(
			req.params.sellerid,
			{ $set: updatedSeller },
			{ new: true }
		);

		return res
			.status(200)
			.json({ message: "seller updated", seller: latestSeller });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const deleteSeller = async (req, res, next) => {
	try {
		await Seller.findByIdAndDelete(req.params.sellerid);

		res.status(200).json({ message: "seller has been deleted" });
	} catch (err) {
		next(err);
	}
};

const getAllSellers = async (req, res, next) => {
	try {
		const sellers = await Seller.find().sort({ timestamp: -1 });

		res.status(200).json({ sellers, message: "all sellers" });
	} catch (err) {
		next(err);
	}
};

const uploadSellersProfileImage = async (req, res, next) => {
	const file = req.file;
	const filename = `${uuidv4()}.${file.mimetype.split("/")[1]}`;

	if (!file) {
		return next(createError(404, "upload file!"));
	}

	try {
		const params = {
			Bucket: process.env.BUCKET,
			Key: `sellers/${filename}`,
			Body: file.buffer,
		};

		// Uploading files to the bucket
		s3.upload(params, function (err, data) {
			if (err) {
				next(err);
			}

			console.log(`File uploaded successfully. ${data?.Location}`);
			return res.status(200).json({
				message: "image uploaded",
				url: data.Location,
			});
		});
	} catch (err) {
		next(err);
	}
};

module.exports = {
	registerSeller,
	loginSeller,
	getAllSellers,
	getSeller,
	editSellerDetails,
	editSellerPassword,
	deleteSeller,
	uploadSellersProfileImage,
};
