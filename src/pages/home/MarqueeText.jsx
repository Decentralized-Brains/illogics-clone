import React from "react";

import Marquee from "react-fast-marquee";
import RoundLogo from "../../assets/logo/DWOPEw.png";

const MarqueeText = () => {
  return (
    <div className="mainpage">
      <div className="relative mt-24 bg-black py-4 bg-opacity-10 w-full">
        <Marquee gradient={false} speed={100}>
          <div className="flex justify-evenly gap-60">
            <div className="text-[2rem] font-extrabold text-[#5C636F] ">
              UNDER CONSTRUCTION
            </div>
            <div className="text-[2rem] font-extrabold text-[#F8DF75] ">
              DREAMSTORE WEEK NO #1
            </div>
            <div className="text-[2rem] font-extrabold text-[#5C636F] ">
              UNDER CONSTRUCTION
            </div>
            <div className="text-[2rem] font-extrabold text-[#F8DF75] pr-60">
              DREAMSTORE WEEK NO #1
            </div>
          </div>
        </Marquee>
        <div className="absolute -top-24 left-[25%] sm:left-[44%]">
          <img src={RoundLogo} alt="" className="h-[150px] w-[180px] " />
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
