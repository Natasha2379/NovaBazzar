const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		name: {
			type: String,
			default: "",
		},
		// username: {
		// 	type: String,
		// 	unique: true,
		// 	// required: true,
		// },
		email: {
			type: String,
			unique: true,
			default: "",
		},
		phone: {
			type: String,
			unique: true,
			default: "",
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: "buyer",
		},
		profile_picture: {
			type: String,
			default: "",
		},
		favourites: {
			type: [Object],
			default: [],
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
