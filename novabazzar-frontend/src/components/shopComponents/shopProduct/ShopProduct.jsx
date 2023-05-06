import React, { useEffect, useState } from "react";
import "./ShopProduct.scss";
import image from "../../../assets/apple.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getShopDetails } from "../../../services/api";

const ShopProduct = (props) => {
    const [shop, setShop] = useState();

    useEffect(() => {
        const fetchShop = async () => {
            try {
                const res = await getShopDetails(props.product.shopId);
                console.log(res.data);
                setShop(res.data.shop);
            } catch (error) {
                console.log(error);
            }
        };
        fetchShop();
    }, [props.product]);

    return (
        <Link
            to={`/productdetail/${props.product._id}`}
            className="shop-product-card"
        >
            <div className="product-img">
                <img src={props.product.coverImage || image} alt="" />
                <span className="fav flex abs-center">
                    <i className="fa fa-heart"></i>
                </span>
            </div>
            <div className="content flex column">
                <div className="product-name">
                    <h3>{props.product.name}</h3>
                </div>
                <div className="price-rating flex space align-center">
                    <h3>₹{props.product.price}kg</h3>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
            </div>
            <div
                to={`/editproduct/${props.product._id}`}
                className="shopProductEditButton "
            >
                Edit
            </div>
        </Link>
    );
};

ShopProduct.propTypes = {
    product: PropTypes.object,
};

export default ShopProduct;
