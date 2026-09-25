import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Trophy, Compass, Landmark,
  Menu, X, ArrowRight, UserCheck
} from 'lucide-react';
import { PlayerAgencySection } from './components/PlayerAgencySection';
import { ClubsSection } from './components/ClubsSection';
import { TrainingCampExperience } from './components/TrainingCampExperience';
import { ContactSection } from './components/ContactSection';
import { GlobalDeskPanel } from './components/GlobalDeskPanel';
import { MyscoOfficialLogo } from './components/MyscoOfficialLogo';
import { GoverningBodiesGrid } from './components/GoverningBodiesGrid';
import { initAnalytics } from './analytics';
import { BackgroundImage } from './components/BackgroundImage';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Player Agency', href: '#player-agency' },
  { label: 'Camps', href: '#camps' },
  { label: 'Clubs', href: '#clubs' },
  { label: 'Method', href: '#method' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  {
    title: 'Team Management',
    subtitle: 'Exclusive Representation',
    desc: 'Dedicated, bespoke management for professional football clubs and national federations. We handle every operational detail with absolute discretion.',
    icon: Shield,
    stat: '15+',
    statLabel: 'Clubs Represented',
  },
  {
    title: 'Training Camps',
    subtitle: 'World-Class Facilities',
    desc: 'We curate elite summer and winter camps across Europe with UEFA-standard pitches, sports science centres, and luxury accommodation — in partnership with major international hotel groups, giving clubs the decisive edge.',
    icon: Trophy,
    stat: '10+',
    statLabel: 'Camps Organised',
  },
  {
    title: 'Strategic Consultancy',
    subtitle: 'Global Intelligence',
    desc: 'Tailored strategic consultancy for sponsorship, acquisitions, and partnerships — connecting clubs with the right opportunities at the right time.',
    icon: Compass,
    stat: '30+',
    statLabel: 'Partnerships Secured',
  },
  {
    title: 'Player Representation',
    subtitle: 'FA Registered Intermediary',
    desc: 'Elite player representation — contract negotiation, transfer strategy, career-pathway planning and commercial rights, delivered by licensed FIFA and FA intermediaries.',
    icon: UserCheck,
    stat: '6+',
    statLabel: 'Selective Pro Athletes',
  },
  {
    title: 'UEFA Operations',
    subtitle: 'Champions & Europa',
    desc: 'Specialised in managing every logistical and organisational detail for clubs competing in the Champions League and Europa League across the UK and Europe.',
    icon: Landmark,
    stat: '8+',
    statLabel: 'Seasons Managed',
  },
];



const TESTIMONIALS = [
  {
    quote:
      'We thank all representatives of Mysco Sports for organising our first-time pre-season camp in the United Kingdom. Their immense effort and dedication created the perfect conditions for our preparations.',
    name: 'Chief Football Operations',
    role: 'Beşiktaş J.K. · Süper Lig',
  },
  {
    quote:
      'Very satisfied with everything from A to Z. Their attention to detail and work ethic ensured our camp ran smoothly — a commercial collaboration agreement followed as a direct result.',
    name: 'First Team Head Coach',
    role: 'RC Deportivo de A Coruña · La Liga',
  },
  {
    quote:
      'Mysco Sports assisted us in sourcing our opponents for our penultimate pre-season friendly. Their service, from negotiation through to match day, was excellent.',
    name: 'Head of Football Operations',
    role: 'Huddersfield Town A.F.C. · EFL',
  },
  {
    quote:
      'Every logistical detail was handled before we even had to ask. The camp environment, the fixtures and the operational discretion were of the very highest standard.',
    name: 'Sporting Director',
    role: 'Galatasaray A.Ş. · Süper Lig',
  },
];

