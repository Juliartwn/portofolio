import React from 'react';

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  variant?: 'default' | 'glass' | 'gradient';
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  href,
  label,
  variant = 'default',
  className = ''
}) => {
  const variants = {
    default: 'bg-slate-800 hover:bg-slate-700',
    glass: 'bg-white/10 hover:bg-white/20 backdrop-blur-sm',
    gradient: 'bg-gradient-to-br from-purple-500 to-blue-500 hover:shadow-lg'
  };

  return (
    <a
      href={href}
      aria-label={label}
      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 inline-flex items-center justify-center ${variants[variant]} ${className}`}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;