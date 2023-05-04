import React, { useEffect, useState } from "react";
import "./Product.scss";
import image from "../../assets/shoes.jpg";
import { getShopDetails } from "../../services/api";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";

const Product = (props) => {
    const user = useSelector(selectUserData);
    const [shop, setShop] = useState();
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const fetchShop = async () => {
            try {
                const res = await getShopDetails(props.product.shopId);
                console.log(res.data);
                setShop(res.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchShop();
        setFavourites(user?.favourites);
    }, [props.product, user]);


    
    return (
        <div className="products flex align-center wrap">
            <div className="prdouct-card link">
                <div className="product-img">
                    <img src={props?.product?.coverImage || image} alt="" />
                    <span
                        className="fav flex abs-center"
                        style={{ backgroundColor: "inherit" }}
                    >
                        {favourites?.includes(props?.product?._id) ? (
                            <i
                                className="fa fa-heart"
                                style={{ color: "red" }}
                            ></i>
                        ) : (
                            <i
                                className="fa fa-heart"
                                style={{ color: "white" }}
                            ></i>
                        )}
                    </span>
                </div>
                <div className="content">
                    <div className="product-name">
                        <h3>{props.product?.name}</h3>
                    </div>
                    <div className="product-shop-name">
                        <h5>
                            {shop?.shopName}, {shop?.location}, {shop?.shopCity}
                            r
                        </h5>
                    </div>
                    <div className="price-rating flex space align-center">
                        <h3>₹ {props.product?.price}kg</h3>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
