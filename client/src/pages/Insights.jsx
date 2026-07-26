import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  INSIGHT_CATEGORIES,
  getInsightsByCategory,
} from '../data/insightsData';
import PageCtaBand from '../components/PageCtaBand';

export default function Insights() {
  const [category, setCategory] = useState('All');
  const filtered = useMemo(() => getInsightsByCategory(category), [category]);

  return (
    <>
      <section className="page-hero insights-simple-hero" aria-labelledby="insights-page-title">
        <div className="container">
          <span className="page-hero-kicker">Insights</span>
          <h1 id="insights-page-title" className="page-title">
            Articles &amp; Updates
          </h1>
          <p className="page-subtitle">
            Practical notes on GST, tax, company law, audit, and compliance.
          </p>
        </div>
      </section>

      <section className="home-section insights-simple-section">
        <div className="container">
          <div className="insights-simple-filters" role="group" aria-label="Filter by topic">
            {INSIGHT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={category === cat ? 'is-active' : undefined}
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="insights-simple-grid">
            {filtered.map((item) => (
              <Link key={item.slug} to={`/insights/${item.slug}`} className="insights-simple-card">
                <span className="insights-simple-meta">
                  {item.category} · {item.dateDisplay}
                </span>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <span className="insights-simple-more">Read more →</span>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="insights-simple-empty">No articles in this category yet.</p>
          )}
        </div>
      </section>

      <section className="home-section insights-simple-cta">
        <div className="container">
          <PageCtaBand
            title="Need advice on a specific topic?"
            description="Share your question and we will point you to the right next step."
          />
        </div>
      </section>

      <style>{`
        .insights-simple-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .insights-simple-hero .page-subtitle { max-width: 34rem; }
        .insights-simple-hero .page-hero-actions { margin-top: 1.1rem; }

        .insights-simple-section {
          padding-top: 2.25rem;
          padding-bottom: 1.5rem;
        }
        .insights-simple-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          justify-content: center;
          margin-bottom: 1.35rem;
        }
        .insights-simple-filters button {
          padding: 0.4rem 0.85rem;
          border-radius: 8px;
          border: 1px solid rgba(148, 163, 184, 0.3);
          background: #fff;
          color: var(--slate-700);
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
        }
        .insights-simple-filters button.is-active {
          background: var(--purple-700);
          border-color: var(--purple-700);
          color: #fff;
        }
        .insights-simple-grid {
          display: grid;
          gap: 0.85rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .insights-simple-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          .insights-simple-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .insights-simple-card {
          display: flex;
          flex-direction: column;
          padding: 1.05rem 1rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 12px;
          background: #fff;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 8px 22px rgba(15, 39, 71, 0.05);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .insights-simple-card:hover {
          transform: translateY(-2px);
          border-color: rgba(31, 93, 150, 0.34);
          color: inherit;
        }
        .insights-simple-meta {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--purple-700);
          margin-bottom: 0.45rem;
        }
        .insights-simple-card h2 {
          margin: 0 0 0.4rem;
          font-size: 1.02rem;
          color: var(--slate-900);
          line-height: 1.35;
        }
        .insights-simple-card p {
          margin: 0;
          flex: 1;
          font-size: 0.9rem;
          color: var(--slate-600);
          line-height: 1.55;
        }
        .insights-simple-more {
          margin-top: 0.75rem;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--purple-700);
        }
        .insights-simple-empty {
          text-align: center;
          color: var(--slate-500);
          padding: 1.5rem;
        }

        .insights-simple-cta {
          padding-top: 0.5rem;
          padding-bottom: 2.5rem;
        }
      `}</style>
    </>
  );
}
