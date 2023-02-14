import React from "react";

const StackedNavbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-base sm:text-lg md:text-[40px] font-extrabold">
        STAKED(0)
      </div>

      <button className="animate-text bg-gradient-to-r from-[#B70EA6] to-[#0879EB] text-white p-1 md:px-4 md:py-2 rounded-lg">
        UNSTAKE
      </button>
    </div>
  );
};

export default StackedNavbar;
