import { Link } from 'react-router-dom';
import { getAllServices } from '../data/servicesData';

const WHY_SERVICES = [
  { title: 'Partner-Led Engagement', desc: 'Senior partners are directly involved in your engagement, ensuring quality and accountability.' },
  { title: 'Full-Service Under One Roof', desc: 'From incorporation and tax to audit and advisory—we cover the full lifecycle so you have one trusted partner.' },
  { title: 'Timely & Reliable Delivery', desc: 'We meet deadlines and keep you informed so you never miss a compliance date or opportunity.' },
  { title: 'RBI & CAG Empanelled', desc: 'Our empanelment reflects the standards we uphold and our capability to serve institutions.' },
  { title: 'Multi-City Presence', desc: 'Head office in Varanasi with branches in Delhi, Kolkata, and Bokaro for nationwide reach.' },
  { title: 'Industry & Sector Expertise', desc: 'We serve manufacturing, banking, real estate, government, SMEs, and non-profits with tailored approaches.' },
];

const APPROACH_STEPS = [
  { step: '01', title: 'Consult', text: 'We understand your business, goals, and challenges through a structured consultation.' },
  { step: '02', title: 'Plan', text: 'We design a clear scope, timeline, and deliverables aligned with your requirements.' },
  { step: '03', title: 'Deliver', text: 'Our team executes with quality and keeps you updated at every stage.' },
  { step: '04', title: 'Support', text: 'Ongoing support and reviews so you stay compliant and informed.' },
];

const INDUSTRIES = [
  'Manufacturing & Infrastructure',
  'Banking & Financial Institutions',
  'Real Estate & Construction',
  'Trading & Export',
  'Government & Public Sector',
  'SMEs & Startups',
  'Non-Profit Organizations',
];

const SERVICE_AUDIENCE = {
  'tax-compliance': 'Ideal for companies, firms, and professionals managing periodic tax obligations.',
  'audit-assurance': 'Suitable for entities requiring statutory confidence, controls review, and reporting clarity.',
  'gst-advisory': 'Best for businesses with ongoing GST filings, reconciliations, and notices.',
  'corporate-law': 'Useful for companies and LLPs needing ongoing MCA/ROC and governance support.',
  'company-formation': 'Designed for founders launching a new business entity and setting compliance foundations.',
  'financial-consulting': 'Recommended for businesses evaluating investments, restructuring, or transaction decisions.',
  'project-finance': 'Helpful for promoters and enterprises seeking debt support for expansion projects.',
  'government-schemes-advisory': 'For businesses exploring eligible central/state subsidies and incentive programs.',
};

