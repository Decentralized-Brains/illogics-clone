import React from "react";
import Hero from "./Hero";
import Marquee from "./MarqueeText";
import ShowcaseProducts from "./ShowcaseProducts";
import BoxNavbar from "./BoxNavbar";

import Social from "../../components/Social";

const Home = () => {
  return (
    <div>
      <Hero />
      <Marquee />
      <ShowcaseProducts />
      <BoxNavbar />
      <div className="hidden lg:block fixed -right-12 top-[45%] -rotate-90">
        <Social />
      </div>
    </div>
  );
};

export default Home;
