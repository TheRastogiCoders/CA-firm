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
      <section className="page-hero insight-detail-page-hero" aria-labelledby="insight-title">
        <div className="container">
          <nav className="insight-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/insights">Insights</Link>
            <span aria-hidden="true">/</span>
            <span>{post.title}</span>
          </nav>
          <span className="page-hero-kicker">Insight Detail</span>
          <h1 id="insight-title" className="page-title">{post.title}</h1>
          <p className="page-subtitle insight-detail-subtitle">{post.summary}</p>
          <div className="insight-detail-hero-meta">
            <span className="insight-detail-hero-chip">{post.category}</span>
            <span className="insight-detail-hero-date">{post.dateDisplay}</span>
          </div>
        </div>
      </section>

      <section className="home-section insight-detail-content" aria-labelledby="insight-body">
        <div className="container">
          <div className="insight-detail-layout">
            <article className="insight-detail-article-card">
              <header className="insight-detail-article-head">
                <span className="insight-detail-article-kicker">Article</span>
                <h2 id="insight-body">Detailed Guidance</h2>
              </header>
              <div className="insight-detail-body">
                {post.body.map((para, i) => (
                  <p key={i} className="insight-detail-para">{para}</p>
                ))}
              </div>
            </article>

            <aside className="insight-detail-side-card">
              <h3>Need expert support?</h3>
              <p>Our team can help you assess applicability, documentation, and compliance execution for your case.</p>
              <div className="insight-detail-side-actions">
                <Link to="/schedule-consultation" className="btn btn-primary">Schedule Consultation</Link>
                <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
              </div>
              <p className="insight-detail-side-note">For urgent timelines, mention your deadline in the message while contacting us.</p>
            </aside>
          </div>

          <div className="insight-detail-cta">
            <p>Need support on this topic or a connected compliance requirement?</p>
            <div className="insight-detail-cta-btns">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/schedule-consultation" className="btn btn-secondary">Schedule Consultation</Link>
            </div>
          </div>

          {more.length > 0 && (
            <div className="insight-detail-more">
              <div className="insight-detail-more-head">
                <span>Explore More</span>
                <h2 className="insight-detail-more-title">More from Insights</h2>
              </div>
              <ul className="insight-detail-more-grid">
                {more.map((m) => (
                  <li key={m.slug}>
                    <Link to={`/insights/${m.slug}`} className="insight-detail-more-link">
                      <span className="insight-detail-more-cat">{m.category}</span>
                      <h3>{m.title}</h3>
                      <em>Read article →</em>
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
        .insight-detail-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1000px 340px at 50% -120px, rgba(31, 93, 150, 0.2), transparent 62%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 56%, rgba(255, 255, 255, 0.98) 100%);
        }
        .insight-detail-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .insight-detail-page-hero::after {
          opacity: 0.1;
          filter: grayscale(8%) saturate(95%);
        }
        .insight-detail-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          font-size: 0.8rem;
          color: var(--slate-600);
          margin-bottom: 0.9rem;
        }
        .insight-detail-breadcrumb a {
          color: var(--slate-600);
          text-decoration: none;
        }
        .insight-detail-breadcrumb a:hover {
          color: var(--slate-800);
        }
        .insight-detail-subtitle {
          max-width: 930px;
        }
        .insight-detail-hero-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
        .insight-detail-hero-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.34rem 0.72rem;
          background: rgba(31, 93, 150, 0.14);
          color: var(--primary);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 6px;
        }
        .insight-detail-hero-date {
          font-size: 0.85rem;
          color: var(--slate-600);
          font-weight: 600;
        }
        .insight-detail-content {
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }
        .insight-detail-layout {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
          align-items: start;
        }
        @media (min-width: 980px) {
          .insight-detail-layout {
            grid-template-columns: minmax(0, 1fr) 320px;
            gap: 1.1rem;
          }
        }
        .insight-detail-article-card {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 16px;
          background: #fff;
          padding: 1.1rem;
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.08);
        }
        .insight-detail-article-head {
          margin-bottom: 0.85rem;
        }
        .insight-detail-article-kicker {
          display: inline-flex;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          background: rgba(31, 93, 150, 0.12);
          color: var(--primary);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .insight-detail-article-head h2 {
          margin: 0.62rem 0 0;
          color: var(--slate-900);
          font-size: clamp(1.22rem, 2.4vw, 1.62rem);
        }
        .insight-detail-body {
          max-width: 760px;
        }
        .insight-detail-para {
          font-size: 1rem;
          color: var(--slate-700);
          line-height: 1.76;
          margin-bottom: 1rem;
        }
        .insight-detail-para:last-child { margin-bottom: 0; }
        .insight-detail-side-card {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 16px;
          background: #fff;
          padding: 1rem;
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.08);
        }
        .insight-detail-side-card h3 {
          margin: 0;
          color: var(--slate-900);
          font-size: 1.05rem;
        }
        .insight-detail-side-card p {
          margin: 0.6rem 0 0;
          color: var(--slate-600);
          font-size: 0.9rem;
          line-height: 1.56;
        }
        .insight-detail-side-actions {
          display: grid;
          gap: 0.5rem;
          margin-top: 0.82rem;
        }
        .insight-detail-side-actions .btn {
          width: 100%;
          justify-content: center;
        }
        .insight-detail-side-note {
          margin-top: 0.7rem;
          padding-top: 0.7rem;
          border-top: 1px solid rgba(148, 163, 184, 0.24);
        }
        .insight-detail-cta {
          margin-top: 1rem;
          margin-bottom: 1rem;
          border: 1px solid rgba(140, 183, 220, 0.3);
          border-radius: 18px;
          background: linear-gradient(135deg, #0f2747 0%, #173b68 52%, #1f5d96 100%);
          color: #fff;
          padding: 1.8rem 1rem;
          text-align: center;
        }
        .insight-detail-cta p {
          margin: 0;
          color: rgba(240, 248, 255, 0.92);
          font-size: 1rem;
          line-height: 1.58;
        }
        .insight-detail-cta-btns {
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          justify-content: center;
        }
        .insight-detail-cta .btn-secondary {
          border-color: rgba(220, 236, 252, 0.48);
          color: #f8fcff;
          background: transparent;
        }
        .insight-detail-more {
          margin-top: 1.1rem;
        }
        .insight-detail-more-head {
          text-align: center;
          margin-bottom: 0.9rem;
        }
        .insight-detail-more-head span {
          display: inline-flex;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          background: rgba(31, 93, 150, 0.12);
          color: var(--primary);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .insight-detail-more-title {
          margin: 0.56rem 0 0;
          font-size: clamp(1.3rem, 2.8vw, 1.7rem);
          color: var(--slate-900);
        }
        .insight-detail-more-grid {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.74rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .insight-detail-more-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .insight-detail-more-link {
          display: block;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 13px;
          background: #fff;
          padding: 0.9rem;
          color: inherit;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .insight-detail-more-link:hover {
          transform: translateY(-2px);
          border-color: rgba(31, 93, 150, 0.36);
          box-shadow: 0 12px 28px rgba(15, 39, 71, 0.1);
        }
        .insight-detail-more-cat {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--slate-600);
        }
        .insight-detail-more-link h3 {
          margin: 0.45rem 0 0;
          color: var(--slate-900);
          font-size: 1rem;
          line-height: 1.4;
        }
        .insight-detail-more-link em {
          margin-top: 0.66rem;
          display: inline-flex;
          font-style: normal;
          color: var(--primary);
          font-size: 0.84rem;
          font-weight: 600;
        }
        .insight-detail-back { margin-top: 2rem; }
        .insight-detail-back-link {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--primary);
          text-decoration: none;
        }
        .insight-detail-back-link:hover { color: #173b68; }
      `}</style>
    </>
  );
}
