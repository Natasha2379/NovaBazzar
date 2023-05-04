import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";

const Navbar = (props) => {
    const user = useSelector(selectUserData);

    return (
        <div className="navbar flex align-center space">
            <div className="main ">
                <Link to="/" className="logo link">
                    NovaBazzar
                </Link>
            </div>
            <Link to="/search" className="search-bar flex align-center link">
                <span>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                    type="text"
                    placeholder="Search shops/Products in your area"
                    onChange={(e) => props.setSearch(e.target.value)}
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
