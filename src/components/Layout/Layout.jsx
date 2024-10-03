// components/Layout/Layout.jsx
import React from "react";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <div className="mt-[100px]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
