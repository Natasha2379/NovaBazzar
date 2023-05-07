const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
	{
		buyerId: {
			type: String,
			default: "",
		},
		// shopId: {
		// 	type: String,
		// 	default: "",
		// },
		items: {
			type: [Object],
			required: true,
		},
		totalPrice: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
