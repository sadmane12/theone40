import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserCheck, Award, TrendingUp, FileText,
  Compass, ArrowRight, ChevronRight
} from 'lucide-react';
import { FEATURED_PLAYERS, AGENCY_PILLARS } from '../data/playerAgencyData';

export const PlayerAgencySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'representation' | 'roster' | 'pathway'>('representation');

  return (
    <section id="player-agency" className="relative py-28 md:py-36 bg-ink overflow-hidden border-t border-white/[0.05]">
      {/* Cockayne chin backdrop—London handshake over elite contract */}
      <div className="absolute inset-0 z-0">
        <img
          src="/player-agency-bg.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/97 via-ink/82 to-ink/97" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_480px_at_70%_25%,rgba(201,168,76,0.12),transparent_70%)]" />
      </div>
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-[10px] tracking-[0.45em] text-gold-dim uppercase mb-4">
            Elite Talent & Intermediary Desk
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-[5.5rem] leading-[0.92] tracking-[-0.03em] mb-6">
            Player <span className="italic font-editorial font-light text-gold-bright">Agency</span> & Representation
          </h2>
          <div className="gold-rule max-w-sm mb-6" />
          <p className="font-editorial text-lg md:text-xl text-fog/80 font-light italic leading-relaxed">
            From emerging prodigies in top European academies to senior international athletes — Mysco Sports guides careers with rigorous legal protection, strategic career trajectory planning, and global commercial leverage.
          </p>
        </div>

        {/* Hero Showcase Split */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-sm overflow-hidden border border-white/[0.08] shadow-2xl bg-charcoal">
              <img
                src="/player-agency-gemini.jpg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith('player-agency.jpg')) {
                    target.src = '/player-agency.jpg';
                  }
                }}
                alt="Elite Player Representation - MyscoSports Athlete"
                className="w-full h-[460px] md:h-[540px] object-cover object-top"
              />
              {/* Subtle bottom gradient for clean text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-void from-10% via-void/40 via-35% to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 pb-10 md:pb-0 md:pr-56">
                <h3 className="font-display text-2xl md:text-3xl text-cream mb-2 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
                  Building Enduring Careers, Not Just Deals
                </h3>
                <p className="text-xs md:text-sm text-cream/90 max-w-xl font-medium [text-shadow:0_1px_10px_rgba(0,0,0,0.95)]">
                  We maintain strict caps on our client roster to guarantee every athlete direct, 24/7 personal access to our senior partners in London.
                </p>
              </div>
              {/* FA credential badge — bottom-right corner of the image */}
              <div className="absolute bottom-5 right-5 flex items-center gap-2 border border-gold/45 bg-void/90 px-3 py-1.5 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
                <span className="h-1.5 w-1.5 rotate-45 bg-gold-bright" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-gold-bright uppercase whitespace-nowrap">
                  FA Licensed Intermediary
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-charcoal/80 border border-white/[0.06] p-7">
              <div className="flex items-center gap-3 text-gold mb-3">
                <UserCheck size={20} />
                <span className="text-[11px] tracking-[0.2em] uppercase font-body font-medium">Bespoke Talent Portfolio</span>
              </div>
              <p className="font-editorial text-base text-fog/80 italic leading-relaxed">
                "Our agency was established with a singular philosophy: football is not a transactional market, but a profession of human mastery and precision timing."
              </p>
              <div className="mt-4 pt-4 border-t border-white/[0.05] flex justify-between items-center text-[10px] text-dusk uppercase tracking-wider font-mono">
                <span>FIFA Intermediary Regulations Compliant</span>
                <span className="text-gold font-bold">100% Verified</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group bg-stone/50 border border-white/[0.05] p-5 transition-colors hover:border-gold/30">
                <span className="font-display text-3xl md:text-4xl text-gold block">14</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-dusk">
                  Leagues With Active Placement
                </span>
              </div>
              <div className="group bg-stone/50 border border-white/[0.05] p-5 transition-colors hover:border-gold/30">
                <span className="font-display text-3xl md:text-4xl text-gold block">6+</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-dusk">
                  Selective Pro Players
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-between w-full p-4 border border-gold/30 hover:border-gold hover:bg-gold/10 transition-all text-xs tracking-[0.2em] text-gold uppercase font-body group"
            >
              <span>Submit Athlete Representation Dossier</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-white/[0.08] mb-12 overflow-x-auto gap-8">
          {[
            { id: 'representation', label: 'Full Agency Services' },
            { id: 'roster', label: 'Talent Roster Profile' },
            { id: 'pathway', label: 'The Mysco Career Pathway' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-4 text-xs tracking-[0.25em] uppercase font-body transition-colors relative cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-gold font-medium'
                  : 'text-fog/50 hover:text-cream'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="agencyTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* TAB 1: PILLARS */}
        {activeTab === 'representation' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {AGENCY_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-charcoal/70 border border-white/[0.06] p-7 hover:border-gold/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="chamfer-sm mb-6 flex h-10 w-10 items-center justify-center border border-gold/25 bg-gold/[0.06] text-gold transition-colors group-hover:border-gold group-hover:bg-gold/15">
                    {idx === 0 && <TrendingUp size={18} />}
                    {idx === 1 && <FileText size={18} />}
                    {idx === 2 && <Award size={18} />}
                    {idx === 3 && <Compass size={18} />}
                  </div>
                  <h4 className="font-display text-xl text-cream mb-3 group-hover:text-gold-bright transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="font-editorial text-sm text-fog/70 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/[0.04] text-[10px] tracking-[0.2em] text-dusk uppercase flex items-center gap-1">
                  <span>Standard 0{idx + 1}</span>
                  <ChevronRight size={12} className="text-gold/50" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* TAB 2: ROSTER */}
        {activeTab === 'roster' && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEATURED_PLAYERS.map((player, idx) => (
                <motion.div
                  key={player.name}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-charcoal/90 border border-white/[0.07] p-6 hover:border-gold/40 transition-all relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-gold/10 text-gold-bright border border-gold/20">
                      {player.tier}
                    </span>
                    <span className="text-[10px] text-dusk font-mono">{player.nationality}</span>
                  </div>
                  <h4 className="font-display text-xl text-cream mb-1 group-hover:text-gold transition-colors">
                    {player.name}
                  </h4>
                  <p className="text-xs text-gold/80 font-body mb-3">{player.position}</p>
                  <div className="space-y-1.5 pt-3 border-t border-white/[0.05] text-[11px] text-fog/70">
                    <div className="flex justify-between gap-2">
                      <span className="text-dusk shrink-0">Mandate:</span>
                      <span className="text-gold-dim text-right">{player.status}</span>
                    </div>
                    <div className="pt-1">
                      <a
                        href="#contact"
                        className="flex items-center justify-between gap-2 border border-gold/25 bg-gold/[0.05] px-2.5 py-1.5 text-[10px] text-gold transition-colors hover:border-gold/60 hover:bg-gold/[0.12]"
                      >
                        <span className="font-body uppercase tracking-[0.12em]">Transfermarkt & details</span>
                        <span className="font-mono">↗</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-[10px] tracking-[0.25em] text-dusk/70 uppercase pt-4">
              * For Transfermarkt links and full player details, please contact us · All exclusive representation.
            </p>
          </div>
        )}

        {/* TAB 3: PATHWAY */}
        {activeTab === 'pathway' && (
          <div className="bg-charcoal/50 border border-white/[0.06] p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <span className="font-display text-3xl text-gold">Phase A</span>
                <h4 className="font-display text-xl text-cream">Identification & Scouting</h4>
                <p className="font-editorial text-sm text-fog/70 font-light leading-relaxed">
                  Systematic identification and scouting across Africa and South America — bringing the most promising young prospects into the radar of elite European clubs.
                </p>
              </div>
              <div className="space-y-3">
                <span className="font-display text-3xl text-gold">Phase B</span>
                <h4 className="font-display text-xl text-cream">European Continental Leap</h4>
                <p className="font-editorial text-sm text-fog/70 font-light leading-relaxed">
                  Leveraging our UEFA club relationships across the UK, Spain, France, Germany, Portugal, and Türkiye to position players in tactical systems that elevate their European market benchmark.
                </p>
              </div>
              <div className="space-y-3">
                <span className="font-display text-3xl text-gold">Phase C</span>
                <h4 className="font-display text-xl text-cream">Legal Protection & Longevity</h4>
                <p className="font-editorial text-sm text-fog/70 font-light leading-relaxed">
                  Our legal advisors negotiate and secure the most favourable long-term contract terms on the player's behalf — protecting their future so the athlete can focus entirely on their football.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
