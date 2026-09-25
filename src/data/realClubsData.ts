/**
 * High-authority, verified official CDN logo URLs for clubs and federations.
 * All URLs have multiple prioritized fallbacks (Wikimedia, FotMob CDN, Unavatar).
 */

export interface RealClubEntry {
  id: string;
  name: string;
  shortName: string;
  country: string;
  league: string;
  flagship?: boolean;
  note: string;
  /** Primary, secondary, tertiary image URLs to attempt */
  sources: string[];
}

export const REAL_CLUBS_DATA: RealClubEntry[] = [
  // ── English clubs ────────────────────────────────────────────
  {
    id: 'arsenal',
    name: 'Arsenal F.C.',
    shortName: 'Arsenal',
    country: 'England',
    league: 'Premier League',
    note: 'First-team pre-season (Africa) & UCL matchday operations',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/330px-Arsenal_FC.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/9825.png',
      'https://unavatar.io/arsenal.com',
    ],
  },
  {
    id: 'tottenham',
    name: 'Tottenham Hotspur F.C.',
    shortName: 'Tottenham',
    country: 'England',
    league: 'Premier League',
    note: 'UCL & UEL operations and facility hosting',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/330px-Tottenham_Hotspur.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/8586.png',
      'https://unavatar.io/tottenhamhotspur.com',
    ],
  },
  {
    id: 'hull',
    name: 'Hull City A.F.C.',
    shortName: 'Hull City',
    country: 'England',
    league: 'Premier League',
    note: 'Pre-season advisory & player representation',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/5/54/Hull_City_A.F.C._logo.svg/330px-Hull_City_A.F.C._logo.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/8667.png',
      'https://unavatar.io/wearehullcity.co.uk',
    ],
  },
  {
    id: 'swansea',
    name: 'Swansea City A.F.C.',
    shortName: 'Swansea City',
    country: 'Wales',
    league: 'EFL Championship',
    note: 'Camp hosting & friendly arrangements',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/f/f9/Swansea_City_AFC_logo.svg/330px-Swansea_City_AFC_logo.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/10003.png',
      'https://unavatar.io/swanseacity.com',
    ],
  },
  {
    id: 'wigan',
    name: 'Wigan Athletic F.C.',
    shortName: 'Wigan Athletic',
    country: 'England',
    league: 'English Football League',
    note: 'Friendly game delivery (vs Beşiktaş JK)',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/4/43/Wigan_Athletic.svg/330px-Wigan_Athletic.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/8528.png',
      'https://unavatar.io/wiganathletic.com',
    ],
  },
  {
    id: 'huddersfield',
    name: 'Huddersfield Town A.F.C.',
    shortName: 'Huddersfield',
    country: 'England',
    league: 'English Football League',
    note: 'Opponent sourcing & negotiation',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/4/43/Huddersfield_Town_AFC_crest.svg/330px-Huddersfield_Town_AFC_crest.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/9796.png',
      'https://unavatar.io/htafc.com',
    ],
  },
  {
    id: 'rotherham',
    name: 'Rotherham United F.C.',
    shortName: 'Rotherham Utd',
    country: 'England',
    league: 'English Football League',
    note: 'Training camp & facility coordination',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/4/42/Rotherham_United_F.C._svg.svg/330px-Rotherham_United_F.C._svg.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/8119.png',
      'https://unavatar.io/themillers.co.uk',
    ],
  },
  {
    id: 'hamilton',
    name: 'Hamilton Academical F.C.',
    shortName: 'Hamilton Accies',
    country: 'Scotland',
    league: 'Scottish League',
    note: 'Friendly calendar & summer camp support',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/4/43/Hamilton_Academical_FC_logo.svg/330px-Hamilton_Academical_FC_logo.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/8429.png',
      'https://unavatar.io/hamiltonacciesfc.co.uk',
    ],
  },
  {
    id: 'westriding',
    name: 'West Riding County F.A.',
    shortName: 'West Riding FA',
    country: 'England',
    league: 'County Association',
    note: 'Proud county partner of Mysco Sports',
    sources: [
      'https://upload.wikimedia.org/wikipedia/en/0/03/West_Riding_County_Football_Association_logo.jpg',
      'https://unavatar.io/westridingfa.com',
    ],
  },
  // ── Turkish clubs & federation ───────────────────────────────
  {
    id: 'galatasaray',
    name: 'Galatasaray A.Ş.',
    shortName: 'Galatasaray',
    country: 'Türkiye',
    league: 'Süper Lig',
    note: 'England pre-season (UK) & UCL operations',
    sources: [
      // Official 2026 five-star crest
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Galatasaray_S.K._Logo_2026_5-stars.svg/500px-Galatasaray_S.K._Logo_2026_5-stars.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/8637.png',
      'https://unavatar.io/galatasaray.org',
    ],
  },
  {
    id: 'fenerbahce',
    name: 'Fenerbahçe S.K.',
    shortName: 'Fenerbahçe',
    country: 'Türkiye',
    league: 'Süper Lig',
    note: 'European fixture delegation & UK operations',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/3/39/Fenerbah%C3%A7e.svg/500px-Fenerbah%C3%A7e.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/8695.png',
      'https://unavatar.io/fenerbahce.org',
    ],
  },
  {
    id: 'besiktas',
    name: 'Beşiktaş J.K.',
    shortName: 'Beşiktaş',
    country: 'Türkiye',
    league: 'Süper Lig',
    note: 'Pre-season UK camp, European competition games & UEFA representation',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/BesiktasJK-Logo.svg/250px-BesiktasJK-Logo.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/10188.png',
      'https://unavatar.io/bjk.com.tr',
    ],
  },
  {
    id: 'tff',
    name: 'Turkish Football Federation',
    shortName: 'TFF',
    country: 'Türkiye',
    league: 'National Federation',
    note: 'Federation liaison & international match window planning',
    sources: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/TurkishFootballFederation.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/6595.png',
      'https://unavatar.io/tff.org',
    ],
  },
  // ── Continental European clubs ───────────────────────────────
  {
    id: 'deportivo',
    name: 'RC Deportivo La Coruña',
    shortName: 'Deportivo',
    country: 'Spain',
    league: 'La Liga',
    note: 'Multi-year commercial agreement, UK summer camps & friendly games',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/5/56/RC_Deportivo_A_Coru%C3%B1a_logo_2026.svg/330px-RC_Deportivo_A_Coru%C3%B1a_logo_2026.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/9783.png',
      'https://unavatar.io/rcdeportivo.es',
    ],
  },
  {
    id: 'eibar',
    name: 'SD Eibar',
    shortName: 'Eibar',
    country: 'Spain',
    league: 'La Liga · Segunda División',
    note: 'Pre-season friendly & Basque Country camp liaison',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/en/thumb/3/3b/SD_Eibar_logo_2016.svg/500px-SD_Eibar_logo_2016.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/8657.png',
      'https://unavatar.io/sdeibar.com',
    ],
  },
  {
    id: 'mainz',
    name: '1. FSV Mainz 05',
    shortName: 'Mainz 05',
    country: 'Germany',
    league: 'Bundesliga',
    note: 'Pre-season camp, high intensity block',
    sources: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/1._FSV_Mainz_05_logo.svg/330px-1._FSV_Mainz_05_logo.svg.png',
      'https://images.fotmob.com/image_resources/logo/teamlogo/9905.png',
      'https://unavatar.io/mainz05.de',
    ],
  },
];
