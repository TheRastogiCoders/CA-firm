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
      {/* Hero */}
      <section className="hero hero-service-detail" aria-labelledby="service-detail-title">
        <div className="hero-bg">
          <div className="hero-bg-image" />
          <div className="hero-overlay hero-overlay-base" />
          <div className="hero-overlay hero-overlay-gradient" />
          <div className="hero-vignette" />
        </div>
        <div className="hero-content">
          <div className="container hero-container">
            <nav className="svc-detail-breadcrumb" aria-label="Breadcrumb">
              <Link to="/services">Services</Link>
              <span className="svc-detail-breadcrumb-sep" aria-hidden="true">/</span>
              <span>{service.title}</span>
            </nav>
            <div className="hero-accent" />
            <h1 id="service-detail-title" className="hero-title hero-title-sm">{service.title}</h1>
            <p className="hero-desc hero-desc-sm">{service.shortDescription}</p>
            <div className="hero-cta">
              <Link to="/schedule-consultation" className="hero-btn hero-btn-primary">Schedule Consultation</Link>
              <Link to="/contact" className="hero-btn hero-btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="home-section svc-detail-content" aria-labelledby="svc-detail-main">
        <div className="container">
          <div className="svc-detail-main">
            <h2 id="svc-detail-main" className="svc-detail-heading">Overview</h2>
            <p className="svc-detail-body">{service.longDescription}</p>

            <h2 className="svc-detail-heading">What We Offer</h2>
            <ul className="svc-detail-areas">
              {service.keyAreas.map((area, i) => (
                <li key={i}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Related services */}
          <div className="svc-detail-related">
            <div className="services-header">
              <span className="services-eyebrow">Explore More</span>
              <div className="services-accent" />
              <h2 className="services-title">Related Services</h2>
              <p className="services-intro">
                Services that often go hand-in-hand with {service.title}.
              </p>
            </div>
            <div className="home-services-grid svc-detail-related-grid">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/services/${r.slug}`}
                  className="home-service-card svc-detail-related-card"
                >
                  <div className="service-card-accent" />
                  <h3>{r.title}</h3>
                  <p>{r.shortDescription}</p>
                  <span className="svc-detail-related-link">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="services-cta services-cta-block">
            <p className="services-cta-text">
              Want to discuss {service.title} or a custom scope? Get in touch.
            </p>
            <div className="services-cta-buttons">
              <Link to="/schedule-consultation" className="btn btn-primary">Schedule Consultation</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-service-detail .hero-nav { display: none; }
        .hero-service-detail {
          min-height: 42vh;
          min-height: 42dvh;
          padding: 3.5rem 0 4rem;
        }
        @media (max-width: 767px) {
          .hero-service-detail { min-height: 38vh; min-height: 38dvh; padding: 2.5rem 0 3rem; }
        }
        .hero-container { text-align: left; }
        .svc-detail-breadcrumb {
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        .svc-detail-breadcrumb a {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
        }
        .svc-detail-breadcrumb a:hover { color: var(--white); }
        .svc-detail-breadcrumb-sep {
          margin: 0 0.5rem;
          color: rgba(255, 255, 255, 0.5);
        }
        .svc-detail-breadcrumb span:last-child { color: var(--white); }
        .hero-service-detail .hero-accent { margin-left: 0; margin-right: 0; }
        .hero-title-sm { font-size: clamp(1.75rem, 4vw, 2.5rem); margin-bottom: 1rem; }
        .hero-desc-sm { margin-bottom: 1.5rem; }
        .svc-detail-content { padding: 4rem 0; background: linear-gradient(180deg, var(--white) 0%, var(--slate-50) 100%); }
        @media (min-width: 768px) { .svc-detail-content { padding: 5rem 0; } }
        .svc-detail-main { max-width: 720px; margin-bottom: 3rem; }
        .svc-detail-heading {
          font-size: 1.375rem;
          font-weight: 600;
          color: var(--slate-800);
          margin: 0 0 1rem 0;
        }
        .svc-detail-heading:not(:first-child) { margin-top: 2.5rem; }
        .svc-detail-body {
          font-size: 1.0625rem;
          color: var(--slate-700);
          line-height: 1.75;
          margin: 0;
        }
        .svc-detail-areas {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 1rem;
          color: var(--slate-700);
          line-height: 1.7;
        }
        .svc-detail-areas li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .svc-detail-areas li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 6px;
          height: 6px;
          background: var(--purple-600);
          border-radius: 50%;
        }
        .svc-detail-related { margin-top: 2rem; }
        .svc-detail-related-grid { margin-top: 1.5rem; }
        .svc-detail-related-card {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .svc-detail-related-card:hover { border-color: var(--purple-400); }
        .svc-detail-related-link {
          display: inline-block;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--purple-600);
          margin-top: 0.75rem;
        }
        .svc-detail-related-card:hover .svc-detail-related-link { color: var(--purple-700); }
        .svc-detail-related-card .service-number { display: none; }
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
