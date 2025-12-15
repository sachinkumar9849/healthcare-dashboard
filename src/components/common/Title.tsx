import React from "react";

interface TitleProps {
  title: string;
}

// Title component to display section titles
const Title: React.FC<TitleProps> = ({ title }) => {
  return <p className="text-[24px] font-extrabold text-[#072635]">{title}</p>;
};

export default Title;
