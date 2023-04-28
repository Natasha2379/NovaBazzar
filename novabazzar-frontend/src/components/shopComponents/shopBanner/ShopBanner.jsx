import React from "react";
import "./ShopBanner.scss";
import bannerImage from "../../../assets/banner.jpg";

const ShopBanner = () => {
    return (
        <div className="shopBanner flex align-center ">
            <div className="shop-img">
                <img src={bannerImage} alt="" />
            </div>
            <div className="shopkepperDetails flex column ">
                <div className="shop-name">Multan store</div>
                <div className="shopkepper-name">Bablu tiwari</div>
                <div className="shop-type">Kirana shop</div>
                <div className="shop-location">Yamalpuri,jaipaur,Rajasthan</div>
                <div className="shop-status">
                    <button>Open</button>
                </div>
            </div>
        </div>
    );
};

export default ShopBanner;
