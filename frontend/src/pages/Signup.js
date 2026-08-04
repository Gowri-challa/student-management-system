import React, { useState } from "react";
import "./Signup.css";

import { register } from "../services/AuthService";
import { useNavigate, Link } from "react-router-dom";

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
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

        await register(formData);

        setMessage("Registration Successful!");

        setTimeout(() => {

            navigate("/login");

        }, 1500);

    } catch (error) {

        if (error.response) {

            setMessage(error.response.data);

        } else {

            setMessage("Registration Failed");

        }

    }

};

    return (

        <div className="signup-container">

            <div className="signup-card">

                <h2>Create Account</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />

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
                        className="signup-btn"
                    >
                        Register
                    </button>

                </form>

                <p
                    className="success"
                    style={{
                        color: message.includes("Successful")
                            ? "green"
                            : "red"
                    }}
                >
                    {message}
                </p>

                <div className="login-link">

                    Already have an account?{" "}

                    <Link to="/login">

                        Login

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Signup;