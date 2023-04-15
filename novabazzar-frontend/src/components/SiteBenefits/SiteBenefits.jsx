import React from "react";
import styles from "./siteBenefits.module.scss";

import cardIcon from "../../assets/cardIcon.png";

const SiteBenefits = () => {
    return (
        <div className={styles.siteBenefitsContainer}>
            <h2>Why Sellers choose Nova Bazzar</h2>
            <div className={styles.siteBenefitsCardsContainer}>
                <div className={styles.siteBenefitsCard}>
                    <img src={cardIcon} alt="" />
                    <div>Transparent Pricing, no hidden charges</div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Soluta voluptatum quam fuga ipsa, incidunt facilis
                        saepe quo molestias ex corrupti nemo aperiam molestiae
                        libero nobis provident cupiditate ipsum suscipit quos!
                    </p>
                </div>
                <div className={styles.siteBenefitsCard}>
                    <img src={cardIcon} alt="" />
                    <div>Transparent Pricing, no hidden charges</div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta hic sequi quo corporis nisi maiores? Ipsa,
                        nesciunt necessitatibus modi minima natus, error quae
                        omnis deleniti quis nihil reiciendis odio repudiandae.
                    </p>
                </div>
                <div className={styles.siteBenefitsCard}>
                    <img src={cardIcon} alt="" />
                    <div>Transparent Pricing, no hidden charges</div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum, ipsum exercitationem. Consectetur ad, distinctio
                        enim ratione, omnis dolorem voluptatibus consequuntur
                        numquam excepturi delectus in sunt maxime impedit, nihil
                        laudantium! Perferendis?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SiteBenefits;
