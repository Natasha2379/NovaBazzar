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
                    <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="/" className="link">
                    <i class="fa-brands fa-facebook"></i>
                </Link>
                <Link to="/" className="link">
                    <i class="fa-brands fa-twitter"></i>
                </Link>
                <Link to="/" className="link">
                    <i class="fa-brands fa-linkedin"></i>
                </Link>
                <Link to="/" className="link">
                    <i class="fa-brands fa-whatsapp"></i>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
