import React from "react";
import styles from "./home.module.scss";

import Topbar from "../../components/Topbar/Topbar";
import FeaturedItems from "../../components/FeaturedItems/FeaturedItems";
import FeaturedShops from "../../components/FeaturedShops/FeaturedShops";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
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
