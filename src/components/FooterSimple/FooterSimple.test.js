import React from "react";
import { render, screen } from "@testing-library/react";
import FooterSimple from "./FooterSimple";

describe("FooterSimple Component", () => {
  beforeEach(() => {
    render(<FooterSimple />);
  });

  it("should render copyright text", () => {
    expect(
      screen.getByText("© 2006-2024, Concur Technologies, Inc.")
    ).toBeInTheDocument();
  });

  it("should render the 'User Agreement' link", () => {
    expect(screen.getByText("User Agreement")).toBeInTheDocument();
    expect(screen.getByText("User Agreement")).toHaveAttribute("href", "#");
  });

  it("should render the 'Privacy Statement' link", () => {
    expect(screen.getByText("Privacy Statement")).toBeInTheDocument();
    expect(screen.getByText("Privacy Statement")).toHaveAttribute("href", "#");
  });

  it("should render the 'Cookie Preferences' link", () => {
    expect(screen.getByText("Cookie Preferences")).toBeInTheDocument();
    expect(screen.getByText("Cookie Preferences")).toHaveAttribute("href", "#");
  });

  it("should render the 'Do Not Share/Sell My Personal Information' link", () => {
    expect(
      screen.getByText("Do Not Share/Sell My Personal Information")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Do Not Share/Sell My Personal Information")
    ).toHaveAttribute("href", "#");
  });

  it("should render the 'Help Center' link", () => {
    expect(screen.getByText("Help Center")).toBeInTheDocument();
    expect(screen.getByText("Help Center")).toHaveAttribute("href", "#");
  });
});
