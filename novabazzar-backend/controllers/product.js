const Product = require("../models/Product");
const { createError } = require("../utils/Error");
const { s3 } = require("../utils/awsS3");
const { v4: uuidv4 } = require("uuid");

const addProduct = async (req, res, next) => {
	const name = req.body.name;
	const desc = req.body.desc;
	const categories = req.body.categories;
	const coverImage = req.body.coverImage;
	const galleryImages = req.body.galleryImages;
	const shopId = req.body.shopId;
	const userId = req.body.userId;
	const quantity = req.body.quantity;
	const price = req.body.price;
	const location = req.body.location;

	const newProductData = {
		name,
		desc,
		categories,
		shopId,
		userId,
		coverImage,
		galleryImages,
		quantity,
		price,
		location,
	};

	const newProduct = new Product(newProductData);

	try {
		const product = await newProduct.save();

		return res.status(200).json({
			message: "Product Added Successfully!",
			product,
		});
	} catch (err) {
		next(err);
	}
};

const getProduct = async (req, res, next) => {
	try {
		const product = await Product.findOne({ _id: req.params.productid });

		if (!product) return next(createError(404, "product not found!"));

		res.status(200).json({ product, message: "product details" });
	} catch (err) {
		next(err);
	}
};

const editProductDetails = async (req, res, next) => {
	const name = req.body.name;
	const desc = req.body.desc;
	const categories = req.body.categories;
	const coverImage = req.body.coverImage;
	const galleryImages = req.body.galleryImages;
	const quantity = req.body.quantity;
	const price = req.body.price;
	try {
		const product = await Product.findOne({ _id: req.params.productid });

		if (!product) return next(createError(404, "product not found!"));

		const updatedProduct = {
			...product._doc,
			name,
			desc,
			categories,
			coverImage,
			galleryImages,
			quantity,
			price,
		};

		const latestProduct = await Product.findByIdAndUpdate(
			req.params.productid,
			{ $set: updatedProduct },
			{ new: true }
		);

		return res
			.status(200)
			.json({ message: "product updated", product: latestProduct });
	} catch (err) {
		next(err);
	}
};

const deleteProduct = async (req, res, next) => {
	try {
		await Product.findByIdAndDelete(req.params.productid);

		res.status(200).json({ message: "product has been deleted" });
	} catch (err) {
		next(err);
	}
};

const getAllProducts = async (req, res, next) => {
	const search = req.query.search || "";
	let location = req.query.location || "";

	let sort = req.query.sort || "price";
	req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
	let sortBy = {};
	if (sort[1]) {
		sortBy[sort[0]] = sort[1];
	} else {
		sortBy[sort[0]] = "asc";
	}

	let typeFilter;
	if (req.query.type != "null" && req.query.type != "undefined") {
		typeFilter = req.query.type;
	} else {
		typeFilter = "all";
	}

	if (location === "null" || location === "undefined") {
		location = "";
	}

	const types = [
		"LaptopsAndDesktopsAndComputerAccessories",
		"Headphones",
		"SmartWearables",
		"StylingDevices",
		"Cameras",
		"Tablets",
		"MobileAccessories",
		"SpeakersAndVideo",
		"GamingAccessories",
		"TVsAndSmartTelevisions",
		"WashingMachines",
		"KitchenAppliances",
		"AirConditionersAndFansAndAirCoolers",
		"HomeAppliances",
		"MicrowaceOvens",
		"HaircuttingAndcolor",
		"ManicureAndPedicure",
		"ThreadingAndFace wax",
		"FacialAndCleanup",
		"BleachAndDetan",
		"Weddingspecial",
		"Waxing",
		"Facecare",
		"Shave/beardgrooming",
		"VitaminsAndSupplements",
		"NutritionalDrinks",
		"PersonalCare",
		"Ayruveda",
		"PainRelief",
		"Homeopathy",
		"HealthCondition",
		"AccessoriesAndWearables",
		"DiabeticCare",
		"MotherandBabyCare",
		"HealthFoodandDrinks",
		"HealthcareDevices",
		"HomeCare",
		"SkinCare",
		"PetCare",
		"Jeans",
		"T-ShirtsAndShirts",
		"Trousers",
		"KurtaAndSets",
		"Accessories",
		"Dresses",
		"TopsAndTees",
		"KurtiAndSets",
		"Sarees",
		"HeelsAndFlats",
		"Footwear",
		"FruitsAndVegetables",
		"Atta,RiceAndDal",
		"HomeAndOffice",
		"Daily,BreadAndegg",
		"ColdDrinksAndJuice",
		"SnacksAndMunchies",
		"BreakfastAndInstantFood",
		"Tea,CoffeeAndHealthDrinks",
		"SaucesAndSpread",
		"CleaningEssentials",
		"SweetTooth",
		"BakeryAndBiscuits",
	];

	typeFilter === "all" ? (typeFilter = [...types]) : (typeFilter = typeFilter);

	try {
		const products = await Product.find({
			$and: [
				{ name: { $regex: search, $options: "i" } },
				{ categories: typeFilter },
				{ location: { $regex: location, $options: "i" } },
			],
		}).sort(sortBy);

		res.status(200).json({ products, message: "all products" });
	} catch (err) {
		next(err);
	}
};

