import React from "react";

const PrizePoolCard = (props) => {
  return (
    <>
      <section className="relative w-80 h-56 font-bold m-8">
        <div className="absolute top-[-25%] left-[-7%]">
          <img src={props.src} alt="Prize" />
        </div>
        <div className="bg-[#171717] rounded-lg p-8">
          <h1 className="text-xl text-center">{props.rank} PRIZE</h1>
          <h1 className="text-5xl text-center py-4">₹{props.amount}</h1>
          <h1 className="text-xl text-center">
            & schwag, licenses and much more!
          </h1>
        </div>
      </section>
    </>
  );
};

export default PrizePoolCard;
