import React, { useState } from "react";
import "./OpenShop.scss";
import { addShop } from "../../services/api";
import ShopOpen from "../../assets/openshop.jpg";

const OpenShop = () => {
    const [name, setName] = useState("");
    const [shopName, setShopName] = useState("");
    const [shopType, setShopType] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleAddShop = async () => {
        const shopData = {
            name,
            shopName,
            shopType,
            state,
            city,
            email,
            phone,
        };

        try {
            await addShop(shopData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="ShopOpenForm flex align-center ">
            <div className="image-section">
                <img src={ShopOpen} alt="" />
            </div>
            <div className="form-section ">
                <form
                    className="addShopForm flex column"
                    onSubmit={handleAddShop}
                >
                    <div className="addShopHeading">Nova Bazzar</div>
                    <div className="addShopDesc">
                        Please give us few detailsso that we can help you to
                        open your shop on Nova Bazzar, get your bussiness Online
                        with Nova Bazzar free
                    </div>
                    <input
                        type="text"
                        className="addShopInput"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Your Full Name"
                    />
                    <div className="col">
                        <input
                            type="text"
                            className="addShopInput"
                            onChange={(e) => setShopName(e.target.value)}
                            placeholder="Enter your Shop Name"
                        />
                        <input
                            type="text"
                            className="addShopInput"
                            onChange={(e) => setShopType(e.target.value)}
                            placeholder="Enter your Shop Type"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="addShopInput"
                            onChange={(e) => setState(e.target.value)}
                            placeholder="Enter your state"
                        />
                        <input
                            type="text"
                            className="addShopInput"
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter your city"
                        />
                    </div>
                    <div className="exact-location">
                        <p>
                            Choose the exact location of your shop and enter
                            below
                        </p>
                        <div className="addShopLocation">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27750.888696524427!2d76.5067298!3d29.6077242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e030e2a0bbbc1%3A0x6f27bcb13fd6a158!2sFariabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1672811355409!5m2!1sen!2sin"
                                title="Map"
                                width="100%"
                                height="100%"
                                style={{ border: "none" }}
                            ></iframe>
                        </div>
                        <input
                            type="text"
                            className="addShopInput"
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter your exact location"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="addShopInput"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your Email"
                        />
                        <input
                            type="text"
                            className="addShopInput"
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter your Phone Number"
                        />
                    </div>
                    <div className="col">
                        <button type="button">Send OTP</button>
                        <input
                            type="text"
                            className="addShopInput"
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter OTP"
                        />
                    </div>
                    <button type="submit" className="addShopSubmitButton">
                        Open Shop
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OpenShop;
