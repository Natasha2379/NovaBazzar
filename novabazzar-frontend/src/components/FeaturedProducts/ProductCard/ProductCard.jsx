import React from "react";
import styles from "./productCard.module.scss";
import apple from "../../../assets/apple.jpg";
import PropTypes from "prop-types";

const ProductCard = (props) => {
    return (
        <div className={styles.productCardContainer}>
            <div className={styles.productCardImageContainer}>
                <img src={apple} alt="fruit" />
            </div>
            <div className={styles.productCardInformationContainer}>
                <div className={styles.productCardName}>
                    {props.product.name}
                </div>
                <div className={styles.productCardGMS}>500 GMS</div>
                <div className={styles.productCardDetails}>
                    <div className={styles.productCardProductPrice}>
                        ₹ {props.product.price}
                    </div>
                    <div className={styles.productCardAddProduct}> + ADD</div>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object,
};

export default ProductCard;
