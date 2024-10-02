import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  className,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = `${label.replace(/\s+/g, "-").toLowerCase()}-input`;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={`relative w-full mt-6 ${className ? className : ""}`}>
      <input
        id={inputId}
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder=""
        className={`w-full bg-gray-50 px-4 pb-1 pt-4 border-2 border-[#EEE] rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer ${className}`}
        {...rest}
      />
      <label
        htmlFor={inputId}
        className={`absolute cursor-text left-4 text-sm text-primary transition-all duration-200 ease-in-out peer-placeholder-shown:text-gray-500 
          ${value ? "text-xs" : "top-1/2"}
          transform -translate-y-1/2 peer-focus:top-3 peer-focus:text-xs px-[3px] peer-focus:text-primary`}
      >
        {label}
      </label>
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary focus:outline-none"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
};

export default InputField;
