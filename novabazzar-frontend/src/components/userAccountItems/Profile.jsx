import React from "react";
import "./UserAccount.scss";
import image from "../../assets/dummy-img.jpg";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";

const Profile = () => {
    const user = useSelector(selectUserData);
    return (
        <div className="myprofile flex abs-center column">
            <div className="profile-img">
                <img src={user?.profile_picture || image} alt="" />
            </div>
            <div className="my-details">
                <div className="my-name">{user?.name}</div>
                <div className="my-emil">{user?.email}</div>
                <div className="my-number">+91 {user?.phone}</div>
            </div>
        </div>
    );
};

export default Profile;
