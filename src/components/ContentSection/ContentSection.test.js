import { render, screen, act } from "@testing-library/react";
import ContentSection from "./ContentSection";
import React from "react";

describe("ContentSection Component", () => {
  const props = {
    image: "test-image.jpg",
    title: "Test Title",
    description: "Test description.",
    link: "Learn more",
    reverse: false,
    author: "Test Author",
    quote: "Test Quote",
  };

  beforeEach(() => {
    jest.useFakeTimers(); // Enable Jest fake timers
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // Run all pending timers to clean up
    jest.useRealTimers(); // Restore real timers after each test
  });

  it("should render the title and description", () => {
    render(<ContentSection {...props} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test description.")).toBeInTheDocument();
  });

  it("should render the image after loading state", () => {
    render(<ContentSection {...props} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const image = screen.getByAltText("Content");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image.jpg");
  });

  it("should render the author and quote if provided", () => {
    render(<ContentSection {...props} />);
    expect(screen.getByText("- Test Author")).toBeInTheDocument();
    expect(screen.getByText('"Test Quote"')).toBeInTheDocument();
  });
});
