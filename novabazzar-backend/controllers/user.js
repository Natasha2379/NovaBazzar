const User = require("../models/User");
const { createError } = require("../utils/Error");
const { s3 } = require("../utils/awsS3");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const registerUser = async (req, res, next) => {
	const username = req.body.username;
	const email = req.body.email;
	const phone = req.body.phone;
	const password = await bcrypt.hash(req.body.password, 10);

	const newUserData = {
		name: req.body.name,
		username,
		email,
		phone,
		password,
		profile_picture: "",
	};

	const newUser = new User(newUserData);

	try {
		const emailCheck = await User.findOne({ email });
		if (emailCheck) return next(createError(409, "email already registered!"));

		const phoneCheck = await User.findOne({ phone });
		if (phoneCheck)
			return next(createError(409, "phone no. already registered!"));

		const usernameCheck = await User.findOne({ username });
		if (usernameCheck) return next(createError(409, "username not available!"));

		const user = await newUser.save();

		const token = jwt.sign(
			{
				name: username,
				email: email,
				user_id: user._id,
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

const loginUser = async (req, res, next) => {
	const username = req.body.username;
	const pass = req.body.password;
	const email = req.body.email;

	try {
		const user = await User.findOne({
			$or: [{ username }, { email }],
		});

		if (!user) return next(createError(404, "user not found!"));

		const isCorrect = await bcrypt.compare(pass, user.password);

		if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

		const token = jwt.sign(
			{
				name: user.username,
				email: user.email,
				user_id: user._id,
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

const getUser = async (req, res, next) => {
	try {
		const user = await User.findOne({ _id: req.params.userid });

		if (!user) return next(createError(404, "user not found!"));

		res.status(200).json({ user, message: "user details" });
	} catch (err) {
		next(err);
	}
};

const editUserDetails = async (req, res, next) => {
	try {
		const user = await User.findOne({ _id: req.params.userid });

		if (!user) return next(createError(404, "user not found!"));

		const updatedUser = {
			...user._doc,
			name: req.body.name,
			email: req.body.name,
			phone: req.body.phone,
			profile_picture: req.body.profile_pic,
		};

		const latestUser = await User.findByIdAndUpdate(
			req.params.userid,
			{ $set: updatedUser },
			{ new: true }
		);

		return res.status(200).json({ message: "user updated", user: latestUser });
	} catch (err) {
		next(err);
	}
};

const editUserPassword = async (req, res, next) => {
	try {
		const user = await User.findOne({ _id: req.params.userid });

		if (!user) return next(createError(404, "user not found!"));

		if (!req.body.password)
			return next(createError(409, "password cannot be empty!"));

		const hashedPassword = await bcrypt.hash(req.body.password, 10);

		const updatedUser = { ...user._doc, password: hashedPassword };

		const latestUser = await User.findByIdAndUpdate(
			req.params.userid,
			{ $set: updatedUser },
			{ new: true }
		);

		return res.status(200).json({ message: "user updated", user: latestUser });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

const deleteUser = async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.userid);

		res.status(200).json({ message: "user has been deleted" });
	} catch (err) {
		next(err);
	}
};

const getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find().sort({ timestamp: -1 });

		res.status(200).json({ users, message: "all users" });
	} catch (err) {
		next(err);
	}
};

const uploadUsersProfileImage = async (req, res, next) => {
	const file = req.file;
	const filename = `${uuidv4()}.${file.mimetype.split("/")[1]}`;

	if (!file) {
		return next(createError(404, "upload file!"));
	}

	try {
		const params = {
			Bucket: process.env.BUCKET,
			Key: `users/${filename}`,
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
	registerUser,
	loginUser,
	getAllUsers,
	getUser,
	editUserDetails,
	editUserPassword,
	deleteUser,
	uploadUsersProfileImage,
};
