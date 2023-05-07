import React from "react";
import "./CartShop.scss";
import CartItem from "../cartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
    emptyCart,
    selectCartItems,
    selectCartTotalCost,
} from "../../redux/slices/cartSlice";
import { addOrder } from "../../services/api";
import { selectUser_ID } from "../../redux/slices/userSlice";

const CartShop = () => {
    const userId = useSelector(selectUser_ID);
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectCartTotalCost);

    const dispatch = useDispatch();

    const handlePlaceOrder = async () => {
        try {
            const res = await addOrder({
                buyerId: userId,
                // shopId: "",
                items: cartItems,
                totalPrice,
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        window.alert("order placed!!!");
        dispatch(emptyCart());
    };

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
                        <span>Price({cartItems.length} items)</span>
                        <span>Rs.{totalPrice}</span>
                    </div>
                    <div className="place-order-button flex abs-center">
                        <button onClick={handlePlaceOrder}>Place order</button>
                    </div>
                </div>
            </div>
            {cartItems.length ? (
                <div
                    onClick={handleEmptyCart}
                    style={{ cursor: "pointer" }}
                    className="clear-cart flex abs-center"
                >
                    Clear your cart
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default CartShop;
