import { Link } from 'react-router-dom';

const industriesData = [
  {
    title: 'Manufacturing & Infrastructure',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85',
    description: 'We support manufacturers and infrastructure players with cost accounting, tax incentives, GST compliance, and project finance.',
    services: ['Tax incentives & exemptions', 'Cost accounting & MIS', 'GST and indirect tax compliance', 'Statutory & internal audit'],
  },
  {
    title: 'Banking & Financial Institutions',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85',
    description: 'RBI compliance, statutory audit, internal audit, and risk assurance for banks, NBFCs, and financial institutions.',
    services: ['RBI compliance & reporting', 'Statutory & branch audits', 'Internal audit & risk', 'Tax and transfer pricing'],
  },
  {
    title: 'Real Estate & Construction',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    description: 'Project accounting, GST on construction, RERA compliance, and regulatory support for developers and contractors.',
    services: ['Project & contract accounting', 'GST on works contract', 'RERA and regulatory filings', 'Joint venture structuring'],
  },
  {
    title: 'Trading & Export Businesses',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85',
    description: 'Customs, export benefits, multi-state GST, and inventory accounting for trading and export-oriented businesses.',
    services: ['Export incentives & MEIS/SEIS', 'Customs and DGFT compliance', 'Multi-state GST registration', 'Inventory & working capital'],
  },
  {
    title: 'Government & Public Sector',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85',
    description: 'CAG empanelment, government audits, and compliance support for public sector undertakings and government schemes.',
    services: ['CAG & government audits', 'Scheme implementation support', 'Compliance & reporting', 'Procurement and contracts'],
  },
  {
    title: 'SMEs & Startups',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85',
    description: 'Company formation, ESOP accounting, startup tax benefits, and compliance tailored for growing and early-stage businesses.',
    services: ['Incorporation & secretarial', 'Income tax 80-IAC & incentives', 'ESOP & ESOP valuation', 'GST and annual compliance'],
  },
  {
    title: 'Non-Profit Organizations',
    image: 'https://images.unsplash.com/photo-1469571486292-b53601020e02?auto=format&fit=crop&w=1200&q=85',
    description: 'Trust and society compliance, 80G/12A support, fund accounting, and audit for NGOs and non-profit entities.',
    services: ['Trust/society compliance', '80G, 12A & FCRA', 'Fund accounting & audit', 'Board and donor reporting'],
  },
];

const industryStats = [
  { label: 'Sectors Served', value: '7+' },
  { label: 'Years of Experience', value: '20+' },
  { label: 'Office Locations', value: '4' },
  { label: 'Partner-Led Engagement', value: '100%' },
];

const whySectorFocus = [
  'Regulatory requirements vary significantly by sector—we bring sector-specific knowledge to ensure full compliance.',
  'Industry benchmarks and best practices help us deliver more relevant advice and efficient audits.',
  'We understand your value chain and key risks, so our solutions are practical and aligned with your operations.',
];

const engagementModel = [
  {
    title: 'Sector Discovery',
    description: 'We map your sector regulations, risk exposure, and reporting obligations before defining the scope.',
  },
  {
    title: 'Service Alignment',
    description: 'Tax, audit, and advisory workflows are customized to your business model and operating cycle.',
  },
  {
    title: 'Execution & Review',
    description: 'Partner-led delivery, structured checkpoints, and actionable insights ensure measurable business value.',
  },
];

