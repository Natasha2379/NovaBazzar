import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home/Home";
import Shop from "./pages/seller/shop/Shop";
import AddShop from "./pages/seller/addShop/AddShop";
import EditProduct from "./components/shopComponents/editProduct/EditProduct";
import SellerLogin from "./pages/seller/sellerProfile/SellerProfile";
import SearchPage from "./pages/searchPage/SearchPage";
import Location from "./pages/location/Location";

// user account pages
import ProfilePage from "./pages/useraccount/ProfilePage";
import Register from "./pages/useraccount/Forms/RegisterPage";
import Login from "./pages/useraccount/Forms/LoginPage";

import { addUser, addUserID, selectUserData } from "./redux/slices/userSlice";
import jwtDecode from "jwt-decode";
import { getUserDetails } from "./services/api";
import Cart from "./pages/cart/Cart";

function App() {
    const user = useSelector(selectUserData);
    console.log(user);
    const dispatch = useDispatch();

    useEffect(() => {
        const assignUser = async () => {
            const jwt = localStorage.getItem("access_token");
            try {
                if (jwt) {
                    const user_jwt = jwtDecode(jwt);
                    const { data } = await getUserDetails(user_jwt.user_id);

                    dispatch(addUser(data.user));
                    dispatch(addUserID(user_jwt.user_id));
                }
            } catch (error) {
                console.log(error);
            }
        };
        assignUser();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/register"
                    element={user ? <Home /> : <Register />}
                />
                <Route path="/login" element={user ? <Home /> : <Login />} />
                <Route
                    path="/userProfile"
                    element={user ? <ProfilePage /> : <Home />}
                />
                <Route path="/seller" element={<SellerLogin />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/addshop" element={<AddShop />} />
                <Route path="/shop/:shopid" element={<Shop />} />
                <Route
                    path="/editproduct/:productid"
                    element={<EditProduct />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/location" element={<Location />} />
            </Routes>
        </Router>
    );
}

export default App;
