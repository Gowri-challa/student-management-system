import React from "react";
import { deleteStudent } from "../services/StudentService";

function StudentList({ students, refreshStudents }) {

    const handleDelete = (id) => {

        deleteStudent(id)

            .then(() => {

                alert("Student Deleted Successfully");

                refreshStudents();

            })

            .catch((error) => {

                console.log(error);

            });

    };

    return (

        <div className="table-card">

            <h2>Student List</h2>

            <table>

                <thead>

                <tr>

                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Fee</th>
                    <th>Action</th>

                </tr>

                </thead>

                <tbody>

                {

                    students.map((student) => (

                        <tr key={student.id}>

                            <td>{student.id}</td>

                            <td>{student.name}</td>

                            <td>{student.email}</td>

                            <td>{student.course}</td>

                            <td>{student.fee}</td>

                            <td>

                                <button

                                    className="delete-btn"

                                    onClick={() => handleDelete(student.id)}

                                >

                                    Delete

                                </button>

                            </td>

                        </tr>

                    ))

                }

                </tbody>

            </table>

        </div>

    );

}

export default StudentList;