import React from "react";
import { render, screen } from "@testing-library/react";
import CallToActionSection from "./CallToActionSection";

const props = {
  title: "Connect to TripIt today",
  description:
    "Make sure you’re connected to TripIt to get itineraries created for you as soon as you book, and receive a complimentary subscription to TripIt Pro, if you’re eligible.",
  buttonText: "Connect to TripIt",
  fontFamily: "font-proxima_regular",
};

describe("CallToActionSection Component", () => {
  it("should render the title", () => {
    render(<CallToActionSection {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it("should render the description", () => {
    render(<CallToActionSection {...props} />);
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it("should render the button with correct text", () => {
    render(<CallToActionSection {...props} />);
    expect(
      screen.getByRole("button", { name: props.buttonText })
    ).toBeInTheDocument();
  });

  it("should apply the correct font family class to the title and description", () => {
    render(<CallToActionSection {...props} />);
    const titleElement = screen.getByText(props.title);
    const descriptionElement = screen.getByText(props.description);

    expect(titleElement).toHaveClass(props.fontFamily);
    expect(descriptionElement).toHaveClass(props.fontFamily);
  });

  it("should render the button with correct styles", () => {
    render(<CallToActionSection {...props} />);
    const button = screen.getByRole("button", { name: props.buttonText });

    expect(button).toHaveClass(
      "bg-primary",
      "text-white",
      "px-12",
      "py-3",
      "rounded-sm",
      "text-lg",
      "font-medium",
      "hover:bg-[#0E74C5]",
      "transition-all",
      "duration-300"
    );
  });
});
