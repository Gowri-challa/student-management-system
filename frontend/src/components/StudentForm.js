import React, { useEffect, useState } from "react";
import "./StudentForm.css";
import { saveStudent, updateStudent } from "../services/StudentService";

function StudentForm({
    refreshStudents,
    selectedStudent,
    setSelectedStudent
}) {

    const [student, setStudent] = useState({
        id: "",
        name: "",
        email: "",
        course: "",
        fee: ""
    });

    useEffect(() => {

        if (selectedStudent) {
            setStudent(selectedStudent);
        }

    }, [selectedStudent]);

    const handleChange = (e) => {

        setStudent({

            ...student,

            [e.target.name]: e.target.value

        });

    };

    const clearForm = () => {

        setStudent({

            id: "",
            name: "",
            email: "",
            course: "",
            fee: ""

        });

        setSelectedStudent(null);

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (student.id) {

            updateStudent(student.id, student)

                .then(() => {

                    alert("Student Updated Successfully");

                    clearForm();

                    refreshStudents();

                })

                .catch((err) => console.log(err));

        }

        else {

            const newStudent = {
                name: student.name.trim(),
                email: student.email.trim(),
                course: student.course.trim(),
                fee: Number(student.fee)
            };

            saveStudent(newStudent)

                .then(() => {

                    alert("Student Added Successfully");

                    clearForm();

                    refreshStudents();

                })

                .catch((err) => {
                    console.error("Unable to add student", err);
                    alert(err.response?.data?.message || "Unable to add student. Please try again.");
                });

        }

    };

    return (

        <div className="form-card">

            <h2>

                {student.id ? "Update Student" : "Add Student"}

            </h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={student.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={student.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="course"
                    placeholder="Enter Course"
                    value={student.course}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="fee"
                    placeholder="Enter Fee"
                    value={student.fee}
                    onChange={handleChange}
                    required
                />

                <button className="save-btn" type="submit">

                    {student.id ? "Update Student" : "Save Student"}

                </button>

            </form>

        </div>

    );

}

export default StudentForm;