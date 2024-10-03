import React, { useState } from "react";
import InputField from "../../ui/InputField/InputField";
import FooterSimple from "../../components/FooterSimple/FooterSimple";
import logo from "../../assets/logo-tripit.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosConfig";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [homeCity, setHomeCity] = useState("");
  const [error, setError] = useState({ email: "", password: "", homeCity: "" });
  const [checkbox, setCheckbox] = useState(false);
  const navigate = useNavigate();

  const isFormValid = () => {
    return (
      validateEmail(email) &&
      password.length >= 8 &&
      homeCity.trim() !== "" &&
      checkbox
    );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError((prev) => ({
      ...prev,
      email: validateEmail(value) ? "" : "Invalid email address.",
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError((prev) => ({
      ...prev,
      password:
        value.length >= 8 ? "" : "Password must be at least 8 characters long.",
    }));
  };

  const handleHomeCityChange = (e) => {
    const value = e.target.value;
    setHomeCity(value);
    setError((prev) => ({
      ...prev,
      homeCity: value.trim() ? "" : "Home City cannot be empty.",
    }));
  };

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  };

  const handleSignUp = async () => {
    if (isFormValid()) {
      const newUser = {
        email,
        password,
        homeCity,
      };

      try {
        const response = await axiosInstance.post("/users", newUser);

        if (response.status === 201) {
          // Navigate to the home page after successful signup
          navigate("/web");
        } else {
          setError((prev) => ({
            ...prev,
            form: "Failed to create account. Please try again later.",
          }));
        }
      } catch (error) {
        console.error("Error:", error);
        setError((prev) => ({
          ...prev,
          form: "An error occurred. Please try again later.",
        }));
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-start lg:pt-24 pt-12 bg-gray-50">
        <img src={logo} alt="TripIt Logo" className="mb-4 w-36" />
        <div className="px-8 py-2 w-full max-w-md">
          <InputField
            label="Email Address"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            className={error.email ? "border-red-500" : ""}
          />
          {error.email && (
            <p className="text-red-500 text-sm mt-1">{error.email}</p>
          )}

          <InputField
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className={error.password ? "border-red-500" : ""}
          />
          {error.password && (
            <p className="text-red-500 text-sm mt-1">{error.password}</p>
          )}

          <InputField
            label="Home City"
            type="text"
            placeholder="Home City"
            value={homeCity}
            onChange={handleHomeCityChange}
            className={error.homeCity ? "border-red-500" : ""}
          />
          {error.homeCity && (
            <p className="text-red-500 text-sm mb-1">{error.homeCity}</p>
          )}

          <div className="flex items-start my-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox bg-gray-50 accent-primary"
                checked={checkbox}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-sm text-gray-700">
                I accept the TripIt{" "}
                <a href="#" className="text-primary no-underline">
                  User Agreement
                </a>{" "}
                and have read the{" "}
                <a href="#" className="text-primary no-underline">
                  Privacy Statement
                </a>
                .
              </span>
            </label>
          </div>

          <button
            onClick={handleSignUp}
            disabled={!isFormValid()}
            className={`w-full py-2 rounded-sm transition-all duration-300 text-white ${
              isFormValid() ? "bg-primary  hover:bg-[#1079C5]" : "bg-[#E9E9E9]"
            }`}
          >
            Create an Account
          </button>

          <p className="mt-6 text-center text-sm tracking-wide text-gray-600">
            Or create an account with:
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="bg-white border border-primary rounded-sm px-2 py-1 text-primary">
              <FcGoogle className="text-2xl" />
            </button>
            <button className="bg-white rounded-sm text-primary">
              <FaFacebookSquare className="text-[43px]" />
            </button>
          </div>

          <p className="mt-6 tracking-wide text-center text-sm text-gray-600">
            <Link
              to="/account/login"
              className="text-primary font-medium no-underline"
            >
              Already a TripIt user? Sign In.
            </Link>
          </p>
        </div>

        <FooterSimple />
      </div>
    </>
  );
};

export default SignupPage;
