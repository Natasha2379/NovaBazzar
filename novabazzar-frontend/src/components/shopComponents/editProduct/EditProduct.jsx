import React, { useEffect, useState } from "react";
import "./EditProduct.scss";
import {
    editProductDetails,
    getProductDetails,
    getShopDetails,
    uploadProductImage,
} from "../../../services/api";
import {
    ClothesProductCategoryData,
    ElectronicsProductCategoryData,
    KiranaProductCategoryData,
    MedicalProductCategoryData,
    ParlourProductCategoryData,
} from "../CategoryData";
// import ProductCategoryData from "../CategoryData";

const AddProduct = () => {
    const productId = window.location.pathname.split("/")[2];

    const [shop, setShop] = useState();
    const [product, setProduct] = useState();
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

    useEffect(() => {
        const fetchShop = async () => {
            try {
                if (product) {
                    const resshop = await getShopDetails(product?.shopId);
                    setShop(resshop.data.shop);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchShop();
    }, [product]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductDetails(productId);
                setProduct(res.data.product);
                setName(res.data.product.name);
                setDesc(res.data.product.desc);
                setCategories(res.data.product.categories);
                setPrice(res.data.product.price);
                setQuantity(res.data.product.quantity);
                setCoverImage(res.data.product.coverImage);
                setGalleryImages(res.data.product.galleryImages);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [productId]);

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
            const res = await uploadProductImage(formData);
            setGalleryImages([...galleryImages, res.data.url]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditProduct = async () => {
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
        };

        try {
            await editProductDetails(product._id, productData);
            window.alert("product updated");
            window.location(`/shop/${product?.shopId}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="addProductContainer">
            <form
                className="addProductForm flex column"
                // onSubmit={handleEditProduct}
            >
                <div className="addProductHeading">Edit Product</div>
                <div className="addProductDesc">
                    Follow some simple steps and add your products to your
                    online shop easily
                </div>
                <select
                    name=""
                    id="ProductCategory"
                    value={categories}
                    className="addProductInput"
                    onChange={(e) => setCategories(e.target.value)}
                >
                    <option value="Select your Category">
                        Select your Category
                    </option>
                    {shop?.shopType === "Kiranashop" &&
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
                    {shop?.shopType === "Clothesshop" &&
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
                    {shop?.shopType === "Medicalshop" &&
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
                    {shop?.shopType === "Electronicsshop" &&
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
                    {shop?.shopType === "Parlourshop" &&
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
                    value={name}
                />

                <div className="cover-img">
                    <p className="addProductSubHeading">
                        Add Product Cover Image{" "}
                        <span
                            onClick={() => setCoverImage("")}
                            styles={{ cursor: "pointer" }}
                        >
                            (remove)
                        </span>
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
                        Add Product Gallery Images{" "}
                        <span
                            onClick={() => setGalleryImages([])}
                            styles={{ cursor: "pointer" }}
                        >
                            (remove all)
                        </span>
                    </p>
                    <div className="images-section flex align-center">
                        <div
                            className="addProductImageInputContainer"
                            onClick={handleProductGalleryImageUpload}
                            style={{
                                backgroundImage: `url(${galleryImages?.at(0)})`,
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
                                {!galleryImages?.at(0) && (
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
                                backgroundImage: `url(${galleryImages?.at(1)})`,
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
                                {!galleryImages?.at(1) && (
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
                                backgroundImage: `url(${galleryImages?.at(2)})`,
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
                                {!galleryImages?.at(2) && (
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
                                backgroundImage: `url(${galleryImages?.at(3)})`,
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
                                {!galleryImages?.at(3) && (
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
                                backgroundImage: `url(${galleryImages?.at(4)})`,
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
                                {!galleryImages?.at(4) && (
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
                        value={desc}
                    ></textarea>
                </div>
                <input
                    type="number"
                    className="addProductInput"
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter Quanitity"
                    value={quantity}
                />
                <input
                    type="number"
                    className="addProductInput"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter Price"
                    value={price}
                />
                <button
                    type="button"
                    onClick={handleEditProduct}
                    className="addProductSubmitButton"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
