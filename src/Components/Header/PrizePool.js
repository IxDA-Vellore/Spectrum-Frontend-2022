import React from "react";
import trophy from "../../Assets/1st-place-trophy.svg";
import medal2 from "../../Assets/2nd-place-medal.svg";
import medal2Mobile from "../../Assets/2nd-place-medal-mobile.svg";
import medal3 from "../../Assets/3rd-place-medal.svg";
import medal3Mobile from "../../Assets/3rd-place-medal-mobile.svg";

export default function PrizePool() {
  return (
    <>
      <div class="font-primary pb-20 mx-4 xl:mx-40 lg:mx-20 md:mx-12">
        <div class="md:place-content-start sm:align-center">
          <div class="mb-12 md:mb-24">
            <p class="text-prizePoolPink text-md md:text-lg font-bold text-center md:text-left">
              🙈 WIN BIG!
            </p>
            <p class="text-white text-5xl md:text-56px font-bold text-center md:text-left">
              PRIZE POOL
            </p>
          </div>
        </div>

        {/* Cards */}
        <div class="grid lg:grid-rows-2 gap-4 md:gap-8 text-center">
          {/* Card 1 */}
          <div class="card bg-prizePoolGrey p-8 md:p-12 md:w-4/6 lg:w-1/2 md:place-self-center rounded-xl">
            <div class="relative">
              <img
                class="absolute w-28 -left-16 -top-16 md:w-44 md:-left-28 md:-top-24"
                src={trophy}
                alt=""
              />
            </div>
            <div class="grid grid-rows-3 gap-1 md:gap-2">
              <p class="text-center text-white text-2xl md:text-32px font-bold">
                FIRST PRIZE
              </p>
              <p class="text-center text-white text-5xl md:text-56px font-bold">
                ₹20,000
              </p>
              <p class="text-center text-white text-xl md:text-2xl font-medium">
                & schwag, licenses and much more!
              </p>
            </div>
          </div>

          {/* Card 2 & 3 */}
          <div class="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-4 md:gap-8">
            <div class="card bg-prizePoolGrey p-8 md:p-12 rounded-xl">
              <div class="relative">
                <img
                  class="absolute w-36 -right-12 hidden md:flex md:-left-28 md:-top-20 lg:-left-24 lg:w-40"
                  src={medal2}
                  alt=""
                />
                <img
                  class="absolute w-28 xs:w-32 -right-12 -top-14 md:hidden"
                  src={medal2Mobile}
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
                <p class="text-center text-white text-xl md:text-2xl font-medium">
                  & schwag, licenses and much more!
                </p>
              </div>
            </div>
            <div class="card bg-prizePoolGrey p-8 md:p-12 rounded-xl">
              <div class="relative">
                <img
                  class="absolute hidden md:flex w-36 lg:w-40 -right-24 -top-20"
                  src={medal3}
                  alt=""
                />
                <img
                  class="absolute md:hidden w-28 xs:w-32 -left-16 -top-14"
                  src={medal3Mobile}
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
                <p class="text-center text-white text-xl md:text-2xl font-medium">
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
