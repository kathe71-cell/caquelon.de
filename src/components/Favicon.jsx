import React from 'react';

export default function Favicon() {
  return (
    <svg viewBox="0 0 32 32" className="w-8 h-8">
      {/* Background */}
      <circle cx="16" cy="16" r="15" fill="#8B2E2E" />
      
      {/* Simplified Caquelon */}
      <path
        d="M8 12 Q8 10 10 10 L22 10 Q24 10 24 12 L24 20 Q24 24 20 24 L12 24 Q8 24 8 20 Z"
        fill="#FEF3C7"
      />
      
      {/* Content */}
      <ellipse cx="16" cy="15" rx="6" ry="3" fill="#F59E0B" />
      
      {/* Fork */}
      <line x1="14" y1="6" x2="14" y2="15" stroke="#DC2626" strokeWidth="1.5" />
      <circle cx="14" cy="5" r="1.5" fill="#DC2626" />
    </svg>
  );
}