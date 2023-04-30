import React from "react";
import "./Cart.scss";
import Navbar from "../../components/Navbar/Navbar";
import CartShop from "../../components/cartShop/CartShop";

const Cart = () => {
    return (
        <div className="cartPage">
            <Navbar />
            <div className="cart-section">
                <CartShop />
            </div>
        </div>
    );
};

export default Cart;
