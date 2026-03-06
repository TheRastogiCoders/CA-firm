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
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Clients</h1>
          <p className="page-subtitle">
            We serve corporates, MSMEs, startups, and individuals across sectors.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {CLIENT_LOGOS.length > 0 && (
            <>
              <h2 className="section-title">Our Clients</h2>
              <p className="section-subtitle">
                We are proud to work with businesses and individuals across sectors.
              </p>
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
            </>
          )}

          <h2 className="section-title" style={{ marginTop: '3rem' }}>Who We Work With</h2>
          <p className="section-subtitle">
            From large corporates to individuals—we tailor our services to your size and needs.
          </p>
          <div className="clients-grid">
            {clientCategories.map((cat, i) => (
              <div key={i} className="client-card">
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: '3rem' }}>What Clients Say</h2>
          <div className="testimonials">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="testimonial">
                <p>"{t.quote}"</p>
                <cite>— {t.author}</cite>
              </blockquote>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: '3rem' }}>Long-Term Client Relationships</h2>
          <p className="section-subtitle">
            Built through consistent quality, transparent communication, and practical advisory.
          </p>
          <div className="relationship-highlights">
            {relationshipHighlights.map((item, i) => (
              <div key={i} className="relationship-card">
                <p className="relationship-value">{item.value}</p>
                <p className="relationship-label">{item.label}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: '3rem' }}>How We Engage</h2>
          <p className="section-subtitle">
            A clear process that keeps your business informed, compliant, and audit-ready.
          </p>
          <div className="engagement-grid">
            {engagementSteps.map((step, i) => (
              <div key={i} className="engagement-card">
                <span className="engagement-step-number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: '3rem' }}>Frequently Asked Questions</h2>
          <div className="clients-faq">
            {faqs.map((faq, i) => (
              <article key={i} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>

          <div className="page-cta">
            <p>Join our growing list of satisfied clients.</p>
            <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>

      <style>{`
        .clients-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .clients-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .client-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.75rem;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .client-card:hover {
          box-shadow: 0 10px 40px rgba(124, 58, 237, 0.08);
          border-color: var(--purple-400);
        }
        .client-card h3 {
          font-size: 1.2rem;
          color: var(--slate-800);
          margin-bottom: 0.5rem;
        }
        .client-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .testimonials {
          display: grid;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        .testimonial {
          background: var(--slate-50);
          border-left: 4px solid var(--purple-600);
          padding: 1.5rem 1.75rem;
          border-radius: 0 8px 8px 0;
          margin: 0;
        }
        .testimonial p {
          color: var(--slate-700);
          font-style: italic;
          margin-bottom: 0.5rem;
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
          margin-top: 1.25rem;
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
          margin-top: 1.25rem;
        }
        @media (min-width: 820px) {
          .engagement-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .engagement-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.35rem;
          position: relative;
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
          background: rgba(124, 58, 237, 0.1);
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
          margin-top: 1rem;
        }
        .faq-item {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.15rem 1.2rem;
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
        .page-cta {
          margin-top: 3rem;
          text-align: center;
          padding: 2rem;
          background: var(--slate-50);
          border-radius: 12px;
        }
        .page-cta p { margin-bottom: 1rem; color: var(--text-muted); }

        .client-logos-marquee {
          overflow: hidden;
          margin-bottom: 2rem;
          border-radius: 12px;
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
          width: 160px;
          min-height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .client-logo-item:hover {
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.08);
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
