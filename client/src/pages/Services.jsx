import { Link } from 'react-router-dom';
import { getAllServices } from '../data/servicesData';
import PageCtaBand from '../components/PageCtaBand';

export default function Services() {
  const services = getAllServices();

  return (
    <>
      <section className="page-hero services-simple-hero" aria-labelledby="services-page-title">
        <div className="container">
          <span className="page-hero-kicker">Services</span>
          <h1 id="services-page-title" className="page-title">
            Tax, Audit, GST &amp; Advisory
          </h1>
          <p className="page-subtitle">
            Clear scope and deliverables for businesses and institutions.
          </p>
          <div className="page-hero-actions">
            <Link to="/schedule-consultation" className="btn btn-primary">
              Schedule Consultation
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section services-simple-list" aria-labelledby="svc-list-title">
        <div className="container">
          <h2 id="svc-list-title" className="services-simple-heading">
            Our Services
          </h2>
          <div className="services-simple-grid">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="services-simple-card"
              >
                <span className="services-simple-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <span className="services-simple-more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section services-simple-cta">
        <div className="container">
          <PageCtaBand
            title="Not sure which service you need?"
            description="Tell us about your requirement. We will suggest the right scope and next steps."
          />
        </div>
      </section>

      <style>{`
        .services-simple-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .services-simple-hero .page-subtitle {
          max-width: 34rem;
        }
        .services-simple-hero .page-hero-actions {
          margin-top: 1.1rem;
        }

        .services-simple-list {
          padding-top: 2.5rem;
          padding-bottom: 2rem;
        }
        .services-simple-heading {
          margin: 0 0 1.25rem;
          text-align: center;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: var(--slate-900);
          letter-spacing: -0.02em;
        }
        .services-simple-grid {
          display: grid;
          gap: 0.9rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .services-simple-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .services-simple-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
          }
        }
        .services-simple-card {
          display: flex;
          flex-direction: column;
          padding: 1.05rem 1rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 12px;
          background: #fff;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 8px 22px rgba(15, 39, 71, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .services-simple-card:hover {
          transform: translateY(-2px);
          border-color: rgba(31, 93, 150, 0.34);
          box-shadow: 0 12px 28px rgba(15, 39, 71, 0.1);
          color: inherit;
        }
        .services-simple-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          margin-bottom: 0.55rem;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--purple-700);
          background: rgba(31, 79, 134, 0.1);
        }
        .services-simple-card h3 {
          margin: 0 0 0.4rem;
          font-size: 1.05rem;
          color: var(--slate-900);
          line-height: 1.3;
        }
        .services-simple-card p {
          margin: 0;
          flex: 1;
          color: var(--slate-600);
          font-size: 0.9rem;
          line-height: 1.55;
        }
        .services-simple-more {
          margin-top: 0.85rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--purple-700);
        }

        .services-simple-cta {
          padding-top: 0.5rem;
          padding-bottom: 2.5rem;
        }
      `}</style>
    </>
  );
}
