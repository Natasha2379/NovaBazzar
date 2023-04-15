import axios from "axios";

/***************************** USERS *****************************/
//function to register
export const registerUser = (form) => {
    return axios.post(
        process.env.REACT_APP_SERVER_DOMAIN + "/api/users/register",
        form,
    );
};

//function to login
export const loginUser = (form) => {
    return axios.post(
        process.env.REACT_APP_SERVER_DOMAIN + "/api/users/login",
        form,
    );
};

//get user data
export const getUserDetails = (jwt_id) => {
    return axios.get(
        process.env.REACT_APP_SERVER_DOMAIN + "/api/users/user/" + jwt_id,
    );
};

//get all users data
export const getAllUsersDetails = () => {
    return axios.get(process.env.REACT_APP_SERVER_DOMAIN + "/api/users/");
};

//edit user data
export const editUserDetails = (user_id, userData) => {
    return axios.put(
        process.env.REACT_APP_SERVER_DOMAIN + "/api/users/user/" + user_id,
        userData,
    );
};

//edit user password
export const editUserPassword = (user_id, password) => {
    return axios.put(
        process.env.REACT_APP_SERVER_DOMAIN +
            "/api/users/user-password/" +
            user_id,
        password,
    );
};

//delete user data
export const deleteUserDetails = (jwt_id) => {
    return axios.delete(
        process.env.REACT_APP_SERVER_DOMAIN + "/api/users/user/" + jwt_id,
    );
};

//upload user profile pic to aws
export const uploadUserProfileImage = (formData) => {
    return axios.post(
        process.env.REACT_APP_SERVER_DOMAIN + "/api/users/upload-profile-image",
        formData,
    );
};

/***************************** PRODUCTS *****************************/
//function to add product
export const addProduct = (form) => {
    return axios.post(
        process.env.REACT_APP_SERVER_DOMAIN + "/api/products/add",
        form,
    );
};

//get product data
export const getProductDetails = (product_id) => {
    return axios.get(
        process.env.REACT_APP_SERVER_DOMAIN +
            "/api/products/product/" +
            product_id,
    );
};

//get all products data
export const getAllProductsDetails = (search) => {
    return axios.get(
        process.env.REACT_APP_SERVER_DOMAIN + `/api/products/?search=${search}`,
    );
};

//edit product data
export const editProductDetails = (product_id, productData) => {
    return axios.put(
        process.env.REACT_APP_SERVER_DOMAIN +
            "/api/products/product/" +
            product_id,
        productData,
    );
};

//delete product data
export const deleteProductDetails = (product_id) => {
    return axios.delete(
        process.env.REACT_APP_SERVER_DOMAIN +
            "/api/products/product/" +
            product_id,
    );
};

//upload product image to aws
export const uploadProductImage = (formData) => {
    return axios.post(
        process.env.REACT_APP_SERVER_DOMAIN +
            "/api/products/upload-product-image",
        formData,
    );
};

/***************************** SHOPS *****************************/
//function to add shop
export const addShop = (form) => {
    return axios.post(
        process.env.REACT_APP_SERVER_DOMAIN + "/api/shops/add",
        form,
    );
};

//get shop data
export const getShopDetails = (shop_id) => {
    return axios.get(
        process.env.REACT_APP_SERVER_DOMAIN + "/api/shops/shop/" + shop_id,
    );
};

//get all shops data
export const getAllShopsDetails = (search) => {
    return axios.get(
        process.env.REACT_APP_SERVER_DOMAIN + `/api/shops/?search=${search}`,
    );
};

//edit shop data
export const editShopDetails = (shop_id, shopData) => {
    return axios.put(
        process.env.REACT_APP_SERVER_DOMAIN + "/api/shops/shop/" + shop_id,
        shopData,
    );
};

//delete shop data
export const deleteShopDetails = (shop_id) => {
    return axios.delete(
        process.env.REACT_APP_SERVER_DOMAIN + "/api/shops/shop/" + shop_id,
    );
};

//upload shop image to aws
export const uploadShopImage = (formData) => {
    return axios.post(
        process.env.REACT_APP_SERVER_DOMAIN + "/api/shops/upload-shop-image",
        formData,
    );
};
