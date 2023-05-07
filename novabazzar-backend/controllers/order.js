const Order = require("../models/Order");
const { createError } = require("../utils/Error");

const addOrder = async (req, res, next) => {
	const buyerId = req.body.buyerId;
	// const shopId = req.body.shopId;
	const userId = req.body.userId;
	const items = req.body.items;
	const totalPrice = req.body.totalPrice;

	const newOrderData = {
		buyerId,
		// shopId,
		userId,
		items,
		totalPrice,
	};

	const newOrder = new Order(newOrderData);

	try {
		const order = await newOrder.save();

		return res.status(200).json({
			message: "Order Added Successfully!",
			order,
		});
	} catch (err) {
		next(err);
	}
};

const getOrder = async (req, res, next) => {
	try {
		const order = await Order.findOne({ _id: req.params.orderid });

		if (!order) return next(createError(404, "order not found!"));

		res.status(200).json({ order, message: "order details" });
	} catch (err) {
		next(err);
	}
};

const editOrderDetails = async (req, res, next) => {
	try {
		const order = await Order.findOne({ _id: req.params.orderid });

		if (!order) return next(createError(404, "order not found!"));

		const updatedOrder = {
			...order._doc,
			items: req.body.items,
			totalPrice: req.body.totalPrice,
		};

		const latestOrder = await Order.findByIdAndUpdate(
			req.params.orderid,
			{ $set: updatedOrder },
			{ new: true }
		);

		return res
			.status(200)
			.json({ message: "order updated", order: latestOrder });
	} catch (err) {
		next(err);
	}
};

const deleteOrder = async (req, res, next) => {
	try {
		await Order.findByIdAndDelete(req.params.orderid);

		res.status(200).json({ message: "order has been deleted" });
	} catch (err) {
		next(err);
	}
};

const getAllOrdersOfUser = async (req, res, next) => {
	try {
		const orders = await Order.find({
			buyerId: req.params.userid,
		}).sort({ timestamp: -1 });

		res.status(200).json({ orders, message: "all orders" });
	} catch (err) {
		next(err);
	}
};

module.exports = {
	addOrder,
	getOrder,
	editOrderDetails,
	deleteOrder,
	getAllOrdersOfUser,
};
