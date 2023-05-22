import React, { useEffect, useState } from "react";
import "./ShopProduct.scss";
import image from "../../../assets/dummy-img.jpg";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import {
    deleteProductDetails,
    editUserFavs,
    getShopDetails,
} from "../../../services/api";
import { useDispatch, useSelector } from "react-redux";
import {
    addUser,
    selectUserData,
    selectUser_ID,
} from "../../../redux/slices/userSlice";
import { addItem } from "../../../redux/slices/cartSlice";

const ShopProduct = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = useSelector(selectUser_ID);
    const user = useSelector(selectUserData);
    const [shop, setShop] = useState();
    const [favouriteIds, setFavouriteIds] = useState([]);

    const handleAddToCart = () => {
        dispatch(
            addItem({
                productId: props.product?._id,
                shopId: props.product?.shopId,
                sellerId: props.product?.userId,
                price: props.product?.price,
                quantity: 1,
            }),
        );
        navigate("/buyer/cart");
    };

    const editfavs = async (favs) => {
        try {
            const res = await editUserFavs(favs, userId);
            dispatch(addUser(res.data.user));
        } catch (error) {
            console.log(error);
        }
    };

    const fetchFavIds = () => {
        user?.favourites?.map((fav) =>
            setFavouriteIds((prev) => [...prev, fav?._id]),
        );
    };

    useEffect(() => {
        fetchFavIds();
    }, [user]);

    // useEffect(() => {
    //     editfavs(favouriteIds);
    // }, []);

    const handleProductDelete = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to delete the product?",
        );

        try {
            if (confirmed) {
                await deleteProductDetails(props.product?._id);
                window.alert("product deleted!!!");
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchShop = async () => {
            try {
                const res = await getShopDetails(props.product?.shopId);
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
                    <span
                        className="delete flex abs-center"
                        onClick={handleProductDelete}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </span>
                ) : (
                    <span></span>
                )}
                <div className="fav">
                    {favouriteIds?.includes(props?.product?._id) ? (
                        <i
                            className="fa fa-heart"
                            style={{ color: "red", zIndex: "99" }}
                            onClick={async () => {
                                props.setFavourites(
                                    props.favourites?.filter(
                                        (item) =>
                                            item?._id !== props.product?._id,
                                    ),
                                );

                                await editfavs(
                                    props.favourites.filter(
                                        (item) =>
                                            item?._id !== props.product?._id,
                                    ),
                                );
                                fetchFavIds();
                                window.location.reload();
                            }}
                        ></i>
                    ) : (
                        <i
                            className="fa fa-heart"
                            style={{ color: "white", zIndex: "99" }}
                            onClick={async () => {
                                props.setFavourites([
                                    ...props.favourites,
                                    props.product,
                                ]);
                                await editfavs([
                                    ...props.favourites,
                                    props.product,
                                ]);
                                // window.location.reload();
                            }}
                        ></i>
                    )}
                </div>
            </div>
            <Link
                to={`/productdetail/${props.product._id}`}
                className="content flex column link"
            >
                <div className="product-name">
                    <h3>{props.product?.name}</h3>
                </div>
                <div className="price-rating flex space align-center">
                    <h3>₹{props.product?.price}</h3>
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
                    className="shopProductEditButton link"
                >
                    Edit
                </Link>
            ) : (
                <div
                    onClick={handleAddToCart}
                    className="shopProductEditButton link"
                >
                    Add
                </div>
            )}
        </div>
    );
};

ShopProduct.propTypes = {
    product: PropTypes.object,
};

export default ShopProduct;