export default function Services() {
  const services = getAllServices();

  return (
    <>
      {/* Hero */}
      <section className="hero hero-services" aria-label="Services hero">
        <div className="hero-bg">
          <div className="hero-bg-image" />
          <div className="hero-overlay hero-overlay-base" />
          <div className="hero-overlay hero-overlay-gradient" />
          <div className="hero-vignette" />
        </div>
        <div className="hero-content">
          <div className="container hero-container">
            <div className="hero-slide hero-slide-active">
              <div className="hero-accent" />
              <p className="hero-label">DWIVEDI GUPTA & CO.</p>
              <p className="hero-tagline">Chartered Accountants | Assurance | Tax | Advisory</p>
              <h1 className="hero-title">Our Services</h1>
              <p className="hero-desc">
                End-to-end chartered accountancy services for businesses and individuals—taxation, audit & assurance, corporate law, financial consulting, and government schemes advisory.
              </p>
              <div className="hero-cta">
                <Link to="/schedule-consultation" className="hero-btn hero-btn-primary">Schedule Consultation</Link>
                <Link to="/contact" className="hero-btn hero-btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="home-section svc-overview" aria-labelledby="svc-overview-title">
        <div className="container">
          <p id="svc-overview-title" className="svc-overview-text">
            Dwivedi Gupta & Co. has been delivering assurance, taxation, advisory, and consulting services since 2003. Our partner-led, client-centric approach ensures that every engagement is tailored to your business needs. Whether you are a growing SME, a listed company, or a public-sector entity, we combine technical expertise with practical insights to help you stay compliant, manage risk, and achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Why choose our services */}
      <section className="home-section why-choose-us" aria-labelledby="svc-why-title">
        <div className="container">
          <div className="why-header">
            <span className="why-eyebrow">Why Choose Us</span>
            <div className="why-accent" />
            <h2 id="svc-why-title" className="why-title">Why Choose Our Services</h2>
            <p className="why-intro">
              We combine technical excellence with a commitment to long-term partnerships. Here is what sets our service delivery apart.
            </p>
          </div>
          <div className="why-grid">
            {WHY_SERVICES.map((item, i) => (
              <div key={i} className="why-card">
                <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="why-card-bar" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="home-section svc-approach" aria-labelledby="svc-approach-title">
        <div className="container">
          <div className="services-header">
            <span className="services-eyebrow">How We Work</span>
            <div className="services-accent" />
            <h2 id="svc-approach-title" className="services-title">Our Approach</h2>
            <p className="services-intro">
              A clear, structured process so you know what to expect at every stage of the engagement.
            </p>
          </div>
          <div className="svc-approach-grid">
            {APPROACH_STEPS.map(({ step, title, text }) => (
              <div key={step} className="svc-approach-item">
                <span className="svc-approach-num" aria-hidden="true">{step}</span>
                <h3 className="svc-approach-title">{title}</h3>
                <p className="svc-approach-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="home-section home-services services-page-section" aria-labelledby="svc-list-title">
        <div className="container">
          <div className="services-header">
            <span className="services-eyebrow">What We Offer</span>
            <div className="services-accent" />
            <h2 id="svc-list-title" className="services-title">Comprehensive CA & Advisory Solutions</h2>
            <p className="services-intro">
              From tax and compliance to audit, corporate law, and project finance—we deliver partner-led, client-centric services tailored to your needs.
            </p>
          </div>

          <div className="home-services-grid">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="home-service-card home-service-card-link"
              >
                <span className="service-number">{String(i + 1).padStart(2, '0')}</span>
                <div className="service-card-accent" />
                <h3>{s.title}</h3>
                <p>{s.shortDescription}</p>
                {s.keyAreas?.length > 0 && (
                  <ul className="svc-card-areas" aria-label="Key areas">
                    {s.keyAreas.slice(0, 3).map((area, j) => (
                      <li key={j}>{area}</li>
                    ))}
                  </ul>
                )}
                <span className="svc-card-read-more">Learn more →</span>
              </Link>
            ))}
          </div>

          {/* Industries we serve */}
          <div className="svc-industries-wrap">
            <h3 className="svc-industries-title">Industries We Serve</h3>
            <p className="svc-industries-intro">We work with clients across sectors, from manufacturing and banking to government and SMEs.</p>
            <ul className="svc-industries-list">
              {INDUSTRIES.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>

          <div className="services-cta services-cta-block">
            <p className="services-cta-text">Need a custom solution? We tailor our services to your business and goals.</p>
            <div className="services-cta-buttons">
              <Link to="/schedule-consultation" className="btn btn-primary">Schedule Consultation</Link>
              <Link to="/contact" className="btn btn-secondary">Discuss Your Requirements</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed service catalogue */}
      <section className="home-section svc-detailed" aria-labelledby="svc-detailed-title">
        <div className="container">
          <div className="services-header">
            <span className="services-eyebrow">Detailed Services</span>
            <div className="services-accent" />
            <h2 id="svc-detailed-title" className="services-title">Detailed Service Catalogue</h2>
            <p className="services-intro">
              Explore each service in depth, including scope, key focus areas, and the type of clients it is best suited for.
            </p>
          </div>
          <div className="svc-detailed-list">
            {services.map((service, idx) => (
              <article key={service.slug} className="svc-detailed-card">
                <div className="svc-detailed-top">
                  <span className="svc-detailed-number">{String(idx + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="svc-detailed-title">{service.title}</h3>
                    <p className="svc-detailed-summary">{service.shortDescription}</p>
                  </div>
                </div>
                <p className="svc-detailed-body">{service.longDescription}</p>
                <div className="svc-detailed-grid">
                  <div className="svc-detailed-block">
                    <h4>Key deliverables</h4>
                    <ul className="svc-detailed-bullets">
                      {service.keyAreas.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="svc-detailed-block">
                    <h4>Who this is for</h4>
                    <p>
                      {SERVICE_AUDIENCE[service.slug] || 'Suitable for businesses and professionals seeking structured compliance and advisory support.'}
                    </p>
                    <Link to={`/services/${service.slug}`} className="svc-detailed-link">
                      Open detailed page →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hero-services .hero-nav { display: none; }
        .hero-services { min-height: 50vh; min-height: 50dvh; padding: 4rem 0 4.5rem; }
        @media (max-width: 767px) {
          .hero-services { min-height: 48vh; min-height: 48dvh; padding: 3rem 0 3.5rem; }
        }
        .svc-overview { padding: 2.5rem 0; background: var(--white); }
        .svc-overview-text {
          font-size: 1.0625rem;
          color: var(--slate-700);
          line-height: 1.75;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .services-page-section { padding: 4rem 0; }
        @media (min-width: 768px) { .services-page-section { padding: 5rem 0; } }
        .svc-approach { background: linear-gradient(180deg, var(--white) 0%, var(--slate-50) 100%); }
        .svc-approach-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) { .svc-approach-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .svc-approach-grid { grid-template-columns: repeat(4, 1fr); gap: 1.75rem; } }
        .svc-approach-item {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .svc-approach-item:hover {
          border-color: var(--purple-400);
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.08);
        }
        .svc-approach-num {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--purple-600);
          font-family: var(--font-display);
          margin-bottom: 0.5rem;
        }
        .svc-approach-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--slate-800);
          margin-bottom: 0.5rem;
        }
        .svc-approach-text {
          font-size: 0.9375rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }
        .svc-card-areas {
          list-style: none;
          padding: 0;
          margin: 0.75rem 0 0 0;
          font-size: 0.8125rem;
          color: var(--slate-600);
          line-height: 1.6;
        }
        .svc-card-areas li {
          position: relative;
          padding-left: 1rem;
          margin-bottom: 0.25rem;
        }
        .svc-card-areas li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5em;
          width: 4px;
          height: 4px;
          background: var(--purple-500);
          border-radius: 50%;
        }
        .svc-industries-wrap {
          margin-top: 3rem;
          padding-top: 2.5rem;
          border-top: 1px solid var(--border);
          text-align: center;
        }
        .svc-industries-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--slate-800);
          margin-bottom: 0.5rem;
        }
        .svc-industries-intro {
          font-size: 0.9375rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }
        .svc-industries-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.9375rem;
          color: var(--slate-700);
        }
        .svc-industries-list li {
          padding: 0.35rem 0.75rem;
          background: var(--slate-50);
          border-radius: 6px;
          border: 1px solid var(--border);
        }
        .home-service-card-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .home-service-card-link:hover .svc-card-read-more { color: var(--purple-700); }
        .svc-card-read-more {
          display: inline-block;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--purple-600);
          margin-top: 0.75rem;
        }
        .services-cta-block {
          margin-top: 3rem;
          padding: 2.5rem 2rem;
          background: linear-gradient(135deg, var(--slate-50) 0%, rgba(224, 231, 255, 0.25) 100%);
          border: 1px solid var(--border);
          border-radius: 16px;
          text-align: center;
        }
        .services-cta-text {
          font-size: 1.0625rem;
          color: var(--slate-700);
          margin-bottom: 1.5rem;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        .services-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          align-items: center;
        }
        .svc-detailed {
          background: linear-gradient(180deg, var(--white) 0%, var(--slate-50) 100%);
          padding: 4rem 0;
        }
        @media (min-width: 768px) {
          .svc-detailed { padding: 5rem 0; }
        }
        .svc-detailed-list {
          display: grid;
          gap: 1.5rem;
        }
        @media (min-width: 1024px) {
          .svc-detailed-list { gap: 1.75rem; }
        }
        .svc-detailed-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.5rem;
          box-shadow: 0 3px 16px rgba(30, 41, 59, 0.04);
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        @media (min-width: 768px) {
          .svc-detailed-card { padding: 1.75rem 1.9rem; }
        }
        .svc-detailed-card:hover {
          border-color: var(--purple-400);
          box-shadow: 0 12px 30px rgba(124, 58, 237, 0.08);
        }
        .svc-detailed-top {
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          margin-bottom: 0.85rem;
        }
        .svc-detailed-number {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.12), rgba(37, 99, 235, 0.14));
          color: var(--purple-700);
          font-size: 0.875rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .svc-detailed-title {
          font-size: 1.25rem;
          color: var(--slate-800);
          margin: 0 0 0.35rem 0;
          line-height: 1.3;
        }
        .svc-detailed-summary {
          font-size: 0.95rem;
          color: var(--slate-600);
          line-height: 1.6;
          margin: 0;
        }
        .svc-detailed-body {
          color: var(--slate-700);
          font-size: 0.98rem;
          line-height: 1.72;
          margin: 0 0 1.2rem 0;
        }
        .svc-detailed-grid {
          display: grid;
          gap: 1rem;
        }
        @media (min-width: 900px) {
          .svc-detailed-grid {
            grid-template-columns: 1.2fr 0.9fr;
            gap: 1.5rem;
          }
        }
        .svc-detailed-block {
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1rem;
          background: var(--slate-50);
        }
        .svc-detailed-block h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--slate-800);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin: 0 0 0.7rem 0;
        }
        .svc-detailed-bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 0.45rem;
        }
        .svc-detailed-bullets li {
          position: relative;
          padding-left: 0.95rem;
          color: var(--slate-700);
          font-size: 0.92rem;
          line-height: 1.55;
        }
        .svc-detailed-bullets li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--purple-500);
        }
        .svc-detailed-block p {
          color: var(--slate-700);
          font-size: 0.92rem;
          line-height: 1.6;
          margin: 0 0 0.9rem 0;
        }
        .svc-detailed-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--purple-700);
          text-decoration: none;
        }
        .svc-detailed-link:hover { color: var(--purple-600); }
      `}</style>
    </>
  );
}
