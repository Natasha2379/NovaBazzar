import React from "react";
import "./Account.scss";

const Account = () => {
    return (
        <div className="CreateAccountPage flex abs-center">
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
                        Already have a account? <button>Login now</button>
                    </p>
                </form>
            </div>
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
                        <button>Register now</button>{" "}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Account;
