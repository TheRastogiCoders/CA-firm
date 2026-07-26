import { Link } from 'react-router-dom';
import { getAllServices } from '../data/servicesData';
import PageCtaBand from '../components/PageCtaBand';
import { SERVICE_ICONS } from '../components/ServiceIcons';

export default function Services() {
  const services = getAllServices();

  return (
    <>
      <section className="page-hero services-simple-hero" aria-labelledby="services-page-title">
        <div className="container">
          <span className="page-hero-kicker">Services</span>
          <h1 id="services-page-title" className="page-title">
            Our Service Verticals
          </h1>
          <p className="page-subtitle">
            Tax, Assurance, Finance &amp; Advisory — six focused practice areas for businesses,
            institutions, and startups.
          </p>
        </div>
      </section>

      <section className="home-section services-simple-list" aria-labelledby="svc-list-title">
        <div className="container">
          <h2 id="svc-list-title" className="services-simple-heading">
            Our Services
          </h2>
          <div className="services-simple-grid">
            {services.map((service) => {
              const Icon = SERVICE_ICONS[service.slug];
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="services-simple-card"
                >
                  {Icon && (
                    <span className="services-simple-icon" aria-hidden="true">
                      <Icon />
                    </span>
                  )}
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <span className="services-simple-more">Learn more →</span>
                </Link>
              );
            })}
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
          max-width: 38rem;
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
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          text-decoration: none;
          color: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
          min-height: 100%;
        }
        .services-simple-card:hover {
          border-color: rgba(31, 93, 150, 0.4);
          box-shadow: 0 10px 24px rgba(15, 39, 71, 0.1);
          transform: translateY(-2px);
          color: inherit;
        }
        .services-simple-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3.35rem;
          height: 3.35rem;
          margin-bottom: 0.85rem;
          border-radius: 12px;
          background: rgba(31, 93, 150, 0.1);
          color: var(--purple-700);
        }
        .services-simple-icon svg {
          width: 1.7rem;
          height: 1.7rem;
        }
        .services-simple-card h3 {
          margin: 0 0 0.45rem;
          font-size: 1.05rem;
          color: var(--slate-900);
          line-height: 1.35;
        }
        .services-simple-card p {
          margin: 0;
          flex: 1;
          font-size: 0.92rem;
          color: var(--slate-600);
          line-height: 1.55;
        }
        .services-simple-more {
          margin-top: 0.85rem;
          font-size: 0.8rem;
          font-weight: 700;
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
