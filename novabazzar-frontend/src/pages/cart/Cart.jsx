import React, { useEffect, useState } from "react";
import "./Cart.scss";
import Navbar from "../../components/Navbar/Navbar";
import CartShop from "../../components/cartShop/CartShop";

const Cart = () => {
    const [userLocation, setUserLocation] = useState();
    useEffect(() => {
        const userLocation = localStorage.getItem("location");
        setUserLocation(userLocation);
    }, []);
    
    return (
        <div className="cartPage">
            <Navbar userLocation={userLocation} />
            <div className="cart-section">
                <CartShop />
            </div>
        </div>
    );
};

export default Cart;
