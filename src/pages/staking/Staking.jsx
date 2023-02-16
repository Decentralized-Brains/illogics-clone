import React from "react";
import StakingTopBox from "../../components/StackingTopBox";
import DreamWeave from "./DreamWeave";
import StackedItems from "./StackedItems";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BG from "../../assets/backgrounds/Pearl_Texture_2(Loop).mp4";

const Staking = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="mainpage">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src={BG}
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="container mt-24">
        <StakingTopBox />
        <DreamWeave />
        <StackedItems />
      </div>
    </div>
  );
};

export default Staking;
