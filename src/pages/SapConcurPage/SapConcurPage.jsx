import React from "react";
import SapHeroSection from "../../components/SapHeroSection/SapHeroSection";
import BackgroundImage from "../../assets/SapHeroBg.svg";
import ContentSection from "../../components/ContentSection/ContentSection";
import image1 from "../../assets/SapImage1.png";
import image2 from "../../assets/SapImage2.png";
import image3 from "../../assets/SapImage3.png";
import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";

const SapConcurPage = () => {
  return (
    <>
      <SapHeroSection
        image={BackgroundImage}
        title="Traveling for business comes with perks"
        description="If your company uses SAP Concur, you may receive complimentary benefits that most travelers have to pay for."
        buttonLabel="Connect to TripIt"
      />
      <ContentSection
        image={image1}
        title="No matter the trip, we'll organize it in moments"
        description="Whether it's a week-long conference or a weekend away, TripIt will create a comprehensive itinerary from your travel plans."
        link="Get Started"
        quote="I travel for a living and TripIt is the best product EVER. It makes my life easier, and I use the app daily!"
        author="Melissa B."
        reverse={false}
      />
      <ContentSection
        image={image2}
        title="Get a heads-up as it happens"
        description="TripIt Pro will help you stay one step ahead, from planning to landing. No more missed connections, if we can help it."
        link="Watch a video about TripIt Pro"
        quote="I depend on the TripIt app weekly during my business travels, and often find that I receive flight change information from TripIt before the airlines even share it."
        author="Rod Z."
        reverse={true}
      />
      <ContentSection
        image={image3}
        title="With the right connections, everything's easier"
        description="Connect to TripIt in the SAP Concur App Center, so you can start getting all the benefits of instant itineraries—plus easier expense reports."
        link="Connect to TripIt"
        quote="Travel is usually stressful for me and TripIt makes it less overwhelming… I’m not just more productive, I’m actually happier."
        author="Julia G."
        reverse={false}
      />
      <CallToActionSection
        title="Connect to TripIt today"
        description="Make sure you’re connected to TripIt to get itineraries created for you as soon as you book, and receive a complimentary subscription to TripIt Pro, if you’re eligible."
        buttonText="Connect to TripIt"
        fontFamily="font-proxima_regular"
      />
    </>
  );
};

export default SapConcurPage;
