import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LoginPage from "./LoginPage";
import axiosInstance from "../../utils/axiosConfig";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

const mockNavigate = require("react-router-dom").useNavigate;

jest.mock("../../utils/axiosConfig");

describe("LoginPage", () => {
  beforeEach(() => {
    axiosInstance.get.mockReset();
    mockNavigate.mockClear();
  });

  it("should render login form elements", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
  });

  it("should show error messages for empty fields", async () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(
      await screen.findByText("Please enter your email address and password.")
    ).toBeInTheDocument();
  });

  it("should show an error for invalid email", async () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    // Find input fields by label and type invalid email and valid password
    const emailInput = screen.getByLabelText("Email Address");
    const passwordInput = screen.getByLabelText("Password");
    const signInButton = screen.getByRole("button", { name: /sign in/i });

    // Type in the email and password
    await userEvent.type(emailInput, "sa");
    await userEvent.type(passwordInput, "password123");

    // Click on the Sign In button
    fireEvent.click(signInButton);

    // Check for the expected error message
    expect(
      await screen.findByText("Please enter a valid email address.")
    ).toBeInTheDocument();
  });

  it("should show an error for incorrect credentials", async () => {
    axiosInstance.get.mockResolvedValue({ data: [] });

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    await userEvent.type(
      screen.getByLabelText("Email Address"),
      "test1@gmail.com"
    );
    await userEvent.type(screen.getByLabelText("Password"), "wrongpassword");
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() =>
      expect(
        screen.getByText(
          "The email address and/or password you entered do not match our records. Passwords are cAsE sEnSiTiVe."
        )
      ).toBeInTheDocument()
    );
  });

  it("should navigate to /web page for correct credentials", async () => {
    axiosInstance.get.mockResolvedValue({
      data: [{ email: "test1@gmail.com", password: "password123" }],
    });

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    await userEvent.type(
      screen.getByLabelText("Email Address"),
      "test1@gmail.com"
    );
    await userEvent.type(screen.getByLabelText("Password"), "password123");

    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledTimes(28);
    });
  });

  it("should show an error if API call fails", async () => {
    axiosInstance.get.mockRejectedValue(new Error("API Error"));

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    await userEvent.type(
      screen.getByLabelText("Email Address"),
      "test1@gmail.com"
    );
    await userEvent.type(screen.getByLabelText("Password"), "password123");
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() =>
      expect(
        screen.getByText("Something went wrong. Please try again later.")
      ).toBeInTheDocument()
    );
  });
});
