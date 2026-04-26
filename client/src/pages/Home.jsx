import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CLIENT_LOGOS } from '../data/clientLogos';

const heroSlides = [
  {
    label: 'DWIVEDI GUPTA & CO.',
    tagline: 'Chartered Accountants | Advisors | Consultants',
    title: 'Chartered Accountants for Tax, Audit & Advisory',
    desc: 'We help businesses with tax filing, audits, compliance, and financial advisory services.',
  },
  {
    label: 'DWIVEDI GUPTA & CO.',
    tagline: 'Assurance | Taxation | Advisory | Consulting',
    title: 'Compliance and Growth Support for Businesses',
    desc: 'From statutory compliance to strategic advisory, we support corporates, SMEs, and institutions.',
  },
  {
    label: 'DWIVEDI GUPTA & CO.',
    tagline: 'Est. 2003 — 20+ Years of Excellence',
    title: 'Practical Financial and Regulatory Guidance',
    desc: 'Our team delivers clear, partner-led support in tax, audit, corporate law, and finance.',
  },
];

const coreServices = [
  {
    title: 'Tax & Regulatory Services',
    slug: 'tax-compliance',
    description: 'Strategic tax planning, compliance, and representation services to optimize tax efficiency while ensuring full regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Audit & Assurance',
    slug: 'audit-assurance',
    description: 'Comprehensive audit solutions including statutory audits, internal audits, tax audits, stock audits, and management audits to strengthen financial controls and transparency.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Corporate Law & Compliance',
    slug: 'corporate-law',
    description: 'Company incorporation, corporate governance support, secretarial services, regulatory filings, and legal compliance assistance.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Advisory & Consulting',
    slug: 'financial-consulting',
    description: 'Business advisory services across taxation, regulatory frameworks, LLPs, trusts, and financial regulations with research-based professional insights.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Finance & Project Consultancy',
    slug: 'project-finance',
    description: 'End-to-end financial consulting including project finance, debt syndication, banking support, and financial structuring for businesses.',
    image: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Government Schemes Consultancy',
    slug: 'government-schemes-advisory',
    description: 'Awareness, planning, and implementation support for Central and State Government schemes across multiple sectors.',
    image: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=1200&q=85',
  },
];

const whyChooseUs = [
  { title: 'Expert Team', desc: 'Qualified CAs and professionals with deep expertise in tax, audit, and compliance.' },
  { title: 'Full-Service', desc: 'From incorporation to annual filings, audit, and advisory—we cover it all under one roof.' },
  { title: 'Partner-Led', desc: 'Partner-led engagement ensures quality assurance and direct access to senior expertise.' },
  { title: 'Timely & Reliable', desc: 'We meet deadlines and keep you updated so you never miss a compliance date.' },
  { title: 'RBI & CAG Empanelled', desc: 'Recognized credentials that reflect our standards and capability to serve institutions.' },
  { title: 'Multi-City Presence', desc: 'Head office in Varanasi with branches in Delhi, Kolkata, and Bokaro for nationwide reach.' },
];

const presenceBranches = [
  { initial: 'D', city: 'Delhi', address: '62, Shrestha Vihar, Vikas Marg Extension, Delhi – 110092', contact: 'Reach us for audit, tax & compliance in NCR.' },
  { initial: 'K', city: 'Kolkata', address: 'Brijdham Housing Complex, 637 Dakshin Dari Road, 5th Floor Flat-5E, Building No 16-C, Kolkata, West Bengal', contact: 'Serving Eastern India with local expertise.' },
  { initial: 'B', city: 'Bokaro', address: 'C-1, 21A, 2nd Floor, City Centre, Sector-4, Bokaro Steel City, Jharkhand', contact: 'Industry-focused CA services in the region.' },
];

const industries = [
  {
    title: 'Manufacturing & Infrastructure',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85',
    desc: 'Compliance, audit, and financial control frameworks for operationally complex businesses.',
  },
  {
    title: 'Banking & Financial Institutions',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85',
    desc: 'Regulatory-ready support for governance, reporting, and assurance requirements.',
  },
  {
    title: 'Real Estate & Construction',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    desc: 'Project-focused advisory, tax planning, and compliance support across development cycles.',
  },
  {
    title: 'Trading & Export Businesses',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85',
    desc: 'Structured tax and documentation guidance for cross-border operations and growth.',
  },
  {
    title: 'Government & Public Sector',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85',
    desc: 'Audit, compliance, and advisory solutions aligned with institutional accountability standards.',
  },
  {
    title: 'SMEs & Startups',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85',
    desc: 'Scalable financial, tax, and compliance support tailored for fast-moving growth stages.',
  },
  {
    title: 'Non-Profit Organizations',
    image: 'https://images.unsplash.com/photo-1469571486292-b53601020e02?auto=format&fit=crop&w=1200&q=85',
    desc: 'Transparent reporting and regulatory support for mission-driven organizations.',
  },
];

