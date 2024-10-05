import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  beforeEach(() => {
    global.innerWidth = 1024;
    global.dispatchEvent(new Event("resize"));
  });

  it("should render all static elements", () => {
    render(<Footer />);

    expect(screen.getByAltText("TripIt Logo")).toBeInTheDocument();

    expect(
      screen.getByText(/© 2006-2024, Concur Technologies, Inc./)
    ).toBeInTheDocument();
  });

  it("should render all sections on large screens", () => {
    render(<Footer />);

    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("News & Resources")).toBeInTheDocument();
    expect(screen.getByText("Partners")).toBeInTheDocument();

    ["Download App", "TripIt", "TripIt Pro", "Help Center"].forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it("should expand a section when clicked on a small screen", () => {
    global.innerWidth = 600;
    global.dispatchEvent(new Event("resize"));

    render(<Footer />);

    const productsHeader = screen.getByText("Products");

    fireEvent.click(productsHeader);

    ["Download App", "TripIt", "TripIt Pro", "Help Center"].forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });
});
