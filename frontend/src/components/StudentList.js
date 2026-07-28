import React from "react";
import "./StudentList.css";
import { deleteStudent } from "../services/StudentService";

function StudentList({

    students,

    refreshStudents,

    setSelectedStudent,

    searchTerm

}) {

    const handleDelete = (id) => {

        if (window.confirm("Are you sure you want to delete this student?")) {

            deleteStudent(id)

                .then(() => {

                    alert("Student Deleted Successfully");

                    refreshStudents();

                })

                .catch((error) => {

                    console.log(error);

                });

        }

    };

    const handleEdit = (student) => {

        setSelectedStudent(student);

    };

    // Search Filter

  const filteredStudents = students.filter((student) => {

    const search = searchTerm.toLowerCase();

    return (

        student.id.toString().includes(search) ||

        student.name.toLowerCase().includes(search) ||

        student.email.toLowerCase().includes(search) ||

        student.course.toLowerCase().includes(search)

    );

});

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

                    filteredStudents.length > 0 ?

                        filteredStudents.map((student) => (

                            <tr key={student.id}>

                                <td>{student.id}</td>

                                <td>{student.name}</td>

                                <td>{student.email}</td>

                                <td>{student.course}</td>

                                <td>{student.fee}</td>

                                <td>

                                    <button

                                        className="edit-btn"

                                        onClick={() => handleEdit(student)}

                                    >

                                        Edit

                                    </button>

                                    <button

                                        className="delete-btn"

                                        onClick={() => handleDelete(student.id)}

                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                        :

                        (

                            <tr>

                                 <td
    colSpan="6"
    className="no-data"
>

    🔍 No Student Found

</td>

                            </tr>

                        )

                }

                </tbody>

            </table>

        </div>

    );

}

export default StudentList;