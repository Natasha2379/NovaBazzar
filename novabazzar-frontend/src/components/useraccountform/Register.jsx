import React from "react";
import "./accountform.scss";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="RegisterForm">
            <form className="flex column">
                <h3>Registration</h3>
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <input type="text" placeholder="Enter your number" />
                <input type="password" placeholder="Create a password" />
                <input type="password" placeholder="Confirm a password" />
                <label htmlFor="check">
                    <input type="checkbox" name="" id="check" />
                    <p>I accept all terms & conditions</p>
                </label>
                <button>Register Now</button>
                <p>
                    Already have a account?{" "}
                    <Link to="/login" className="link">
                        Login now
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
