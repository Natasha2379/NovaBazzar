const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
	registerUser,
	loginUser,
	getUser,
	getAllUsers,
	editUserDetails,
	editUserPassword,
	deleteUser,
	uploadUsersProfileImage,
} = require("../controllers/user");

const memoStorage = multer.memoryStorage();

const upload = multer({ memoStorage });

//REGISTER A USER
router.post("/register", registerUser);

//LOGIN USER
router.post("/login", loginUser);

//GET ALL USERS
router.get("/", getAllUsers);

//GET USER
router.get("/user/:userid", getUser);

//EDIT USER DETAILS
router.put("/user/:userid", editUserDetails);

//EDIT USER PASSWORD
router.put("/user-password/:userid", editUserPassword);

//DELETE USER
router.delete("/user/:userid", deleteUser);

//UPLOAD USER PROFILE
router.post(
	"/upload-profile-image",
	upload.single("profile-image"),
	uploadUsersProfileImage
);

module.exports = router;
