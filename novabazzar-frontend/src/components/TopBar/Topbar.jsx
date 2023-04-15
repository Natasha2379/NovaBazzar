import React from "react";
import styles from "./topbar.module.scss";
import { Link } from "react-router-dom";

const Topbar = () => {
    const page = location.pathname.split("/")[1];

    return (
        <div className={styles.topbarContainer}>
            <div className={styles.topbarLogo}>Nova Bazzar</div>
            <div className={styles.topbarRight}>
                {page !== "" ? (
                    `My Account`
                ) : (
                    <Link to="/addshop" className={styles.topbarSelling}>
                        Start Selling
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Topbar;
