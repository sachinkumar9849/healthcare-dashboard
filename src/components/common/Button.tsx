


import React from "react";



 // Separate Button Component
interface ButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-[#01F0D0] text-[14px] hover:bg-cyan-500 text-[#072635] font-bold py-3 px-6 rounded-full transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}