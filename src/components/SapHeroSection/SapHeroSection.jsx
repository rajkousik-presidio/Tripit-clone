import React from "react";

const SapHeroSection = ({ image, title, description, buttonLabel }) => {
  return (
    <div className="relative w-full mb-[150px] lg:h-[calc(100vh-300px)] md:h-[calc(100vh-400px)]">
      <div className="absolute inset-0 w-full h-[100%] lg:block hidden">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 lg:m-0 lg:top-14 md:top-20 top-8 lg:left-[42%] lg:w-2/5 md:w-1/2 sm:w-4/5 lg:px-6 md:px-6 px-8 w-full mx-auto">
        <h2 className="md:text-[46px] font-proxima_bold text-4xl font-medium text-black mb-6 leading-[50px] tracking-wide">
          Traveling for business{" "}
          <span className="hidden lg:inline">
            {" "}
            <br />{" "}
          </span>
          comes with perks
        </h2>
        <p className="text-lg text-black lg:pr-10 mb-6 font-thin leading-8 font-proxima_regular">
          {description}
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-sm text-lg w-60 mt-4">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default SapHeroSection;
