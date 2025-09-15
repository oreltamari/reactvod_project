import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function VodInput() {
  let inputRef = useRef();
  const nav = useNavigate();

  const onKeyboardClick = (e) => {
    if (e.key == "Enter") {
      onSearchClick();
    }
  };

  const onSearchClick = () => {
    let input_val = inputRef.current.value;
    nav(`/?s=${input_val}`);
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="logo col-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default VodInput;

export default VodInput;
