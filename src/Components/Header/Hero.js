import React from "react";

export default function Hero() {
    return (
        <>
            <div className="flex flex-col space-y-12 bg-black">
                <div className="flex flex-col items-center">
                    <div className="w-fit">
                        <p className="font-primary text-xl pl-5 font-bold"> April 14th 2022</p>
                        <p className="font-secondary text-8xl p-4 font-bold"> SPECTRUM </p>
                    </div>
                    <p className="font-primary text-xl p-3 text-center"> IF YOU HAVEN'T FOUND IT YET, KEEP LOOKING.</p>
                    <p className="font-primary text-xl p-3 text-center"> REACH FOR THE SPECTRUM!</p>
                </div>
                <div className="flex items-center justify-center space-x-4 pb-5">
                    <div>
                        <button className="font-primary font-bold text-2xl rounded border-4 border-registerNow bg-registerNow text-black p-5 data-hover:reg hover:bg-orange-300 hover:border-5 hover:border-orange-300"> REGISTER NOW </button>
                    </div>
                    <div>
                        <button className="font-primary font-bold text-2xl border-4 border-registerNow rounded p-5 text-white hover:bg-orange-300/50 hover:border-5 hover:border-orange-300"> JOIN DISCORD </button>
                    </div>
                </div>
                <div className="space-y-10"></div>
            </div>
        </>
    )
};
