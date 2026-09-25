import React, { useEffect, useMemo, useState } from 'react';
import { CampMap } from './CampMap';
import { BackgroundImage } from './BackgroundImage';

interface CampRegion {
  id: string;
  region: string;
  country: string;
  complex: string;
  season: string;
  pitches: string;
  headline: string;
  blurb: string;
  facts: { label: string; value: string }[];
  sources: string[];
}

const px = (id: number, w = 2400, h = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const CAMP_REGIONS: CampRegion[] = [
  {
    id: 'marbella',
    region: 'Barcelona & Marbella',
    country: 'Spain',
    complex: 'Camp Nou · Catalan Coast · Golden Mile',
    season: 'Jun — Aug',
    pitches: '4 × UEFA Cat. IV grass',
    headline: 'Warm-Weather Opening Blocks',
    blurb:
      'Humidity-controlled evening sessions, sea-front recovery terraces and a friendly slate against La Liga and Segunda opposition from Catalonia to Andalusia — the classic pre-season foundation camp.',
    facts: [
      { label: 'Hotel', value: 'Private floor, team-only dining' },
      { label: 'Travel', value: 'Barcelona BCN · Málaga AGP' },
      { label: 'Gym', value: 'Portable GPS + gym fit-out' },
    ],
    // Exact image from https://pin.it/51fSNpw2E, with a same-image CDN fallback.
    sources: [
      '/marca.jpg',
      '/marca.png',
      'https://i.pinimg.com/originals/84/64/06/8464065ac04f6d9751076509769e6407.jpg',
      'https://i.pinimg.com/1200x/84/64/06/8464065ac04f6d9751076509769e6407.jpg',
    ],
  },
  {
    id: 'belek',
    region: 'Antalya · Türkiye',
    country: 'Türkiye',
    complex: 'Belek & TFF Antalya Camps Centre',
    season: 'Dec — Feb',
    pitches: '9 × stadium-grade grass',
    headline: 'Mid-Winter Tournament Season',
    blurb:
      'Twenty-degree January afternoons, all-inclusive stadium clusters and a friendly calendar stacked with European squads travelling to the Turkish coast.',
    facts: [
      { label: 'Hotel', value: 'Deluxe all-inclusive resort' },
      { label: 'Fixtures', value: 'Four opponents per camp' },
      { label: 'Broadcast', value: 'Domestic + OTT feed' },
    ],
    // Exact image resolved from https://pin.it/4hvt0A4nA: Green Canyon, Antalya.
    sources: [
      'https://i.pinimg.com/originals/55/b3/3d/55b33dd1a5479fd7fa5a742d6959f2e5.png',
      'https://i.pinimg.com/1200x/55/b3/3d/55b33dd1a5479fd7fa5a742d6959f2e5.jpg',
      '/anta.jpg',
      '/anta.png',
      px(33210167),
    ],
  },
  {
    id: 'algarve',
    region: 'Algarve · Portugal',
    country: 'Portugal',
    complex: 'Atlantic Performance Valley',
    season: 'Jan — Feb · Jun — Jul',
    pitches: '6 × hybrid sand-based',
    headline: 'Winter Proof & Testing Ground',
    blurb:
      'Mild Atlantic winter air, elite sports-science suites and a dense pre-season tournament circuit — the Algarve remains Europe’s most reliable loading block.',
    facts: [
      { label: 'Hotel', value: 'Sports resort, exclusive wing' },
      { label: 'Travel', value: 'Faro FAO — 25 min' },
      { label: 'Lab', value: 'Blood-lactate & VO₂ on site' },
    ],
    // User's exact por image: Algarve Praia de Benagil cliffs, white village & sea caves from above
    sources: [
      '/por.jpg',
      '/por.png',
      'https://windows10spotlight.com/wp-content/uploads/2023/07/fa3fb16c4246aca42146a026634b66ca.jpg',
      px(33210166),
    ],
  },
  {
    id: 'uk',
    region: 'England & Scotland',
    country: 'United Kingdom',
    complex: 'St George’s Park · Oriam Edinburgh',
    season: 'May — Jul',
    pitches: '11 × natural + floodlit 3G',
    headline: 'Home-Grown Camps & UK Friendlies',
    blurb:
      'Our home turf. We host visiting European clubs on Premier League and Scottish Premiership-standard training grounds, arrange UK friendly fixtures and manage every matchday obligation end to end.',
    facts: [
      { label: 'Hotel', value: 'Country-house private hire' },
      { label: 'Fixtures', value: 'EFL, PL2 & SPFL club links' },
      { label: 'Media', value: 'Press-conference build-out' },
    ],
    // Direct asset supplied for this region: St George's Park training banner.
    sources: [
      'https://www.datocms-assets.com/57366/1727792663-trip-pro-training-football-st-georges-park_banner.webp',
      'https://inspiresport.com/en-gb/wp-content/smush-webp/sites/2/2026/06/2-8.png.webp',
      '/england-scotland.jpg',
      '/england-scotland.png',
      px(17779075),
    ],
  },
  {
    id: 'alps',
    region: 'Slovenia & Croatia',
    country: 'Slovenia · Croatia',
    complex: 'Brdo pri Kranju · Rovinj · Poreč',
    season: 'Jun — Jul',
    pitches: '3 × alpine-foothill grass · 6 × Adriatic coastal',
    headline: 'Alpine Foothills & Adriatic Volume',
    blurb:
      'The Balkan pre-season corridor. Cool Julian Alps mornings, Adriatic-coast recovery and a stacked friendly calendar against Slovenian, Croatian and visiting Bundesliga opposition.',
    facts: [
      { label: 'Altitude', value: '350 – 900 m foothills' },
      { label: 'Recovery', value: 'Sea-water & cryotherapy circuit' },
      { label: 'Travel', value: 'Ljubljana LJU · Zagreb ZAG · Pula PUY' },
    ],
    // User's exact bled image: Lake Bled with island church & snow-capped Julian Alps
    sources: [
      '/bled.jpg',
      '/bled.png',
      'https://images.pexels.com/photos/39159107/pexels-photo-39159107.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=2400&h=1200',
      px(37430612),
    ],
  },
  {
    id: 'eu-night',
    region: 'UEFA Fixture Nights',
    country: 'United Kingdom · Europe',
    complex: 'Champions & Europa League Delegations',
    season: 'Jul — May',
    pitches: 'Stadium + ancillary site',
    headline: 'European Competition Operations',
    blurb:
      'Arrival protocols, training-site approvals, security liaison, ticketing blocks and mixed-zone management for visiting clubs across UEFA competitions in the UK and Europe.',
    facts: [
      { label: 'Compliance', value: 'UEFA Regs 24 & appendix files' },
      { label: 'Logistics', value: 'Charter, slot & transfer plan' },
      { label: 'Hospitality', value: 'VIP & partner programmes' },
    ],
    sources: [px(35898730)],
  },
];

export const TrainingCampExperience: React.FC = () => {
  const [activeId, setActiveId] = useState(CAMP_REGIONS[0].id);
  const [prevId, setPrevId] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  const active = useMemo(
    () => CAMP_REGIONS.find((r) => r.id === activeId) ?? CAMP_REGIONS[0],
    [activeId],
  );

  /* gentle auto-rotation, paused while the pointer is inside the section */
  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => {
      setActiveId((cur) => {
        const i = CAMP_REGIONS.findIndex((r) => r.id === cur);
        return CAMP_REGIONS[(i + 1) % CAMP_REGIONS.length].id;
      });
    }, 7000);
    return () => window.clearInterval(t);
  }, [paused]);

  const select = (id: string) => {
    setPrevId(activeId);
    setActiveId(id);
    window.setTimeout(() => setPrevId(null), 450);
  };

  return (
    <section
      id="camps"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative isolate overflow-hidden bg-void"
    >
      {/* Each region uses its own background; failed sources do not reveal an unrelated photo. */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {CAMP_REGIONS.map((r) => {
          const isActive = r.id === activeId;
          // England & Scotland: zoomed-out presentation — the full banner fits
          // inside the frame over a soft blurred fill, so nothing is cropped.
          if (r.id === 'uk') {
            return (
              <div
                key={r.id}
                className={`absolute inset-0 transition-opacity duration-[1100ms] ease-out motion-reduce:transition-none ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <BackgroundImage
                  sources={r.sources}
                  style={{ objectPosition: '28% 50%' }}
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl"
                />
                <BackgroundImage
                  sources={r.sources}
                  style={{ objectPosition: '28% 50%' }}
                  className="absolute inset-0 m-auto h-[82%] max-h-[680px] w-[92%] max-w-[1180px] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
                />
              </div>
            );
          }
          return (
            <BackgroundImage
              key={r.id}
              sources={r.sources}
              style={{ objectPosition: '50% 50%' }}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1100ms] ease-out motion-reduce:transition-none ${
                isActive ? 'opacity-85' : 'opacity-0'
              }`}
            />
          );
        })}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,6,8,0.94)_2%,rgba(6,6,8,0.64)_38%,rgba(6,6,8,0.48)_70%,rgba(6,6,8,0.82)_100%)]" />
        <div className="absolute inset-0 [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_6px)] opacity-40 mix-blend-overlay" />
      </div>

      <div className="mx-auto max-w-[86rem] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ── Region menu ───────────────────────────── */}
          <div className="lg:col-span-4">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
              Elite Pre-Season Training Camps
            </p>
            <h2 className="font-display text-[2.1rem] leading-[0.95] tracking-[-0.03em] text-cream md:text-[3.2rem]">
              Choose Your <span className="font-editorial text-gold-bright italic font-light">Region</span>
            </h2>
            <p className="mt-4 font-editorial text-[15px] italic leading-relaxed text-fog/75">
              In partnership with major international hotel groups — five-star accommodation,
              UEFA-standard pitches and sports-science facilities across Europe.
            </p>

            <div className="mt-7 border-t border-white/10">
              {CAMP_REGIONS.map((r, i) => {
                const on = r.id === activeId;
                return (
                  <button
                    key={r.id}
                    onClick={() => select(r.id)}
                    className={`group flex w-full items-center gap-4 border-b border-white/[0.08] px-1 py-4 text-left transition-all duration-300 ${
                      on ? 'bg-gold/[0.07] px-3' : 'hover:bg-white/[0.03] hover:px-3'
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] transition-colors ${
                        on ? 'text-gold' : 'text-dusk group-hover:text-fog'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block truncate font-display text-lg transition-colors md:text-xl ${
                          on ? 'text-gold-bright' : 'text-cream/80 group-hover:text-cream'
                        }`}
                      >
                        {r.region}
                      </span>
                      <span className="mt-0.5 block text-[9px] font-body uppercase tracking-[0.22em] text-fog/50">
                        {r.country} · {r.season}
                      </span>
                    </span>
                    <span
                      className={`h-[2px] shrink-0 bg-gold transition-all duration-500 ${
                        on ? 'w-8 opacity-100' : 'w-0 opacity-0'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-7 border border-white/[0.08] bg-void/60">
              <CampMap active={activeId} />
            </div>
          </div>

          {/* ── Detail panel ──────────────────────────── */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div
              key={active.id}
              className="border border-white/[0.10] bg-ink/80 p-7 backdrop-blur-md [animation:rise_.6s_cubic-bezier(.22,1,.36,1)_both] md:p-11"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-gold">
                  {active.country}
                </span>
                <span className="font-editorial text-sm text-fog/70 italic">{active.complex}</span>
              </div>

              <h3 className="mt-5 font-display text-[1.9rem] leading-[1.02] tracking-[-0.02em] text-cream md:text-[3rem]">
                {active.headline}
              </h3>

              <p className="mt-5 max-w-2xl font-editorial text-[1.05rem] leading-[1.75] font-light text-fog/85 md:text-lg">
                {active.blurb}
              </p>

              <div className="mt-8 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { k: 'Window', v: active.season },
                  { k: 'Pitches', v: active.pitches },
                  ...active.facts.map((f) => ({ k: f.label, v: f.value })),
                ].map((cell) => (
                  <div key={cell.k} className="group/cell bg-void/90 p-4 transition-colors hover:bg-graphite">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-gold/70 transition-colors group-hover/cell:text-gold">
                      {cell.k}
                    </span>
                    <span className="mt-1.5 block font-display text-[15px] leading-snug text-cream">
                      {cell.v}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/[0.08] pt-6">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-gold px-7 py-3.5 font-body text-[11px] font-semibold uppercase tracking-[0.25em] text-void transition-all duration-300 hover:bg-gold-bright hover:shadow-[0_0_38px_rgba(201,168,76,0.4)]"
                >
                  Request {active.region} Availability
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <p className="font-editorial text-sm text-fog/60 italic">
                  {prevId ? 'Camp profile updated' : 'Camps curated with three components: accommodation, facilities & fixtures.'}
                </p>
              </div>
            </div>

            {/* live progress rail */}
            <div className="mt-5 flex items-center gap-3">
              {CAMP_REGIONS.map((r) => (
                <span
                  key={r.id}
                  className={`h-px flex-1 transition-all duration-500 ${
                    r.id === activeId ? 'bg-gold' : 'bg-white/15'
                  }`}
                />
              ))}
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-dusk">
                {CAMP_REGIONS.findIndex((r) => r.id === activeId) + 1}/{CAMP_REGIONS.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