const clientResponses = [
  {
    quote: 'Their team is highly responsive and always delivers practical guidance on time-sensitive compliance matters.',
    by: 'CFO, Manufacturing Group',
  },
  {
    quote: 'We value their partner-led involvement and clear advisory during audits, tax planning, and strategic decisions.',
    by: 'Director, Financial Services Firm',
  },
  {
    quote: 'A dependable long-term advisor with strong domain knowledge and professional execution standards.',
    by: 'Founder, Growth-Stage Enterprise',
  },
];

const homeStats = [
  { key: 'years', value: 20, suffix: '+', label: 'Years of Excellence' },
  { key: 'partners', value: 7, suffix: '+', label: 'Partners' },
  { key: 'offices', value: 4, suffix: '', label: 'Office Locations' },
  { key: 'services', value: 12, suffix: '+', label: 'Service Verticals' },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [stats, setStats] = useState(() => (
    homeStats.reduce((acc, item) => {
      acc[item.key] = 0;
      return acc;
    }, {})
  ));
  const statsSectionRef = useRef(null);
  const statsAnimatedRef = useRef(false);

  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(t);
  }, []);

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
      {/* Hero — Modern premium full-screen */}
      <section className="hero" aria-label="Hero">
        <div className="hero-bg">
          <div className="hero-bg-image" />
          <div className="hero-overlay hero-overlay-base" />
          <div className="hero-overlay hero-overlay-gradient" />
          <div className="hero-vignette" />
        </div>
        <div className="hero-content">
          <div className="container hero-container">
            {heroSlides.map((slide, i) => (
              <div
                key={i}
                className={`hero-slide ${i === heroIndex ? 'hero-slide-active' : ''}`}
                aria-hidden={i !== heroIndex}
              >
                <div className="hero-main">
                  <p className="hero-tagline">{slide.tagline}</p>
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-desc hero-desc-home-singleline">{slide.desc}</p>
                  <div className="hero-cta">
                    <Link to="/schedule-consultation" className="hero-btn hero-btn-primary">Get Consultation</Link>
                    <Link to="/contact" className="hero-btn hero-btn-outline">Contact Us</Link>
                  </div>
                  <div className="hero-trust">
                    <span className="hero-trust-item">20+ Years of Experience</span>
                    <span className="hero-trust-item">RBI Registered</span>
                    <span className="hero-trust-item">CAG Empanelled</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-nav" aria-label="Slide navigation">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero-dot ${i === heroIndex ? 'hero-dot-active' : ''}`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setHeroIndex(i)}
            >
              <span key={`${i}-${heroIndex}`} className="hero-dot-progress" />
            </button>
          ))}
        </div>
      </section>

      {/* Home Stats */}
      <section className="home-stats" ref={statsSectionRef} aria-label="Firm highlights">
        <div className="container">
          <div className="home-stats-wrap">
            {homeStats.map((item) => (
              <article key={item.key} className="home-stat-card">
                <p className="home-stat-value">
                  {stats[item.key]}{item.suffix}
                </p>
                <p className="home-stat-label">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-seo-intent" aria-labelledby="home-seo-title">
        <div className="container">
          <div className="home-seo-intent-shell">
            <h2 id="home-seo-title">Chartered Accountant firm for tax, audit, GST, and compliance services in India</h2>
            <p>
              Dwivedi Gupta & Co. helps businesses with partner-led tax advisory, statutory and internal audit, GST compliance,
              company law support, and financial consulting. Explore focused service pages to review scope, deliverables, and ideal fit.
            </p>
            <div className="home-seo-intent-links">
              <Link to="/services/tax-compliance">Tax Compliance Services</Link>
              <Link to="/services/audit-assurance">Audit & Assurance Services</Link>
              <Link to="/services/gst-advisory">GST Advisory Services</Link>
              <Link to="/services/company-formation">Company Formation Services</Link>
              <Link to="/industries">Industry-Specific CA Support</Link>
              <Link to="/contact">Contact Our CA Team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Firm */}
      <section id="about-the-firm" className="home-section home-about">
        <div className="container">
          <div className="about-header">
            <div className="about-header-kicker-wrap">
              <span className="about-eyebrow">Who We Are</span>
            </div>
            <h2 className="about-title">About the Firm</h2>
            <p className="about-header-subtitle">Built on trust, guided by expertise, and focused on long-term client value.</p>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <div className="about-content-shell">
                <div className="about-intro-row">
                  <span className="about-kicker">Trusted Since 2003</span>
                  <span className="about-kicker-dot" aria-hidden="true" />
                  <span className="about-kicker-muted">Partner-Led Professional Services</span>
                </div>
                <h3 className="about-lead-title">Reliable Tax, Audit, and Advisory Support for Growing Businesses</h3>
                <p className="about-summary">
                  Dwivedi Gupta & Co. delivers practical, compliance-focused solutions with senior partner involvement and consistent execution standards.
                </p>
                <p className="about-summary about-summary-muted">
                  Every engagement is tailored to your growth stage, business model, and regulatory needs.
                </p>
                <p className="about-summary about-summary-muted">
                  With a strong on-ground office presence and multidisciplinary teams, we deliver responsive support,
                  structured execution, and decision-ready insights for businesses across sectors.
                </p>
                <p className="about-summary about-summary-muted">
                  Our teams follow a process-driven approach covering assessment, execution, review, and post-engagement
                  support so clients receive clarity along with consistent implementation quality.
                </p>
                <div className="about-highlights-grid">
                  <article className="about-highlight-card">
                    <p className="about-highlight-title">Credentials</p>
                    <p className="about-highlight-text">RBI Registered and CAG Empanelled.</p>
                  </article>
                  <article className="about-highlight-card">
                    <p className="about-highlight-title">Comprehensive Services</p>
                    <p className="about-highlight-text">Tax, audit, compliance, advisory, and finance support.</p>
                  </article>
                  <article className="about-highlight-card">
                    <p className="about-highlight-title">Client Commitment</p>
                    <p className="about-highlight-text">Long-term relationships built on integrity and responsiveness.</p>
                  </article>
                </div>
                <div className="about-cta-wrap">
                  <Link to="/about-us" className="btn btn-secondary">Learn More About Us</Link>
                  <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
                </div>
              </div>
            </div>
            <div className="about-images">
              <div className="about-img-main">
                <img src="/dist/officeimage.png" alt="Dwivedi Gupta and Co office exterior and workspace" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="home-section home-services">
        <div className="container">
          <div className="services-header">
            <span className="services-eyebrow-wrap">
              <span className="services-eyebrow">What We Offer</span>
            </span>
            <h2 className="services-title">Our Core Tax, Audit, GST, and Advisory Services</h2>
            <p className="services-intro">Professional assurance, tax, and advisory solutions designed for modern business requirements.</p>
          </div>
          <div className="home-services-grid">
            {coreServices.map((s, i) => (
              <Link key={i} to={`/services/${s.slug}`} className="home-service-card home-service-card-link">
                <div className="service-card-media">
                  <img src={s.image} alt={s.title} loading="lazy" />
                  <div className="service-card-media-overlay" aria-hidden="true" />
                </div>
                <span className="service-number">{String(i + 1).padStart(2, '0')}</span>
                <div className="service-card-body">
                  <div className="service-card-accent" />
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <span className="home-service-card-read-more">Learn more</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="home-section home-industries">
        <div className="container">
          <div className="industries-shell">
            <header className="industries-header">
              <span className="industries-eyebrow-wrap">
                <span className="industries-eyebrow">Sector Expertise</span>
              </span>
              <h2 className="industries-title">Industries We Serve</h2>
              <p className="industries-intro">Domain-specific advisory, assurance, and compliance solutions built for sector realities.</p>
            </header>
            <div className="industries-scroll-wrap" role="region" aria-label="Industries we serve">
              <div className="industries-track">
                {[...industries, ...industries].map((ind, i) => (
                  <article key={`${ind.title}-${i}`} className="industries-card">
                    <div className="industries-card-img">
                      <img src={ind.image} alt={ind.title} loading="lazy" />
                      <div className="industries-card-overlay" />
                    </div>
                    <div className="industries-card-content">
                      <p className="industries-card-index">{String((i % industries.length) + 1).padStart(2, '0')}</p>
                      <h3>{ind.title}</h3>
                      <p>{ind.desc}</p>
                      <Link to="/industries" className="industries-card-btn">View More</Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="industries-cta">
            <Link to="/industries" className="btn btn-primary">Explore Industries</Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="home-section home-clients" id="clients-preview">
        <div className="container">
          <header className="clients-header">
            <span className="clients-eyebrow-wrap">
              <span className="clients-eyebrow">Who We Work With</span>
            </span>
            <h2 className="clients-title">Trusted by Leading Organizations</h2>
            <p className="clients-intro">
              Corporates, banks, and institutions across India rely on us for their financial and advisory needs.
            </p>
          </header>
          <div className="clients-shell">
            <div className="clients-card">
              <div className="clients-logos-marquee" aria-hidden="true">
                <div className="clients-logos-track">
                  {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                    <div key={i} className="clients-logo-slot">
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="clients-logo-img"
                        loading="lazy"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p className="clients-card-caption">Representing leading names across banking, manufacturing, and institutions.</p>
              <Link to="/clients" className="clients-cta">View Our Clients</Link>
            </div>
            <div className="clients-response-grid">
              {clientResponses.map((item, idx) => (
                <article className="clients-response-card" key={idx}>
                  <p className="clients-response-quote">"{item.quote}"</p>
                  <p className="clients-response-by">{item.by}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second Hero / CTA Section - Redesigned */}
      <section className="home-hero-2">
        <div className="home-hero-2-pattern" aria-hidden="true" />
        <div className="container home-hero-2-inner">
          <div className="home-hero-2-card">
            <p className="home-hero-2-eyebrow">Expert Guidance Since 2003</p>
            <h2 className="home-hero-2-title">Looking for Reliable Financial & Advisory Experts?</h2>
            <p className="home-hero-2-desc">
              Partner with Dwivedi Gupta & Co. for professional guidance, compliance confidence, and sustainable business growth.
            </p>
            <Link to="/schedule-consultation" className="home-hero-2-btn">Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      <style>{`
        /* Shared hero styles are defined in home-sections.css */

        .home-hero-2 {
          position: relative;
          min-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem 0.75rem;
          overflow: hidden;
          background: transparent;
          border-radius: 0;
          margin: 0;
          box-shadow: none;
        }
        @media (max-width: 767px) {
          .home-hero-2 {
            padding: 1rem 0.4rem;
          }
        }
        .home-hero-2-pattern {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0;
          background-image:
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.45) 1px, transparent 0),
            linear-gradient(120deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
          background-size: 30px 30px, 100% 100%;
        }
        .home-hero-2-inner {
          position: relative;
          z-index: 2;
          max-width: 1120px;
          margin: 0 auto;
        }
        .home-hero-2-card {
          border: 1px solid rgba(140, 183, 220, 0.26);
          background: linear-gradient(135deg, #0f2747 0%, #173b68 52%, #1f5d96 100%);
          border-radius: 26px;
          padding: 3.1rem 1.5rem 2.9rem;
          text-align: center;
          box-shadow: 0 16px 34px rgba(15, 23, 42, 0.24);
        }
        @media (min-width: 768px) {
          .home-hero-2-card {
            padding: 3.35rem 2.3rem 3.1rem;
          }
        }
        .home-hero-2-eyebrow {
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(228, 240, 252, 0.9);
          margin-bottom: 0.78rem;
        }
        .home-hero-2-title {
          font-size: clamp(2rem, 4.6vw, 3.35rem);
          font-weight: 600;
          color: var(--white);
          line-height: 1.12;
          margin-bottom: 0.86rem;
          letter-spacing: -0.032em;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
        }
        .home-hero-2-desc {
          color: rgba(240, 248, 255, 0.88);
          font-size: clamp(1rem, 2.2vw, 1.15rem);
          line-height: 1.6;
          margin: 0 auto 1.55rem;
          max-width: 700px;
        }
        .home-hero-2-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          padding: 0.9rem 2.2rem;
          font-size: 1.03rem;
          font-weight: 700;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: #ffffff;
          color: #0f2747;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.22);
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
          white-space: nowrap;
        }
        .home-hero-2-btn:hover {
          color: #0f2747;
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 14px 28px rgba(15, 23, 42, 0.28);
          transform: translateY(-2px);
        }
        .home-hero-2-btn:active {
          transform: translateY(0) scale(0.98);
        }
        @media (max-width: 560px) {
          .home-hero-2-card {
            border-radius: 18px;
            padding: 2.25rem 1rem 2rem;
          }
          .home-hero-2-btn {
            width: 100%;
            min-height: 50px;
            font-size: 0.95rem;
            padding: 0.8rem 1.2rem;
          }
        }

        .home-section {
          padding: 2.5rem 0;
        }
        @media (min-width: 768px) {
          .home-section { padding: 3.5rem 0; }
        }
        .home-section-title {
          font-size: clamp(1.5rem, 3.5vw, 2rem);
          color: var(--slate-800);
          margin-bottom: 1.25rem;
        }
        .home-section-subtitle {
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .home-section-cta { margin-top: 1.5rem; }

        .home-about {
          background: linear-gradient(180deg, var(--white) 0%, var(--slate-50) 100%);
        }
        .about-header {
          margin-bottom: 1.9rem;
          text-align: center;
        }
        .about-header-kicker-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.72rem;
          padding: 0.34rem 0.72rem;
          border-radius: 999px;
          border: 1px solid rgba(140, 183, 220, 0.32);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 247, 255, 0.86));
        }
        .about-eyebrow {
          display: block;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: var(--purple-700);
          text-transform: uppercase;
          margin: 0;
        }
        .about-title {
          font-size: clamp(2rem, 4.4vw, 2.85rem);
          color: var(--slate-900);
          margin: 0 0 0.55rem 0;
          line-height: 1.18;
          letter-spacing: -0.02em;
        }
        .about-header-subtitle {
          margin: 0 auto;
          max-width: 620px;
          color: var(--slate-600);
          font-size: clamp(0.96rem, 2vw, 1.04rem);
          line-height: 1.6;
        }
        .about-grid {
          display: grid;
          gap: 1.75rem;
        }
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1.12fr 0.88fr;
            gap: 2rem;
            align-items: stretch;
          }
        }
        .about-content {
          min-width: 0;
        }
        .about-content-shell {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          box-shadow: 0 14px 30px rgba(15, 39, 71, 0.08);
          padding: 1.15rem 1.05rem 1rem;
        }
        @media (min-width: 992px) {
          .about-content-shell {
            padding: 1.3rem 1.25rem 1.1rem;
          }
        }
        .about-intro-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.7rem;
        }
        .about-kicker {
          font-size: 0.71rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--purple-700);
        }
        .about-kicker-dot {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: var(--blue-500);
        }
        .about-kicker-muted {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--slate-500);
        }
        .about-lead-title {
          margin: 0 0 0.56rem 0;
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          line-height: 1.3;
          color: var(--slate-900);
          letter-spacing: -0.02em;
        }
        .about-summary {
          font-size: 0.96rem;
          color: var(--slate-700);
          line-height: 1.62;
          margin: 0;
          font-weight: 500;
        }
        .about-summary-muted {
          margin-top: 0.55rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
        }
        .about-highlights-grid {
          margin-top: 0.9rem;
          display: grid;
          gap: 0.62rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 560px) {
          .about-highlights-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .about-highlight-card {
          position: relative;
          border-radius: 10px;
          border: 1px solid rgba(148, 163, 184, 0.2);
          background: #ffffff;
          padding: 0.72rem 0.7rem;
          box-shadow: 0 4px 12px rgba(15, 39, 71, 0.04);
        }
        .about-highlight-title {
          margin: 0 0 0.2rem 0;
          font-size: 0.79rem;
          line-height: 1.35;
          font-weight: 700;
          color: var(--slate-900);
        }
        .about-highlight-text {
          margin: 0;
          font-size: 0.79rem;
          line-height: 1.42;
          color: var(--slate-700);
        }
        .about-images {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          min-height: 100%;
        }
        @media (min-width: 768px) {
          .about-images {
            flex-direction: column;
            gap: 1rem;
            height: 100%;
          }
        }
        .about-img-main {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--border);
          aspect-ratio: 5 / 4;
          width: 100%;
          max-height: 520px;
        }
        @media (min-width: 992px) {
          .about-img-main {
            aspect-ratio: auto;
            height: 100%;
            min-height: 100%;
            max-height: none;
          }
        }
        .about-img-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .about-cta-wrap {
          margin-top: 1.05rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          flex-wrap: wrap;
        }
        .about-cta-wrap .btn {
          min-width: 220px;
          min-height: 42px;
          padding: 0.62rem 1.25rem;
          font-size: 0.94rem;
        }
        @media (max-width: 560px) {
          .about-cta-wrap {
            gap: 0.55rem;
          }
          .about-cta-wrap .btn {
            width: 100%;
            min-width: 0;
          }
        }

        .home-services {
          background: linear-gradient(180deg, var(--slate-50) 0%, var(--white) 100%);
        }
        .services-header {
          margin-bottom: 2rem;
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
          font-size: clamp(2rem, 4.6vw, 3rem);
          color: var(--slate-900);
          margin: 0 0 0.62rem 0;
          line-height: 1.14;
          letter-spacing: -0.028em;
        }
        .home-services .services-title::after {
          display: none;
          content: none;
        }
        .services-intro {
          font-size: clamp(1rem, 2.2vw, 1.15rem);
          color: var(--text-muted);
          max-width: 760px;
          margin: 0 auto;
          line-height: 1.62;
        }
        .home-services-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .home-services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .home-services-grid { grid-template-columns: repeat(3, 1fr); gap: 1.75rem; }
        }
        .home-service-card {
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 10px;
          padding: 0;
          transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.2s ease, background 0.2s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.95) inset,
            0 12px 26px rgba(15, 39, 71, 0.1);
        }
        .home-service-card:hover {
          border-color: rgba(31, 79, 134, 0.36);
          background: linear-gradient(180deg, #ffffff 0%, #f1f7ff 100%);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.98) inset,
            0 16px 34px rgba(15, 39, 71, 0.16);
          transform: translateY(-4px);
        }
        .service-card-media {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }
        .service-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }
        .home-service-card:hover .service-card-media img {
          transform: scale(1.04);
        }
        .service-card-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(2, 6, 23, 0.12) 0%, rgba(2, 6, 23, 0.28) 100%);
        }
        .service-card-body {
          position: relative;
          padding: 1.18rem 1.1rem 1rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .service-number {
          position: absolute;
          top: 0.75rem;
          right: 1rem;
          font-size: 1.9rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.88);
          text-shadow: 0 1px 10px rgba(2, 6, 23, 0.35);
          font-family: var(--font-display);
          line-height: 1;
          z-index: 2;
        }
        .service-card-accent {
          width: 44px;
          height: 4px;
          background: linear-gradient(90deg, var(--purple-700), var(--blue-700));
          border-radius: 2px;
          margin: 0 0 0.85rem;
        }
        .home-service-card h3 {
          font-size: 1.06rem;
          font-weight: 700;
          color: var(--slate-800);
          margin-bottom: 0.55rem;
          line-height: 1.35;
        }
        .home-service-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.62;
          margin: 0;
          flex: 1;
        }
        .home-service-card-link {
          display: block;
          color: inherit;
          text-decoration: none;
        }
        .home-service-card-read-more {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.95rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--purple-700);
          position: relative;
          width: fit-content;
          padding: 0.42rem 0.72rem;
          border-radius: 8px;
          border: 1px solid rgba(31, 79, 134, 0.3);
          background: rgba(31, 79, 134, 0.08);
          white-space: nowrap;
          line-height: 1;
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .home-service-card-read-more::after {
          content: '›';
          margin-left: 0.35rem;
        }
        .home-service-card-link:hover .home-service-card-read-more {
          color: var(--blue-700);
          border-color: rgba(31, 79, 134, 0.45);
          background: rgba(31, 79, 134, 0.14);
        }
        .services-cta {
          margin-top: 2.5rem;
          text-align: center;
        }

        .why-choose-us {
          background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
        }
        .why-shell {
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 18px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          box-shadow: 0 16px 36px rgba(15, 39, 71, 0.08);
          padding: 1.2rem 1rem 1rem;
        }
        @media (min-width: 768px) {
          .why-shell {
            padding: 1.5rem 1.4rem 1.35rem;
          }
        }
        .why-header {
          margin-bottom: 1.1rem;
          text-align: center;
        }
        .why-eyebrow {
          display: block;
          font-size: 0.73rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: var(--purple-700);
          text-transform: uppercase;
          margin-bottom: 0.45rem;
        }
        .why-title {
          font-size: clamp(1.7rem, 4vw, 2.3rem);
          color: var(--slate-900);
          margin: 0 0 0.42rem 0;
          letter-spacing: -0.02em;
        }
        .why-intro {
          font-size: 0.98rem;
          color: var(--text-muted);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.58;
        }
        .why-layout {
          display: grid;
          gap: 0.85rem;
        }
        @media (min-width: 1024px) {
          .why-layout {
            grid-template-columns: minmax(240px, 0.9fr) minmax(0, 1.6fr);
            gap: 1rem;
            align-items: stretch;
          }
        }
        .why-feature-card {
          border-radius: 14px;
          border: 1px solid rgba(148, 163, 184, 0.24);
          background: linear-gradient(135deg, #0f2747 0%, #173b68 55%, #1f5d96 100%);
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.26);
          padding: 1rem 0.95rem;
          color: #ffffff;
        }
        .why-feature-kicker {
          margin: 0 0 0.4rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.82);
        }
        .why-feature-card h3 {
          margin: 0 0 0.42rem;
          font-size: 1.08rem;
          line-height: 1.34;
          letter-spacing: -0.01em;
          color: #ffffff;
        }
        .why-feature-card p {
          margin: 0;
          font-size: 0.86rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.9);
        }
        .why-feature-points {
          margin-top: 0.75rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .why-feature-points span {
          display: inline-flex;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 999px;
          padding: 0.24rem 0.55rem;
          font-size: 0.72rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.92);
          background: rgba(255, 255, 255, 0.08);
        }
        .why-grid {
          display: grid;
          gap: 0.75rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .why-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          .why-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.8rem; }
        }
        .why-card {
          position: relative;
          background: var(--white);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 12px;
          padding: 0.85rem 0.8rem 0.8rem;
          transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
          box-shadow: 0 6px 16px rgba(15, 39, 71, 0.06);
        }
        .why-card:hover {
          border-color: rgba(31, 79, 134, 0.34);
          box-shadow: 0 12px 24px rgba(15, 39, 71, 0.12);
          transform: translateY(-2px);
        }
        .why-card-index {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(31, 79, 134, 0.12), rgba(74, 134, 189, 0.18));
          color: var(--purple-700);
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 0.45rem;
        }
        .why-card h3 {
          font-size: 0.93rem;
          font-weight: 700;
          color: var(--slate-800);
          margin-bottom: 0.28rem;
          line-height: 1.34;
        }
        .why-card p {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.52;
          margin: 0;
        }

        .home-industries {
          background: linear-gradient(180deg, var(--white) 0%, var(--slate-50) 100%);
        }
        .industries-shell {
          border: none;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
          padding: 0;
        }
        @media (min-width: 768px) {
          .industries-shell {
            padding: 0;
          }
        }
        .industries-header {
          margin-bottom: 1.25rem;
          text-align: center;
        }
        .industries-eyebrow-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.36rem 0.82rem;
          border-radius: 999px;
          border: 1px solid rgba(140, 183, 220, 0.34);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(240, 247, 255, 0.88));
          margin-bottom: 0.62rem;
        }
        .industries-eyebrow {
          display: block;
          font-size: 0.73rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: var(--purple-700);
          text-transform: uppercase;
          margin: 0;
        }
        .industries-title {
          font-size: clamp(2rem, 4.6vw, 3rem);
          color: var(--slate-900);
          margin: 0 0 0.62rem 0;
          letter-spacing: -0.028em;
          line-height: 1.14;
        }
        .industries-intro {
          font-size: clamp(1rem, 2.2vw, 1.15rem);
          color: var(--text-muted);
          max-width: 760px;
          margin: 0 auto;
          line-height: 1.62;
        }
        .industries-scroll-wrap {
          position: relative;
          overflow: hidden;
          width: 100%;
          margin: 0;
          padding: 0;
        }
        .industries-scroll-wrap::before,
        .industries-scroll-wrap::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 36px;
          z-index: 2;
          pointer-events: none;
        }
        .industries-scroll-wrap::before {
          left: 0;
          background: linear-gradient(90deg, #f8fbff 0%, transparent 100%);
        }
        .industries-scroll-wrap::after {
          right: 0;
          background: linear-gradient(270deg, #f8fbff 0%, transparent 100%);
        }
        .industries-track {
          display: flex;
          gap: 0.9rem;
          width: max-content;
          padding: 0.2rem 0 0.4rem;
          animation: industries-marquee 34s linear infinite;
          will-change: transform;
          justify-content: flex-start;
        }
        .industries-track:hover {
          animation-play-state: paused;
        }
        @keyframes industries-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .industries-card {
          display: flex;
          flex-direction: column;
          background: var(--white);
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.2);
          transition: box-shadow 0.25s ease, transform 0.2s ease, border-color 0.25s ease;
          width: min(290px, 76vw);
          min-height: 100%;
          box-shadow: 0 6px 18px rgba(15, 39, 71, 0.06);
        }
        .industries-card:hover {
          box-shadow: 0 14px 28px rgba(15, 39, 71, 0.12);
          transform: translateY(-3px);
          border-color: rgba(31, 79, 134, 0.34);
        }
        .industries-card-img {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
        }
        .industries-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease;
        }
        .industries-card:hover .industries-card-img img {
          transform: scale(1.05);
        }
        .industries-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(2, 6, 23, 0.08) 0%, rgba(2, 6, 23, 0.34) 100%);
          pointer-events: none;
        }
        .industries-card-content {
          padding: 0.8rem 0.82rem 0.88rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .industries-card-index {
          margin: 0 0 0.36rem 0;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--purple-700);
        }
        .industries-card h3 {
          font-size: 0.94rem;
          font-weight: 700;
          color: var(--slate-800);
          margin: 0 0 0.32rem 0;
          line-height: 1.35;
        }
        .industries-card-content > p:not(.industries-card-index) {
          margin: 0;
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
          flex: 1;
        }
        .industries-card-btn {
          margin-top: 0.62rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 0.32rem 0.62rem;
          border-radius: 8px;
          border: 1px solid rgba(31, 79, 134, 0.26);
          background: rgba(31, 79, 134, 0.08);
          color: var(--purple-700);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .industries-card-btn:hover {
          color: var(--blue-700);
          border-color: rgba(31, 79, 134, 0.42);
          background: rgba(31, 79, 134, 0.14);
        }
        .industries-cta {
          margin-top: 1.25rem;
          text-align: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .industries-track {
            animation: none;
          }
        }

        .home-presence {
          background: linear-gradient(180deg, var(--slate-50) 0%, var(--white) 100%);
        }
        .presence-header {
          margin-bottom: 2.5rem;
          text-align: center;
        }
        .presence-eyebrow {
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--purple-600);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .presence-accent {
          width: 56px;
          height: 3px;
          background: linear-gradient(90deg, var(--purple-600), var(--blue-600));
          border-radius: 2px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1rem;
        }
        .presence-title {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          color: var(--slate-800);
          margin: 0 0 0.75rem 0;
        }
        .presence-intro {
          font-size: 1.0625rem;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .presence-grid {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .presence-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 1024px) {
          .presence-grid {
            grid-template-columns: 1.2fr 1fr 1fr 1fr;
            gap: 1.5rem;
          }
        }
        .presence-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem;
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .presence-card:hover {
          border-color: var(--purple-400);
          box-shadow: 0 8px 28px rgba(31, 79, 134, 0.12);
        }
        .presence-card-main {
          padding: 1.75rem;
        }
        @media (min-width: 1024px) {
          .presence-card-main {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
          }
        }
        .presence-card-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--purple-600), var(--blue-600));
          color: var(--white);
          font-size: 1rem;
          font-weight: 700;
          border-radius: 10px;
          margin-bottom: 1rem;
        }
        .presence-card h3 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--purple-700);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 0.25rem 0;
        }
        .presence-city {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--slate-800);
          margin: 0 0 0.5rem 0;
        }
        .presence-address {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0 0 0.5rem 0;
        }
        .presence-contact {
          font-size: 0.8125rem;
          color: var(--slate-600);
          line-height: 1.5;
          margin: 0;
        }
        .presence-desc {
          font-size: 0.9375rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }
        .presence-tagline {
          text-align: center;
          font-size: 1rem;
          color: var(--text-muted);
          max-width: 560px;
          margin: 2rem auto 0;
          line-height: 1.6;
        }

        .home-cta { padding: 3rem 0; }
        @media (min-width: 768px) {
          .home-cta { padding: 4rem 0; }
        }
        .home-cta-box {
          background: linear-gradient(135deg, var(--purple-700), var(--blue-900));
          border-radius: 16px;
          padding: 2.5rem 1.5rem;
          text-align: center;
          box-shadow: 0 20px 50px rgba(15, 39, 71, 0.3);
        }
        .home-cta-title {
          font-size: clamp(1.35rem, 3vw, 1.75rem);
          color: var(--white);
          margin-bottom: 0.75rem;
        }
        .home-cta-desc {
          color: rgba(255,255,255,0.9);
          font-size: 1rem;
          margin-bottom: 1.5rem;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }
        .btn-lg {
          padding: 0.875rem 1.75rem;
          font-size: 1.0625rem;
        }

        .home-clients {
          background: linear-gradient(180deg, var(--slate-50) 0%, var(--white) 100%);
          position: relative;
          overflow: hidden;
        }
        .home-clients::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
          opacity: 0.8;
        }
        .clients-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 2.5rem;
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
        .clients-eyebrow-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.36rem 0.82rem;
          border-radius: 999px;
          border: 1px solid rgba(140, 183, 220, 0.34);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(240, 247, 255, 0.88));
          margin-bottom: 0.62rem;
        }
        .clients-eyebrow {
          display: block;
          font-size: 0.73rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: var(--purple-700);
          text-transform: uppercase;
          margin: 0;
        }
        .clients-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.6vw, 3rem);
          font-weight: 400;
          color: var(--slate-900);
          margin: 0 0 0.62rem 0;
          line-height: 1.14;
          letter-spacing: -0.028em;
          white-space: nowrap;
          text-align: center;
          display: inline-block;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .clients-title {
            white-space: normal;
          }
        }
        .clients-intro {
          font-size: clamp(1rem, 2.2vw, 1.15rem);
          color: var(--text-muted);
          line-height: 1.62;
          margin: 0;
        }
        .clients-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          text-align: center;
          box-shadow: 0 4px 24px rgba(30, 41, 59, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
          max-width: 980px;
          margin: 0 auto 1rem;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .clients-card:hover {
          box-shadow: 0 12px 40px rgba(30, 41, 59, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
          border-color: var(--slate-200);
        }
        .clients-logos-marquee {
          overflow: hidden;
          margin-bottom: 1.75rem;
          border-radius: 10px;
        }
        .clients-logos-track {
          display: flex;
          flex-wrap: nowrap;
          gap: 1.25rem;
          width: max-content;
          animation: clients-marquee 40s linear infinite;
        }
        .clients-logos-track:hover {
          animation-play-state: paused;
        }
        @keyframes clients-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .clients-logo-slot {
          flex: 0 0 auto;
          width: 140px;
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1rem;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 10px;
          opacity: 0.9;
          transition: opacity 0.2s ease, border-color 0.2s ease;
        }
        .clients-logo-slot:hover {
          opacity: 1;
          border-color: var(--slate-200);
        }
        .clients-logo-img {
          max-width: 100%;
          max-height: 48px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(0.35);
        }
        .clients-logo-slot:hover .clients-logo-img {
          filter: grayscale(0);
        }
        .clients-card-caption {
          font-size: 0.9375rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0 0 1.1rem 0;
        }
        .clients-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--white);
          background: linear-gradient(135deg, var(--purple-600) 0%, var(--purple-700) 50%, var(--blue-600) 100%);
          border: none;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 2px 12px rgba(31, 79, 134, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }
        .clients-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(31, 79, 134, 0.42);
          opacity: 1;
        }
        .clients-cta:active {
          transform: translateY(0);
        }
        .clients-response-grid {
          display: grid;
          gap: 0.8rem;
          grid-template-columns: 1fr;
          max-width: 980px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .clients-response-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0.9rem;
          }
        }
        .clients-response-card {
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 12px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          padding: 0.85rem 0.82rem;
          box-shadow: 0 6px 18px rgba(15, 39, 71, 0.06);
        }
        .clients-response-quote {
          margin: 0 0 0.42rem 0;
          font-size: 0.84rem;
          line-height: 1.52;
          color: var(--slate-700);
          font-weight: 500;
        }
        .clients-response-by {
          margin: 0;
          font-size: 0.74rem;
          line-height: 1.35;
          color: var(--purple-700);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 700;
        }
        .home-seo-intent {
          padding-top: 2rem;
          padding-bottom: 0.8rem;
        }
        .home-seo-intent-shell {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          box-shadow: 0 10px 24px rgba(15, 39, 71, 0.06);
          padding: 1rem;
        }
        .home-seo-intent-shell h2 {
          margin: 0;
          color: var(--slate-900);
          font-size: clamp(1.18rem, 2.4vw, 1.54rem);
          line-height: 1.35;
        }
        .home-seo-intent-shell p {
          margin: 0.6rem 0 0;
          color: var(--slate-600);
          line-height: 1.62;
          font-size: 0.94rem;
        }
        .home-seo-intent-links {
          margin-top: 0.78rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .home-seo-intent-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.42rem 0.7rem;
          border-radius: 999px;
          border: 1px solid rgba(31, 93, 150, 0.28);
          background: rgba(31, 93, 150, 0.08);
          color: var(--primary);
          font-size: 0.8rem;
          font-weight: 600;
          line-height: 1.3;
        }
        .home-seo-intent-links a:hover {
          color: #173b68;
          border-color: rgba(31, 93, 150, 0.45);
          background: rgba(31, 93, 150, 0.12);
        }
      `}</style>
    </>
  );
}
