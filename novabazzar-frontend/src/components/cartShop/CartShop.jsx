import React from "react";
import "./CartShop.scss";
import CartItem from "../cartItem/CartItem";

const CartShop = () => {
    return (
        <>
            <div className="cartbyshop">
                <div className="shop-name">Chinjo Clothes Shop</div>
                <div className="cart-items">
                    <CartItem />
                </div>
                <div className="bottom-section">
                    <div className="total-items">Total items : 1</div>
                    <div className="total-price">Total Price 150</div>
                    <button>Buy Now</button>
                </div>
            </div>
            <div className="cartbyshop">
                <div className="shop-name">Multan kirana Shop</div>
                <div className="cart-items">
                    <CartItem />
                </div>
                <div className="bottom-section">
                    <div className="total-items">Total items : 1</div>
                    <div className="total-price">Total Price 50</div>
                    <button>Buy Now</button>
                </div>
            </div>
        </>
    );
};

export default CartShop;
