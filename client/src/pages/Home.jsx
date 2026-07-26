import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageCtaBand from '../components/PageCtaBand';
import { SERVICE_ICONS } from '../components/ServiceIcons';

const heroContent = {
  tagline: 'Tax, Assurance, Finance & Advisory.',
  titleLine1: 'Providing end-to-end assurance, taxation, compliance,',
  titleLine2: 'and strategic advisory services for businesses, professionals,',
  titleLine3: 'startups, and high-net-worth individuals',
};

const coreServices = [
  {
    title: 'Audit & Assurance',
    slug: 'audit-assurance',
    description: 'Statutory, internal, tax, and stock audits.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Tax & Regulatory Services',
    slug: 'tax-regulatory-services',
    description: 'Tax planning, GST, TDS, and regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Corporate Law & Compliance',
    slug: 'corporate-law-compliance',
    description: 'Incorporation, company law, and ROC filings.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Project Finance & Consultancy',
    slug: 'project-finance-consultancy',
    description: 'Structuring, syndication, valuation, and advisory.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Government Subsidies',
    slug: 'government-subsidies',
    description: 'Scheme selection, applications, and incentive support.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Startup Advisory',
    slug: 'startup-advisory',
    description: 'Setup, compliance, tax, and funding-readiness support.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
  },
];

const homeStats = [
  { key: 'years', value: 20, suffix: '+', label: 'Years of Excellence' },
  { key: 'partners', value: 7, suffix: '', label: 'Partners' },
  { key: 'offices', value: 4, suffix: '', label: 'Office Locations' },
  { key: 'services', value: 6, suffix: '', label: 'Service Verticals' },
];

const testimonials = [
  {
    quote: 'Responsive team with practical guidance on urgent compliance matters.',
    by: 'Kajaria Tiles',
  },
  {
    quote: 'Clear advice on audits, tax planning, and regulatory questions.',
    by: "Haldiram's",
  },
  {
    quote: 'Dependable advisor with sound technical knowledge and timely delivery.',
    by: 'RC Rungta Group',
  },
];

