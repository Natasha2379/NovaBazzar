import React from "react";
import "./CartShop.scss";
import CartItem from "../cartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, selectCartItems } from "../../redux/slices/cartSlice";

const CartShop = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const handleEmptyCart = () => {
        dispatch(emptyCart());
    };
    return (
        <div className="cart-area">
            <div className="cart-section flex">
                <div className="cart-items">
                    {cartItems.length ? (
                        cartItems.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    ) : (
                        <div className="cartbyshop">
                            Add items ,cart is empty
                        </div>
                    )}
                </div>
                <div className="price-info-area flex column space">
                    <p className="heading">Price Details</p>
                    <div className="col flex align-center space">
                        <span>Price(2 items)</span>
                        <span>Rs.479</span>
                    </div>
                    <div className="place-order-button flex abs-center">
                        <button>Place order</button>
                    </div>
                </div>
            </div>
            {cartItems.length ? (
                <div onClick={handleEmptyCart} style={{ cursor: "pointer" }} className="clear-cart flex abs-center">
                    Clear your cart
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default CartShop;
