import React from "react";
import "./Button.css";
const Button = ({ btnText }) => {
  return (
    <button className="mainBtn">
      <p className="btn-text">{btnText}</p>
      <span className="square"></span>
    </button>
  );
};

export default Button;
