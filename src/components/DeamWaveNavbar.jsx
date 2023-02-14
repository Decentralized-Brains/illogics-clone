import React from "react";

const DeamWaveNavbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-base sm:text-lg md:text-[40px] font-extrabold">
        YOUR DREAMWAVE
      </div>
      <div className="text-xs md:text-[20px] text-gray-600 font-normal md:font-bold flex gap-2 md:gap-4 items-center">
        <div>ALL</div>
        <div>UNSTAKED</div>
        <button className="animate-text bg-gradient-to-r from-[#B70EA6] to-[#0879EB] text-white p-1 md:px-4 md:py-2 rounded-lg">
          STAKE
        </button>
      </div>
    </div>
  );
};

export default DeamWaveNavbar;