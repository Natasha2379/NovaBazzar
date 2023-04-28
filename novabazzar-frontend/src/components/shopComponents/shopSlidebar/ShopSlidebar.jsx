import React from "react";
import "./ShopSlidebar.scss";

const ShopSlidebar = () => {
    return (
        <div className="shopSlidebar">
            <h3>Product Categories</h3>
            <ul className="flex column ">
                <li>Fruits </li>
                <li>Vegetables</li>
                <li>Daily ,Bread & eggs</li>
                <li>Cold Drinks & Juice</li>
                <li>Snacks & Munchies</li>
                <li>Breakfast & Instant Food</li>
                <li>Sweet Tooth</li>
                <li>Bakery & Biscuits</li>
                <li>Tea ,Coffee & Health Drinks</li>
                <li>Atta,Rice & Dal</li>
                <li>Sauces & Spreads</li>
                <li>Cleaning Essentials</li>
                <li>Home & Office</li>
            </ul>
        </div>
    );
};

export default ShopSlidebar;
