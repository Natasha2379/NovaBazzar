const express = require("express");
const router = express.Router();

const {
	addOrder,
	getOrder,
	editOrderDetails,
	deleteOrder,
	getAllOrdersOfUser,
} = require("../controllers/order");

//ADD A ORDER
router.post("/add", addOrder);

//GET A ORDER
router.get("/order/:orderid", getOrder);

//EDIT ORDER DETAILS
router.put("/order/:orderid", editOrderDetails);

//DELETE ORDER
router.delete("/order/:orderid", deleteOrder);

//GET ALL ORDERS OF A USER
router.get("/user-order/:userid", getAllOrdersOfUser);

module.exports = router;
