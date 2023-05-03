import React, { useState } from "react";
import "./AddProduct.scss";
import { addProduct, uploadProductImage } from "../../../services/api";
import { useSelector } from "react-redux";
import { selectUser_ID } from "../../../redux/slices/userSlice";
// import ProductCategoryData from "../CategoryData";

const AddProduct = () => {
    const userId = useSelector(selectUser_ID);
    const shopId = location.pathname.split("/")[2];

    const [categories, setCategories] = useState("");
    const [name, setName] = useState("");
    const [coverImage, setCoverImage] = useState();
    const [galleryImages, setGalleryImages] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");

    const handleCoverImageUpload = () => {
        document.getElementById("coverImage").click();
    };

    const handleProductGalleryImageUpload = () => {
        document.getElementById("productGallery").click();
    };

    const handleCoverImageChange = async (e) => {
        try {
            const formData = new FormData();
            formData.append("product-image", e.target.files[0]);
            const res = await uploadProductImage(formData);
            setCoverImage(res.data.url);
        } catch (error) {
            console.log(error);
        }
    };

    const handleGalleryImageChange = async (e) => {
        try {
            const formData = new FormData();
            formData.append("product-image", e.target.files[0]);
            console.log([...formData]);
            const res = await uploadProductImage(formData);
            console.log(res);
            setGalleryImages([...galleryImages, res.data.url]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddProduct = async () => {
        const productData = {
            categories,
            name,
            coverImage,
            galleryImages,
            desc,
            quantity,
            price,
            userId,
            shopId,
        };

        try {
            await addProduct(productData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="addProductContainer">
            <form
                className="addProductForm flex column"
                // onSubmit={handleAddProduct}
            >
                <div className="addProductHeading">Add Product to you Shop</div>
                <div className="addProductDesc">
                    Follow some simple steps and add your products to your
                    online shop easily
                </div>
                <select
                    name=""
                    id="ProductCategory"
                    className="addProductInput"
                    onChange={(e) => setCategories(e.target.value)}
                >
                    <option value="Select your Category">
                        Select your Category
                    </option>
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Daily ,Bread & egg">
                        Daily ,Bread & egg
                    </option>
                    <option value="Cold Drinks & Juice">
                        Cold Drinks & Juice
                    </option>
                    <option value="Snacks & Munchies">Snacks & Munchies</option>
                    <option value="Breakfast & Instant Food">
                        Breakfast & Instant Food
                    </option>
                    <option value="Sweet Tooth">Sweet Tooth</option>
                    <option value="Bakery & Biscuits">Bakery & Biscuits</option>
                    <option value="Tea ,Coffee & Health Drinks">
                        Tea ,Coffee & Health Drinks
                    </option>
                    <option value="Atta,Rice & Dal">Atta,Rice & Dal</option>
                    <option value="Sauces & Spread">Sauces & Spread</option>
                    <option value="Cleaning Essentials">
                        Cleaning Essentials
                    </option>
                    <option value="Home & Office">Home & Office</option>
                </select>
                <input
                    type="text"
                    className="addProductInput"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Product Name"
                />

                <div className="cover-img">
                    <p className="addProductSubHeading">
                        Add Product Cover Image
                    </p>
                    <div
                        className="addProductImageInputContainer"
                        onClick={handleCoverImageUpload}
                        style={{
                            backgroundImage: `url(${coverImage})`,
                            // backgroundColor: "red",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <input
                            type="file"
                            className="addProductImageInput"
                            id="coverImage"
                            accept="image/*"
                            onChange={handleCoverImageChange}
                        />
                        {!coverImage && (
                            <span className="addProductImageText">
                                <i className="fa-solid fa-upload"></i>
                            </span>
                        )}
                    </div>
                </div>

                <div className="gallery-img-area">
                    <p className="addProductSubHeading">
                        Add Product Gallery Images
                    </p>
                    <div className="images-section flex align-center">
                        <div
                            className="addProductImageInputContainer"
                            onClick={handleProductGalleryImageUpload}
                            style={{
                                backgroundImage: `url(${galleryImages[0]})`,
                                // backgroundColor: "red",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <span className="gallery-img">
                                <input
                                    type="file"
                                    className="addProductImageInput"
                                    id="productGallery"
                                    multiple
                                    onChange={handleGalleryImageChange}
                                    accept="image/*"
                                />
                                {!galleryImages[0] && (
                                    <span className="addProductImageText">
                                        <i className="fa-solid fa-upload"></i>
                                    </span>
                                )}
                            </span>
                        </div>
                        <div
                            className="addProductImageInputContainer"
                            onClick={handleProductGalleryImageUpload}
                            style={{
                                backgroundImage: `url(${galleryImages[1]})`,
                                // backgroundColor: "red",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <span className="gallery-img">
                                <input
                                    type="file"
                                    className="addProductImageInput"
                                    id="productGallery"
                                    multiple
                                    onChange={handleGalleryImageChange}
                                    accept="image/*"
                                />
                                {!galleryImages[1] && (
                                    <span className="addProductImageText">
                                        <i className="fa-solid fa-upload"></i>
                                    </span>
                                )}
                            </span>
                        </div>
                        <div
                            className="addProductImageInputContainer"
                            onClick={handleProductGalleryImageUpload}
                            style={{
                                backgroundImage: `url(${galleryImages[2]})`,
                                // backgroundColor: "red",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <span className="gallery-img">
                                <input
                                    type="file"
                                    className="addProductImageInput"
                                    id="productGallery"
                                    multiple
                                    onChange={handleGalleryImageChange}
                                    accept="image/*"
                                />
                                {!galleryImages[2] && (
                                    <span className="addProductImageText">
                                        <i className="fa-solid fa-upload"></i>
                                    </span>
                                )}
                            </span>
                        </div>
                        <div
                            className="addProductImageInputContainer"
                            onClick={handleProductGalleryImageUpload}
                            style={{
                                backgroundImage: `url(${galleryImages[3]})`,
                                // backgroundColor: "red",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <span className="gallery-img">
                                <input
                                    type="file"
                                    className="addProductImageInput"
                                    id="productGallery"
                                    multiple
                                    onChange={handleGalleryImageChange}
                                    accept="image/*"
                                />
                                {!galleryImages[3] && (
                                    <span className="addProductImageText">
                                        <i className="fa-solid fa-upload"></i>
                                    </span>
                                )}
                            </span>
                        </div>
                        <div
                            className="addProductImageInputContainer"
                            onClick={handleProductGalleryImageUpload}
                            style={{
                                backgroundImage: `url(${galleryImages[4]})`,
                                // backgroundColor: "red",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <span className="gallery-img">
                                <input
                                    type="file"
                                    className="addProductImageInput"
                                    id="productGallery"
                                    multiple
                                    onChange={handleGalleryImageChange}
                                    accept="image/*"
                                />
                                {!galleryImages[4] && (
                                    <span className="addProductImageText">
                                        <i className="fa-solid fa-upload"></i>
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="product-description">
                    <textarea
                        name=""
                        id=""
                        cols="20"
                        rows="10"
                        placeholder="Write something about Product in 100 words only"
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <input
                    type="number"
                    className="addProductInput"
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter Quanitity"
                />
                <input
                    type="number"
                    className="addProductInput"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter Price"
                />
                <button
                    type="button"
                    onClick={handleAddProduct}
                    className="addProductSubmitButton"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
