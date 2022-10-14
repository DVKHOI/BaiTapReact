import React from "react";
const StudentInfo = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.address}</td>
    </tr>
  );
};

export default StudentInfo;
