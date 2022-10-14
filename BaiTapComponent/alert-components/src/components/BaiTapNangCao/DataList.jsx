import React from "react";
import { data } from "../../data";
import Info from "./Info";

const tinhTong = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);

  return sum;
};
const value = data.map((item) => {
  item.arrValue.reduce(
    (previousValue, currentValue) =>
      currentValue > previousValue ? currentValue : previousValue,
    {}
  );
});
console.log(value);
const DataList = (props) => {
  return (
    <div>
      {data.map((item, index) => (
        <Info
          key={index}
          id={item.id}
          name={item.name}
          age={item.age}
          arrValue={tinhTong(item.arrValue)}
        ></Info>
      ))}
    </div>
  );
};

export default DataList;
