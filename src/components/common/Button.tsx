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
      className={`w-full rounded-full bg-[var(--secondery-color)] px-6 py-3 text-[14px] font-bold text-[var(--black-dark)] transition-colors duration-200 hover:bg-cyan-500 ${className}`}
    >
      {children}
    </button>
  );
}
