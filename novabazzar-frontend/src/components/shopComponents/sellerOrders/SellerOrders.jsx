import React from "react";
import "./SellerOrders.scss";
import Item from "./Item";

const SellerOrders = (props) => {
    return (
        <div className="seller-orders flex column">
            {props?.order?.items?.map((item, index) => (
                <Item item={item} key={index} />
            ))}
        </div>
    );
};

export default SellerOrders;
