import React, { useState } from "react";
import "./AccountForms.scss";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            window.alert("password mismatch");
            return;
        }

        if (!name || !email || !phone || !password) {
            window.alert("please enter all details");
            return;
        }
        const userData = {
            name,
            email,
            phone,
            password,
        };
        try {
            await registerUser(userData);
            navigate("/buyer/login");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="RegisterForm">
            <form className="flex column">
                <h3>Registration</h3>
                <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter your number"
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Create a password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm a password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label htmlFor="check">
                    <input type="checkbox" name="" id="check" />
                    <p>I accept all terms & conditions</p>
                </label>
                <button type="button" onClick={handleRegister}>
                    Register Now
                </button>
                <p>
                    Already have a account?{" "}
                    <Link to="/buyer/login" className="link">
                        Login now
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
