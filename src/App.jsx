import React from "react";
import Navbar from "./components/Navbar/Navbar";
import FirstSection from "./components/FirstSection/FirstSection";
import ContentSection from "./components/ContentSection/ContentSection";
import bahImage from "./assets/FirstSectionBgImg.svg";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.svg";
import image3 from "./assets/image3.png";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * The main App component, which renders the main sections of the page.
 * These sections currently include the navbar, the first section with the
 * background image, and a series of content sections below that.
 *
 * The content sections are comprised of an image, a title, a description,
 * and a boolean indicating whether the section's layout should be reversed.
 */
/******  74254681-2160-430f-be35-38f461f6765e  *******/ function App() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px]">
        {/* First Section */}
        <FirstSection
          image={bahImage}
          title="An easier trip, each time"
          description="Imagine checking one place for your travel details and getting a heads up as things happen throughout your trip. See why life without TripIt is a distant memory for millions of travelers."
          buttonLabel="Get Started"
        />
        {/* General Content Sections */}
        <ContentSection
          image={image1}
          title="Helpful reminders and alerts so you don't miss a beat"
          description="Packed with features that give you a leg up on changes and help you make the most of all your trips, TripIt Pro is where the magic happens."
          reverse={true}
        />
        <ContentSection
          image={image2}
          title="You handle the booking, we'll take it from there"
          description="Unlike other travel apps, TripIt can organize your travel plans no matter where you book. Simply forward your confirmation emails to plans@tripit.com and in a matter of seconds, TripIt will create a comprehensive itinerary for every trip."
          reverse={false}
        />

        <ContentSection
          image={image3}
          title="Know where to be and when"
          description="Need a reminder when it's time to leave for the airport? Not sure where to eat in the airport or near your hotel? TripIt has you covered."
          reverse={false}
        />
      </div>
    </>
  );
}

export default App;
