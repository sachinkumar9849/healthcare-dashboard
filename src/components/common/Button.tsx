import React from "react";

// Separate Button Component
interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-full bg-[#01F0D0] px-6 py-3 text-[14px] font-bold text-[#072635] transition-colors duration-200 hover:bg-cyan-500 ${className}`}
    >
      {children}
    </button>
  );
}
