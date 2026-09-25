export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  category: 'player' | 'club' | 'camps' | 'uefa' | 'federation' | 'partnership' | 'other';
  message: string;
}

export const CATEGORY_LABELS: Record<ContactFormData['category'], string> = {
  club: 'Club / Team Operations',
  player: 'Player Agency',
  camps: 'Training Camp',
  uefa: 'UEFA Fixture Support',
  federation: 'National Federation',
  partnership: 'Brand / Commercial',
  other: 'General Enquiry',
};

/** Destination inbox for website enquiries */
export const ENQUIRY_INBOX = 'info@myscosports.co.uk';

export interface PlayerRosterItem {
  name: string;
  position: string;
  club: string;
  nationality: string;
  status: string;
  tier: string;
}

export const FEATURED_PLAYERS: PlayerRosterItem[] = [
  {
    name: 'I. Ristov (19)',
    position: 'Winger (RW & LW) / Versatile Player',
    club: 'Transfermarkt link & details on request',
    nationality: 'North Macedonia',
    status: 'Exclusive Representation',
    tier: 'U14–U19 National Team',
  },
  {
    name: 'M. Çetin (19)',
    position: 'AMC (No. 10) / RW',
    club: 'Transfermarkt link & details on request',
    nationality: 'Türkiye',
    status: 'Exclusive Representation',
    tier: 'U16–U18 National Team',
  },
  {
    name: 'W. Daikreo',
    position: 'Defender / Defensive Midfield',
    club: 'Transfermarkt link & details on request',
    nationality: 'Cameroon & Chad',
    status: 'Exclusive Representation',
    tier: 'National Team Player',
  },
  {
    name: 'J. Ashworth',
    position: 'Striker / Central Forward',
    club: 'Transfermarkt link & details on request',
    nationality: 'England',
    status: 'Exclusive Representation',
    tier: 'EFL Academy Graduate',
  },
];

export const AGENCY_PILLARS = [
  {
    title: 'Career Trajectory & Transfer Strategy',
    desc: 'Bespoke roadmaps mapped against European league profiles, tactical fits, and long-term asset value. Every transfer is calculated, not rushed.',
  },
  {
    title: 'Contractual & Legal Precision',
    desc: 'Handled by in-house FA & FIFA registered intermediaries, top European sports law partners, and tax residency advisors.',
  },
  {
    title: 'High-Performance & Sports Science',
    desc: 'Access to premier biomechanics analysts, private nutritional consultants, and bespoke pre-season camps alongside our club network.',
  },
  {
    title: 'Brand, Commercial & Image Rights',
    desc: 'Negotiation of global boot deals, commercial endorsements, and digital IP monetisation crafted for high-tier athletes.',
  },
];
