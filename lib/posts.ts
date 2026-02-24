export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  readingTime: number;
  keywords: string[];
  metaDescription: string;
}

export const CATEGORIES = [
  'Term Deposits',
  'Interest Rates',
  'Fixed Income',
  'Deposit Protection',
  'Retirement Planning',
  'Banking',
  'Savings',
] as const;

export const posts: Post[] = [
  {
    slug: 'how-term-deposits-work',
    title: 'How Term Deposits Work in Australian Banks',
    excerpt:
      'A plain-English guide to term deposit products offered by Australian banks, credit unions, and building societies — covering terms, rates, and what to compare.',
    date: '2025-02-10',
    category: 'Term Deposits',
    image: '/images/rba-building.jpg',
    imageAlt:
      'Classical Australian institutional building exterior representing the banking sector',
    readingTime: 6,
    keywords: [
      'term deposits',
      'fixed income',
      'savings rates',
      'bank comparison',
      'interest rates',
    ],
    metaDescription:
      'Learn how term deposits work in Australia — fixed terms, interest payment options, early withdrawal rules, and how to compare products across banks.',
  },
  {
    slug: 'rba-interest-rate-decisions',
    title: 'The Role of the RBA in Interest Rate Decisions',
    excerpt:
      'How the Reserve Bank of Australia sets the cash rate and why its decisions ripple through savings accounts, term deposits, and the broader economy.',
    date: '2025-02-08',
    category: 'Interest Rates',
    image: '/images/rba-cash-rate.jpg',
    imageAlt:
      'Reserve Bank of Australia building at dusk representing monetary policy decisions',
    readingTime: 5,
    keywords: [
      'RBA',
      'interest rates',
      'rate cuts',
      'cash rate',
      'savings rates',
    ],
    metaDescription:
      'Understand how the RBA cash rate target influences term deposit pricing, savings rates, and the fixed income landscape in Australia.',
  },
  {
    slug: 'comparing-savings-rates-fixed-income',
    title: 'Comparing Savings Rates and Fixed Income Products',
    excerpt:
      'High-interest savings accounts vs term deposits vs bonds — a general comparison framework for Australian savers looking at fixed income options.',
    date: '2025-01-28',
    category: 'Fixed Income',
    image: '/images/financial-planning.jpg',
    imageAlt: 'Calculator and financial documents on a desk representing savings comparison',
    readingTime: 7,
    keywords: [
      'savings rates',
      'fixed income',
      'term deposits',
      'bank comparison',
      'interest rates',
      'bonds',
    ],
    metaDescription:
      'Compare high-interest savings accounts, term deposits, and bonds in Australia. Understand base rates, bonus rates, and what conditions apply.',
  },
  {
    slug: 'government-guarantee-250k-protection',
    title: 'Government Guarantee and the $250,000 Protection Scheme',
    excerpt:
      'What the Financial Claims Scheme means for your deposits, how the $250K cap works per institution, and strategies some savers use to manage coverage.',
    date: '2025-01-20',
    category: 'Deposit Protection',
    image: '/images/deposit-protection.jpg',
    imageAlt:
      'Glass dome protecting gold coins representing the government deposit guarantee',
    readingTime: 5,
    keywords: [
      '$250K protection',
      'government guarantee',
      'term deposits',
      'APRA',
      'Financial Claims Scheme',
    ],
    metaDescription:
      'Learn how Australia\'s $250,000 deposit protection scheme works under the Financial Claims Scheme, including per-institution caps and eligibility rules.',
  },
  {
    slug: 'retirement-planning-superannuation',
    title: 'Financial Planning, Retirement, and Superannuation',
    excerpt:
      'General considerations for using term deposits and fixed income within retirement planning — including laddering strategies and superannuation allocations.',
    date: '2025-01-15',
    category: 'Retirement Planning',
    image: '/images/retirement-planning.jpg',
    imageAlt:
      'Couple reviewing financial documents and planning for retirement',
    readingTime: 6,
    keywords: [
      'retirement',
      'superannuation',
      'financial planning',
      'term deposits',
      'fixed income',
      'laddering',
    ],
    metaDescription:
      'Explore how term deposits and fixed income fit into retirement planning and superannuation strategies for conservative Australian savers.',
  },
  {
    slug: 'best-bank-comparison-strategies',
    title: 'Best Bank Comparison Strategies for Australian Savers',
    excerpt:
      'A practical framework for comparing term deposit rates, savings accounts, and fees across Australian banks, credit unions, and building societies.',
    date: '2025-01-10',
    category: 'Banking',
    image: '/images/bank-comparison.jpg',
    imageAlt:
      'Modern Australian bank branch exterior with sandstone facade and eucalyptus tree',
    readingTime: 7,
    keywords: [
      'bank comparison',
      'savings rates',
      'term deposits',
      'interest rates',
      'credit unions',
    ],
    metaDescription:
      'How to compare Australian banks for term deposits and savings accounts — rates, fees, conditions, and what to look for across providers.',
  },
  {
    slug: 'understanding-rate-cuts-impact-on-savings',
    title: 'Understanding Rate Cuts: What They Mean for Your Savings',
    excerpt:
      'When the RBA cuts the cash rate, what actually happens to your term deposits and savings accounts? A guide to the flow-on effects of rate cuts in Australia.',
    date: '2025-01-05',
    category: 'Interest Rates',
    image: '/images/rate-cuts.jpg',
    imageAlt:
      'Downward trending interest rate graph on paper with pen and glasses on desk',
    readingTime: 6,
    keywords: [
      'rate cuts',
      'RBA',
      'interest rates',
      'savings rates',
      'term deposits',
      'cash rate',
    ],
    metaDescription:
      'What happens to your savings when the RBA cuts rates? Understand how rate cuts flow through to term deposits, savings accounts, and fixed income returns.',
  },
  {
    slug: 'term-deposit-laddering-guide',
    title: 'Building a Term Deposit Ladder: A Step-by-Step Guide',
    excerpt:
      'How to structure a term deposit ladder to balance rate certainty with regular access to funds — a popular strategy for retirees and conservative savers.',
    date: '2024-12-28',
    category: 'Term Deposits',
    image: '/images/deposit-ladder.jpg',
    imageAlt:
      'Wooden blocks arranged in ascending ladder pattern representing term deposit laddering',
    readingTime: 8,
    keywords: [
      'term deposits',
      'laddering',
      'retirement',
      'interest rates',
      'financial planning',
      'savings rates',
    ],
    metaDescription:
      'Step-by-step guide to building a term deposit ladder in Australia. Learn how laddering can help manage interest rate risk and provide regular income.',
  },
  {
    slug: 'high-interest-savings-accounts-guide',
    title: 'High-Interest Savings Accounts: What to Look For in 2025',
    excerpt:
      'Bonus rates, introductory offers, and ongoing rates — how to evaluate high-interest savings accounts and avoid common traps that erode your returns.',
    date: '2024-12-20',
    category: 'Savings',
    image: '/images/savings-accounts.jpg',
    imageAlt:
      'Piggy bank with coins on a desk representing savings accounts and growing wealth',
    readingTime: 6,
    keywords: [
      'savings rates',
      'bank comparison',
      'interest rates',
      'high-interest savings',
      'bonus rates',
    ],
    metaDescription:
      'Guide to choosing high-interest savings accounts in Australia. Compare bonus rates, conditions, and how to keep earning the best possible savings rate.',
  },
  {
    slug: 'superannuation-fixed-income-allocation',
    title: 'How Superannuation Funds Invest in Fixed Income',
    excerpt:
      'Understanding how your super fund allocates to bonds, term deposits, and cash — and what that means for your retirement balance in different rate environments.',
    date: '2024-12-15',
    category: 'Retirement Planning',
    image: '/images/super-fixed-income.jpg',
    imageAlt:
      'Older couple reviewing superannuation statements at kitchen table with laptop',
    readingTime: 7,
    keywords: [
      'superannuation',
      'fixed income',
      'retirement',
      'bonds',
      'interest rates',
      'term deposits',
    ],
    metaDescription:
      'How Australian super funds invest in fixed income and what it means for your retirement. Understand bond allocations, cash options, and rate sensitivity.',
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): Post[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return posts.slice(0, limit);

  return posts
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
