import React, { useState } from "react";
import "./Shop.scss";

import ShopBanner from "../../../components/shopComponents/shopBanner/ShopBanner";
import MyShop from "../../../components/shopComponents/sellerShop/SellerShop";
import MyBusiness from "../../../components/shopComponents/sellerBussiness/SellerBussiness";
import MyOrders from "../../../components/shopComponents/sellerOrders/SellerOrders";
import AddProduct from "../../../components/shopComponents/addProduct/AddProduct";

const Shop = () => {
    const [activeItem, setActiveItem] = useState("myshop");

    return (
        <div className="shopPage">
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
                        onClick={() => setActiveItem("mybusiness")}
                        className={
                            activeItem === "mybusiness"
                                ? "activeShopOption"
                                : "shopOption"
                        }
                    >
                        My Business
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
                    {activeItem === "mybusiness" && <MyBusiness />}
                    {activeItem === "myorders" && <MyOrders />}
                    {activeItem === "addproduct" && <AddProduct />}
                </div>
            </div>
        </div>
    );
};

export default Shop;
