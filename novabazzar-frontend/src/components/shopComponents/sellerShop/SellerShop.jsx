import React, { useEffect, useState } from "react";
import "./SellerShop.scss";

import ShopSlidebar from "../shopSlidebar/ShopSlidebar";
import ShopProduct from "../shopProduct/ShopProduct";
import { getAllShopProducts } from "../../../services/api";

const MyShop = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const shopId = window.location.pathname.split("/")[2];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getAllShopProducts(shopId);
                console.log(res.data);
                setProducts(res.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, [search]);

    return (
        <div className="myShopContainer flex column">
            <div className="searchContainer flex align-center ">
                <span>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                    type="text"
                    placeholder="Search items"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="shopProductsContainer flex ">
                <div className="shopSidebar">
                    <ShopSlidebar />
                </div>
                <div className="shopProducts">
                    {products?.map((product) => (
                        <ShopProduct key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyShop;
