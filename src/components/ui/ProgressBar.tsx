import React from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
  showPercentage?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  showPercentage = true,
  className = ''
}) => {
  return (
    <div className={className}>
      <div className="flex justify-between mb-2">
        <span className="text-neutral-300 text-sm font-medium">{label}</span>
        {showPercentage && (
          <span className="text-primary-400 text-sm font-semibold">
            {percentage}%
          </span>
        )}
      </div>
      <div className="h-2 bg-neutral-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;