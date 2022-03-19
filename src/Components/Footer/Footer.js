import React from "react";

// Config Import
import config from "../../config";

// Component Import
import Button from "../Button/Button";

// Asset Imports
import instaLogo from "../../Assets/instagram-logo.svg";
import linkedinLogo from "../../Assets/linkedin-logo.svg";
import twitterLogo from "../../Assets/twitter-logo.svg";

const Footer = () => {
  return (
    <>
      <section className="container lg:flex mt-16 pb-16 font-primary">
        <div className="lg:w-1/4 text-center py-6">
          <h1 className="font-bold text-2xl pb-6">About IxDA</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            eum unde placeat nisi sint beatae rem similique itaque fuga illum
            est ullam nobis provident perspiciatis quos, soluta accusamus?
            Consequuntur, nam.
          </p>
        </div>
        <div className="lg:w-1/4 text-center py-6">
          <h1 className="font-bold text-2xl pb-6">VISIT</h1>
          <ul>
            <li>
              <a href={config.nav.about}>ABOUT</a>{" "}
            </li>
            <li>
              <a href={config.nav.speakers}>SPEAKERS</a>
            </li>
            <li>
              <a href={config.nav.sponsors}>SPONSORS</a>
            </li>
            <li>
              <a href={config.nav.prizePool}>PRIZE POOL</a>
            </li>
            <li>
              <a href={config.nav.faqs}>FAQs</a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/4 text-center py-6">
          <h1 className="font-bold text-2xl pb-6">Stay Updated</h1>
          <a href={config.discord}>
            <Button width="8rem" height="5rem">
              JOIN DISCORD
            </Button>
          </a>
        </div>
        <div className="lg:w-1/4 text-center py-6">
          <div>
            <h1 className="font-bold text-2xl pb-6">FOLLOW US ON</h1>
            <div className="flex justify-around pb-6">
              <img src={instaLogo} alt="Follow Us Logo" className="m-4" />
              <img src={linkedinLogo} alt="Follow Us Logo" className="m-4" />
              <img src={twitterLogo} alt="Follow Us Logo" className="m-4" />
            </div>
          </div>
          <div>
            <h1 className="font-bold text-2xl pb-8">CONTACT US</h1>
            <a href="mailto:vellore@ixda.org">vellore@ixda.org</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
