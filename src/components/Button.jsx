import React from "react";
import { useSelector } from "react-redux";

function Button({ value, id, onClick }) {
  return (
    <button id={id} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
