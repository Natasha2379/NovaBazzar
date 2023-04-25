import React from "react";
import "./SellerLogin.scss";

import OpenShop from "../../../components/OpenShop/OpenShop";
import Navbar from "../../../components/navbar/Navbar";

const SellerLogin = () => {
    return (
        <div className="sellerAccountPage">
            <Navbar />
            <div className="seller-main-section ">
                <OpenShop />
            </div>
        </div>
    );
};

export default SellerLogin;
