import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TickerBar from '@/components/TickerBar';
import HeroSection from '@/components/HeroSection';
import CategoryRow from '@/components/CategoryRow';
import AuthorWidget from '@/components/AuthorWidget';
import ViewContentTracker from '@/components/ViewContentTracker';
import { posts, getPostsByCategory } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Term Deposits & Fixed Income in Australia | Aussie Rate Insights',
  description:
    'Australian finance blog covering term deposits, fixed income, savings rates, RBA interest rate decisions, and retirement planning strategies.',
};

export default function Home() {
  const featured = posts[0];
  const editorPicks = posts.slice(1, 3);
  const recentPosts = posts.slice(3, 8);

  const heroSlugs = posts.slice(0, 8).map((p) => p.slug);

  const termDepositPosts = getPostsByCategory('Term Deposits', heroSlugs);
  const interestRatePosts = getPostsByCategory('Interest Rates', heroSlugs);
  const retirementPosts = getPostsByCategory('Retirement Planning', heroSlugs);

  return (
    <>
      <TickerBar />
      <Header />

      <main className="wrap" style={{ paddingTop: 28, paddingBottom: 40 }}>
        <HeroSection
          featured={featured}
          editorPicks={editorPicks}
          recentPosts={recentPosts}
        />

        <div className="below-hero">
          <div>
            <CategoryRow title="Term Deposits" posts={termDepositPosts} />
            <CategoryRow title="Interest Rates" posts={interestRatePosts} />
            <CategoryRow title="Retirement Planning" posts={retirementPosts} />
          </div>

          <div>
            <AuthorWidget />
          </div>
        </div>
      </main>

      <Footer />
      <ViewContentTracker />
    </>
  );
}
