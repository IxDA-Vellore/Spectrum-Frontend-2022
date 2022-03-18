import React from "react";

const Button = ({ children, width, height }) => {
  return (
    <>
      <button style={{ width: { width }, height: { height } }} className="">
        {children}
      </button>
    </>
  );
};

export default Button;
