import React from "react";
import LatestCard from "./LatestCard";
import Marquee from "./MarqueeText";

const Hero = () => {
  return (
    <div className="mainpage">
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <div className="shape-blob three"></div>
      <div className="container mt-[70px] ">
        <LatestCard />
      </div>
    </div>
  );
};

export default Hero;
