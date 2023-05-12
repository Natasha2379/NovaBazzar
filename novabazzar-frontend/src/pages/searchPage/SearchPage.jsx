import React, { useEffect, useState } from "react";
import "./SearchPage.scss";
import Navbar from "../../components/Navbar/Navbar";
import ShopCard from "../../components/shopCard/ShopCard";
import Product from "../../components/productCard/Product";
import Footer from "../../components/Footer/Footer";
import { getAllProductsDetails, getAllShopsDetails } from "../../services/api";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";

const SearchPage = () => {
    const [favourites, setFavourites] = useState([]);
    const user = useSelector(selectUserData);
    const [userLocation, setUserLocation] = useState("");
    useEffect(() => {
        const userLocation = localStorage.getItem("location");
        if (userLocation) {
            setUserLocation(userLocation);
        }
    }, []);

    const queryString = window.location.search;
    const queryParams = new URLSearchParams(queryString);
    const shoptype = queryParams.get("stype");
    const producttype = queryParams.get("ptype");

    const [activeItem, setActiveItem] = useState();
    const [search, setSearch] = useState("");
    const [stype, setsType] = useState(shoptype);
    const [ptype, setpType] = useState(shoptype);
    const [shops, setShops] = useState();
    const [products, setProducts] = useState();
    const [sort, setSort] = useState({ sort: "price", order: "desc" });

    useEffect(() => {
        console.log(search, stype, userLocation);
        const fetchShops = async () => {
            try {
                const res = await getAllShopsDetails(
                    search,
                    stype,
                    userLocation,
                );
                setShops(res.data.shops);
            } catch (error) {
                console.log(error);
            }
        };
        fetchShops();
        setsType(shoptype);
        setpType(producttype);
        if (ptype) {
            setActiveItem("products");
        } else {
            setActiveItem("shops");
        }
    }, [search, stype, ptype, producttype, shoptype, userLocation]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getAllProductsDetails(search, sort, ptype);
                setProducts(res.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
        setsType(shoptype);
        setpType(producttype);
        if (ptype) {
            setActiveItem("products");
        } else {
            setActiveItem("shops");
        }
    }, [search, stype, ptype, sort, producttype, shoptype, userLocation]);

    useEffect(() => {
        setFavourites(user?.favourites);
    }, [user]);

    return (
        <div className="searchpage">
            <Navbar
                search={search}
                setSearch={setSearch}
                userLocation={userLocation}
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
                        <div style={{ cursor: "pointer" }}>
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
                    </ul>

                    <div className="result-section flex wrap">
                        {activeItem === "shops" && (
                            <div>
                                {userLocation && (
                                    <div className="selected-shops flex wrap">
                                        {shops?.map((shop) => (
                                            <ShopCard
                                                shop={shop}
                                                key={shop._id}
                                            />
                                        ))}
                                    </div>
                                )} 
                                {/* <div className="shopResult flex wrap">
                                    {shops?.map((shop) => (
                                        <ShopCard shop={shop} key={shop._id} />
                                    ))}
                                </div> */}
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
