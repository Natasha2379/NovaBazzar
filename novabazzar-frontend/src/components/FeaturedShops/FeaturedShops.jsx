import React from "react";
import "./FeaturedShops.scss";
import Kirana from "../../assets/kiranashop.jpg";
import Electronics from "../../assets/elecronics-img.png";
import Clothes from "../../assets/clothes-img.avif";
import Medicines from "../../assets/medicines.avif";
import haircut from "../../assets/haircut.png";

const FeaturedShops = () => {
    return (
        <div className="featured-shops flex align-center">
            <div className="shop-box">
                <img src={Kirana} alt="" />
                <p>Kirana shop</p>
            </div>
            <div className="shop-box">
                <img src={Medicines} alt="" />
                <p>Medical shop</p>
            </div>
            <div className="shop-box">
                <img src={Clothes} alt="" />
                <p>Clothes shop</p>
            </div>
            <div className="shop-box">
                <img src={haircut} alt="" />
                <p>Parlour </p>
            </div>
            <div className="shop-box">
                <img src={Electronics} alt="" />
                <p>Electronics shop</p>
            </div>
        </div>
    );
};

export default FeaturedShops;
