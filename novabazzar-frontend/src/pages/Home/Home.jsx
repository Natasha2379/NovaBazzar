import React from "react";
import "./Home.scss";

import FeaturedShops from "../../components/FeaturedShops/FeaturedShops";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

//Natasha styling components
import Navbar from "../../components/Navbar/navbar";
import MainFeatured from "../../components/MainFeatured/mainFeatured";
import Footer from "../../components/Footer/Footer";
const Home = () => {
    return (
        <div className="homePage">
            <Navbar />
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
