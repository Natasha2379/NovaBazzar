const express = require("express");
const router = express.Router();

const {
	addOrder,
	getOrder,
	editOrderDetails,
	deleteOrder,
	getAllOrdersOfUser,
	getAllOrdersOfSeller,
	changeStatusOfOrder,
} = require("../controllers/order");

//ADD A ORDER
router.post("/add", addOrder);

//GET A ORDER
router.get("/order/:orderid", getOrder);

//EDIT ORDER DETAILS
router.put("/order/:orderid", editOrderDetails);

//CHANGE STATUS ORDER DETAILS
router.put("/status/:orderid", changeStatusOfOrder);

//DELETE ORDER
router.put("/delete/:orderid", deleteOrder);

//GET ALL ORDERS OF A USER
router.get("/user-order/:userid", getAllOrdersOfUser);

//GET ALL ORDERS OF A SELLER
router.get("/seller-order/:userid", getAllOrdersOfSeller);

module.exports = router;
