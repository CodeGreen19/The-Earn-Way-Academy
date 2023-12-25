import React from "react";

function CustomLeftArrow({ onClick }) {
  return <i onClick={() => onClick()} className="custom-left-arrow" />;
}

export default CustomLeftArrow;
