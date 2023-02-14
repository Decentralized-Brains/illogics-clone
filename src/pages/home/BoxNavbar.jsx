import React from "react";
import DropdownMenu from "../../components/DropdownMenu";
import { NavLink, Outlet } from "react-router-dom";

const BoxNavbar = () => {
  const BoxNav = [
    {
      id: 1,
      name: "BoosBox",
      path: "/boxcard",
    },
    {
      id: 2,
      name: "PillCubes",
      path: "/pillcubes",
    },
    {
      id: 3,
      name: "DAPE",
      path: "/dapecard",
    },
  ];

  return (
    <div className="bg-[#1E242B] py-12">
      <div className="container">
        <div className="flex justify-between items-center z-50">
          <nav className="text-base md:text-4xl font-extrabold gap-x-4 flex text-white">
            {BoxNav.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  className={({ isActive }) =>
                    isActive
                      ? "animate-text bg-gradient-to-r from-[#B9C3CA] via-[#9FCCD6] to-[#BDC0D1] bg-clip-text text-transparent flex flex-col "
                      : "text-white flex-col"
                  }
                  to={item.path}
                >
                  <span>{item.name}</span>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "h-2 w-20 mt-2 animate-text bg-gradient-to-r from-[#B9C3CA] via-[#9FCCD6] to-[#BDC0D1] mx-auto rounded"
                        : "hidden"
                    }
                    to={item.path}
                  ></NavLink>
                </NavLink>
              );
            })}
          </nav>
          <div>
            <DropdownMenu />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default BoxNavbar;

// className="animate-text bg-gradient-to-r from-[#B9C3CA] via-[#9FCCD6] to-[#BDC0D1] bg-clip-text text-transparent"
