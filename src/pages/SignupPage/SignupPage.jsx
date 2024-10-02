import React, { useState } from "react";
import InputField from "../../ui/InputField/InputField";
import FooterSimple from "../../components/FooterSimple/FooterSimple"; // This footer is different from the main footer
import logo from "../../assets/logo-tripit.svg";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [homeCity, setHomeCity] = useState("");
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <img src={logo} alt="TripIt Logo" className="mb-8 w-36" />
      <div className="bg-white shadow-md rounded-lg px-8 py-10 w-full max-w-md">
        <InputField
          label="Email Address"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          label="Home City"
          type="text"
          placeholder="Home City"
          value={homeCity}
          onChange={(e) => setHomeCity(e.target.value)}
        />
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            checked={isAccepted}
            onChange={(e) => setIsAccepted(e.target.checked)}
            className="form-checkbox"
          />
          <span className="ml-2 text-sm text-gray-700">
            I accept the TripIt{" "}
            <a href="#" className="text-primary hover:underline">
              User Agreement
            </a>{" "}
            and have read the{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Statement
            </a>
            .
          </span>
        </div>
        <button
          className={`w-full ${
            isAccepted ? "bg-primary" : "bg-gray-300 cursor-not-allowed"
          } text-white py-3 rounded-md transition-all duration-300`}
          disabled={!isAccepted}
        >
          Create an Account
        </button>
        <p className="mt-6 text-center text-sm text-gray-600">
          Or create an account with:
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-white border border-gray-300 rounded-full p-3">
            <img src="/google-icon.svg" alt="Google" />
          </button>
          <button className="bg-white border border-gray-300 rounded-full p-3">
            <img src="/facebook-icon.svg" alt="Facebook" />
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already a TripIt user?{" "}
          <a href="#" className="text-primary hover:underline">
            Sign In.
          </a>
        </p>
      </div>
      <FooterSimple />
    </div>
  );
};

export default SignupPage;
