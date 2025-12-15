import React from 'react'

interface TitleProps {
  title: string;
}

// Title component to display section titles
const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <p className='text-[24px] text-[#072635] font-extrabold'>{title}</p>
  );
};

export default Title;

