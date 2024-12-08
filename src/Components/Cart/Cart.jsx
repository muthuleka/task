import React from 'react'
import { useState } from 'react';

const Cart = () => {
    const [student, setstudent] = useState([
        { id: 1, name: "Muthuleka", role: " Front End Developer", status: "Absent" },
        { id: 2, name: "Shalini", role: "Back end developer", status: "Absent" },
      ]);

        function updatepresent(id,data) {
        console.log("id:",id);
        console.log("values:",data);
        const mydata = student.map(student =>
        student.id === id ? { ...student, status: data } : student)
        console.log(mydata);
        setstudent(mydata)
      }
  return (
    <>
    <div>
      <h1>User Attendance</h1>
      <table border="1" style={{ width: "80%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {student.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.role}</td>
              <td>{student.status}</td>
              <td>
                <button onClick={() => updatepresent(student.id, "Present")}>
                  Present
                </button>
                <button onClick={() => updatepresent(student.id, "Absent")}>
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Cart