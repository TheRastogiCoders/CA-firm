export default function PrivacyPolicy() {
  const sections = [
    {
      title: 'Information We Collect',
      points: [
        'Basic contact details such as name, email address, phone number, and organization details when you submit forms.',
        'Engagement information you voluntarily share regarding accounting, taxation, audit, or advisory requirements.',
        'Technical website usage data such as browser type, device details, pages visited, and approximate location for analytics.',
      ],
    },
    {
      title: 'How We Use Your Information',
      points: [
        'To respond to consultation requests, service inquiries, and support communications.',
        'To evaluate requirements, prepare proposals, and deliver professional services under agreed scope.',
        'To improve website performance, content relevance, and client communication quality.',
      ],
    },
    {
      title: 'Data Protection & Security',
      points: [
        'We apply administrative, technical, and organizational safeguards to protect personal information from unauthorized access.',
        'Access to personal information is restricted to authorized team members and service partners on a need-to-know basis.',
        'Information retention periods are aligned with legal, regulatory, and professional record-keeping requirements.',
      ],
    },
    {
      title: 'Your Rights',
      points: [
        'You may request access, correction, or deletion of personal information where legally permissible.',
        'You may withdraw consent for non-essential communication at any time by contacting us directly.',
        'For privacy requests, email our support team with subject line: "Privacy Request".',
      ],
    },
  ];

  return (
    <>
      <section className="page-hero privacy-page-hero">
        <div className="container">
          <span className="page-hero-kicker">Data Protection</span>
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">
            How Dwivedi Gupta & Co. collects, uses, stores, and safeguards information shared through our website and services.
          </p>
        </div>
      </section>
      <section className="section privacy-section">
        <div className="container privacy-container">
          <div className="privacy-summary">
            <h2>Our Privacy Commitment</h2>
            <p>
              We are committed to responsible data handling aligned with professional ethics, confidentiality obligations,
              and applicable data protection laws. This policy applies to website interactions and client communications.
            </p>
          </div>
          <div className="privacy-grid">
            {sections.map((section) => (
              <article key={section.title} className="privacy-card">
                <h3>{section.title}</h3>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="privacy-footer-note">
            <p>Last updated: April 2026. Policy content may be revised to reflect legal or operational updates.</p>
          </div>
        </div>
      </section>
      <style>{`
        .privacy-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1000px 340px at 50% -120px, rgba(31, 93, 150, 0.2), transparent 64%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 58%, rgba(255, 255, 255, 0.98) 100%);
        }
        .privacy-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .privacy-page-hero::after { opacity: 0.1; }
        .privacy-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }
        .privacy-container {
          max-width: 1140px;
        }
        .privacy-summary {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 1.6rem;
        }
        .privacy-summary h2 {
          margin: 0;
          color: var(--slate-900);
          font-size: clamp(1.42rem, 2.8vw, 1.96rem);
        }
        .privacy-summary p {
          margin: 0.68rem 0 0;
          color: var(--slate-600);
          font-size: 0.96rem;
          line-height: 1.64;
        }
        .privacy-grid {
          display: grid;
          gap: 0.95rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 980px) {
          .privacy-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .privacy-card {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 16px;
          background: #fff;
          padding: 1rem;
          box-shadow: 0 10px 26px rgba(15, 39, 71, 0.08);
        }
        .privacy-card h3 {
          margin: 0;
          color: var(--slate-900);
          font-size: 1.06rem;
        }
        .privacy-card ul {
          margin: 0.68rem 0 0;
          padding-left: 1rem;
          display: grid;
          gap: 0.46rem;
        }
        .privacy-card li {
          color: var(--slate-700);
          font-size: 0.9rem;
          line-height: 1.55;
        }
        .privacy-footer-note {
          margin-top: 1rem;
          text-align: center;
        }
        .privacy-footer-note p {
          margin: 0;
          color: var(--slate-600);
          font-size: 0.88rem;
        }
      `}</style>
    </>
  );
}
