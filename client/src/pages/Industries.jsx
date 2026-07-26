import { Link } from 'react-router-dom';
import PageCtaBand from '../components/PageCtaBand';
import { CLIENT_LOGOS } from '../data/clientLogos';
import {
  ManufacturingIcon,
  BankingIcon,
  RealEstateIcon,
  TradingIcon,
  GovernmentIcon,
  SmeStartupIcon,
  NonprofitIcon,
} from '../components/IndustryIcons';

const industries = [
  {
    title: 'Manufacturing & Infrastructure',
    description:
      'Helping manufacturers and infrastructure businesses with taxation, compliance, cost optimization, and financial advisory.',
    Icon: ManufacturingIcon,
  },
  {
    title: 'Banking & Financial Services',
    description:
      'Supporting banks, NBFCs, and financial institutions with audits, regulatory compliance, and risk management.',
    Icon: BankingIcon,
  },
  {
    title: 'Real Estate & Construction',
    description:
      'Providing tax, accounting, project finance, and compliance solutions for developers, builders, and contractors.',
    Icon: RealEstateIcon,
  },
  {
    title: 'Trading & Export Businesses',
    description:
      'Enabling traders and exporters with GST, customs, cross-border taxation, and financial compliance.',
    Icon: TradingIcon,
  },
  {
    title: 'Government & Public Sector',
    description:
      'Delivering audit, compliance, and advisory services aligned with government regulations and public sector standards.',
    Icon: GovernmentIcon,
  },
  {
    title: 'Startups & MSMEs',
    description:
      'Empowering growing businesses with company formation, tax planning, funding support, and end-to-end compliance.',
    Icon: SmeStartupIcon,
  },
  {
    title: 'NGOs & Charitable Trusts',
    description:
      'Assisting trusts and non-profits with registrations, statutory compliance, audits, and transparent financial reporting.',
    Icon: NonprofitIcon,
  },
];

const clientTypes = [
  'Corporates & Listed Companies',
  'MSMEs & Growing Businesses',
  'Startups',
  'Individuals & HNIs',
];

