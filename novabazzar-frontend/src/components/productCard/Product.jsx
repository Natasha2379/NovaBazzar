import React, { useEffect, useState } from "react";
import "./Product.scss";
import image from "../../assets/shoes.jpg";
import { editUserFavs, getShopDetails } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUserData } from "../../redux/slices/userSlice";
import { Link } from "react-router-dom";

const Product = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserData);
    const [favouriteIds, setFavouriteIds] = useState([]);
    const [shop, setShop] = useState();

    useEffect(() => {
        const fetchShop = async () => {
            if (props.product?.shopId) {
                try {
                    const res = await getShopDetails(props.product?.shopId);

                    setShop(res.data.shop);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        fetchShop();
    }, [props.product?.shopId, user]);

    const editfavs = async (favs) => {
        try {
            const res = await editUserFavs(favs, user?._id);
            dispatch(addUser(res.data.user));
        } catch (error) {
            console.log(error);
        }
    };

    const fetchFavIds = () => {
        user.favourites?.map((fav) =>
            setFavouriteIds((prev) => [...prev, fav._id]),
        );
    };

    useEffect(() => {
        fetchFavIds();
    }, [user]);

    return (
        <div className="prdouct-card link ">
            <div className="product-img">
                <img src={props?.product?.coverImage || image} alt="" />
                <span
                    className="fav flex abs-center"
                    style={{ backgroundColor: "inherit" }}
                >
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
                </span>
            </div>
            <Link
                to={`/productdetail/${props.product?._id}`}
                className="content"
            >
                <div className="product-name">
                    <h3>{props.product?.name}</h3>
                </div>
                <div className="product-shop-name">
                    <h5>
                        {shop?.shopName},&nbsp;{shop?.location},&nbsp;
                        {shop?.city}
                    </h5>
                </div>
                <div className="price-rating flex space">
                    <h3>
                        ₹{props.product?.price}
                    </h3>
                    <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Product;
