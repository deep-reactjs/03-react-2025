import * as React from "react";
import HomeHeroSection from "../../images/home-hero-section.png";
const HeroSection = () => {
  return (
    <div className="relative w-full h-[595px]">
      <img
        src={HomeHeroSection}
        alt="home-hero-section"
        className="h-full w-full object-cover"
      />
    </div>
  );
};
export default HeroSection;
