import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const variants = {
    primary: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
    secondary: 'bg-primary-600/20 text-primary-400 border-primary-600/30',
    success: 'bg-green-500/20 text-green-300 border-green-500/30',
    info: 'bg-neutral-500/20 text-neutral-300 border-neutral-500/30'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm'
  };

  return (
    <span
      className={`inline-block rounded-full font-medium border ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;