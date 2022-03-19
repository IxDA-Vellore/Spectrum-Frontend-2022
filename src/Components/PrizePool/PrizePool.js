import React from "react";

// Components Import
import PrizePoolCard from "../PrizePoolCard/PrizePoolCard";

// Assets Import
import firstPrize from "../../Assets/1st-place-trophy.svg";
import secondPrize from "../../Assets/2nd-place-medal.svg";
import thirdPrize from "../../Assets/3rd-place-medal.svg";

const PrizePool = () => {
  return (
    <>
      <section className="container">
        <div className="font-primary">
          <div className="text-[#FFC3ED] text-sm">🙈 WIN BIG!</div>
          <div className="font-bold text-5xl mb-16">PRIZE POOL</div>
        </div>
        <div className="flex justify-center items-center">
          <PrizePoolCard src={firstPrize} rank="FIRST" amount="20,000" />
        </div>
        <div className="md:flex justify-center">
          <PrizePoolCard src={secondPrize} rank="SECOND" amount="12,000" />
          <div className="h-8"></div>
          <PrizePoolCard src={thirdPrize} rank="THIRD" amount="8,000" />
        </div>
      </section>
    </>
  );
};

export default PrizePool;