const getAllShopProducts = async (req, res, next) => {
	const search = req.query.search || "";
	let location = req.query.location || "";

	let typeFilter;
	if (req.query.type) {
		typeFilter = req.query.type;
	} else {
		typeFilter = "all";
	}

	let sort = req.query.sort || "price";
	req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);
	let sortBy = {};
	if (sort[1]) {
		sortBy[sort[0]] = sort[1];
	} else {
		sortBy[sort[0]] = "asc";
	}

	if (location === "null" || location === "undefined") {
		location = "";
	}

	const types = [
		"LaptopsAndDesktopsAndComputerAccessories",
		"Headphones",
		"SmartWearables",
		"StylingDevices",
		"Cameras",
		"Tablets",
		"MobileAccessories",
		"SpeakersAndVideo",
		"GamingAccessories",
		"TVsAndSmartTelevisions",
		"WashingMachines",
		"KitchenAppliances",
		"AirConditionersAndFansAndAirCoolers",
		"HomeAppliances",
		"MicrowaceOvens",
		"HaircuttingAndcolor",
		"ManicureAndPedicure",
		"ThreadingAndFace wax",
		"FacialAndCleanup",
		"BleachAndDetan",
		"Weddingspecial",
		"Waxing",
		"Facecare",
		"Shave/beardgrooming",
		"VitaminsAndSupplements",
		"NutritionalDrinks",
		"PersonalCare",
		"Ayruveda",
		"PainRelief",
		"Homeopathy",
		"HealthCondition",
		"AccessoriesAndWearables",
		"DiabeticCare",
		"MotherandBabyCare",
		"HealthFoodandDrinks",
		"HealthcareDevices",
		"HomeCare",
		"SkinCare",
		"PetCare",
		"Jeans",
		"T-ShirtsAndShirts",
		"Trousers",
		"KurtaAndSets",
		"Accessories",
		"Dresses",
		"TopsAndTees",
		"KurtiAndSets",
		"Sarees",
		"HeelsAndFlats",
		"Footwear",
		"FruitsAndVegetables",
		"Atta,RiceAndDal",
		"HomeAndOffice",
		"Daily,BreadAndegg",
		"ColdDrinksAndJuice",
		"SnacksAndMunchies",
		"BreakfastAndInstantFood",
		"Tea,CoffeeAndHealthDrinks",
		"SaucesAndSpread",
		"CleaningEssentials",
		"SweetTooth",
		"BakeryAndBiscuits",
	];

	typeFilter === "all" ? (typeFilter = [...types]) : (typeFilter = typeFilter);

	try {
		const products = await Product.find({
			$and: [
				{ shopId: req.params.shopid },
				{ name: { $regex: search, $options: "i" } },
				{ categories: typeFilter },
				{ location: { $regex: location, $options: "i" } },
			],
		}).sort(sortBy);

		res.status(200).json({ products, message: "shop products" });
	} catch (err) {
		next(err);
	}
};

const uploadProductImage = async (req, res, next) => {
	const file = req.file;
	const filename = `${uuidv4()}.${file.mimetype.split("/")[1]}`;
	if (!file) {
		return next(createError(404, "upload file!"));
	}

	try {
		const params = {
			Bucket: process.env.BUCKET,
			Key: `${filename}`,
			Body: file.buffer,
		};

		// Uploading files to the bucket
		s3.upload(params, function (err, data) {
			if (err) {
				next(err);
			}

			console.log(`File uploaded successfully. ${data?.Location}`);
			return res.status(200).json({
				message: "image uploaded",
				url: data?.Location,
			});
		});
	} catch (err) {
		next(err);
	}
};

module.exports = {
	addProduct,
	getAllProducts,
	getAllShopProducts,
	getProduct,
	editProductDetails,
	deleteProduct,
	uploadProductImage,
};
