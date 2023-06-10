import React, { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
  className,
  variant = "primary",
}) => {
  const buttonClasses = classNames(
    "rounded-md",
    variant === "primary"
      ? "bg-btn-primary-bg"
      : "bg-btn-secondary-bg border-2 border-btn-secondary-border",
    variant === "primary" ? "text-btn-primary-text" : "text-btn-secondary-text",
    "px-3.5",
    "py-2.5",
    "text-sm",
    "font-semibold",
    "shadow-sm",
    variant === "primary"
      ? "hover:bg-btn-primary-bg-hover"
      : "hover:bg-btn-secondary-bg-hover",
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",
    variant === "primary"
      ? "focus-visible:outline-btn-primary-outline"
      : "focus-visible:outline-btn-secondary-outline",
    className
  );

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
