import React, { useState } from "react";
import profile_pic from "../../assets/banner.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
    addUser,
    selectUserData,
    selectUser_ID,
} from "../../redux/slices/userSlice";
import { editUserDetails } from "../../services/api";

const EditProfile = () => {
    const userid = useSelector(selectUser_ID);
    const dispatch = useDispatch();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

    const handleEditUser = async () => {
        try {
            const res = await editUserDetails(userid, { name, email, phone });
            console.log(res);
            dispatch(addUser(res.data.user));
        } catch (error) {
            console.log(error);
        }
    };

    const user = useSelector(selectUserData);
    return (
        <form
            className="EditProfile flex abs-center column"
            onSubmit={handleEditUser}
        >
            <div className="profile-img flex column align-center">
                <div className="image ">
                    <img src={profile_pic} alt="my profile image" />
                </div>
                <label htmlFor="myimg">
                    <input type="file" src="" alt="" id="myimg" />
                    upload image
                </label>
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
