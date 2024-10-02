import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import logo from "../../assets/logo-tripit.svg";
import { HiBars3 } from "react-icons/hi2";
import { MdArrowDropDown } from "react-icons/md";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // Handle sidebar
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // Handle overlay visibility
  const [dropdownOpen, setDropdownOpen] = useState(false); // Handle dropdown
  const [activeLink, setActiveLink] = useState(""); // Handle active link

  const toggleSidebar = () => {
    if (!isOpen) {
      setIsOverlayVisible(true);
      setIsOpen(true);
      setDropdownOpen(false);
    } else {
      setIsOpen(false);
      setTimeout(() => {
        setIsOverlayVisible(false);
      }, 300); // Delay hiding overlay until sidebar transition is done
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close sidebar on link click
    setTimeout(() => {
      setIsOverlayVisible(false);
    }, 300);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Close sidebar if screen size is larger than or equal to 1024px (lg breakpoint)
        setIsOpen(false);
        setIsOverlayVisible(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar
        fixed="top"
        className="px-5 sm:px-10 md:px-20 py-3 flex justify-between lg:justify-around items-center bg-white fixed top-0 w-full z-50 shadow-md lg:shadow-none"
      >
        <Navbar.Brand href="/">
          <img src={logo} alt="TripIt Logo" className="h-10 w-auto" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-none bg-transparent text-2xl cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        >
          <HiBars3 className="text-[#0E7AC5] text-4xl" />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="hidden lg:flex justify-end items-center space-x-4"
        >
          <Nav
            id="navbar-nav"
            className="flex items-center tablet:gap-4 xl:gap-8 gap-4"
          >
            {[
              "tripit",
              "tripit-pro",
              "how-it-works",
              "pricing",
              "SAP-concur",
              "sign-in",
            ].map((link) => (
              <Nav.Link
                key={link}
                href={`#${link}`}
                onClick={() => handleLinkClick(link)}
                className={`text-black tracking-wide text-[0.9rem] px-1 font-medium hover:text-[#0E7AC5] ${
                  activeLink === link ? "border-b-2 border-b-[#0E7AC5]" : ""
                }`}
              >
                {link
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Nav.Link>
            ))}
            <Button
              variant="outline-primary"
              className="m-0 border-2 rounded-sm tracking-wide border-[#0E7AC5] text-[#0E7AC5] px-4 py-2 text-[0.9rem] font-normal hover:bg-[#106CC5] hover:text-white"
            >
              Sign Up—It’s Free!
            </Button>
          </Nav>
          <div className="relative">
            <Button
              onClick={toggleDropdown}
              className="m-0 border-2 rounded-sm flex tracking-wide items-center justify-center border-[#0E7AC5] text-[#0E7AC5] px-4 py-2 text-[0.9rem] font-semibold hover:bg-[#106CC5] hover:text-white"
            >
              <CiGlobe className="mr-2 flex items-center font-extrabold text-xl" />
              <span>EN</span>
              <MdArrowDropDown className="ml-2 text-2xl" />
            </Button>
            {dropdownOpen && (
              <div
                className="absolute right-0 tracking-wide mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-md"
                onMouseLeave={closeDropdown}
              >
                <ul className="py-1">
                  {[
                    "English (UK)",
                    "Français",
                    "Deutsch",
                    "Español (Latinoamérica)",
                    "Español (España)",
                  ].map((language, index) => (
                    <li key={index}>
                      <a
                        href={`#${language.toLowerCase().replace(/ /g, "-")}`}
                        className="block px-4 py-1 text-[#0E7AC5] font-light hover:bg-gray-100"
                      >
                        {language}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>

      {/* Overlay for Mobile View */}
      {isOverlayVisible && (
        <div
          className={`fixed inset-0 bg-white transition-opacity duration-300 z-40 ${
            isOpen ? "opacity-75" : "opacity-0"
          }`}
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar for Mobile View */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-md p-10 z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-3 right-3 text-3xl cursor-pointer"
          onClick={toggleSidebar}
        >
          <IoIosClose className="text-[#0E7AC5] text-5xl" />
        </button>
        <Nav className="flex flex-col space-y-4 mt-12">
          {["tripit", "pro", "how-it-works", "pricing", "sap-concur"].map(
            (link, index) => (
              <Nav.Link
                key={index}
                href={`#${link}`}
                onClick={() => handleLinkClick(link)}
                className={`text-black text-lg tracking-wide font-medium hover:text-[#0E7AC5] ${
                  activeLink === link
                    ? "underline underline-offset-8 decoration-[#0E7AC5] decoration-5"
                    : ""
                }`}
              >
                {link
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Nav.Link>
            )
          )}
          {/* Rest of the sidebar content */}
          <Button
            variant="primary"
            className="mt-4 rounded-sm bg-white text-[#0E7AC5] border-2 border-[#0E7AC5] px-4 py-2 text-lg tracking-wide font-medium"
            onClick={() => handleLinkClick("sign-in")}
          >
            Sign In
          </Button>
          <Button
            variant="primary"
            className="mt-4 rounded-sm bg-[#0E7AC5] text-white px-4 py-3 text-lg tracking-wide font-medium hover:bg-[#106CC5]"
            onClick={toggleSidebar}
          >
            Sign Up—It’s Free!
          </Button>
          <div className="relative mt-4">
            <Button
              onClick={toggleDropdown}
              className="m-0 border-2 rounded-sm flex tracking-wide items-center justify-between border-[#0E7AC5] text-[#0E7AC5] px-2 py-2 text-[0.9rem] font-semibold hover:bg-[#106CC5] hover:text-white"
            >
              <CiGlobe className="mr-2 flex items-center font-extrabold text-xl" />
              <span>EN</span>
              <MdArrowDropDown className="ml-2 text-2xl" />
            </Button>
            {dropdownOpen && (
              <div
                className="absolute left-0 tracking-wide mt-1 w-60 bg-white border border-gray-200 rounded-md shadow-md"
                onMouseLeave={closeDropdown}
              >
                <ul className="">
                  {[
                    "English (UK)",
                    "Français",
                    "Deutsch",
                    "Español (Latinoamérica)",
                    "Español (España)",
                  ].map((language, index) => (
                    <li key={index}>
                      <a
                        href={`#${language.toLowerCase().replace(/ /g, "-")}`}
                        className="block px-4 py-1 text-[#0E7AC5] font-light hover:bg-gray-100"
                      >
                        {language}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex justify-between w-10/12 pt-12">
            <Nav.Link className="text-2xl hover:text-[#0E7AC5]">
              <FaInstagram />
            </Nav.Link>
            <Nav.Link className="text-2xl hover:text-[#0E7AC5]">
              <FaFacebook />
            </Nav.Link>
            <Nav.Link className="text-2xl hover:text-[#0E7AC5]">
              <FaLinkedinIn />
            </Nav.Link>
            <Nav.Link className="text-2xl hover:text-[#0E7AC5]">
              <FaYoutube />
            </Nav.Link>
          </div>
          <Navbar.Brand href="/">
            <img src={logo} alt="TripIt Logo" className="h-10 mt-4 w-auto" />
          </Navbar.Brand>
        </Nav>
      </div>
    </>
  );
};

export default NavbarComponent;
