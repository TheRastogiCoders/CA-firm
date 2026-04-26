import { Link } from 'react-router-dom';

const valueCards = [
  {
    title: 'Partnership',
    desc: 'We work as an extension of your team with ownership, accountability, and a long-term perspective.',
  },
  {
    title: 'Integrity',
    desc: 'Transparent processes and strong ethical standards guide every advisory and assurance engagement.',
  },
  {
    title: 'Passion',
    desc: 'We are deeply invested in client outcomes and committed to high-quality execution.',
  },
  {
    title: 'Excellence',
    desc: 'Continuous improvement, best practices, and technical depth define our delivery standards.',
  },
];

const peopleMetrics = [
  { value: '20', label: 'Audit Staff' },
  { value: '10', label: 'Finance & Consultancy' },
  { value: '8', label: 'Tax & Legal' },
  { value: '5', label: 'Government Schemes' },
  { value: '7', label: 'EDP Operators' },
  { value: '10', label: 'Support Staff' },
];

const industriesList = [
  { title: 'Manufacturing & Infrastructure', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Banking & Financial Institutions', image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Real Estate & Construction', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Trading & Export Businesses', image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Government & Public Sector', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85' },
  { title: 'SMEs & Startups', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85' },
];

const offices = [
  {
    city: 'Varanasi',
    kind: 'Head Office',
    address: 'S-8/108-B-3-A Prashantpuri, M.A Road, Varanasi - 221002',
  },
  {
    city: 'Delhi',
    kind: 'Branch Office',
    address: '62, Shrestha Vihar, Vikas Marg Extension, Delhi - 110092',
  },
  {
    city: 'Kolkata',
    kind: 'Branch Office',
    address: 'Brijdham Housing Complex, 637 Dakshin Dari Road, 5th Floor Flat-5E, Kolkata',
  },
  {
    city: 'Bokaro',
    kind: 'Branch Office',
    address: 'C-1, 21A, 2nd Floor, City Centre, Sector-4, Bokaro Steel City, Jharkhand',
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero about-page-hero">
        <div className="container">
          <span className="page-hero-kicker">About Dwivedi Gupta & Co.</span>
          <h1 className="page-title about-page-title">Partner-led Chartered Accountant advisory, assurance, and compliance expertise since 2003.</h1>
          <p className="page-subtitle about-page-intro">
            We help businesses stay compliant, strengthen governance, and build long-term financial confidence.
          </p>
          <div className="page-hero-actions about-page-actions">
            <Link to="/schedule-consultation" className="btn btn-primary">Schedule Consultation</Link>
            <Link to="/contact" className="btn btn-secondary">Talk to Our Team</Link>
          </div>
        </div>
      </section>

      <section className="home-section about-seo-intent" aria-labelledby="about-seo-title">
        <div className="container">
          <div className="about-seo-intent-shell">
            <h2 id="about-seo-title">Trusted Chartered Accountants for tax planning, audit assurance, and compliance advisory</h2>
            <p>
              Our firm combines regulatory depth with practical business understanding to support organizations across taxation, GST,
              statutory audit, company law, and strategic financial advisory. Explore our core service portfolio and industry expertise.
            </p>
            <div className="about-seo-intent-links">
              <Link to="/services">Explore CA Services</Link>
              <Link to="/services/audit-assurance">Audit & Assurance</Link>
              <Link to="/services/tax-compliance">Tax & Compliance</Link>
              <Link to="/industries">Industries We Serve</Link>
              <Link to="/team">Meet Our Team</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section about-overview">
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-overview-content">
              <h2>Who We Are</h2>
              <p>
                Founded in 2003, Dwivedi Gupta & Co. (DGC) is a Chartered Accountants firm delivering taxation, audit, assurance, and advisory services through a strong partner-led approach.
              </p>
              <p>
                We tailor every engagement to client context, growth stage, and compliance requirements instead of following a one-size-fits-all model.
              </p>
              <p>
                Our office infrastructure, experienced professionals, and partner-led supervision enable us to handle
                compliance-intensive assignments for corporates, institutions, and growth-stage businesses with confidence.
              </p>
              <p>
                We focus on practical outcomes through disciplined planning, timely coordination, and quality review
                so clients can make decisions with stronger financial and compliance confidence.
              </p>
              <div className="about-meta-grid">
                <article className="about-meta-card"><strong>2003</strong><span>Established</span></article>
                <article className="about-meta-card"><strong>4</strong><span>Office Locations</span></article>
                <article className="about-meta-card"><strong>20+</strong><span>Years of Experience</span></article>
                <article className="about-meta-card"><strong>7</strong><span>Partners</span></article>
              </div>
            </div>
            <div className="about-overview-media">
              <img src="/dist/officeimage.png" alt="Dwivedi Gupta and Co office and work environment" />
            </div>
          </div>
        </div>
      </section>

      <section className="home-section about-vision-mission">
        <div className="container">
          <div className="about-section-head">
            <span className="about-section-head-kicker">Our Direction</span>
            <h2>Vision and Mission</h2>
          </div>
          <div className="about-vm-grid">
            <article className="about-vm-card">
              <p className="about-vm-label">Vision</p>
              <p>To be a trusted leader in professional financial and advisory services through excellence, innovation, and integrity.</p>
            </article>
            <article className="about-vm-card">
              <p className="about-vm-label">Mission</p>
              <p>To deliver practical, ethical, and high-impact solutions that strengthen compliance, improve decision-making, and create long-term client value.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section about-values">
        <div className="container">
          <div className="about-section-head">
            <span className="about-section-head-kicker">What We Stand For</span>
            <h2>Core Values</h2>
          </div>
          <div className="about-values-grid">
            {valueCards.map((item, i) => (
              <article key={item.title} className="about-value-card">
                <span className="about-value-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section about-people">
        <div className="container">
          <div className="about-section-head">
            <span className="about-section-head-kicker">Our People</span>
            <h2>Team Capability</h2>
          </div>
          <p className="about-people-intro">
            We invest in recruiting and developing highly capable professionals, supported by strong infrastructure and multidisciplinary expertise.
          </p>
          <div className="about-people-metrics">
            {peopleMetrics.map((item) => (
              <article className="about-people-metric" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section about-industries">
        <div className="container">
          <div className="about-section-head">
            <span className="about-section-head-kicker">Sector Expertise</span>
            <h2>Industries We Serve</h2>
          </div>
          <div className="about-industries-grid">
            {industriesList.map((item) => (
              <article key={item.title} className="about-industry-card">
                <img src={item.image} alt={item.title} loading="lazy" />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section about-presence">
        <div className="container">
          <div className="about-section-head">
            <span className="about-section-head-kicker">Where We Are</span>
            <h2>Our Presence</h2>
          </div>
          <div className="about-offices-grid">
            {offices.map((item) => (
              <article key={item.city} className="about-office-card">
                <p className="about-office-city">{item.city}</p>
                <p className="about-office-kind">{item.kind}</p>
                <p className="about-office-address">{item.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-cta">
        <div className="container">
          <div className="about-page-cta-card">
            <p className="about-page-cta-kicker">Expert Guidance Since 2003</p>
            <h2>Ready to strengthen compliance and financial decision-making?</h2>
            <p>Work with our team for partner-led advisory and practical execution support.</p>
            <Link to="/schedule-consultation" className="btn btn-primary">Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      <style>{`
        .about-page-hero {
          padding-top: clamp(4.5rem, 8vw, 6rem);
          padding-bottom: clamp(3rem, 6vw, 4rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.2);
          background:
            radial-gradient(1100px 360px at 50% -120px, rgba(23, 59, 104, 0.3), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(220, 234, 249, 0.9) 52%, rgba(243, 249, 255, 0.96) 100%);
        }
        .about-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .about-page-hero::after {
          opacity: 0.12;
          filter: grayscale(8%) saturate(95%);
        }
        .about-page-hero .container {
          max-width: 1220px;
        }
        .about-page-title {
          max-width: 980px;
        }
        .about-page-intro {
          max-width: 920px;
        }
        @media (max-width: 991px) {
          .about-page-hero .container {
            max-width: 900px;
          }
        }
        .about-page-actions {
          margin-top: 1.2rem;
        }
        .about-seo-intent {
          padding-top: 2rem;
          padding-bottom: 0.9rem;
        }
        .about-seo-intent-shell {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          box-shadow: 0 10px 24px rgba(15, 39, 71, 0.06);
          padding: 1rem;
        }
        .about-seo-intent-shell h2 {
          margin: 0;
          color: var(--slate-900);
          font-size: clamp(1.16rem, 2.3vw, 1.48rem);
          line-height: 1.35;
        }
        .about-seo-intent-shell p {
          margin: 0.58rem 0 0;
          color: var(--slate-600);
          font-size: 0.93rem;
          line-height: 1.62;
        }
        .about-seo-intent-links {
          margin-top: 0.74rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .about-seo-intent-links a {
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
        .about-seo-intent-links a:hover {
          color: #173b68;
          border-color: rgba(31, 93, 150, 0.45);
          background: rgba(31, 93, 150, 0.12);
        }
        .about-overview-grid {
          display: grid;
          gap: 1rem;
        }
        @media (min-width: 992px) {
          .about-overview-grid {
            grid-template-columns: 1.1fr 0.9fr;
            align-items: stretch;
          }
        }
        .about-overview-content {
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          padding: 1.1rem;
          box-shadow: 0 12px 30px rgba(15, 39, 71, 0.08);
        }
        .about-overview-content h2 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 0.5rem;
          color: var(--slate-900);
        }
        .about-overview-content p {
          color: var(--text-muted);
          line-height: 1.62;
          margin-bottom: 0.65rem;
        }
        .about-meta-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.55rem;
          margin-top: 0.5rem;
        }
        .about-meta-card {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 12px;
          background: #ffffff;
          padding: 0.65rem 0.6rem;
          text-align: center;
        }
        .about-meta-card strong {
          display: block;
          font-size: 1.2rem;
          color: var(--purple-700);
          line-height: 1.2;
        }
        .about-meta-card span {
          display: block;
          margin-top: 0.15rem;
          font-size: 0.74rem;
          color: var(--slate-600);
          font-weight: 600;
        }
        .about-overview-media {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.22);
          min-height: 100%;
        }
        .about-overview-media img {
          width: 100%;
          height: 100%;
          min-height: 320px;
          object-fit: cover;
        }
        .about-section-head {
          text-align: center;
          margin-bottom: 1rem;
        }
        .about-section-head-kicker {
          display: flex;
          width: fit-content;
          padding: 0.34rem 0.78rem;
          border-radius: 999px;
          border: 1px solid rgba(140, 183, 220, 0.34);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(240, 247, 255, 0.88));
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--purple-700);
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 0.6rem;
        }
        .about-section-head h2 {
          display: block;
          width: 100%;
          margin: 0 auto;
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          line-height: 1.16;
          letter-spacing: -0.03em;
          color: var(--slate-900);
        }
        .about-vm-grid,
        .about-values-grid,
        .about-people-metrics,
        .about-industries-grid,
        .about-offices-grid {
          display: grid;
          gap: 0.8rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .about-vm-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .about-values-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .about-people-metrics { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .about-industries-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .about-offices-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        .about-vm-card,
        .about-value-card,
        .about-people-metric,
        .about-industry-card,
        .about-office-card {
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 8px 20px rgba(15, 39, 71, 0.06);
        }
        .about-vm-card {
          padding: 1rem;
        }
        .about-vm-label {
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--purple-700);
          margin-bottom: 0.35rem;
        }
        .about-vm-card p:last-child {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.58;
        }
        .about-value-card {
          padding: 0.95rem;
        }
        .about-value-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background: linear-gradient(135deg, rgba(31, 79, 134, 0.12), rgba(74, 134, 189, 0.18));
          color: var(--purple-700);
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 0.45rem;
        }
        .about-value-card h3 {
          margin: 0 0 0.35rem 0;
          color: var(--slate-900);
          font-size: 1rem;
        }
        .about-value-card p {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.55;
        }
        .about-people-intro {
          max-width: 760px;
          margin: 0 auto 0.8rem;
          text-align: center;
          color: var(--text-muted);
        }
        .about-people-metric {
          padding: 0.9rem 0.7rem;
          text-align: center;
        }
        .about-people-metric strong {
          display: block;
          color: var(--purple-700);
          font-size: 1.3rem;
          line-height: 1.2;
        }
        .about-people-metric span {
          display: block;
          margin-top: 0.18rem;
          color: var(--slate-600);
          font-size: 0.8rem;
          font-weight: 600;
        }
        .about-industry-card img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          border-radius: 14px 14px 0 0;
        }
        .about-industry-card h3 {
          margin: 0;
          padding: 0.75rem 0.8rem;
          font-size: 0.92rem;
          color: var(--slate-800);
        }
        .about-office-card {
          padding: 0.9rem 0.85rem;
        }
        .about-office-city {
          margin: 0;
          color: var(--slate-900);
          font-size: 1rem;
          font-weight: 700;
        }
        .about-office-kind {
          margin: 0.1rem 0 0.35rem;
          color: var(--purple-700);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .about-office-address {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.86rem;
          line-height: 1.5;
        }
        .about-page-cta {
          padding: 1rem 0 2rem;
        }
        .about-page-cta-card {
          border: 1px solid rgba(140, 183, 220, 0.26);
          background: linear-gradient(135deg, #0f2747 0%, #173b68 52%, #1f5d96 100%);
          border-radius: 22px;
          padding: 2.4rem 1.2rem;
          text-align: center;
          color: #fff;
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.24);
        }
        .about-page-cta-kicker {
          margin: 0 0 0.5rem 0;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(220, 236, 252, 0.9);
        }
        .about-page-cta-card h2 {
          margin: 0 0 0.55rem 0;
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          line-height: 1.16;
          letter-spacing: -0.025em;
        }
        .about-page-cta-card p {
          margin: 0 auto 1.15rem;
          max-width: 700px;
          color: rgba(240, 248, 255, 0.9);
          line-height: 1.58;
        }
      `}</style>
    </>
  );
}
