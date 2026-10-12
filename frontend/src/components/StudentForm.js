
import React, { useEffect, useState } from "react";
import "./StudentForm.css";
import {
    saveStudent,
    updateStudent
} from "../services/StudentService";

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (student.id) {
                // Update an existing student
                await updateStudent(student.id, {
                    ...student,
                    fee: Number(student.fee)
                });

                clearForm();

                alert("Student Updated Successfully");
            } else {
                // Create a new student
                const newStudent = {
                    name: student.name.trim(),
                    email: student.email.trim(),
                    course: student.course.trim(),
                    fee: Number(student.fee)
                };

                await saveStudent(newStudent);

                clearForm();

                alert("Student Added Successfully");
            }
        } catch (err) {
            console.error("Unable to save student:", err);

            alert(
                err.response?.data?.message ||
                (student.id
                    ? "Unable to update student. Please try again."
                    : "Unable to add student. Please try again.")
            );

            return;
        }

        // Fetch the latest data after a successful save/update
        try {
            await refreshStudents();
        } catch (err) {
            console.error(
                "Student saved, but refreshing the list failed:",
                err
            );

            alert(
                "Student saved successfully, but the latest list could not be loaded. Please refresh and try again."
            );
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
