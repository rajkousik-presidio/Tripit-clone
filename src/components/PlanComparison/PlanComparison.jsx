import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import backgroundImage from "../../assets/pricingBg.svg"; // Update with actual path
import { IoMdCheckmark } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const PlanComparison = () => {
  const [expandedPlan, setExpandedPlan] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);

  const togglePlan = (plan) => {
    setExpandedPlan(expandedPlan === plan ? null : plan);
  };

  const handleResize = () => {
    const largeScreen = window.innerWidth >= 1200;
    setIsLargeScreen(largeScreen);
    // Ensure correct visibility state for features when switching screen sizes
    if (largeScreen) {
      setExpandedPlan(null);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="w-full bg-white py-3 relative"
      style={{
        backgroundImage: isLargeScreen ? `url(${backgroundImage})` : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
        backgroundSize: "120%",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-around items-start lg:space-x-6 w-full mx-auto max-w-screen-lg px-6">
        {/* TripIt Free Plan */}
        <div
          className={`${
            !isLargeScreen
              ? "border-y-2 border-gray-100"
              : "border border-gray-100"
          } rounded-md w-full md:w-4/5 lg:w-[40%] pt-6 lg:pb-12 pb-3 px-8 mb-8 lg:mb-0 bg-white mx-auto`}
        >
          <div
            className={`flex flex-col ${
              isLargeScreen ? "items-center" : "items-start"
            } justify-between mt-10 w-full`}
          >
            <div
              className={`flex items-center justify-between w-full ${
                isLargeScreen ? "justify-center" : ""
              }`}
            >
              <h3 className="text-[28px] font-medium mb-4">TripIt</h3>
              <button
                className={`lg:hidden ml-auto ${
                  !isLargeScreen ? "block" : "hidden"
                }`}
                onClick={() => togglePlan("free")}
              >
                {expandedPlan === "free" ? (
                  <MdKeyboardArrowUp size={24} />
                ) : (
                  <MdKeyboardArrowDown size={24} />
                )}
              </button>
            </div>
            <span className="text-sm text-[#6F6F6F] tracking-widest mb-8">
              FREE
            </span>
            <button className="block w-11/12 text-center bg-white border-2 border-primary text-primary p-2 rounded-sm hover:bg-primary hover:text-white transition-colors duration-300 mb-3">
              Sign Up—It's Free
            </button>
            <a
              href="#"
              className="block mb-4 text-center tracking-wide text-primary lg:text-lg text-sm  font-thin"
            >
              Learn More
            </a>
          </div>
          <div
            className={`lg:block mt-5 transition-all duration-500 ease-in-out overflow-hidden ${
              expandedPlan === "free" || isLargeScreen
                ? "max-h-[1000px]"
                : "max-h-0"
            }`}
          >
            <hr />
            <ul className="mt-12 list-none space-y-6">
              {[
                "Organizes your travel plans",
                "Creates a comprehensive itinerary",
                "Provides access across devices",
                "Adds plans from your inbox for you",
                "Syncs plans with your calendar",
                "Stores important travel information",
                "Helps you share plans with others",
                "Shows transportation options",
                "Finds places near your hotel",
                "Shows neighborhood safety scores",
                "Includes airports and terminals maps",
                "Lets you rate your in-flight experience",
                "Finds eligibility for flight compensation",
                "Tracks carbon footprint and shows offset options",
                "Tallies and displays travel stats",
                "Upload 3 documents per trip",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="text-[16px] font-light flex lg:pr-10 items-start"
                >
                  <span className="text-[#F7961B] mr-3 text-sm self-center">
                    <IoMdCheckmark size={24} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TripIt Pro Plan */}
        <div
          className={`${
            isLargeScreen ? "lg:-mt-4 border-t-[16px] border-primary" : ""
          } lg:shadow-lg w-full md:w-4/5 lg:w-[40%] pt-6 pb-12 px-8 mb-8 bg-white relative mx-auto`}
        >
          <div
            className={`flex flex-col ${
              isLargeScreen ? "items-center" : "items-start"
            } justify-between lg:mt-12 w-full`}
          >
            <div
              className={`flex items-center justify-between w-full ${
                isLargeScreen ? "justify-center" : ""
              }`}
            >
              <h3 className="text-[28px] font-medium mb-4">TripIt Pro</h3>
              <button
                className={`lg:hidden ml-auto ${
                  !isLargeScreen ? "block" : "hidden"
                }`}
                onClick={() => togglePlan("pro")}
              >
                {expandedPlan === "pro" ? (
                  <MdKeyboardArrowUp size={24} />
                ) : (
                  <MdKeyboardArrowDown size={24} />
                )}
              </button>
            </div>
            <span className="text-sm text-[#6F6F6F] tracking-widest mb-8">
              $49 PER YEAR
            </span>
            <button className="block w-11/12 text-center bg-primary text-white py-2 rounded-sm hover:bg-[#1075C5] transition-colors duration-300 mb-3">
              Start Free Trial
            </button>
            <a
              href="#"
              className="block mb-4 text-center tracking-wide text-primary lg:text-lg text-sm font-thin"
            >
              Learn More
            </a>
          </div>
          <div
            className={`lg:block mt-5 transition-all duration-500 ease-in-out overflow-hidden ${
              expandedPlan === "pro" || isLargeScreen
                ? "max-h-[1000px]"
                : "max-h-0"
            }`}
          >
            <hr />
            <ul className="mt-12 list-none space-y-6">
              {[
                "Everything in TripIt (free), plus",
                "Sends real-time flight alerts",
                "Monitors for fare refunds",
                "Helps you find a better seat",
                "Finds alternate flights",
                "Reminds you when to check in",
                'Tells you to "Go Now" to the airport',
                "Sends terminal and gate reminders",
                "Navigates you through the airport",
                "Guides you to your connecting gate",
                "Displays baggage claim info",
                "Provides country-specific travel info",
                "Updates people on your travel plans",
                "Speeds you through security",
                "Tracks your reward programs",
                "Upload 25 documents per trip",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="text-[16px] font-light flex items-start"
                >
                  <span className="text-[#F7961B] mr-3 text-sm self-center">
                    {index === 0 ? (
                      <FaPlus size={20} />
                    ) : (
                      <IoMdCheckmark size={24} />
                    )}
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;
