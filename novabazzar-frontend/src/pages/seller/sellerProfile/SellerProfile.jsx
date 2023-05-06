import React, { useState } from "react";
import "./SellerProfile.scss";
import image from "../../../assets/sellerLogin.jpg";

import SellerBussiness from "../../../components/shopComponents/sellerProfileParts/SellerBussiness/SellerBussiness";
import EditShopProfile from "../../../components/shopComponents/sellerProfileParts/ProfileArea/EditShopProfile";

const SellerProfile = () => {
    const [active, setActive] = useState("favorites");
    return (
        <div className="sellerAccountPage">
            <h2>My Shop Profile page</h2>
            <img src={image} alt="" />
            <div className="shop-banner-details flex align-center space">
                <div className="shop-name">My Shop name</div>
                <div className="shop-type">my Shop type</div>
                <div className="shop-location">my Shop location</div>
            </div>
            <div className="shop-details-area flex ">
                <ul className="SellerTabs flex column">
                    <li
                        onClick={() => setActive("favorites")}
                        className={active === "favorites" ? "activeTab" : "Tab"}
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
                    {active === "favorites" && <SellerBussiness />}
                    {active === "editProfile" && <EditShopProfile />}
                </div>
            </div>
        </div>
    );
};

export default SellerProfile;
