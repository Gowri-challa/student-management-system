
import "../App.css";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import SearchBar from "../components/SearchBar";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

import { getAllStudents } from "../services/StudentService";
import { logout } from "../services/AuthService";

function Home() {
    const navigate = useNavigate();

    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch the latest student data from the backend
    const loadStudents = useCallback(async (retry = false) => {
        try {
            const response = await getAllStudents();

            setStudents(response.data);

            return response.data;
        } catch (error) {
            console.error("Unable to load students:", error);

            if (retry) {
                await new Promise((resolve) => setTimeout(resolve, 500));

                return loadStudents(false);
            }

            throw error;
        }
    }, []);

    // Load students when the Home component mounts
    useEffect(() => {
        loadStudents(true).catch((error) => {
            console.error(
                "Failed to load students after retry:",
                error
            );
        });
    }, [loadStudents]);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="container">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <h1 className="title">
                    Student Management System
                </h1>

                <button
                    onClick={handleLogout}
                    style={{
                        height: "40px",
                        padding: "0 20px",
                        cursor: "pointer"
                    }}
                >
                    Logout
                </button>
            </div>

            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <Dashboard students={students} />

            <StudentForm
                refreshStudents={loadStudents}
                selectedStudent={selectedStudent}
                setSelectedStudent={setSelectedStudent}
            />

            <StudentList
                students={students}
                refreshStudents={loadStudents}
                setSelectedStudent={setSelectedStudent}
                searchTerm={searchTerm}
            />
        </div>
    );
}

export default Home;
