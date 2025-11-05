export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  featured: boolean;
}

export const faqData: FAQItem[] = [
  // General Questions
  {
    id: 1,
    question: "What is Capital R3alm?",
    answer: "Capital R3alm is a comprehensive Web3 financial ecosystem that democratizes wealth creation through innovative blockchain solutions. We operate five subsidiaries and six products that work together to provide secure, transparent, and scalable financial services.",
    category: "General",
    featured: true
  },
  {
    id: 2,
    question: "How do I get started with Capital R3alm?",
    answer: "Getting started is simple! Create an account on our platform, complete the KYC verification process, and explore our subsidiaries to find investment opportunities that match your goals. You can start with as little as $100 in many of our offerings.",
    category: "General",
    featured: true
  },
  {
    id: 3,
    question: "Is Capital R3alm regulated and compliant?",
    answer: "Yes, we maintain full compliance with FINRA, SEC, and other relevant regulatory bodies through our strategic partnerships with North Capital and Rialto Markets. All our activities meet federal securities regulations and industry standards.",
    category: "General",
    featured: true
  },
  {
    id: 4,
    question: "What makes Capital R3alm different from other investment platforms?",
    answer: "Our integrated ecosystem approach sets us apart. Unlike single-purpose platforms, we offer a complete financial ecosystem where subsidiaries work together synergistically, providing enhanced value and opportunities across real estate, trading, governance, and social engagement.",
    category: "General",
    featured: false
  },

  // Investment Questions
  {
    id: 5,
    question: "What's the minimum investment amount?",
    answer: "Minimum investments vary by product and opportunity. Many of our offerings start as low as $100 for fractional ownership in real estate or crowdfunding campaigns. Private equity and some commercial properties may require higher minimums starting at $1,000.",
    category: "Investment",
    featured: true
  },
  {
    id: 6,
    question: "What types of investments are available?",
    answer: "We offer diverse investment opportunities including tokenized real estate (residential, commercial, industrial), startup crowdfunding, private equity, AI-driven trading strategies, and digital assets. Each category has different risk profiles and return expectations.",
    category: "Investment",
    featured: false
  },
  {
    id: 7,
    question: "How are returns distributed?",
    answer: "Returns are distributed automatically through smart contracts based on your ownership percentage. For real estate, you receive rental income and appreciation. For trading, profits are distributed based on your allocated capital. All distributions are transparent and trackable in real-time.",
    category: "Investment",
    featured: false
  },
  {
    id: 8,
    question: "Can I sell my investments before maturity?",
    answer: "Yes, many of our tokenized assets offer liquidity through secondary markets. Real estate tokens can be traded on integrated exchanges, and some investments have built-in liquidity provisions. Specific liquidity terms vary by investment type.",
    category: "Investment",
    featured: false
  },

  // Technology Questions
  {
    id: 9,
    question: "What blockchain networks do you use?",
    answer: "We operate on multiple blockchain networks including Ethereum, Solana, and Polygon to optimize for security, speed, and cost-effectiveness. Our multi-chain approach ensures the best user experience across different asset types.",
    category: "Technology",
    featured: false
  },
  {
    id: 10,
    question: "How secure are my investments and personal data?",
    answer: "We employ bank-level security including AES-256 encryption, multi-signature wallets, hardware security modules (HSM), and regular third-party security audits. Your assets are protected by enterprise-grade security protocols.",
    category: "Technology",
    featured: false
  },
  {
    id: 11,
    question: "Do I need to understand blockchain technology to invest?",
    answer: "No technical knowledge is required. Our platforms are designed with user-friendly interfaces that abstract the complexity of blockchain technology. We also provide educational resources through R3alm Academy for those interested in learning more.",
    category: "Technology",
    featured: false
  },

  // Real Estate Questions
  {
    id: 12,
    question: "How does real estate tokenization work?",
    answer: "Real estate tokenization converts property ownership rights into digital tokens on the blockchain. Each token represents a fraction of the property, allowing you to own a percentage of high-value real estate with smaller investments while maintaining transparency and liquidity.",
    category: "Real Estate",
    featured: false
  },
  {
    id: 13,
    question: "Who manages the tokenized properties?",
    answer: "Properties are managed by professional property management companies with proven track records. All management activities are transparent and reported through our platform, including maintenance, tenant relations, and financial performance.",
    category: "Real Estate",
    featured: false
  },
  {
    id: 14,
    question: "What happens if a property needs major repairs?",
    answer: "Major repairs are handled through our governance system where token holders can vote on significant expenditures. Reserve funds are maintained for routine maintenance, and any major capital improvements are transparently communicated and approved by the community.",
    category: "Real Estate",
    featured: false
  },

  // Trading Questions
  {
    id: 15,
    question: "How do the AI trading bots work?",
    answer: "Our AI trading bots use advanced algorithms to identify arbitrage opportunities across multiple exchanges. They execute trades automatically based on predefined risk parameters, market conditions, and profit thresholds while continuously learning and optimizing strategies.",
    category: "Trading",
    featured: false
  },
  {
    id: 16,
    question: "What's the success rate of the trading algorithms?",
    answer: "Our trading algorithms maintain a 98.7% success rate with an average monthly return of 12.4%. However, past performance doesn't guarantee future results, and all trading involves risk. We provide comprehensive risk management tools to protect your capital.",
    category: "Trading",
    featured: false
  },
  {
    id: 17,
    question: "Can I customize my trading strategy?",
    answer: "Yes, you can configure risk parameters, set profit targets, choose specific trading pairs, and adjust algorithm settings based on your risk tolerance. Our platform offers both automated and semi-automated trading options.",
    category: "Trading",
    featured: false
  },

  // Account & Support Questions
  {
    id: 18,
    question: "How long does account verification take?",
    answer: "Account verification typically takes 24-48 hours for individual accounts and 3-5 business days for institutional accounts. We use automated KYC/AML processes to expedite verification while maintaining compliance standards.",
    category: "Account",
    featured: false
  },
  {
    id: 19,
    question: "What customer support is available?",
    answer: "We provide 24/7 customer support through multiple channels including live chat, email, and phone support. Our support team includes technical specialists, investment advisors, and compliance experts to assist with any questions.",
    category: "Account",
    featured: false
  },
  {
    id: 20,
    question: "Are there any fees?",
    answer: "Our fee structure is transparent and competitive. Management fees range from 0.5-2% annually depending on the investment type. Trading fees are typically 0.1-0.5% per transaction. All fees are clearly disclosed before you invest, with no hidden charges.",
    category: "Account",
    featured: false
  },

  // Legal & Compliance Questions
  {
    id: 21,
    question: "What jurisdictions do you operate in?",
    answer: "We primarily operate in the United States under SEC and FINRA regulations. We're expanding to other jurisdictions with proper regulatory approvals. International investors may access certain products subject to their local regulations.",
    category: "Legal",
    featured: false
  },
  {
    id: 22,
    question: "How are taxes handled?",
    answer: "We provide comprehensive tax reporting including K-1 forms for partnership investments and 1099 forms for other income types. We recommend consulting with tax professionals for specific advice, and our governance platform can help with tax compliance documentation.",
    category: "Legal",
    featured: false
  },
  {
    id: 23,
    question: "What happens if I want to close my account?",
    answer: "You can close your account at any time. Liquid investments can be withdrawn immediately, while illiquid investments (like real estate) may require selling tokens on secondary markets or waiting for the investment term to complete.",
    category: "Legal",
    featured: false
  }
];

export const faqCategories = [
  "All",
  "General",
  "Investment", 
  "Technology",
  "Real Estate",
  "Trading",
  "Account",
  "Legal"
];

export const featuredFAQs = faqData.filter(faq => faq.featured);
export const generalFAQs = faqData.filter(faq => faq.category === "General");
export const investmentFAQs = faqData.filter(faq => faq.category === "Investment");
export const technologyFAQs = faqData.filter(faq => faq.category === "Technology");