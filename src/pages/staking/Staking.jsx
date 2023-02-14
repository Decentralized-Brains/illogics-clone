import React from "react";
import StakingHero from "./StakingHero";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Staking = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <StakingHero />
    </div>
  );
};

export default Staking;
