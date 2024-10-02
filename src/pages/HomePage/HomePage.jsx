import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarComponent from "../../components/Navbar/Navbar";
import FirstSection from "../../components/HeroSection/HeroSection";
import bahImage from "../../assets/FirstSectionBgImg.svg";
import ContentSectionsGroup from "../../components/ContentSectionsGroup/ContentSectionsGroup";
import BlogComponent from "../../components/BlogComponent/BlogComponent";
import VideoSection from "../../components/VideoSection/VideoSection";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";
import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="mt-[100px]">
        <FirstSection
          image={bahImage}
          title="An easier trip, each time"
          description="Imagine checking one place for your travel details and getting a heads up as things happen throughout your trip. See why life without TripIt is a distant memory for millions of travelers."
          buttonLabel="Get Started"
        />
        <ContentSectionsGroup />
        <hr />
        <BlogComponent />
        <VideoSection />
        <FeaturedSection />
        <CallToActionSection />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
