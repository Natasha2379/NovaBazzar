import React, { useEffect } from "react";
import "./FeaturedProducts.scss";

// kirana
import Grocery from "../../assets/fruits-veg.jpg";
import Drinks from "../../assets/drinks.jpg";
import CleaningAccessories from "../../assets/cleaning-items2.jpg";
import Instantfood from "../../assets/instant-food.jpg";
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

const FeaturedProducts = () => {
    // const [products, setProducts] = useState();
    // console.log(products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // const res = await getAllProductsDetail();
                // console.log(res);
                // setProducts(res.data.products);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="featured-products flex column">
            <div className="kirana flex align-center">
                <div className="products-category">
                    <img src={Grocery} alt="" />
                    <p>Grocery Items</p>
                </div>
                <div className="products-category">
                    <img src={Drinks} alt="" />
                    <p>Drink Items</p>
                </div>
                <div className="products-category">
                    <img src={CleaningAccessories} alt="" />
                    <p>Cleaning Essentials</p>
                </div>
                <div className="products-category">
                    <img src={Instantfood} alt="" />
                    <p>Instant Foods</p>
                </div>
                <div className="products-category">
                    <img src={Dailyitems} alt="" />
                    <p>Morning Items</p>
                </div>
            </div>

            <div className="clothes flex align-center">
                <div className="products-category">
                    <img src={Men} alt="" />
                    <p>Men</p>
                </div>
                <div className="products-category">
                    <img src={Women} alt="" />
                    <p>Women</p>
                </div>
                <div className="products-category">
                    <img src={Footwear} alt="" />
                    <p>Footware</p>
                </div>
                <div className="products-category">
                    <img src={Watches} alt="" />
                    <p>Watches</p>
                </div>
                <div className="products-category">
                    <img src={Fashion} alt="" />
                    <p>Fashion Accessories</p>
                </div>
            </div>
            <div className="salon flex align-center">
                <div className="products-category">
                    <img src={haircut} alt="" />
                    <p>Hair cut & color</p>
                </div>
                <div className="products-category">
                    <img src={facecare} alt="" />
                    <p>Face care</p>
                </div>
                <div className="products-category">
                    <img src={threading} alt="" />
                    <p>Threading & Waxing</p>
                </div>
                <div className="products-category">
                    <img src={wedding} alt="" />
                    <p>Wedding Special</p>
                </div>
                <div className="products-category">
                    <img src={menicure} alt="" />
                    <p>Menicure & Pedicure</p>
                </div>
            </div>
            <div className="electronics flex align-center">
                <div className="products-category">
                    <img src={headphones} alt="" />
                    <p>Headphones & Smart Watches</p>
                </div>
                <div className="products-category">
                    <img src={tv} alt="" />
                    <p>Smart televisions & Speakers</p>
                </div>
                <div className="products-category">
                    <img src={machine} alt="" />
                    <p>Washing Machine & Refrigators</p>
                </div>
                <div className="products-category">
                    <img src={fans} alt="" />
                    <p>Air conditioner,Cooler & Fans</p>
                </div>
                <div className="products-category">
                    <img src={moblap} alt="" />
                    <p>Moblie & Computers</p>
                </div>
            </div>

            <div className="medical flex align-center">
                <div className="products-category">
                    <img src={Vitamins} alt="" />
                    <p>Vitamins,Nutrisions & Supplements</p>
                </div>
                <div className="products-category">
                    <img src={aryuveda} alt="" />
                    <p>Aryuveda</p>
                </div>
                <div className="products-category">
                    <img src={devices} alt="" />
                    <p>Health care devices</p>
                </div>
                <div className="products-category">
                    <img src={care} alt="" />
                    <p>Personal & Home care</p>
                </div>
                <div className="products-category">
                    <img src={homapathy} alt="" />
                    <p>Homapathy</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
