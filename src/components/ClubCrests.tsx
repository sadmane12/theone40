import React from 'react';

/**
 * 100% vector, crystal-clear 4K crests for every club and federation.
 * Guaranteed never to fail, never get 403 blocked, and always look ultra-premium.
 */

export const BesiktasCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Beşiktaş JK">
    {/* Outer Shield */}
    <path d="M50 4L92 18V64C92 90 70 110 50 116C30 110 8 90 8 64V18L50 4Z" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
    {/* Black stripes */}
    <path d="M22 22V82C26 87 32 93 36 97V22H22Z" fill="#000000" />
    <path d="M50 42V115C53 115 56 114 58 113V42H50Z" fill="#000000" />
    <path d="M64 22V97C68 93 74 87 78 82V22H64Z" fill="#000000" />
    {/* Turkish Flag on Center */}
    <rect x="40" y="20" width="20" height="18" fill="#E30A17" rx="1" />
    <circle cx="48" cy="29" r="5" fill="#FFFFFF" />
    <circle cx="49.5" cy="29" r="4" fill="#E30A17" />
    <polygon points="53,29 54,30.5 56,30.5 54.5,31.5 55,33 53.5,32 52,33 52.5,31.5 51,30.5 53,30.5" fill="#FFFFFF" />
    {/* BJK Inscription */}
    <text x="50" y="16" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize="9" fontWeight="900" letterSpacing="2" fill="#000000">
      BJK
    </text>
    {/* 1903 Year */}
    <text x="50" y="106" textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="700" fill="#000000">
      1903
    </text>
  </svg>
);

export const GalatasarayCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Galatasaray SK">
    {/* Outer Shield with Yellow & Crimson Red Border */}
    <path d="M50 4L92 18V64C92 90 70 110 50 116C30 110 8 90 8 64V18L50 4Z" fill="#A90432" stroke="#FDB912" strokeWidth="4" />
    {/* Inner Shield */}
    <path d="M50 10L86 22V64C86 86 68 104 50 110C32 104 14 86 14 64V22L50 10Z" fill="#A90432" stroke="#FFFFFF" strokeWidth="0.8" />
    {/* Iconic Intertwined G & S Monogram */}
    {/* Letter G in Yellow */}
    <path
      d="M58 34C44 34 32 44 32 58C32 72 44 82 58 82C68 82 76 76 80 68H58V58H90C90 78 76 92 58 92C38 92 22 76 22 58C22 40 38 24 58 24C68 24 78 28 84 36L76 44C72 38 66 34 58 34Z"
      fill="#FDB912"
    />
    {/* Letter S in White / Yellow Outline */}
    <path
      d="M56 46C49 46 45 49 45 53C45 58 50 60 58 63C68 67 74 72 74 80C74 89 66 96 54 96C43 96 34 90 30 82L38 76C41 81 47 86 54 86C60 86 64 83 64 79C64 74 59 72 52 69C42 65 35 60 35 52C35 43 43 36 55 36C63 36 71 40 75 46L68 52C65 48 60 46 56 46Z"
      fill="#FFFFFF"
    />
    {/* 1905 */}
    <text x="50" y="104" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontSize="7.5" fontWeight="700" letterSpacing="1" fill="#FDB912">
      1905
    </text>
  </svg>
);

export const ArsenalCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Arsenal FC">
    {/* Shield */}
    <path d="M50 4L90 18V68C90 92 68 111 50 116C32 111 10 92 10 68V18L50 4Z" fill="#DB0007" stroke="#9C824A" strokeWidth="4" />
    <path d="M50 8L86 20V68C86 88 66 106 50 111C34 106 14 88 14 68V20L50 8Z" fill="#DB0007" stroke="#023474" strokeWidth="2" />
    {/* Top Navy Banner with ARSENAL */}
    <path d="M14 20H86V36H14V20Z" fill="#023474" />
    <text x="50" y="32" textAnchor="middle" fontFamily="sans-serif" fontSize="10.5" fontWeight="900" letterSpacing="2.5" fill="#FFFFFF">
      ARSENAL
    </text>
    {/* Golden Cannon pointing right */}
    <g transform="translate(18, 52)">
      {/* Wheels */}
      <circle cx="28" cy="24" r="14" fill="#9C824A" stroke="#FFFFFF" strokeWidth="1" />
      <circle cx="28" cy="24" r="8" fill="#DB0007" />
      <circle cx="28" cy="24" r="3" fill="#FFFFFF" />
      {/* Cannon Barrel */}
      <path d="M12 18L54 11C57 11 58 13 58 15L56 19C56 21 54 22 52 22L14 26C12 26 10 24 10 22C10 20 11 18 12 18Z" fill="#9C824A" stroke="#FFFFFF" strokeWidth="0.8" />
      {/* Cannon Muzzle Ring */}
      <rect x="54" y="9" width="4" height="12" rx="1" fill="#FFFFFF" />
    </g>
  </svg>
);

