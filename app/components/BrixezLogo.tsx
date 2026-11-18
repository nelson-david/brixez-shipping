import React from "react";

interface BrixezLogoProps {
  size?: number;
  className?: string;
  variant?: "badge" | "glyph";
  inverted?: boolean;
}

export default function BrixezLogo({
  size = 28,
  className = "",
  variant = "badge",
  inverted = false,
}: BrixezLogoProps) {
  if (variant === "glyph") {
    const primaryColor = inverted ? "#ffffff" : "#071120";
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`brixez-logo-svg ${className}`}
        aria-hidden="true"
      >
        {/* Structural Left Column (Customs & Bonded Storage) */}
        <rect x="3" y="3" width="4.5" height="22" fill={primaryColor} />

        {/* Upper Aero Wing (Flight Shipping) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 3H18.5L22.5 8L18.5 13H9.5V3ZM13 5.5V10.5H17.2L19.5 8L17.2 5.5H13Z"
          fill={primaryColor}
        />

        {/* Lower Forward-Thrust Vector (Brixez Royal Blue) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 14.5H20.5L25 19.5L20.5 25H9.5V14.5ZM13 17V22.5H18.8L21.8 19.5L18.8 17H13Z"
          fill="#1d63ed"
        />
      </svg>
    );
  }

  // Architectural Badge (Zero border-radius)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`brixez-logo-badge ${className}`}
      aria-hidden="true"
    >
      {/* Sharp Architectural Ground / Container */}
      <rect
        width="28"
        height="28"
        fill={inverted ? "#0e1828" : "#071120"}
        stroke={inverted ? "rgba(255, 255, 255, 0.12)" : "transparent"}
        strokeWidth="1"
      />

      {/* Structural Left Column (Bonded Warehousing) */}
      <rect x="5.5" y="5.5" width="3.5" height="17" fill="#ffffff" />

      {/* Upper Aero Wing (Heathrow Flight Freight) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 5.5H17.5L20.8 9.5L17.5 13.5H10.5V5.5ZM13.2 7.5V11.5H16.4L18.2 9.5L16.4 7.5H13.2Z"
        fill="#ffffff"
      />

      {/* Lower Forward Kinetic Wing (Brixez Signature Blue) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 14.5H19.2L22.8 18.5L19.2 22.5H10.5V14.5ZM13.2 16.5V20.5H17.8L19.8 18.5L17.8 16.5H13.2Z"
        fill="#1d63ed"
      />
    </svg>
  );
}
