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
            </div>
            <div className="row flex column">
                <div className="footer-heading">Get in touch</div>
                <a
                    href="https://www.instagram.com/novabazzar_official/"
                    className="link"
                >
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://twitter.com/novabazzar" className="link">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/mona-nagar-5a3274208/"
                    className="link"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                    href="https://chat.whatsapp.com/D62ZElwxBmY7gb3K9U0bl5"
                    className="link"
                >
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;
