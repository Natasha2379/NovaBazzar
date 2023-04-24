import React, { useEffect, useState } from "react";
import styles from "./featuredShops.module.scss";
import ShopCard from "./ShopCard/ShopCard";
import { getAllShopsDetails } from "../../services/api";

const FeaturedShops = () => {
    const [shops, setShops] = useState();
    console.log(shops);

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const res = await getAllShopsDetails();
                setShops(res.data.shops);
            } catch (error) {
                console.log(error);
            }
        };
        fetchShops();
    }, []);

    return (
        <div className={styles.featuredShopsMainContainer}>
            <div className={styles.featuredShopsHeading}>Some Main Shops</div>
            <div className={styles.featuredShopsContainer}>
                {shops?.map((shop) => (
                    <ShopCard shops={shops} key={shop._id} />
                ))}
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
            </div>
        </div>
    );
};

export default FeaturedShops;
