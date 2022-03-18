import React from "react";

export default function Hero() {
    return (
        <>
            <div className="flex flex-col space-y-12 bg-black">
                <div className="text-center">
                    <p className="font-primary text-xl"> April 14th 2022</p>
                    <p className="font-secondary text-7xl linear-wipe p-5"> SPECTRUM </p>
                    <p className="font-primary text-xl p-3"> IF YOU HAVEN'T FOUND IT YET, KEEP LOOKING.</p>
                    <p className="font-primary text-xl p-3"> REACH FOR THE SPECTRUM!</p>
                </div>
                <div className="flex items-center justify-center space-x-4 pb-5">
                    <div>
                        <button className="font-primary font-bold rounded bg-registerNow text-black p-3 hover:text-white hover:bg-black hover:border border-registerNow"> REGISTER NOW </button>
                    </div>
                    <div>
                        <button className="font-primary font-bold rounded bg-registerNow text-black p-3 hover:text-white hover:bg-black hover:border border-registerNow"> JOIN DISCORD </button>
                    </div>
                </div>
                <div className="space-y-10"></div>
            </div>
        </>
    )
};
