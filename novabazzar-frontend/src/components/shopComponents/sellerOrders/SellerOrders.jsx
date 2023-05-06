import React from "react";
import "./SellerOrders.scss";
import image from "../../../assets/apple.jpg";

const SellerOrders = () => {
    return (
        <div className="seller-orders flex column">
            <div className="product-detail flex align-center space">
                <div className="img-area">
                    <img src={image} alt="" />
                </div>

                <div className="product-name">Apple</div>
                <div className="product-quantity">1 Kg</div>

                <div className="book-btn">
                    <button>Booked</button>
                </div>
            </div>
            <div className="product-detail flex align-center space">
                <div className="img-area">
                    <img src={image} alt="" />
                </div>

                <div className="product-name">Apple</div>
                <div className="product-quantity">1 Kg</div>

                <div className="sold-btn">
                    <button>Sold</button>
                </div>
            </div>
            <div className="product-detail flex align-center space">
                <div className="img-area">
                    <img src={image} alt="" />
                </div>

                <div className="product-name">Apple</div>
                <div className="product-quantity">1 Kg</div>

                <div className="sold-btn">
                    <button>Sold</button>
                </div>
            </div>
            <div className="product-detail flex align-center space">
                <div className="img-area">
                    <img src={image} alt="" />
                </div>

                <div className="product-name">Apple</div>
                <div className="product-quantity">1 Kg</div>

                <div className="book-btn">
                    <button>Booked</button>
                </div>
            </div>
            <div className="product-detail flex align-center space">
                <div className="img-area">
                    <img src={image} alt="" />
                </div>

                <div className="product-name">Apple</div>
                <div className="product-quantity">1 Kg</div>

                <div className="book-btn">
                    <button>Booked</button>
                </div>
            </div>
        </div>
    );
};

export default SellerOrders;
