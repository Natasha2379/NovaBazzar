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
    const [favouriteIds, setFavouriteIds] = useState([]);
    const user = useSelector(selectUserData);

    const queryString = window.location.search;
    const queryParams = new URLSearchParams(queryString);
    const shoptype = queryParams.get("stype");
    const producttype = queryParams.get("ptype");

    const [activeItem, setActiveItem] = useState("shops");
    const [search, setSearch] = useState("");
    const [stype, setsType] = useState(shoptype);
    const [ptype, setpType] = useState(shoptype);
    const [shops, setShops] = useState();
    const [products, setProducts] = useState();
    const [sort, setSort] = useState({ sort: "price", order: "desc" });

    useEffect(() => {
        const fetchProductsAndShops = async () => {
            try {
                const res = await getAllShopsDetails(search, stype);
                const res2 = await getAllProductsDetails(search, sort, ptype);
                setShops(res.data.shops);
                setProducts(res2.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProductsAndShops();
        setsType(shoptype);
        setpType(producttype);
    }, [search, stype, ptype, sort, producttype, shoptype]);

    useEffect(() => {
        setFavouriteIds(user?.favourites);
    }, [user]);

    return (
        <div className="searchpage">
            <Navbar search={search} setSearch={setSearch} />
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
                                ASC
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
                                DESC
                            </span>
                        </div>
                    </ul>

                    <div className="result-section flex wrap ">
                        {activeItem === "shops" &&
                            shops?.map((shop) => (
                                <ShopCard shop={shop} key={shop._id} />
                            ))}
                        {activeItem === "products" &&
                            products?.map((product) => (
                                <Product
                                    product={product}
                                    key={product._id}
                                    favouriteIds={favouriteIds}
                                    setFavouriteIds={setFavouriteIds}
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
