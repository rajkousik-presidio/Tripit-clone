import React from "react";
import { render, screen } from "@testing-library/react";
import PricingIntroSection from "./PricingIntroSection";

describe("PricingIntroSection Component", () => {
  it("should render the pricing section title", () => {
    render(<PricingIntroSection />);

    expect(screen.getByText("Pricing")).toBeInTheDocument();
  });

  it("should render the pricing section description", () => {
    render(<PricingIntroSection />);

    expect(
      screen.getByText(
        "For about the price of checking your bags, you can make travel less stressful all year long. Give us a spin and see why millions of travelers use TripIt and TripIt Pro."
      )
    ).toBeInTheDocument();
  });

  it("should apply the correct styles to the title and description", () => {
    render(<PricingIntroSection />);

    const title = screen.getByText("Pricing");
    expect(title).toHaveClass(
      "text-3xl md:text-5xl font-medium text-black mb-4"
    );

    const description = screen.getByText(
      "For about the price of checking your bags, you can make travel less stressful all year long. Give us a spin and see why millions of travelers use TripIt and TripIt Pro."
    );
    expect(description).toHaveClass(
      "text-[15px] tracking-wide md:text-lg font-normal text-gray-700 max-w-3xl mx-auto leading-relaxed"
    );
  });
});
