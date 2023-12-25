import React from "react";
import warning from "../../assets/svg/warning.png";

function Alert({ text }) {
  return (
    <div className="flex items-center justify-start">
      <img src={warning} alt="warning" className="mr-3 w-[15px]" />
      <span>{text}</span>
    </div>
  );
}

export default Alert;
