import { Link } from 'react-router-dom';
import PageCtaBand from '../components/PageCtaBand';

const industries = [
  {
    title: 'Manufacturing & Infrastructure',
    description: 'Tax incentives, GST, cost accounting, and audit for manufacturers and infrastructure projects.',
  },
  {
    title: 'Banking & Financial Institutions',
    description: 'RBI compliance, statutory and internal audit, and risk assurance for banks and NBFCs.',
  },
  {
    title: 'Real Estate & Construction',
    description: 'Project accounting, GST on construction, and regulatory support for developers and contractors.',
  },
  {
    title: 'Trading & Export',
    description: 'Export benefits, customs, multi-state GST, and inventory accounting for trading businesses.',
  },
  {
    title: 'Government & Public Sector',
    description: 'Government audits, scheme support, and compliance for PSUs and public bodies.',
  },
  {
    title: 'SMEs & Startups',
    description: 'Incorporation, tax incentives, GST, and ongoing compliance for growing businesses.',
  },
  {
    title: 'Non-Profit Organizations',
    description: 'Trust and society compliance, 80G/12A support, fund accounting, and audit.',
  },
];

export default function Industries() {
  return (
    <>
      <section className="page-hero industries-simple-hero" aria-labelledby="industries-page-title">
        <div className="container">
          <span className="page-hero-kicker">Industries</span>
          <h1 id="industries-page-title" className="page-title">
            Sectors We Serve
          </h1>
          <p className="page-subtitle">
            Tax, audit, and compliance support shaped by your industry rules and operating model.
          </p>
          <div className="page-hero-actions">
            <Link to="/services" className="btn btn-primary">
              View Services
            </Link>
            <Link to="/schedule-consultation" className="btn btn-secondary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section industries-simple-list" aria-labelledby="industries-list-title">
        <div className="container">
          <h2 id="industries-list-title" className="industries-simple-heading">
            Our Industry Focus
          </h2>
          <div className="industries-simple-grid">
            {industries.map((item, index) => (
              <article key={item.title} className="industries-simple-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section industries-simple-cta">
        <div className="container">
          <PageCtaBand
            title="Need support in your sector?"
            description="Tell us about your industry and requirements. We will outline the right scope and next steps."
          />
        </div>
      </section>

      <style>{`
        .industries-simple-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .industries-simple-hero .page-subtitle {
          max-width: 36rem;
        }
        .industries-simple-hero .page-hero-actions {
          margin-top: 1.1rem;
        }

        .industries-simple-list {
          padding-top: 2.5rem;
          padding-bottom: 2rem;
        }
        .industries-simple-heading {
          margin: 0 0 1.25rem;
          text-align: center;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: var(--slate-900);
          letter-spacing: -0.02em;
        }
        .industries-simple-grid {
          display: grid;
          gap: 0.85rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .industries-simple-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .industries-simple-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .industries-simple-card {
          padding: 1.05rem 1rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 8px 22px rgba(15, 39, 71, 0.06);
        }
        .industries-simple-card span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          margin-bottom: 0.5rem;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--purple-700);
          background: rgba(31, 79, 134, 0.1);
        }
        .industries-simple-card h3 {
          margin: 0 0 0.4rem;
          font-size: 1.05rem;
          color: var(--slate-900);
          line-height: 1.3;
        }
        .industries-simple-card p {
          margin: 0;
          color: var(--slate-600);
          font-size: 0.9rem;
          line-height: 1.55;
        }

        .industries-simple-cta {
          padding-top: 0.5rem;
          padding-bottom: 2.5rem;
        }
      `}</style>
    </>
  );
}
