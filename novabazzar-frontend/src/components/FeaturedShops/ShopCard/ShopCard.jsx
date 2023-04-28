import React from "react";
import styles from "./shopCard.module.scss";
import shopImage from "../../../assets/banner.jpg";
import { MdWatchLater } from "react-icons/md";
import PropTypes from "prop-types";

const ShopCard = () => {
    return (
        <div className={styles.shopCardContainer}>
            <div className={styles.shopCardImageContainer}>
                <img src={shopImage} alt="shopImage" />
            </div>
            <div className={styles.shopCardInformationContainer}>
                <div className={styles.shopCardShopName}>
                    Fruits N Vegetables
                </div>
                <div className={styles.shopCardShopAddress}>
                    <div className={styles.shopCardLocation}>
                        Masjid Moth Village
                    </div>
                    <div className={styles.shopCardTimeContainer}>
                        <div>25.6km</div>
                        <MdWatchLater className={styles.shopCardTimeIcon} />
                        <div className={styles.shopCardTime}>75 min</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ShopCard.propTypes = {
    shop: PropTypes.object,
};

export default ShopCard;
