import React from 'react';

export function CupcakeLogo({ size = 42, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Cherry / Heart on top */}
      <circle cx="50" cy="18" r="10" fill="#FF477E" />
      <path d="M50 12 C 50 5, 58 6, 62 8" stroke="#5D4037" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="47" cy="15" r="2.5" fill="#FFFFFF" opacity="0.8" />
      
      {/* Cream Swirl Top */}
      <path
        d="M30 45 C24 45 20 40 22 33 C24 25 34 24 40 27 C43 20 57 20 60 27 C66 24 76 25 78 33 C80 40 76 45 70 45 Z"
        fill="#FFE3EC"
      />
      {/* Middle frosting layer */}
      <path
        d="M20 54 C15 54 14 47 19 42 C24 37 32 40 37 40 C43 36 57 36 63 40 C68 40 76 37 81 42 C86 47 85 54 80 54 Z"
        fill="#FFB7C5"
      />
      
      {/* Little sprinkles on frosting */}
      <circle cx="34" cy="35" r="1.5" fill="#FF477E" />
      <circle cx="65" cy="34" r="1.5" fill="#FFAA5A" />
      <circle cx="48" cy="30" r="1.5" fill="#7C3AED" />
      <circle cx="28" cy="48" r="1.5" fill="#FBBF24" />
      <circle cx="72" cy="47" r="1.5" fill="#34D399" />
      <circle cx="50" cy="45" r="1.5" fill="#FF477E" />

      {/* Cupcake Wrapper Base */}
      <path
        d="M24 54 L32 88 C33 92 37 95 41 95 L59 95 C63 95 67 92 68 88 L76 54 Z"
        fill="#FFF0F5"
        stroke="#FFB6C1"
        strokeWidth="2.5"
      />
      {/* Wrapper ridges / pleats */}
      <path d="M33 54 L38 95" stroke="#FFA4B6" strokeWidth="2" strokeDasharray="1 1" opacity="0.7" />
      <path d="M44 54 L46 95" stroke="#FFA4B6" strokeWidth="2" strokeDasharray="1 1" opacity="0.7" />
      <path d="M56 54 L54 95" stroke="#FFA4B6" strokeWidth="2" strokeDasharray="1 1" opacity="0.7" />
      <path d="M67 54 L62 95" stroke="#FFA4B6" strokeWidth="2" strokeDasharray="1 1" opacity="0.7" />

      {/* Cute eyes & blush on the wrapper */}
      <ellipse cx="44" cy="72" rx="2.5" ry="3.5" fill="#5D4037" />
      <ellipse cx="56" cy="72" rx="2.5" ry="3.5" fill="#5D4037" />
      <circle cx="43" cy="70.5" r="1" fill="#FFFFFF" />
      <circle cx="55" cy="70.5" r="1" fill="#FFFFFF" />
      {/* Cheerful mouth */}
      <path d="M47 77 Q50 81 53 77" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Rosy cheeks */}
      <circle cx="39" cy="74" r="3" fill="#FF8DA1" opacity="0.5" />
      <circle cx="61" cy="74" r="3" fill="#FF8DA1" opacity="0.5" />
    </svg>
  );
}

export function StarIcon({ filled = true, size = 18, color = '#FFB800' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function CartIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
}

export function HeartIcon({ size = 18, filled = false, color = '#FF6B8B' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
}

export function TrashIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  );
}

export function CloseIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export function SearchIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

export function SparklesIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
      <path d="M5 3v4"></path>
      <path d="M19 17v4"></path>
      <path d="M3 5h4"></path>
      <path d="M17 19h4"></path>
    </svg>
  );
}

export function CheckCircleIcon({ size = 24, color = '#10B981' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

