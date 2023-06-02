import React from "react";
import "./FeaturedProducts.scss";
import { Link } from "react-router-dom";

// kirana
import Grocery from "../../assets/frits.png";
import Drinks from "../../assets/drinks.png";
import CleaningAccessories from "../../assets/cleaning-items.png";
import biscuits from "../../assets/biscits.png";
import Instantfood from "../../assets/instant-food.png";
import Atta from "../../assets/atta-rice-dal.png";
import Breakfast from "../../assets/breakfast-items.png";
import milk from "../../assets/milk-bread.png";
import chocolates from "../../assets/choclates-ice-creams.png";
import tea from "../../assets/Tea__Coffee.png";
import dryfruits from "../../assets/dry-fruits.png";
import pencopy from "../../assets/classmate.png";
import shampoos from "../../assets/kiranas-shampoos.png";
import soaps from "../../assets/body-soaps.png";
import colgate from "../../assets/teeth-care.png";
import healthdrinks from "../../assets/Health__Nutrition-removebg-preview.png";

// clothes
// mens shop
import tshirt from "../../assets/clothes1.png";
import shirt from "../../assets/shirt.jpg";
import kurtas from "../../assets/kurta.png";
import pants from "../../assets/pant.png";
import shorts from "../../assets/shorts.jpg";
import trousers from "../../assets/trouser.jpg";
import jeans from "../../assets/jeans.webp";
import kids from "../../assets/boys.jpg";
//women shop
import kurti from "../../assets/kurtis.jpg";
import tops from "../../assets/tops.jpg";
import bras from "../../assets/bras.png";
import dress from "../../assets/dress.jpg";
import saress from "../../assets/saree.jpg";
import suits from "../../assets/suits.jpg";
import bottoms from "../../assets/bottoms.webp";
import girls from "../../assets/girls.jpg";
import nightgirls from "../../assets/night-girls.jpg";
//footwears
// import footwear from "../../assets/sneakers.webp";
import causals from "../../assets/casuals.webp";
import sports from "../../assets/sports.webp";
import sneakers from "../../assets/sneakers.webp";
import flips from "../../assets/flips.webp";
import clips from "../../assets/clips.webp";
import loafers from "../../assets/loafers.webp";
import sandals from "../../assets/sandals.webp";
import barellians from "../../assets/ballerians.webp";
import formals from "../../assets/formal.webp";
import heels from "../../assets/heels.webp";
import boots from "../../assets/boots.webp";

//electronics
import mobile from "../../assets/mobile.webp";
import ac from "../../assets/ac.webp";
import fans from "../../assets/cooler.jpg";
import washing from "../../assets/washing-machine.webp";
import tv from "../../assets/tv.webp";
import laptop from "../../assets/laptops.webp";
import tablet from "../../assets/tblets.webp";
import computer from "../../assets/computers.webp";
import headphones from "../../assets/headphones.webp";
import smartwatch from "../../assets/smartwatch.webp";
import refrigator from "../../assets/refrigiator.webp";
import projector from "../../assets/projector.webp";
import microwaves from "../../assets/micro-waves.webp";
import cameras from "../../assets/camera.webp";
import speaker from "../../assets/speaker.jpg";

//fast food
import pizza from "../../assets//pizzas.jpg";
import beverages from "../../assets/beverages.jpg";
import burger from "../../assets/burgers.jpg";
import cake from "../../assets/cake.webp";      
import noodles from "../../assets/noodles.webp";
import thali from "../../assets/thali.png";
import dosa from "../../assets/dosa.jpg";
import indiansnacks from "../../assets/samosa.jpg";
import northfood from "../../assets/northfood.jpg";
import southfood from "../../assets/southfood.jpg";
import sweets from "../../assets/sweets.jpg";
import breakfast from "../../assets/breakfast.webp";
import lunch from "../../assets/lunch-food.webp";
import dinner from "../../assets/dinner.jpg";


//Medical
// import Vitamins from "../../assets/med1.jpg";
// import care from "../../assets/med2.jpg";
// import devices from "../../assets/med4.jpg";
// import aryuveda from "../../assets/aryuveda.jpg";
// import homapathy from "../../assets/homapathy.jpg";

//salon
// import haircut from "../../assets/haircut.png";
// import threading from "../../assets/threading.jpg";
// import menicure from "../../assets/menicure.jpg";
// import wedding from "../../assets/weddingspecial.jpg";
// import facecare from "../../assets/facecare2.jpg";
// import { getAllProductsDetails } from "../../services/api";

