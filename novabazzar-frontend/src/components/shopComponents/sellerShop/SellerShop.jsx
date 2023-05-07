import React, { useEffect, useState } from "react";
import "./SellerShop.scss";

import ShopSlidebar from "../shopSlidebar/ShopSlidebar";
import ShopProduct from "../shopProduct/ShopProduct";
import { getAllShopProducts } from "../../../services/api";

const MyShop = (props) => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("all");

    const shopId = window.location.pathname.split("/")[2];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getAllShopProducts(shopId, search, type);

                setProducts(res.data.products);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, [search, shopId, type]);

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
                    <ShopSlidebar shop={props.shop} setType={setType} />
                </div>

                <div className="shopProducts flex wrap">
                    {products?.map((product) => (
                        <ShopProduct key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyShop;
