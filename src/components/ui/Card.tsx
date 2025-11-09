import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  gradient = false
}) => {
  const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300';
  const hoverStyles = hover ? 'hover:transform hover:scale-105' : '';
  const bgStyles = gradient 
    ? 'bg-gradient-to-br from-neutral-800 to-neutral-900' 
    : 'bg-neutral-800';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${bgStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;