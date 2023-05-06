import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer flex space ">
            <div className="row flex ">
                <Link to="/" className="logo link">
                    NovaBazzar
                </Link>
            </div>
            <div className="row flex column">
                <div className="footer-heading">Site Map</div>
                <Link to="/" className="link">
                    Home
                </Link>
                <Link to="/search" className="link">
                    Products
                </Link>
                <Link to="/search" className="link">
                    Shops
                </Link>
                <Link to="/seller/addshop" className="link">
                    Be a Partner
                </Link>
                <Link to="/" className="link">
                    About
                </Link>
            </div>
            <div className="row flex column">
                <div className="footer-heading">Get in touch</div>
                <Link to="/" className="link">
                    Instagram
                </Link>
                <Link to="/" className="link">
                    Facebook
                </Link>
                <Link to="/" className="link">
                    Twitter
                </Link>
                <Link to="/" className="link">
                    Linkedin
                </Link>
                <Link to="/" className="link">
                    Whatsapp
                </Link>
            </div>
        </div>
    );
};

export default Footer;
