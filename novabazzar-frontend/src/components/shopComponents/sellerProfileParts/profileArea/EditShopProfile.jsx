import React, { useEffect, useState } from "react";
import "./ProfileStyle.scss";
import shopimg from "../../../../assets/dummy-img.jpg";
import { editShopDetails, uploadShopImage } from "../../../../services/api";
import { useNavigate } from "react-router-dom";

const EditShopProfile = (props) => {
    const [shopImage, setShopImage] = useState();
    const [name, setName] = useState();
    const [shopName, setShopName] = useState();
    const [location, setLocation] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [shopType, setShopType] = useState("");
    const navigator = useNavigate();

    const handleProfileImageUpload = () => {
        document.getElementById("shopImage").click();
    };
    useEffect(() => {
        setShopType(props.shop?.shopType);
    }, [props.shop?.shopType]);

    const handleProfileImageChange = async (e) => {
        try {
            const formData = new FormData();
            formData.append("shop-image", e.target.files[0]);
            const res = await uploadShopImage(formData);
            setShopImage(res.data.url);
            props.fetchShop();
        } catch (error) {
            console.log(error);
        }
    };

    const handleShopEdit = async () => {
        try {
            const res = await editShopDetails(props.shop?._id, {
                name,
                shopName,
                location,
                phone,
                email,
                shopType,
            });
            console.log(res);
            navigator(`/shop/${props.shop?._id}`);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="edit-seller-profile">
            <form
                className="EditProfile flex abs-center column"
                // onSubmit={handleShopEdit}
            >
                <div className="shop-img flex  column align--center">
                    <span
                        className="image"
                        style={{
                            backgroundImage: `url(${
                                props.shop?.shopImage || shopimg
                            })`,
                            backgroundSize: "profile",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    ></span>
                    <div
                        className="uploadImageDiv"
                        onClick={handleProfileImageUpload}
                    >
                        <input
                            type="file"
                            styles={{ display: "none" }}
                            id="shopImage"
                            accept="image/*"
                            onChange={handleProfileImageChange}
                        />
                        upload image
                    </div>
                </div>
                <div className="shop-input-details flex align-center column">
                    <div className="user-name">
                        <span className="title">My Name</span>
                        <span>
                            <input
                                type="text"
                                placeholder={props.shop?.fullName}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </span>
                    </div>
                    <div className="shop-type user-name">
                        <span className="title">My Shop Type</span>
                        <select
                            name=""
                            id="ProductCategory"
                            className="addShopInput"
                            value={shopType}
                            onChange={(e) => setShopType(e.target.value)}
                        >
                            <option hidden>Select Shop Type</option>
                            <option value="Kiranashop">Kirana shop</option>
                            <option value="Fastfoodshop">FastFood shop</option>
                            <option value="Clothesshop">Clothes shop</option>
                            <option value="Electronicsshop">
                                Electronics shop
                            </option>

                            
                        </select>
                    </div>
                    <div className="user-name">
                        <span className="title">My Shop Name</span>
                        <span>
                            <input
                                type="text"
                                placeholder={props.shop?.shopName}
                                onChange={(e) => setShopName(e.target.value)}
                            />
                        </span>
                    </div>
                    <div className="user-name">
                        <span className="title">My Shop Location</span>
                        <span>
                            <input
                                type="text"
                                style={{
                                    cursor: "not-allowed",
                                    backgroundColor: "#dad4d4",
                                }}
                                placeholder={props.shop?.location}
                                disabled
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </span>
                    </div>
                    <div className="user-email">
                        <span className="title">My Email</span>
                        <span>
                            <input
                                type="email"
                                style={{
                                    cursor: "not-allowed",
                                    backgroundColor: "#dad4d4",
                                }}
                                disabled
                                placeholder={props.shop?.email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </span>
                    </div>
                    <div className="user-number">
                        <span className="title">My Mobile Number</span>
                        <span>
                            <input
                                type="text"
                                placeholder={props.shop?.phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </span>
                    </div>
                    <button
                        className="submit"
                        type="button"
                        onClick={handleShopEdit}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditShopProfile;
