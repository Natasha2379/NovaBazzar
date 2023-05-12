const Order = require("../models/Order");
const { createError } = require("../utils/Error");

const addOrder = async (req, res, next) => {
	const buyerId = req.body.buyerId;
	const items = req.body.items;

	try {
		items.map(async (item) => {
			const newOrderData = {
				buyerId,
				productId: item.productId,
				shopId: item.shopId,
				sellerId: item.sellerId,
				quantity: item.quantity,
				price: item.price,
				status: "Pending",
			};
			const newOrder = new Order(newOrderData);
			await newOrder.save();
		});

		return res.status(200).json({
			message: "Order Placed!",
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
	const { userId } = req.body;

	try {
		let updatedOrder;

		const order = await Order.findOne({ _id: req.params.orderid });
		if (!order) return next(createError(404, "order not found!"));

		if (order.sellerId === userId) {
			updatedOrder = {
				...order._doc,
				sellerId: "",
			};
		}

		if (order.buyerId === userId) {
			updatedOrder = {
				...order._doc,
				buyerId: "",
			};
		}

		await Order.findByIdAndUpdate(
			req.params.orderid,
			{ $set: updatedOrder },
			{ new: true }
		);

		res.status(200).json({ message: "order has been deleted" });
	} catch (err) {
		next(err);
	}
};

const changeStatusOfOrder = async (req, res, next) => {
	const { status } = req.body;
	try {
		const order = await Order.findOne({ _id: req.params.orderid });
		if (!order) return next(createError(404, "order not found!"));

		const updatedOrder = {
			...order._doc,
			status,
		};

		await Order.findByIdAndUpdate(
			req.params.orderid,
			{ $set: updatedOrder },
			{ new: true }
		);

		res.status(200).json({ message: "order has been cancelled" });
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

const getAllOrdersOfSeller = async (req, res, next) => {
	try {
		const orders = await Order.find({
			shopId: req.params.shopid,
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
	changeStatusOfOrder,
	deleteOrder,
	getAllOrdersOfUser,
	getAllOrdersOfSeller,
};
