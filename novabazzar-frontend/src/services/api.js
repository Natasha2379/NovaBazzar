import axios from "axios";
// const REACT_APP_SERVER_DOMAIN = "http://localhost:8000"; //local server
const REACT_APP_SERVER_DOMAIN = "https://ijpkaushik-novabazzar.onrender.com"; // deployed server

/***************************** USERS *****************************/
//function to register
export const registerUser = (form) => {
    return axios.post(REACT_APP_SERVER_DOMAIN + "/api/users/register", form);
};

//function to login
export const loginUser = (form) => {
    return axios.post(REACT_APP_SERVER_DOMAIN + "/api/users/login", form);
};

//get user data
export const getUserDetails = (jwt_id) => {
    return axios.get(REACT_APP_SERVER_DOMAIN + "/api/users/user/" + jwt_id);
};

//get all users data
export const getAllUsersDetails = () => {
    return axios.get(REACT_APP_SERVER_DOMAIN + "/api/users/");
};

//edit user data
export const editUserDetails = (user_id, userData) => {
    return axios.put(
        REACT_APP_SERVER_DOMAIN + "/api/users/user/" + user_id,
        userData,
    );
};

//add product to fav
export const editUserFavs = (favourites, user_id) => {
    return axios.put(
        REACT_APP_SERVER_DOMAIN + "/api/users/user-fav/" + user_id,
        favourites,
    );
};

//edit user password
export const editUserPassword = (user_id, password) => {
    return axios.put(
        REACT_APP_SERVER_DOMAIN + "/api/users/user-password/" + user_id,
        password,
    );
};

//delete user data
export const deleteUserDetails = (jwt_id) => {
    return axios.delete(REACT_APP_SERVER_DOMAIN + "/api/users/user/" + jwt_id);
};

//upload user profile pic to aws
export const uploadUserProfileImage = (formData) => {
    return axios.post(
        REACT_APP_SERVER_DOMAIN + "/api/users/upload-profile-image",
        formData,
    );
};

/***************************** PRODUCTS *****************************/
//function to add product
export const addProduct = (form) => {
    return axios.post(REACT_APP_SERVER_DOMAIN + "/api/products/add", form);
};

//get product data
export const getProductDetails = (product_id) => {
    return axios.get(
        REACT_APP_SERVER_DOMAIN + "/api/products/product/" + product_id,
    );
};

//get all products data
export const getAllProductsDetails = (search, sort, type) => {
    return axios.get(
        REACT_APP_SERVER_DOMAIN +
            `/api/products/?search=${search}&sort=${sort?.sort},${sort?.order}&type=${type}`,
    );
};

//get all products data
export const getAllShopProducts = (shopid, search, type, sort) => {
    return axios.get(
        REACT_APP_SERVER_DOMAIN +
            `/api/products/shop/` +
            shopid +
            `?search=${search}&type=${type}&sort=${sort?.sort},${sort?.order}`,
    );
};

//edit product data
export const editProductDetails = (product_id, productData) => {
    return axios.put(
        REACT_APP_SERVER_DOMAIN + "/api/products/product/" + product_id,
        productData,
    );
};

//delete product data
export const deleteProductDetails = (product_id) => {
    return axios.delete(
        REACT_APP_SERVER_DOMAIN + "/api/products/product/" + product_id,
    );
};

//upload product image to aws
export const uploadProductImage = (formData) => {
    return axios.post(
        REACT_APP_SERVER_DOMAIN + "/api/products/upload-product-image",
        formData,
    );
};

/***************************** SHOPS *****************************/
//function to add shop
export const getOTP = (form) => {
    return axios.post(REACT_APP_SERVER_DOMAIN + "/api/shops/addshop-otp", form);
};

//function to add shop
export const addShop = (form) => {
    return axios.post(REACT_APP_SERVER_DOMAIN + "/api/shops/add", form);
};

//get shop data
export const getShopDetails = (shop_id) => {
    return axios.get(REACT_APP_SERVER_DOMAIN + "/api/shops/shop/" + shop_id);
};

//get shop of user
export const getShopOfUser = (user_id) => {
    return axios.get(
        REACT_APP_SERVER_DOMAIN + "/api/shops/user-shop/" + user_id,
    );
};

//get all shops data
export const getAllShopsDetails = (search, type) => {
    return axios.get(
        REACT_APP_SERVER_DOMAIN + `/api/shops/?type=${type}&search=${search}`,
    );
};

//edit shop data
export const editShopDetails = (shop_id, shopData) => {
    return axios.put(
        REACT_APP_SERVER_DOMAIN + "/api/shops/shop/" + shop_id,
        shopData,
    );
};

//delete shop data
export const deleteShopDetails = (shop_id) => {
    return axios.delete(REACT_APP_SERVER_DOMAIN + "/api/shops/shop/" + shop_id);
};

//upload shop image to aws
export const uploadShopImage = (formData) => {
    return axios.post(
        REACT_APP_SERVER_DOMAIN + "/api/shops/upload-shop-image",
        formData,
    );
};

/***************************** ORDERS *****************************/
//function to place order
export const addOrder = (form) => {
    return axios.post(REACT_APP_SERVER_DOMAIN + "/api/orders/add", form);
};

//get order data
export const getOrderDetails = (order_id) => {
    return axios.get(REACT_APP_SERVER_DOMAIN + "/api/orders/order/" + order_id);
};

//get order of user
export const getOrdersOfUser = (user_id) => {
    return axios.get(
        REACT_APP_SERVER_DOMAIN + "/api/orders/user-order/" + user_id,
    );
};

//edit order data
export const editOrderDetails = (order_id, orderData) => {
    return axios.put(
        REACT_APP_SERVER_DOMAIN + "/api/orders/order/" + order_id,
        orderData,
    );
};

//delete order data
export const deleteOrderDetails = (order_id) => {
    return axios.delete(
        REACT_APP_SERVER_DOMAIN + "/api/orders/order/" + order_id,
    );
};
