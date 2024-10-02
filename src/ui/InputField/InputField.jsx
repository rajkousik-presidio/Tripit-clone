import React from "react";

const InputField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  className,
  ...rest
}) => {
  return (
    <div className={`relative w-full mb-6 ${className ? className : ""}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`w-full bg-gray-50 px-4 pb-1 pt-4 border-2 border-[#EEE] rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer ${className}`}
        {...rest}
      />
      <label
        className={`absolute left-4 top-3 text-sm text-primary transition-all duration-200 ease-in-out peer-placeholder-shown:text-gray-500 
          ${value ? "text-xs" : "top-1/2"}
          transform -translate-y-1/2 peer-focus:top-3 peer-focus:text-xs px-[3px] peer-focus:text-primary`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
