import React, { useState } from "react";
import "./SearchPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import ShopCard from "../../components/shopCard/ShopCard";
import ProductCard from "../../components/ProductCard/Product";
import Footer from "../../components/Footer/Footer";
const SearchPage = () => {
    const [activeItem, setActiveItem] = useState("shops");

    return (
        <div className="searchpage">
            <Navbar />
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
                            Shops(100+)
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
                            Products(579)
                        </li>
                    </ul>

                    <div className="result-section">
                        {activeItem === "shops" && <ShopCard />}
                        {activeItem === "products" && <ProductCard />}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SearchPage;
