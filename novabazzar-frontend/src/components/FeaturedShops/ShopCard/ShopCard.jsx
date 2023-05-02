import React from "react";
import styles from "./shopCard.module.scss";
import shopImage from "../../../assets/banner.jpg";
import { MdWatchLater } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShopCard = (props) => {
    console.log(props.shop);
    return (
        <Link
            to={`/shop/${props.shop._id}`}
            className={styles.shopCardContainer}
        >
            <div className={styles.shopCardImageContainer}>
                <img src={shopImage} alt="shopImage" />
            </div>
            <div className={styles.shopCardInformationContainer}>
                <div className={styles.shopCardShopName}>
                    {props?.shop?.shopName}
                </div>
                <div className={styles.shopCardShopAddress}>
                    <div className={styles.shopCardLocation}>
                        {props?.shop?.city}, {props?.shop?.state}
                    </div>
                    <div className={styles.shopCardTimeContainer}>
                        <div>25.6km</div>
                        <MdWatchLater className={styles.shopCardTimeIcon} />
                        <div className={styles.shopCardTime}>75 min</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

ShopCard.propTypes = {
    shop: PropTypes.object,
};

export default ShopCard;
