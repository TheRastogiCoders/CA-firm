import { Link } from 'react-router-dom';

const supportMetrics = [
  { label: 'Audit Staff', value: '20' },
  { label: 'Finance & Consultancy', value: '10' },
  { label: 'Tax & Legal Section', value: '08' },
  { label: 'Government Schemes & Consultancy', value: '05' },
  { label: 'E.D.P. Operators', value: '7' },
  { label: 'Semi-skilled Staff/Peons', value: '10' },
];

export default function SupportTeam() {
  return (
    <>
      <section className="page-hero support-team-hero">
        <div className="container">
          <span className="page-hero-kicker">Support Team</span>
          <h1 className="page-title">Support Team Details</h1>
          <p className="page-subtitle">
            We will publish the complete Support Team structure and profiles here once you share the final content.
          </p>
          <div className="page-hero-actions">
            <Link to="/team" className="btn btn-secondary">Back to Partners</Link>
            <Link to="/team-members" className="btn btn-primary">View Team Members</Link>
          </div>
        </div>
      </section>

      <section className="section support-team-section">
        <div className="container support-team-container">
          <div className="support-team-head">
            <span className="support-team-kicker">Support Team Strength</span>
            <h2>Dedicated manpower across audit, advisory, tax, and execution support</h2>
            <p>
              Our support structure is designed to ensure timely execution, documentation quality, and smooth coordination
              for engagement delivery.
            </p>
          </div>

          <div className="support-team-grid">
            {supportMetrics.map((item) => (
              <article key={item.label} className="support-team-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <div className="support-team-note">
            <p>
              The firm has adequate manpower and infrastructure/equipment/hardware to undertake specialized assignments
              from Government, Semi-Government, Financial Institutions, Insurance Companies, Banks, and Corporate Sectors.
            </p>
          </div>

          <div className="support-team-cta">
            <p>Need a team structure aligned to your assignment scope?</p>
            <div>
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/schedule-consultation" className="btn btn-secondary">Schedule Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .support-team-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1000px 340px at 50% -120px, rgba(31, 93, 150, 0.2), transparent 64%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 58%, rgba(255, 255, 255, 0.98) 100%);
        }
        .support-team-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .support-team-hero::after { opacity: 0.1; }
        .support-team-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }
        .support-team-container {
          max-width: 1140px;
        }
        .support-team-head {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 1rem;
        }
        .support-team-kicker {
          display: inline-flex;
          padding: 0.34rem 0.78rem;
          border-radius: 999px;
          background: rgba(31, 93, 150, 0.12);
          color: var(--primary);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .support-team-head h2 {
          margin: 0.64rem 0 0;
          color: var(--slate-900);
          font-size: clamp(1.38rem, 2.7vw, 1.9rem);
          line-height: 1.3;
        }
        .support-team-head p {
          margin: 0.62rem 0 0;
          color: var(--slate-600);
          line-height: 1.62;
          font-size: 0.95rem;
        }
        .support-team-grid {
          display: grid;
          gap: 0.85rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 720px) {
          .support-team-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .support-team-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .support-team-card {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 8px 20px rgba(15, 39, 71, 0.07);
          padding: 0.95rem;
          text-align: center;
        }
        .support-team-card strong {
          display: block;
          color: var(--purple-700);
          font-size: 1.36rem;
          line-height: 1.2;
        }
        .support-team-card span {
          display: block;
          margin-top: 0.25rem;
          color: var(--slate-700);
          font-size: 0.9rem;
          line-height: 1.45;
          font-weight: 600;
        }
        .support-team-note {
          margin-top: 1rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 14px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          box-shadow: 0 8px 20px rgba(15, 39, 71, 0.05);
          padding: 1rem;
        }
        .support-team-note p {
          margin: 0;
          color: var(--slate-700);
          line-height: 1.66;
          font-size: 0.94rem;
          text-align: center;
        }
        .support-team-cta {
          margin-top: 1rem;
          border: 1px solid rgba(140, 183, 220, 0.3);
          border-radius: 18px;
          background: linear-gradient(135deg, #0f2747 0%, #173b68 52%, #1f5d96 100%);
          color: #fff;
          padding: 1.65rem 1rem;
          text-align: center;
        }
        .support-team-cta p {
          margin: 0;
          color: rgba(240, 248, 255, 0.92);
          font-size: 1rem;
          line-height: 1.58;
        }
        .support-team-cta div {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .support-team-cta .btn-secondary {
          border-color: rgba(220, 236, 252, 0.48);
          color: #f8fcff;
          background: transparent;
        }
      `}</style>
    </>
  );
}
