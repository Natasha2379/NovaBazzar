import React from "react";
import "./OrderPage.scss";
import Navbar from "../../components/Navbar/Navbar";

const BuyPage = () => {
    return (
        <div className="order-page">
            <Navbar />
            <div className="order-page-section flex">
                <div className="order-section">
                    <div className="items flex column">
                        <p>You pick two items to buy</p>
                        <p>{`${"mango"} - ${"₹ 30"}`}</p>
                        <p>{`${"Knife"} - ${"₹ 19"}`}</p>
                    </div>
                    <div className="order-area flex abs-center column">
                        <h4>Your Total price is 59</h4>
                        <button>Place order</button>
                    </div>
                </div>
                <div className="info-area flex align-center column">
                    <h3>
                        Sorry for now we are not providing online paymant method
                        and delivery
                    </h3>
                    <div className="follow-us flex align-center column">
                        <h3>Follow us on</h3>
                        <a href="/#">Instagram</a>
                        <a href="/#">Twitter</a>
                        <a href="/#">LinkedIn</a>
                        <a href="/#">Facebook</a>
                        <a href="/#">Whatsapp</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyPage;
