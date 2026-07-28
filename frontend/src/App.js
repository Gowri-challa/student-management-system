import "./App.css";
import React, { useEffect, useState } from "react";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

import { getAllStudents } from "./services/StudentService";

function App() {

    const [students, setStudents] = useState([]);

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

            <StudentForm refreshStudents={loadStudents} />

            <StudentList
                students={students}
                refreshStudents={loadStudents}
            />

        </div>
    );
}

export default App;