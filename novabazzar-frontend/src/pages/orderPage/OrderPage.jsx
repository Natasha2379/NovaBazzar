import React, { useState } from "react";
import "./OrderPage.scss";
import Navbar from "../../components/Navbar/navbar";

const BuyPage = () => {
    const [activechoice, setActiveChoice] = useState("direct-buy");
    return (
        <div className="order-page">
            <Navbar />
            <div className="order-page-section flex">
                <div className="order-section">
                    <div className="items">give buying items deatils here</div>
                    <h2>Pick you buying style</h2>
                    <div className="buy-choice">
                        <ul className="flex abs-center ">
                            <li
                                onClick={() => setActiveChoice("direct-buy")}
                                className={
                                    activechoice === "direct-buy"
                                        ? "active-choice"
                                        : "choice"
                                }
                            >
                                Direct buy
                            </li>
                            <li
                                onClick={() =>
                                    setActiveChoice("want-delievery")
                                }
                                className={
                                    activechoice === "want-delievery"
                                        ? "active-choice"
                                        : "choice"
                                }
                            >
                                Want delievery
                            </li>
                        </ul>
                    </div>
                    <div className="choice-pick">
                        {activechoice === "direct-buy" && (
                            <div className="direct-buy">
                                <h4>Your Total price is 59</h4>
                                <button>Place order</button>
                            </div>
                        )}
                        {activechoice === "want-delievery" && (
                            <div className="want-delievery">
                                <div className="process flex space">
                                    <div className="orderdetails flex column">
                                        <h3>Payment Details</h3>
                                        <p>Delivery charges is Rs 20</p>
                                        <h4>Your Total price is 79</h4>
                                    </div>
                                    <div className="address">
                                        <h3>
                                            Add doorstep address to pick your
                                            order
                                        </h3>
                                        <form className="flex column">
                                            <div className="name">
                                                <p>
                                                    Full name(First and Last
                                                    name)
                                                </p>
                                                <input type="text" />
                                            </div>
                                            <div className="mobile">
                                                <p>Mobile Number</p>
                                                <input type="text" />
                                            </div>
                                            <div className="exact-location">
                                                <p>
                                                    Flat,House
                                                    no.,Building,Company,Apartment
                                                </p>
                                                <input type="text" />
                                            </div>
                                            <div className="area">
                                                <p>
                                                    Area,Street,Village,Sector
                                                </p>
                                                <input type="text" />
                                            </div>
                                            <div className="instruction">
                                                <p>
                                                    Add delivery instruction
                                                    (optional)
                                                </p>
                                                <textarea
                                                    name=""
                                                    id=""
                                                    cols="10"
                                                    rows="10"
                                                    placeholder="write here"
                                                ></textarea>
                                            </div>
                                            <button>place Order</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="info-area flex align-center column">
                    <h3>
                        Sorry for now we are not provideing online paymant
                        method
                    </h3>
                    <div className="feedback">
                        <h4>Give Some Suggestions to us</h4>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Write in 50 words only"
                        ></textarea>
                    </div>
                    <div className="follow-us flex align-center column">
                        <h3>Follow us on</h3>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Facebook</a>
                        <a href="#">Whatsapp</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyPage;
