import React from "react";
import "./Alert.css";

const Alert = (props) => {
  return (
    <div className={props.isOpen ? "alertBoxOpen" : "alertBoxClosed"}>
      <div />
      {props.message}
      <div />
    </div>
  );
};

export default Alert;
