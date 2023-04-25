import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    // const user = useSelector(selectUserData);
    const [search, setSearch] = useState("");
    console.log(search);
    return (
        <div className="navbar flex align-center space">
            <div className="main ">
                <Link to="/" className="logo link">
                    NovaBazzar
                </Link>
                <div className="setLocation flex align-center">
                    <span>
                        <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <span className="location">Add your location</span>
                    <span>
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </div>
            </div>
            <div className="search-bar flex align-center">
                <span>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                    type="text"
                    placeholder="Search shops/Products"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="links flex align-center">
                <Link to="/cart" className="link">
                    Cart
                </Link>
                <Link to="/seller" className="link">
                    Become a Seller
                </Link>
                <Link to="/account" className="link createAccount">
                    Sign up
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
