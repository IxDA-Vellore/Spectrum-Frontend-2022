import React, { useState } from "react";

// Icons Import
import Chevron from "../../Icons/Chevron";

const Button = ({ children, width, height }) => {
  const [hideChevron, setHideChevron] = useState("hidden");

  return (
    <>
      <button
        style={{ width: width, height: height }}
        className="bg-btn-primary hover:bg-btn-hover border-8 border-btn-primary hover:border-btn-hover text-black font-primary font-bold text-lg rounded-lg duration-300 ease-in-out my-4 mx-4"
        onMouseEnter={() => setHideChevron("block")}
        onMouseLeave={() => setHideChevron("hidden")}
      >
        <div className="flex justify-center items-center">
          {children}
          <div className={`${hideChevron} pl-2`}>
            <Chevron />
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
