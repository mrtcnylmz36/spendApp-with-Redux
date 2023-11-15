import React, { useState } from "react";

function Input({ inputValue, setInputValue }) {
  return (
    <input
      type="number"
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    />
  );
}

export default Input;
