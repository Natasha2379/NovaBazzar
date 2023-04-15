import React from "react";
import styles from "./home.module.scss";

import Topbar from "../../../components/TopBar/Topbar";
import SiteInfo from "../../../components/SiteInfo/SiteInfo";
import SiteProcess from "../../../components/SiteProcess/SiteProcess";
import SiteBenefits from "../../../components/SiteBenefits/SiteBenefits";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Topbar />
            <SiteInfo />
            <SiteProcess />
            <SiteBenefits />
        </div>
    );
};

export default Home;
