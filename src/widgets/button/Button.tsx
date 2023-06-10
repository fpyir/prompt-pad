import React, { ReactNode } from "react";
import classNames from "classnames";
import { ButtonVariant, buttonVariantStyles } from "./button_styling";
import { formatHotkeys } from "@/utils/format_hotkeys";
import { useHotkeys } from "react-hotkeys-hook";

export type ButtonProps = {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  shortcut?: string;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
  className,
  variant = "primary",
  shortcut,
}) => {
  const buttonClasses = classNames(buttonVariantStyles[variant], className);

  useHotkeys(shortcut || "", () => onClick?.(), {
    enabled: Boolean(shortcut),
    preventDefault: true,
    enableOnFormTags: ["textarea"],
  });

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
      {shortcut && (
        <span className="ml-2 tracking-widest">{formatHotkeys(shortcut)}</span>
      )}
    </button>
  );
};
