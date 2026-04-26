const FIRM_CREDENTIALS = [
  { label: 'Year of Establishment', value: '2003' },
  { label: 'Firm Registration No.', value: '012584C' },
  { label: 'Category of Firm (ICAI)', value: 'I (One)' },
  { label: 'Official Email', value: 'aditi.kapoor@dgc.ind.in' },
  { label: 'Head Office', value: 'Varanasi' },
  { label: 'Branch Offices', value: 'Kolkata, Delhi & Bokaro' },
];

export default function Compliance() {
  return (
    <>
      <section className="page-hero compliance-page-hero">
        <div className="container">
          <span className="page-hero-kicker">Regulatory Profile</span>
          <h1 className="page-title">Compliance Information</h1>
          <p className="page-subtitle">
            Core statutory and registration details of Dwivedi Gupta & Co. for reference and verification support.
          </p>
        </div>
      </section>
      <section className="section compliance-section">
        <div className="container compliance-container">
          <div className="compliance-head">
            <span className="compliance-head-kicker">Regulatory Records</span>
            <h2 className="compliance-title">Firm Credentials & Statutory Details</h2>
            <p className="compliance-intro">
            Key registration and compliance information for reference. For verification copies or additional details, please contact our office directly.
            </p>
          </div>
          <div className="compliance-grid">
            {FIRM_CREDENTIALS.map((item) => (
              <article key={item.label} className="compliance-item">
                <span className="compliance-label">{item.label}</span>
                <strong className="compliance-value">{item.value}</strong>
              </article>
            ))}
          </div>
          <p className="compliance-note">
            Last updated: 2026. Information is subject to updates as per regulatory changes.
          </p>
        </div>
      </section>
      <style>{`
        .compliance-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1000px 340px at 50% -120px, rgba(31, 93, 150, 0.2), transparent 64%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 58%, rgba(255, 255, 255, 0.98) 100%);
        }
        .compliance-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .compliance-page-hero::after { opacity: 0.1; }
        .compliance-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }
        .compliance-container { max-width: 1140px; }
        .compliance-head {
          text-align: center;
          max-width: 920px;
          margin: 0 auto 1.5rem;
        }
        .compliance-head-kicker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.34rem 0.78rem;
          border-radius: 999px;
          background: rgba(31, 93, 150, 0.12);
          color: var(--primary);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .compliance-title {
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          color: var(--slate-800);
          margin: 0.74rem 0 0;
          text-align: center;
        }
        .compliance-intro {
          color: var(--text-muted);
          text-align: center;
          max-width: 760px;
          margin: 0.64rem auto 0;
          line-height: 1.65;
        }
        .compliance-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.9rem;
        }
        @media (min-width: 640px) {
          .compliance-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .compliance-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .compliance-item {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 14px;
          background: #fff;
          padding: 0.95rem 1rem;
          min-height: 88px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.3rem;
          box-shadow: 0 8px 20px rgba(15, 39, 71, 0.07);
        }
        .compliance-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--slate-600);
          line-height: 1.4;
        }
        .compliance-value {
          font-size: 1rem;
          color: var(--slate-800);
          line-height: 1.35;
        }
        .compliance-note {
          margin-top: 1rem;
          font-size: 0.88rem;
          color: var(--text-muted);
          text-align: center;
        }
      `}</style>
    </>
  );
}
