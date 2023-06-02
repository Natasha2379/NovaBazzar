import React from "react";
import "./FeaturedShops.scss";
import Kirana from "../../assets/kiranashop.jpg";
import Electronics from "../../assets/elecronics-img.png";
import Clothes from "../../assets/clothings.jpg";
import Fastfood from "../../assets/northfood.jpg";
import { Link } from "react-router-dom";

const FeaturedShops = () => {
    return (
        <div className="featured-shops flex align-center wrap">
            <Link to={`search/?stype=Fastfoodshop`} className="shop-box link">
                <img src={Fastfood} alt="" />
                <p>Fastfood shops</p>
            </Link>
            <Link to={`search/?stype=Kiranashop`} className="shop-box link">
                <img src={Kirana} alt="" />
                <p>Kirana shops</p>
            </Link>
            <Link to={`search/?stype=Clothesshop`} className="shop-box link">
                <img src={Clothes} alt="" />
                <p>Clothes shops</p>
            </Link>
           
            <Link to={`search/?stype=Electronicsshop`} className="shop-box link">
                <img src={Electronics} alt="" />
                <p>Electronics shops</p>
            </Link>
        </div>
    );
};

export default FeaturedShops;
