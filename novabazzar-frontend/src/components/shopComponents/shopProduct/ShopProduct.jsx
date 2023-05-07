import React, { useEffect, useState } from "react";
import "./ShopProduct.scss";
import image from "../../../assets/apple.jpg";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { getShopDetails } from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { selectUser_ID } from "../../../redux/slices/userSlice";
import { addItem } from "../../../redux/slices/cartSlice";

const ShopProduct = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = useSelector(selectUser_ID);
    const [shop, setShop] = useState();

    const handleAddToCart = () => {
        dispatch(
            addItem({
                id: props.product._id,
                price: props.product.price,
                quantity: 1,
            }),
        );
        navigate("/buyer/cart");
    };

    useEffect(() => {
        const fetchShop = async () => {
            try {
                const res = await getShopDetails(props.product.shopId);
                setShop(res.data.shop);
            } catch (error) {
                console.log(error);
            }
        };
        fetchShop();
    }, [props.product]);

    return (
        <div className="shop-product-card">
            <div className="product-img">
                <img src={props.product?.coverImage || image} alt="" />
                {userId === shop?.userId ? (
                    <span className="delete flex abs-center">
                        <i class="fa-solid fa-trash"></i>
                    </span>
                ) : (
                    <span></span>
                )}

                <span className="fav flex abs-center">
                    <i className="fa fa-heart"></i>
                </span>
            </div>
            <Link
                to={`/productdetail/${props.product._id}`}
                className="content flex column"
            >
                <div className="product-name">
                    <h3>{props.product?.name}</h3>
                </div>
                <div className="price-rating flex space align-center">
                    <h3>₹{props.product?.price}kg</h3>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
            </Link>
            {userId === shop?.userId ? (
                <Link
                    to={`/editproduct/${props.product?._id}`}
                    className="shopProductEditButton "
                >
                    Edit
                </Link>
            ) : (
                <div
                    onClick={handleAddToCart}
                    className="shopProductEditButton "
                >
                    ADD+
                </div>
            )}
        </div>
    );
};

ShopProduct.propTypes = {
    product: PropTypes.object,
};

export default ShopProduct;