export default function Industries() {
  return (
    <>
      <section className="page-hero industries-simple-hero" aria-labelledby="industries-page-title">
        <div className="container">
          <span className="page-hero-kicker">Industries &amp; Clients</span>
          <h1 id="industries-page-title" className="page-title">
            Sectors We Serve
          </h1>
          <p className="page-subtitle">
            Tax, audit, and compliance support shaped by your industry — for corporates, MSMEs,
            startups, and institutions across India.
          </p>
          <div className="page-hero-actions">
            <Link to="/services" className="btn btn-primary">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section industries-simple-list" aria-labelledby="industries-list-title">
        <div className="container">
          <h2 id="industries-list-title" className="industries-simple-heading">
            Industries We Serve
          </h2>
          <div className="industries-simple-grid">
            {industries.map((item, index) => {
              const Icon = item.Icon;
              return (
                <article
                  key={item.title}
                  className="industries-simple-card"
                  style={{ '--industry-delay': `${index * 70}ms` }}
                >
                  <span className="industries-simple-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-section industries-clients" aria-labelledby="industries-clients-title">
        <div className="container">
          <h2 id="industries-clients-title" className="industries-simple-heading">
            Organizations We Work With
          </h2>
          <p className="industries-clients-intro">
            A cross-section of businesses and institutions that trust Dwivedi Gupta &amp; Co.
          </p>

          {CLIENT_LOGOS.length > 0 && (
            <div className="industries-clients-logos">
              {CLIENT_LOGOS.map((logo) => (
                <div key={logo.name} className="industries-clients-logo">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          <h3 className="industries-clients-subheading">Who We Support</h3>
          <ul className="industries-clients-types">
            {clientTypes.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section industries-simple-cta">
        <div className="container">
          <PageCtaBand
            title="Need support in your sector?"
            description="Tell us about your industry and requirements. We will outline the right scope and next steps."
          />
        </div>
      </section>

      <style>{`
        .industries-simple-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .industries-simple-hero .page-subtitle {
          max-width: 40rem;
        }
        .industries-simple-hero .page-hero-actions {
          margin-top: 1.1rem;
        }

        .industries-simple-list {
          padding-top: 2.5rem;
          padding-bottom: 1.5rem;
        }
        .industries-simple-heading {
          margin: 0 0 1.25rem;
          text-align: center;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: var(--slate-900);
          letter-spacing: -0.02em;
        }
        .industries-simple-grid {
          display: grid;
          gap: 0.85rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .industries-simple-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .industries-simple-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .industries-simple-card {
          padding: 1.15rem 1.05rem 1.1rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 8px 22px rgba(15, 39, 71, 0.06);
          transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
          animation: industry-card-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--industry-delay, 0ms);
        }
        .industries-simple-card:hover {
          border-color: rgba(31, 93, 150, 0.38);
          box-shadow: 0 14px 28px rgba(15, 39, 71, 0.12);
          transform: translateY(-3px);
        }
        .industries-simple-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3.35rem;
          height: 3.35rem;
          margin-bottom: 0.85rem;
          border-radius: 12px;
          color: var(--purple-700);
          background: linear-gradient(145deg, rgba(31, 93, 150, 0.14), rgba(110, 162, 208, 0.18));
          box-shadow: inset 0 0 0 1px rgba(31, 93, 150, 0.12);
          transition: transform 0.3s ease, background 0.25s ease, color 0.25s ease;
        }
        .industries-simple-icon svg {
          width: 1.7rem;
          height: 1.7rem;
          animation: industry-icon-float 3.2s ease-in-out infinite;
          animation-delay: var(--industry-delay, 0ms);
        }
        .industries-simple-card:hover .industries-simple-icon {
          color: #fff;
          background: linear-gradient(145deg, #173b68, #1f5d96);
          transform: scale(1.06);
        }
        .industries-simple-card:hover .industries-simple-icon svg {
          animation-play-state: paused;
        }
        .industries-simple-card h3 {
          margin: 0 0 0.4rem;
          font-size: 1.05rem;
          color: var(--slate-900);
          line-height: 1.3;
        }
        .industries-simple-card p {
          margin: 0;
          color: var(--slate-600);
          font-size: 0.9rem;
          line-height: 1.55;
        }
        @keyframes industry-card-in {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes industry-icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .industries-simple-card,
          .industries-simple-icon svg {
            animation: none;
          }
          .industries-simple-card:hover {
            transform: none;
          }
        }

        .industries-clients {
          padding-top: 1rem;
          padding-bottom: 2rem;
          background: linear-gradient(180deg, var(--slate-50) 0%, var(--white) 100%);
        }
        .industries-clients-intro {
          margin: -0.5rem auto 1.35rem;
          max-width: 36rem;
          text-align: center;
          color: var(--slate-600);
          font-size: 1rem;
          line-height: 1.6;
        }
        .industries-clients-logos {
          display: grid;
          gap: 0.75rem;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        @media (min-width: 640px) {
          .industries-clients-logos {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .industries-clients-logos {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        .industries-clients-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 88px;
          padding: 0.85rem 1rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 10px;
          background: #fff;
        }
        .industries-clients-logo img {
          max-width: 100%;
          max-height: 52px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        .industries-clients-subheading {
          margin: 2.1rem 0 1rem;
          text-align: center;
          font-size: clamp(1.2rem, 2.4vw, 1.45rem);
          color: var(--slate-900);
          letter-spacing: -0.02em;
        }
        .industries-clients-types {
          display: grid;
          gap: 0.65rem;
          grid-template-columns: 1fr;
          list-style: none;
          margin: 0 auto;
          padding: 0;
          max-width: 720px;
        }
        @media (min-width: 640px) {
          .industries-clients-types {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .industries-clients-types li {
          padding: 0.85rem 1rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 10px;
          background: #fff;
          color: var(--slate-800);
          font-size: 0.95rem;
          font-weight: 600;
          text-align: center;
        }

        .industries-simple-cta {
          padding-top: 0.5rem;
          padding-bottom: 2.5rem;
        }
      `}</style>
    </>
  );
}
