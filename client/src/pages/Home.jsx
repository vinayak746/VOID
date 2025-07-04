import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <HeroCarousel/>
      <FeaturedSection />
    </div>
  );
};

export default Home;
