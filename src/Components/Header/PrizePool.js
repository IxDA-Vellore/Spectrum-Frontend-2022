import React from "react";
import trophy from "../../Assets/1st-place-trophy.png";
import medal2 from "../../Assets/2nd-place-medal.png";
import medal3 from "../../Assets/3rd-place-medal.png";

export default function PrizePool() {
  return (
    <>
      <div class="font-primary mx-4 py-20 xl:mx-40 lg:mx-20 md:mx-8">
        <div class="md:place-content-start sm:align-center">
          <div class="mb-12 md:mb-24">
            <p class="text-pppink text-md md:text-lg font-bold text-center md:text-left">
              🙈 WIN BIG!
            </p>
            <p class="text-white text-5xl md:text-56px font-bold text-center md:text-left">
              PRIZE POOL
            </p>
          </div>
        </div>
        <div class="grid lg:grid-rows-2 gap-4 md:gap-8 text-center">
          <div class="card bg-ppgrey p-8 md:p-12 md:w-4/6 lg:w-1/2 md:place-self-center rounded-xl">
            <div class="relative hidden md:flex">
              <img class="absolute w-44 -left-28 -top-24" src={trophy} alt="" />
            </div>
            <div class="grid grid-rows-3 gap-1 md:gap-2">
              <p class="text-center text-white text-3xl md:text-32px font-bold">
                FIRST PRIZE
              </p>
              <p class="text-center text-white text-5xl md:text-56px font-bold">
                ₹20,000
              </p>
              <p class="text-center text-white text-2xl font-medium">
                & schwag, licenses and much more!
              </p>
            </div>
          </div>
          <div class="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4 md:gap-8">
            <div class="card bg-ppgrey p-8 md:p-12 rounded-xl">
              <div class="relative hidden md:flex">
                <img
                  class="absolute w-36 lg:w-40 -left-24 -top-20"
                  src={medal2}
                  alt=""
                />
              </div>
              <div class="grid grid-rows-3 gap-1 md:gap-2">
                <p class="text-center text-white text-2xl md:text-32px font-bold">
                  SECOND PRIZE
                </p>
                <p class="text-center text-white text-5xl md:text-56px font-bold">
                  ₹12,000
                </p>
                <p class="text-center text-white text-2xl font-medium">
                  & schwag, licenses and much more!
                </p>
              </div>
            </div>
            <div class="card bg-ppgrey p-8 md:p-12 rounded-xl">
              <div class="relative hidden md:flex">
                <img
                  class="absolute w-36 lg:w-40 -right-24 -top-20"
                  src={medal3}
                  alt=""
                />
              </div>
              <div class="grid grid-rows-3 gap-1 md:gap-2">
                <p class="text-center text-white text-2xl md:text-32px font-bold">
                  THIRD PRIZE
                </p>
                <p class="text-center text-white text-5xl md:text-56px font-bold">
                  ₹8,000
                </p>
                <p class="text-center text-white text-2xl font-medium">
                  & schwag, licenses and much more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
