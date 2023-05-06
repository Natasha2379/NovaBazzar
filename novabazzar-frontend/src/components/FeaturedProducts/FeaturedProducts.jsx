import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import { Link } from "react-router-dom";

// kirana
import Grocery from "../../assets/fruits-veg.jpg";
import Drinks from "../../assets/drink-items.jpg";
import CleaningAccessories from "../../assets/cleaning-items2.jpg";
import Instantfood from "../../assets/instant-foods.jpg";
import Dailyitems from "../../assets/morning-items.jpg";

// clothes
import Men from "../../assets/clothes2.png";
import Women from "../../assets/clothes5.png";
import Watches from "../../assets/watche.jpg";
import Footwear from "../../assets/footwear3.jpg";
import Fashion from "../../assets/Fashion-accessories.jpg";

//electronics
import moblap from "../../assets/mob-lap.jpg";
import fans from "../../assets/ac-cooler-fan.jpg";
import machine from "../../assets/wash-friz.jpg";
import tv from "../../assets/tv-speaker.jpg";
import headphones from "../../assets/ear-watch.jpg";

//Medical
import Vitamins from "../../assets/med1.jpg";
import care from "../../assets/med2.jpg";
import devices from "../../assets/med4.jpg";
import aryuveda from "../../assets/aryuveda.jpg";
import homapathy from "../../assets/homapathy.jpg";

//salon
import haircut from "../../assets/haircut.png";
import threading from "../../assets/threading.jpg";
import menicure from "../../assets/menicure.jpg";
import wedding from "../../assets/weddingspecial.jpg";
import facecare from "../../assets/facecare1.jpg";
import { getAllProductsDetails } from "../../services/api";

