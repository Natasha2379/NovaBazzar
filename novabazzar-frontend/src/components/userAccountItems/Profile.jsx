import React from "react";
import "./UserAccountStyle.scss";
import image from "../../assets/banner.jpg";

const Profile = () => {
    return (
        <div className="myprofile flex abs-center column">
            <div className="profile-img">
                <img src={image} alt="" />
            </div>
            <div className="my-details">
                <div className="my-name">Dummy Singh</div>
                <div className="my-emil">dummy@gmail.com</div>
                <div className="my-number">+91 8466745986</div>
            </div>
        </div>
    );
};

export default Profile;
