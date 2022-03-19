import React from "react";

// Config Import
import config from "../../config";

// Components Import
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <>
      <section className="container pt-16">
        <div className="flex justify-center items-center">
          <div>
            <div className="font-primary font-semibold text-sm md:text-lg pb-4 text-center md:text-left">
              APRIL 14th 2022
            </div>
            <div className="font-secondary text-4xl md:text-7xl font-extrabold text-center md:text-left">
              SPECTRUM
            </div>
            <div className="font-primary font-semibold text-sm md:text-lg py-4 text-center">
              IF YOU HAVEN’T FOUND IT YET, KEEP LOOKING. <br />
              REACH FOR THE SPECTRUM!
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center pb-20">
              <a href={config.register}>
                <Button width="13.5rem" height="5rem">
                  REGISTER NOW
                </Button>
              </a>
              <a href={config.discord}>
                <Button width="13.5rem" height="5rem">
                  JOIN DISCORD
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
