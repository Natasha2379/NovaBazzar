import React from "react";
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
// import { getAllProductsDetails } from "../../services/api";

const FeaturedProducts = () => {
    // const [products, setProducts] = useState();
    // console.log(products);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const res = await getAllProductsDetails("", {
    //                 sort: "price",
    //                 order: "desc",
    //             }, );
    //             setProducts(res.data.products);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchProducts();
    // }, []);

    return (
        <div className="featured-products flex column">
            <div className="kirana ">
                <div className="heading">
                    <h2>Kirana shop popular product categories</h2>
                </div>
                <div className="categories flex align-center wrap">
                    <Link
                        to={`search/?ptype=FruitsAndVegetables`}
                        className="products-category link"
                    >
                        <img src={Grocery} alt="" />
                        <p>Fruits & Vegetables</p>
                    </Link>
                    <Link
                        to={`search/?ptype=ColdDrinksAndJuice`}
                        className="products-category link"
                    >
                        <img src={Drinks} alt="" />
                        <p>Drink Items</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Cleaning Essentials`}
                        className="products-category link"
                    >
                        <img src={CleaningAccessories} alt="" />
                        <p>Cleaning Essentials</p>
                    </Link>
                    <Link
                        to={`search/?ptype=BreakfastAndInstantFood`}
                        className="products-category link"
                    >
                        <img src={Instantfood} alt="" />
                        <p>Breakfast And Instant Food</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Daily,BreadAndegg`}
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
                        to={`search/?ptype=T-ShirtsAndShirts`}
                        className="products-category link"
                    >
                        <img src={Men} alt="" />
                        <p>T-shirts & Shirts</p>
                    </Link>
                    <Link
                        to={`search/?ptype=TopsAndTees`}
                        className="products-category link"
                    >
                        <img src={Women} alt="" />
                        <p>Tops & Tees</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Footwear`}
                        className="products-category link"
                    >
                        <img src={Footwear} alt="" />
                        <p>Footware</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Watches`}
                        className="products-category link"
                    >
                        <img src={Watches} alt="" />
                        <p>Watches</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Accessories`}
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
                        to={`search/?ptype=HaircuttingAndcolor`}
                        className="products-category link"
                    >
                        <img src={haircut} alt="" />
                        <p>Hair cut & color</p>
                    </Link>
                    <Link
                        to={`search/?ptype=FacialAndCleanup`}
                        className="products-category link"
                    >
                        <img src={facecare} alt="" />
                        <p>Face care</p>
                    </Link>
                    <Link
                        to={`search/?ptype=ThreadingAndFacewax`}
                        className="products-category link"
                    >
                        <img src={threading} alt="" />
                        <p>Threading & Waxing</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Weddingspecial`}
                        className="products-category link"
                    >
                        <img src={wedding} alt="" />
                        <p>Wedding Special</p>
                    </Link>
                    <Link
                        to={`search/?ptype=ManicureAndPedicure`}
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
                        to={`search/?ptype=HeadphonesandSmartWatches`}
                        className="products-category link"
                    >
                        <img src={headphones} alt="" />
                        <p>Headphones & Smart Watches</p>
                    </Link>
                    <Link
                        to={`search/?ptype=SmartTelevisionsAndSpeakers`}
                        className="products-category link"
                    >
                        <img src={tv} alt="" />
                        <p>Smart televisions & Speakers</p>
                    </Link>
                    <Link
                        to={`search/?ptype=WashingMachinesAndRefrigators`}
                        className="products-category link"
                    >
                        <img src={machine} alt="" />
                        <p>Washing Machine & Refrigators</p>
                    </Link>
                    <Link
                        to={`search/?ptype=AirConditionersAndFansAndAirCoolers`}
                        className="products-category link"
                    >
                        <img src={fans} alt="" />
                        <p>Air conditioner,Cooler & Fans</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Cameras`}
                        className="products-category link"
                    >
                        <img src={moblap} alt="" />
                        <p>Cameras</p>
                    </Link>
                </div>
            </div>

            <div className="medical ">
                <div className="heading">
                    <h2>Medical shop popular product categories</h2>
                </div>
                <div className="categories flex align-center wrap">
                    <Link
                        to={`search/?ptype=VitaminsAndSupplements`}
                        className="products-category link"
                    >
                        <img src={Vitamins} alt="" />
                        <p>Vitamins,Nutrisions & Supplements</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Ayruveda`}
                        className="products-category link"
                    >
                        <img src={aryuveda} alt="" />
                        <p>Aryuveda</p>
                    </Link>
                    <Link
                        to={`search/?ptype=HealthcareDevices`}
                        className="products-category link"
                    >
                        <img src={devices} alt="" />
                        <p>Health care devices</p>
                    </Link>
                    <Link
                        to={`search/?ptype=PersonalCare`}
                        className="products-category link"
                    >
                        <img src={care} alt="" />
                        <p>Personal & Home care</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Homeopathy`}
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
