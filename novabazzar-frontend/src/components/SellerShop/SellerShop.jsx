import React, { useEffect, useState } from "react";
import styles from "./sellerShop.module.scss";

import { FiSearch } from "react-icons/fi";

import ShopSidebar from "../ShopSidebar/ShopSidebar";
import ShopProduct from "../ShopProduct/ShopProduct";
import { getAllProductsDetails } from "../../services/api";

const MyShop = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getAllProductsDetails(search);
                setProducts(res.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, [search]);

    return (
        <div className={styles.myShopContainer}>
            <div className={styles.searchContainer}>
                <FiSearch className={styles.searchIcon} />

                <input
                    className={styles.search}
                    placeholder={`Search "milk"`}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className={styles.shopProductsContainer}>
                <div className={styles.shopSidebar}>
                    <ShopSidebar />
                </div>
                <div className={styles.shopProducts}>
                    {products?.map((product) => (
                        <ShopProduct key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyShop;
