import React from 'react';
import {useEffect, useState} from "react";
export function StudentList() {
const [students, setStudents] = useState([]);
useEffect(() =>  {
    setStudents([
    { id: 1,
      name: 'Nguyễn Văn A',
      age: 20,
      address: 'Hà Nội',
    },
    { id: 2,
      name: 'Nguyễn Văn B',
      age: 22,
      address: 'Huế',
    },
    { id:3,
      name: 'Nguyễn Văn C',
      age: 21,
      address: 'Đà Nẵng',
    },
  ])});

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
        <table >
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
        {
            students.map((values, index) => {
            return (
                <tr key={index}>
                <td>{values.id}</td>
                <td>{values.name}</td>
                <td>{values.age}</td>
                <td>{values.address}</td>
        </tr>
    )
})
}
        </tbody>
        </table>
     
    </div>
  );
}

export default StudentList;
