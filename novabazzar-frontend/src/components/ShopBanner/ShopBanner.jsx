import React from "react";
import styles from "./shopBanner.module.scss";

import { GoPrimitiveDot } from "react-icons/go";
import { MdWatchLater } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

import bannerImage from "../../assets/banner.jpg";

const ShopBanner = () => {
    return (
        <div className={styles.shopBannerContainer}>
            <div className={styles.shopPath}>
                Home
                <FaArrowRight className={styles.pathArrow} />
                New Delhi
                <FaArrowRight className={styles.pathArrow} />
                Vasant Vihar
                <FaArrowRight className={styles.pathArrow} />
                <span>Gupta Vegetables</span>
            </div>
            <div className={styles.shopDetails}>
                <img
                    className={styles.shopImage}
                    src={bannerImage}
                    alt="coverImage"
                />
                <div className={styles.shopInfo}>
                    <div className={styles.shopName}>Gupta Vegetables</div>
                    <div className={styles.shopAddress}>
                        <div className={styles.shopLocation}>RK Puram</div>
                        <GoPrimitiveDot className={styles.seprationDot} />
                        <div className={styles.shopTimeContainer}>
                            <MdWatchLater className={styles.timeIcon} />
                            <div className={styles.shopTime}>39 min</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopBanner;
