import React, { useEffect, useState } from "react";
import "./SellerNav.scss";
import { Link } from "react-router-dom";
import { getShopDetails } from "../../../services/api";
import { useSelector } from "react-redux";
import { selectUser_ID } from "../../../redux/slices/userSlice";

const SellerNav = () => {
    const userId = useSelector(selectUser_ID);
    const shopId = window.location.pathname.split("/")[2];
    const [shop, setShop] = useState();

    useEffect(() => {
        const fetchShop = async () => {
            try {
                const { data } = await getShopDetails(shopId);
                setShop(data.shop);
            } catch (error) {
                console.log(error);
            }
        };
        fetchShop();
    }, []);

    return (
        <div className="seller-navbar flex align-center space">
            <Link to="/" className="logo link">
                NOVABAZZAR
            </Link>
            {shop?.userId === userId && (
                <Link to="/sellerprofile" className="seller-account link">
                    Edit Shop
                </Link>
            )}
        </div>
    );
};

export default SellerNav;
