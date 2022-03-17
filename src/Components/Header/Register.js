import React from 'react';
import sportsMedal from "../../Assets/sports-medal.png";
import smilingFaceWithHeartEyes from "../../Assets/smiling-face-with-heart-eyes.png";
import happyFaceWithEnlargedEyes from "../../Assets/happy-face-with-enlarged-eyes.png";
import sparkles from "../../Assets/sparkles.png";
import artistPalette from "../../Assets/artist-palette.png";
import trophy from "../../Assets/trophy.png";
import faceSavouringFood from "../../Assets/face-savouring-food.png";
import crystalBall from "../../Assets/crystal-ball.png";

export default function Register() {
    return (
        <>
            <div class="text-center bg-colorFiller relative text-white">
                <img src={sportsMedal} class="ml-1/5 absolute top-0 h-16 md:h-24" alt="" />
                <img src={smilingFaceWithHeartEyes} class="ml-3/4 absolute top-0 h-16 md:h-24" alt="" />
                <p class="text-4xl md:text-6xl font-extrabold pt-24 z-10 font-secondary">SOUNDS AWESOME?</p>
                <img src={happyFaceWithEnlargedEyes} class="absolute h-12 md:h-24" alt="" />
                <img src={sparkles} class="absolute ml-2/3 h-16 hidden md:block md:h-24 md:ml-3/4" alt="" />
                <p class="text-xl md:text-2xl pt-8 font-primary">Let's get you registered!</p>
                <img src={artistPalette} class="absolute right-0 bottom-0 h-16 md:h-24" alt="" />
                <img src={trophy} class="absolute ml-1/5 h-16 hidden md:block md:h-20 lg:h-24" alt="" />
                <div class="pt-16 pb-24">
                    <a class="bg-registerNow border border-registerNowStroke text-black text-sm font-bold py-3 px-4 md:text-normal md:py-4 md:px-6 rounded-sm"
                        href="https://google.com">
                        REGISTER NOW
                    </a>
                    <img src={faceSavouringFood} class="absolute ml-3/5 h-16 hidden md:block md:h-20 lg:h-24"
                        alt="" />
                    <img src={crystalBall} class="absolute ml-1/10 h-16 bottom-0 md:h-20 lg:h-24" alt="" />
                </div>
            </div>
        </>
    )
}
