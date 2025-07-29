"use client";

import React from "react";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  onClick,
  className,
}) => {
  const baseStyles =
    "px-8 py-3 font-normal transition-colors duration-300 ease-in-out cursor-pointer rounded-full"; 

  const primaryStyles = "bg-softOrange text-darkText hover:bg-lightYellow"; 
  const secondaryStyles =
    "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100";

  const appliedStyles = variant === "primary" ? primaryStyles : secondaryStyles;

  return (
    <button
      className={`${baseStyles} ${appliedStyles} ${className || ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
