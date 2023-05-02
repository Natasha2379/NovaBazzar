import React, { useEffect, useState } from "react";
import styles from "./featuredProducts.module.scss";
import ProductCart from "./ProductCard/ProductCard";
import { getAllProductsDetails } from "../../services/api";

const FeaturedProducts = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getAllProductsDetails();
                console.log(res);
                setProducts(res.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className={styles.featuredProductsMainContainer}>
            <div className={styles.featuredProductsHeading}>
                Some Main Products
            </div>
            <div className={styles.featuredProductsContainer}>
                {products?.map((product) => (
                    <ProductCart key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