export default function Home() {
  const [stats, setStats] = useState(() =>
    homeStats.reduce((acc, item) => {
      acc[item.key] = 0;
      return acc;
    }, {})
  );
  const statsSectionRef = useRef(null);
  const statsAnimatedRef = useRef(false);

  useEffect(() => {
    if (!statsSectionRef.current) return undefined;

    let rafId = null;
    let observer = null;

    const animateStats = () => {
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;

        setStats(
          homeStats.reduce((acc, item) => {
            acc[item.key] = Math.round(item.value * eased);
            return acc;
          }, {})
        );

        if (progress < 1) {
          rafId = window.requestAnimationFrame(tick);
        }
      };

      rafId = window.requestAnimationFrame(tick);
    };

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !statsAnimatedRef.current) {
          statsAnimatedRef.current = true;
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(statsSectionRef.current);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-bg-image" />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="container hero-container">
            <div className="hero-main">
              <p className="hero-eyebrow hero-reveal hero-reveal-1">
                {heroContent.tagline}
              </p>
              <h1 id="hero-heading" className="hero-title hero-reveal hero-reveal-2">
                <span className="hero-title-line">{heroContent.titleLine1}</span>
                <span className="hero-title-line">{heroContent.titleLine2}</span>
                <span className="hero-title-line">{heroContent.titleLine3}</span>
              </h1>
              <div className="hero-cta hero-reveal hero-reveal-3">
                <Link to="/services" className="hero-btn hero-btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-stats" ref={statsSectionRef} aria-label="Firm highlights">
        <div className="container">
          <div className="home-stats-wrap">
            {homeStats.map((item) => (
              <article key={item.key} className="home-stat-card">
                <p className="home-stat-value">
                  {stats[item.key]}
                  {item.suffix}
                </p>
                <p className="home-stat-label">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about-the-firm" className="home-section home-about">
        <div className="container">
          <div className="home-simple-about">
            <div className="home-simple-about-copy">
              <span className="about-eyebrow">Who We Are</span>
              <h2 className="about-title">Dwivedi Gupta &amp; Co.</h2>
              <p>
                A Chartered Accountants firm established in 2003, based in Varanasi with offices in
                Delhi, Kolkata, and Bokaro. We provide tax, audit, GST, company law, and advisory
                support for businesses and institutions.
              </p>
              <Link to="/about-us" className="btn btn-secondary">
                About the Firm
              </Link>
            </div>
            <div className="home-simple-about-media">
              <img
                src="/images/gallery/office-varanasi.png"
                alt="Dwivedi Gupta & Co. head office in Varanasi"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-services">
        <div className="container">
          <div className="services-header">
            <span className="services-eyebrow-wrap">
              <span className="services-eyebrow">What We Offer</span>
            </span>
            <h2 className="services-title">Our Core Services</h2>
            <p className="services-intro">Six service verticals spanning audit, tax, corporate law, finance, subsidies, and startups.</p>
          </div>
          <div className="home-services-grid home-services-grid-simple">
            {coreServices.map((s) => {
              const Icon = SERVICE_ICONS[s.slug];
              return (
              <Link key={s.slug} to={`/services/${s.slug}`} className="home-service-card home-service-card-link">
                <div className="service-card-media">
                  <img src={s.image} alt="" loading="lazy" />
                  <div className="service-card-media-overlay" aria-hidden="true" />
                </div>
                {Icon && (
                  <span className="service-icon" aria-hidden="true">
                    <Icon />
                  </span>
                )}
                <div className="service-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <span className="home-service-card-read-more">Learn more</span>
                </div>
              </Link>
              );
            })}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section home-testimonials" aria-labelledby="home-testimonials-title">
        <div className="container">
          <header className="home-testimonials-head">
            <span className="home-testimonials-eyebrow">Testimonials</span>
            <h2 id="home-testimonials-title" className="home-testimonials-heading">
              What Clients Say
            </h2>
          </header>
          <div className="home-testimonials-grid">
            {testimonials.map((item) => (
              <blockquote key={item.by} className="home-testimonial-card">
                <span className="home-testimonial-mark" aria-hidden="true">“</span>
                <p>{item.quote}</p>
                <cite>{item.by}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-cta-wrap">
        <div className="container">
          <PageCtaBand
            title="Ready to discuss your requirements?"
            description="Book a consultation or send us a query. We respond within 24 to 48 working hours."
          />
        </div>
      </section>

      <style>{`
        .home-section {
          padding: 2.5rem 0;
        }
        @media (min-width: 768px) {
          .home-section { padding: 3.25rem 0; }
        }

        .home-about {
          background: linear-gradient(180deg, var(--white) 0%, var(--slate-50) 100%);
        }
        .home-simple-about {
          display: grid;
          gap: 1.75rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .home-simple-about {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 2.5rem;
          }
        }
        .home-simple-about-copy .about-eyebrow {
          display: inline-block;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: var(--purple-700);
          text-transform: uppercase;
          margin-bottom: 0.65rem;
        }
        .home-simple-about-copy .about-title {
          font-size: clamp(1.75rem, 3.5vw, 2.35rem);
          color: var(--slate-900);
          margin: 0 0 0.85rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .home-simple-about-copy p {
          margin: 0 0 1.25rem;
          color: var(--slate-600);
          font-size: 1.02rem;
          line-height: 1.65;
          max-width: 34rem;
        }
        .home-simple-about-media {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
          aspect-ratio: 5 / 4;
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.1);
        }
        .home-simple-about-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .home-services {
          background: linear-gradient(180deg, var(--slate-50) 0%, var(--white) 100%);
        }
        .services-header {
          margin-bottom: 1.75rem;
          text-align: center;
        }
        .services-eyebrow-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.36rem 0.82rem;
          border-radius: 999px;
          border: 1px solid rgba(140, 183, 220, 0.34);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(240, 247, 255, 0.88));
          margin-bottom: 0.62rem;
        }
        .services-eyebrow {
          display: block;
          font-size: 0.73rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: var(--purple-700);
          text-transform: uppercase;
          margin: 0;
        }
        .services-title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          color: var(--slate-900);
          margin: 0 0 0.5rem;
          line-height: 1.18;
          letter-spacing: -0.02em;
        }
        .home-services .services-title::after {
          display: none;
        }
        .services-intro {
          font-size: 1.02rem;
          color: var(--text-muted);
          max-width: 36rem;
          margin: 0 auto;
          line-height: 1.6;
        }
        .home-services-grid-simple {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .home-services-grid-simple { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .home-services-grid-simple { grid-template-columns: repeat(4, 1fr); gap: 1.35rem; }
        }
        .home-service-card {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 10px;
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          box-shadow: 0 12px 26px rgba(15, 39, 71, 0.08);
          transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
        }
        .home-service-card:hover {
          border-color: rgba(31, 79, 134, 0.36);
          box-shadow: 0 16px 34px rgba(15, 39, 71, 0.14);
          transform: translateY(-3px);
        }
        .service-card-media {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .service-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .service-card-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(2, 6, 23, 0.1) 0%, rgba(2, 6, 23, 0.28) 100%);
        }
        .service-icon {
          position: absolute;
          top: 0.7rem;
          left: 0.75rem;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3.15rem;
          height: 3.15rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.94);
          color: var(--purple-700);
          box-shadow: 0 6px 16px rgba(2, 6, 23, 0.18);
        }
        .service-icon svg {
          width: 1.6rem;
          height: 1.6rem;
        }
        .service-card-body {
          padding: 1rem 1rem 1.05rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .home-service-card h3 {
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--slate-800);
          margin: 0 0 0.4rem;
          line-height: 1.35;
        }
        .home-service-card p {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
          flex: 1;
        }
        .home-service-card-link {
          color: inherit;
          text-decoration: none;
        }
        .home-service-card-read-more {
          display: inline-flex;
          align-items: center;
          margin-top: 0.85rem;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--purple-700);
        }
        .home-service-card-read-more::after {
          content: '›';
          margin-left: 0.3rem;
        }
        .services-cta {
          margin-top: 1.75rem;
          text-align: center;
        }

        .home-testimonials {
          padding-top: 1.5rem;
          padding-bottom: 2rem;
          background: linear-gradient(180deg, var(--white) 0%, var(--slate-50) 100%);
        }
        .home-testimonials-head {
          text-align: center;
          margin-bottom: 1.35rem;
        }
        .home-testimonials-eyebrow {
          display: inline-block;
          margin-bottom: 0.5rem;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--purple-700);
        }
        .home-testimonials-heading {
          margin: 0;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: var(--slate-900);
          letter-spacing: -0.02em;
        }
        .home-testimonials-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
          align-items: stretch;
        }
        @media (min-width: 768px) {
          .home-testimonials-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.1rem;
          }
        }
        .home-testimonial-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          margin: 0;
          padding: 1.25rem 1.15rem 1.15rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 8px 22px rgba(15, 39, 71, 0.06);
        }
        .home-testimonial-mark {
          display: block;
          margin-bottom: 0.15rem;
          font-family: var(--font-display);
          font-size: 2.4rem;
          font-weight: 600;
          line-height: 0.8;
          color: rgba(23, 59, 104, 0.28);
        }
        .home-testimonial-card p {
          margin: 0;
          flex: 1;
          font-size: 0.98rem;
          line-height: 1.65;
          color: var(--slate-700);
        }
        .home-testimonial-card cite {
          display: block;
          margin-top: 1rem;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(148, 163, 184, 0.2);
          font-style: normal;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--purple-700);
          line-height: 1.4;
        }

        .home-cta-wrap {
          padding-top: 0.5rem;
          padding-bottom: 3rem;
          background: var(--white);
        }
      `}</style>
    </>
  );
}
