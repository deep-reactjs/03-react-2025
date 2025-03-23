import { cva } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const customButton = cva(
  "rounded flex items-center gap-2 ease-in-out duration-200",
  {
    variants: {
      size: {
        large: ["px-9", "py-2", "text-lg", "font-medium"],
        medium: ["px-6", "py-2", "font-medium", "text-base"],
        small: ["px-4", "py-1.5", "text-sm", "font-normal"],
      },
      variant: {
        "primary-fill":
          "bg-primary-400 text-white hover:bg-primary-500 active:bg-primary-600",
        "primary-outline":
          "border border-primary-400 text-primary-400 hover:border-primary-500 active:border-primary-600 hover:text-primary-500 active:text-primary-600",
        "primary-text":
          "text-primary-400 hover:text-primary-500 active:text-primary-600",
        "secondary-fill":
          "bg-secondary-400 text-white hover:bg-secondary-500 active:bg-secondary-600",
        "secondary-outline":
          "border border-secondary-400 text-secondary-400 hover:border-secondary-500 active:border-secondary-600 hover:text-secondary-500 active:text-secondary-600",
        "secondary-text":
          "text-secondary-400 hover:text-secondary-500 active:text-secondary-600",
      },
    },
  }
);

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
      // className={twMerge(
      //   size === "large" && "px-9 py-2 text-lg font-medium",
      //   size === "medium" && "px-6 py-2 font-medium text-base",
      //   size === "small" && "px-4 py-1.5 text-sm font-light",
      //   type === "text" && "p-0",
      //   type === "fill" && variant === "primary" && "bg-primary-400 text-white",
      //   type === "file" &&
      //     variant === "secondary" &&
      //     "bg-secondary-400 text-white",
      //   type === "outline" &&
      //     variant === "primary" &&
      //     "border border-primary-400 text-primary-400",
      //   type === "outline" &&
      //     variant === "secondary" &&
      //     "border border-secondary-400 text-secondary-400"
      // )}
      className={twMerge(
        customButton({ size, variant: `${variant}-${type}` }),
        className
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
