import React from "react";
import PricingIntroSection from "../../components/PricingIntroSection/PricingIntroSection";
import PlanComparison from "../../components/PlanComparison/PlanComparison";
import NavbarComponent from "../../components/Navbar/Navbar";

const PricingPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="mt-[100px]">
        <PricingIntroSection />
        <PlanComparison />
      </div>
    </>
  );
};

export default PricingPage;
