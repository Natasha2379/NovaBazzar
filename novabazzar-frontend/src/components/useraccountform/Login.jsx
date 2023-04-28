import React, { useState } from "react";
import "./accountform.scss";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/api";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const userData = {
            email,
            password,
        };
        try {
            const res = await loginUser(userData);
            console.log(res);
            localStorage.setItem("access_token", res?.data?.token);
            navigate("/");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="LoginForm">
            <form action="" className="flex column">
                <h3>Login</h3>
                <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="remember">
                    <input type="checkbox" name="" id="remember" />
                    <p>Remember me</p>
                </label>
                <button onClick={handleLogin} type="button">
                    Login Now
                </button>
                <p>
                    {`Don't have an account? `}
                    <Link to="/register" className="link">
                        Register now
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
