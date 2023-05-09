import React, { useEffect, useState } from "react";
import "./Shop.scss";

import ShopBanner from "../../../components/ShopComponents/shopBanner/ShopBanner";
import MyShop from "../../../components/ShopComponents/sellerShop/SellerShop";
import MyOrders from "../../../components/ShopComponents/sellerOrders/SellerOrders";
import AddProduct from "../../../components/ShopComponents/addProduct/AddProduct";
import SellerNav from "../../../components/ShopComponents/SellerNav/SellerNav";
import { getOrdersOfShop, getShopDetails } from "../../../services/api";
import { useSelector } from "react-redux";
import { selectUser_ID } from "../../../redux/slices/userSlice";
const Shop = () => {
    const userid = useSelector(selectUser_ID);
    const [activeItem, setActiveItem] = useState("myshop");
    const [orders, setOrders] = useState();
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

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await getOrdersOfShop(shopId);
                setOrders(res.data.orders);
            } catch (error) {
                console.log(error);
            }
        };
        fetchOrders();
    }, []);

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
                    {shop?.userId === userid &&
                        activeItem === "myorders" &&
                        orders?.map((order) => <MyOrders order={order} />)}
                    {shop?.userId === userid && activeItem === "addproduct" && (
                        <AddProduct shop={shop} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shop;
