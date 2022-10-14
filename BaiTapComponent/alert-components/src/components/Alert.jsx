import React from "react";

const Alert = (props) => {
  return (
    <div className="alert alert-warning" role="alert">
      {props.text}
    </div>
  );
};
// Alert.propTypes = {
//   text: Proptypes.string,
// };
export default Alert;
