import React from "react";
import { twMerge } from "tailwind-merge";

const Input = ({
  label,
  name,
  register,
  error,
  type = "text",
  className,
  labelClassName,
  inputClassName,
  errorClassName,
  registerOptions = {},
  ...props
}) => {
  return (
    <div className={twMerge("flex flex-col gap-2 w-full", className)}>
      {label && (
        <label
          htmlFor={name}
          className={twMerge(
            "text-base font-medium text-white",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        className={twMerge(
          "px-4 py-2 bg-transparent rounded-md text-white outline-none focus:ring-1 focus:ring-primary-400 border-2 border-white",
          error && "border-red-500",
          inputClassName
        )}
        {...register(name, registerOptions)}
        {...props}
      />
      {error && (
        <p className={twMerge("text-sm text-red-500 mt-1", errorClassName)}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
