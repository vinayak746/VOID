import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import HeroCarousel from "../components/HeroCarousel";
import TrailersSection from "../components/TrailersSection";

const Home = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <HeroCarousel/>
      <FeaturedSection />
      <TrailersSection />
    </div>
  );
};

export default Home;
