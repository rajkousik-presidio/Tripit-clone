import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo-tripit.svg"; // Update with the actual path to the logo
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const toggleSection = (section) => {
    if (!isLargeScreen) {
      setOpenSection(openSection === section ? null : section);
    }
  };

  // Track window resizing
  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 768;
      setIsLargeScreen(isLarge);

      // Show all links if the screen is large, otherwise hide them
      if (isLarge) {
        setOpenSection(null);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="w-full bg-white py-12 text-center md:text-left mb-12">
      {/* Top Section */}
      <div className="max-w-screen-xl lg:w-3/4 md:w-10/12 mx-auto px-8 md:px-0 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo Section */}
        <div className="md:w-1/4 w-full mb-8 md:mb-0 flex justify-center md:justify-start">
          <img src={logo} alt="TripIt Logo" className="w-24 h-auto" />
        </div>

        {/* Links Section */}
        <div className="flex-1 grid md:grid-cols-3 gap-8 mx-auto">
          {/* Products Section */}
          <div className="px-1">
            <div
              className="flex justify-center items-center md:block md:cursor-default cursor-pointer"
              onClick={() => toggleSection("products")}
            >
              <h3 className="font-medium text-base">Products</h3>
              <span className="md:hidden text-[#0E7AC5]">
                {openSection === "products" ? (
                  <RiArrowDropUpLine size={24} />
                ) : (
                  <RiArrowDropDownLine size={24} />
                )}
              </span>
            </div>
            <ul
              className={`mt-2 transition-max-height duration-1000 ease-in-out overflow-hidden md:block ${
                isLargeScreen || openSection === "products"
                  ? "max-h-[500px]"
                  : "max-h-0"
              }`}
            >
              {["Download App", "TripIt", "TripIt Pro", "Help Center"].map(
                (link, index) => (
                  <li key={index} className="mb-0.5">
                    <a
                      href="#"
                      className="text-black text-[15px] font-light hover:text-[#0E7AC5] transition-all duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* News & Resources Section */}
          <div className="px-1">
            <div
              className="flex justify-center items-center md:block md:cursor-default cursor-pointer"
              onClick={() => toggleSection("resources")}
            >
              <h3 className="font-medium text-base">News & Resources</h3>
              <span className="md:hidden text-[#0E7AC5]">
                {openSection === "resources" ? (
                  <RiArrowDropUpLine size={24} />
                ) : (
                  <RiArrowDropDownLine size={24} />
                )}
              </span>
            </div>
            <ul
              className={`mt-2 transition-max-height duration-1000 ease-in-out overflow-hidden md:block ${
                isLargeScreen || openSection === "resources"
                  ? "max-h-[500px]"
                  : "max-h-0"
              }`}
            >
              {[
                "Blog",
                "Traveler Resource Center",
                "Jobs",
                "User Agreement",
                "Privacy Statement: Updated 12/21/22",
                "Security",
                "Google Data Policy",
                "Do Not Share/Sell My Personal Information",
              ].map((link, index) => (
                <li key={index} className="mb-0.5">
                  <a
                    href="#"
                    className="text-black text-[15px] font-light hover:text-[#0E7AC5] transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Section */}
          <div className="px-1">
            <div
              className="flex justify-center items-center md:block md:cursor-default cursor-pointer"
              onClick={() => toggleSection("partners")}
            >
              <h3 className="font-medium text-base">Partners</h3>
              <span className="md:hidden text-[#0E7AC5]">
                {openSection === "partners" ? (
                  <RiArrowDropUpLine size={24} />
                ) : (
                  <RiArrowDropDownLine size={24} />
                )}
              </span>
            </div>
            <ul
              className={`mt-2 transition-max-height duration-1000 ease-in-out overflow-hidden md:block ${
                isLargeScreen || openSection === "partners"
                  ? "max-h-[500px]"
                  : "max-h-0"
              }`}
            >
              <li className="mb-0.5">
                <a
                  href="#"
                  className="text-black text-[15px] font-light hover:text-[#0E7AC5] transition-all duration-300"
                >
                  Supported Booking Sites
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-screen-xl mx-auto mt-4 px-8 md:px-0 pt-8 text-gray-600">
        {/* Social Icons */}
        <div className="flex justify-center mb-8 space-x-8 text-xl text-gray-600">
          <a
            href="#"
            className="hover:text-[#0E7AC5] transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-[#0E7AC5] transition-all duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-[#0E7AC5] transition-all duration-300"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            className="hover:text-[#0E7AC5] transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="hover:text-[#0E7AC5] transition-all duration-300"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs tracking-wider lg:px-16 font-light text-[#6F6F6F]">
          &copy; 2006-2024, Concur Technologies, Inc. All rights reserved.
          TripIt&reg; and Concur&reg; are registered trademarks of Concur
          Technologies, Inc. Other trademarks held by their respective owners.
          <a href="#" className="ml-2 text-[#1170B5] hover:underline">
            Cookie Preferences
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
