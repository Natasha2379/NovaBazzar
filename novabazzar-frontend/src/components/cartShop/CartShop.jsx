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
        <>
            {cartItems.length ? (
                <div onClick={handleEmptyCart} style={{ cursor: "pointer" }}>
                    Empty Cart
                </div>
            ) : (
                ""
            )}

            {cartItems.length ? (
                cartItems.map((item, index) => (
                    <CartItem item={item} key={index} />
                ))
            ) : (
                <div className="cartbyshop"> ADD ITEMS, CART IS EMPTY</div>
            )}
        </>
    );
};

export default CartShop;
