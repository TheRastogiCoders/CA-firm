import { Link, useParams, Navigate } from 'react-router-dom';
import { getInsightBySlug, getAllInsights } from '../data/insightsData';
import PageCtaBand from '../components/PageCtaBand';

export default function InsightDetail() {
  const { slug } = useParams();
  const post = slug ? getInsightBySlug(slug) : null;

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const more = getAllInsights().filter((i) => i.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="page-hero insight-simple-hero" aria-labelledby="insight-title">
        <div className="container">
          <nav className="insight-simple-breadcrumb" aria-label="Breadcrumb">
            <Link to="/insights">Insights</Link>
            <span>/</span>
            <span>{post.category}</span>
          </nav>
          <h1 id="insight-title" className="page-title">
            {post.title}
          </h1>
          <p className="page-subtitle">{post.summary}</p>
          <p className="insight-simple-date">{post.dateDisplay}</p>
        </div>
      </section>

      <section className="home-section insight-simple-body">
        <div className="container insight-simple-container">
          <article>
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>

          {more.length > 0 && (
            <div className="insight-simple-more">
              <h2>More Insights</h2>
              <ul>
                {more.map((item) => (
                  <li key={item.slug}>
                    <Link to={`/insights/${item.slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <PageCtaBand
            title="Need help on this topic?"
            description="Share your situation and we will outline how we can assist."
          />

          <p className="insight-simple-back">
            <Link to="/insights">← All Insights</Link>
          </p>
        </div>
      </section>

      <style>{`
        .insight-simple-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .insight-simple-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          align-items: center;
          margin-bottom: 0.75rem;
          font-size: 0.82rem;
          color: var(--slate-500);
        }
        .insight-simple-breadcrumb a {
          color: var(--slate-600);
          text-decoration: none;
        }
        .insight-simple-breadcrumb a:hover {
          color: var(--purple-700);
        }
        .insight-simple-hero .page-subtitle {
          max-width: 40rem;
        }
        .insight-simple-date {
          margin: 0.85rem 0 0;
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--slate-500);
        }

        .insight-simple-body {
          padding-top: 2.25rem;
          padding-bottom: 2.5rem;
        }
        .insight-simple-container {
          max-width: 720px;
        }
        .insight-simple-container article p {
          margin: 0 0 1rem;
          font-size: 1.02rem;
          color: var(--slate-700);
          line-height: 1.75;
        }
        .insight-simple-container article p:last-child {
          margin-bottom: 0;
        }
        .insight-simple-more {
          margin: 2rem 0 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }
        .insight-simple-more h2 {
          margin: 0 0 0.75rem;
          font-size: 1.1rem;
          color: var(--slate-900);
        }
        .insight-simple-more ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 0.45rem;
        }
        .insight-simple-more a {
          color: var(--purple-700);
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
        }
        .insight-simple-more a:hover {
          text-decoration: underline;
        }
        .insight-simple-back {
          margin: 1.5rem 0 0;
        }
        .insight-simple-back a {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--purple-700);
          text-decoration: none;
        }
        .insight-simple-back a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
