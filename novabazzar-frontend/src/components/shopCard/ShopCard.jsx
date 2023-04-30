import React from "react";
import "./ShopCard.scss";
import image from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const ShopCard = () => {
    return (
        <div className="shops flex align-center wrap ">
            <Link to="/shop/2" className="shop-card flex column link">
                <div className="shop-img">
                    <img src={image} alt="" />
                </div>
                <div className="shop-detail flex column">
                    <div className="col flex align-center">
                        <h3>shop name</h3>
                        <h4>shop type</h4>
                    </div>
                    <div className="col flex align-center">
                        <p>shop location</p>
                        <div className="shop-status">
                            <i className="fa-solid fa-lock"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/shop/2" className="shop-card flex column link">
                <div className="shop-img">
                    <img src={image} alt="" />
                </div>
                <div className="shop-detail flex column">
                    <div className="col flex align-center">
                        <h3>shop name</h3>
                        <h4>shop type</h4>
                    </div>
                    <div className="col flex align-center">
                        <p>shop location</p>
                        <div className="shop-status">
                            <i className="fa-solid fa-unlock"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/shop/2" className="shop-card flex column link">
                <div className="shop-img">
                    <img src={image} alt="" />
                </div>
                <div className="shop-detail flex column">
                    <div className="col flex align-center">
                        <h3>shop name</h3>
                        <h4>shop type</h4>
                    </div>
                    <div className="col flex align-center">
                        <p>shop location</p>
                        <div className="shop-status">
                            <i className="fa-solid fa-unlock"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/shop/2" className="shop-card flex column link">
                <div className="shop-img">
                    <img src={image} alt="" />
                </div>
                <div className="shop-detail flex column">
                    <div className="col flex align-center">
                        <h3>shop name</h3>
                        <h4>shop type</h4>
                    </div>
                    <div className="col flex align-center">
                        <p>shop location</p>
                        <div className="shop-status">
                            <i className="fa-solid fa-unlock"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/shop/2" className="shop-card flex column link">
                <div className="shop-img">
                    <img src={image} alt="" />
                </div>
                <div className="shop-detail flex column">
                    <div className="col flex align-center">
                        <h3>shop name</h3>
                        <h4>shop type</h4>
                    </div>
                    <div className="col flex align-center">
                        <p>shop location</p>
                        <div className="shop-status">
                            <i className="fa-solid fa-lock"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/shop/2" className="shop-card flex column link">
                <div className="shop-img">
                    <img src={image} alt="" />
                </div>
                <div className="shop-detail flex column">
                    <div className="col flex align-center">
                        <h3>shop name</h3>
                        <h4>shop type</h4>
                    </div>
                    <div className="col flex align-center">
                        <p>shop location</p>
                        <div className="shop-status">
                            <i className="fa-solid fa-lock"></i>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/shop/2" className="shop-card flex column link">
                <div className="shop-img">
                    <img src={image} alt="" />
                </div>
                <div className="shop-detail flex column">
                    <div className="col flex align-center">
                        <h3>shop name</h3>
                        <h4>shop type</h4>
                    </div>
                    <div className="col flex align-center">
                        <p>shop location</p>
                        <div className="shop-status">
                            <i className="fa-solid fa-unlock"></i>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ShopCard;
