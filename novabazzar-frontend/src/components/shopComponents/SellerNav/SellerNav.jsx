import React from "react";
import "./SellerNav.scss";
import { Link } from "react-router-dom";

const SellerNav = () => {
    return (
        <div className="seller-navbar flex align-center space">
            <Link to="/" className="logo link">
                NovaBazzar
            </Link>
            <Link to="/sellerprofile" className="seller-account link">
                My Account
            </Link>
        </div>
    );
};

export default SellerNav;
