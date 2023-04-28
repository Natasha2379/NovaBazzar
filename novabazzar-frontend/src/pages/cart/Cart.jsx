import React from "react";
import "./Cart.scss";
import Navbar from "../../components/Navbar/Navbar";

const Cart = () => {
    return (
        <div className="cartPage">
            <Navbar />
            <div className="cart-section">cart items</div>
        </div>
    );
};

export default Cart;
