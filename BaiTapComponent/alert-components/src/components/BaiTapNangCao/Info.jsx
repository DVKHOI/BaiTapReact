import React from "react";
const Info = (props) => {
  return (
    <div>
      <table>
        <tr>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.age}</td>
          <td>{props.arrValue}</td>
        </tr>
      </table>
    </div>
  );
};

export default Info;
