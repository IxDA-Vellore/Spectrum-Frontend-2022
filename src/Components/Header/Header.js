import React, { useState } from "react";

// Asset Imports
import ixdaLogo from "../../Assets/ixda-logo.svg";

// Config (Links) Import
import config from "../../config";

const Header = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const [hamBurgerAnimation, setHumBurgerAnimation] = useState({
    upper: "h-1 w-8 bg-white rounded-md ease-in-out duration-300 my-[2.5px]",
    middle: "h-1 w-8 bg-white rounded-md ease-in-out duration-300 my-[2.5px]",
    lower: "h-1 w-8 bg-white rounded-md ease-in-out duration-300 my-[2.5px]",
  });
  const [showMenuData, setShowMenuData] = useState(
    "w-0 h-auto absolute z-10 bg-neutral-700 opacity-90 top-0 right-0 ease-in-out duration-300"
  );
  const [hideNavLinks, setHideNavLinks] = useState("hidden");

  const clickHandler = () => {
    if (!hamOpen) {
      setHumBurgerAnimation({
        upper:
          "h-1 w-8 bg-white rotate-[45deg] translate-y-[0.56rem] rounded-md ease-in-out duration-300 my-[2.5px]",
        middle:
          "h-1 w-8 bg-transparent rounded-md ease-in-out duration-300 my-[2.5px]",
        lower:
          "h-1 w-8 bg-white rotate-[-45deg] -translate-y-[0.56rem] rounded-md ease-in-out duration-300 my-[2.5px]",
      });
      setShowMenuData(
        "w-[73vw] h-auto p-8 py-6 absolute z-10 bg-neutral-700 opacity-90 top-0 right-0 ease-in-out duration-300"
      );
      setHideNavLinks("block");
      setHamOpen(true);
    } else if (hamOpen) {
      setHumBurgerAnimation({
        upper:
          "h-1 w-8 bg-white rounded-md ease-in-out duration-300 my-[2.5px]",
        middle:
          "h-1 w-8 bg-white rounded-md ease-in-out duration-300 my-[2.5px]",
        lower:
          "h-1 w-8 bg-white rounded-md ease-in-out duration-300 my-[2.5px]",
      });
      setShowMenuData(
        "w-0 h-auto absolute z-10 bg-neutral-700 opacity-90 top-0 right-0 ease-in-out duration-300"
      );
      setHideNavLinks("hidden");
      setHamOpen(false);
    }
  };

  return (
    <>
      <header className="container flex justify-between py-2">
        {/* Container Div for IXDA Icon */}
        <div className="p-4">
          <img src={ixdaLogo} alt="IXDA Logo" />
        </div>

        {/* Container Div for Nav Links */}
        <div className="hidden xl:font-primary xl:font-bold xl:flex xl:items-center">
          <ul className="flex">
            <li className="mx-7">
              <a href={config.nav.about} target="_blank" rel="noreferrer">
                ABOUT
              </a>
            </li>
            <li className="mx-7">
              <a href={config.nav.speakers} target="_blank" rel="noreferrer">
                SPEAKERS
              </a>
            </li>
            <li className="mx-7">
              <a href={config.nav.sponsors} target="_blank" rel="noreferrer">
                SPONSORS
              </a>
            </li>
            <li className="mx-7">
              <a href={config.nav.prizePool} target="_blank" rel="noreferrer">
                PRIZE POOL
              </a>
            </li>
            <li className="mx-7">
              <a href={config.nav.faqs} target="_blank" rel="noreferrer">
                FAQS
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Layout starts here */}

        {/* Container Div for Hamburger Menu */}
        <div
          onClick={clickHandler}
          className="flex flex-col xl:hidden p-4 cursor-pointer relative z-20"
        >
          <div className={hamBurgerAnimation.upper}></div>
          <div className={hamBurgerAnimation.middle}></div>
          <div className={hamBurgerAnimation.lower}></div>
        </div>
      </header>
      <nav className={showMenuData}>
        <ul className={hideNavLinks}>
          <li className="my-6">
            <a href={config.nav.about} target="_blank" rel="noreferrer">
              ABOUT
            </a>
          </li>
          <li className="my-6">
            <a href={config.nav.speakers} target="_blank" rel="noreferrer">
              SPEAKERS
            </a>
          </li>
          <li className="my-6">
            <a href={config.nav.sponsors} target="_blank" rel="noreferrer">
              SPONSORS
            </a>
          </li>
          <li className="my-6">
            <a href={config.nav.prizePool} target="_blank" rel="noreferrer">
              PRIZE POOL
            </a>
          </li>
          <li className="my-6">
            <a href={config.nav.faqs} target="_blank" rel="noreferrer">
              FAQS
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
