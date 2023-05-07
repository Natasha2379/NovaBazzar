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
        <div className="featured-shops flex align-center wrap">
            <Link to={`search/?stype=Kirana shop`} className="shop-box link">
                <img src={Kirana} alt="" />
                <p>Kirana shop</p>
            </Link>
            <Link to={`search/?stype=Medical shop`} className="shop-box link">
                <img src={Medicines} alt="" />
                <p>Medical shop</p>
            </Link>
            <Link to={`search/?stype=Clothes shop`} className="shop-box link">
                <img src={Clothes} alt="" />
                <p>Clothes shop</p>
            </Link>
            <Link to={`search/?stype=Parlour shop`} className="shop-box link">
                <img src={haircut} alt="" />
                <p>Parlour shop</p>
            </Link>
            <Link to={`search/?stype=Electronics shop`} className="shop-box link">
                <img src={Electronics} alt="" />
                <p>Electronics shop</p>
            </Link>
        </div>
    );
};

export default FeaturedShops;
