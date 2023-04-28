import React, { useState } from "react";
import "./Account.scss";

//items to show
import Profile from "../../components/userAccountItems/Profile";
import Favorites from "../../components/userAccountItems/Favorites";
import EditProfile from "../../components/userAccountItems/EditProfile";
import Orders from "../../components/userAccountItems/Orders";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Account = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [active, setActive] = useState("favorites");

    const handleLogout = () => {
        dispatch(logout());
        localStorage.clear();
        navigate("/login");
    };
    return (
        <div className="CreateAccountPage ">
            {/* after user create account and login  */}
            <div className="accountInfo flex  space">
                <ul className="userTabs flex column ">
                    <li className="profileArea ">
                        <Profile />
                    </li>
                    <li
                        onClick={() => setActive("favorites")}
                        className={active === "favorites" ? "activeTab" : "Tab"}
                    >
                        {" "}
                        My Favorites
                    </li>
                    <li
                        onClick={() => setActive("orders")}
                        className={active === "orders" ? "activeTab" : "Tab"}
                    >
                        {" "}
                        My Orders
                    </li>
                    <li
                        onClick={() => setActive("editProfile")}
                        className={
                            active === "editProfile" ? "activeTab" : "Tab"
                        }
                    >
                        {" "}
                        Edit Profile
                    </li>
                    <li
                        onClick={() => handleLogout()}
                        className={active === "out" ? "activeTab" : "Tab"}
                    >
                        {" "}
                        Log out
                    </li>
                </ul>
                <div className="details">
                    {active === "favorites" && <Favorites />}
                    {active === "editProfile" && <EditProfile />}
                    {active === "orders" && <Orders />}
                    {/* {active === "out"} */}
                </div>
            </div>
        </div>
    );
};

export default Account;
