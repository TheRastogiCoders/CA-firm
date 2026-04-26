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
      <section className="page-hero services-page-hero" aria-labelledby="services-page-title">
        <div className="container">
          <span className="page-hero-kicker services-page-kicker">Services Portfolio</span>
          <h1 id="services-page-title" className="page-title services-page-title">
            Partner-led Chartered Accountant services for assurance, taxation, GST, and advisory solutions.
          </h1>
          <p className="page-subtitle services-page-intro">
            We combine deep technical expertise with practical business understanding to deliver reliable, timely, and strategy-aligned outcomes.
          </p>
          <div className="page-hero-actions services-page-actions">
            <Link to="/schedule-consultation" className="btn btn-primary">Schedule Consultation</Link>
            <Link to="/contact" className="btn btn-secondary">Speak to Our Team</Link>
          </div>
          <div className="services-page-metrics">
            <article><strong>20+</strong><span>Years of practice</span></article>
            <article><strong>8</strong><span>Core services</span></article>
            <article><strong>4</strong><span>Office locations</span></article>
          </div>
        </div>
      </section>

      <section className="home-section services-seo-intent" aria-labelledby="services-seo-title">
        <div className="container">
          <div className="services-seo-intent-shell">
            <h2 id="services-seo-title">Best-fit CA services for taxation, audit, GST, corporate law, and financial advisory</h2>
            <p>
              This page outlines our complete chartered accountant service portfolio for businesses, startups, institutions, and
              compliance-intensive organizations. Use the quick links below to access the most relevant service detail.
            </p>
            <div className="services-seo-intent-links">
              <Link to="/services/tax-compliance">Tax & Compliance</Link>
              <Link to="/services/audit-assurance">Audit & Assurance</Link>
              <Link to="/services/gst-advisory">GST Advisory</Link>
              <Link to="/services/corporate-law">Corporate Law</Link>
              <Link to="/services/financial-consulting">Financial Consulting</Link>
              <Link to="/schedule-consultation">Schedule Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section services-page-cards" aria-labelledby="svc-list-title">
        <div className="container">
          <div className="about-section-head">
            <span className="about-section-head-kicker">What We Offer</span>
            <h2 id="svc-list-title">Comprehensive CA and advisory solutions</h2>
          </div>

          <div className="services-page-grid">
            {services.map((service, index) => (
              <article key={service.slug} className="services-page-card">
                <div className="services-page-card-top">
                  <span className="services-page-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                </div>
                <p className="services-page-card-desc">{service.shortDescription}</p>
                <ul className="services-page-card-areas">
                  {service.keyAreas.slice(0, 3).map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
                <Link to={`/services/${service.slug}`} className="services-page-link">View Service Details →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section services-page-why" aria-labelledby="svc-why-title">
        <div className="container">
          <div className="about-section-head">
            <span className="about-section-head-kicker">Why DGC</span>
            <h2 id="svc-why-title">Why businesses choose our service delivery model</h2>
          </div>
          <div className="services-page-why-grid">
            {WHY_SERVICES.map((item, i) => (
              <article key={item.title} className="services-page-why-card">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section services-page-process" aria-labelledby="svc-process-title">
        <div className="container">
          <div className="about-section-head">
            <span className="about-section-head-kicker">Execution Framework</span>
            <h2 id="svc-process-title">How we execute every engagement</h2>
          </div>
          <div className="services-page-process-grid">
            {APPROACH_STEPS.map((item) => (
              <article key={item.step} className="services-page-process-card">
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section services-page-industries" aria-labelledby="svc-industries-title">
        <div className="container">
          <div className="services-page-industries-shell">
            <h2 id="svc-industries-title">Industries We Serve</h2>
            <p>We support enterprises, institutions, and growth-stage businesses with sector-aware advisory and compliance execution.</p>
            <div className="services-page-industry-list">
              {INDUSTRIES.map((name) => <span key={name}>{name}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section services-page-catalogue" aria-labelledby="svc-detailed-title">
        <div className="container">
          <div className="about-section-head">
            <span className="about-section-head-kicker">Detailed Catalogue</span>
            <h2 id="svc-detailed-title">Scope, deliverables, and ideal fit for each service</h2>
          </div>
          <div className="services-page-catalogue-list">
            {services.map((service, idx) => (
              <article key={service.slug} className="services-page-catalogue-card">
                <div className="services-page-catalogue-head">
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.shortDescription}</p>
                  </div>
                </div>
                <p className="services-page-catalogue-body">{service.longDescription}</p>
                <div className="services-page-catalogue-grid">
                  <div className="services-page-catalogue-block">
                    <h4>Key deliverables</h4>
                    <ul>
                      {service.keyAreas.map((area) => <li key={area}>{area}</li>)}
                    </ul>
                  </div>
                  <div className="services-page-catalogue-block">
                    <h4>Ideal for</h4>
                    <p>{SERVICE_AUDIENCE[service.slug] || 'Businesses and professionals requiring reliable compliance and advisory support.'}</p>
                    <Link to={`/services/${service.slug}`}>Go to detailed page →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="services-page-final-cta">
            <p>Need a custom scope across multiple service lines? We can structure a combined engagement plan.</p>
            <div>
              <Link to="/schedule-consultation" className="btn btn-primary">Schedule Consultation</Link>
              <Link to="/contact" className="btn btn-secondary">Discuss Requirements</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .services-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1100px 360px at 50% -120px, rgba(31, 93, 150, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 56%, rgba(255, 255, 255, 0.98) 100%);
        }
        .services-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .services-page-hero::after {
          opacity: 0.12;
          filter: grayscale(8%) saturate(95%);
        }
        .services-page-hero .container { max-width: 1220px; }
        .services-page-title {
          max-width: 980px;
        }
        .services-page-intro {
          max-width: 860px;
        }
        .services-page-actions {
          margin-top: 1.25rem;
        }
        .services-page-metrics {
          margin-top: 1.35rem;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.7rem;
        }
        .services-page-metrics article {
          border: 1px solid rgba(148, 163, 184, 0.28);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.72);
          padding: 0.78rem 0.7rem;
        }
        .services-page-metrics strong {
          display: block;
          color: var(--purple-700);
          font-size: 1.24rem;
          line-height: 1.2;
        }
        .services-page-metrics span {
          display: block;
          margin-top: 0.18rem;
          color: var(--slate-600);
          font-size: 0.82rem;
          font-weight: 600;
        }
        .services-page-cards { padding-top: 3.4rem; }
        .services-seo-intent {
          padding-top: 2.1rem;
          padding-bottom: 0.9rem;
        }
        .services-seo-intent-shell {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          box-shadow: 0 10px 24px rgba(15, 39, 71, 0.06);
          padding: 1rem;
        }
        .services-seo-intent-shell h2 {
          margin: 0;
          color: var(--slate-900);
          font-size: clamp(1.16rem, 2.3vw, 1.48rem);
          line-height: 1.35;
        }
        .services-seo-intent-shell p {
          margin: 0.58rem 0 0;
          color: var(--slate-600);
          font-size: 0.93rem;
          line-height: 1.62;
        }
        .services-seo-intent-links {
          margin-top: 0.74rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .services-seo-intent-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.4rem 0.68rem;
          border-radius: 999px;
          border: 1px solid rgba(31, 93, 150, 0.28);
          background: rgba(31, 93, 150, 0.08);
          color: var(--primary);
          font-size: 0.79rem;
          font-weight: 600;
          line-height: 1.3;
        }
        .services-seo-intent-links a:hover {
          color: #173b68;
          border-color: rgba(31, 93, 150, 0.45);
          background: rgba(31, 93, 150, 0.12);
        }
        .services-page-cards .about-section-head {
          margin-bottom: 1.45rem;
        }
        .services-page-cards .about-section-head h2 {
          font-size: clamp(2.05rem, 4.8vw, 3.1rem);
          line-height: 1.14;
        }
        .services-page-why .about-section-head,
        .services-page-process .about-section-head,
        .services-page-catalogue .about-section-head {
          margin-bottom: 1.45rem;
        }
        .services-page-why .about-section-head h2,
        .services-page-process .about-section-head h2,
        .services-page-catalogue .about-section-head h2 {
          font-size: clamp(1.9rem, 4.4vw, 2.85rem);
          line-height: 1.14;
        }
        .services-page-grid {
          display: grid;
          gap: 0.9rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .services-page-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        .services-page-card {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 16px;
          background: #fff;
          padding: 1.02rem;
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .services-page-card:hover {
          transform: translateY(-3px);
          border-color: rgba(31, 93, 150, 0.36);
          box-shadow: 0 14px 32px rgba(15, 39, 71, 0.12);
        }
        .services-page-card-top {
          display: flex;
          gap: 0.68rem;
          align-items: flex-start;
        }
        .services-page-index {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--purple-700);
          background: linear-gradient(135deg, rgba(31, 79, 134, 0.12), rgba(74, 134, 189, 0.18));
        }
        .services-page-card h3 {
          margin: 0;
          color: var(--slate-900);
          font-size: 1.14rem;
          line-height: 1.28;
        }
        .services-page-card-desc {
          margin: 0.62rem 0 0;
          color: var(--slate-700);
          line-height: 1.58;
          font-size: 0.94rem;
        }
        .services-page-card-areas {
          margin: 0.7rem 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.34rem;
        }
        .services-page-card-areas li {
          position: relative;
          padding-left: 0.92rem;
          color: var(--slate-600);
          font-size: 0.86rem;
          line-height: 1.5;
        }
        .services-page-card-areas li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.56em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--purple-500);
        }
        .services-page-link {
          display: inline-flex;
          margin-top: 0.82rem;
          color: var(--purple-700);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .services-page-why {
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }
        .services-page-why-grid,
        .services-page-process-grid {
          display: grid;
          gap: 0.84rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .services-page-why-grid,
          .services-page-process-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .services-page-why-card,
        .services-page-process-card {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: #fff;
          padding: 0.95rem;
        }
        .services-page-why-card span,
        .services-page-process-card span {
          color: var(--purple-700);
          font-size: 0.74rem;
          letter-spacing: 0.12em;
          font-weight: 700;
        }
        .services-page-why-card h3,
        .services-page-process-card h3 {
          margin: 0.32rem 0 0;
          font-size: 1.02rem;
          color: var(--slate-900);
        }
        .services-page-why-card p,
        .services-page-process-card p {
          margin: 0.5rem 0 0;
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.55;
        }
        .services-page-industries-shell {
          border: 1px solid rgba(140, 183, 220, 0.26);
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(247, 251, 255, 0.9), rgba(255, 255, 255, 0.95));
          padding: 1.35rem 1rem;
          text-align: center;
        }
        .services-page-industries-shell h2 {
          margin: 0;
          font-size: clamp(1.58rem, 4vw, 2.15rem);
          color: var(--slate-900);
          letter-spacing: -0.02em;
        }
        .services-page-industries-shell p {
          margin: 0.55rem auto 0;
          max-width: 760px;
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.56;
        }
        .services-page-industry-list {
          margin-top: 0.9rem;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .services-page-industry-list span {
          border: 1px solid rgba(148, 163, 184, 0.26);
          background: #fff;
          border-radius: 999px;
          padding: 0.35rem 0.7rem;
          color: var(--slate-700);
          font-size: 0.82rem;
          font-weight: 600;
        }
        .services-page-catalogue {
          background: linear-gradient(180deg, #fff 0%, #f7fbff 100%);
        }
        .services-page-catalogue-list {
          display: grid;
          gap: 1.15rem;
        }
        .services-page-catalogue-card {
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 18px;
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          padding: 1.1rem;
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .services-page-catalogue-card:hover {
          transform: translateY(-2px);
          border-color: rgba(31, 93, 150, 0.3);
          box-shadow: 0 16px 32px rgba(15, 39, 71, 0.12);
        }
        .services-page-catalogue-head {
          display: flex;
          gap: 0.78rem;
          align-items: flex-start;
          padding-bottom: 0.78rem;
          border-bottom: 1px solid rgba(148, 163, 184, 0.2);
        }
        .services-page-catalogue-head > span {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #e4effb, #d6e7fb);
          color: #15457a;
          border: 1px solid rgba(31, 93, 150, 0.18);
          font-size: 0.78rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .services-page-catalogue-head h3 {
          margin: 0;
          color: var(--slate-900);
          font-size: 1.16rem;
          line-height: 1.3;
        }
        .services-page-catalogue-head p {
          margin: 0.38rem 0 0;
          color: var(--slate-600);
          font-size: 0.92rem;
          line-height: 1.58;
        }
        .services-page-catalogue-body {
          margin: 0.88rem 0 0;
          color: var(--slate-700);
          font-size: 0.94rem;
          line-height: 1.68;
        }
        .services-page-catalogue-grid {
          margin-top: 0.95rem;
          display: grid;
          gap: 0.78rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 980px) {
          .services-page-catalogue-grid {
            grid-template-columns: 1.2fr 0.9fr;
          }
        }
        .services-page-catalogue-block {
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 14px;
          padding: 0.95rem 0.9rem;
          background: linear-gradient(180deg, #fbfdff, #f4f9ff);
        }
        .services-page-catalogue-block h4 {
          margin: 0;
          color: #18395f;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .services-page-catalogue-block ul {
          margin: 0.68rem 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.42rem;
        }
        .services-page-catalogue-block li {
          position: relative;
          padding-left: 0.92rem;
          color: var(--slate-700);
          font-size: 0.88rem;
          line-height: 1.52;
        }
        .services-page-catalogue-block li::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          left: 0;
          top: 0.52em;
          background: #2f7ac0;
        }
        .services-page-catalogue-block p {
          margin: 0.68rem 0 0;
          color: var(--slate-700);
          font-size: 0.9rem;
          line-height: 1.58;
        }
        .services-page-catalogue-block a {
          margin-top: 0.86rem;
          display: inline-flex;
          padding: 0.56rem 0.82rem;
          border-radius: 10px;
          border: 1px solid rgba(31, 93, 150, 0.24);
          background: #ffffff;
          color: #15457a;
          text-decoration: none;
          font-size: 0.84rem;
          font-weight: 600;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .services-page-catalogue-block a:hover {
          border-color: rgba(31, 93, 150, 0.45);
          background: rgba(224, 238, 252, 0.5);
        }
        .services-page-final-cta {
          margin-top: 1.1rem;
          border: 1px solid rgba(140, 183, 220, 0.3);
          border-radius: 18px;
          background: linear-gradient(135deg, #0f2747 0%, #173b68 52%, #1f5d96 100%);
          color: #fff;
          padding: 1.8rem 1rem;
          text-align: center;
        }
        .services-page-final-cta p {
          margin: 0;
          color: rgba(240, 248, 255, 0.92);
          font-size: 1rem;
          line-height: 1.58;
        }
        .services-page-final-cta div {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .services-page-final-cta .btn-secondary {
          border-color: rgba(220, 236, 252, 0.48);
          color: #f8fcff;
          background: transparent;
        }
        @media (max-width: 767px) {
          .services-page-metrics { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