const FeaturedProducts = () => {   

    return (
        <div className="featured-products flex column">
            <div className="fastfood">
                <div className="heading">
                    <h2>Fast food popular categories </h2>
                </div>
                <div className="categories flex align-center wrap">
                <Link
                        to={`search/?ptype=Indiansnacks`}
                        className="products-category link"
                    >
                        <img src={indiansnacks} alt="" />
                        <p>Indian snacks</p>
                    </Link>
                <Link
                        to={`search/?ptype=Burger`}
                        className="products-category link"
                    >
                        <img src={burger} alt="" />
                        <p>Burger</p>
                    </Link>
                <Link
                        to={`search/?ptype=Pizza`}
                        className="products-category link"
                    >
                        <img src={pizza} alt="" />
                        <p>Pizza</p>
                    </Link>
                <Link
                        to={`search/?ptype=Thali`}
                        className="products-category link"
                    >
                        <img src={thali} alt="" />
                        <p>Thali</p>
                    </Link>
                <Link
                        to={`search/?ptype=Cake`}
                        className="products-category link"
                    >
                        <img src={cake} alt="" />
                        <p>Cake</p>
                    </Link>
                <Link
                        to={`search/?ptype=Dosa`}
                        className="products-category link"
                    >
                        <img src={dosa} alt="" />
                        <p>Dosa</p>
                    </Link>
                <Link
                        to={`search/?ptype=Beverages`}
                        className="products-category link"
                    >
                        <img src={beverages} alt="" />
                        <p>Beverages</p>
                    </Link>
                <Link
                        to={`search/?ptype=Northfood`}
                        className="products-category link"
                    >
                        <img src={northfood} alt="" />
                        <p>North food</p>
                    </Link>
                <Link
                        to={`search/?ptype=Southfood`}
                        className="products-category link"
                    >
                        <img src={southfood} alt="" />
                        <p>South food</p>
                    </Link>
                <Link
                        to={`search/?ptype=Noodles`}
                        className="products-category link"
                    >
                        <img src={noodles} alt="" />
                        <p>Noodles</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Sweets`}
                        className="products-category link"
                    >
                        <img src={sweets} alt="" />
                        <p>Sweets</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Breakfast`}
                        className="products-category link"
                    >
                        <img src={breakfast} alt="" />
                        <p>Breakfast</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Lunch`}
                        className="products-category link"
                    >
                        <img src={lunch} alt="" />
                        <p>Lunch</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Dinner`}
                        className="products-category link"
                    >
                        <img src={dinner} alt="" />
                        <p>Dinner</p>
                    </Link>
                </div>
            </div>
            <div className="clothes ">
                <div className="heading">
                    <h2>Fashion popular categories </h2>
                </div>
                <h5>Mens</h5>
                <div className="categories flex align-center wrap">
                    <Link
                        to={`search/?ptype=Shirts`}
                        className="products-category link"
                    >
                        <img src={shirt} alt="" />
                        <p>Shirts</p>
                    </Link>
                    <Link
                        to={`search/?ptype=T-Shirts`}
                        className="products-category link"
                    >
                        <img src={tshirt} alt="" />
                        <p>T-shirts</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Kurtas`}
                        className="products-category link"
                    >
                        <img src={kurtas} alt="" />
                        <p>Kurtas</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Pants`}
                        className="products-category link"
                    >
                        <img src={pants} alt="" />
                        <p>Pants</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Shorts`}
                        className="products-category link"
                    >
                        <img src={shorts} alt="" />
                        <p>Shorts</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Jeans`}
                        className="products-category link"
                    >
                        <img src={jeans} alt="" />
                        <p>Jeans</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Trousers`}
                        className="products-category link"
                    >
                        <img src={trousers} alt="" />
                        <p>Trousers</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Nightwear Men`}
                        className="products-category link"
                    >
                        <img src={nightgirls} alt="" />
                        <p>Nightwear Men</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Kids`}
                        className="products-category link"
                    >
                        <img src={kids} alt="" />
                        <p>Kids</p>
                    </Link>
                </div>
                <h5>Women</h5>
                <div className="categories flex align-center wrap">
                    <Link
                        to={`search/?ptype=Kurti`}
                        className="products-category link"
                    >
                        <img src={kurti} alt="" />
                        <p>Kurti</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Tops`}
                        className="products-category link"
                    >
                        <img src={tops} alt="" />
                        <p>Tops</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Dresses`}
                        className="products-category link"
                    >
                        <img src={dress} alt="" />
                        <p>Dresses</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Sarees`}
                        className="products-category link"
                    >
                        <img src={saress} alt="" />
                        <p>Sarees</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Suits`}
                        className="products-category link"
                    >
                        <img src={suits} alt="" />
                        <p>Suits</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Bras`}
                        className="products-category link"
                    >
                        <img src={bras} alt="" />
                        <p>Bras</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Bottoms`}
                        className="products-category link"
                    >
                        <img src={bottoms} alt="" />
                        <p>Bottoms</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Nightwear Women`}
                        className="products-category link"
                    >
                        <img src={nightgirls} alt="" />
                        <p>Nightwear women</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Girls`}
                        className="products-category link"
                    >
                        <img src={girls} alt="" />
                        <p>Girls</p>
                    </Link>
                </div>
                <h5>Footwears</h5>
                <div className="categories flex align-center wrap">
                    <Link
                        to={`search/?ptype=Casual shoes`}
                        className="products-category link"
                    >
                        <img src={causals} alt="" />
                        <p>Casual shoes</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Sneakers`}
                        className="products-category link"
                    >
                        <img src={sneakers} alt="" />
                        <p>Sneakers</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Sports shoes`}
                        className="products-category link"
                    >
                        <img src={sports} alt="" />
                        <p>Sports shoes</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Flips`}
                        className="products-category link"
                    >
                        <img src={flips} alt="" />
                        <p>Flips</p>
                    </Link>
                    <Link
                        to={`search/?ptype=clips`}
                        className="products-category link"
                    >
                        <img src={clips} alt="" />
                        <p>clogs</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Loafers`}
                        className="products-category link"
                    >
                        <img src={loafers} alt="" />
                        <p>Loafers</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Sandals`}
                        className="products-category link"
                    >
                        <img src={sandals} alt="" />
                        <p>Sandals</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Ballerinas`}
                        className="products-category link"
                    >
                        <img src={barellians} alt="" />
                        <p>Ballerinas</p>
                    </Link>
                    <Link
                        to={`search/?ptype=HeelsAndFlats`}
                        className="products-category link"
                    >
                        <img src={heels} alt="" />
                        <p>Heels & Flats</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Formal shoes`}
                        className="products-category link"
                    >
                        <img src={formals} alt="" />
                        <p>Formal shoes</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Boots`}
                        className="products-category link"
                    >
                        <img src={boots} alt="" />
                        <p>Boots</p>
                    </Link>
                </div>
            </div>
            <div className="kirana ">
                <div className="heading">
                    <h2>Kirana popular categories</h2>
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
                        to={`search/?ptype=DrinksAndJuices`}
                        className="products-category link"
                    >
                        <img src={Drinks} alt="" />
                        <p>Drink & Juices</p>
                    </Link>
                    <Link
                        to={`search/?ptype=BiscuitsAndSnacks`}
                        className="products-category link"
                    >
                        <img src={biscuits} alt="" />
                        <p>Biscuits & Snacks</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Cleaning Essentials`}
                        className="products-category link"
                    >
                        <img src={CleaningAccessories} alt="" />
                        <p>Cleaning Essentials</p>
                    </Link>
                    <Link
                        to={`search/?ptype=InstantFood`}
                        className="products-category link"
                    >
                        <img src={Instantfood} alt="" />
                        <p>Instant Food</p>
                    </Link>
                    <Link
                        to={`search/?ptype=ChocolatesAndIcecreams`}
                        className="products-category link"
                    >
                        <img src={chocolates} alt="" />
                        <p>Chocolates & Icecreams</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Rice,AttaAndDal`}
                        className="products-category link"
                    >
                        <img src={Atta} alt="" />
                        <p>Rice,Atta & Dal</p>
                    </Link>
                    <Link
                        to={`search/?ptype=BreakfastFood`}
                        className="products-category link"
                    >
                        <img src={Breakfast} alt="" />
                        <p>Breakfast Food</p>
                    </Link>
                    <Link
                        to={`search/?ptype=MilkAndBread`}
                        className="products-category link"
                    >
                        <img src={milk} alt="" />
                        <p>Milk & Bread</p>
                    </Link>
                    <Link
                        to={`search/?ptype=TeaAndCoffee`}
                        className="products-category link"
                    >
                        <img src={tea} alt="" />
                        <p>Tea & Coffee</p>
                    </Link>
                    <Link
                        to={`search/?ptype=StationeryAndElectrical`}
                        className="products-category link"
                    >
                        <img src={pencopy} alt="" />
                        <p>Stationery & Electrical</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Dry Fruits`}
                        className="products-category link"
                    >
                        <img src={dryfruits} alt="" />
                        <p>Dry Fruits</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Soaps`}
                        className="products-category link"
                    >
                        <img src={soaps} alt="" />
                        <p>Soaps</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Colgate`}
                        className="products-category link"
                    >
                        <img src={colgate} alt="" />
                        <p>Colgate</p>
                    </Link>
                    <Link
                        to={`search/?ptype=HealthAndNuitrition`}
                        className="products-category link"
                    >
                        <img src={healthdrinks} alt="" />
                        <p>Health & Nuitrition</p>
                    </Link>
                    <Link
                        to={`search/?ptype=ShampoosAndConditioners`}
                        className="products-category link"
                    >
                        <img src={shampoos} alt="" />
                        <p>Shampoos & Conditioners</p>
                    </Link>
                </div>
            </div>
            {/* <div className="salon & Costemtics ">
                <div className="heading">
                    <h2>Costemtics shop popular products</h2>
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
            </div> */}
            <div className="electronics ">
                <div className="heading">
                    <h2>Electronics popular categories </h2>
                </div>
                <div className="categories flex align-center wrap">
                    <Link
                        to={`search/?ptype=Cameras`}
                        className="products-category link"
                    >
                        <img src={mobile} alt="" />
                        <p>Mobiles</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Headphone`}
                        className="products-category link"
                    >
                        <img src={headphones} alt="" />
                        <p>Headphones</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Smartwaches`}
                        className="products-category link"
                    >
                        <img src={smartwatch} alt="" />
                        <p>Smart Watches</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Televisions`}
                        className="products-category link"
                    >
                        <img src={tv} alt="" />
                        <p>Televisions</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Laptops`}
                        className="products-category link"
                    >
                        <img src={laptop} alt="" />
                        <p>Laptops</p>
                    </Link>

                    <Link
                        to={`search/?ptype=Tablets`}
                        className="products-category link"
                    >
                        <img src={tablet} alt="" />
                        <p>Tablets</p>
                    </Link>

                    <Link
                        to={`search/?ptype=Computer`}
                        className="products-category link"
                    >
                        <img src={computer} alt="" />
                        <p>Computer</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Cameras`}
                        className="products-category link"
                    >
                        <img src={cameras} alt="" />
                        <p>Cameras</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Speakers`}
                        className="products-category link"
                    >
                        <img src={speaker} alt="" />
                        <p>Speakers</p>
                    </Link>

                    <Link
                        to={`search/?ptype=Refrigators`}
                        className="products-category link"
                    >
                        <img src={refrigator} alt="" />
                        <p>Refrigators</p>
                    </Link>
                    <Link
                        to={`search/?ptype=WashingMachine`}
                        className="products-category link"
                    >
                        <img src={washing} alt="" />
                        <p>Washing Machine</p>
                    </Link>
                    <Link
                        to={`search/?ptype=AirConditioner`}
                        className="products-category link"
                    >
                        <img src={ac} alt="" />
                        <p>Air conditioner</p>
                    </Link>
                    <Link
                        to={`search/?ptype=AirCoolerAndFans`}
                        className="products-category link"
                    >
                        <img src={fans} alt="" />
                        <p>Air coolers & Fans</p>
                    </Link>
                    <Link
                        to={`search/?ptype=Projectors`}
                        className="products-category link"
                    >
                        <img src={projector} alt="" />
                        <p>Projectors</p>
                    </Link>
                    <Link
                        to={`search/?ptype=MicroWaves`}
                        className="products-category link"
                    >
                        <img src={microwaves} alt="" />
                        <p>Micro waves</p>
                    </Link>
                </div>
            </div>

            {/* <div className="medical ">
                <div className="heading">
                    <h2>Medical shop popular product </h2>
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
            </div> */}
        </div>
    );
};

export default FeaturedProducts;
