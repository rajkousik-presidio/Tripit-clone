import React from "react";
import PricingIntroSection from "../../components/PricingIntroSection/PricingIntroSection";
import PlanComparison from "../../components/PlanComparison/PlanComparison";
import NavbarComponent from "../../components/Navbar/Navbar";
import FAQSection from "../../components/FAQSection/FAQSection";
import Footer from "../../components/Footer/Footer";

const PricingPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="mt-[100px]">
        <PricingIntroSection />
        <PlanComparison />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
