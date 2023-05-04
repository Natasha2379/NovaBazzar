import React from "react";
import "./CartItem.scss";
import image from "../../assets/shoes.jpg";

const CartItem = () => {
    return (
        <>
            <div className="cart-item">
                <div class="img-area">
                    <img src={image} alt="" />
                </div>
                <div class="item-name">Flower</div>
                <div class="item-quantity">
                    <input type="number" name="" id="" placeholder="0" />
                </div>
                <div class="item-price">₹ 49</div>
                <button>Remove</button>
            </div>
            <div className="cart-item">
                <div class="img-area">
                    <img src={image} alt="" />
                </div>
                <div class="item-name">Flower</div>
                <div class="item-quantity">
                    <input type="number" name="" id="" placeholder="0" />
                </div>
                <div class="item-price">₹ 49</div>
                <button>Remove</button>
            </div>
        </>
    );
};

export default CartItem;
