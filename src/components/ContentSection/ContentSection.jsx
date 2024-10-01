import React from "react";

const ContentSection = ({ image, title, description, reverse }) => {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center justify-center w-2/3 max-w-screen-xl mx-auto px-8`}
    >
      {/* Text Content */}
      <div className="lg:w-1/2 w-full p-4 lg:p-8">
        <h2 className="text-3xl font-bold text-black mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        <a
          href="#"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          Learn more
        </a>
      </div>

      {/* Image Content */}
      <div className="lg:w-1/2 w-full p-4 lg:p-8">
        <img src={image} alt="Content" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default ContentSection;
