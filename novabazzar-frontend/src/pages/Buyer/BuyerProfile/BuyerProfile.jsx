import React, { useEffect, useState } from "react";
import "./BuyerProfile.scss";

//items to show
import Profile from "../../../components/UserAccountItems/Profile";
import Favorites from "../../../components/UserAccountItems/Favorites";
import EditProfile from "../../../components/UserAccountItems/EditProfile";
import Orders from "../../../components/UserAccountItems/Orders";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser_ID } from "../../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { getOrdersOfUser } from "../../../services/api";

const BuyerProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userid = useSelector(selectUser_ID);
    const [orders, setOrders] = useState();

    const [active, setActive] = useState("favorites");

    const handleLogout = () => {
        dispatch(logout());
        localStorage.clear();
        navigate("/buyer/login");
    };

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await getOrdersOfUser(userid);
                setOrders(res.data.orders);
            } catch (err) {
                console.log(err);
            }
        };
        fetchOrders();
    }, [userid]);

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
                        My Orders ({orders?.length})
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
                    {active === "orders" && <Orders orders={orders} />}
                    {/* {active === "out"} */}
                </div>
            </div>
        </div>
    );
};

export default BuyerProfile;
