import React from "react";
import "./FormPages.scss";
import Login from "../../../components/userAccountForms/Login";

const LoginPage = () => {
    return (
        <div className="loginPage flex abs-center">
            <Login />
        </div>
    );
};

export default LoginPage;
