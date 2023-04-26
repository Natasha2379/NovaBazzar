import React, { useState } from "react";
import "./Account.scss";

//items to show
import Profile from "../../components/userAccountItems/Profile";
import Favorites from "../../components/userAccountItems/Favorites";
import EditProfile from "../../components/userAccountItems/EditProfile";
import Orders from "../../components/userAccountItems/Orders";

const Account = () => {
    const [active, setActive] = useState("favorites");
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
                        onClick={() => setActive("out")}
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
                    {active === "out" && "Successfully Log out"}
                </div>
            </div>
        </div>
    );
};

export default Account;
