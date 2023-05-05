import React, { useEffect, useState } from "react";
import styles from "./EditProduct.scss";
import {
    editProductDetails,
    getProductDetails,
    uploadProductImage,
} from "../../../services/api";

const EditProduct = () => {
    const [categories, setCategories] = useState("");
    const [name, setName] = useState("");
    const [coverImage, setCoverImage] = useState();
    // const [galleryImages, setGalleryImages] = useState();
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const product_id = window.location.pathname.split("/")[2];

    const handleCoverImageUpload = () => {
        document.getElementById("coverImage").click();
    };

    const handleProductGalleryImageUpload = () => {
        document.getElementById("productGallery").click();
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductDetails(product_id);
                setName(res?.data?.product.name);
                setPrice(res?.data?.product.price);
                setQuantity(res?.data?.product.quantity);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [product_id]);

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

    const handleEditProduct = async () => {
        const productData = {
            categories,
            name,
            coverImage,
            quantity,
            price,
        };

        try {
            await editProductDetails(product_id, productData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.editProductContainer}>
            <form
                className={styles.editProductForm}
                onSubmit={handleEditProduct}
            >
                <div className={styles.editProductHeading}>
                    Edit Product to you Shop
                </div>
                <div className={styles.editProductDesc}>
                    Follow some simple steps and edit your products to your
                    online shop easily
                </div>
                <input
                    type="text"
                    className={styles.editProductInput}
                    onChange={(e) => setCategories(e.target.value)}
                    placeholder="Enter Product Category"
                    disabled
                />
                <input
                    type="text"
                    className={styles.editProductInput}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Product Name"
                    value={name}
                />

                <div className={styles.editProductSubHeading}>
                    Product Cover Image
                </div>
                <div
                    className={styles.editProductImageInputContainer}
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
                        className={styles.editProductImageInput}
                        id="coverImage"
                        accept="image/*"
                        onChange={handleCoverImageChange}
                    />
                    <span className={styles.editProductImageText}>
                        Edit Image
                    </span>
                </div>
                <div className={styles.editProductSubHeading}>
                    Product Gallery Images (limit 5)
                </div>
                <div
                    className={styles.editProductImageInputContainer}
                    onClick={handleProductGalleryImageUpload}
                >
                    <input
                        type="file"
                        className={styles.editProductImageInput}
                        id="productGallery"
                        multiple
                        accept="image/*"
                    />
                    <span className={styles.editProductImageText}>
                        Edit Image
                    </span>
                </div>

                <input
                    type="number"
                    className={styles.editProductInput}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter Quanitity"
                    value={quantity}
                />
                <input
                    type="number"
                    className={styles.editProductInput}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter Price"
                    value={price}
                />
                <button
                    type="submit"
                    className={styles.editProductSubmitButton}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EditProduct;
