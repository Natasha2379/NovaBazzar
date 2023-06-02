import React, { useEffect, useState } from "react";
import "./AddShop.scss";
import { addShop, getOTP } from "../../../services/api";
import ShopOpen from "../../../assets/openshop.jpg";
import { useSelector } from "react-redux";
import { selectUser_ID } from "../../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
// export default Location;
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const OpenShop = () => {
    const navigate = useNavigate();
    const userId = useSelector(selectUser_ID);
    const [name, setName] = useState("");
    const [shopName, setShopName] = useState("");
    const [shopType, setShopType] = useState("");
    // const [state, setState] = useState("");
    // const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    // const [location, setLocation] = useState("");
    const [systemOTP, setSystemOTP] = useState("");
    const [otp, setOtp] = useState("");
    const [otpVerfied, setOtpVerfied] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSendOTP = async () => {
        if (
            !name ||
            !shopName ||
            !shopType ||
            // !state ||
            // !city ||
            !email ||
            !phone ||
            !value
        ) {
            window.alert("please enter all details");
            return;
        }
        try {
            const res = await getOTP({ email });
            setSystemOTP(res.data.otp);
            setSuccess("otp sent");
            window.alert("otp sent");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (otp.length === 4) {
            if (systemOTP === otp) {
                setOtpVerfied(true);
                setSuccess("otp verified!!");
                window.alert("otp verified, you can create shop now");
            } else {
                setError("invalid otp!!");
            }
        } else {
            setError("");
        }
    }, [otp, systemOTP]);

    const handleAddShop = async () => {
        const shopData = {
            name,
            shopName,
            shopType,
            // state,
            // city,
            email,
            phone,
            location: value,
            userId,
        };
        try {
            const res = await addShop(shopData);
            navigate(`/shop/${res.data.shop._id}`);
        } catch (error) {
            console.log(error);
        }
    };

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        // clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
        },
        debounce: 300,
    });

    const ref = useOnclickOutside(() => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        // clearSuggestions();
    });

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect = ({ description }) => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        // localStorage.setItem("location", description.split(",")[0]);

        // clearSuggestions();

        // Get latitude and longitude via utility functions
        getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            console.log("📍 Coordinates: ", { lat, lng });
        });
    };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <div
                    key={place_id}
                    onClick={() => {
                        handleSelect(suggestion);
                    }}
                    style={{
                        padding: "0.5rem",
                        margin: "0.5rem 0",
                        backgroundColor: "white",
                        cursor: "pointer",
                    }}
                >
                    <span>
                        <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </div>
            );
        });

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
                                <option value="Kiranashop">Kirana shop</option>
                                <option value="FastFoodShop">
                                    FastFood shop
                                </option>
                                <option value="Clothesshop">
                                    Clothes shop
                                </option>
                                <option value="Electronicsshop">
                                    Electronics shop
                                </option>
                            </select>
                        </div>
                        {/* <div className="col">
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
                        </div> */}
                        {/* <div className="exact-location"> */}
                        {/* <p>
                                Choose the exact location of your shop and enter
                                below
                            </p> */}
                        {/* <div className="addShopLocation">
                                <GoogleMap
                                    location={location}
                                    state={state}
                                    city={city}
                                />
                            </div> */}
                        <div>
                            {/* <span>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span> */}
                            <div ref={ref}>
                                <input
                                    type="text"
                                    className="addShopInput"
                                    value={value}
                                    onChange={handleInput}
                                    disabled={!ready}
                                    placeholder="Search for an area,village name"
                                />
                                {/* We can use the "status" to decide whether we should display the dropdown or not */}
                            </div>
                        </div>
                        {/* if input area is not empty show this type of results */}
                        <div>
                            {status === "OK" && (
                                <div className="location">
                                    <span>{renderSuggestions()}</span>
                                </div>
                            )}
                        </div>
                        {/* </div> */}
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
