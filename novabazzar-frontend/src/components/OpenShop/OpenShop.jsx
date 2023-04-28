import React, { useState } from "react";
import "./OpenShop.scss";
import { addShop } from "../../services/api";
import ShopOpen from "../../assets/openshop.jpg";
import GoogleMap from "../../utils/GoogleMap";

const OpenShop = () => {
    const [name, setName] = useState("");
    const [shopName, setShopName] = useState("");
    const [shopType, setShopType] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");

    const handleAddShop = async () => {
        const shopData = {
            name,
            shopName,
            shopType,
            state,
            city,
            email,
            phone,
            location,
        };
        try {
            const res = await addShop(shopData);
            console.log(res);
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
                    // onSubmit={handleAddShop}
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
                            <GoogleMap
                                location={location}
                                city={city}
                                state={state}
                            />
                        </div>
                        <input
                            type="text"
                            className="addShopInput"
                            onChange={(e) => setLocation(e.target.value)}
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
                    <button
                        // type="submit"
                        type="button"
                        className="addShopSubmitButton"
                        onClick={handleAddShop}
                    >
                        Open Shop
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OpenShop;
