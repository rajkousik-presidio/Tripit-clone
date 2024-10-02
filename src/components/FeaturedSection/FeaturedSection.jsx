import React from "react";
import nytLogo from "../../assets/nyt.svg";
import forbesLogo from "../../assets/forbes.svg";
import nbcLogo from "../../assets/nbc.svg";
import wsjLogo from "../../assets/wsj.svg";
import tlLogo from "../../assets/tl.svg";

const logos = [
  { src: nytLogo, alt: "The New York Times", size: "w-56" }, // Increased size for NYT
  { src: forbesLogo, alt: "Forbes", size: "w-28" }, // Decreased size for Forbes
  { src: nbcLogo, alt: "NBC", size: "w-16" }, // Decreased size for NBC
  { src: wsjLogo, alt: "Wall Street Journal", size: "w-56" }, // Increased size for WSJ
  { src: tlLogo, alt: "Travel + Leisure", size: "w-32" }, // Default size for TL
];

const FeaturedSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:mt-32 mt-16 mb-32 px-4 lg:px-0">
      <h3 className="text-2xl font-medium text-center mb-8">As featured on</h3>
      <div className="flex flex-wrap justify-center items-center gap-16 lg:flex-row flex-col">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`flex items-center justify-center ${logo.size} h-auto`}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
