import React, { useEffect, useState } from "react";
import "./AddShop.scss";
import GoogleMap from "../../../utils/GoogleMap";
import { addShop, getOTP } from "../../../services/api";
import ShopOpen from "../../../assets/openshop.jpg";
import { useSelector } from "react-redux";
import { selectUser_ID } from "../../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const OpenShop = () => {
    const navigate = useNavigate();
    const userId = useSelector(selectUser_ID);
    const [name, setName] = useState("");
    const [shopName, setShopName] = useState("");
    const [shopType, setShopType] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [systemOTP, setSystemOTP] = useState("");
    const [otp, setOtp] = useState("");
    const [otpVerfied, setOtpVerfied] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSendOTP = async () => {
        try {
            const res = await getOTP({ email });
            setSystemOTP(res.data.otp);
            setSuccess("otp sent");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (otp.length === 4) {
            if (systemOTP === otp) {
                setOtpVerfied(true);
                setSuccess("otp verified!!");
            } else {
                setError("invalid otp!!");
            }
        } else {
            setError("");
        }
    }, [otp]);

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
            userId,
        };
        try {
            const res = await addShop(shopData);
            console.log(res.data.shop._id);
            navigate(`/shop/${res.data.shop._id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="addshopPage">
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
                            open your shop on Nova Bazzar, get your bussiness
                            Online with Nova Bazzar free
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
                            <select
                                name=""
                                id="ProductCategory"
                                className="addShopInput"
                                onChange={(e) => setShopType(e.target.value)}
                            >
                                <option hidden>Select Shop Type</option>
                                <option value="Kirana shop">Kirana shop</option>
                                <option value="Medical shop">
                                    Medical shop
                                </option>
                                <option value="Clothes shop">
                                    Clothes shop
                                </option>
                                <option value="Electronics shop">
                                    Electronics shop
                                </option>
                            </select>
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
                                    state={state}
                                    city={city}
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
                            <button
                                type="button"
                                onClick={handleSendOTP}
                                onFocus={() => setError(false)}
                            >
                                Send OTP
                            </button>
                            <input
                                type="number"
                                className="addShopInput"
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="Enter OTP"
                            />
                        </div>
                        {error && (
                            <p style={{ cursor: "pointer", color: "red" }}>
                                {error}
                            </p>
                        )}
                        {success && (
                            <p style={{ cursor: "pointer", color: "green" }}>
                                {success}
                            </p>
                        )}
                        {otpVerfied ? (
                            <button
                                type="button"
                                className="addShopSubmitButton"
                                style={{ cursor: "pointer" }}
                                onClick={handleAddShop}
                            >
                                Open Shop
                            </button>
                        ) : (
                            ""
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OpenShop;
