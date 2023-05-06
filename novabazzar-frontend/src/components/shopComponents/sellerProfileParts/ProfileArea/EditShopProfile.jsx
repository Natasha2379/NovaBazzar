import React from "react";
import "./ProfileStyle.scss";
import shopimg from "../../../../assets/clothes-img.avif";

const EditShopProfile = () => {
    return (
        <div className="edit-seller-profile">
            <form className="EditProfile flex abs-center column">
                <div className="shop-img flex  column align--center">
                    <img src={shopimg} alt="my profile image" />

                    <label htmlFor="myimg">
                        <input type="file" src="" alt="" id="myimg" />
                        upload image
                    </label>
                </div>
                <div className="shop-input-details flex align-center column">
                    <div className="user-name">
                        <span className="title">My Name</span>
                        <span>
                            <input type="text" />
                        </span>
                    </div>
                    <div className="user-name">
                        <span className="title">My Shop Name</span>
                        <span>
                            <input type="text" />
                        </span>
                    </div>
                    <div className="user-name">
                        <span className="title">My Shop Location</span>
                        <span>
                            <input type="text" />
                        </span>
                    </div>
                    <div className="user-email">
                        <span className="title">My Email</span>
                        <span>
                            <input type="email" />
                        </span>
                    </div>
                    <div className="user-number">
                        <span className="title">My Mobile Number</span>
                        <span>
                            <input type="text" placeholder="91+" />
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
