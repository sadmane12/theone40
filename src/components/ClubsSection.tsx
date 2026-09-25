import React from 'react';
import { REAL_CLUBS_DATA } from '../data/realClubsData';
import { RealClubCard } from './RealClubCard';
import { ArrowUpRight, Handshake } from 'lucide-react';

export const ClubsSection: React.FC = () => {
  return (
    <section
      id="clubs"
      className="relative overflow-hidden border-y border-white/[0.06] bg-void py-24 md:py-32"
    >
      {/* Stadium night backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/clubs-bg.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-30 [animation:slowPan_46s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,6,8,0.97)_0%,rgba(6,6,8,0.86)_35%,rgba(6,6,8,0.82)_65%,rgba(6,6,8,0.97)_100%)]" />
      </div>

      {/* ambient layering */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.4] [background:radial-gradient(760px_380px_at_12%_0%,rgba(201,168,76,0.12),transparent_70%),radial-gradient(680px_340px_at_88%_100%,rgba(201,168,76,0.08),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.028)_0px,rgba(255,255,255,0.028)_1px,transparent_1px,transparent_96px)]" />

      <div className="relative z-10 mx-auto max-w-[86rem] px-6 md:px-10">
        <div className="mb-14 flex flex-col gap-8 border-b border-white/[0.08] pb-10 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.42em] text-gold">
              Trusted Club Network & Historical Engagements
            </p>
            <h2 className="font-display text-[2.3rem] leading-[0.95] tracking-[-0.03em] text-cream md:text-6xl lg:text-[4.6rem]">
              Clubs We Have{' '}
              <span className="font-editorial text-gold-bright italic font-light">Worked With</span>
            </h2>
          </div>

          <div className="max-w-xl lg:pb-2">
            <p className="font-editorial text-[1.05rem] leading-[1.7] font-light text-fog/80 md:text-lg">
              Some of the clubs we have worked with include{' '}
              <span className="text-cream">Beşiktaş J.K.</span>,{' '}
              <span className="text-cream">Galatasaray A.Ş.</span> and{' '}
              <span className="text-cream">Fenerbahçe S.K.</span> of the Turkish Süper Lig,{' '}
              <span className="text-cream">RC Deportivo La Coruña</span> and{' '}
              <span className="text-cream">SD Eibar</span> of Spanish La Liga,{' '}
              <span className="text-cream">1. FSV Mainz 05</span> of the German Bundesliga,{' '}
              <span className="text-cream">Arsenal, Tottenham Hotspur</span> and{' '}
              <span className="text-cream">Swansea City</span> of the English Premier League, plus{' '}
              <span className="text-cream">Hull City</span>,{' '}
              <span className="text-cream">Wigan Athletic</span>,{' '}
              <span className="text-cream">Huddersfield Town</span>,{' '}
              <span className="text-cream">Rotherham United</span> and{' '}
              <span className="text-cream">Hamilton Academical</span> — alongside national federation
              partners including the <span className="text-cream">Turkish Football Federation</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
          {REAL_CLUBS_DATA.map((club, i) => (
            <div
              key={club.id}
              style={{ animationDelay: `${(i % 5) * 70}ms` }}
              className="[animation:rise_.7s_cubic-bezier(.22,1,.36,1)_both]"
            >
              <RealClubCard club={club} />
            </div>
          ))}
        </div>

        {/* partner strip */}
        <div className="mt-12 flex flex-col gap-5 border border-gold/25 bg-gradient-to-r from-charcoal via-ink to-charcoal p-6 md:flex-row md:items-center md:justify-between md:p-7">
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/30 bg-gold/[0.08] text-gold">
              <Handshake size={18} strokeWidth={1.5} />
            </span>
            <div>
              <p className="font-display text-lg text-cream md:text-xl">
                International Fixture & Camp Delivery
              </p>
              <p className="mt-1 max-w-2xl font-editorial text-[15px] leading-relaxed font-light text-fog/70 italic">
                Camps, friendly games, UEFA competition delegations and federation liaison — every
                engagement managed with absolute discretion and precision.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 border border-gold/40 px-7 py-3.5 font-body text-[11px] uppercase tracking-[0.25em] text-gold transition-all duration-300 hover:bg-gold hover:text-void"
          >
            Enquire for Your Club
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