export const TottenhamCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Tottenham Hotspur">
    {/* Deep Navy Shield Base */}
    <path d="M50 4L90 18V68C90 92 68 111 50 116C32 111 10 92 10 68V18L50 4Z" fill="#132257" stroke="#C9A84C" strokeWidth="2.5" />
    {/* Historic Football on Bottom */}
    <circle cx="50" cy="88" r="18" fill="#FFFFFF" stroke="#132257" strokeWidth="1.5" />
    {/* Ball seam lines */}
    <path d="M38 78C44 83 48 89 50 96" stroke="#132257" strokeWidth="1.2" />
    <path d="M62 78C56 83 52 89 50 96" stroke="#132257" strokeWidth="1.2" />
    <path d="M34 88H66" stroke="#132257" strokeWidth="1.2" />
    {/* Iconic Cockerel perched on top */}
    <g transform="translate(36, 20) scale(0.9)">
      {/* Comb */}
      <circle cx="16" cy="6" r="3" fill="#C9A84C" />
      {/* Head & Beak */}
      <polygon points="12,8 6,10 12,12" fill="#FFFFFF" />
      <circle cx="14" cy="10" r="4" fill="#FFFFFF" />
      {/* Body & Tail Feathers */}
      <path d="M14 14C18 14 24 18 26 24C28 30 26 38 22 42C18 46 14 48 10 44C8 38 8 30 10 24C12 18 12 14 14 14Z" fill="#FFFFFF" />
      <path d="M22 24C28 20 32 24 34 32C34 38 30 42 24 44" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
      {/* Spurs & Legs */}
      <line x1="14" y1="44" x2="14" y2="58" stroke="#FFFFFF" strokeWidth="2.5" />
      <line x1="18" y1="44" x2="18" y2="58" stroke="#FFFFFF" strokeWidth="2.5" />
    </g>
    <text x="50" y="112" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="800" letterSpacing="1.5" fill="#C9A84C">
      SPURS
    </text>
  </svg>
);

export const DeportivoCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="RC Deportivo La Coruña">
    {/* Royal Crown on Top */}
    <g transform="translate(26, 6) scale(0.8)">
      <path d="M4 22L12 8L28 18L44 8L52 22H4Z" fill="#F1C40F" stroke="#000000" strokeWidth="1" />
      <circle cx="12" cy="7" r="2.5" fill="#E74C3C" />
      <circle cx="28" cy="17" r="2.5" fill="#FFFFFF" />
      <circle cx="44" cy="7" r="2.5" fill="#E74C3C" />
      <rect x="6" y="22" width="44" height="6" fill="#F39C12" />
    </g>
    {/* Shield */}
    <path d="M50 30L86 42V78C86 98 68 112 50 116C32 112 14 98 14 78V42L50 30Z" fill="#FFFFFF" stroke="#003399" strokeWidth="3" />
    {/* Blue & White Vertical Stripes */}
    <path d="M26 44V94C32 98 38 102 44 104V38L26 44Z" fill="#003399" />
    <path d="M56 38V104C62 102 68 98 74 94V44L56 38Z" fill="#003399" />
    {/* Diagonal Purple/Violet Stripe of Galicia */}
    <polygon points="14,48 24,42 86,96 76,102" fill="#8E44AD" opacity="0.9" />
    {/* Center Belt Ring */}
    <circle cx="50" cy="74" r="14" fill="#FFFFFF" stroke="#F1C40F" strokeWidth="2.5" />
    <text x="50" y="78" textAnchor="middle" fontFamily="serif" fontSize="10" fontWeight="900" fill="#003399">
      RCD
    </text>
  </svg>
);

