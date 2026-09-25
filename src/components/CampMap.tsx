import React, { useMemo } from 'react';
import { geoMercator, geoPath, geoGraticule10 } from 'd3-geo';
import { feature } from 'topojson-client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - JSON module without bundled types
import worldTopo from 'world-atlas/countries-110m.json';

/* ── Frame ─────────────────────────────────────────────────────────────── */
const W = 720;
const H = 330;

/* Countries where Mysco actively operates get a brighter fill */
const ACTIVE_COUNTRIES = new Set([
  'United Kingdom',
  'Ireland',
  'Spain',
  'Portugal',
  'France',
  'Belgium',
  'Netherlands',
  'Germany',
  'Switzerland',
  'Austria',
  'Italy',
  'Slovenia',
  'Croatia',
  'Bosnia and Herz.',
  'Serbia',
  'Greece',
  'Turkey',
  'Poland',
  'Czechia',
  'Slovakia',
  'Hungary',
  'Denmark',
  'Romania',
  'Bulgaria',
  'Albania',
  'Montenegro',
  'Macedonia',
  'North Macedonia',
  'Kosovo',
]);

interface RegionPin {
  id: string;
  name: string;
  lon: number;
  lat: number;
  /** label anchor direction so callouts never leave the frame */
  side?: 'left' | 'right';
}

const REGION_PINS: RegionPin[] = [
  { id: 'marbella', name: 'Barcelona · Marbella', lon: -1.2, lat: 38.6, side: 'left' },
  { id: 'belek', name: 'Antalya · Türkiye', lon: 30.7, lat: 36.9, side: 'left' },
  { id: 'algarve', name: 'Algarve · Portugal', lon: -8.2, lat: 37.1, side: 'right' },
  { id: 'uk', name: 'England · Scotland', lon: -3.2, lat: 54.4, side: 'right' },
  { id: 'alps', name: 'Slovenia · Croatia', lon: 15.2, lat: 45.7, side: 'right' },
  { id: 'eu-night', name: 'London · UEFA Nights', lon: -0.12, lat: 51.5, side: 'right' },
];

const LONDON: [number, number] = [-0.12, 51.5];

