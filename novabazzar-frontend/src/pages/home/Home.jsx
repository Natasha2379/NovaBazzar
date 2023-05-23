import React, { useEffect, useState } from "react";
import "./Home.scss";

import FeaturedShops from "../../components/featuredShops/FeaturedShops";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";

//Natasha styling components
import Navbar from "../../components/navbar/Navbar";
import MainFeatured from "../../components/mainFeatured/MainFeatured";
import Footer from "../../components/footer/Footer";
const Home = () => {
    const [userLocation, setUserLocation] = useState();
    useEffect(() => {
        const userLocation = localStorage.getItem("location");
        setUserLocation(userLocation);
    }, []);

    return (
        <div className="homePage">
            <Navbar userLocation={userLocation} />
            {/* <div className="hero-section"></div> */}
            <MainFeatured />
            <div className="home-container">
                <FeaturedShops />
                <FeaturedProducts />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
