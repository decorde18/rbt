// components/common/FormCard.jsx
import React from "react";
import { Users, Clock } from "lucide-react";

const FormCard = ({
  title,
  description,
  icon: Icon,
  iconColor,
  clientCount,
  lastUsed,
  onClick,
  delay = "0s",
}) => {
  return (
    <div
      onClick={onClick}
      className='bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group animate-scale-in border border-gray-100'
      // onClick={onClick}
      style={{ animationDelay: delay }}
    >
      {/* Header with Icon */}
      <div className='flex items-start gap-4 mb-4'>
        <div
          className='w-14 h-14 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300'
          style={{
            backgroundColor: `${iconColor}1a`,
            color: iconColor,
          }}
        >
          <Icon size={28} />
        </div>

        <div className='flex-1 min-w-0'>
          <h3 className='text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors'>
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className='text-sm text-gray-600 mb-4 line-clamp-2'>{description}</p>

      {/* Footer Info */}
      <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
        <div className='flex items-center gap-1 text-sm text-gray-500'>
          <Users size={16} />
          <span>{clientCount} clients</span>
        </div>

        <div className='flex items-center gap-1 text-sm text-gray-500'>
          <Clock size={16} />
          <span>{lastUsed}</span>
        </div>
      </div>
    </div>
  );
};
export default FormCard;
