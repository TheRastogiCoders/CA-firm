export default function Terms() {
  const termsSections = [
    {
      title: 'Website Usage',
      points: [
        'You may browse this website for lawful informational purposes only.',
        'Any misuse, unauthorized access attempt, or disruptive activity is strictly prohibited.',
        'Content may be updated without prior notice as services and regulations evolve.',
      ],
    },
    {
      title: 'Professional Engagement',
      points: [
        'Website content is general information and does not constitute professional advice by itself.',
        'Formal advisory, audit, or compliance services begin only after a confirmed engagement arrangement.',
        'Scope, deliverables, timelines, and fees are governed by individual engagement terms.',
      ],
    },
    {
      title: 'Intellectual Property',
      points: [
        'Website design, content, brand assets, and publications are the property of Dwivedi Gupta & Co. unless stated otherwise.',
        'No part of this website may be copied, reproduced, or redistributed for commercial use without prior written consent.',
        'Third-party names, trademarks, and references remain the property of their respective owners.',
      ],
    },
    {
      title: 'Liability & Jurisdiction',
      points: [
        'We make reasonable efforts to keep information accurate and current, but no absolute warranty is implied.',
        'Dwivedi Gupta & Co. is not liable for direct or indirect loss arising from use of website information.',
        'These terms are governed by applicable Indian laws and subject to jurisdiction agreed under engagement terms.',
      ],
    },
  ];

  return (
    <>
      <section className="page-hero terms-page-hero">
        <div className="container">
          <span className="page-hero-kicker">Website Terms</span>
          <h1 className="page-title">Terms & Conditions</h1>
          <p className="page-subtitle">
            Terms governing use of this website, informational content, and interactions with Dwivedi Gupta & Co.
          </p>
        </div>
      </section>
      <section className="section terms-section">
        <div className="container terms-container">
          <div className="terms-summary">
            <h2>Terms of Access and Use</h2>
            <p>
              By accessing this website, you agree to these terms. If you do not agree, please discontinue use of the website.
              These terms are intended to establish clarity, transparency, and responsible usage standards.
            </p>
          </div>
          <div className="terms-grid">
            {termsSections.map((section) => (
              <article key={section.title} className="terms-card">
                <h3>{section.title}</h3>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="terms-note">
            Last updated: April 2026. We recommend reviewing this page periodically for updates.
          </p>
        </div>
      </section>
      <style>{`
        .terms-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1000px 340px at 50% -120px, rgba(31, 93, 150, 0.2), transparent 64%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 58%, rgba(255, 255, 255, 0.98) 100%);
        }
        .terms-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .terms-page-hero::after { opacity: 0.1; }
        .terms-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }
        .terms-container {
          max-width: 1140px;
        }
        .terms-summary {
          text-align: center;
          max-width: 920px;
          margin: 0 auto 1.6rem;
        }
        .terms-summary h2 {
          margin: 0;
          color: var(--slate-900);
          font-size: clamp(1.42rem, 2.8vw, 1.96rem);
        }
        .terms-summary p {
          margin: 0.68rem 0 0;
          color: var(--slate-600);
          font-size: 0.96rem;
          line-height: 1.64;
        }
        .terms-grid {
          display: grid;
          gap: 0.95rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 980px) {
          .terms-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .terms-card {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 16px;
          background: #fff;
          padding: 1rem;
          box-shadow: 0 10px 26px rgba(15, 39, 71, 0.08);
        }
        .terms-card h3 {
          margin: 0;
          color: var(--slate-900);
          font-size: 1.06rem;
        }
        .terms-card ul {
          margin: 0.68rem 0 0;
          padding-left: 1rem;
          display: grid;
          gap: 0.46rem;
        }
        .terms-card li {
          color: var(--slate-700);
          font-size: 0.9rem;
          line-height: 1.55;
        }
        .terms-note {
          margin: 1rem 0 0;
          text-align: center;
          color: var(--slate-600);
          font-size: 0.88rem;
        }
      `}</style>
    </>
  );
}
