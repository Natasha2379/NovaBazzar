const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
	{
		name: {
			type: String,
			default: "",
		},
		desc: {
			type: String,
			default: "",
		},
		userId: {
			type: String,
			default: "",
		},
		shopId: {
			type: String,
			default: "",
		},
		categories: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		coverImage: {
			type: String,
			default: "",
		},
		galleryImages: {
			type: [String],
			default: [],
		},
		quantity: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
