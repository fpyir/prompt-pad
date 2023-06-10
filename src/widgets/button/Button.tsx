import React, { ReactNode } from "react";
import classNames from "classnames";
import { ButtonVariant, buttonVariantStyles } from "./button_styling";

export type ButtonProps = {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
  className,
  variant = "primary",
}) => {
  const buttonClasses = classNames(buttonVariantStyles[variant], className);

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
