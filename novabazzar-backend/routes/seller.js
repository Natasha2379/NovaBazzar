const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
	registerSeller,
	loginSeller,
	getSeller,
	getAllSellers,
	editSellerDetails,
	editSellerPassword,
	deleteSeller,
	uploadSellersProfileImage,
} = require("../controllers/seller");

const memoStorage = multer.memoryStorage();

const upload = multer({ memoStorage });

//REGISTER A SELLER
router.post("/register", registerSeller);

//LOGIN SELLER
router.post("/login", loginSeller);

//GET ALL SELLERS
router.get("/", getAllSellers);

//GET SELLER
router.get("/seller/:sellerid", getSeller);

//EDIT SELLER DETAILS
router.put("/seller/:sellerid", editSellerDetails);

//EDIT SELLER PASSWORD
router.put("/seller-password/:sellerid", editSellerPassword);

//DELETE SELLER
router.delete("/seller/:sellerid", deleteSeller);

//UPLOAD SELLER PROFILE
router.post(
	"/upload-profile-image",
	upload.single("profile-image"),
	uploadSellersProfileImage
);

module.exports = router;
