import React from 'react';
import { RobustLogoImg } from './RealClubCard';

/**
 * 100% authentic official governing body badges.
 * Sources are the direct Wikimedia CDN and Wikipedia media caches for UEFA, FIFA and The FA.
 */

export const REAL_GOVERNING_BODIES = [
  {
    name: 'FIFA',
    role: 'Licensed Match Agent',
    badge: 'LICENCE ACTIVE',
    note: 'Governed under FIFA Football Agent Regulations (FFAR)',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/FIFA_logo_without_slogan.svg/960px-FIFA_logo_without_slogan.svg.png',
      'https://unavatar.io/fifa.com',
    ],
  },
  {
    name: 'UEFA',
    role: 'Match Operations & Logistics',
    badge: 'OPERATIONS COMPLIANT',
    note: 'Champions League & Europa League UK operations delegate',
    sources: [
      // Full official UEFA emblem (Union of European Football Associations)
      'https://thumb.wikimedia.org/wikipedia/en/thumb/9/9d/UEFA_full_logo.svg/500px-UEFA_full_logo.svg.png',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/UEFA_logo.svg/250px-UEFA_logo.svg.png',
      'https://unavatar.io/uefa.com',
    ],
  },
  {
    name: 'The FA',
    role: 'Registered Intermediary',
    badge: 'ENGLISH FA REGISTERED',
    note: 'The English Football Association intermediary desk in London',
    sources: [
      // Official Three Lions crest of The Football Association
      'https://thumb.wikimedia.org/wikipedia/en/thumb/d/d5/FA_crest_2009.svg/500px-FA_crest_2009.svg.png',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/The_FA_logo.svg/250px-The_FA_logo.svg.png',
      'https://unavatar.io/thefa.com',
    ],
  },
];

export const GoverningBodiesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {REAL_GOVERNING_BODIES.map((g) => (
        <div
          key={g.name}
          className="group relative overflow-hidden border border-white/[0.10] bg-charcoal transition-all duration-500 hover:border-gold/60 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(201,168,76,0.25)]"
        >
          <div className="flex items-baseline justify-between gap-3 px-5 pt-4">
            <span className="font-display text-2xl leading-none text-cream transition-colors group-hover:text-gold-bright md:text-[1.7rem]">
              {g.name}
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-gold font-bold">
              {g.badge}
            </span>
          </div>
          <p className="px-5 pt-1 text-[9px] font-body uppercase tracking-[0.2em] text-fog/60">
            {g.role}
          </p>

          {/* Dark plate — no white background, subtle gold halo on hover */}
          <div className="relative mt-4 flex h-[128px] items-center justify-center overflow-hidden border-t border-white/[0.10] bg-gradient-to-br from-stone via-charcoal to-ink px-6 py-4">
            <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.025)_0px,rgba(255,255,255,0.025)_1px,transparent_1px,transparent_8px)]" />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 [background:radial-gradient(200px_110px_at_50%_55%,rgba(201,168,76,0.18),transparent_70%)]" />
            <RobustLogoImg
              sources={g.sources}
              alt={`${g.name} Official Logo`}
              className="relative z-10 max-h-[94px] max-w-[180px] object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              fallback={
                <span className="relative z-10 font-display text-xl font-bold tracking-widest text-gold">
                  {g.name}
                </span>
              }
            />
            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
          </div>

          <div className="px-5 py-3 border-t border-white/[0.04]">
            <p className="font-editorial text-xs italic text-fog/65 leading-snug">
              {g.note}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
