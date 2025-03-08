import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  size,
  type,
  variant,
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        size === "large" && "px-9 py-2 text-lg font-medium",
        size === "medium" && "px-6 py-2 font-medium text-base",
        size === "small" && "px-4 py-1.5 text-sm font-light",
        type === "text" && "p-0",
        type === "fill" && variant === "primary" && "bg-primary-400 text-white",
        type === "file" &&
          variant === "secondary" &&
          "bg-secondary-400 text-white",
        type === "outline" &&
          variant === "primary" &&
          "border border-primary-400 text-primary-400",
        type === "outline" &&
          variant === "secondary" &&
          "border border-secondary-400 text-secondary-400"
      )}
      {...rest}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};

export default Button;
