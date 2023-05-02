import React from "react";
import "./ShopProduct.scss";
import image from "../../../assets/apple.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShopProduct = (props) => {
    return (
        <div className="shopProductContainer">
            <div className="prdouct-card">
                <div className="product-img">
                    <img src={image} alt="" />
                    <span className="fav flex abs-center">
                        <i className="fa fa-heart"></i>
                    </span>
                </div>
                <div className="content">
                    <div className="product-name">
                        <h3>Apple</h3>
                    </div>
                    <div className="product-shop-name">
                        <h5>Babli shop,Yakimpur</h5>
                    </div>
                    <div className="price-rating flex space align-center">
                        <h3>₹{45}kg</h3>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <Link
                    to={`/editproduct/${props.product._id}`}
                    className="shopProductEditButton"
                >
                    Edit
                </Link>
            </div>
        </div>
    );
};

ShopProduct.propTypes = {
    product: PropTypes.object,
};

export default ShopProduct;
