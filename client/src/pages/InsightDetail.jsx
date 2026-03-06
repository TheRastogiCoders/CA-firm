import { Link, useParams, Navigate } from 'react-router-dom';
import { getInsightBySlug, getAllInsights } from '../data/insightsData';

export default function InsightDetail() {
  const { slug } = useParams();
  const post = slug ? getInsightBySlug(slug) : null;

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const more = getAllInsights().filter((i) => i.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="hero hero-insight-detail" aria-labelledby="insight-title">
        <div className="hero-bg">
          <div className="hero-bg-image" />
          <div className="hero-overlay hero-overlay-base" />
          <div className="hero-overlay hero-overlay-gradient" />
          <div className="hero-vignette" />
        </div>
        <div className="hero-content">
          <div className="container hero-container hero-container-left">
            <nav className="svc-detail-breadcrumb" aria-label="Breadcrumb">
              <Link to="/insights">Insights</Link>
              <span className="svc-detail-breadcrumb-sep" aria-hidden="true">/</span>
              <span>{post.title}</span>
            </nav>
            <div className="hero-accent" />
            <span className="insight-detail-meta">
              <span className="insight-category insight-detail-cat">{post.category}</span>
              <span className="insight-date insight-detail-date">{post.dateDisplay}</span>
            </span>
            <h1 id="insight-title" className="hero-title hero-title-sm">{post.title}</h1>
            <p className="hero-desc hero-desc-sm">{post.summary}</p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="home-section insight-detail-content" aria-labelledby="insight-body">
        <div className="container">
          <div className="insight-detail-body">
            {post.body.map((para, i) => (
              <p key={i} className="insight-detail-para">{para}</p>
            ))}
          </div>

          <div className="insight-detail-cta">
            <p>Need help with this topic or something similar?</p>
            <div className="insight-detail-cta-btns">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/schedule-consultation" className="btn btn-secondary">Schedule Consultation</Link>
            </div>
          </div>

          {/* More articles */}
          {more.length > 0 && (
            <div className="insight-detail-more">
              <h2 className="insight-detail-more-title">More from Insights</h2>
              <ul className="insight-detail-more-list">
                {more.map((m) => (
                  <li key={m.slug}>
                    <Link to={`/insights/${m.slug}`} className="insight-detail-more-link">
                      <span className="insight-detail-more-cat">{m.category}</span>
                      {m.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="insight-detail-back">
            <Link to="/insights" className="insight-detail-back-link">← All Insights</Link>
          </p>
        </div>
      </section>

      <style>{`
        .hero-insight-detail .hero-nav { display: none; }
        .hero-insight-detail {
          min-height: 42vh;
          min-height: 42dvh;
          padding: 3.5rem 0 4rem;
        }
        @media (max-width: 767px) {
          .hero-insight-detail { min-height: 38vh; min-height: 38dvh; padding: 2.5rem 0 3rem; }
        }
        .hero-container-left { text-align: left; }
        .insight-detail-content .svc-detail-breadcrumb,
        .hero-insight-detail .svc-detail-breadcrumb {
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        .hero-insight-detail .svc-detail-breadcrumb a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
        }
        .hero-insight-detail .svc-detail-breadcrumb a:hover { color: var(--white); }
        .hero-insight-detail .svc-detail-breadcrumb-sep { margin: 0 0.5rem; color: rgba(255, 255, 255, 0.5); }
        .hero-insight-detail .svc-detail-breadcrumb span:last-child { color: var(--white); }
        .hero-insight-detail .hero-accent { margin-left: 0; margin-right: 0; }
        .insight-detail-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }
        .insight-detail-cat {
          padding: 0.25rem 0.65rem;
          background: rgba(255, 255, 255, 0.2);
          color: var(--white);
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 6px;
        }
        .insight-detail-date { color: rgba(255, 255, 255, 0.85); font-size: 0.875rem; }
        .hero-title-sm { font-size: clamp(1.5rem, 4vw, 2.25rem); margin-bottom: 1rem; }
        .hero-desc-sm { margin-bottom: 0; }
        .insight-detail-content {
          padding: 4rem 0;
          background: linear-gradient(180deg, var(--white) 0%, var(--slate-50) 100%);
        }
        @media (min-width: 768px) { .insight-detail-content { padding: 5rem 0; } }
        .insight-detail-body { max-width: 720px; margin-bottom: 2.5rem; }
        .insight-detail-para {
          font-size: 1.0625rem;
          color: var(--slate-700);
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }
        .insight-detail-para:last-child { margin-bottom: 0; }
        .insight-detail-cta {
          padding: 2rem;
          background: var(--slate-50);
          border: 1px solid var(--border);
          border-radius: 12px;
          margin-bottom: 2.5rem;
          text-align: center;
        }
        .insight-detail-cta p {
          margin-bottom: 1rem;
          color: var(--slate-700);
          font-size: 1rem;
        }
        .insight-detail-cta-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        .insight-detail-more-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--slate-800);
          margin-bottom: 1rem;
        }
        .insight-detail-more-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .insight-detail-more-list li { margin-bottom: 0.75rem; }
        .insight-detail-more-link {
          display: inline-block;
          color: var(--purple-600);
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.2s;
        }
        .insight-detail-more-link:hover { color: var(--purple-700); }
        .insight-detail-more-cat {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--slate-600);
          margin-right: 0.5rem;
        }
        .insight-detail-back { margin-top: 2rem; }
        .insight-detail-back-link {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--purple-600);
          text-decoration: none;
        }
        .insight-detail-back-link:hover { color: var(--purple-700); }
      `}</style>
    </>
  );
}
