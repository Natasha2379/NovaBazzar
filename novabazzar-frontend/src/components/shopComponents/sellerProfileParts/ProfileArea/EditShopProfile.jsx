import React, { useState } from "react";
import "./ProfileStyle.scss";
import shopimg from "../../../../assets/clothes-img.avif";
import { editShopDetails, uploadShopImage } from "../../../../services/api";

const EditShopProfile = (props) => {
    const [shopImage, setProfileImage] = useState();

    const handleProfileImageUpload = () => {
        document.getElementById("shopImage").click();
    };

    const handleProfileImageChange = async (e) => {
        try {
            const formData = new FormData();
            formData.append("shop-image", e.target.files[0]);
            const res = await uploadShopImage(formData);

            await editShopDetails(props.shop?._id, {
                shopImage: res.data.url,
            });
            setProfileImage(res.data.url);
            props.fetchShop();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="edit-seller-profile">
            <form className="EditProfile flex abs-center column">
                <div className="shop-img flex  column align--center">
                    <span
                        className="image"
                        style={{
                            backgroundImage: `url(${
                                props.shop?.shopImage || shopimg
                            })`,
                            // backgroundColor: "red",
                            backgroundSize: "profile",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
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
                            />
                        </span>
                    </div>
                    <div className="user-name">
                        <span className="title">My Shop Name</span>
                        <span>
                            <input
                                type="text"
                                placeholder={props.shop?.shopName}
                            />
                        </span>
                    </div>
                    <div className="user-name">
                        <span
                            className="title"
                            placeholder={props.shop?.location}
                        >
                            My Shop Location
                        </span>
                        <span>
                            <input type="text" />
                        </span>
                    </div>
                    <div className="user-email">
                        <span className="title">My Email</span>
                        <span>
                            <input
                                type="email"
                                placeholder={props.shop?.email}
                            />
                        </span>
                    </div>
                    <div className="user-number">
                        <span className="title">My Mobile Number</span>
                        <span>
                            <input
                                type="text"
                                placeholder={props.shop?.phone}
                            />
                        </span>
                    </div>
                    <button className="submit" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditShopProfile;