const TESTIMONIAL_SHOWCASE = [
  {
    club: 'Beşiktaş J.K.',
    tag: 'UK Pre-Season Camp',
    title: 'Pre-Season Base & UEFA Operations',
    meta: 'London & Yorkshire Camps · European Fixtures',
    image: 'https://myscosports.co.uk/wp-content/uploads/2019/03/Bjk-Ant_1.png',
    fallback: 'https://images.pexels.com/photos/35898730/pexels-photo-35898730.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=540',
  },
  {
    club: 'RC Deportivo de A Coruña',
    tag: 'Strategic Agreement',
    title: 'Commercial Accord & UK Summer Tour',
    meta: 'Bespoke Camp Logistics · Continental Fixtures',
    image: 'https://myscosports.co.uk/wp-content/uploads/2019/03/738d40d7-c0ee-41eb-8e0b-5a20e37e0ba2.jpg',
    fallback: 'https://images.pexels.com/photos/38616011/pexels-photo-38616011.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=540',
  },
  {
    club: 'Huddersfield Town A.F.C.',
    tag: 'Fixture Delivery',
    title: 'Penultimate Pre-Season Matchday',
    meta: 'Opponent Sourcing · Full Matchday Coordination',
    image: 'https://myscosports.co.uk/wp-content/uploads/2019/03/Huddersfield-FC-Vs-Deportivo3High.png',
    fallback: 'https://images.pexels.com/photos/17779075/pexels-photo-17779075.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=540',
  },
  {
    club: 'Galatasaray A.Ş.',
    tag: 'UEFA Delegations',
    title: 'Champions League Operations & UK Stays',
    meta: 'Executive Transport · Training Facilities · Protocol',
    image: 'https://myscosports.co.uk/wp-content/uploads/2019/03/IMG_6850.jpeg',
    fallback: 'https://images.pexels.com/photos/38443770/pexels-photo-38443770.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=540',
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [londonTime, setLondonTime] = useState('');

  useEffect(() => {
    initAnalytics();
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const tick = () =>
      setLondonTime(
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
    <>
      <div className="noise-overlay" />
      <main className="relative bg-void text-cream min-h-screen">
        {/* NAVIGATION */}
        <nav className="fixed top-0 left-0 right-0 z-50">
          {/* status strip — collapses on scroll */}
          <div
            className={`overflow-hidden border-b border-white/[0.06] bg-void/85 backdrop-blur-xl transition-all duration-500 ${
              scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
            }`}
          >
            <div className="mx-auto flex max-w-[86rem] items-center justify-between gap-6 px-6 py-[7px] md:px-10">
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-gold-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 [animation:pinPulse_2.6s_ease-out_infinite]" />
                Intermediary desk open · Mayfair, London
              </span>
              <span className="hidden items-center gap-5 font-mono text-[9px] uppercase tracking-[0.2em] text-dusk sm:flex">
                <span>{londonTime} GMT</span>
                <span className="text-gold/70">FIFA · UEFA · The FA licensed</span>
              </span>
            </div>
          </div>

          <div
            className={`transition-all duration-500 ${
              scrolled
                ? 'bg-void/92 border-b border-gold/15 py-2.5 shadow-[0_18px_50px_-30px_rgba(0,0,0,1)] backdrop-blur-2xl'
                : 'bg-gradient-to-b from-void/85 to-transparent py-3.5'
            }`}
          >
            <div className="mx-auto flex max-w-[86rem] items-center justify-between gap-6 px-6 md:px-10">
              {/* Mysco Sports London Official House Brandmark */}
              <a href="#" className="group flex items-center overflow-visible py-1 transition-transform duration-300 hover:scale-[1.02]">
                <MyscoOfficialLogo markClass="h-12 sm:h-14 md:h-[60px]" />
              </a>

              <div className="hidden lg:flex items-center gap-5 xl:gap-8">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group relative py-1 font-body text-[10px] font-bold uppercase tracking-[0.14em] text-gold transition-colors duration-300 hover:text-gold-bright lg:[text-shadow:0_0_18px_rgba(201,168,76,0.25)] xl:text-[11px]"
                  >
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gold-bright transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              <div className="hidden xl:flex items-center gap-4">
                <a
                  href="#contact"
                  className="group relative overflow-hidden chamfer-sm border border-gold/50 bg-gold/[0.06] px-5 py-2.5 font-body text-[10px] font-bold uppercase tracking-[0.22em] text-gold transition-colors duration-300 hover:text-void"
                >
                  <span className="absolute inset-0 -translate-y-full bg-gold transition-transform duration-400 ease-out group-hover:translate-y-0" />
                  <span className="relative flex items-center gap-2">Intermediary Desk</span>
                </a>
              </div>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden border border-gold/30 p-2 text-gold transition-colors hover:bg-gold/10"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="lg:hidden overflow-hidden bg-void/98 backdrop-blur-2xl border-b border-white/[0.08]"
              >
                <div className="flex flex-col px-8 pb-8 pt-4 gap-4">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="border-b border-white/[0.03] py-2 font-body text-xs font-bold uppercase tracking-[0.22em] text-gold transition-colors hover:text-gold-bright"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-2 text-center py-3 bg-gold text-void text-xs uppercase tracking-[0.2em] font-semibold"
                  >
                    Direct Intermediary Desk
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* HERO */}
        <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-sports.jpg"
              alt="Elite Sports London"
              className="w-full h-full object-cover opacity-45 scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-void/90 via-void/50 to-void" />
            <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-transparent to-void/50" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-12 px-6 pb-20 pt-[34vh] md:px-10 md:pb-28 lg:grid-cols-12 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="lg:col-span-7"
            >
              <div className="chamfer-sm mb-6 inline-flex items-center gap-2.5 border border-gold/30 bg-gold/[0.08] px-3.5 py-1.5">
                <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                <span className="text-[10px] md:text-xs font-body tracking-[0.35em] text-gold-bright uppercase">
                  FIFA · UEFA · English FA Licensed Agency
                </span>
              </div>

              <h1 className="font-display text-[clamp(2.8rem,10vw,8.5rem)] leading-[0.88] tracking-[-0.03em] text-cream mb-6 md:mb-8">
                <span className="italic font-editorial font-light text-gold-bright">From</span> Passion <br />
                <span className="italic font-editorial font-light text-gold-bright">to</span> Profession
              </h1>

              <div className="gold-rule max-w-md mb-6 md:mb-8" />

              <p className="font-editorial text-xl md:text-2xl lg:text-[1.65rem] text-fog/90 leading-relaxed max-w-2xl font-light italic mb-8 md:mb-10">
                London-based and globally connected — dedicated to elevating football clubs, elite players, and national federations to the highest summit of the global game.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-void text-[11px] tracking-[0.25em] uppercase font-body font-semibold hover:bg-gold-bright transition-all duration-300 shadow-[0_0_35px_rgba(201,168,76,0.3)]"
                >
                  Contact Desk
                  <ArrowRight size={14} />
                </a>

                <a
                  href="#player-agency"
                  className="inline-flex items-center gap-3 px-7 py-4 border border-gold/40 text-gold text-[11px] tracking-[0.25em] uppercase font-body hover:bg-gold/10 transition-all duration-300"
                >
                  <UserCheck size={14} />
                  Player Agency
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-fog/70 hover:text-cream px-4 py-4 transition-colors"
                >
                  Explore Services ↓
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
              <GlobalDeskPanel />
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="relative py-28 md:py-36 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              {/* Left Column: Story & Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9 }}
              >
                <p className="text-[10px] tracking-[0.45em] text-gold-dim uppercase mb-4">About Mysco Sports</p>
                <h2 className="font-display text-4xl md:text-6xl lg:text-[5rem] leading-[0.92] tracking-[-0.03em] mb-8">
                  Excellence in <span className="italic font-editorial font-light text-gold-bright">Every</span> Dimension
                </h2>
                <div className="gold-rule mb-8" />
                <div className="font-editorial text-lg md:text-xl text-fog/80 leading-[1.7] space-y-5 font-light">
                  <p>
                    London-based and globally connected, Mysco Sports is a boutique international sports agency dedicated to elevating football clubs and players to the highest level of the global game.
                  </p>
                  <p>
                    We provide exclusive team management, elite player representation, and strategic consultancy, along with sponsorship, acquisition, and partnership opportunities carefully tailored to the ambitions of professional clubs and national federations.
                  </p>
                  <p>
                    Our dedicated team curates world-class summer and winter training camps across Europe, arranges prestigious friendly fixtures, and provides tailored consultancy solutions designed to give our clients a decisive edge both on and off the pitch. In addition, we specialise in UEFA Champions League and Europa League operations, expertly managing every logistical and organisational detail for European clubs competing in the UK and across the continent.
                  </p>
                  <p>
                    With a multilingual team licensed by FIFA, UEFA, and the English FA, Mysco Sports combines London’s strategic position with global reach, connecting clubs, players, and opportunities through expert insight, discretion, and excellence.
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Image + Quote Card + Official Licences Held Underneath */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1, delay: 0.15 }}
                className="space-y-12"
              >
                <div className="relative pb-8">
                  <div className="relative overflow-hidden rounded-sm border border-white/[0.08] shadow-2xl shadow-black/40">
                    <img
                      src="/consultancy.jpg"
                      alt="Mysco Sports London boardroom overlooking the London Eye and Tower Bridge at sunset"
                      loading="eager"
                      decoding="async"
                      className="h-[440px] w-full object-cover md:h-[540px]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void/70 to-transparent" />
                    <div className="absolute right-4 top-4 border border-gold/45 bg-void/85 px-3 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-sm">
                      <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] text-gold-bright">
                        Mayfair Boardroom · London
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-3 md:left-0 md:-left-6 bg-charcoal border border-white/[0.08] border-l-2 border-l-gold p-6 md:p-7 shadow-2xl shadow-black/60 max-w-sm">
                    <blockquote className="font-editorial italic text-base md:text-lg text-cream/90 leading-relaxed mb-3">
                      "Trust is earned in the details. Every camp, every fixture, every negotiation is delivered with the same quiet precision our clients have relied on for fifteen years."
                    </blockquote>
                    <div className="w-8 h-px bg-gold/50 mb-2" />
                    <span className="text-[9px] tracking-[0.25em] text-gold uppercase font-mono">Mesut Edinak · London Operational Base</span>
                  </div>
                </div>

                {/* Official governing-body marks, relocated to right column below image */}
                <div className="pt-6 border-t border-white/[0.08]">
                  <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.3em] text-gold-dim">
                    Official Licences Held & Accredited Bodies
                  </p>
                  <GoverningBodiesGrid />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES — editorial ledger */}
        <section id="services" className="relative overflow-hidden py-24 md:py-32 bg-void">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-void via-charcoal to-ink" />
          <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
          <div className="pointer-events-none absolute -left-24 top-1/3 z-10 h-72 w-72 rotate-45 border border-white/[0.04]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.42em] text-gold">
                  Core Competencies · 05 Disciplines
                </p>
                <h2 className="font-display text-[2.4rem] leading-[0.93] tracking-[-0.03em] text-cream md:text-6xl lg:text-[5.2rem]">
                  Specialist Services & <br />
                  <span className="font-editorial text-gold-bright italic font-light">Operational Scope</span>
                </h2>
              </div>
              <p className="font-editorial text-lg leading-relaxed text-fog/75 italic lg:col-span-5 lg:pb-3">
                Comprehensive advisory and management — connecting professional clubs, national federations, and elite players with precision, discretion, and world-class execution.
              </p>
            </div>

            <div className="mt-14 border-t border-white/[0.10]">
              {SERVICES.map((service, i) => {
                const on = hoveredService === i;
                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
                    onMouseEnter={() => setHoveredService(i)}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`group relative grid grid-cols-12 items-start gap-4 border-b border-white/[0.08] px-1 py-7 transition-all duration-500 md:gap-6 md:px-4 md:py-9 ${
                      on ? 'bg-gold/[0.05]' : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <span
                      className={`col-span-2 font-mono text-[11px] tabular-nums tracking-[0.2em] transition-colors duration-300 md:col-span-1 md:pt-2 ${
                        on ? 'text-gold' : 'text-dusk'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="col-span-10 md:col-span-5">
                      <div className="flex items-center gap-3">
                        <service.icon
                          size={20}
                          strokeWidth={1.4}
                          className={`transition-all duration-500 ${
                            on ? 'text-gold-bright scale-110' : 'text-gold/60'
                          }`}
                        />
                        <h3
                          className={`font-display text-[1.5rem] leading-tight tracking-[-0.015em] transition-all duration-500 md:text-[2.1rem] ${
                            on ? 'translate-x-1 text-cream' : 'text-cream/85'
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-2 pl-8 font-mono text-[9px] uppercase tracking-[0.28em] text-gold-dim">
                        {service.subtitle}
                      </p>
                    </div>

                    <div className="col-span-12 md:col-span-4">
                      <p
                        className={`font-editorial text-[15px] leading-[1.7] font-light transition-colors duration-500 md:pr-6 ${
                          on ? 'text-fog/85' : 'text-fog/60'
                        }`}
                      >
                        {service.desc}
                      </p>
                    </div>

                    <div className="col-span-12 flex items-center justify-between gap-3 md:col-span-2 md:block md:text-right md:pt-1">
                      <span
                        className={`font-display text-3xl transition-colors duration-500 md:text-[2.6rem] ${
                          on ? 'text-gold-bright' : 'text-cream/70'
                        }`}
                      >
                        {service.stat}
                      </span>
                      <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-dusk">
                        {service.statLabel}
                      </span>
                    </div>

                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-700 ease-out ${
                        on ? 'w-full' : 'w-0'
                      }`}
                    />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PLAYER AGENCY & REPRESENTATION SECTION */}
        <PlayerAgencySection />

        {/* CLUBS WE HAVE WORKED WITH — real crests */}
        <ClubsSection />

        {/* METHOD / PROCESS */}
        <section id="method" className="relative py-28 md:py-36 overflow-hidden bg-void">
          {/* Exact image from https://pin.it/58HPQmXxi. */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <BackgroundImage
              sources={[
                '/hero.jpg',
                '/hero.png',
                'https://i.pinimg.com/originals/f7/d2/ef/f7d2efa929dc566aaa69b00803e51b1c.jpg',
                'https://i.pinimg.com/1200x/f7/d2/ef/f7d2efa929dc566aaa69b00803e51b1c.jpg',
              ]}
              className="h-full w-full object-cover object-center opacity-85"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,8,0.88)_0%,rgba(6,6,8,0.74)_42%,rgba(6,6,8,0.58)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,6,8,0.92)_0%,transparent_32%,transparent_74%,rgba(6,6,8,0.8)_100%)]" />
          </div>
          <div className="absolute inset-0 z-0 opacity-[0.05] [background-image:repeating-linear-gradient(0deg,rgba(201,168,76,0.25)_0px,rgba(201,168,76,0.25)_1px,transparent_1px,transparent_30px)]" />
          <div className="absolute inset-0 z-0 bg-[radial-gradient(800px_400px_at_85%_20%,rgba(201,168,76,0.06),transparent_70%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className="lg:sticky lg:top-28"
                >
                  <p className="text-[10px] tracking-[0.45em] text-gold-dim uppercase mb-4">Methodology</p>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.92] tracking-[-0.03em] mb-6">
                    Method <br />
                    <span className="italic font-editorial font-light text-gold-bright">& Approach</span>
                  </h2>
                  <div className="gold-rule mb-6" />
                  <p className="font-editorial text-lg text-fog/75 leading-[1.7] font-light mb-8">
                    Our process is anchored in tactical acumen, discretion, and strict execution. Every engagement is custom-fitted to the sporting objectives of the club or player.
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-gold text-[11px] tracking-[0.25em] uppercase font-body hover:text-gold-bright transition-colors group">
                    Schedule Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>

              <div className="lg:col-span-7 lg:col-start-6 space-y-5">
                {[
                  {
                    step: '01',
                    title: 'Tactical & Strategic Discovery',
                    desc: 'We map out club seasonal calendars, financial fair play parameters, player development profiles, and prospective European competition schedules.',
                  },
                  {
                    step: '02',
                    title: 'Bespoke Environment Engineering',
                    desc: 'Pitch agronomy checks, private high-performance hotel contracts, biometric recovery facilities, and private charter logistics.',
                  },
                  {
                    step: '03',
                    title: 'Licensed Operations Execution',
                    desc: 'On-the-ground management by licensed FIFA and FA intermediaries who handle protocol, local police liaisons, UEFA delegates, and fixture rights.',
                  },
                  {
                    step: '04',
                    title: 'Long-Term Asset Optimization',
                    desc: 'Post-camp performance audits, contract reviews, commercial sponsorship integration, and future European fixture pipeline.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className="group bg-charcoal border border-white/[0.05] p-7 md:p-8 hover:border-gold/25 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 font-display text-[7rem] md:text-[9rem] text-white/[0.02] leading-none translate-y-[-20%] translate-x-[10%] pointer-events-none select-none">
                      {item.step}
                    </div>
                    <div className="flex gap-5 md:gap-6">
                      <span className="font-display text-3xl md:text-4xl text-gold/40 group-hover:text-gold transition-colors">{item.step}</span>
                      <div>
                        <h3 className="font-display text-xl md:text-2xl mb-2 tracking-[-0.01em]">{item.title}</h3>
                        <p className="font-editorial text-[15px] text-fog/65 leading-[1.65] font-light">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* ELITE PRE-SEASON TRAINING CAMPS — interactive region selector */}
        <TrainingCampExperience />

        {/* TESTIMONIALS */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <p className="text-[10px] tracking-[0.45em] text-gold-dim uppercase mb-4">Direct Endorsements</p>
              <h2 className="font-display text-4xl md:text-6xl lg:text-[5.5rem] leading-[0.92] tracking-[-0.03em] mb-4">
                Trusted by <span className="italic font-editorial font-light text-gold-bright">Leaders</span>
              </h2>
              <div className="gold-rule max-w-xs mx-auto" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.name + t.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group relative flex flex-col justify-between overflow-hidden border border-white/[0.07] bg-charcoal/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/35"
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 font-display text-[7rem] leading-none text-white/[0.025] transition-colors duration-500 group-hover:text-gold/[0.06]">
                    &rdquo;
                  </div>
                  <blockquote className="mb-8 font-editorial text-[17px] font-light italic leading-[1.55] text-cream/90">
                    “{t.quote}”
                  </blockquote>
                  <div className="border-t border-white/[0.06] pt-4">
                    <span className="block font-body text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
                      {t.name}
                    </span>
                    <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-fog/55">
                      {t.role}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 4 Image Showcase Boxes directly below the 4 team cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mt-6">
              {TESTIMONIAL_SHOWCASE.map((item, i) => (
                <motion.div
                  key={item.club}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.1 }}
                  className="group relative overflow-hidden border border-white/[0.08] bg-charcoal transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_18px_50px_-22px_rgba(201,168,76,0.22)]"
                >
                  {/* Image container */}
                  <div className="relative h-48 w-full overflow-hidden bg-void">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== item.fallback) {
                          target.src = item.fallback;
                        }
                      }}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-transparent" />
                    
                    {/* Badge on top */}
                    <div className="absolute top-3 left-3">
                      <span className="border border-gold/40 bg-void/85 px-2.5 py-1 font-mono text-[8.5px] uppercase tracking-[0.2em] text-gold-bright backdrop-blur-sm">
                        {item.tag}
                      </span>
                    </div>

                    {/* Club name badge on top right */}
                    <div className="absolute top-3 right-3">
                      <span className="font-display text-[11px] font-bold text-cream/90 bg-void/70 px-2 py-0.5 border border-white/[0.08]">
                        {item.club}
                      </span>
                    </div>
                  </div>

                  {/* Caption & Metadata */}
                  <div className="p-5 border-t border-white/[0.06]">
                    <h4 className="font-display text-[14.5px] leading-snug text-cream transition-colors group-hover:text-gold-bright mb-1.5">
                      {item.title}
                    </h4>
                    <p className="font-editorial text-xs italic text-fog/65 leading-relaxed">
                      {item.meta}
                    </p>
                  </div>

                  {/* Bottom gold hover bar */}
                  <span className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION (Full comprehensive contact form, office address, map & direct phones) */}
        <ContactSection />

        {/* FOOTER */}
        <footer className="relative bg-ink border-t border-white/[0.06] py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-4 gap-10 mb-12">
              <div className="md:col-span-2 space-y-4">
                <a href="#" className="flex items-center">
                  <MyscoOfficialLogo markClass="h-12" />
                </a>
                <p className="font-editorial text-base text-fog/70 italic max-w-sm">
                  London-based specialist international sport agency providing exclusive team management, player representation, and European competition operations.
                </p>
                <div className="text-[10px] text-dusk font-mono uppercase tracking-widest pt-2">
                  Licensed by FIFA · UEFA · English FA Intermediary Registered
                </div>
              </div>

              <div>
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4 font-mono">Navigation</h4>
                <div className="flex flex-col space-y-2.5 text-xs text-fog/70 font-light">
                  <a href="#about" className="hover:text-gold transition-colors">About Mysco</a>
                  <a href="#services" className="hover:text-gold transition-colors">Services</a>
                  <a href="#player-agency" className="hover:text-gold transition-colors">Player Agency</a>
                  <a href="#camps" className="hover:text-gold transition-colors">Training Camp Regions</a>
                  <a href="#clubs" className="hover:text-gold transition-colors">Clubs We Have Worked With</a>
                  <a href="#contact" className="hover:text-gold transition-colors">Contact Intermediary Desk</a>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4 font-mono">London Head Office</h4>
                <p className="text-xs text-fog/70 font-light leading-relaxed mb-3">
                  Mayfair, London<br />
                  United Kingdom
                </p>
                <div className="flex items-start gap-4 mb-3">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.22em] text-gold/70 font-body block">Istanbul Office</span>
                    <span className="text-xs text-fog/60 block">Levent, Istanbul · Türkiye</span>
                  </div>
                  <div className="h-8 w-px bg-gold/20 shrink-0" />
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.22em] text-gold/70 font-body block">Brussels Office</span>
                    <span className="text-xs text-fog/60 block">Brussels · Belgium</span>
                  </div>
                </div>
                <a href="mailto:info@myscosports.co.uk" className="text-xs text-gold block hover:text-gold-bright transition-colors">
                  info@myscosports.co.uk
                </a>
                <span className="text-xs text-fog/60 block mt-0.5">Telephone available on request</span>
              </div>
            </div>

            <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.15em] text-dusk uppercase font-body">
              <span>© 2026 Mysco Sports Ltd (London). All rights reserved.</span>
              <div className="flex gap-6">
                <span>FIFA Licensed Player Agent</span>
                <span>•</span>
                <span>UEFA Approved</span>
                <span>•</span>
                <span>The English FA Registered</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