export const CampMap: React.FC<{ active: string }> = ({ active }) => {
  const { countryPaths, graticulePath, project } = useMemo(() => {
    const projection = geoMercator()
      .center([12, 47])
      .scale(430)
      .translate([W / 2, H / 2 + 24]);

    const path = geoPath(projection);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const topo = worldTopo as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const collection = feature(topo, topo.objects.countries) as any;

    const paths = collection.features
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((f: any) => ({
        id: String(f.id),
        name: f.properties?.name ?? '',
        d: path(f) ?? '',
      }))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((c: any) => c.d);

    return {
      countryPaths: paths as { id: string; name: string; d: string }[],
      graticulePath: path(geoGraticule10()) ?? '',
      project: projection,
    };
  }, []);

  const pins = useMemo(
    () =>
      REGION_PINS.map((p) => {
        const xy = project([p.lon, p.lat]);
        return { ...p, x: xy?.[0] ?? 0, y: xy?.[1] ?? 0 };
      }),
    [project],
  );

  const hq = project(LONDON) ?? [0, 0];
  const activePin = pins.find((p) => p.id === active);

  return (
    <div className="relative w-full overflow-hidden">
      {/* chrome bar */}
      <div className="flex items-center justify-between border-b border-gold/25 bg-void/75 px-4 py-2">
        <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-gold">
          Operational Map · Europe
        </span>
        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-fog/50">
          Live routes from London
        </span>
      </div>

      <div className="relative bg-[#060a11]">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMid meet"
          className="block h-[230px] w-full md:h-[280px]"
        >
          <defs>
            <linearGradient id="cm-sea" x1="0" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#0a1524" />
              <stop offset="100%" stopColor="#04080f" />
            </linearGradient>
            <linearGradient id="cm-land" x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0%" stopColor="#2a2e36" />
              <stop offset="100%" stopColor="#171a21" />
            </linearGradient>
            <linearGradient id="cm-land-active" x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0%" stopColor="#5d5330" />
              <stop offset="100%" stopColor="#332d1c" />
            </linearGradient>
            <radialGradient id="cm-halo">
              <stop offset="0%" stopColor="#f3c566" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#f3c566" stopOpacity="0" />
            </radialGradient>
            <filter id="cm-soft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          {/* sea */}
          <rect x="0" y="0" width={W} height={H} fill="url(#cm-sea)" />

          {/* graticule */}
          <path d={graticulePath} fill="none" stroke="rgba(201,168,76,0.07)" strokeWidth="0.5" />

          {/* soft continental glow */}
          <g filter="url(#cm-soft)" opacity="0.35">
            {countryPaths
              .filter((c) => ACTIVE_COUNTRIES.has(c.name))
              .map((c) => (
                <path key={`glow-${c.id}`} d={c.d} fill="rgba(201,168,76,0.4)" />
              ))}
          </g>

          {/* real country geometry with borders */}
          {countryPaths.map((c) => {
            const on = ACTIVE_COUNTRIES.has(c.name);
            return (
              <path
                key={c.id}
                d={c.d}
                fill={on ? 'url(#cm-land-active)' : 'url(#cm-land)'}
                stroke={on ? 'rgba(226,203,138,0.72)' : 'rgba(150,150,160,0.3)'}
                strokeWidth={on ? 0.65 : 0.4}
                strokeLinejoin="round"
              />
            );
          })}

          {/* routes from London */}
          {pins.map((p) => {
            const on = p.id === active;
            const mx = (hq[0] + p.x) / 2;
            const my = Math.min(hq[1], p.y) - Math.abs(hq[0] - p.x) * 0.22 - 14;
            return (
              <path
                key={`route-${p.id}`}
                d={`M${hq[0]},${hq[1]} Q${mx},${my} ${p.x},${p.y}`}
                fill="none"
                stroke={on ? 'rgba(243,197,102,0.95)' : 'rgba(243,197,102,0.2)'}
                strokeWidth={on ? 1.6 : 0.8}
                strokeDasharray={on ? '5 4' : '3 5'}
                strokeLinecap="round"
                className={on ? '[animation:dash_2.2s_linear_infinite]' : ''}
              />
            );
          })}

          {/* active halo */}
          {activePin && <circle cx={activePin.x} cy={activePin.y} r="26" fill="url(#cm-halo)" />}

          {/* region markers */}
          {pins.map((p) => {
            const on = p.id === active;
            return (
              <g key={p.id} transform={`translate(${p.x},${p.y})`}>
                {on && (
                  <circle r="7" fill="none" stroke="#f3c566" strokeWidth="1.2" opacity="0.85">
                    <animate attributeName="r" values="5;15;5" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.9;0;0.9" dur="2.6s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle
                  r={on ? 4.6 : 3.2}
                  fill={on ? '#f3c566' : 'rgba(201,168,76,0.55)'}
                  stroke={on ? '#fff3dc' : 'rgba(226,203,138,0.75)'}
                  strokeWidth="1.1"
                />
              </g>
            );
          })}

          {/* London HQ */}
          <g transform={`translate(${hq[0]},${hq[1]})`}>
            <circle r="4" fill="#ffffff" />
            <circle r="9" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
          </g>

          {/* active callout */}
          {activePin &&
            (() => {
              const right = activePin.side !== 'left';
              const boxW = Math.max(112, activePin.name.length * 6.1);
              const bx = right ? activePin.x + 12 : activePin.x - 12 - boxW;
              const by = activePin.y - 11;
              return (
                <g>
                  <line
                    x1={activePin.x}
                    y1={activePin.y}
                    x2={right ? bx : bx + boxW}
                    y2={by + 11}
                    stroke="rgba(243,197,102,0.7)"
                    strokeWidth="1"
                  />
                  <rect
                    x={bx}
                    y={by}
                    width={boxW}
                    height="22"
                    rx="1"
                    fill="rgba(5,8,13,0.94)"
                    stroke="rgba(243,197,102,0.75)"
                    strokeWidth="0.9"
                  />
                  <text
                    x={bx + 8}
                    y={by + 15}
                    fontFamily="'Jost', system-ui, sans-serif"
                    fontSize="10.5"
                    letterSpacing="0.6"
                    fill="#f3c566"
                  >
                    {activePin.name}
                  </text>
                </g>
              );
            })()}
        </svg>

        {/* legend */}
        <div className="flex items-center justify-between border-t border-white/[0.07] bg-void/80 px-4 py-2">
          <div className="flex items-center gap-4 font-mono text-[7.5px] uppercase tracking-[0.22em] text-fog/60">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-white" /> London HQ
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-gold-bright" /> Camp Region
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <span className="inline-block h-[2px] w-5 bg-gold-bright" /> Active Route
            </span>
          </div>
          <span className="font-display text-[13px] italic text-gold/75">
            {REGION_PINS.find((r) => r.id === active)?.name ?? 'Europe'}
          </span>
        </div>
      </div>
    </div>
  );
};
