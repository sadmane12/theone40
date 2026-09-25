import React, { useState } from 'react';

interface MyscoOfficialLogoProps {
  className?: string;
  markClass?: string;
  showWordmark?: boolean;
}

/**
 * Mysco Sports London brand lockup.
 * Primary artwork is the brand's real logo served from myscosports.co.uk.
 * It is rendered in a `object-contain` box so it never gets stretched,
 * squashed or cropped. Should the remote asset ever fail, a matching
 * vector crest takes over instantly — the layout never shifts.
 */
const REAL_LOGO_URL = 'https://myscosports.co.uk/wp-content/uploads/2019/03/msyco-sade-logo.png';

export const MyscoOfficialLogo: React.FC<MyscoOfficialLogoProps> = ({
  className = '',
  markClass = 'h-14',
  showWordmark = true,
}) => {
  const [ok, setOk] = useState(true);

  const crest = ok ? (
    <img
      src={REAL_LOGO_URL}
      alt="Mysco Sports London — official logo"
      className={`${markClass} w-auto object-contain`}
      style={{ objectPosition: 'center' }}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setOk(false)}
    />
  ) : (
    <svg viewBox="0 0 100 108" className={`${markClass} w-auto overflow-visible`} aria-label="Mysco Sports crest">
      <MyscoCrest />
    </svg>
  );

  if (!showWordmark) {
    return <span className={`inline-flex shrink-0 items-center ${className}`}>{crest}</span>;
  }

  return (
    <span className={`inline-flex shrink-0 items-center gap-3.5 overflow-visible ${className}`}>
      <span className="flex shrink-0 items-center justify-center overflow-visible">{crest}</span>

      <span className="hidden flex-col justify-center border-l border-gold/30 pl-3.5 leading-none sm:flex">
        <span className="font-display text-lg font-bold tracking-[0.2em] text-cream md:text-xl">
          MYSCO <span className="font-body font-medium tracking-[0.28em] text-gold-bright">SPORTS</span>
        </span>
        <span className="mt-1.5 flex items-baseline gap-2 whitespace-nowrap">
          <span className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">London</span>
          <span className="font-editorial text-[11px] italic text-fog/80">— From Passion to Profession</span>
        </span>
      </span>
    </span>
  );
};

/**
 * Detailed heraldic crest: laurel-flanked shield, interlocking "MS" monogram,
 * a central football seam motif and a five-point star crown — designed to
 * read as an authentic, hand-crafted elite sports-agency emblem.
 */
const MyscoCrest: React.FC = () => (
  <g>
    <defs>
      <linearGradient id="crest-gold-a" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbeec4" />
        <stop offset="35%" stopColor="#e6c878" />
        <stop offset="65%" stopColor="#c9a84c" />
        <stop offset="100%" stopColor="#8a7030" />
      </linearGradient>
      <linearGradient id="crest-gold-b" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8a7030" />
        <stop offset="100%" stopColor="#f3dd9c" />
      </linearGradient>
      <radialGradient id="crest-shield-fill" cx="50%" cy="35%" r="75%">
        <stop offset="0%" stopColor="#181a22" />
        <stop offset="100%" stopColor="#0a0a0e" />
      </radialGradient>
    </defs>

    {/* laurel branches */}
    <g stroke="url(#crest-gold-b)" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.9">
      <path d="M14 46C6 58 4 74 10 92C15 106 24 116 34 121" />
      <path d="M14 52L6 52M13 60L4 61M13 68L3 70M14 76L4 79M16 84L7 88M20 92L12 97M25 99L18 105" />
      <path d="M106 46C114 58 116 74 110 92C105 106 96 116 86 121" />
      <path d="M106 52L114 52M107 60L116 61M107 68L117 70M106 76L116 79M104 84L113 88M100 92L108 97M95 99L102 105" />
    </g>

    {/* five-point star crown above shield */}
    <path
      d="M60 2L64.2 13.6L76.5 13.9L66.7 21.4L70.2 33.1L60 26L49.8 33.1L53.3 21.4L43.5 13.9L55.8 13.6Z"
      fill="url(#crest-gold-a)"
    />

    {/* shield outline */}
    <path
      d="M60 20L100 34V64C100 90 82 108 60 116C38 108 20 90 20 64V34L60 20Z"
      fill="url(#crest-shield-fill)"
      stroke="url(#crest-gold-a)"
      strokeWidth="2.6"
    />
    <path
      d="M60 27L92 38.5V64C92 85.5 77 100.5 60 107.5C43 100.5 28 85.5 28 64V38.5L60 27Z"
      fill="none"
      stroke="url(#crest-gold-b)"
      strokeWidth="0.8"
      strokeOpacity="0.55"
    />

    {/* interlocking M/S monogram with football seam accent */}
    <path
      d="M38 84V49L50 68L60 55L70 68L82 49V84"
      fill="none"
      stroke="url(#crest-gold-a)"
      strokeWidth="5.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polygon points="60,58 65.5,65.5 60,73 54.5,65.5" fill="url(#crest-gold-a)" />
    <path
      d="M48 40C51 37 57 36 61 38.5"
      stroke="url(#crest-gold-b)"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
      opacity="0.85"
    />
    <circle cx="60" cy="42" r="3.6" fill="url(#crest-gold-a)" />

    {/* base ribbon */}
    <path d="M40 110L60 121L80 110" fill="none" stroke="url(#crest-gold-b)" strokeWidth="1.4" opacity="0.8" />
  </g>
);
