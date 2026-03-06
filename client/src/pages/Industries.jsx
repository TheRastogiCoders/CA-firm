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

const whySectorFocus = [
  'Regulatory requirements vary significantly by sector—we bring sector-specific knowledge to ensure full compliance.',
  'Industry benchmarks and best practices help us deliver more relevant advice and efficient audits.',
  'We understand your value chain and key risks, so our solutions are practical and aligned with your operations.',
];

export default function Industries() {
  return (
    <>
      {/* Hero — same style as Home/About */}
      <section className="hero hero-industries" aria-label="Industries hero">
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
              <p className="hero-tagline">Sector Expertise · Compliance · Advisory</p>
              <h1 className="hero-title">Industries We Serve</h1>
              <p className="hero-desc">
                We provide assurance, tax, and advisory services across multiple industries with sector-specific knowledge and compliance support tailored to your business.
              </p>
              <div className="hero-cta">
                <Link to="/services" className="hero-btn hero-btn-primary">Our Services</Link>
                <Link to="/contact" className="hero-btn hero-btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="home-section home-about">
        <div className="container">
          <div className="industries-header">
            <span className="industries-eyebrow">Sector Expertise</span>
            <div className="industries-accent" />
            <h2 className="industries-title">Industry-Focused Solutions</h2>
            <p className="industries-intro">
              Every industry has unique compliance needs, reporting standards, and growth challenges. Dwivedi Gupta & Co. combines deep technical expertise with sector knowledge to deliver practical, timely, and value-driven solutions.
            </p>
          </div>
          <div className="industry-intro-text">
            <p>
              From manufacturing and banking to real estate, trading, government, SMEs, and non-profits—we serve a diverse client base across India. Our partner-led approach ensures that you receive advice that understands your sector’s regulations, risks, and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Industries grid with content */}
      <section className="home-section home-industries">
        <div className="container">
          <div className="industries-header">
            <span className="industries-eyebrow">Where We Work</span>
            <div className="industries-accent" />
            <h2 className="industries-title">Sectors We Serve</h2>
            <p className="industries-intro">
              Click through to see how we support each sector with tailored assurance, tax, and advisory services.
            </p>
          </div>
          <div className="industry-grid">
            {industriesData.map((ind, i) => (
              <article key={i} className="industry-card">
                <div className="industry-card-img">
                  <img src={ind.image} alt="" />
                  <div className="industry-card-overlay" />
                </div>
                <div className="industry-card-body">
                  <h3>{ind.title}</h3>
                  <p className="industry-card-desc">{ind.description}</p>
                  <ul className="industry-card-services">
                    {ind.services.map((s, j) => (
                      <li key={j}>{s}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why sector focus */}
      <section className="home-section why-choose-us">
        <div className="container">
          <div className="why-header">
            <span className="why-eyebrow">Our Approach</span>
            <div className="why-accent" />
            <h2 className="why-title">Why Sector Expertise Matters</h2>
            <p className="why-intro">
              We invest in understanding your industry so our advice is relevant, compliant, and actionable.
            </p>
          </div>
          <div className="why-grid" style={{ gridTemplateColumns: '1fr' }}>
            {whySectorFocus.map((text, i) => (
              <div key={i} className="why-card">
                <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="why-card-bar" />
                <p style={{ margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-hero-2">
        <div className="home-hero-2-pattern" aria-hidden="true" />
        <div className="home-hero-2-accent" aria-hidden="true" />
        <div className="container home-hero-2-inner">
          <p className="home-hero-2-eyebrow">Expert guidance since 2003</p>
          <h2 className="home-hero-2-title">Your Industry. Our Expertise.</h2>
          <p className="home-hero-2-desc">
            Partner with Dwivedi Gupta & Co. for sector-specific assurance, tax, and advisory support.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/schedule-consultation" className="btn btn-primary btn-lg home-hero-2-btn">Schedule a Consultation</Link>
            <Link to="/contact" className="hero-btn hero-btn-outline" style={{ padding: '0.875rem 1.5rem', borderRadius: 8 }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero-industries .hero-nav { display: none; }
        .industry-intro-text {
          max-width: 720px;
          margin: 0 auto;
        }
        .industry-intro-text p {
          font-size: 1.0625rem;
          color: var(--text-muted);
          line-height: 1.75;
          margin: 0;
        }
        .industry-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .industry-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .industry-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        }
        .industry-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
        }
        .industry-card:hover {
          border-color: var(--purple-400);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1);
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
          padding: 1.5rem 1.5rem 1.75rem;
        }
        .industry-card-body h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--slate-800);
          margin: 0 0 0.75rem 0;
          line-height: 1.3;
        }
        .industry-card-desc {
          font-size: 0.9375rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }
        .industry-card-services {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .industry-card-services li {
          font-size: 0.875rem;
          color: var(--slate-600);
          line-height: 1.5;
          padding-left: 1.25rem;
          position: relative;
          margin-bottom: 0.35rem;
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
      `}</style>
    </>
  );
}
