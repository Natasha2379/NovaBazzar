import React, { useEffect, useState } from "react";
import "./SellerProfile.scss";
import image from "../../../assets/sellerLogin.jpg";

import SellerBussiness from "../../../components/ShopComponents/sellerProfileParts/SellerBussiness/SellerBussiness";
import EditShopProfile from "../../../components/ShopComponents/sellerProfileParts/ProfileArea/EditShopProfile";
import { getShopOfUser } from "../../../services/api";
import { useSelector } from "react-redux";
import { selectUser_ID } from "../../../redux/slices/userSlice";

const SellerProfile = () => {
    const userid = useSelector(selectUser_ID);
    const [active, setActive] = useState("MyBusiness");
    const [shop, setShop] = useState();

    const fetchShop = async () => {
        try {
            if (userid) {
                const { data } = await getShopOfUser(userid);
                setShop(data.shop);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchShop();
    }, [userid]);
    return (
        <div className="sellerAccountPage">
            <h2>My Shop Profile page</h2>
            <img src={image} alt="" />
            <div className="shop-banner-details flex align-center space">
                <div className="shop-name">{shop?.shopName}</div>
                <div className="shop-type">{shop?.shopType}</div>
                <div className="shop-location">
                    {shop?.location}, {shop?.city}, {shop?.state}
                </div>
            </div>
            <div className="shop-details-area flex ">
                <ul className="SellerTabs flex column">
                    <li
                        onClick={() => setActive("MyBusiness")}
                        className={
                            active === "MyBusiness" ? "activeTab" : "Tab"
                        }
                    >
                        {" "}
                        My Business
                    </li>

                    <li
                        onClick={() => setActive("editProfile")}
                        className={
                            active === "editProfile" ? "activeTab" : "Tab"
                        }
                    >
                        {" "}
                        Edit Shop Profile
                    </li>
                </ul>
                <div className="details">
                    {active === "MyBusiness" && <SellerBussiness />}
                    {active === "editProfile" && (
                        <EditShopProfile
                            shop={shop}
                            setShop={setShop}
                            fetchShop={fetchShop}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SellerProfile;
