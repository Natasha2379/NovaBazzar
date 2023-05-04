import React from "react";
import "./FeaturedShops.scss";
import Kirana from "../../assets/kiranashop.jpg";
import Electronics from "../../assets/elecronics-img.png";
import Clothes from "../../assets/clothes-img.avif";
import Medicines from "../../assets/medicines.avif";
import haircut from "../../assets/haircut.png";
import { Link } from "react-router-dom";

const FeaturedShops = () => {
    return (
        <div className="featured-shops flex align-center">
            <Link to={`search/?type=Kirana shop`} className="shop-box">
                <img src={Kirana} alt="" />
                <p>Kirana shop</p>
            </Link>
            <Link to={`search/?type=Medical shop`} className="shop-box">
                <img src={Medicines} alt="" />
                <p>Medical shop</p>
            </Link>
            <Link to={`search/?type=Clothes shop`} className="shop-box">
                <img src={Clothes} alt="" />
                <p>Clothes shop</p>
            </Link>
            <Link to={`search/?type=Parlour shop`} className="shop-box">
                <img src={haircut} alt="" />
                <p>Parlour shop</p>
            </Link>
            <Link to={`search/?type=Electronics shop`} className="shop-box">
                <img src={Electronics} alt="" />
                <p>Electronics shop</p>
            </Link>
        </div>
    );
};

export default FeaturedShops;
