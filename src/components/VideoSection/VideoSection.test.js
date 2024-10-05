import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import VideoSection from "./VideoSection";

jest.mock(
  "../../assets/videoSectionImage.svg",
  () => "mockedVideoSectionImage.svg"
);
jest.mock("../../assets/playBtn.svg", () => "mockedPlayBtn.svg");

beforeAll(() => {
  window.IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

beforeEach(() => {
  Element.prototype.scrollIntoView = jest.fn();
});

describe("VideoSection Component", () => {
  beforeEach(() => {
    document.body.style.overflow = "auto";
  });

  it("should render the VideoSection with the background image and content", () => {
    render(<VideoSection />);

    const backgroundElement = screen.getByRole("heading", {
      name: /Take a closer look/i,
    });
    expect(backgroundElement).toBeInTheDocument();

    const playButton = screen.getByAltText("Play Button");
    expect(playButton).toBeInTheDocument();
  });

  it("should show the video player when the play button is clicked", () => {
    render(<VideoSection />);

    const playButton = screen.getByAltText("Play Button");
    fireEvent.click(playButton);

    const videoPlayer = screen.getByTitle("YouTube video player");
    expect(videoPlayer).toBeInTheDocument();

    expect(document.body.style.overflow).toBe("hidden");
  });

  it("should hide the video player and reset overflow when close button is clicked", () => {
    render(<VideoSection />);

    const playButton = screen.getByAltText("Play Button");
    fireEvent.click(playButton);

    const closeButton = screen.getByRole("button", { name: /×/i });
    fireEvent.click(closeButton);

    const videoPlayer = screen.queryByTitle("YouTube video player");
    expect(videoPlayer).not.toBeInTheDocument();

    expect(document.body.style.overflow).toBe("auto");

    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  it("should handle the observer visibility change", async () => {
    render(<VideoSection />);

    expect(window.IntersectionObserver).toHaveBeenCalled();
  });
});
