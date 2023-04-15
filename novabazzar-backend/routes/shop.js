const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
	addShop,
	getShop,
	getAllShops,
	editShopDetails,
	deleteShop,
	uploadShopImage,
} = require("../controllers/shop");

const memoStorage = multer.memoryStorage();

const upload = multer({ memoStorage });

//ADD A PRODUCT
router.post("/add", addShop);

//GET ALL PRODUCTS
router.get("/", getAllShops);

//GET PRODUCT
router.get("/shop/:shopid", getShop);

//EDIT PRODUCT DETAILS
router.put("/shop/:shopid", editShopDetails);

//DELETE PRODUCT
router.delete("/shop/:shopid", deleteShop);

//UPLOAD PRODUCT PICTURE
router.post(
	"/upload-shop-image",
	upload.single("shop-image"),
	uploadShopImage
);

module.exports = router;
