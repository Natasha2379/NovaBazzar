import React, { useState } from "react";
import styles from "./addProduct.module.scss";
import { addProduct, uploadProductImage } from "../../services/api";

const AddProduct = () => {
    const [categories, setCategories] = useState("");
    const [name, setName] = useState("");
    const [coverImage, setCoverImage] = useState();
    // const [galleryImages, setGalleryImages] = useState();
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

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

    const handleAddProduct = async () => {
        const productData = {
            categories,
            name,
            coverImage,
            quantity,
            price,
        };

        try {
            await addProduct(productData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.addProductContainer}>
            <form className={styles.addProductForm} onSubmit={handleAddProduct}>
                <div className={styles.addProductHeading}>
                    Add Product to you Shop
                </div>
                <div className={styles.addProductDesc}>
                    Follow some simple steps and add your products to your
                    online shop easily
                </div>
                <input
                    type="text"
                    className={styles.addProductInput}
                    onChange={(e) => setCategories(e.target.value)}
                    placeholder="Enter Product Category"
                />
                <input
                    type="text"
                    className={styles.addProductInput}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Product Name"
                />

                <div className={styles.addProductSubHeading}>
                    Product Cover Image
                </div>
                <div
                    className={styles.addProductImageInputContainer}
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
                        className={styles.addProductImageInput}
                        id="coverImage"
                        accept="image/*"
                        onChange={handleCoverImageChange}
                    />
                    <span className={styles.addProductImageText}>
                        Add Image
                    </span>
                </div>
                <div className={styles.addProductSubHeading}>
                    Product Gallery Images (limit 5)
                </div>
                <div
                    className={styles.addProductImageInputContainer}
                    onClick={handleProductGalleryImageUpload}
                >
                    <input
                        type="file"
                        className={styles.addProductImageInput}
                        id="productGallery"
                        multiple
                        accept="image/*"
                    />
                    <span className={styles.addProductImageText}>
                        Add Image
                    </span>
                </div>

                <input
                    type="number"
                    className={styles.addProductInput}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter Quanitity"
                />
                <input
                    type="number"
                    className={styles.addProductInput}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter Price"
                />
                <button type="submit" className={styles.addProductSubmitButton}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
