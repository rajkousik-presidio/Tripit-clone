import React, { useState } from "react";
import InputField from "../../ui/InputField/InputField";
import FooterSimple from "../../components/FooterSimple/FooterSimple"; // This footer is different from the main footer
import logo from "../../assets/logo-tripit.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

const dummyAccounts = [
  { email: "test1@gmail.com", password: "password123" },
  { email: "test2@gmail.com", password: "password456" },
];

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = () => {
    if (!email && !password) {
      setErrorMessage("Please enter your email address and password.");
      return;
    }

    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    if (!isEmailValid) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const isValidUser = dummyAccounts.some(
      (account) => account.email === email && account.password === password
    );

    if (!isValidUser) {
      setErrorMessage(
        "The email address and/or password you entered do not match our records. Passwords are cAsE sEnSiTiVe."
      );
    } else {
      setErrorMessage("");
      // Handle successful login logic here
      console.log("Login successful");
    }
  };

  return (
    <>
      {errorMessage && (
        <div className="min-w-[100vw] max-w-md mt-1 p-3 bg-[#FBD771] text-sm text-center font-light tracking-wide text-black">
          {errorMessage}
        </div>
      )}
      <div className="min-h-screen flex flex-col items-center justify-start pt-24 bg-gray-50">
        <img src={logo} alt="TripIt Logo" className="mb-4 w-36" />
        <div className="px-8 py-2 w-full max-w-md">
          {/* Email Input Field */}
          <InputField
            label="Email Address"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input Field */}
          <InputField
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Keep me signed in & Forgot password */}
          <div className="flex items-center justify-between my-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox bg-gray-50 accent-primary"
              />
              <span className="ml-2 text-sm text-gray-700">
                Keep me signed in.
              </span>
            </label>
            <a href="#" className="text-sm text-primary no-underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            className="w-full bg-primary text-white py-2 rounded-sm hover:bg-[#1079C5] transition-all duration-300"
          >
            Sign In
          </button>

          {/* Or sign in with */}
          <p className="mt-6 text-center text-sm tracking-wide text-gray-600">
            Or sign in with:
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="bg-white border border-primary rounded-sm px-2 py-1 text-primary">
              <FcGoogle className="text-2xl" />
            </button>
            <button className="bg-white rounded-sm text-primary">
              <FaFacebookSquare className="text-[43px]" />
            </button>
          </div>

          {/* Create Account Link */}
          <p className="mt-6 tracking-wide text-center text-sm text-gray-600">
            <a href="#" className="text-primary font-medium no-underline">
              Don't have an account? Create one.
            </a>
          </p>
        </div>

        {/* Footer */}
        <FooterSimple />
      </div>
    </>
  );
};

export default LoginPage;
