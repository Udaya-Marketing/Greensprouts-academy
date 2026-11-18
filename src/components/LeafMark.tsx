import React from "react";

interface LeafMarkProps {
  className?: string;
  size?: number;
}

export default function LeafMark({ className = "w-6 h-6", size }: LeafMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
    >
      {/* Left Leaf (Light Green #8BC53F) */}
      <path
        d="M50 82C48 68 32 58 24 44C16 30 22 14 36 12C50 10 56 26 54 44C52 58 50 72 50 82Z"
        fill="#8BC53F"
      />
      {/* Left Leaf Vein */}
      <path
        d="M34 22C38 34 46 50 50 78"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Right Leaf (Deep Leaf Green #00693E) */}
      <path
        d="M50 84C54 70 70 60 78 44C86 28 78 12 64 10C50 8 44 24 46 42C48 58 50 72 50 84Z"
        fill="#00693E"
      />
      {/* Right Leaf Vein */}
      <path
        d="M66 20C62 34 54 50 50 80"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}
