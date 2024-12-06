import React from 'react'
import { useState } from 'react';

const Cart = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Muthuleka", role: " Front End Developer", status: "Absent" },
        { id: 2, name: "Shalini", role: "Back end developer", status: "Absent" },
      ]);
      const updateStatus = (id, newStatus) => {
        const updatedUsers = users.map(user =>
          user.id === id ? { ...user, status: newStatus } : user
        );
        setUsers(updatedUsers);
      };
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
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => updateStatus(user.id, "Present")}>
                  Present
                </button>
                <button onClick={() => updateStatus(user.id, "Absent")}>
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