import React, { useState } from "react";
import "./Shop.scss";

import ShopBanner from "../../../components/ShopComponents/shopBanner/ShopBanner";
import MyShop from "../../../components/ShopComponents/sellerShop/SellerShop";
import MyOrders from "../../../components/ShopComponents/sellerOrders/SellerOrders";
import AddProduct from "../../../components/ShopComponents/addProduct/AddProduct";
import SellerNav from "../../../components/ShopComponents/SellerNav/SellerNav";
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
