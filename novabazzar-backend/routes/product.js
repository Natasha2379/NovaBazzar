const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
	addProduct,
	getProduct,
	getAllProducts,
	editProductDetails,
	deleteProduct,
	uploadProductImage,
} = require("../controllers/product");

const memoStorage = multer.memoryStorage();

const upload = multer({ memoStorage });

//ADD A PRODUCT
router.post("/add", addProduct);

//GET ALL PRODUCTS
router.get("/", getAllProducts);

//GET PRODUCT
router.get("/product/:productid", getProduct);

//EDIT PRODUCT DETAILS
router.put("/product/:productid", editProductDetails);

//DELETE PRODUCT
router.delete("/product/:productid", deleteProduct);

//UPLOAD PRODUCT PICTURE
router.post(
	"/upload-product-image",
	upload.single("product-image"),
	uploadProductImage
);

module.exports = router;
