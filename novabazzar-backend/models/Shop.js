const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShopSchema = new Schema(
	{
		fullName: {
			type: String,
			default: "",
		},
		shopName: {
			type: String,
			default: "",
			required: true,
		},
		shopType: {
			type: String,
			required: true,
			default: "",
		},
		userId: {
			type: String,
			required: true,
			default: "",
		},
		state: {
			type: String,
			default: "",
		},
		city: {
			type: String,
			default: "",
		},
		location: {
			type: String,
			default: "",
		},
		email: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		open: {
			type: String,
			required: true,
			default: true,
		},
	},
	{ timestamps: true }
);

const Shop = mongoose.model("Shop", ShopSchema);

module.exports = Shop;
