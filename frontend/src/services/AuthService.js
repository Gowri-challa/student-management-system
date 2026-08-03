import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const register = (user) => {
    return axios.post(`${API_URL}/register`, user);
};

export const login = (user) => {
    return axios.post(`${API_URL}/login`, user);
};

export const saveToken = (token) => {
    localStorage.setItem("token", token);
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const logout = () => {
    localStorage.removeItem("token");
};

export const isLoggedIn = () => {
    return getToken() !== null;
};