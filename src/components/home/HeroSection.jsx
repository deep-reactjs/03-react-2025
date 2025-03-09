import * as React from "react";
import HomeHeroSection from "../../images/home-hero-section.png";
import Navbar from "../common/Navbar";
import HeroSectionContent from "./HeroSectionContent";
const HeroSection = () => {
  return (
    <div className="relative w-full h-[595px]">
      <img
        src={HomeHeroSection}
        alt="home-hero-section"
        className="h-full w-full object-cover absolute rounded-[32px] overflow-hidden"
      />
      <div className="relative z-20">
        <div className="px-6 py-4">
          <Navbar />
          <HeroSectionContent />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
