import { Link } from 'react-router-dom';
import { CLIENT_LOGOS } from '../data/clientLogos';
import PageCtaBand from '../components/PageCtaBand';

const clientTypes = [
  'Corporates & Listed Companies',
  'MSMEs & Growing Businesses',
  'Startups',
  'Individuals & HNIs',
];

export default function Clients() {
  return (
    <>
      <section className="page-hero clients-simple-hero">
        <div className="container">
          <span className="page-hero-kicker">Clients</span>
          <h1 className="page-title">Organizations We Work With</h1>
          <p className="page-subtitle">
            Corporates, MSMEs, startups, and institutions across India.
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

      <section className="home-section clients-simple-section">
        <div className="container">
          <h2 className="clients-simple-heading">Client Network</h2>
          {CLIENT_LOGOS.length > 0 && (
            <div className="clients-simple-logos">
              {CLIENT_LOGOS.map((logo) => (
                <div key={logo.name} className="clients-simple-logo">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          <h2 className="clients-simple-heading clients-simple-heading-spaced">
            Who We Support
          </h2>
          <ul className="clients-simple-types">
            {clientTypes.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section clients-simple-cta">
        <div className="container">
          <PageCtaBand
            title="Ready to work with us?"
            description="Tell us about your requirements. We will outline scope and next steps."
          />
        </div>
      </section>

      <style>{`
        .clients-simple-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .clients-simple-hero .page-subtitle { max-width: 34rem; }
        .clients-simple-hero .page-hero-actions { margin-top: 1.1rem; }

        .clients-simple-section {
          padding-top: 2.5rem;
          padding-bottom: 1.5rem;
        }
        .clients-simple-heading {
          margin: 0 0 1rem;
          text-align: center;
          font-size: clamp(1.35rem, 2.8vw, 1.75rem);
          color: var(--slate-900);
          letter-spacing: -0.02em;
        }
        .clients-simple-heading-spaced {
          margin-top: 2.25rem;
        }
        .clients-simple-logos {
          display: grid;
          gap: 0.75rem;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (min-width: 640px) {
          .clients-simple-logos {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .clients-simple-logos {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        .clients-simple-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 88px;
          padding: 0.85rem 1rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 10px;
          background: #fff;
        }
        .clients-simple-logo img {
          max-width: 100%;
          max-height: 52px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        .clients-simple-types {
          display: grid;
          gap: 0.65rem;
          grid-template-columns: 1fr;
          list-style: none;
          margin: 0;
          padding: 0;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 640px) {
          .clients-simple-types {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .clients-simple-types li {
          padding: 0.85rem 1rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 10px;
          background: #fff;
          color: var(--slate-800);
          font-size: 0.95rem;
          font-weight: 600;
          text-align: center;
        }

        .clients-simple-cta {
          padding-top: 0.5rem;
          padding-bottom: 2.5rem;
        }
      `}</style>
    </>
  );
}
