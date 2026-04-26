import { Link } from 'react-router-dom';
import { CLIENT_LOGOS } from '../data/clientLogos';

const clientCategories = [
  {
    title: 'Corporates & Listed Companies',
    description: 'Statutory audit, tax planning, and compliance for listed and unlisted corporates.',
  },
  {
    title: 'MSMEs & Growing Businesses',
    description: 'Bookkeeping, GST, and annual compliance tailored for small and medium enterprises.',
  },
  {
    title: 'Startups',
    description: 'Incorporation, funding compliance, and startup-specific tax and regulatory support.',
  },
  {
    title: 'Individuals & HNIs',
    description: 'Personal tax planning, ITR filing, and wealth management compliance.',
  },
];

const testimonials = [
  { quote: 'Professional, timely, and always available. Our go-to firm—DWIVEDI GUPTA & Co.—for the last five years.', author: 'Client, Manufacturing' },
  { quote: 'They simplified our GST and compliance. Highly recommend for startups.', author: 'Client, Technology' },
];

const relationshipHighlights = [
  { label: 'Client Retention', value: '92%+' },
  { label: 'Industries Served', value: '15+' },
  { label: 'Multi-City Support', value: '4 Offices' },
  { label: 'Average Response Time', value: '< 24 Hrs' },
];

const engagementSteps = [
  {
    title: 'Discovery & Requirement Mapping',
    description: 'We understand your business model, compliance pain points, timelines, and reporting expectations.',
  },
  {
    title: 'Custom Engagement Plan',
    description: 'A practical scope and service plan is prepared with clear deliverables, ownership, and milestones.',
  },
  {
    title: 'Execution & Compliance Monitoring',
    description: 'Our team executes with regular checkpoints, timely filings, and proactive updates for leadership.',
  },
  {
    title: 'Review & Ongoing Advisory',
    description: 'We close each cycle with performance review, improvement pointers, and year-round advisory support.',
  },
];

const faqs = [
  {
    question: 'Do you work with businesses outside your office cities?',
    answer: 'Yes. We serve clients across India using a hybrid model of remote collaboration and scheduled on-site support.',
  },
  {
    question: 'Can you handle both audit and tax for the same organization?',
    answer: 'Yes. Depending on engagement requirements and independence norms, we support both functions through dedicated teams.',
  },
  {
    question: 'What is the usual onboarding timeline?',
    answer: 'Most engagements are onboarded within 3-7 working days after scope finalization and documentation.',
  },
];

