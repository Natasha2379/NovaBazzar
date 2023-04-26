import React from "react";
import image from "../../assets/banner.jpg";

const EditProfile = () => {
    return (
        <div className="EditProfile flex abs-center column">
            <div className="profile-img flex column align-center">
                <div className="image ">
                    <img src={image} alt="my profile image" />
                </div>
                <label htmlFor="myimg">
                    <input type="file" src="" alt="" id="myimg" />
                    upload image
                </label>
            </div>
            <div className="user-name">
                <span className="title">My Name</span>
                <span>
                    <input type="text" placeholder="Update name" />
                </span>
            </div>
            <div className="user-email">
                <span className="title">My Email</span>
                <span>
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Update email"
                    />
                </span>
            </div>
            <div className="user-number">
                <span className="title">My Mobile Number</span>
                <span>
                    <input type="text" placeholder="Update mobile number" />
                </span>
            </div>
            <button className="submit">Submit</button>
        </div>
    );
};

export default EditProfile;
