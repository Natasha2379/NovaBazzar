import React, { useState } from "react";
import styles from "./shop.module.scss";

import Topbar from "../../../components/TopBar/Topbar";
import ShopBanner from "../../../components/ShopBanner/ShopBanner";
import MyShop from "../../../components/MyShop/MyShop";
// import MyBusiness from "../../../components/MyBusiness/MyBusiness";
import AddProduct from "../../../components/AddProduct/AddProduct";

const Shop = () => {
    const [activeItem, setActiveItem] = useState("myshop");

    return (
        <div className={styles.shopContainer}>
            <Topbar />
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
                    // onClick={() => setActiveItem("mybusiness")}
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
            {/* {activeItem === "mybusiness" && <MyBusiness />} */}
            {activeItem === "addproduct" && <AddProduct />}
        </div>
    );
};

export default Shop;
