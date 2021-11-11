import React from "react";
import "./index.css";

const Square = (props) => {
  return (
    <button
      className={props.isClicked ? "current square" : "square"}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Square;
