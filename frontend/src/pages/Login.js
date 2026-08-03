import React, { useState } from "react";
import "./Login.css";

import { login, saveToken } from "../services/AuthService";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await login(formData);

            // Save JWT Token
            saveToken(response.data.token);

            // Show success message
            setMessage("Login Successful!");

            // Keep your original flow
            setTimeout(() => {
                navigate("/");
            }, 1000);

        } catch (error) {

            if (error.response) {

                setMessage(error.response.data);

            } else {

                setMessage("Invalid Email or Password");

            }

        }

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <h2>Login</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit"
                        className="login-btn"
                    >
                        Login
                    </button>

                </form>

                <p className="success">
                    {message}
                </p>

                <div className="register-link">

                    Don't have an account?{" "}

                    <Link to="/signup">
                        Register
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Login;