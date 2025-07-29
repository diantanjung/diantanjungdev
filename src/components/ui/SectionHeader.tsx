import React from "react";
import Button from "./Button";

interface SectionHeaderProps {
  title: string;
  subtitle?: string; 
  text?: string;
  buttonText?: string;
  buttonVariant?: "primary" | "secondary";
  onButtonClick?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  text,
  buttonText,
  buttonVariant = "primary",
  onButtonClick,
}) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 px-4">
      {subtitle && (
        <p className="text-lg font-normal md:text-xl text-gray-700">{subtitle}</p>
      )}
      <h2 className="text-4xl md:text-6xl font-normal text-gray-900 leading-tight mb-4 font-manrope">
        {title}
      </h2>
      {text && <p className="text-base md:text-xl text-gray-700 mb-8">{text}</p>}
      {buttonText && (
        <Button
          variant={buttonVariant}
          text={buttonText}
          onClick={onButtonClick}
          className="mt-4"
        />
      )}
    </div>
  );
};

export default SectionHeader;
