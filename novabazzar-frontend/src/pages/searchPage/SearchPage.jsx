import React, { useEffect, useState } from "react";
import "./SearchPage.scss";
import Navbar from "../../components/navbar/Navbar";
import ShopCard from "../../components/shopCard/ShopCard";
import Product from "../../components/productCard/Product";
import Footer from "../../components/Footer/Footer";
import { getAllProductsDetails, getAllShopsDetails } from "../../services/api";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";

const SearchPage = () => {
    const [favourites, setFavourites] = useState([]);
    const user = useSelector(selectUserData);
    // const [userLocation, setUserLocation] = useState("");
    const usercity = localStorage.getItem("location");

    const queryString = window.location.search;
    const queryParams = new URLSearchParams(queryString);
    const shoptype = queryParams.get("stype");
    const producttype = queryParams.get("ptype");

    const [activeItem, setActiveItem] = useState();
    const [search, setSearch] = useState("");
    const [shops, setShops] = useState();
    const [products, setProducts] = useState();
    const [sort, setSort] = useState({ sort: "price", order: "desc" });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getAllProductsDetails(
                    search,
                    sort,
                    producttype,
                    usercity
                );
                setProducts(res.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, [search, sort, producttype, usercity]);

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const res = await getAllShopsDetails(
                    search,
                    shoptype,
                    usercity,
                );
                setShops(res.data.shops);
            } catch (error) {
                console.log(error);
            }
        };
        fetchShops();
    }, [search, shoptype, usercity]);

    useEffect(() => {
        if (producttype) {
            setActiveItem("products");
        } else {
            setActiveItem("shops");
        }
    }, []);

    useEffect(() => {
        setFavourites(user?.favourites);
    }, [user]);

    return (
        <div className="searchpage">
            <Navbar
                search={search}
                setSearch={setSearch}
                userLocation={usercity}
            />
            <div className="searchsection">
                <div className="shops-items-section flex  column">
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
                            Shops{`(${shops?.length})`}
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
                            Products{`(${products?.length})`}
                        </li>
                    </ul>
                    {activeItem === "products" && (
                        <div className="ASC_DESC">
                            <span
                                onClick={() =>
                                    setSort({
                                        sort: "price",
                                        order: "asc",
                                    })
                                }
                            >
                                Price low to high
                            </span>{" "}
                            <br />
                            <span
                                onClick={() =>
                                    setSort({
                                        sort: "price",
                                        order: "desc",
                                    })
                                }
                            >
                                Price high to low
                            </span>
                        </div>
                    )}
                    <div className="result-section flex wrap">
                        {activeItem === "shops" && (
                            <div className="shopResult">
                                {
                                    <div className="my-shops flex wrap">
                                        {shops?.map((shop) => (
                                            <ShopCard
                                                shop={shop}
                                                key={shop._id}
                                            />
                                        ))}
                                    </div>
                                }
                            </div>
                        )}
                        {activeItem === "products" &&
                            products?.map((product) => (
                                <Product
                                    product={product}
                                    key={product._id}
                                    favourites={favourites}
                                    setFavourites={setFavourites}
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
