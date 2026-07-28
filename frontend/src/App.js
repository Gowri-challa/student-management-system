import "./App.css";
import React, { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

import { getAllStudents } from "./services/StudentService";

function App() {

    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const loadStudents = () => {

        getAllStudents()
            .then((response) => {
                setStudents(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    useEffect(() => {

        loadStudents();

    }, []);

    return (

        <div className="container">

            <h1 className="title">

                Student Management System

            </h1>

            {/* Search Bar */}

            <SearchBar

                searchTerm={searchTerm}

                setSearchTerm={setSearchTerm}

            />

            {/* Dashboard */}

            <Dashboard students={students} />

            {/* Student Form */}

            <StudentForm

                refreshStudents={loadStudents}

                selectedStudent={selectedStudent}

                setSelectedStudent={setSelectedStudent}

            />

            {/* Student List */}

            <StudentList

                students={students}

                refreshStudents={loadStudents}

                setSelectedStudent={setSelectedStudent}

                searchTerm={searchTerm}

            />

        </div>

    );

}

export default App;