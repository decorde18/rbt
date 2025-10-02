// components/common/StatsCard.jsx
import React from "react";

const StatsCard = ({
  icon: Icon,
  iconColor,
  value,
  label,
  trend,
  delay = "0s",
}) => {
  const TrendIcon = trend?.icon;

  return (
    <div
      className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in'
      style={{ animationDelay: delay }}
    >
      <div className='flex items-center justify-between mb-4'>
        {/* Icon Container */}
        <div
          className='w-12 h-12 rounded-xl flex items-center justify-center'
          style={{
            backgroundColor: `${iconColor}1a`, // 10% opacity
            color: iconColor,
          }}
        >
          <Icon size={24} />
        </div>

        {/* Trend Icon */}
        {TrendIcon && <TrendIcon size={20} style={{ color: trend.color }} />}
      </div>

      {/* Value */}
      <div className='text-3xl font-bold text-gray-900 mb-1'>{value}</div>

      {/* Label */}
      <div className='text-sm text-gray-600'>{label}</div>
    </div>
  );
};

export default StatsCard;
