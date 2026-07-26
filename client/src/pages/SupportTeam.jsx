import { Link } from 'react-router-dom';
import PageCtaBand from '../components/PageCtaBand';

const supportMetrics = [
  { label: 'Audit Staff', value: '20' },
  { label: 'Finance & Consultancy', value: '10' },
  { label: 'Tax & Legal', value: '8' },
  { label: 'Government Schemes', value: '5' },
  { label: 'EDP Operators', value: '7' },
  { label: 'Support Staff', value: '10' },
];

export default function SupportTeam() {
  return (
    <>
      <section className="page-hero support-simple-hero">
        <div className="container">
          <span className="page-hero-kicker">Support Team</span>
          <h1 className="page-title">Support Strength</h1>
          <p className="page-subtitle">
            Dedicated manpower across audit, tax, advisory, and execution support.
          </p>
          <div className="page-hero-actions">
            <Link to="/team" className="btn btn-primary">
              Partners
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section support-simple-section">
        <div className="container">
          <div className="support-simple-grid">
            {supportMetrics.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section support-simple-cta">
        <div className="container">
          <PageCtaBand
            title="Need a team aligned to your assignment?"
            description="Contact us to discuss scope, staffing, and timelines."
          />
        </div>
      </section>

      <style>{`
        .support-simple-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .support-simple-hero .page-subtitle { max-width: 34rem; }
        .support-simple-hero .page-hero-actions { margin-top: 1.1rem; }

        .support-simple-section { padding-top: 2.5rem; padding-bottom: 1.5rem; }
        .support-simple-grid {
          display: grid;
          gap: 0.75rem;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (min-width: 768px) {
          .support-simple-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .support-simple-grid article {
          text-align: center;
          padding: 1rem 0.75rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 10px;
          background: #fff;
        }
        .support-simple-grid strong {
          display: block;
          font-size: 1.35rem;
          color: var(--purple-700);
          line-height: 1.2;
        }
        .support-simple-grid span {
          display: block;
          margin-top: 0.3rem;
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--slate-600);
        }

        .support-simple-cta { padding-top: 0.5rem; padding-bottom: 2.5rem; }
      `}</style>
    </>
  );
}
