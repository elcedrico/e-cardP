import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  gradient?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false, 
  onClick,
  gradient = false,
  glass = false
}) => {
  const baseClasses = 'rounded-2xl border transition-all duration-300';
  
  const styleClasses = glass 
    ? 'bg-white/10 backdrop-blur-lg border-white/20 shadow-xl'
    : gradient
    ? 'bg-gradient-to-br from-white to-gray-50 border-gray-200/50 shadow-xl'
    : 'bg-white border-gray-200 shadow-lg';
    
  const hoverClasses = hover 
    ? 'hover:shadow-2xl hover:scale-105 hover:-translate-y-1 cursor-pointer' 
    : '';
  
  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${styleClasses} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;