import React from "react";
import InventoryCard from "./InventoryCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Inventory = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="mainpage">
      <div className="container mt-24">
        <InventoryCard />
      </div>
    </div>
  );
};

export default Inventory;
