// src/data/faq.ts
export const faqCategories = [
  'General',
  'Investing',
  'Security',
  'Trading',
  'Governance',
  'Waitlist'
];

export const faqData = [
  {
    id: 1,
    question: 'What is Capital R3alm?',
    answer: 'Capital R3alm is a comprehensive Web3 financial ecosystem that combines traditional finance principles with blockchain innovation to democratize wealth creation. Our platform includes five core divisions and six innovative products designed for seamless user experiences.',
    category: 'General'
  },
  {
    id: 2,
    question: 'How do I get started with investing on the platform?',
    answer: 'Getting started is simple: Create an account, complete KYC verification, connect your wallet, and browse our crowdfund or asset tokenization opportunities. New users receive a guided onboarding tutorial.',
    category: 'Investing'
  },
  {
    id: 3,
    question: 'Is my investment secure?',
    answer: 'Security is our top priority. We use multi-signature wallets, audited smart contracts, and compliance-grade encryption. All assets are insured through our parametric insurance product, with a proven 98% uptime and AAA security rating.',
    category: 'Security'
  },
  {
    id: 4,
    question: 'What are the fees for trading on R3alm Trade?',
    answer: 'We offer competitive zero-gas trading on Layer 2, with maker/taker fees starting at 0.1%. Premium users enjoy fee rebates and advanced order types for high-volume trading.',
    category: 'Trading'
  },
  {
    id: 5,
    question: 'How does the waitlist work for beta products?',
    answer: 'Joining the waitlist grants priority access, early beta invites, and exclusive perks like special pricing. We process applications on a first-come, first-served basis with tiered benefits based on referral activity.',
    category: 'Waitlist'
  },
  {
    id: 6,
    question: 'Can I participate in governance decisions?',
    answer: 'Yes! Token holders can vote on proposals via our R3alm Governance DAO. Stake your tokens to earn voting power and influence platform upgrades, treasury allocations, and partnerships.',
    category: 'Governance'
  },
  {
    id: 7,
    question: 'What types of assets can I crowdfund?',
    answer: 'Our platform supports crowdfunding for real estate developments, tech startups, and green energy projects. All opportunities are vetted for compliance and potential returns.',
    category: 'Investing'
  },
  {
    id: 8,
    question: 'How does tokenization work for real-world assets?',
    answer: 'We convert physical assets like property deeds into blockchain tokens, allowing fractional ownership and secondary market trading while maintaining legal compliance.',
    category: 'Investing'
  }
];

export const featuredFAQs = faqData.slice(0, 3);

export const investmentFAQs = faqData.filter(faq => faq.category === 'Investing');