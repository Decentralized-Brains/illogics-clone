import React from "react";
import { EconomyTopBoxData } from "../../data/Data.jsx";

const EconomyCard = () => {
  return (
    <div>
      <h1 className="text-4xl text-white">Economy</h1>
      <h1 className="text-2xl text-gray-400 py-5">Stats</h1>
      <h1 className="text-2xl text-gray-400 text-center">
        SWITCH NETWORK TO GOERLI
      </h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center my-[20px]">
        {EconomyTopBoxData.map((item) => {
          return (
            <div
              key={item.id}
              className="z-10 w-[295px] h-[106px] shadow-lg border border-gray-400 rounded-lg px-6 py-3 overflow-hidden"
            >
              <div className="flex items-center  justify-between">
                <div className="flex items-center gap-2">
                  <span className="animate-text bg-gradient-to-r from-[#0879EB] to-[#B70EA6] rounded-[100%] h-10 w-10 flex items-center justify-center text-white">
                    {item.title}
                  </span>
                  <span className="text-2xl text-gray-400 font-extrabold pl-2">
                    {item.number}
                  </span>
                </div>
              </div>
              <h1 className="text-gray-500 text-xs pt-2">TOTAL ITEMS ADDED</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EconomyCard;
