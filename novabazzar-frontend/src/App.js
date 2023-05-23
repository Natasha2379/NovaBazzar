import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/home/Home";
import Shop from "./pages/Seller/shop/Shop";
import AddShop from "./pages/Seller/addShop/AddShop";
import EditProduct from "./components/ShopComponents/editProduct/EditProduct";
import ProductDetail from "./pages/productDetail/ProductDetail";
import SearchPage from "./pages/SearchPage/SearchPage";
import SellerProfile from "./pages/Seller/SellerProfile/SellerProfile";
// user account pages
import ProfilePage from "./pages/buyer/buyerProfile/BuyerProfile";
import Register from "./pages/buyer/forms/RegisterPage";
import Login from "./pages/buyer/forms/LoginPage";
import Location from "./pages/Location/Location";

import { addUser, addUserID, selectUserData } from "./redux/slices/userSlice";
import jwtDecode from "jwt-decode";
import { getUserDetails } from "./services/api";
import Cart from "./pages/Cart/Cart";

function App() {
    const user = useSelector(selectUserData);
    const dispatch = useDispatch();
    const [userLocation, setUserLocation] = useState();

    useEffect(() => {}, []);
    useEffect(() => {
        const assignUser = async () => {
            const userLocation = localStorage.getItem("location");
            setUserLocation(userLocation);
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
                    path="/buyer/register"
                    element={user ? <Home /> : <Register />}
                />
                <Route
                    path="/buyer/login"
                    element={user ? <Home /> : <Login />}
                />
                <Route
                    path="/buyer/profile"
                    element={user ? <ProfilePage /> : <Home />}
                />
                <Route
                    path="/profile"
                    element={user ? <ProfilePage /> : <Login />}
                />

                <Route path="/search" element={<SearchPage />} />
                <Route
                    path="/seller/addshop"
                    element={user ? <AddShop /> : <Login />}
                />
                <Route path="/shop/:shopid" element={<Shop />} />
                <Route
                    path="/editproduct/:productid"
                    element={<EditProduct />}
                />
                <Route
                    path="/buyer/cart"
                    element={user ? <Cart /> : <Login />}
                />
                <Route
                    path="/productdetail/:productid"
                    element={<ProductDetail />}
                />
                <Route path="/sellerprofile" element={<SellerProfile />} />
                <Route
                    path="/location"
                    element={
                        <Location
                            userLocation={userLocation}
                            setUserLocation={setUserLocation}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
