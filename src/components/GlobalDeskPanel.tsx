import React, { useEffect, useState } from 'react';
import { Shield, Trophy, UserCheck, Landmark, Network, ArrowUpRight } from 'lucide-react';

/**
 * Hero "Service Directory" — an elite numbered register of the five disciplines,
 * styled like a private members' ledger with a live London clock.
 */
const DIRECTORY = [
  {
    no: '01',
    icon: Shield,
    label: 'Team Management',
    meta: 'Exclusive club & federation representation',
    href: '#services',
  },
  {
    no: '02',
    icon: Trophy,
    label: 'Training Camps',
    meta: 'Elite camps with hotel-group partnerships',
    href: '#camps',
  },
  {
    no: '03',
    icon: UserCheck,
    label: 'Player Representation',
    meta: 'FA-registered intermediary services',
    href: '#player-agency',
  },
  {
    no: '04',
    icon: Landmark,
    label: 'UEFA Operations',
    meta: 'Champions & Europa League match logistics',
    href: '#services',
  },
  {
    no: '05',
    icon: Network,
    label: 'Club Network',
    meta: 'Trusted across Europe & Türkiye',
    href: '#clubs',
  },
];

export const GlobalDeskPanel: React.FC = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/London',
        }).format(new Date()),
      );
    tick();
    const id = window.setInterval(tick, 20000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <aside className="relative w-full overflow-hidden border border-gold/30 bg-void/85 backdrop-blur-2xl shadow-[0_30px_90px_-40px_rgba(0,0,0,1)]">
      {/* subtle top sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright/70 to-transparent" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rotate-45 bg-gold/[0.05]" />

      {/* header */}
      <header className="relative flex items-center justify-between border-b border-gold/20 bg-gold/[0.03] px-6 py-4">
        <span className="font-display text-[13px] font-semibold uppercase tracking-[0.22em] text-cream">
          Service <span className="text-gold-bright">Directory</span>
        </span>
        <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-gold/80">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-bright [animation:pinPulse_2.6s_ease-out_infinite]" />
          {time} GMT
        </span>
      </header>

      {/* directory list */}
      <div>
        {DIRECTORY.map((d) => (
          <a
            key={d.no}
            href={d.href}
            className="group relative flex items-center gap-4 border-b border-white/[0.05] px-6 py-[15px] transition-colors duration-300 last:border-b-0 hover:bg-gold/[0.06]"
          >
            {/* large ghost number */}
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-display text-[2.6rem] leading-none text-white/[0.03] transition-colors duration-300 group-hover:text-gold/[0.09]">
              {d.no}
            </span>

            <span className="relative z-10 grid place-items-center">
              <span className="flex h-10 w-10 items-center justify-center border border-gold/25 bg-gold/[0.05] text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-void">
                <d.icon size={16} strokeWidth={1.6} />
              </span>
            </span>

            <span className="relative z-10 min-w-0 flex-1">
              <span className="flex items-baseline gap-2.5">
                <span className="font-mono text-[10px] tabular-nums text-gold/70">{d.no}</span>
                <span className="font-display text-[15.5px] leading-tight text-cream transition-colors group-hover:text-gold-bright">
                  {d.label}
                </span>
              </span>
              <span className="mt-0.5 block font-editorial text-[13px] italic leading-snug text-fog/55">
                {d.meta}
              </span>
            </span>

            <ArrowUpRight
              size={15}
              className="relative z-10 shrink-0 text-gold/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
            />

            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* footer cta */}
      <a
        href="#contact"
        className="group relative flex items-center justify-between gap-3 border-t border-gold/25 bg-gradient-to-r from-gold/[0.08] to-transparent px-6 py-4 transition-colors hover:from-gold/[0.14]"
      >
        <span className="font-body text-[10px] font-bold uppercase tracking-[0.24em] text-gold">
          Request Confidential Consultation
        </span>
        <span className="flex h-7 w-7 items-center justify-center border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-void">
          <ArrowUpRight size={14} />
        </span>
      </a>
    </aside>
  );
};
