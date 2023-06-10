import classNames from "classnames";

export type ButtonVariant = "primary" | "secondary";

// Common classes
const baseClasses = [
  "rounded-md",
  "px-3.5 py-2.5",
  "text-sm font-semibold",
  "shadow-sm",
  "focus-visible:outline-2",
  "focus-visible:outline-offset-1",
];

export const buttonVariantStyles: Record<ButtonVariant, string> = {
  primary: classNames(baseClasses, [
    "bg-btn-primary-bg",
    "text-btn-primary-text",
    "hover:bg-btn-primary-bg-hover",
    "focus-visible:outline-btn-primary-outline",
  ]),
  secondary: classNames(baseClasses, [
    "bg-btn-secondary-bg",
    "border-2",
    "border-btn-secondary-border",
    "text-btn-secondary-text",
    "hover:bg-btn-secondary-bg-hover",
    "focus-visible:outline-btn-secondary-outline",
  ]),
};
