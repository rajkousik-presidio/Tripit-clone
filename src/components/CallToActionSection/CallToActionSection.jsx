import React from "react";

const CallToActionSection = () => {
  return (
    <div className="w-full py-24 bg-[#F7F7F7] flex flex-col items-center justify-center text-center px-4 md:px-0">
      <h2 className="text-3xl font-medium tracking-wider text-black mb-6">
        Try the travel app that keeps up with you
      </h2>
      <p className="lg:text-lg md:text-base text-sm font-light text-black tracking-wide mb-8 max-w-xl lg:max-w-none lg:whitespace-nowrap">
        So many trips, so little time. Let TripIt worry about the details, so
        you don't have to.
      </p>
      <button className="bg-primary text-white px-12 py-3 rounded-sm text-lg font-medium hover:bg-[#0E74C5] transition-all duration-300">
        Sign Up—It's Free!
      </button>
    </div>
  );
};

export default CallToActionSection;
