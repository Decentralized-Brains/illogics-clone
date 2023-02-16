import React from "react";
import EconomyCard from "./EconomyCard";
import EconomyLaderBoard from "./EconomyLaderBoard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Economy = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="mainpage">
      <div className="container mt-24">
        <EconomyCard />
        <EconomyLaderBoard />
      </div>
    </div>
  );
};

export default Economy;
