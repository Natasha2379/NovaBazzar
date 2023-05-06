import React, { useEffect, useState } from "react";
import "./Shop.scss";

import ShopBanner from "../../../components/shopComponents/ShopBanner/ShopBanner";
import MyShop from "../../../components/shopComponents/SellerShop/SellerShop";
import MyOrders from "../../../components/shopComponents/SellerOrders/sellerOrders";
import AddProduct from "../../../components/shopComponents/AddProduct/AddProduct";
import SellerNav from "../../../components/shopComponents/SellerNav/SellerNav";
import { getShopDetails } from "../../../services/api";
import { useSelector } from "react-redux";
import { selectUser_ID } from "../../../redux/slices/userSlice";
const Shop = () => {
    const userid = useSelector(selectUser_ID);
    const [activeItem, setActiveItem] = useState("myshop");
    const [shop, setShop] = useState();
    const shopId = window.location.pathname.split("/")[2];

    useEffect(() => {
        const fetchShop = async () => {
            try {
                const res = await getShopDetails(shopId);

                setShop(res.data.shop);
            } catch (error) {
                console.log(error);
            }
        };
        fetchShop();
    }, [shopId]);

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
                        {shop?.userId === userid ? "MyShop" : ""}
                    </li>
                    <li
                        onClick={() => setActiveItem("myorders")}
                        className={
                            activeItem === "myorders"
                                ? "activeShopOption"
                                : "shopOption"
                        }
                    >
                        {shop?.userId === userid ? "My Orders" : ""}
                    </li>
                    <li
                        onClick={() => setActiveItem("addproduct")}
                        className={
                            activeItem === "addproduct"
                                ? "activeShopOption"
                                : " shopOption"
                        }
                    >
                        {shop?.userId === userid ? "Add Product" : ""}
                    </li>
                </ul>
                <div className="shopContent">
                    {activeItem === "myshop" && <MyShop shop={shop} />}
                    {shop?.userId === userid && activeItem === "myorders" && (
                        <MyOrders />
                    )}
                    {shop?.userId === userid &&
                        activeItem === "addproduct" && (
                            <AddProduct shop={shop} />
                        )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
