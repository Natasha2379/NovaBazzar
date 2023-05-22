import React, { useState } from "react";
import "./AddProduct.scss";
import { addProduct, uploadProductImage } from "../../../services/api";
import { useSelector } from "react-redux";
import { selectUser_ID } from "../../../redux/slices/userSlice";
import {
    ClothesProductCategoryData,
    ElectronicsProductCategoryData,
    KiranaProductCategoryData,
    MedicalProductCategoryData,
    ParlourProductCategoryData,
} from "../CategoryData";

const AddProduct = (props) => {
    const userId = useSelector(selectUser_ID);
    const shopId = window.location.pathname.split("/")[2];

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
        if (
            !categories ||
            !name ||
            !coverImage ||
            galleryImages.length === 0 ||
            !desc ||
            !quantity ||
            !price
        ) {
            window.alert("kindly fill all details");
            return;
        }
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
            location: props.shop?.location,
        };

        try {
            await addProduct(productData);
            window.location.reload();
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
                    {props.shop?.shopType === "Kiranashop" &&
                        KiranaProductCategoryData.KiranaProductCategories.map(
                            (category, indx) => (
                                <option
                                    key={indx}
                                    value={category.replaceAll(" ", "")}
                                >
                                    {category}
                                </option>
                            ),
                        )}
                    {props.shop?.shopType === "Clothesshop" &&
                        ClothesProductCategoryData.ClothesProductCategories.map(
                            (category, indx) => (
                                <option
                                    key={indx}
                                    value={category.replaceAll(" ", "")}
                                >
                                    {category}
                                </option>
                            ),
                        )}
                    {props.shop?.shopType === "Medicalshop" &&
                        MedicalProductCategoryData.MedicalProductCategories.map(
                            (category, indx) => (
                                <option
                                    key={indx}
                                    value={category.replaceAll(" ", "")}
                                >
                                    {category}
                                </option>
                            ),
                        )}
                    {props.shop?.shopType === "Electronicsshop" &&
                        ElectronicsProductCategoryData.ElectronicsProductCategories.map(
                            (category, indx) => (
                                <option
                                    key={indx}
                                    value={category.replaceAll(" ", "")}
                                >
                                    {category}
                                </option>
                            ),
                        )}
                    {props.shop?.shopType === "Parlourshop" &&
                        ParlourProductCategoryData.ParlourProductCategories.map(
                            (category, indx) => (
                                <option
                                    key={indx}
                                    value={category.replaceAll(" ", "")}
                                >
                                    {category}
                                </option>
                            ),
                        )}
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
                    <div className="images-section flex align-center ">
                        <div
                            className="addProductImageInputContainer"
                            onClick={handleProductGalleryImageUpload}
                            style={{
                                backgroundImage: `url(${galleryImages[0]})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <span className="gallery-img ">
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
