import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  getAllInsights,
  getFeaturedInsight,
  INSIGHT_CATEGORIES,
  getInsightsByCategory,
} from '../data/insightsData';

export default function Insights() {
  const [category, setCategory] = useState('All');
  const featured = getFeaturedInsight();
  const filtered = useMemo(() => getInsightsByCategory(category), [category]);
  const rest = featured ? filtered.filter((i) => i.slug !== featured.slug) : filtered;

  return (
    <>
      <section className="page-hero insights-page-hero" aria-labelledby="insights-page-title">
        <div className="container">
          <span className="page-hero-kicker">Insights & Knowledge</span>
          <h1 id="insights-page-title" className="page-title">Practical updates for tax, compliance, and advisory decisions</h1>
          <p className="page-subtitle">
            Read clear, actionable articles on GST, direct tax, company law, audit, and regulatory updates to stay compliant and informed.
          </p>
          <div className="page-hero-actions">
            <Link to="/schedule-consultation" className="btn btn-primary">Schedule Consultation</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="home-section insights-intro" aria-labelledby="insights-intro-title">
        <div className="container">
          <div className="insights-intro-card">
            <p id="insights-intro-title" className="insights-intro-text">
            Our insights cover GST, direct and indirect tax, MCA/ROC compliance, audit, startup and MSME schemes, and general advisory. We publish updates and checklists to keep you ahead of due dates and regulatory changes. For advice tailored to your situation, get in touch.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section insights-topics" aria-label="Topics">
        <div className="container">
          <div className="insights-section-head">
            <span className="insights-section-kicker">Browse by Topic</span>
            <h2>Topics We Cover</h2>
          </div>
          <div className="insights-categories">
            {INSIGHT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`insights-cat-btn ${category === cat ? 'insights-cat-btn-active' : ''}`}
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-services insights-list-section" aria-labelledby="insights-list-title">
        <div className="container">
          <div className="insights-section-head">
            <span className="insights-section-kicker">Latest</span>
            <h2 id="insights-list-title">Articles & Updates</h2>
            <p>
              Practical guides, checklists, and updates to help you stay compliant and informed.
            </p>
          </div>

          {featured && (category === 'All' || featured.category === category) && (
            <article className="insight-featured">
              <Link to={`/insights/${featured.slug}`} className="insight-featured-link">
                <span className="insight-category">{featured.category}</span>
                <h3 className="insight-featured-title">{featured.title}</h3>
                <p className="insight-featured-summary">{featured.summary}</p>
                <div className="insight-featured-footer">
                  <span className="insight-date insight-featured-date">{featured.dateDisplay}</span>
                  <span className="insight-read-more">Read article →</span>
                </div>
              </Link>
            </article>
          )}

          <div className="insights-grid">
            {rest.map((item) => (
              <article key={item.slug} className="insight-card">
                <Link to={`/insights/${item.slug}`} className="insight-card-link">
                  <div className="insight-meta">
                    <span className="insight-category">{item.category}</span>
                    <span className="insight-date">{item.dateDisplay}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <span className="insight-read-more">Read more →</span>
                </Link>
              </article>
            ))}
          </div>

          {rest.length === 0 && (
            <p className="insights-empty">No articles in this category yet. Check back soon or browse &quot;All&quot;.</p>
          )}

          <div className="insights-final-cta">
            <p className="insights-final-cta-text">Need advice on a specific topic? We can help.</p>
            <div className="insights-final-cta-actions">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/schedule-consultation" className="btn btn-secondary">Schedule Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .insights-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1100px 360px at 50% -120px, rgba(31, 93, 150, 0.24), transparent 64%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 56%, rgba(255, 255, 255, 0.98) 100%);
        }
        .insights-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .insights-page-hero::after {
          opacity: 0.12;
          filter: grayscale(8%) saturate(95%);
        }
        .insights-page-hero .container { max-width: 1220px; }
        .insights-intro {
          padding-top: 2.4rem;
          padding-bottom: 1.2rem;
          background: #fff;
        }
        .insights-intro-card {
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.06);
          padding: 1.2rem 1rem;
          max-width: 980px;
          margin: 0 auto;
        }
        .insights-intro-text {
          font-size: 1rem;
          color: var(--slate-700);
          line-height: 1.68;
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }
        .insights-section-head {
          text-align: center;
          margin: 0 auto 1rem;
          max-width: 860px;
        }
        .insights-section-kicker {
          display: inline-flex;
          padding: 0.34rem 0.78rem;
          border-radius: 999px;
          border: 1px solid rgba(140, 183, 220, 0.34);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(240, 247, 255, 0.88));
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--purple-700);
          margin-bottom: 0.6rem;
        }
        .insights-section-head h2 {
          margin: 0;
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          line-height: 1.16;
          letter-spacing: -0.03em;
          color: var(--slate-900);
        }
        .insights-section-head p {
          margin: 0.62rem auto 0;
          max-width: 760px;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .insights-topics { padding: 1.4rem 0 2rem; background: linear-gradient(180deg, var(--slate-50) 0%, var(--white) 100%); }
        .insights-categories {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }
        .insights-cat-btn {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--slate-700);
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }
        .insights-cat-btn:hover {
          border-color: var(--purple-400);
          color: var(--purple-700);
        }
        .insights-cat-btn-active {
          background: linear-gradient(135deg, var(--purple-600), var(--purple-700));
          color: var(--white);
          border-color: transparent;
        }
        .insights-list-section { padding: 4rem 0; }
        @media (min-width: 768px) { .insights-list-section { padding: 5rem 0; } }
        .insight-featured {
          margin-bottom: 1.6rem;
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 18px;
          overflow: hidden;
          transition: box-shadow 0.25s, border-color 0.25s;
        }
        .insight-featured:hover {
          border-color: var(--purple-400);
          box-shadow: 0 12px 40px rgba(31, 79, 134, 0.14);
        }
        .insight-featured-link {
          display: block;
          padding: 1.6rem 1.3rem;
          text-decoration: none;
          color: inherit;
        }
        @media (min-width: 768px) { .insight-featured-link { padding: 2.5rem 2rem; } }
        .insight-featured-title {
          font-size: clamp(1.25rem, 2.5vw, 1.5rem);
          font-weight: 600;
          color: var(--slate-800);
          margin: 0.75rem 0 0.5rem 0;
          line-height: 1.3;
        }
        .insight-featured-summary {
          font-size: 1.0625rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0 0 1rem 0;
        }
        .insight-featured-date { font-size: 0.875rem; }
        .insight-featured-footer {
          margin-top: 0.45rem;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          flex-wrap: wrap;
        }
        .insight-read-more {
          display: inline-block;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--purple-600);
          margin-top: 0.5rem;
        }
        .insight-featured-link:hover .insight-read-more { color: var(--purple-700); }
        .insights-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .insights-grid { grid-template-columns: repeat(3, 1fr); gap: 1.75rem; } }
        .insight-card {
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 14px;
          transition: box-shadow 0.25s, border-color 0.25s;
        }
        .insight-card:hover {
          border-color: var(--purple-400);
          box-shadow: 0 10px 36px rgba(31, 79, 134, 0.12);
        }
        .insight-card-link {
          display: block;
          padding: 1.2rem 1rem;
          text-decoration: none;
          color: inherit;
        }
        .insight-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .insight-category {
          display: inline-block;
          padding: 0.25rem 0.65rem;
          background: linear-gradient(135deg, #EDE9FE, rgba(224,231,255,0.8));
          color: var(--purple-700);
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 6px;
        }
        .insight-date { font-size: 0.8125rem; color: var(--text-muted); }
        .insight-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--slate-800);
          margin-bottom: 0.5rem;
          line-height: 1.35;
        }
        .insight-card p {
          color: var(--text-muted);
          font-size: 0.9375rem;
          line-height: 1.6;
          margin: 0;
        }
        .insight-card .insight-read-more { margin-top: 0.75rem; }
        .insight-card-link:hover .insight-read-more { color: var(--purple-700); }
        .insights-empty {
          text-align: center;
          color: var(--text-muted);
          padding: 2rem;
        }
        .insights-final-cta {
          margin-top: 1.4rem;
          padding: 2rem 1.2rem;
          background: linear-gradient(135deg, #0f2747 0%, #173b68 52%, #1f5d96 100%);
          border: 1px solid rgba(140, 183, 220, 0.3);
          border-radius: 18px;
          text-align: center;
          color: #fff;
        }
        .insights-final-cta-text {
          font-size: 1rem;
          color: rgba(240, 248, 255, 0.92);
          margin-bottom: 1rem;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }
        .insights-final-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          justify-content: center;
          align-items: center;
        }
        .insights-final-cta .btn-secondary {
          border-color: rgba(220, 236, 252, 0.48);
          color: #f8fcff;
          background: transparent;
        }
      `}</style>
    </>
  );
}
