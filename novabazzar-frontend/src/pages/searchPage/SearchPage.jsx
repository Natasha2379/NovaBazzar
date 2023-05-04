import React, { useEffect, useState } from "react";
import "./SearchPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import ShopCard from "../../components/shopCard/ShopCard";
import ProductCard from "../../components/ProductCard/Product";
import Footer from "../../components/Footer/Footer";
import { getAllProductsDetails, getAllShopsDetails } from "../../services/api";

const SearchPage = () => {
    const queryString = window.location.search;
    const queryParams = new URLSearchParams(queryString);
    const paramValue = queryParams.get("type");

    const [activeItem, setActiveItem] = useState("shops");
    const [search, setSearch] = useState("");
    const [type, setType] = useState(paramValue);
    const [shops, setShops] = useState();
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchProductsAndShops = async () => {
            try {
                const res = await getAllShopsDetails(search, type);
                const res2 = await getAllProductsDetails(search);
                setShops(res.data.shops);
                setProducts(res2.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProductsAndShops();
        setType(paramValue);
    }, [search, type, paramValue]);

    return (
        <div className="searchpage">
            <Navbar search={search} setSearch={setSearch} />
            <div className="searchsection">
                <div className="shops-items-section">
                    <ul className="flex abs-center">
                        <li
                            onClick={() => setActiveItem("shops")}
                            className={
                                activeItem === "shops"
                                    ? "activeit"
                                    : "notactive"
                            }
                        >
                            {" "}
                            Shops{shops?.length}+
                        </li>
                        <li
                            onClick={() => setActiveItem("products")}
                            className={
                                activeItem === "products"
                                    ? "activeit"
                                    : "notactive"
                            }
                        >
                            {" "}
                            Products{products?.length}+
                        </li>
                    </ul>

                    <div className="result-section">
                        {activeItem === "shops" &&
                            shops?.map((shop) => (
                                <ShopCard shop={shop} key={shop._id} />
                            ))}
                        {activeItem === "products" &&
                            products?.map((product) => (
                                <ProductCard
                                    product={product}
                                    key={product._id}
                                />
                            ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SearchPage;
