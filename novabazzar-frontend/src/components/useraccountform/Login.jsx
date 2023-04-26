import React from "react";
import "./accountform.scss";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="LoginForm">
            <form action="" className="flex column">
                <h3>Login</h3>
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Confirm a password" />
                <label htmlFor="remember">
                    <input type="checkbox" name="" id="remember" />
                    <p>Remember me</p>
                </label>
                <button>Login Now</button>
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
