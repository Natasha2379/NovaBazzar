import React, { useEffect, useState } from "react";
import "./ShopBanner.scss";
import bannerImage from "../../../assets/banner.jpg";
import { getShopDetails } from "../../../services/api";

const ShopBanner = () => {
    const shopId = window.location.pathname.split("/")[2];
    const [shopDetails, setShopDetails] = useState();

    useEffect(() => {
        const fetchShop = async () => {
            try {
                const { data } = await getShopDetails(shopId);
                setShopDetails(data.shop);
            } catch (error) {
                console.log(error);
            }
        };
        fetchShop();
    }, []);

    return (
        <div className="shopBanner flex align-center ">
            <div className="shop-img">
                <img src={bannerImage} alt="" />
            </div>
            <div className="shopkepperDetails flex column ">
                <div className="shop-name">{shopDetails?.shopName}</div>
                <div className="shopkepper-name">{shopDetails?.fullName}</div>
                <div className="shop-type">{shopDetails?.type}</div>
                <div className="shop-location">
                    {shopDetails?.location}, {shopDetails?.city},{" "}
                    {shopDetails?.state}
                </div>
                <div className="shop-status">
                    {shopDetails?.open ? (
                        <i className="fa-solid fa-unlock"></i>
                    ) : (
                        <i className="fa-solid fa-lock"></i>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopBanner;
