import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import SignupPage from "./SignupPage";
import axiosInstance from "../../utils/axiosConfig";

jest.mock("../../utils/axiosConfig");

describe("SignupPage Component", () => {
  beforeEach(() => {
    axiosInstance.post.mockReset();
  });

  it("should render signup form elements", () => {
    render(
      <BrowserRouter>
        <SignupPage />
      </BrowserRouter>
    );

    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Home City")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /create an account/i })
    ).toBeInTheDocument();
  });

  it("should keep the submit button disabled when form is invalid", async () => {
    render(
      <BrowserRouter>
        <SignupPage />
      </BrowserRouter>
    );

    const submitButton = screen.getByRole("button", {
      name: /create an account/i,
    });

    expect(submitButton).toBeDisabled();

    await userEvent.type(
      screen.getByLabelText("Email Address"),
      "invalid-email"
    );
    expect(submitButton).toBeDisabled();

    await userEvent.type(screen.getByLabelText("Password"), "pass");
    expect(submitButton).toBeDisabled();

    await userEvent.type(screen.getByLabelText("Home City"), "New York");
    expect(submitButton).toBeDisabled();

    fireEvent.click(screen.getByRole("checkbox"));
    expect(submitButton).toBeDisabled();

    await userEvent.clear(screen.getByLabelText("Email Address"));
    await userEvent.type(
      screen.getByLabelText("Email Address"),
      "test@example.com"
    );
    await userEvent.clear(screen.getByLabelText("Password"));
    await userEvent.type(screen.getByLabelText("Password"), "password123");

    expect(submitButton).not.toBeDisabled();
  });

  it("should enable the signup button when all inputs are valid", async () => {
    render(
      <BrowserRouter>
        <SignupPage />
      </BrowserRouter>
    );

    await userEvent.type(
      screen.getByLabelText("Email Address"),
      "test@example.com"
    );
    await userEvent.type(screen.getByLabelText("Password"), "password123");
    await userEvent.type(screen.getByLabelText("Home City"), "New York");
    fireEvent.click(screen.getByRole("checkbox"));

    expect(
      screen.getByRole("button", { name: /create an account/i })
    ).not.toBeDisabled();
  });

  it("should show error for invalid email", async () => {
    render(
      <BrowserRouter>
        <SignupPage />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText("Email Address");

    await userEvent.type(emailInput, "invalid-email");

    fireEvent.blur(emailInput);

    expect(
      await screen.findByText("Invalid email address.")
    ).toBeInTheDocument();
  });
});