const FeaturedProducts = () => {
    const [products, setProducts] = useState();
    console.log(products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getAllProductsDetails();
                setProducts(res.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="featured-products flex column">
            <div className="kirana ">
                <div className="heading">
                    <h2>Kirana shop popular product categories</h2>
                </div>
                <div className="categories flex align-center wrap">
                    <Link
                        to={`search/?type=Fruits & Vegetables`}
                        className="products-category link"
                    >
                        <img src={Grocery} alt="" />
                        <p>Fruits & Vegetables</p>
                    </Link>
                    <Link
                        to={`search/?type=Drink Items`}
                        className="products-category link"
                    >
                        <img src={Drinks} alt="" />
                        <p>Drink Items</p>
                    </Link>
                    <Link
                        to={`search/?type=Cleaning Essentials`}
                        className="products-category link"
                    >
                        <img src={CleaningAccessories} alt="" />
                        <p>Cleaning Essentials</p>
                    </Link>
                    <Link
                        to={`search/?type=Instant Foods`}
                        className="products-category link"
                    >
                        <img src={Instantfood} alt="" />
                        <p>Instant Foods</p>
                    </Link>
                    <Link
                        to={`search/?type=Morning Items`}
                        className="products-category link"
                    >
                        <img src={Dailyitems} alt="" />
                        <p>Morning Items</p>
                    </Link>
                </div>
            </div>

            <div className="clothes ">
                <div className="heading">
                    <h2>Fashion shop popular product categories</h2>
                </div>
                <div className="categories flex align-center wrap">
                    <Link
                        to={`search/?type=T-shirts & Shirts`}
                        className="products-category link"
                    >
                        <img src={Men} alt="" />
                        <p>T-shirts & Shirts</p>
                    </Link>
                    <Link
                        to={`search/?type=Tops & Tees`}
                        className="products-category link"
                    >
                        <img src={Women} alt="" />
                        <p>Tops & Tees</p>
                    </Link>
                    <Link
                        to={`search/?type=Footware`}
                        className="products-category link"
                    >
                        <img src={Footwear} alt="" />
                        <p>Footware</p>
                    </Link>
                    <Link
                        to={`search/?type=Watches`}
                        className="products-category link"
                    >
                        <img src={Watches} alt="" />
                        <p>Watches</p>
                    </Link>
                    <Link
                        to={`search/?type=Fashion Accessories`}
                        className="products-category link"
                    >
                        <img src={Fashion} alt="" />
                        <p>Fashion Accessories</p>
                    </Link>
                </div>
            </div>
            <div className="salon ">
                <div className="heading">
                    <h2>Parlour shop popular service categories</h2>
                </div>
                <div className="categories flex align-center wrap">
                    <Link
                        to={`search/?type=Hair cut & color`}
                        className="products-category link"
                    >
                        <img src={haircut} alt="" />
                        <p>Hair cut & color</p>
                    </Link>
                    <Link
                        to={`search/?type=Face care`}
                        className="products-category link"
                    >
                        <img src={facecare} alt="" />
                        <p>Face care</p>
                    </Link>
                    <Link
                        to={`search/?type=Threading & Waxing`}
                        className="products-category link"
                    >
                        <img src={threading} alt="" />
                        <p>Threading & Waxing</p>
                    </Link>
                    <Link
                        to={`search/?type=Wedding Special`}
                        className="products-category link"
                    >
                        <img src={wedding} alt="" />
                        <p>Wedding Special</p>
                    </Link>
                    <Link
                        to={`search/?type=Menicure & Pedicure`}
                        className="products-category link"
                    >
                        <img src={menicure} alt="" />
                        <p>Menicure & Pedicure</p>
                    </Link>
                </div>
            </div>
            <div className="electronics ">
                <div className="heading">
                    <h2>Electronics shop popular product categories</h2>
                </div>
                <div className="categories flex align-center wrap">
                    <Link
                        to={`search/?type=Headphones & Smart Watches`}
                        className="products-category link"
                    >
                        <img src={headphones} alt="" />
                        <p>Headphones & Smart Watches</p>
                    </Link>
                    <Link
                        to={`search/?type=Smart televisions & Speakers`}
                        className="products-category link"
                    >
                        <img src={tv} alt="" />
                        <p>Smart televisions & Speakers</p>
                    </Link>
                    <Link
                        to={`search/?type=Washing Machine & Refrigators`}
                        className="products-category link"
                    >
                        <img src={machine} alt="" />
                        <p>Washing Machine & Refrigators</p>
                    </Link>
                    <Link
                        to={`search/?type=Air conditioner,Cooler & Fans`}
                        className="products-category link"
                    >
                        <img src={fans} alt="" />
                        <p>Air conditioner,Cooler & Fans</p>
                    </Link>
                    <Link
                        to={`search/?type=Moblie & Computers`}
                        className="products-category link"
                    >
                        <img src={moblap} alt="" />
                        <p>Moblie & Computers</p>
                    </Link>
                </div>
            </div>

            <div className="medical ">
                <div className="heading">
                    <h2>Medical shop popular product categories</h2>
                </div>
                <div className="categories flex align-center wrap">
                    <Link
                        to={`search/?type=Vitamins,Nutrisions & Supplements`}
                        className="products-category link"
                    >
                        <img src={Vitamins} alt="" />
                        <p>Vitamins,Nutrisions & Supplements</p>
                    </Link>
                    <Link
                        to={`search/?type=Aryuveda`}
                        className="products-category link"
                    >
                        <img src={aryuveda} alt="" />
                        <p>Aryuveda</p>
                    </Link>
                    <Link
                        to={`search/?type=Health care devices`}
                        className="products-category link"
                    >
                        <img src={devices} alt="" />
                        <p>Health care devices</p>
                    </Link>
                    <Link
                        to={`search/?type=Personal & Home care`}
                        className="products-category link"
                    >
                        <img src={care} alt="" />
                        <p>Personal & Home care</p>
                    </Link>
                    <Link
                        to={`search/?type=Homapathy`}
                        className="products-category link"
                    >
                        <img src={homapathy} alt="" />
                        <p>Homapathy</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
