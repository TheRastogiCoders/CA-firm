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
      {/* Hero — matches Services/About */}
      <section className="hero hero-insights" aria-label="Insights hero">
        <div className="hero-bg">
          <div className="hero-bg-image" />
          <div className="hero-overlay hero-overlay-base" />
          <div className="hero-overlay hero-overlay-gradient" />
          <div className="hero-vignette" />
        </div>
        <div className="hero-content">
          <div className="container hero-container">
            <div className="hero-slide hero-slide-active">
              <div className="hero-accent" />
              <p className="hero-label">DWIVEDI GUPTA & CO.</p>
              <p className="hero-tagline">Updates on tax, compliance, and regulatory matters</p>
              <h1 className="hero-title">Insights & Blog</h1>
              <p className="hero-desc">
                Practical articles and updates on GST, tax, company law, compliance, and advisory—to help you stay informed and compliant.
              </p>
              <div className="hero-cta">
                <Link to="/schedule-consultation" className="hero-btn hero-btn-primary">Schedule Consultation</Link>
                <Link to="/contact" className="hero-btn hero-btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="home-section insights-intro" aria-labelledby="insights-intro-title">
        <div className="container">
          <p id="insights-intro-title" className="insights-intro-text">
            Our insights cover GST, direct and indirect tax, MCA/ROC compliance, audit, startup and MSME schemes, and general advisory. We publish updates and checklists to keep you ahead of due dates and regulatory changes. For advice tailored to your situation, get in touch.
          </p>
        </div>
      </section>

      {/* Topics / Categories */}
      <section className="home-section insights-topics" aria-label="Topics">
        <div className="container">
          <div className="services-header">
            <span className="services-eyebrow">Browse by topic</span>
            <div className="services-accent" />
            <h2 className="services-title">Topics We Cover</h2>
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

      {/* Featured + Blog grid */}
      <section className="home-section home-services insights-list-section" aria-labelledby="insights-list-title">
        <div className="container">
          <div className="services-header">
            <span className="services-eyebrow">Latest</span>
            <div className="services-accent" />
            <h2 id="insights-list-title" className="services-title">Articles & Updates</h2>
            <p className="services-intro">
              Practical guides, checklists, and updates to help you stay compliant and informed.
            </p>
          </div>

          {featured && (category === 'All' || featured.category === category) && (
            <article className="insight-featured">
              <Link to={`/insights/${featured.slug}`} className="insight-featured-link">
                <span className="insight-category">{featured.category}</span>
                <h3 className="insight-featured-title">{featured.title}</h3>
                <p className="insight-featured-summary">{featured.summary}</p>
                <span className="insight-date insight-featured-date">{featured.dateDisplay}</span>
                <span className="insight-read-more">Read article →</span>
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

          <div className="services-cta services-cta-block">
            <p className="services-cta-text">Need advice on a specific topic? We can help.</p>
            <div className="services-cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/schedule-consultation" className="btn btn-secondary">Schedule Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-insights .hero-nav { display: none; }
        .hero-insights {
          min-height: 50vh;
          min-height: 50dvh;
          padding: 4rem 0 4.5rem;
        }
        @media (max-width: 767px) {
          .hero-insights { min-height: 48vh; min-height: 48dvh; padding: 3rem 0 3.5rem; }
        }
        .insights-intro { padding: 2.5rem 0; background: var(--white); }
        .insights-intro-text {
          font-size: 1.0625rem;
          color: var(--slate-700);
          line-height: 1.75;
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }
        .insights-topics { padding: 2rem 0; background: linear-gradient(180deg, var(--slate-50) 0%, var(--white) 100%); }
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
          margin-bottom: 2.5rem;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow 0.25s, border-color 0.25s;
        }
        .insight-featured:hover {
          border-color: var(--purple-400);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1);
        }
        .insight-featured-link {
          display: block;
          padding: 2rem 1.75rem;
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
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) { .insights-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .insights-grid { grid-template-columns: repeat(3, 1fr); gap: 1.75rem; } }
        .insight-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: box-shadow 0.25s, border-color 0.25s;
        }
        .insight-card:hover {
          border-color: var(--purple-400);
          box-shadow: 0 10px 36px rgba(124, 58, 237, 0.08);
        }
        .insight-card-link {
          display: block;
          padding: 1.75rem;
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
        .services-cta-block {
          margin-top: 3rem;
          padding: 2.5rem 2rem;
          background: linear-gradient(135deg, var(--slate-50) 0%, rgba(224, 231, 255, 0.25) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          text-align: center;
        }
        .services-cta-text {
          font-size: 1.0625rem;
          color: var(--slate-700);
          margin-bottom: 1.5rem;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        .services-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
