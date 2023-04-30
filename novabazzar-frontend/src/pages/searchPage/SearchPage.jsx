import React, { useState } from "react";
import "./SearchPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import ShopCard from "../../components/shopCard/ShopCard";
import ProductCard from "../../components/ProductCard/Product";

const SearchPage = () => {
    const [activeItem, setActiveItem] = useState("shops");

    return (
        <div className="searchpage">
            <Navbar />
            <div className="searchsection">
                <div className="top-section">
                    <div className="recent-searches ">
                        <h2>Recent Searches</h2>
                        <div className="recent-choose flex align-center wrap ">
                            <span className="recents">
                                <span>
                                    <i className="fa-regular fa-clock"></i>
                                </span>
                                <span>Clothes shops</span>
                                <span>
                                    <i className="fa fa-xmark"></i>
                                </span>
                            </span>
                            <span className="recents">
                                <span>
                                    <i className="fa-regular fa-clock"></i>
                                </span>
                                <span>Kutri</span>
                                <span>
                                    <i className="fa fa-xmark"></i>
                                </span>
                            </span>
                            <span className="recents">
                                <span>
                                    <i className="fa-regular fa-clock"></i>
                                </span>
                                <span>Mango</span>
                                <span>
                                    <i className="fa fa-xmark"></i>
                                </span>
                            </span>
                            <span className="recents">
                                <span>
                                    <i className="fa-regular fa-clock"></i>
                                </span>
                                <span>HeadPhones</span>
                                <span>
                                    <i className="fa fa-xmark"></i>
                                </span>
                            </span>
                            <span className="recents">
                                <span>
                                    <i className="fa-regular fa-clock"></i>
                                </span>
                                <span>HeadPhones</span>
                                <span>
                                    <i className="fa fa-xmark"></i>
                                </span>
                            </span>
                            <span className="recents">
                                <span>
                                    <i className="fa-regular fa-clock"></i>
                                </span>
                                <span>HeadPhones</span>
                                <span>
                                    <i className="fa fa-xmark"></i>
                                </span>
                            </span>
                            <span className="recents">
                                <span>
                                    <i className="fa-regular fa-clock"></i>
                                </span>
                                <span>HeadPhones</span>
                                <span>
                                    <i className="fa fa-xmark"></i>
                                </span>
                            </span>
                            <span className="recents">
                                <span>
                                    <i className="fa-regular fa-clock"></i>
                                </span>
                                <span>HeadPhones</span>
                                <span>
                                    <i className="fa fa-xmark"></i>
                                </span>
                            </span>
                            <span className="recents">
                                <span>
                                    <i className="fa-regular fa-clock"></i>
                                </span>
                                <span>HeadPhones</span>
                                <span>
                                    <i className="fa fa-xmark"></i>
                                </span>
                            </span>
                            <span className="recents">
                                <span>
                                    <i className="fa-regular fa-clock"></i>
                                </span>
                                <span>HeadPhones</span>
                                <span>
                                    <i className="fa fa-xmark"></i>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
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
        </div>
    );
};

export default SearchPage;
