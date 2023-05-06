import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";

const Navbar = (props) => {
    const user = useSelector(selectUserData);

    return (
        <div className="navbar flex align-center column ">
            <div className="top-navbar ">
                <div className="container flex align-center space wrap">
                    <div className="main ">
                        <Link to="/" className="logo link">
                            NovaBazzar
                        </Link>
                    </div>
                    <div className="links flex align-center">
                        <Link to="/buyer/cart" className="link">
                            Cart
                        </Link>
                        <Link to="/seller/addshop" className="link">
                            Become a Seller
                        </Link>
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
                    <span>Search</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
