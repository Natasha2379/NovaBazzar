import React from "react";
import "./ShopCard.scss";
import image from "../../assets/banner.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser_ID } from "../../redux/slices/userSlice";
import { editShopDetails } from "../../services/api";

const ShopCard = (props) => {
    const userid = useSelector(selectUser_ID);

    const handleUpdateShop = async (status) => {
        try {
            if (userid === props.shop?.userId) {
                await editShopDetails(props.shop._id, { open: status });
                window.location.reload();
            }
    } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="shop-card flex column link">
            <Link className="shop-img" to={`/shop/${props.shop._id}`}>
                <img src={image} alt="" />
            </Link>
            <div className="shop-detail flex column">
                <div className="col flex align-center">
                    <h3>{props.shop.shopName}</h3>
                    <h4>{props.shop.shopType}</h4>
                </div>
                <div className="col flex align-center">
                    <p>
                        {props.shop.location}, {props.shop.city}
                    </p>
                    {
                        <div className="shop-status">
                            {props.shop?.open === true && (
                                <i
                                    className="fa-solid fa-unlock"
                                    onClick={() => handleUpdateShop(false)}
                                ></i>
                            )}
                            {props.shop?.open === false && (
                                <i
                                    className="fa-solid fa-lock"
                                    onClick={() => handleUpdateShop(true)}
                                ></i>
                            )}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ShopCard;
