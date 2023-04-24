import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home/Home";
import Shop from "./pages/seller/Shop/Shop";
import AddShop from "./pages/seller/AddShop/AddShop";
import EditProduct from "./components/EditProduct/EditProduct";
import BuyerLogin from "./pages/buyer/BuyerLogin/BuyerLogin";
import SellerLogin from "./pages/seller/SellerLogin/SellerLogin";

import { addUser, addUserID, selectUserData } from "./redux/slices/userSlice";
import jwtDecode from "jwt-decode";
import { getUserDetails } from "./services/api";
import Product from "./pages/Product/Product";

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

                    dispatch(addUser(data));
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
                <Route path="/seller" element={<BuyerLogin />} />
                <Route path="/buyer" element={<SellerLogin />} />
                <Route path="/addshop" element={<AddShop />} />
                <Route path="/shop/:shopid" element={<Shop />} />
                <Route path="/product/:productid" element={<Product />} />
                <Route
                    path="/editproduct/:productid"
                    element={<EditProduct />}
                />
            </Routes>
        </Router>
    );
}

export default App;