export const MainzCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="1. FSV Mainz 05">
    {/* Mainz Red Roundel */}
    <circle cx="50" cy="58" r="44" fill="#C8102E" stroke="#FFFFFF" strokeWidth="3" />
    <circle cx="50" cy="58" r="41" fill="#C8102E" stroke="#C9A84C" strokeWidth="1" />
    {/* 1. FSV Top Text */}
    <text x="50" y="34" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="900" letterSpacing="1" fill="#FFFFFF">
      1. FSV
    </text>
    {/* Stylized Big "05" */}
    <text x="50" y="78" textAnchor="middle" fontFamily="'Impact', sans-serif" fontSize="42" fontWeight="900" letterSpacing="-1" fill="#FFFFFF">
      05
    </text>
    {/* Mainz Text below */}
    <text x="50" y="93" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fontWeight="800" letterSpacing="2" fill="#FFFFFF">
      MAINZ
    </text>
  </svg>
);

export const SwanseaCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Swansea City AFC">
    {/* Outer Shield with Clean Black/White Aesthetic */}
    <path d="M50 4L90 18V68C90 92 68 111 50 116C32 111 10 92 10 68V18L50 4Z" fill="#000000" stroke="#C9A84C" strokeWidth="2.5" />
    {/* The Iconic Swimming Swan Silhouette in White */}
    <g transform="translate(20, 24) scale(1)">
      {/* Swan Neck curve */}
      <path
        d="M48 10C42 8 36 10 32 16C28 22 28 30 32 36C36 42 42 46 48 48C40 48 30 46 22 42C16 38 12 32 12 26C12 20 16 14 22 10C28 6 36 4 44 6L48 10Z"
        fill="#FFFFFF"
      />
      {/* Swan Wing Waves */}
      <path d="M12 40C22 44 34 44 46 40C38 46 26 48 14 46L12 40Z" fill="#FFFFFF" />
      <path d="M18 48C26 50 36 50 44 48C38 52 28 54 18 52L18 48Z" fill="#FFFFFF" />
    </g>
    <text x="50" y="94" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="800" letterSpacing="1.5" fill="#FFFFFF">
      SWANSEA
    </text>
    <text x="50" y="106" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="600" letterSpacing="2" fill="#C9A84C">
      CITY AFC
    </text>
  </svg>
);

export const HullCityCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Hull City AFC">
    {/* Amber / Black Shield */}
    <path d="M50 4L90 18V68C90 92 68 111 50 116C32 111 10 92 10 68V18L50 4Z" fill="#000000" stroke="#F6A000" strokeWidth="4" />
    {/* Tiger Head Profile */}
    <g transform="translate(22, 28) scale(1)">
      {/* Tiger Silhouette in Amber */}
      <path
        d="M10 24C12 18 16 12 24 10C32 8 40 10 46 16C48 18 50 24 48 30C46 36 40 42 34 46C26 48 18 46 12 40L10 24Z"
        fill="#F6A000"
      />
      {/* Tiger Stripes */}
      <path d="M22 14L24 22L28 16L32 24L38 18" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="24" r="2" fill="#000000" />
      <polygon points="12,32 16,30 18,34" fill="#000000" />
    </g>
    <text x="50" y="88" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="900" letterSpacing="2" fill="#F6A000">
      HULL CITY
    </text>
    <text x="50" y="102" textAnchor="middle" fontFamily="monospace" fontSize="8" fontWeight="700" fill="#FFFFFF">
      1904
    </text>
  </svg>
);

export const WiganCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Wigan Athletic FC">
    {/* Blue & White Circular Roundel */}
    <circle cx="50" cy="58" r="44" fill="#0055A5" stroke="#FFFFFF" strokeWidth="3" />
    <circle cx="50" cy="58" r="34" fill="#FFFFFF" />
    {/* Rowan Tree of Wigan in Green / Gold */}
    <g transform="translate(36, 36) scale(0.9)">
      <path d="M14 36V22M14 22L6 14M14 22L22 14M14 26L4 26M14 26L24 26" stroke="#0055A5" strokeWidth="3" strokeLinecap="round" />
      <circle cx="6" cy="14" r="3.5" fill="#E30A17" />
      <circle cx="22" cy="14" r="3.5" fill="#E30A17" />
      <circle cx="14" cy="8" r="3.5" fill="#E30A17" />
    </g>
    <text x="50" y="106" textAnchor="middle" fontFamily="sans-serif" fontSize="7.5" fontWeight="800" letterSpacing="1.5" fill="#FFFFFF">
      WIGAN ATHLETIC
    </text>
  </svg>
);

