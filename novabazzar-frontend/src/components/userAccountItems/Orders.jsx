import React from "react";
import "./UserAccount.scss";
// import Product from "../productCard/Product";
import MyOrders from "../shopComponents/SellerOrders/sellerOrders";

const Orders = () => {
    return (
        <div className="ordersTab">
            <MyOrders />
        </div>
    );
};

export default Orders;
