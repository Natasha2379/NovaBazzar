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

//ADD A SHOP
router.post("/add", addShop);

//GET ALL SHOPS
router.get("/", getAllShops);

//GET SHOP
router.get("/shop/:shopid", getShop);

//EDIT SHOP DETAILS
router.put("/shop/:shopid", editShopDetails);

//DELETE SHOP
router.delete("/shop/:shopid", deleteShop);

//UPLOAD SHOP PICTURE
router.post(
	"/upload-shop-image",
	upload.single("shop-image"),
	uploadShopImage
);

module.exports = router;
