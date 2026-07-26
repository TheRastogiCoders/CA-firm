import { Link } from 'react-router-dom';
import PageCtaBand from '../components/PageCtaBand';
import { CONTACT_EMAIL, getMailtoHref } from '../data/contactInfo';

const openings = [
  {
    title: 'Chartered Accountant',
    count: '2 openings',
    tracks: ['Audit & Assurance', 'Income Tax Litigation'],
  },
  {
    title: 'Articled Assistant',
    count: '4 openings',
    tracks: ['CA'],
  },
  {
    title: 'Semi Qualified CA',
    count: '2 openings',
    tracks: ['Finance department', 'Audit department'],
  },
];

export default function Careers() {
  const applyHref = getMailtoHref(CONTACT_EMAIL, {
    subject: 'Application – Careers at Dwivedi Gupta & Co.',
  });

  return (
    <>
      <section className="page-hero careers-hero" aria-labelledby="careers-title">
        <div className="container">
          <span className="page-hero-kicker">Work With Us</span>
          <h1 id="careers-title" className="page-title">Careers</h1>
          <p className="page-subtitle">
            Join Dwivedi Gupta &amp; Co. — grow with a multi-city CA practice in tax, audit,
            finance, and advisory.
          </p>
        </div>
      </section>

      <section className="home-section careers-openings" aria-labelledby="careers-openings-title">
        <div className="container">
          <header className="careers-openings-head">
            <h2 id="careers-openings-title">Current Openings</h2>
            <p>
              Apply by emailing your resume to{' '}
              <a href={applyHref}>{CONTACT_EMAIL}</a>.
            </p>
          </header>

          <div className="careers-openings-grid">
            {openings.map((role, index) => (
              <article
                key={role.title}
                className="careers-opening-card reveal-always is-revealed"
                style={{ '--career-delay': `${index * 80}ms` }}
              >
                <div className="careers-opening-top">
                  <span className="careers-opening-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="careers-opening-count">{role.count}</span>
                </div>
                <h3>{role.title}</h3>
                <ul>
                  {role.tracks.map((track) => (
                    <li key={track}>
                      <span className="careers-opening-bullet" aria-hidden="true" />
                      <span>{track}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/contact?subject=Careers&role=${encodeURIComponent(role.title)}`}
                  className="careers-opening-apply"
                >
                  Apply now
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section careers-cta">
        <div className="container">
          <PageCtaBand
            title="Ready to apply?"
            description={`Send your resume to ${CONTACT_EMAIL}. We review applications on a rolling basis.`}
            primaryLabel="Contact Us"
            primaryTo="/contact"
            secondaryLabel="Meet Our Partners"
            secondaryTo="/team"
          />
        </div>
      </section>

      <style>{`
        .careers-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .careers-hero .page-subtitle {
          max-width: 38rem;
        }

        .careers-openings {
          padding-top: 2.5rem;
          padding-bottom: 1.5rem;
        }
        .careers-openings-head {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .careers-openings-head h2 {
          margin: 0 0 0.55rem;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: var(--slate-900);
          letter-spacing: -0.02em;
        }
        .careers-openings-head p {
          margin: 0 auto;
          max-width: 34rem;
          color: var(--slate-600);
          font-size: 1rem;
          line-height: 1.6;
        }
        .careers-openings-head a {
          font-weight: 600;
          color: var(--purple-700);
        }

        .careers-openings-grid {
          display: grid;
          gap: 0.9rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .careers-openings-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
          }
        }

        .careers-opening-card {
          display: flex;
          flex-direction: column;
          padding: 1.2rem 1.1rem 1.15rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          box-shadow: 0 10px 24px rgba(15, 39, 71, 0.07);
          animation: careers-card-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--career-delay, 0ms);
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .careers-opening-card:hover {
          border-color: rgba(31, 93, 150, 0.38);
          box-shadow: 0 14px 30px rgba(15, 39, 71, 0.12);
          transform: translateY(-3px);
        }
        .careers-opening-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }
        .careers-opening-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--purple-700);
          background: rgba(31, 79, 134, 0.1);
        }
        .careers-opening-count {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--purple-700);
          background: rgba(31, 93, 150, 0.1);
          border-radius: 999px;
          padding: 0.28rem 0.65rem;
        }
        .careers-opening-card h3 {
          margin: 0 0 0.75rem;
          font-size: 1.15rem;
          color: var(--slate-900);
          letter-spacing: -0.02em;
        }
        .careers-opening-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 0.45rem;
          flex: 1;
        }
        .careers-opening-card li {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.55rem 0.75rem;
          border-radius: 8px;
          background: rgba(248, 250, 252, 0.95);
          border: 1px solid rgba(148, 163, 184, 0.18);
          color: var(--slate-700);
          font-size: 0.92rem;
          font-weight: 600;
          line-height: 1.4;
        }
        .careers-opening-bullet {
          flex-shrink: 0;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background: var(--purple-600);
        }
        .careers-opening-apply {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          margin-top: 1rem;
          padding: 0.55rem 1rem;
          border-radius: 10px;
          border: 1px solid rgba(31, 93, 150, 0.28);
          background: rgba(31, 93, 150, 0.08);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--purple-700);
          text-decoration: none;
          cursor: pointer;
          pointer-events: auto;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
        }
        .careers-opening-apply:hover {
          background: rgba(31, 93, 150, 0.14);
          border-color: rgba(31, 93, 150, 0.45);
          color: var(--purple-700);
          transform: translateY(-1px);
        }
        .careers-opening-apply::after {
          content: '→';
          margin-left: 0.35rem;
          transition: transform 0.2s ease;
        }
        .careers-opening-apply:hover::after {
          transform: translateX(3px);
        }

        .careers-cta {
          padding-top: 0.5rem;
          padding-bottom: 2.5rem;
        }

        @keyframes careers-card-in {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .careers-opening-card {
            animation: none;
          }
          .careers-opening-card:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
