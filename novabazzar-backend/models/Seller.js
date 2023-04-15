const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SellerSchema = new Schema(
	{
		name: {
			type: String,
			default: "",
		},
		username: {
			type: String,
			unique: true,
			required: true,
		},
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
	},
	{ timestamps: true }
);

const Seller = mongoose.model("Seller", SellerSchema);

module.exports = Seller;
