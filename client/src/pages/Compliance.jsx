const FIRM_CREDENTIALS = [
  { label: 'Year of Establishment', value: '2003' },
  { label: 'Firm Registration No.', value: '012584C' },
  { label: 'RBI Unique Code', value: '000293' },
  { label: 'Peer Review Certificate No.', value: '014832' },
  { label: 'CAG Empanelment No.', value: 'CR3209' },
  { label: 'Category of Firm (ICAI)', value: 'I (One)' },
  { label: 'PAN No.', value: 'AAEFD6000D' },
  { label: 'GSTN No.', value: '09AAEFD6000D1Z1' },
  { label: 'Official Email', value: 'aditi.kapoor@dgc.ind.in' },
  { label: 'Head Office', value: 'Varanasi' },
  { label: 'Branch Offices', value: 'Kolkata, Delhi & Bokaro' },
];

export default function Compliance() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Compliance Information</h1>
          <p className="page-subtitle">
            Regulatory and compliance information for Dwivedi Gupta & Co.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container compliance-container">
          <h2 className="compliance-title">Firm Credentials & Statutory Details</h2>
          <p className="compliance-intro">
            Key registration and compliance information for reference. For verification copies or additional details, please contact our office directly.
          </p>
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
        .compliance-container { max-width: 980px; }
        .compliance-title {
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          color: var(--slate-800);
          margin-bottom: 0.6rem;
          text-align: center;
        }
        .compliance-intro {
          color: var(--text-muted);
          text-align: center;
          max-width: 760px;
          margin: 0 auto 1.5rem;
          line-height: 1.65;
        }
        .compliance-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.8rem;
        }
        @media (min-width: 640px) {
          .compliance-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .compliance-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .compliance-item {
          border: 1px solid var(--border);
          border-radius: 10px;
          background: var(--white);
          padding: 0.85rem 1rem;
          min-height: 88px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.3rem;
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
          margin-top: 1.25rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          text-align: center;
        }
      `}</style>
    </>
  );
}
