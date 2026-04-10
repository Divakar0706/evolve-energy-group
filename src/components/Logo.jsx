import React from "react";

export default function Logo({ className = "w-48 h-auto" }) {
  return (
    <svg viewBox="0 0 280 90" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* "ev" */}
      <text x="0" y="55" fontSize="62" fontWeight="800" fill="currentColor" style={{ fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '-1.5px' }}>ev</text>
      
      {/* The custom "O" */}
      <g transform="translate(73, 2)">
        {/* Left Crescent (White/currentColor) */}
        <path d="M 35 0 A 32 32 0 0 0 35 64 A 20 32 0 0 1 35 0 Z" fill="currentColor" />
        
        {/* Right Crescent (Blue) */}
        <path d="M 35 0 A 32 32 0 0 1 35 64 A 20 32 0 0 0 35 0 Z" fill="#1fa1c9" />
        
        {/* Right Crescent Inner Orange */}
        <path d="M 35 6 A 25 26 0 0 1 35 58 A 15 26 0 0 0 35 6 Z" fill="#f39200" />
      </g>

      {/* "lve" */}
      <text x="145" y="55" fontSize="62" fontWeight="800" fill="currentColor" style={{ fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '-1.5px' }}>lve</text>
      
      {/* Subtext */}
      <g transform="translate(130, 80)">
        <line x1="-80" y1="-5" x2="-55" y2="-5" stroke="currentColor" strokeWidth="1.5" />
        <text x="0" y="0" fontSize="16" fontWeight="500" fill="currentColor" textAnchor="middle" style={{ fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '0.5px' }}>Energy Group</text>
        <line x1="55" y1="-5" x2="80" y2="-5" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
