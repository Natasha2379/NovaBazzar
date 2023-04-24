import React from "react";
import styles from "./home.module.scss";

import Topbar from "../../components/Topbar/Topbar.jsx";
import FeaturedItems from "../../components/FeaturedItems/FeaturedItems.jsx";
import FeaturedShops from "../../components/FeaturedShops/FeaturedShops.jsx";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Topbar />
            <FeaturedItems />
            <FeaturedShops />
            <FeaturedProducts />
            <Footer />
        </div>
    );
};

export default Home;
