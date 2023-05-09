import React from "react";
import "./SellerOrders.scss";
import Item from "./Item";

const SellerOrders = (props) => {
    return (
        <div className="seller-orders flex column">
            <Item item={props?.order} />
        </div>
    );
};

export default SellerOrders;
