import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
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
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-800 focus:ring-blue-500 hover:cursor-pointer",
    outline:
      "border border-blue-600 text-gray-200 hover:bg-black hover:text-blue-400   focus:ring-blue-500 hover:cursor-pointer",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};