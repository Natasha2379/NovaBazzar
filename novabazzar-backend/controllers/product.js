const Product = require("../models/Product");
const { createError } = require("../utils/Error");
const { s3 } = require("../utils/awsS3");
const { v4: uuidv4 } = require("uuid");

const addProduct = async (req, res, next) => {
	const name = req.body.name;
	const categories = req.body.categories.split(",");
	const coverImage = req.body.coverImage;
	const quantity = req.body.quantity;
	const price = req.body.price;

	const newProductData = {
		name,
		categories,
		coverImage,
		quantity,
		price,
	};

	const newProduct = new Product(newProductData);

	try {
		const product = await newProduct.save();

		return res.status(200).json({
			message: "Product Added Successfully!",
			product,
		});
	} catch (err) {
		console.log(err);
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
	try {
		const product = await Product.findOne({ _id: req.params.productid });

		if (!product) return next(createError(404, "product not found!"));

		const categories = req.body.categories.split(",");

		const updatedProduct = {
			...product._doc,
			name: req.body.name,
			categories,
			quantity: req.body.quantity,
			price: req.body.price,
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

	try {
		const products = await Product.find({
			$or: [
				{ name: { $regex: search, $options: "i" } },
				// { categories: { $regex: search, $options: "i" } },
			],
		}).sort({ timestamp: -1 });

		res.status(200).json({ products, message: "all products" });
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
			Key: `products/${filename}`,
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
				url: data.Location,
			});
		});
	} catch (err) {
		next(err);
	}
};

module.exports = {
	addProduct,
	getAllProducts,
	getProduct,
	editProductDetails,
	deleteProduct,
	uploadProductImage,
};
