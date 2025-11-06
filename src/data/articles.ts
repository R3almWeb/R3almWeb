// src/data/articles.ts
export const categories = [
  'Web3',
  'DeFi',
  'Blockchain',
  'Investing',
  'Technology',
  'Finance',
  'NFTs',
  'DAO'
];

export const articles = [
  {
    id: 1,
    title: 'The Future of DeFi: Trends Shaping 2025',
    excerpt: 'As decentralized finance continues to evolve, key trends like AI integration and cross-chain liquidity are set to redefine the landscape.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    date: '2025-11-01',
    category: 'DeFi',
    author: 'Jane Doe',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Tokenizing Real-World Assets: A Game Changer for Investors',
    excerpt: 'Explore how RWA tokenization is bridging traditional finance with blockchain, unlocking trillions in illiquid markets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    date: '2025-10-28',
    category: 'Investing',
    author: 'John Smith',
    readTime: '7 min'
  },
  {
    id: 3,
    title: 'Building DAOs for the Next Generation of Governance',
    excerpt: 'From quadratic voting to soulbound tokens, discover innovative tools empowering community-led organizations.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    date: '2025-10-25',
    category: 'DAO',
    author: 'Alex Rivera',
    readTime: '6 min'
  },
  {
    id: 4,
    title: 'Web3 Wallets: Security Best Practices in a Multi-Chain World',
    excerpt: 'With rising hacks and phishing attacks, learn essential strategies to safeguard your digital assets across ecosystems.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800',
    date: '2025-10-20',
    category: 'Web3',
    author: 'Sam Lee',
    readTime: '4 min'
  }
];

export const recentArticles = articles.slice(0, 3);