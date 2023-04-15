import React from "react";
import styles from "./siteProcess.module.scss";

import { BsDot } from "react-icons/bs";

const SiteProcess = () => {
    return (
        <div className={styles.siteProcessContainer}>
            <div className={styles.siteProcessStep}>
                <div className={styles.siteProcessNo}>1</div>
                <div className={styles.siteProcessStepHeading}>
                    Create Account
                </div>
                <p>All you need is: </p>
                <ul>
                    <li>
                        <BsDot className={styles.siteProcessListDot} />
                        GSTIN
                    </li>

                    <li>
                        <BsDot className={styles.siteProcessListDot} />
                        Bank Account
                    </li>
                </ul>
            </div>
            <div className={styles.siteProcessStep}>
                <div className={styles.siteProcessNo}>2</div>
                <div className={styles.siteProcessStepHeading}>
                    List Products
                </div>
                <p>List the products you want to sell in your supplier panel</p>
            </div>
            <div className={styles.siteProcessStep}>
                <div className={styles.siteProcessNo}>3</div>
                <div className={styles.siteProcessStepHeading}>Get Orders</div>
                <p>
                    Start getting orders from crores of Indians actively
                    shopping on our platform
                </p>
            </div>
            <div className={styles.siteProcessStep}>
                <div className={styles.siteProcessNo}>4</div>
                <div className={styles.siteProcessStepHeading}>
                    Lowest Cost Shipping
                </div>
                <p>Products are shipped to customers at lower cost</p>
            </div>
            <div className={styles.siteProcessStep}>
                <div className={styles.siteProcessNo}>5</div>
                <div className={styles.siteProcessStepHeading}>
                    Recieve Payments
                </div>
                <p>
                    Payments are deposited directly to your bank account
                    following a 7-day payment cycle from order delivery
                </p>
            </div>
        </div>
    );
};

export default SiteProcess;
