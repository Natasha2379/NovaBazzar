import React from "react";
import styles from "./siteInfo.module.scss";
import homeImage from "../../assets/homeImage.png";

const SiteInfo = () => {
    return (
        <div className={styles.siteInfoContainer}>
            <div className={styles.siteInfoTop}>
                <div className={styles.siteInfoTagline}>
                    Sell online to 14 Cr+ customers at <br />
                    <span>0% Commission</span>
                </div>
                <img src={homeImage} className={styles.siteInfoImage}></img>
            </div>
            <div className={styles.siteInfoBottom}>
                <div className={styles.siteInfoBox}>
                    <span>11 Lakh+</span>
                    <p>Trust Meesho to sell online</p>
                </div>
                <div className={styles.siteInfoBox}>
                    <span>14 Corore+</span>
                    <p>Customers buying across India</p>
                </div>
                <div className={styles.siteInfoBox}>
                    <span>28000+</span>
                    <p>Pincode Supported for delivery</p>
                </div>
                <div className={styles.siteInfoBox}>
                    <span>700+</span>
                    <p>Categories to sell online</p>
                </div>
            </div>
        </div>
    );
};

export default SiteInfo;
