import axios from "axios";
import { getToken } from "./AuthService";

const API_URL = "http://localhost:8080/student";

const authHeader = () => {

    return {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    };

};

export const getAllStudents = () => {

    return axios.get(`${API_URL}/all`, authHeader());

};

export const saveStudent = (student) => {

    return axios.post(`${API_URL}/save`, student, authHeader());

};

export const deleteStudent = (id) => {

    return axios.delete(`${API_URL}/delete/${id}`, authHeader());

};

export const getStudentById = (id) => {

    return axios.get(`${API_URL}/${id}`, authHeader());

};

export const updateStudent = (id, student) => {

    return axios.put(
        `${API_URL}/update/${id}`,
        student,
        authHeader()
    );

};