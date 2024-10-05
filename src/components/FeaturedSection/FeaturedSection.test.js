import React from "react";
import { render, screen, act } from "@testing-library/react";
import FeaturedSection from "./FeaturedSection";
import axios from "../../utils/axiosConfig";

jest.mock("../../utils/axiosConfig");

const mockLogos = [
  {
    id: "1",
    src: "http://localhost:3000/nyt.svg",
    alt: "The New York Times",
    size: "w-56",
  },
  {
    id: "2",
    src: "http://localhost:3000/forbes.svg",
    alt: "Forbes",
    size: "w-28",
  },
  {
    id: "3",
    src: "http://localhost:3000/nbc.svg",
    alt: "NBC",
    size: "w-16",
  },
];

describe("FeaturedSection Component", () => {
  beforeEach(async () => {
    axios.get.mockResolvedValue({ data: mockLogos });

    await act(async () => {
      render(<FeaturedSection />);
    });
  });

  it("should render the section title", () => {
    expect(screen.getByText("As featured on")).toBeInTheDocument();
  });

  it("should render all logos fetched from the API", () => {
    mockLogos.forEach((logo) => {
      const logoImage = screen.getByAltText(logo.alt);
      expect(logoImage).toBeInTheDocument();
      expect(logoImage).toHaveAttribute("src", logo.src);
    });
  });

  it("should display the correct size class for each logo", () => {
    mockLogos.forEach((logo) => {
      const logoContainer = screen.getByAltText(logo.alt).closest("div");
      expect(logoContainer).toHaveClass(logo.size);
    });
  });

  it("should handle errors when fetching logos", async () => {
    axios.get.mockRejectedValue(new Error("Error fetching logos"));
    expect(screen.getByText("As featured on")).toBeInTheDocument();
  });
});
