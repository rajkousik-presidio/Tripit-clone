import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarComponent from "../../components/Navbar/Navbar";
import FirstSection from "../../components/FirstSection/FirstSection";
import bahImage from "../../assets/FirstSectionBgImg.svg";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.png";
import ContentSection from "../../components/ContentSection/ContentSection";
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
        <ContentSection
          image={image1}
          title="You handle the booking, we'll take it from there"
          description="Unlike other travel apps, TripIt can organize your travel plans no matter where you book. Simply forward your confirmation emails to plans@tripit.com and in a matter of seconds, TripIt will create a comprehensive itinerary for every trip."
          link="Learn how it works"
          quote="I’m on the road 100 days a year and TripIt is my go-to app. It’s such a powerful tool in the hands of a traveler. There’s simply nothing like it on the planet."
          author="Damen L."
          reverse={true}
        />
        <ContentSection
          image={image2}
          title="Helpful reminders and alerts so you don't miss a beat"
          description="Packed with features that give you a leg up on changes and help you make the most of all your trips, TripIt Pro is where the magic happens."
          link="Learn all about TripIt Pro"
          quote="I love knowing exactly when my flights are, when they are delayed, what gate to leave from, and all the other amazing TripIt Pro features."
          author="Ann B."
          reverse={false}
        />
        <ContentSection
          image={image3}
          title="Know where to be and when"
          description="Need a reminder when it's time to leave for the airport? Not sure where to eat in the airport or near your hotel? TripIt has you covered."
          link="Download the TripIt app"
          quote="My favorite business travel app so far is TripIt. Carrying all of my itineraries, it saves me during my 'Where am I, what do I do next?' panic attacks."
          author="Phil D."
          reverse={true}
        />
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
