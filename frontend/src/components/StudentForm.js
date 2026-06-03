import React, { useState } from "react";
import { saveStudent } from "../services/StudentService";

function StudentForm({ refreshStudents }) {

    const [student, setStudent] = useState({
        name: "",
        email: "",
        course: "",
        fee: ""
    });

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        saveStudent(student)
            .then(() => {
                alert("Student Added Successfully");

                setStudent({
                    name: "",
                    email: "",
                    course: "",
                    fee: ""
                });

                refreshStudents();
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Add Student</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={student.name}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={student.email}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={student.course}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="fee"
                    placeholder="Fee"
                    value={student.fee}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    Save Student
                </button>

            </form>
        </div>
    );
}

export default StudentForm;