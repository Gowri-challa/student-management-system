import axios from "axios";

const API_URL = "http://localhost:8080/student";

export const getAllStudents = () => {
    return axios.get(`${API_URL}/all`);
};

export const saveStudent = (student) => {
    return axios.post(`${API_URL}/save`, student);
};

export const deleteStudent = (id) => {
    return axios.delete(`${API_URL}/delete/${id}`);
};

export const getStudentById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const updateStudent = (id, student) => {
    return axios.put(`${API_URL}/update/${id}`, student);
};