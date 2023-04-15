import React from "react";
import styles from "./shopProduct.module.scss";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShopProduct = (props) => {
    return (
        <div className={styles.shopProductContainer}>
            <img src="" alt="product" className={styles.shopProductImage} />
            <div className={styles.shopProductTitle}>
                {props?.product?.name}
            </div>
            <div className={styles.shopProductInfo}>
                <div className={styles.shopProductQuantity}>
                    {props?.product?.quantity}
                </div>
                <div className={styles.shopProductPrice}>
                    Rs {props?.product?.price}
                </div>
            </div>
            <Link
                to={`/editproduct/${props.product._id}`}
                className={styles.shopProductEditButton}
            >
                Edit
            </Link>
        </div>
    );
};

ShopProduct.propTypes = {
    product: PropTypes.object,
};

export default ShopProduct;
