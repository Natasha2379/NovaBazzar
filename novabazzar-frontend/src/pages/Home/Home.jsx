import React from "react";
import "./Home.scss";

import FeaturedShops from "../../components/FeaturedShops/FeaturedShops";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Footer from "../../components/Footer/Footer";

//Natasha styling components
import Navbar from "../../components/navbar/Navbar";
import MainFeatured from "../../components/mainFeatured/MainFeatured";

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
