import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";

const Navbar = () => {
    const user = useSelector(selectUserData);
    const [search, setSearch] = useState("");
    console.log(search);
    return (
        <div className="navbar flex align-center space">
            <div className="main ">
                <Link to="/" className="logo link">
                    NovaBazzar
                </Link>
                <Link
                    to="/location"
                    className="setLocation link flex align-center"
                >
                    <span>
                        <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <span className="location">Add your location</span>
                    <span>
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </Link>
            </div>
            <Link to="/search" className="search-bar flex align-center link">
                <span>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                    type="text"
                    placeholder="Search shops/Products"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Link>
            <div className="links flex align-center">
                <Link to="/buyer/cart" className="link">
                    Cart
                </Link>
                <Link to="/seller/addshop" className="link">
                    Become a Seller
                </Link>
                {user ? (
                    <Link to="/buyer/profile" className="link">
                        My Account
                    </Link>
                ) : (
                    <Link to="/buyer/register" className="link createAccount">
                        Sign up
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
