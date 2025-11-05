export interface WaitlistItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  expectedLaunch: string;
  category: string;
  features: string[];
  benefits: string[];
  image: string;
  priority: 'high' | 'medium' | 'low';
}

export const waitlistDivisions: WaitlistItem[] = [
  {
    id: 'r3alm-ventures',
    name: 'R3alm Ventures',
    subtitle: 'Venture Capital',
    description: 'Decentralized venture capital platform connecting startups with global investors through tokenized equity and transparent funding mechanisms.',
    expectedLaunch: 'Q3 2025',
    category: 'Investment',
    features: [
      'Tokenized startup equity investments',
      'Decentralized due diligence processes',
      'Global investor network access',
      'Automated cap table management',
      'Smart contract-based vesting schedules',
      'Secondary market for startup tokens'
    ],
    benefits: [
      'Access to early-stage investment opportunities',
      'Lower minimum investment thresholds',
      'Transparent startup evaluation process',
      'Liquidity for traditionally illiquid investments',
      'Global diversification opportunities',
      'Automated compliance and reporting'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    priority: 'high'
  },
  {
    id: 'r3alm-insurance',
    name: 'R3alm Insurance',
    subtitle: 'Decentralized Protection',
    description: 'Blockchain-based insurance platform offering coverage for digital assets, smart contracts, and traditional risks through community-driven pools.',
    expectedLaunch: 'Q4 2025',
    category: 'Protection',
    features: [
      'Decentralized insurance pools',
      'Smart contract coverage',
      'Parametric insurance products',
      'Community-driven risk assessment',
      'Automated claims processing',
      'Cross-chain asset protection'
    ],
    benefits: [
      'Lower insurance premiums through efficiency',
      'Transparent claims processing',
      'Coverage for emerging digital risks',
      'Community participation in underwriting',
      'Instant payouts for qualifying claims',
      'Global coverage without geographic restrictions'
    ],
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    priority: 'high'
  },
  {
    id: 'r3alm-lending',
    name: 'R3alm Lending',
    subtitle: 'Peer-to-Peer Finance',
    description: 'Decentralized lending platform enabling peer-to-peer loans backed by tokenized assets with automated risk assessment and management.',
    expectedLaunch: 'Q1 2026',
    category: 'Lending',
    features: [
      'Peer-to-peer lending marketplace',
      'Tokenized asset collateral',
      'AI-powered credit scoring',
      'Automated loan servicing',
      'Cross-border lending capabilities',
      'Flexible repayment structures'
    ],
    benefits: [
      'Higher yields for lenders',
      'Lower borrowing costs',
      'Access to global capital markets',
      'Transparent risk assessment',
      'Automated loan management',
      'Fractional loan participation'
    ],
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg',
    priority: 'medium'
  },
  {
    id: 'r3alm-analytics',
    name: 'R3alm Analytics',
    subtitle: 'Market Intelligence',
    description: 'Advanced analytics platform providing real-time market insights, predictive modeling, and investment intelligence across all asset classes.',
    expectedLaunch: 'Q2 2026',
    category: 'Analytics',
    features: [
      'Real-time market data aggregation',
      'Predictive analytics models',
      'Portfolio optimization tools',
      'Risk assessment algorithms',
      'Social sentiment analysis',
      'Custom dashboard creation'
    ],
    benefits: [
      'Data-driven investment decisions',
      'Early market trend identification',
      'Optimized portfolio performance',
      'Reduced investment risks',
      'Competitive market intelligence',
      'Personalized investment insights'
    ],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
    priority: 'medium'
  },
  {
    id: 'r3alm-education',
    name: 'R3alm Education',
    subtitle: 'Financial Learning',
    description: 'Comprehensive educational platform offering courses, certifications, and mentorship programs in Web3 finance and investment strategies.',
    expectedLaunch: 'Q3 2026',
    category: 'Education',
    features: [
      'Interactive course modules',
      'Professional certifications',
      'One-on-one mentorship programs',
      'Virtual trading simulations',
      'Community learning groups',
      'Industry expert workshops'
    ],
    benefits: [
      'Enhanced financial literacy',
      'Professional skill development',
      'Networking opportunities',
      'Practical investment experience',
      'Industry-recognized certifications',
      'Continuous learning support'
    ],
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg',
    priority: 'low'
  }
];

export const waitlistCategories = [
  'All',
  'Investment',
  'Protection',
  'Lending',
  'Analytics',
  'Education'
];

export const highPriorityWaitlist = waitlistDivisions.filter(item => item.priority === 'high');
export const upcomingWaitlist = waitlistDivisions.slice(0, 3);