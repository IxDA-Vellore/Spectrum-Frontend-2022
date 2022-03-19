import React from "react";

// Config Import
import config from "../../config";

// Component Import
import Button from "../Button/Button";

//Assets Import
import sportsMedal from "../../Assets/sports-medal.svg";
import smilingFaceWithHeartEyes from "../../Assets/smiling-face-with-heart-eyes.svg";
import happyFaceWithEnlargedEyes from "../../Assets/happy-face-with-enlarged-eyes.svg";
import sparkles from "../../Assets/sparkles.svg";
import artistPalette from "../../Assets/artist-palette.svg";
import trophy from "../../Assets/trophy.svg";
import faceSavouringFood from "../../Assets/face-savouring-food.svg";
import crystalBall from "../../Assets/crystal-ball.svg";
//import rightArrow from "../../Assets/rightArrow.svg";

export default function Register() {
  return (
    <>
      <div class="text-center bg-colorFiller relative text-white">
        <img
          src={sportsMedal}
          class="ml-1/5 absolute top-0 h-16 md:h-24"
          alt=""
        />
        <img
          src={smilingFaceWithHeartEyes}
          class="ml-3/4 absolute top-0 h-16 md:h-24"
          alt=""
        />
        <p class="text-4xl md:text-6xl font-extrabold pt-24 z-10 font-secondary">
          SOUNDS AWESOME?
        </p>
        <img
          src={happyFaceWithEnlargedEyes}
          class="absolute h-12 md:h-24"
          alt=""
        />
        <img
          src={sparkles}
          class="absolute ml-2/3 h-16 hidden md:block md:h-24 md:ml-3/4"
          alt=""
        />
        <p class="text-xl md:text-2xl pt-8 font-primary">
          Let's get you registered!
        </p>
        <img
          src={artistPalette}
          class="absolute right-0 bottom-0 h-16 md:h-24"
          alt=""
        />
        <img
          src={trophy}
          class="absolute ml-1/5 h-16 hidden md:block md:h-20 lg:h-24"
          alt=""
        />
        <div class="pt-16 pb-24">
          <a href={config.register}>
            <Button width="13.5rem" height="5rem">
              REGISTER NOW
            </Button>
          </a>
          {/* <button class="font-primary bg-registerNow border text-black text-sm md:text-md lg:text-lg font-bold py-3 px-4 hover:pl-2 hover:pr-2 md:text-normal md:py-4 md:px-6 hover:bg-registerNowHover rounded border-registerNow relative group w-36 md:w-44">
            <a href="https://google.com" target="_blank" rel="noreferrer">
              REGISTER NOW{" "}
              <span class="hidden group-hover:inline-block">
                <img src={rightArrow} class="w-3.5" alt="" />
              </span>
            </a>
          </button> */}
          <img
            src={faceSavouringFood}
            class="absolute ml-3/5 h-16 hidden md:block md:h-20 lg:h-24"
            alt=""
          />
          <img
            src={crystalBall}
            class="absolute ml-1/10 h-16 bottom-0 md:h-20 lg:h-24"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