export default function Industries() {
  return (
    <>
      <section className="page-hero industries-page-hero" aria-labelledby="industries-page-title">
        <div className="container">
          <span className="page-hero-kicker">Sector Expertise</span>
          <h1 id="industries-page-title" className="page-title">Industry-specific tax, audit, advisory, and compliance support</h1>
          <p className="page-subtitle">
            We align tax, audit, and regulatory execution with your sector obligations, operating model, and strategic priorities.
          </p>
          <div className="page-hero-actions">
            <Link to="/services" className="btn btn-primary">Explore Services</Link>
            <Link to="/schedule-consultation" className="btn btn-secondary">Book Strategy Call</Link>
          </div>
        </div>
      </section>

      <section className="home-section industries-seo-intent" aria-labelledby="industries-seo-title">
        <div className="container">
          <div className="industries-seo-intent-shell">
            <h2 id="industries-seo-title">Sector-specific CA support for compliance-heavy and growth-focused industries</h2>
            <p>
              We deliver industry-aware tax, audit, and advisory services for manufacturing, BFSI, real estate, public sector, startups,
              and nonprofit organizations. Combine sector understanding with the right service line for stronger execution outcomes.
            </p>
            <div className="industries-seo-intent-links">
              <Link to="/services/audit-assurance">Industry Audit Services</Link>
              <Link to="/services/gst-advisory">GST Advisory by Sector</Link>
              <Link to="/services/tax-compliance">Tax Compliance Support</Link>
              <Link to="/services/project-finance">Project Finance Advisory</Link>
              <Link to="/contact">Discuss Industry Requirement</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-stats industries-stats" aria-label="Industry highlights">
        <div className="container">
          <div className="home-stats-wrap">
            {industryStats.map((item) => (
              <article key={item.label} className="home-stat-card">
                <p className="home-stat-value">{item.value}</p>
                <p className="home-stat-label">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section industries-intro-section">
        <div className="container">
          <div className="industries-section-head">
            <span className="industries-section-kicker">Our Perspective</span>
            <h2>Industry-focused solutions designed for execution</h2>
            <p>
              Every sector has distinct compliance obligations and commercial risks. We combine technical depth with industry context to deliver clear, execution-ready outcomes.
            </p>
          </div>
          <div className="industries-intro-grid">
            <article className="industries-intro-card">
              <h3>Built for Complex Compliance</h3>
              <p>
                From manufacturing and BFSI to government bodies and nonprofits, our teams understand sector-specific controls, statutory timelines, and documentation standards.
              </p>
            </article>
            <article className="industries-intro-card">
              <h3>Advisory with Commercial Context</h3>
              <p>
                We align assurance and tax strategy with operational realities, helping leadership teams reduce risk while improving financial clarity and decision speed.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section industries-grid-section">
        <div className="container">
          <div className="industries-grid-shell">
            <div className="industries-section-head industries-grid-head">
              <span className="industries-section-kicker">Where We Work</span>
              <h2>Sectors We Serve</h2>
              <p>
                Structured support designed for compliance-intensive and growth-focused organizations.
              </p>
            </div>
            <div className="industries-quick-points">
              <span>Regulatory-first execution</span>
              <span>Partner-led oversight</span>
              <span>Sector-specific advisory</span>
            </div>
          </div>
          <div className="industry-grid">
            {industriesData.map((ind, index) => (
              <article key={ind.title} className="industry-card">
                <div className="industry-card-img">
                  <img src={ind.image} alt={ind.title} />
                  <div className="industry-card-overlay" />
                </div>
                <div className="industry-card-body">
                  <div className="industry-card-top">
                    <span className="industry-card-index">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{ind.title}</h3>
                  </div>
                  <p className="industry-card-desc">{ind.description}</p>
                  <ul className="industry-card-services">
                    {ind.services.slice(0, 4).map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="industry-card-link">Discuss Requirements</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section industries-process-section">
        <div className="container">
          <div className="industries-section-head">
            <span className="industries-section-kicker">How We Engage</span>
            <h2>A structured sector delivery model</h2>
            <p>
              Every engagement follows a disciplined process that balances regulatory rigor with business practicality.
            </p>
          </div>
          <div className="industries-process-grid">
            {engagementModel.map((item, index) => (
              <article key={item.title} className="industries-process-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section industries-approach-section">
        <div className="container">
          <div className="industries-section-head">
            <span className="industries-section-kicker">Our Approach</span>
            <h2>Why sector expertise matters</h2>
            <p>
              We invest in understanding your industry so our advice is relevant, compliant, and actionable.
            </p>
          </div>
          <div className="industries-approach-grid">
            {whySectorFocus.map((text, i) => (
              <article key={i} className="industries-approach-card">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section industries-final-cta">
        <div className="container">
          <div className="industries-final-cta-card">
            <p className="industries-final-cta-kicker">Expert guidance since 2003</p>
            <h2>Your sector strategy starts here</h2>
            <p>Partner with Dwivedi Gupta & Co. for partner-led assurance, tax, and advisory support tailored to your industry landscape.</p>
            <div className="industries-final-cta-actions">
              <Link to="/schedule-consultation" className="btn btn-primary">Schedule a Consultation</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .industries-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1100px 360px at 50% -120px, rgba(31, 93, 150, 0.24), transparent 64%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 56%, rgba(255, 255, 255, 0.98) 100%);
        }
        .industries-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .industries-page-hero::after {
          opacity: 0.12;
          filter: grayscale(8%) saturate(95%);
        }
        .industries-page-hero .container { max-width: 1220px; }
        .industries-seo-intent {
          padding-top: 2rem;
          padding-bottom: 1.35rem;
        }
        .industries-seo-intent-shell {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          box-shadow: 0 10px 24px rgba(15, 39, 71, 0.06);
          padding: 1rem;
        }
        .industries-seo-intent-shell h2 {
          margin: 0;
          color: var(--slate-900);
          font-size: clamp(1.16rem, 2.3vw, 1.48rem);
          line-height: 1.35;
        }
        .industries-seo-intent-shell p {
          margin: 0.58rem 0 0;
          color: var(--slate-600);
          font-size: 0.93rem;
          line-height: 1.62;
        }
        .industries-seo-intent-links {
          margin-top: 0.74rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          align-items: center;
        }
        .industries-seo-intent-links a {
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
        .industries-seo-intent-links a:hover {
          color: #173b68;
          border-color: rgba(31, 93, 150, 0.45);
          background: rgba(31, 93, 150, 0.12);
        }
        .industries-stats {
          margin-top: 0;
          padding-top: 0;
          padding-bottom: 1rem;
        }
        .industries-stats .home-stats-wrap {
          gap: 0.85rem;
        }
        @media (min-width: 768px) {
          .industries-stats .home-stats-wrap {
            gap: 1rem;
          }
        }
        .industries-intro-section { padding-top: 1.4rem; }
        .industries-section-head {
          text-align: center;
          margin: 0 auto 1.25rem;
          max-width: 900px;
        }
        .industries-section-kicker {
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
          margin-bottom: 0.62rem;
        }
        .industries-section-head h2 {
          margin: 0;
          display: block;
          width: 100%;
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
          font-size: clamp(1.85rem, 4.2vw, 2.8rem);
          line-height: 1.14;
          letter-spacing: -0.03em;
          color: var(--slate-900);
        }
        .industries-section-head h2::after {
          display: none;
        }
        .industries-section-head p {
          margin: 0.6rem auto 0;
          max-width: 780px;
          color: var(--text-muted);
          line-height: 1.62;
          font-size: 1rem;
        }
        .industries-intro-section .industries-section-head {
          margin-bottom: 1.45rem;
        }
        .industries-intro-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
          align-items: stretch;
        }
        .industries-intro-card {
          border: 1px solid var(--border);
          background: var(--white);
          border-radius: 12px;
          padding: 1.25rem;
          box-shadow: 0 8px 24px rgba(31, 79, 134, 0.07);
          height: 100%;
        }
        .industries-intro-card h3 {
          margin: 0 0 0.6rem;
          font-size: 1.06rem;
          color: var(--slate-800);
        }
        .industries-intro-card p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
        @media (min-width: 900px) {
          .industries-intro-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.25rem;
          }
        }
        .industry-grid {
          display: grid;
          gap: 1.1rem;
          grid-template-columns: 1fr;
        }
        .industries-grid-shell {
          border: 1px solid rgba(140, 183, 220, 0.28);
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(247, 251, 255, 0.88), rgba(255, 255, 255, 0.96));
          padding: 1.1rem 0.95rem;
          margin-bottom: 1rem;
          text-align: center;
        }
        .industries-grid-head {
          margin-bottom: 0.85rem;
          text-align: center;
        }
        .industries-grid-head h2 {
          margin-top: 0;
        }
        .industries-grid-head p {
          max-width: 740px;
          margin-left: auto;
          margin-right: auto;
        }
        .industries-quick-points {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.45rem;
        }
        .industries-quick-points span {
          padding: 0.36rem 0.72rem;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.26);
          background: #ffffff;
          font-size: 0.8rem;
          color: var(--slate-700);
          font-weight: 600;
        }
        @media (min-width: 640px) {
          .industry-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .industry-grid { grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
        }
        .industry-card {
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 18px;
          overflow: hidden;
          transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
          box-shadow: 0 10px 24px rgba(15, 39, 71, 0.06);
        }
        .industry-card:hover {
          border-color: var(--purple-400);
          box-shadow: 0 16px 36px rgba(31, 79, 134, 0.14);
          transform: translateY(-2px);
        }
        .industry-card-img {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }
        .industry-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }
        .industry-card:hover .industry-card-img img {
          transform: scale(1.05);
        }
        .industry-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(15, 23, 42, 0.5) 100%);
          pointer-events: none;
        }
        .industry-card-body {
          padding: 1.05rem 1rem 1.15rem;
        }
        .industry-card-top {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 0.58rem;
        }
        .industry-card-index {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--purple-700);
          background: linear-gradient(135deg, rgba(31, 79, 134, 0.12), rgba(74, 134, 189, 0.18));
          flex-shrink: 0;
        }
        .industry-card-body h3 {
          font-size: 1.12rem;
          font-weight: 600;
          color: var(--slate-800);
          margin: 0;
          line-height: 1.3;
        }
        .industry-card-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.58;
          margin: 0 0 0.75rem 0;
        }
        .industry-card-services {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .industry-card-services li {
          font-size: 0.86rem;
          color: var(--slate-600);
          line-height: 1.52;
          padding-left: 1rem;
          position: relative;
          margin-bottom: 0.32rem;
        }
        .industry-card-services li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5em;
          width: 5px;
          height: 5px;
          background: linear-gradient(135deg, var(--purple-600), var(--blue-600));
          border-radius: 50%;
        }
        .industry-card-link {
          display: inline-flex;
          align-items: center;
          margin-top: 0.74rem;
          width: 100%;
          justify-content: center;
          padding: 0.6rem 0.8rem;
          border: 1px solid rgba(31, 93, 150, 0.22);
          border-radius: 10px;
          background: #fff;
          text-decoration: none;
          color: var(--purple-700);
          font-size: 0.86rem;
          font-weight: 600;
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }
        .industry-card-link:hover {
          color: var(--blue-700);
          border-color: rgba(31, 93, 150, 0.4);
          background: rgba(224, 238, 252, 0.5);
        }
        @media (max-width: 767px) {
          .industries-grid-shell {
            padding: 0.95rem 0.8rem;
          }
          .industries-quick-points span {
            font-size: 0.76rem;
          }
        }
        .industries-process-section,
        .industries-approach-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }
        .industries-process-grid,
        .industries-approach-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.82rem;
        }
        @media (min-width: 900px) {
          .industries-process-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .industries-approach-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .industries-process-card,
        .industries-approach-card {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: #fff;
          padding: 0.95rem;
          box-shadow: 0 8px 24px rgba(15, 39, 71, 0.06);
        }
        .industries-process-card span,
        .industries-approach-card span {
          color: var(--purple-700);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.12em;
        }
        .industries-process-card h3 {
          margin: 0.35rem 0 0;
          color: var(--slate-900);
          font-size: 1.03rem;
        }
        .industries-process-card p,
        .industries-approach-card p {
          margin: 0.45rem 0 0;
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.56;
        }
        .industries-final-cta {
          padding-top: 0.2rem;
        }
        .industries-final-cta-card {
          border: 1px solid rgba(140, 183, 220, 0.3);
          border-radius: 20px;
          background: linear-gradient(135deg, #0f2747 0%, #173b68 52%, #1f5d96 100%);
          color: #fff;
          padding: 2.3rem 1.2rem;
          text-align: center;
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.24);
        }
        .industries-final-cta-kicker {
          margin: 0 0 0.5rem;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(220, 236, 252, 0.9);
        }
        .industries-final-cta-card h2 {
          margin: 0;
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          line-height: 1.16;
          letter-spacing: -0.025em;
        }
        .industries-final-cta-card > p {
          margin: 0.7rem auto 0;
          max-width: 760px;
          color: rgba(240, 248, 255, 0.9);
          line-height: 1.58;
        }
        .industries-final-cta-actions {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .industries-final-cta-actions .btn-secondary {
          border-color: rgba(220, 236, 252, 0.48);
          color: #f8fcff;
          background: transparent;
        }
      `}</style>
    </>
  );
}