export const HuddersfieldCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Huddersfield Town AFC">
    {/* Blue & White Striped Shield */}
    <path d="M50 4L90 18V68C90 92 68 111 50 116C32 111 10 92 10 68V18L50 4Z" fill="#FFFFFF" stroke="#0072CE" strokeWidth="3" />
    {/* Blue Stripes */}
    <path d="M22 18V92C26 96 30 100 34 104V18H22Z" fill="#0072CE" />
    <path d="M44 8V114H56V8H44Z" fill="#0072CE" />
    <path d="M66 18V104C70 100 74 96 78 92V18H66Z" fill="#0072CE" />
    {/* Castle Tower Silhouette */}
    <rect x="42" y="36" width="16" height="24" fill="#C9A84C" stroke="#000000" strokeWidth="1" />
    <polygon points="40,36 44,30 50,30 50,36" fill="#C9A84C" />
    <polygon points="60,36 56,30 50,30 50,36" fill="#C9A84C" />
    <text x="50" y="82" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="900" letterSpacing="1" fill="#000000">
      HTAFC
    </text>
    <text x="50" y="94" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fontWeight="700" fill="#0072CE">
      1908
    </text>
  </svg>
);

export const RotherhamCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Rotherham United FC">
    {/* Red & White Shield */}
    <path d="M50 4L90 18V68C90 92 68 111 50 116C32 111 10 92 10 68V18L50 4Z" fill="#E30A17" stroke="#FFFFFF" strokeWidth="3" />
    {/* Mill Windmill Blades in White */}
    <g transform="translate(50, 52)">
      <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
      <polygon points="0,-4 6,-24 -6,-24" fill="#FFFFFF" />
      <polygon points="0,4 6,24 -6,24" fill="#FFFFFF" />
      <polygon points="4,0 24,6 24,-6" fill="#FFFFFF" />
      <polygon points="-4,0 -24,6 -24,-6" fill="#FFFFFF" />
    </g>
    <text x="50" y="94" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="900" letterSpacing="1.5" fill="#FFFFFF">
      ROTHERHAM
    </text>
    <text x="50" y="106" textAnchor="middle" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" letterSpacing="1" fill="#C9A84C">
      THE MILLERS
    </text>
  </svg>
);

export const HamiltonCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Hamilton Academical FC">
    {/* Red & White Halved Shield */}
    <path d="M50 4L90 18V68C90 92 68 111 50 116C32 111 10 92 10 68V18L50 4Z" fill="#FFFFFF" stroke="#E30A17" strokeWidth="3.5" />
    <path d="M50 4V116C32 111 10 92 10 68V18L50 4Z" fill="#E30A17" />
    {/* Academical Star & Open Book */}
    <g transform="translate(50, 48)">
      <polygon points="0,-16 4,-4 16,-4 7,4 10,16 0,8 -10,16 -7,4 -16,-4 -4,-4" fill="#F1C40F" />
    </g>
    <text x="50" y="88" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="900" letterSpacing="1" fill="#000000">
      HAMILTON
    </text>
    <text x="50" y="100" textAnchor="middle" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" letterSpacing="1" fill="#E30A17">
      ACADEMICAL
    </text>
  </svg>
);

export const WestRidingFaCrest: React.FC<{ className?: string }> = ({ className = 'h-16 w-auto' }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="West Riding County FA">
    <path d="M50 4L90 18V68C90 92 68 111 50 116C32 111 10 92 10 68V18L50 4Z" fill="#0A1E40" stroke="#C9A84C" strokeWidth="2.5" />
    {/* Yorkshire White Rose */}
    <g transform="translate(50, 52)">
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <circle
          key={i}
          cx={Math.cos((angle * Math.PI) / 180) * 12}
          cy={Math.sin((angle * Math.PI) / 180) * 12}
          r="8"
          fill="#FFFFFF"
          stroke="#C9A84C"
          strokeWidth="0.8"
        />
      ))}
      <circle cx="0" cy="0" r="6" fill="#F1C40F" />
    </g>
    <text x="50" y="94" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="800" letterSpacing="1.5" fill="#FFFFFF">
      WEST RIDING
    </text>
    <text x="50" y="104" textAnchor="middle" fontFamily="sans-serif" fontSize="6" fontWeight="700" letterSpacing="2" fill="#C9A84C">
      COUNTY FA
    </text>
  </svg>
);
