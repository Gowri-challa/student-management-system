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

        <div className="form-card">

            <h2>Add Student</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={student.name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={student.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="course"
                    placeholder="Enter Course"
                    value={student.course}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="fee"
                    placeholder="Enter Fee"
                    value={student.fee}
                    onChange={handleChange}
                />

                <button className="save-btn" type="submit">

                    Save Student

                </button>

            </form>

        </div>

    );

}

export default StudentForm;