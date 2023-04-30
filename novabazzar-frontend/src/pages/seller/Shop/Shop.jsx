import React, { useState } from "react";
import "./Shop.scss";

import ShopBanner from "../../../components/shopComponents/ShopBanner/shopBanner";
import MyShop from "../../../components/shopComponents/SellerShop/SellerShop";
import MyOrders from "../../../components/shopComponents/SellerOrders/sellerOrders";
import AddProduct from "../../../components/shopComponents/AddProduct/AddProduct";
import SellerNav from "../../../components/shopComponents/SellerNav/SellerNav";
const Shop = () => {
    const [activeItem, setActiveItem] = useState("myshop");

    return (
        <div className="shopPage">
            <SellerNav />
            <ShopBanner />
            <div className="shopMainArea">
                <ul className="shopTabs flex abs-center">
                    <li
                        onClick={() => setActiveItem("myshop")}
                        className={
                            activeItem === "myshop"
                                ? "activeShopOption"
                                : "shopOption"
                        }
                    >
                        {" "}
                        MyShop
                    </li>
                    <li
                        onClick={() => setActiveItem("myorders")}
                        className={
                            activeItem === "myorders"
                                ? "activeShopOption"
                                : "shopOption"
                        }
                    >
                        My Orders
                    </li>
                    <li
                        onClick={() => setActiveItem("addproduct")}
                        className={
                            activeItem === "addproduct"
                                ? "activeShopOption"
                                : " shopOption"
                        }
                    >
                        Add Product
                    </li>
                </ul>
                <div className="shopContent">
                    {activeItem === "myshop" && <MyShop />}
                    {activeItem === "myorders" && <MyOrders />}
                    {activeItem === "addproduct" && <AddProduct />}
                </div>
            </div>
        </div>
    );
};

export default Shop;
