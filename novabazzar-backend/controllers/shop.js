const Shop = require("../models/Shop");
const { createError } = require("../utils/Error");
const { s3 } = require("../utils/awsS3");
const { v4: uuidv4 } = require("uuid");

// const { EMAIL_FROM, SIB_API } = require("../config/dev");

const Sib = require("sib-api-v3-sdk");

const client = Sib.ApiClient.instance;

const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.SIB_API;

const tranEmailApi = new Sib.TransactionalEmailsApi();
const sender = {
	email: process.env.EMAIL_FROM,
	name: "NovaBazzar",
};

const getOtpForShopVerification = async (req, res, next) => {
	//otp
	let otp = "";
	const characters = "0123456789";
	for (let i = 0; i < 4; i++)
		otp += characters[Math.floor(Math.random() * characters.length)];

	try {
		const receivers = [{ email: req.body.email }];
		const emailData = {
			sender,
			to: receivers,
			subject: "Welcome to NovaBazzar",
			htmlContent: ` <h3 style=text-align:center;> OTP to open shop <b>${otp}<b> </h3>`,
		};

		await tranEmailApi.sendTransacEmail(emailData);

		return res.status(200).json({
			message: "OTP Sent Successfully!",
			otp,
		});
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const addShop = async (req, res, next) => {
	const name = req.body.name;
	const shopName = req.body.shopName;
	const shopType = req.body.shopType;
	const state = req.body.state;
	const city = req.body.city;
	const email = req.body.email;
	const phone = req.body.phone;

	const newShopData = {
		fullName: name,
		shopName,
		shopType,
		state,
		city,
		email,
		phone,
	};

	const newShop = new Shop(newShopData);

	try {
		const shop = await newShop.save();

		return res.status(200).json({
			message: "Shop Added Successfully!",
			shop,
		});
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const getShop = async (req, res, next) => {
	try {
		const shop = await Shop.findOne({ _id: req.params.shopid });

		if (!shop) return next(createError(404, "shop not found!"));

		res.status(200).json({ shop, message: "shop details" });
	} catch (err) {
		next(err);
	}
};

const editShopDetails = async (req, res, next) => {
	try {
		const shop = await Shop.findOne({ _id: req.params.shopid });

		if (!shop) return next(createError(404, "shop not found!"));

		const categories = req.body.categories.split(",");

		const updatedShop = {
			...shop._doc,
			shopName: req.body.shopName,
			shopType: req.body.shopType,
			state: req.body.state,
			city: req.body.city,
			email: req.body.email,
			phone: req.body.phone,
		};

		const latestShop = await Shop.findByIdAndUpdate(
			req.params.shopid,
			{ $set: updatedShop },
			{ new: true }
		);

		return res.status(200).json({ message: "shop updated", shop: latestShop });
	} catch (err) {
		next(err);
	}
};

const deleteShop = async (req, res, next) => {
	try {
		await Shop.findByIdAndDelete(req.params.shopid);

		res.status(200).json({ message: "shop has been deleted" });
	} catch (err) {
		next(err);
	}
};

const getAllShops = async (req, res, next) => {
	const search = req.query.search || "";
	try {
		const shops = await Shop
			.find
			// $or: [
			// 	{ shopName: { $regex: search, $options: "i" } },
			// 	// { categories: { $regex: search, $options: "i" } },
			// ],
			()
			.sort({ timestamp: -1 });

		res.status(200).json({ shops, message: "all shops" });
	} catch (err) {
		next(err);
	}
};

const uploadShopImage = async (req, res, next) => {
	const file = req.file;
	const filename = `${uuidv4()}.${file.mimetype.split("/")[1]}`;
	if (!file) {
		return next(createError(404, "upload file!"));
	}

	try {
		const params = {
			Bucket: process.env.BUCKET,
			Key: `shops/${filename}`,
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
	getOtpForShopVerification,
	addShop,
	getAllShops,
	getShop,
	editShopDetails,
	deleteShop,
	uploadShopImage,
};
