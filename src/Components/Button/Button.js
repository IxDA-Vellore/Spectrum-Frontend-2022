import React from "react";

const Button = ({ children, width, height }) => {
  return (
    <>
      <button
        style={{ width: width, height: height }}
        className="bg-btn-primary text-black font-primary font-semibold text-lg rounded-lg"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
