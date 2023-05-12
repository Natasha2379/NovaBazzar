const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
	{
		buyerId: {
			type: String,
			default: "",
		},
		productId: {
			type: String,
			default: "",
		},
		shopId: {
			type: String,
			default: "",
		},
		sellerId: {
			type: String,
			default: "",
		},
		status: {
			type: String,
			default: "",
		},
		quantity: {
			type: Number,
			default: 1,
		},
		price: {
			type: Number,
			required: 0,
		},
	},
	{ timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
