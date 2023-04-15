const express = require("express");
const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const sellerRouter = require("./routes/seller");
const productRouter = require("./routes/product");
const shopRouter = require("./routes/shop");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const URI = process.env.ATLAS_URI;

mongoose.set("strictQuery", false);
mongoose
	.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(console.log("connected to mongodb"))
	.catch((err) => console.log(err));

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//routes
app.use("/api/sellers", sellerRouter);
app.use("/api/products", productRouter);
app.use("/api/shops", shopRouter);

//error handler
app.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || "something went wrong!!!";
	return res.status(status).json({
		message,
	});
});

app.listen(PORT, () => {
	console.log(`app is running on port ${PORT}`);
});
