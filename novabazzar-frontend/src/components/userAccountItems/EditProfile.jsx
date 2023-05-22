import React, { useState } from "react";
// import profile_pic from "../../assets/banner.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
    addUser,
    selectUserData,
    selectUser_ID,
} from "../../redux/slices/userSlice";
import { editUserDetails, uploadUserProfileImage } from "../../services/api";

const EditProfile = () => {
    const userid = useSelector(selectUser_ID);
    const user = useSelector(selectUserData);
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [profileImage, setProfileImage] = useState();

    const handleProfileImageUpload = () => {
        document.getElementById("profileImage").click();
    };

    const handleProfileImageChange = async (e) => {
        try {
            const formData = new FormData();
            formData.append("profile-image", e.target.files[0]);
            const res = await uploadUserProfileImage(formData);
            const { data } = await editUserDetails(userid, {
                profile_picture: res.data.url,
            });
            setProfileImage(res.data.url);
            dispatch(addUser(data.user));
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditUser = async () => {
        try {
            const res = await editUserDetails(userid, { name, email, phone });
            dispatch(addUser(res.data.user));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            className="EditProfile flex abs-center column"
            onSubmit={handleEditUser}
        >
            <div className="profile-img flex column align-center">
                <div
                    className="image"
                    style={{
                        backgroundImage: `url(${
                            user?.profile_picture || profileImage
                        })`,
                        // backgroundColor: "red",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div
                    className="uploadImageDiv"
                    onClick={handleProfileImageUpload}
                >
                    <input
                        type="file"
                        styles={{ display: "none" }}
                        id="profileImage"
                        accept="image/*"
                        onChange={handleProfileImageChange}
                    />
                    upload image
                </div>
            </div>
            <div className="user-name">
                <span className="title">My Name</span>
                <span>
                    <input
                        type="text"
                        placeholder={user?.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </span>
            </div>
            <div className="user-email">
                <span className="title">My Email</span>
                <span>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={user?.email}
                    />
                </span>
            </div>
            <div className="user-number">
                <span className="title">My Mobile Number</span>
                <span>
                    <input
                        type="text"
                        placeholder={user?.phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </span>
            </div>
            <button className="submit" type="submit">
                {" "}
                Submit
            </button>
        </form>
    );
};

export default EditProfile;
