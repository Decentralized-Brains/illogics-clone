import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaDiscord, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Home from "../assets/icons/DreamWave.png";
import Staking from "../assets/icons/SteakStation.png";
import Invootoory from "../assets/icons/DreamStore.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const links = [
    {
      id: 1,
      link: "staking",
      img: Staking,
    },
    {
      id: 2,
      link: "invootoory",
      img: Invootoory,
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div
        className={
          shadow
            ? "fixed w-full h-[70px] duration-300 z-[100] shadow-lg backdrop-blur-xl text-white"
            : "fixed w-full h-[70px] duration-300 z-[100] "
        }
      >
        {/* this is for large screen devices */}
        <div className="flex justify-between items-center h-[70px] container mx-auto px-2 md:px-0">
          <div className="flex items-center">
            <NavLink to="/">
              <img src={Home} alt="" className="w-24 h-24" />
            </NavLink>
          </div>
          <ul className="hidden md:flex justify-around items-center gap-x-16">
            {links.map(({ id, link, img }) => (
              <nav
                key={id}
                className="cursor-pointer capitalize hover:scale-105 duration-200 font-bold"
              >
                <NavLink to={link} smooth duration={500}>
                  <img src={img} alt="" className="w-14 h-14" />
                </NavLink>
              </nav>
            ))}
            <button className="py-[13px] px-5 lg:px-[43px] animate-text bg-gradient-to-r from-[#0879EB] to-[#B70EA6] text-white rounded-lg">
              Connect Wallet
            </button>
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      {/* this is for small screen devices */}

      <div
        className={
          nav
            ? "fixed h-screen left-0 top-0 w-[80%] text-black ease-in duration-500 backdrop-blur-lg z-40 flex md:hidden"
            : "fixed h-screen left-[-100%] w-[80%] top-0 ease-in duration-500 backdrop-blur-lg z-40"
        }
      >
        <ul className="mt-20">
          {links.map(({ id, link, img }) => (
            <nav
              key={id}
              className="mx-4 my-4 cursor-pointer capitalize text-white"
            >
              <NavLink
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                <img src={img} alt="" className="w-14 h-14" />
              </NavLink>
            </nav>
          ))}
          <span className="mx-4 my-8 flex items-center gap-[17px] text-xl md:hidden text-white">
            <FaDiscord />
            <FaTwitter />
            <FaInstagram />
            <FaTelegram />
          </span>
          <button className=" mx-4  py-[10px] px-[30px] animate-text bg-gradient-to-r from-[#0879EB] to-[#B70EA6] text-white rounded-lg">
            Connect Wallet
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
