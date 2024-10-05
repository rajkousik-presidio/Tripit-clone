import { render, screen, act } from "@testing-library/react";
import ContentSection from "./ContentSection";
import React from "react";

describe("ContentSection Component", () => {
  const props = {
    title: "Test Title",
    description: "Test description.",
    link: "Learn more",
    reverse: false,
    author: "Test Author",
    quote: "Test Quote",
    image: "test-image.jpg",
  };

  beforeEach(() => {
    jest.useFakeTimers(); // Enable Jest fake timers
  });

  it("should render the title and description", () => {
    render(
      <ContentSection>
        <ContentSection.Item
          title={props.title}
          description={props.description}
          link={props.link}
          reverse={props.reverse}
          author={props.author}
          quote={props.quote}
        >
          <ContentSection.Image image={props.image} />
        </ContentSection.Item>
      </ContentSection>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test description.")).toBeInTheDocument();
  });

  it("should render the image after loading state", () => {
    render(
      <ContentSection>
        <ContentSection.Item
          title={props.title}
          description={props.description}
          link={props.link}
          reverse={props.reverse}
          author={props.author}
          quote={props.quote}
        >
          <ContentSection.Image image={props.image} />
        </ContentSection.Item>
      </ContentSection>
    );

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const image = screen.getByAltText("Content");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image.jpg");
  });

  it("should render the author and quote if provided", () => {
    render(
      <ContentSection>
        <ContentSection.Item
          title={props.title}
          description={props.description}
          link={props.link}
          reverse={props.reverse}
          author={props.author}
          quote={props.quote}
        >
          <ContentSection.Image image={props.image} />
        </ContentSection.Item>
      </ContentSection>
    );
    expect(screen.getByText("- Test Author")).toBeInTheDocument();
    expect(screen.getByText('"Test Quote"')).toBeInTheDocument();
  });
});
