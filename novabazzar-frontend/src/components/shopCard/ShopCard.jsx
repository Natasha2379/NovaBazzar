import React from "react";
import "./ShopCard.scss";
import image from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const ShopCard = (props) => {
    return (
        <div className="shops flex align-center wrap ">
            <Link
                to={`/shop/${props.shop._id}`}
                className="shop-card flex column link"
            >
                <div className="shop-img">
                    <img src={image} alt="" />
                </div>
                <div className="shop-detail flex column">
                    <div className="col flex align-center">
                        <h3>{props.shop.shopName}</h3>
                        <h4>{props.shop.shopType}</h4>
                    </div>
                    <div className="col flex align-center">
                        <p>
                            {props.shop.location} {props.shop.city}
                        </p>
                        <div className="shop-status">
                            {props.shop?.open ? (
                                <i className="fa-solid fa-unlock"></i>
                            ) : (
                                <i className="fa-solid fa-lock"></i>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ShopCard;
