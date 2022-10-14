import React from "react";
import { Student } from "../studentData";
import StudentInfo from "./StudentInfo";
const StudentList = (props) => {
  return (
    <div>
      <table className="table-form">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        {Student.map((item, index) => {
          return (
            <StudentInfo
              key={item.id}
              id={item.id}
              name={item.name}
              age={item.age}
              address={item.address}
            ></StudentInfo>
          );
        })}
      </table>
    </div>
  );
};

export default StudentList;
