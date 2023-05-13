import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";
import { getShopOfUser } from "../../services/api";
import { selectCartItems } from "../../redux/slices/cartSlice";

const Navbar = (props) => {
    const items = useSelector(selectCartItems);
    const user = useSelector(selectUserData);
    const [shop, setShop] = useState();
    const [mobileView, setMobileView] = useState(false);
    console.log(mobileView);

    useEffect(() => {
        const fetchShop = async () => {
            try {
                if (user) {
                    const res = await getShopOfUser(user?._id);
                    setShop(res.data.shop);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchShop();
    }, [user]);

    return (
        <div className="navbar flex align-center column ">
            <div className="top-navbar ">
                <div className="container flex align-center space wrap">
                    <div className="main ">
                        <Link to="/" className="logo link">
                            NovaBazzar
                        </Link>

                        <Link
                            to="/location"
                            className="setLocation link flex align-center"
                        >
                            {props.userLocation ? (
                                <div>
                                    <span>
                                        <i className="fa-solid fa-location-dot"></i>
                                    </span>{" "}
                                    <span>{props.userLocation}</span>
                                </div>
                            ) : (
                                <div>
                                    <span>
                                        <i className="fa-solid fa-location-dot"></i>
                                    </span>
                                    <span className="location">
                                        Select a location
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-angle-down"></i>
                                    </span>
                                </div>
                            )}
                        </Link>
                        {props.userLocation && (
                            <span
                                onClick={() => {
                                    localStorage.removeItem("location");
                                    window.location.reload();
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                clear location
                            </span>
                        )}
                    </div>
                    <i
                        className="fa-solid fa-bars hamburger"
                        onClick={() => setMobileView(!mobileView)}
                    ></i>
                    {mobileView ? (
                        <div className="links flex align-center mobile">
                            <Link to="/buyer/cart" className="link cart">
                                <span className="icon">
                                    <i className="fa-solid fa-shopping-cart"></i>
                                </span>
                                <span className="cart-items">
                                    {items.length && (
                                        <span>{items.length}</span>
                                    )}
                                </span>
                            </Link>
                            {shop ? (
                                <Link
                                    to={`/shop/${shop._id}`}
                                    className="link shop"
                                >
                                    My Shop
                                </Link>
                            ) : (
                                <Link
                                    to="/seller/addshop"
                                    className="link shop"
                                >
                                    Become a Seller
                                </Link>
                            )}
                            {user ? (
                                <Link to="/buyer/profile" className="link">
                                    {user?.name}
                                </Link>
                            ) : (
                                <Link
                                    to="/buyer/register"
                                    className="link createAccount"
                                >
                                    Sign up
                                </Link>
                            )}
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="links flex align-center desktop">
                        <Link to="/buyer/cart" className="link cart">
                            <span className="icon">
                                <i className="fa-solid fa-shopping-cart"></i>
                            </span>
                            <span className="cart-items">
                                {items.length && <span>{items.length}</span>}
                            </span>
                        </Link>
                        {shop ? (
                            <Link
                                to={`/shop/${shop._id}`}
                                className="link shop"
                            >
                                My Shop
                            </Link>
                        ) : (
                            <Link to="/seller/addshop" className="link shop">
                                Become a Seller
                            </Link>
                        )}
                        {user ? (
                            <Link to="/buyer/profile" className="link">
                                {user?.name}
                            </Link>
                        ) : (
                            <Link
                                to="/buyer/register"
                                className="link createAccount"
                            >
                                Sign up
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="bottom-navbar">
                <Link
                    to="/search"
                    className="search-bar flex align-center link"
                >
                    <input
                        type="text"
                        placeholder="Search shops/Products in your area"
                        onChange={(e) => props.setSearch(e.target.value)}
                    />
                    <span className="big-device">Search</span>
                    <span className="mobileSerach">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
