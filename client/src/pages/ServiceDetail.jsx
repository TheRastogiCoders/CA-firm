import { Link, useParams, Navigate } from 'react-router-dom';
import { getServiceBySlug, getRelatedServices } from '../data/servicesData';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = getRelatedServices(service.slug, 3);

  return (
    <>
      <section className="page-hero service-detail-page-hero" aria-labelledby="service-detail-title">
        <div className="container">
          <nav className="service-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>{service.title}</span>
          </nav>
          <span className="page-hero-kicker service-detail-kicker">Service Detail</span>
          <h1 id="service-detail-title" className="page-title service-detail-title">{service.title}</h1>
          <p className="page-subtitle service-detail-intro">{service.shortDescription}</p>
          <div className="page-hero-actions service-detail-actions">
            <Link to="/schedule-consultation" className="btn btn-primary">Schedule Consultation</Link>
            <Link to="/contact" className="btn btn-secondary">Talk to Our Team</Link>
          </div>
        </div>
      </section>

      <section className="home-section service-detail-content" aria-labelledby="service-detail-overview">
        <div className="container">
          <div className="service-detail-layout">
            <article className="service-detail-panel">
              <h2 id="service-detail-overview">Overview</h2>
              <p>{service.longDescription}</p>
            </article>

            <aside className="service-detail-panel service-detail-panel-side">
              <h3>Engagement Snapshot</h3>
              <ul>
                <li>Partner-led supervision and review</li>
                <li>Structured timeline and milestone updates</li>
                <li>Documentation and compliance-first execution</li>
                <li>Cross-functional support for related services</li>
              </ul>
            </aside>
          </div>

          <div className="service-detail-deliverables">
            <div className="about-section-head">
              <span className="about-section-head-kicker">Key Deliverables</span>
              <h2>What we deliver under {service.title}</h2>
            </div>
            <div className="service-detail-deliverable-grid">
              {service.keyAreas.map((area, index) => (
                <article key={area} className="service-detail-deliverable-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{area}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="service-detail-related">
            <div className="about-section-head">
              <span className="about-section-head-kicker">Explore More</span>
              <h2>Related Services</h2>
            </div>
            <div className="service-detail-related-grid">
              {related.map((item, index) => (
                <Link key={item.slug} to={`/services/${item.slug}`} className="service-detail-related-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.shortDescription}</p>
                  <em>Open details →</em>
                </Link>
              ))}
            </div>
          </div>

          <div className="service-detail-final-cta">
            <p>Need a combined scope with {service.title} and related services? Let us design the right engagement structure for you.</p>
            <div>
              <Link to="/schedule-consultation" className="btn btn-primary">Schedule Consultation</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .service-detail-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1100px 360px at 50% -120px, rgba(31, 93, 150, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 56%, rgba(255, 255, 255, 0.98) 100%);
        }
        .service-detail-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .service-detail-page-hero::after {
          opacity: 0.12;
          filter: grayscale(8%) saturate(95%);
        }
        .service-detail-page-hero .container {
          max-width: 1220px;
          text-align: center;
        }
        .service-detail-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 0.48rem;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          color: var(--slate-600);
        }
        .service-detail-breadcrumb a {
          color: var(--slate-600);
          text-decoration: none;
        }
        .service-detail-kicker { margin-top: 0.82rem; }
        .service-detail-title {
          max-width: 920px;
          margin-left: auto;
          margin-right: auto;
        }
        .service-detail-intro {
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }
        .service-detail-actions {
          margin-top: 1.2rem;
          justify-content: center;
        }
        .service-detail-content {
          background: linear-gradient(180deg, #fff 0%, #f7fbff 100%);
        }
        .service-detail-layout {
          display: grid;
          gap: 0.8rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 980px) {
          .service-detail-layout {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }
        .service-detail-panel {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: #fff;
          padding: 1rem;
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.06);
        }
        .service-detail-panel h2,
        .service-detail-panel h3 {
          margin: 0;
          color: var(--slate-900);
          font-size: 1.22rem;
        }
        .service-detail-panel p {
          margin: 0.65rem 0 0;
          color: var(--slate-700);
          font-size: 0.96rem;
          line-height: 1.68;
        }
        .service-detail-panel-side ul {
          margin: 0.65rem 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.42rem;
        }
        .service-detail-panel-side li {
          position: relative;
          padding-left: 0.86rem;
          color: var(--slate-700);
          font-size: 0.89rem;
          line-height: 1.56;
        }
        .service-detail-panel-side li::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 0.54em;
          background: var(--purple-500);
        }
        .service-detail-deliverables,
        .service-detail-related {
          margin-top: 1.15rem;
        }
        .service-detail-deliverables .about-section-head,
        .service-detail-related .about-section-head {
          text-align: center;
          margin-bottom: 0.9rem;
        }
        .service-detail-deliverables .about-section-head h2,
        .service-detail-related .about-section-head h2 {
          display: block;
          width: 100%;
          margin: 0.2rem auto 0;
          font-size: clamp(1.5rem, 2.8vw, 2rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--slate-900);
        }
        .service-detail-deliverable-grid,
        .service-detail-related-grid {
          display: grid;
          gap: 0.74rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .service-detail-deliverable-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .service-detail-related-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .service-detail-deliverable-card {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 12px;
          background: #fff;
          padding: 0.86rem;
        }
        .service-detail-deliverable-card span {
          color: var(--purple-700);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          font-weight: 700;
        }
        .service-detail-deliverable-card p {
          margin: 0.4rem 0 0;
          color: var(--slate-700);
          font-size: 0.9rem;
          line-height: 1.56;
        }
        .service-detail-related-card {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 13px;
          background: #fff;
          padding: 0.9rem;
          text-decoration: none;
          color: inherit;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .service-detail-related-card:hover {
          transform: translateY(-2px);
          border-color: rgba(31, 93, 150, 0.36);
          box-shadow: 0 12px 28px rgba(15, 39, 71, 0.1);
        }
        .service-detail-related-card span {
          color: var(--purple-700);
          font-size: 0.74rem;
          letter-spacing: 0.12em;
          font-weight: 700;
        }
        .service-detail-related-card h3 {
          margin: 0.38rem 0 0;
          color: var(--slate-900);
          font-size: 1rem;
          line-height: 1.35;
        }
        .service-detail-related-card p {
          margin: 0.45rem 0 0;
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.52;
        }
        .service-detail-related-card em {
          margin-top: 0.7rem;
          display: inline-flex;
          font-style: normal;
          color: var(--purple-700);
          font-weight: 600;
          font-size: 0.86rem;
        }
        .service-detail-final-cta {
          margin-top: 1.15rem;
          border: 1px solid rgba(140, 183, 220, 0.3);
          border-radius: 18px;
          background: linear-gradient(135deg, #0f2747 0%, #173b68 52%, #1f5d96 100%);
          color: #fff;
          padding: 1.8rem 1rem;
          text-align: center;
        }
        .service-detail-final-cta p {
          margin: 0;
          color: rgba(240, 248, 255, 0.92);
          font-size: 1rem;
          line-height: 1.58;
        }
        .service-detail-final-cta div {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .service-detail-final-cta .btn-secondary {
          border-color: rgba(220, 236, 252, 0.48);
          color: #f8fcff;
          background: transparent;
        }
      `}</style>
    </>
  );
}
