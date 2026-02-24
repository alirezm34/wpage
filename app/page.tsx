import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import ViewContentTracker from '@/components/ViewContentTracker';
import { posts, formatDate } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Term Deposits & Fixed Income in Australia | Aussie Rate Insights',
  description:
    'Australian finance blog covering term deposits, fixed income, savings rates, RBA interest rate decisions, and retirement planning strategies.',
};

export default function Home() {
  const [featured, ...rest] = posts;

  return (
    <>
      <Header />

      <main className="wrap" style={{ paddingTop: 32, paddingBottom: 40 }}>
        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="featured-card">
          <Image
            src={featured.image}
            alt={featured.imageAlt}
            width={800}
            height={500}
            className="featured-card-image"
            priority
          />
          <div className="featured-card-body">
            <div style={{ marginBottom: 12 }}>
              <span className="category-pill">{featured.category}</span>
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 3.5vw, 32px)',
                fontWeight: 700,
                color: 'var(--navy)',
                margin: '0 0 12px',
                lineHeight: 1.25,
              }}
            >
              {featured.title}
            </h1>
            <p
              style={{
                fontSize: 15,
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                margin: '0 0 16px',
              }}
            >
              {featured.excerpt}
            </p>
            <div className="dateline">
              {formatDate(featured.date)} &middot; {featured.readingTime} min read
            </div>
          </div>
        </Link>

        {/* Grid + sidebar */}
        <div id="insights" className="blog-layout">
          <section>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 24,
                fontWeight: 700,
                color: 'var(--navy)',
                margin: '0 0 20px',
                paddingBottom: 12,
                borderBottom: '2px solid var(--navy)',
              }}
            >
              Latest Articles
            </h2>
            <div className="blog-grid">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          <Sidebar />
        </div>
      </main>

      <Footer />
      <ViewContentTracker />
    </>
  );
}
