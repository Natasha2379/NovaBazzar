import React, { useEffect, useState } from "react";
import "./Home.scss";

import FeaturedShops from "../../components/FeaturedShops/FeaturedShops";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

//Natasha styling components
import Navbar from "../../components/navbar/Navbar";
import MainFeatured from "../../components/mainFeatured/MainFeatured";
import Footer from "../../components/Footer/Footer";
const Home = () => {
    const [userLocation, setUserLocation] = useState();
    useEffect(() => {
        const userLocation = localStorage.getItem("location");
        setUserLocation(userLocation);
    }, []);

    return (
        <div className="homePage">
            <Navbar userLocation={userLocation} />
            <div className="home-container">
                <MainFeatured />
                <FeaturedShops />
                <FeaturedProducts />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