export default function Clients() {
  return (
    <>
      <section className="page-hero clients-page-hero">
        <div className="container">
          <span className="page-hero-kicker">Trusted Partnerships</span>
          <h1 className="page-title">Client relationships built on consistency and trust</h1>
          <p className="page-subtitle">
            We support corporates, MSMEs, startups, and institutions with partner-led execution across audit, tax, and compliance functions.
          </p>
          <div className="page-hero-actions">
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
            <Link to="/schedule-consultation" className="btn btn-secondary">Schedule Consultation</Link>
          </div>
        </div>
      </section>

      <section className="home-section clients-logos-section">
        <div className="container">
          <div className="clients-section-head">
            <span className="clients-section-kicker">Client Network</span>
            <h2>Organizations We Work With</h2>
            <p>A broad client base across sectors and growth stages, supported with long-term advisory relationships.</p>
          </div>
          {CLIENT_LOGOS.length > 0 && (
            <div className="client-logos-marquee" aria-hidden="true">
              <div className="client-logos-track">
                {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                  <div key={i} className="client-logo-item">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="client-logo-img"
                      loading="lazy"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="home-section clients-categories-section">
        <div className="container">
          <div className="clients-section-head">
            <span className="clients-section-kicker">Who We Work With</span>
            <h2>Client Segments We Support</h2>
            <p>From listed companies to individuals, every engagement is tailored to regulatory needs and business context.</p>
          </div>
          <div className="clients-grid">
            {clientCategories.map((cat, i) => (
              <div key={i} className="client-card">
                <span className="client-card-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section clients-testimonials-section">
        <div className="container">
          <div className="clients-section-head">
            <span className="clients-section-kicker">Client Feedback</span>
            <h2>What Clients Say</h2>
          </div>
          <div className="testimonials">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="testimonial">
                <p>"{t.quote}"</p>
                <cite>— {t.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section clients-relationship-section">
        <div className="container">
          <div className="clients-section-head">
            <span className="clients-section-kicker">Relationship Metrics</span>
            <h2>Long-Term Client Relationships</h2>
            <p>Built through consistent quality, transparent communication, and practical advisory delivery.</p>
          </div>
          <div className="relationship-highlights">
            {relationshipHighlights.map((item, i) => (
              <div key={i} className="relationship-card">
                <p className="relationship-value">{item.value}</p>
                <p className="relationship-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section clients-engagement-section">
        <div className="container">
          <div className="clients-section-head">
            <span className="clients-section-kicker">How We Engage</span>
            <h2>A clear process for every engagement</h2>
            <p>A structured model that keeps your teams informed, compliant, and audit-ready.</p>
          </div>
          <div className="engagement-grid">
            {engagementSteps.map((step, i) => (
              <div key={i} className="engagement-card">
                <span className="engagement-step-number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section clients-faq-section">
        <div className="container">
          <div className="clients-section-head">
            <span className="clients-section-kicker">FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="clients-faq">
            {faqs.map((faq, i) => (
              <article key={i} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section clients-final-cta">
        <div className="container">
          <div className="clients-final-cta-card">
            <p className="clients-final-cta-kicker">Partner with DGC</p>
            <h2>Join our growing list of trusted clients</h2>
            <p>Collaborate with a team that combines technical depth, responsiveness, and partner-level involvement.</p>
            <div className="clients-final-cta-actions">
              <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
              <Link to="/schedule-consultation" className="btn btn-secondary">Schedule Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .clients-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1100px 360px at 50% -120px, rgba(31, 93, 150, 0.24), transparent 64%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 56%, rgba(255, 255, 255, 0.98) 100%);
        }
        .clients-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .clients-page-hero::after {
          opacity: 0.12;
          filter: grayscale(8%) saturate(95%);
        }
        .clients-page-hero .container { max-width: 1220px; }
        .clients-section-head {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 1rem;
        }
        .clients-section-kicker {
          display: inline-flex;
          padding: 0.34rem 0.78rem;
          border-radius: 999px;
          border: 1px solid rgba(140, 183, 220, 0.34);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(240, 247, 255, 0.88));
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--purple-700);
          margin-bottom: 0.6rem;
        }
        .clients-section-head h2 {
          margin: 0;
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          line-height: 1.16;
          letter-spacing: -0.03em;
          color: var(--slate-900);
        }
        .clients-section-head p {
          margin: 0.62rem auto 0;
          max-width: 760px;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .clients-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .clients-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .client-card {
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 14px;
          padding: 1rem;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .client-card:hover {
          box-shadow: 0 10px 40px rgba(31, 79, 134, 0.12);
          border-color: var(--purple-400);
        }
        .client-card-index {
          display: inline-flex;
          width: 30px;
          height: 30px;
          border-radius: 9px;
          align-items: center;
          justify-content: center;
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--purple-700);
          background: linear-gradient(135deg, rgba(31, 79, 134, 0.12), rgba(74, 134, 189, 0.18));
          margin-bottom: 0.42rem;
        }
        .client-card h3 {
          font-size: 1.08rem;
          color: var(--slate-800);
          margin: 0 0 0.35rem 0;
        }
        .client-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.55;
          margin: 0;
        }
        .testimonials {
          display: grid;
          gap: 1rem;
        }
        .testimonial {
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 14px;
          padding: 1.05rem 1rem;
          margin: 0;
        }
        .testimonial p {
          color: var(--slate-700);
          font-style: italic;
          margin: 0 0 0.5rem;
        }
        .testimonial cite {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-style: normal;
        }
        .relationship-highlights {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        }
        .relationship-card {
          background: linear-gradient(180deg, var(--white) 0%, var(--slate-50) 100%);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.1rem 1rem;
          text-align: center;
        }
        .relationship-value {
          margin: 0;
          color: var(--purple-700);
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.2;
        }
        .relationship-label {
          margin: 0.35rem 0 0;
          color: var(--text-muted);
          font-size: 0.85rem;
        }
        .engagement-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 820px) {
          .engagement-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .engagement-card {
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 14px;
          padding: 1rem;
        }
        .engagement-step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--purple-700);
          background: rgba(31, 79, 134, 0.14);
          margin-bottom: 0.75rem;
        }
        .engagement-card h3 {
          margin: 0 0 0.5rem;
          font-size: 1.05rem;
          color: var(--slate-800);
        }
        .engagement-card p {
          margin: 0;
          font-size: 0.94rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        .clients-faq {
          display: grid;
          gap: 0.9rem;
        }
        .faq-item {
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 14px;
          padding: 1rem;
        }
        .faq-item h3 {
          margin: 0 0 0.45rem;
          font-size: 1rem;
          color: var(--slate-800);
        }
        .faq-item p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.93rem;
          line-height: 1.6;
        }
        .clients-final-cta-card {
          border: 1px solid rgba(140, 183, 220, 0.3);
          border-radius: 20px;
          background: linear-gradient(135deg, #0f2747 0%, #173b68 52%, #1f5d96 100%);
          color: #fff;
          padding: 2.2rem 1.2rem;
          text-align: center;
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.24);
        }
        .clients-final-cta-kicker {
          margin: 0 0 0.5rem;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(220, 236, 252, 0.9);
        }
        .clients-final-cta-card h2 {
          margin: 0;
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          line-height: 1.16;
          letter-spacing: -0.025em;
        }
        .clients-final-cta-card > p {
          margin: 0.7rem auto 0;
          max-width: 760px;
          color: rgba(240, 248, 255, 0.9);
          line-height: 1.58;
        }
        .clients-final-cta-actions {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .clients-final-cta-actions .btn-secondary {
          border-color: rgba(220, 236, 252, 0.48);
          color: #f8fcff;
          background: transparent;
        }
        .client-logos-marquee {
          overflow: hidden;
          margin-bottom: 0.2rem;
          border-radius: 14px;
          border: 1px solid rgba(148, 163, 184, 0.22);
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          padding: 0.95rem;
        }
        .client-logos-track {
          display: flex;
          flex-wrap: nowrap;
          gap: 1.5rem;
          width: max-content;
          animation: clients-page-marquee 45s linear infinite;
        }
        .client-logos-track:hover {
          animation-play-state: paused;
        }
        @keyframes clients-page-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .client-logo-item {
          flex: 0 0 auto;
          width: 150px;
          min-height: 86px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          background: #fff;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 12px;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .client-logo-item:hover {
          box-shadow: 0 8px 24px rgba(31, 79, 134, 0.12);
          border-color: var(--slate-200);
        }
        .client-logo-img {
          max-width: 100%;
          max-height: 72px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(0.4);
          opacity: 0.9;
        }
        .client-logo-item:hover .client-logo-img {
          filter: grayscale(0);
          opacity: 1;
        }
      `}</style>
    </>
  );
}
