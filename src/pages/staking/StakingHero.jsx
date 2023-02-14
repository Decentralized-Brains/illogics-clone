import React from "react";
import StakingTopBox from "../../components/StackingTopBox";
import DreamWeave from "./DreamWeave";
import StackedItems from "./StackedItems";

const StakingHero = () => {
  return (
    <div className="mainpage">
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <div className="shape-blob three"></div>
      <div className="container mt-24">
        <StakingTopBox />
        <DreamWeave />
        <StackedItems />
      </div>
    </div>
  );
};

export default StakingHero;
