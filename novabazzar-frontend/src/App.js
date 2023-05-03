import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home/Home";
import Shop from "./pages/seller/Shop/shop";
import AddShop from "./pages/seller/AddShop/AddShop";
import EditProduct from "./components/shopComponents/EditProduct/EditProduct";
import ProductDetail from "./pages/productDetail/ProductDetail";
import SearchPage from "./pages/SearchPage/SearchPage";
import SellerProfile from "./pages/seller/SellerProfile/sellerProfile";
import PlaceOrder from "./pages/orderPage/OrderPage";
// user account pages
import ProfilePage from "./pages/Buyer/BuyerProfile/BuyerProfile";
import Register from "./pages/Buyer/Forms/RegisterPage";
import Login from "./pages/Buyer/Forms/LoginPage";

import { addUser, addUserID, selectUserData } from "./redux/slices/userSlice";
import jwtDecode from "jwt-decode";
import { getUserDetails } from "./services/api";
import Cart from "./pages/Cart/Cart";

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
                <Route path="/profile" element={<ProfilePage />} />

                <Route path="/search" element={<SearchPage />} />
                <Route path="/seller/addshop" element={<AddShop />} />
                <Route path="/shop/:shopid" element={<Shop />} />
                <Route
                    path="/editproduct/:productid"
                    element={<EditProduct />}
                />
                <Route path="/buyer/cart" element={<Cart />} />
                <Route path="/productdetail" element={<ProductDetail />} />
                <Route path="/sellerprofile" element={<SellerProfile />} />
                <Route path="/placeorder" element={<PlaceOrder />} />
            </Routes>
        </Router>
    );
}

export default App;
