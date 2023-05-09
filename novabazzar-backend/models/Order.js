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
		quantity: {
			type: String,
			default: "",
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
