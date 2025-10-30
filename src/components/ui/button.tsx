import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "outlinedark" | "disabled";
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  onClick,
  disabled = false,
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants: Record<string, string> = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-800 focus:ring-blue-500 hover:cursor-pointer",
    // light outline for light backgrounds
    outline:
      "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500 hover:cursor-pointer shadow-sm",
    // new outline variant optimized for dark backgrounds
    outlinedark:
      "bg-transparent border border-white/30 text-white hover:bg-white/10 hover:text-white focus:ring-white/40 hover:cursor-pointer shadow-sm",
    disabled: "bg-gray-400 text-gray-200 cursor-not-allowed",
  };

  const appliedVariant = disabled ? "disabled" : variant;

  return (
    <button
      className={clsx(baseStyles, variants[appliedVariant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};