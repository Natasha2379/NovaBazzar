import React, { useEffect, useState } from "react";
import "./ShopBanner.scss";
import bannerImage from "../../../assets/dummy-img.jpg";
import { editShopDetails, getShopDetails } from "../../../services/api";
import { useSelector } from "react-redux";
import { selectUser_ID } from "../../../redux/slices/userSlice";

const ShopBanner = () => {
    const userid = useSelector(selectUser_ID);
    const shopId = window.location.pathname.split("/")[2];
    const [shopDetails, setShopDetails] = useState();

    const handleUpdateShop = async (status) => {
        try {
            if (userid === shopDetails?.userId) {
               await editShopDetails(shopDetails._id, {
                    open: status,
                });
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    };

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
                <img src={shopDetails?.shopImage || bannerImage} alt="" />
            </div>
            <div className="shopkepperDetails flex column ">
                <div className="shop-name">{shopDetails?.shopName}</div>
                <div className="shopkepper-name">{shopDetails?.fullName}</div>
                <div className="shop-type">{shopDetails?.shoptype}</div>
                <div className="shop-location">{shopDetails?.location}</div>

                <div className="shop-status">
                    {shopDetails?.open ? (
                        <div className="flex align-center">
                            <i
                                className="fa-solid fa-unlock"
                                onClick={() => handleUpdateShop(false)}
                            ></i>
                        </div>
                    ) : (
                        <div className="flex align-center">
                            <i
                                className="fa-solid fa-lock"
                                onClick={() => handleUpdateShop(true)}
                            ></i>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopBanner;
