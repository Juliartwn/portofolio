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
    primary: 'bg-primary-500/30 text-primary-200 border-primary-400/50 font-semibold',
    secondary: 'bg-primary-600/30 text-primary-300 border-primary-500/50 font-semibold',
    success: 'bg-green-500/30 text-green-200 border-green-400/50 font-semibold',
    info: 'bg-neutral-600/40 text-neutral-200 border-neutral-400/50 font-semibold'
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3.5 py-1.5 text-sm'
  };

  return (
    <span
      className={`inline-block rounded-full border ${variants[variant]} ${sizes[size]} ${className} backdrop-blur-sm`}
    >
      {children}
    </span>
  );
};

export default Badge;