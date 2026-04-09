import React from "react";

export default function Logo({ className = "w-48 h-auto" }) {
  return (
    <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" className={className}>
      <text x="5" y="65" fontSize="64" fontWeight="800" fill="currentColor" style={{ fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '-2px' }}>ev</text>
      
      {/* The custom "O" */}
      <g transform="translate(100, 48)">
        {/* Left Crescent Cyan */}
        <path d="M 0,22 C -25,22 -25,-22 0,-22 C -35,-20 -35,20 0,22 Z" fill="#1fa1c9" />
        
        {/* Right Crescent Dark (inherits text color) */}
        <path d="M 0,22 C 25,22 25,-22 0,-22 C 35,-20 35,20 0,22 Z" fill="currentColor" />
        
        {/* Right Crescent Inner Orange */}
        <path d="M 0,17 C 18,17 18,-17 0,-17 C 25,-14 25,14 0,17 Z" fill="#f39200" />
      </g>

      <text x="135" y="65" fontSize="64" fontWeight="800" fill="currentColor" style={{ fontFamily: 'var(--font-outfit), sans-serif', letterSpacing: '-2px' }}>lve</text>
      
      <line x1="30" y1="88" x2="65" y2="88" stroke="currentColor" strokeWidth="1.5" />
      <text x="75" y="92" fontSize="15" fontWeight="600" fill="currentColor" style={{ fontFamily: 'var(--font-outfit), sans-serif', textTransform: 'uppercase', letterSpacing: '1px' }}>Energy Group</text>
      <line x1="205" y1="88" x2="240" y2="88" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
