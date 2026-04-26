export default function Disclaimer() {
  const disclaimerSections = [
    {
      title: 'Informational Purpose Only',
      text: 'Content published on this website is intended for general informational use and should not be interpreted as professional tax, legal, audit, or financial advice for any specific case.',
    },
    {
      title: 'No Solicitation',
      text: 'Nothing on this website is intended to solicit clients in violation of professional standards. Any reference to services, sectors, or capabilities is descriptive in nature.',
    },
    {
      title: 'Accuracy of Information',
      text: 'We endeavor to keep information accurate and current; however, we do not warrant completeness, reliability, or timeliness of all content at all times.',
    },
    {
      title: 'Professional Advice Requirement',
      text: 'Before acting on any information from this website, users should obtain direct professional advice based on their facts, records, and applicable regulations.',
    },
    {
      title: 'Limitation of Liability',
      text: 'Dwivedi Gupta & Co., its partners, and team members are not responsible for any loss arising from reliance on website content without formal professional consultation.',
    },
  ];

  return (
    <>
      <section className="page-hero disclaimer-page-hero">
        <div className="container">
          <span className="page-hero-kicker">Legal Notice</span>
          <h1 className="page-title">Disclaimer</h1>
          <p className="page-subtitle">
            Important legal notice regarding website content, communication, and professional reliance.
          </p>
        </div>
      </section>
      <section className="section disclaimer-section">
        <div className="container disclaimer-container">
          <div className="disclaimer-intro">
            <h2>Scope and Legal Clarification</h2>
            <p>
              This disclaimer is intended to set clear expectations around the use of website materials and communication.
              For case-specific matters, please consult us through a formal engagement process.
            </p>
          </div>
          <div className="disclaimer-grid">
            {disclaimerSections.map((section) => (
              <article key={section.title} className="disclaimer-card">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </article>
            ))}
          </div>
          <p className="disclaimer-updated">Last updated: April 2026.</p>
        </div>
      </section>
      <style>{`
        .disclaimer-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1000px 340px at 50% -120px, rgba(31, 93, 150, 0.2), transparent 64%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 58%, rgba(255, 255, 255, 0.98) 100%);
        }
        .disclaimer-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .disclaimer-page-hero::after { opacity: 0.1; }
        .disclaimer-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }
        .disclaimer-container {
          max-width: 1140px;
        }
        .disclaimer-intro {
          text-align: center;
          max-width: 920px;
          margin: 0 auto 1.6rem;
        }
        .disclaimer-intro h2 {
          margin: 0;
          color: var(--slate-900);
          font-size: clamp(1.42rem, 2.8vw, 1.96rem);
        }
        .disclaimer-intro p {
          margin: 0.68rem 0 0;
          color: var(--slate-600);
          font-size: 0.96rem;
          line-height: 1.64;
        }
        .disclaimer-grid {
          display: grid;
          gap: 0.95rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 980px) {
          .disclaimer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .disclaimer-card {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 16px;
          background: #fff;
          padding: 1rem;
          box-shadow: 0 10px 26px rgba(15, 39, 71, 0.08);
        }
        .disclaimer-card h3 {
          margin: 0;
          color: var(--slate-900);
          font-size: 1.06rem;
        }
        .disclaimer-card p {
          margin: 0.6rem 0 0;
          color: var(--slate-700);
          line-height: 1.6;
          font-size: 0.9rem;
        }
        .disclaimer-updated {
          margin: 1rem 0 0;
          text-align: center;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
      `}</style>
    </>
  );
}
