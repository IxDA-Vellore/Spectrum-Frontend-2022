import React, { useState, useRef, useEffect } from "react";
import "../FaqSection/FaqSection.css";
import { BiPlusCircle } from "react-icons/bi";
import WebFont from "webfontloader";

const Card = (props) => {
  const [active, setActive] = useState(false);
  WebFont.load({
    google: {
      families: ["Barlow"],
    },
  });
  const contentRef = useRef(null);
  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="w-11/12 my-2">
        <div>
          <button
            className={`question-section ${active} p-4`}
            onClick={toggleAccordion}
          >
            <div className="TopClass">
              <div className="question-align">
                {/* {headerFunction()} */}
                <h4 className="question-style"> {props.value}</h4>
                <BiPlusCircle
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p className="FAQans">{props.answer}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
