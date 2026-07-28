import React from "react";
import "./Dashboard.css";

function Dashboard({ students }) {

    const totalStudents = students.length;

    const totalCourses = new Set(
        students.map(student => student.course.toLowerCase())
    ).size;

    const totalFees = students.reduce(
        (sum, student) => sum + Number(student.fee),
        0
    );

    const averageFee =
        totalStudents > 0
            ? (totalFees / totalStudents).toFixed(2)
            : "0.00";

    return (

        <div className="dashboard">

            {/* Total Students */}

            <div className="dashboard-card">

                <div className="dashboard-icon student-icon">

                    👨‍🎓

                </div>

                <h3>Total Students</h3>

                <h1>{totalStudents}</h1>

            </div>

            {/* Total Courses */}

            <div className="dashboard-card">

                <div className="dashboard-icon course-icon">

                    📚

                </div>

                <h3>Total Courses</h3>

                <h1>{totalCourses}</h1>

            </div>

            {/* Total Fees */}

            <div className="dashboard-card">

                <div className="dashboard-icon fee-icon">

                    💰

                </div>

                <h3>Total Fees</h3>

                <h1>₹ {totalFees}</h1>

            </div>

            {/* Average Fee */}

            <div className="dashboard-card">

                <div className="dashboard-icon avg-icon">

                    💵

                </div>

                <h3>Average Fee</h3>

                <h1>₹ {averageFee}</h1>

            </div>

        </div>

    );

}

export default Dashboard;