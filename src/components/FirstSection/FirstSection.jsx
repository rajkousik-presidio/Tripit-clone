import React from "react";

const FirstSection = ({ image, title, description, buttonLabel }) => {
  return (
    <div className="relative w-full lg:h-[calc(100vh-100px)] h-[526px]">
      <div className="absolute inset-0 w-full h-[100%] lg:block hidden">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 lg:m-0 lg:max-w-md lg:top-20 md:top-20 top-8 lg:left-[45%] lg:w-1/2 md:w-1/2 sm:w-4/5 lg:px-6 md:px-6 px-8 w-full mx-auto">
        <h2 className="md:text-[42px] text-3xl font-medium text-black mb-6 leading-[50px] tracking-wide">
          An easier trip,{" "}
          <span className="hidden lg:inline">
            {" "}
            <br />{" "}
          </span>
          each time
        </h2>
        <p className="text-xl text-black mb-6 font-light leading-8">
          {description}
        </p>
        <button className="bg-[#0E7AC5] text-white px-6 py-3 rounded-sm text-lg w-60 mt-4">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default FirstSection;
