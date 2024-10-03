import React from "react";

const CallToActionSection = ({
  title,
  description,
  buttonText,
  fontFamily,
}) => {
  return (
    <div className="w-full py-24 bg-[#F7F7F7] flex flex-col items-center justify-center text-center px-4 md:px-0">
      <h2
        className={`text-3xl font-bold tracking-wide text-black mb-6 ${fontFamily}`}
      >
        {title}
      </h2>
      <p
        className={`lg:text-lg md:text-base text-[16px] font-light text-black tracking-wide mb-8 lg:w-3/4 mx-auto ${fontFamily}`}
      >
        {description}
      </p>
      <button className="bg-primary text-white px-12 py-3 rounded-sm text-lg font-medium hover:bg-[#0E74C5] transition-all duration-300">
        {buttonText}
      </button>
    </div>
  );
};

export default CallToActionSection;
