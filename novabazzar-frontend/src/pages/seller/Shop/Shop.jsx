import React, { useState } from "react";
import styles from "./shop.module.scss";

import ShopBanner from "../../../components/ShopBanner/ShopBanner";
import MyShop from "../../../components/SellerShop/SellerShop";
import MyBusiness from "../../../components/SellerBussiness/SellerBussiness";
import MyOrders from "../../../components/SellerOrders/SellerOrders";
import AddProduct from "../../../components/AddProduct/AddProduct";

const Shop = () => {
    const [activeItem, setActiveItem] = useState("myshop");

    return (
        <div className={styles.shopContainer}>
            <ShopBanner />
            <ul className={styles.shopOptions}>
                <li
                    onClick={() => setActiveItem("myshop")}
                    className={
                        activeItem === "myshop"
                            ? styles.activeShopOption
                            : styles.shopOption
                    }
                >
                    MyShop
                </li>
                <li
                    onClick={() => setActiveItem("myorders")}
                    className={
                        activeItem === "myorders"
                            ? styles.activeShopOption
                            : styles.shopOption
                    }
                >
                    My Orders
                </li>
                <li
                    onClick={() => setActiveItem("mybusiness")}
                    className={
                        activeItem === "mybusiness"
                            ? styles.activeShopOption
                            : styles.shopOption
                    }
                >
                    My Business
                </li>
                <li
                    onClick={() => setActiveItem("addproduct")}
                    className={
                        activeItem === "addproduct"
                            ? styles.activeShopOption
                            : styles.shopOption
                    }
                >
                    Add Product
                </li>
            </ul>
            {activeItem === "myshop" && <MyShop />}
            {activeItem === "mybusiness" && <MyBusiness />}
            {activeItem === "myorders" && <MyOrders />}
            {activeItem === "addproduct" && <AddProduct />}
        </div>
    );
};

export default Shop;
