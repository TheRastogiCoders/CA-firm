import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CLIENT_LOGOS } from '../data/clientLogos';

const heroSlides = [
  {
    label: 'DWIVEDI GUPTA & CO.',
    tagline: 'Chartered Accountants | Advisors | Consultants',
    title: 'Delivering Trusted Financial, Tax & Advisory Solutions Since 2003',
    desc: 'With over two decades of professional excellence, Dwivedi Gupta & Co. provides comprehensive services in taxation, audit & assurance, financial consulting, corporate law, and advisory services to businesses across India.',
  },
  {
    label: 'DWIVEDI GUPTA & CO.',
    tagline: 'Assurance | Taxation | Advisory | Consulting',
    title: 'Your Partner for Compliance, Growth & Financial Clarity',
    desc: 'RBI Registered & CAG Empanelled. We serve corporates, banks, institutions, and SMEs with partner-led engagement and a client-centric approach across Varanasi, Delhi, Kolkata, and Bokaro.',
  },
  {
    label: 'DWIVEDI GUPTA & CO.',
    tagline: 'Est. 2003 — 20+ Years of Excellence',
    title: 'Strategic Insights for Sustainable Business Success',
    desc: 'From tax planning and audit to corporate law and government schemes consultancy—we deliver customized solutions that drive growth and ensure regulatory compliance.',
  },
];

const coreServices = [
  {
    title: 'Tax & Regulatory Services',
    slug: 'tax-compliance',
    description: 'Strategic tax planning, compliance, and representation services to optimize tax efficiency while ensuring full regulatory compliance.',
  },
  {
    title: 'Audit & Assurance',
    slug: 'audit-assurance',
    description: 'Comprehensive audit solutions including statutory audits, internal audits, tax audits, stock audits, and management audits to strengthen financial controls and transparency.',
  },
  {
    title: 'Corporate Law & Compliance',
    slug: 'corporate-law',
    description: 'Company incorporation, corporate governance support, secretarial services, regulatory filings, and legal compliance assistance.',
  },
  {
    title: 'Advisory & Consulting',
    slug: 'financial-consulting',
    description: 'Business advisory services across taxation, regulatory frameworks, LLPs, trusts, and financial regulations with research-based professional insights.',
  },
  {
    title: 'Finance & Project Consultancy',
    slug: 'project-finance',
    description: 'End-to-end financial consulting including project finance, debt syndication, banking support, and financial structuring for businesses.',
  },
  {
    title: 'Government Schemes Consultancy',
    slug: 'government-schemes-advisory',
    description: 'Awareness, planning, and implementation support for Central and State Government schemes across multiple sectors.',
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
  { title: 'Manufacturing & Infrastructure', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Banking & Financial Institutions', image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Real Estate & Construction', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Trading & Export Businesses', image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Government & Public Sector', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85' },
  { title: 'SMEs & Startups', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Non-Profit Organizations', image: 'https://images.unsplash.com/photo-1469571486292-b53601020e02?auto=format&fit=crop&w=1200&q=85' },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(t);
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
                <div className="hero-accent" />
                <p className="hero-label">{slide.label}</p>
                <p className="hero-tagline">{slide.tagline}</p>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-desc">{slide.desc}</p>
                <div className="hero-cta">
                  <Link to="/schedule-consultation" className="hero-btn hero-btn-primary">Get Consultation</Link>
                  <Link to="/contact" className="hero-btn hero-btn-outline">Contact Us</Link>
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

      {/* About the Firm */}
      <section id="about-the-firm" className="home-section home-about">
        <div className="container">
          <div className="about-header">
            <span className="about-eyebrow">Who We Are</span>
            <div className="about-accent" />
            <h2 className="about-title">About the Firm</h2>
          </div>
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-value">2003</span>
              <span className="about-stat-label">Established</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-value">4</span>
              <span className="about-stat-label">Offices</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-value">20+</span>
              <span className="about-stat-label">Years Experience</span>
            </div>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <div className="about-lead">
                <p>
                  Founded in 2003, Dwivedi Gupta & Co. (DGC) is a Chartered Accountants firm delivering assurance, taxation, and advisory services with a partner-led approach and deep regulatory insight.
                </p>
              </div>
              <div className="about-rest">
                <p>
                  We work as long-term partners, not distant service providers. Every engagement is tailored to your business model, growth stage, and compliance requirements rather than following a one-size-fits-all process.
                </p>
                <p>
                  Headquartered in Varanasi with branch offices in Delhi, Kolkata, and Bokaro, our team combines local accessibility with national capability. Under the direction of 7 partners and qualified professionals, we focus on practical, timely, and high-quality outcomes.
                </p>
                <ul className="about-highlights">
                  <li>RBI Registered and CAG Empanelled credentials</li>
                  <li>Comprehensive services: Tax, Audit, Compliance, Advisory, and Finance</li>
                  <li>Strong client relationships built on integrity and responsiveness</li>
                </ul>
              </div>
            </div>
            <div className="about-images">
              <div className="about-img-main">
                <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=85" alt="Professional advisory and consulting at Dwivedi Gupta & Co." />
              </div>
              <div className="about-badges">
                <span className="about-badge">Partner-led engagements</span>
                <span className="about-badge">20+ years of experience</span>
                <span className="about-badge">Multi-city service network</span>
              </div>
            </div>
          </div>
          <div className="about-cta-wrap">
            <Link to="/about-us" className="btn btn-secondary">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="home-section home-services">
        <div className="container">
          <div className="services-header">
            <span className="services-eyebrow">What We Offer</span>
            <div className="services-accent" />
            <h2 className="services-title">Our Core Services</h2>
            <p className="services-intro">Comprehensive assurance, tax, advisory, and consulting solutions tailored to your business needs.</p>
          </div>
          <div className="home-services-grid">
            {coreServices.map((s, i) => (
              <Link key={i} to={`/services/${s.slug}`} className="home-service-card home-service-card-link">
                <span className="service-number">{String(i + 1).padStart(2, '0')}</span>
                <div className="service-card-accent" />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <span className="home-service-card-read-more">Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="home-section why-choose-us">
        <div className="container">
          <div className="why-header">
            <span className="why-eyebrow">Our Edge</span>
            <div className="why-accent" />
            <h2 className="why-title">Why Choose Us</h2>
            <p className="why-intro">Decades of experience, a client-first approach, and end-to-end CA services that drive compliance and growth.</p>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item, i) => (
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

      {/* Industries We Serve */}
      <section className="home-section home-industries">
        <div className="container">
          <div className="industries-header">
            <span className="industries-eyebrow">Sector Expertise</span>
            <div className="industries-accent" />
            <h2 className="industries-title">Industries We Serve</h2>
            <p className="industries-intro">We provide services across multiple industries with sector-specific knowledge and compliance support.</p>
          </div>
          <div className="industries-scroll-wrap">
            <div className="industries-track" role="region" aria-label="Industries we serve">
              {[...industries, ...industries].map((ind, i) => (
                <div key={i} className="industries-card">
                  <div className="industries-card-img">
                    <img src={ind.image} alt="" />
                    <div className="industries-card-overlay" />
                  </div>
                  <h3>{ind.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="industries-cta">
            <Link to="/industries" className="btn btn-primary">Explore Industries</Link>
          </div>
        </div>
      </section>

      {/* Our Presence */}
      <section className="home-section home-presence">
        <div className="container">
          <div className="presence-header">
            <span className="presence-eyebrow">Where We Are</span>
            <div className="presence-accent" />
            <h2 className="presence-title">Our Presence</h2>
            <p className="presence-intro">Headquartered in Varanasi with branch offices across key cities to serve you locally.</p>
          </div>
          <div className="presence-grid">
            <div className="presence-card presence-card-main">
              <div className="presence-card-icon">HQ</div>
              <h3>Head Office</h3>
              <p className="presence-city">Varanasi</p>
              <p className="presence-address">S-8/108-B-3-A Prashantpuri, M.A Road, Varanasi – 221002</p>
              <p className="presence-desc">Our flagship office and central hub for assurance, tax, and advisory services.</p>
            </div>
            {presenceBranches.map((branch, i) => (
              <div key={i} className="presence-card">
                <div className="presence-card-icon">{branch.initial}</div>
                <h3>Branch</h3>
                <p className="presence-city">{branch.city}</p>
                <p className="presence-address">{branch.address}</p>
                <p className="presence-contact">{branch.contact}</p>
              </div>
            ))}
          </div>
          <p className="presence-tagline">
            We serve clients across India with strong regional expertise and national capabilities.
          </p>
        </div>
      </section>

      {/* Second Hero / CTA Section - Redesigned */}
      <section className="home-hero-2">
        <div className="home-hero-2-pattern" aria-hidden="true" />
        <div className="home-hero-2-accent" aria-hidden="true" />
        <div className="container home-hero-2-inner">
          <p className="home-hero-2-eyebrow">Expert guidance since 2003</p>
          <h2 className="home-hero-2-title">Looking for Reliable Financial & Advisory Experts?</h2>
          <p className="home-hero-2-desc">
            Partner with Dwivedi Gupta & Co. for professional guidance, compliance confidence, and business growth.
          </p>
          <Link to="/schedule-consultation" className="btn btn-primary btn-lg home-hero-2-btn">Schedule a Consultation</Link>
        </div>
      </section>

      {/* Clients Section */}
      <section className="home-section home-clients" id="clients-preview">
        <div className="container">
          <header className="clients-header">
            <span className="clients-eyebrow">Who We Work With</span>
            <div className="clients-accent" aria-hidden="true" />
            <h2 className="clients-title">Trusted by Leading Organizations</h2>
            <p className="clients-intro">
              Corporates, banks, and institutions across India rely on us for their financial and advisory needs.
            </p>
          </header>
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
        </div>
      </section>

      <style>{`
        /* Shared hero styles are defined in home-sections.css */

        .home-hero-2 {
          position: relative;
          min-height: 56vh;
          min-height: 56dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4.5rem 1.5rem;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(76, 29, 149, 0.92) 0%, rgba(30, 58, 138, 0.9) 100%);
        }
        @media (max-width: 767px) {
          .home-hero-2 { min-height: 52vh; min-height: 52dvh; padding: 3rem 1rem; }
        }
        .home-hero-2-pattern {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.06;
          background-image: radial-gradient(circle at 1px 1px, #fff 1px, transparent 0);
          background-size: 32px 32px;
        }
        .home-hero-2-accent {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--purple-400), var(--blue-400), transparent);
          z-index: 1;
        }
        .home-hero-2-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 580px;
          margin: 0 auto;
        }
        .home-hero-2-eyebrow {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--purple-400);
          margin-bottom: 1rem;
        }
        .home-hero-2-title {
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: 600;
          color: var(--white);
          line-height: 1.3;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .home-hero-2-desc {
          color: rgba(255, 255, 255, 0.92);
          font-size: 1rem;
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }
        .home-hero-2 .home-hero-2-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.88rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.24);
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 55%, #2563eb 100%);
          color: var(--white);
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.28);
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
        }
        .home-hero-2 .home-hero-2-btn:hover {
          color: var(--white);
          border-color: rgba(255, 255, 255, 0.42);
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.34);
          transform: translateY(-1px);
        }
        .home-hero-2 .home-hero-2-btn:active {
          transform: translateY(0) scale(0.98);
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
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .about-eyebrow {
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--purple-600);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .about-accent {
          width: 56px;
          height: 3px;
          background: linear-gradient(90deg, var(--purple-600), var(--blue-600));
          border-radius: 2px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1rem;
        }
        .about-title {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          color: var(--slate-800);
          margin: 0;
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .about-stat {
          text-align: center;
          padding: 1.25rem 1rem;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }
        .about-stat-value {
          display: block;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--purple-600);
          font-family: var(--font-display);
          line-height: 1.2;
        }
        .about-stat-label {
          font-size: 0.8125rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .about-grid {
          display: grid;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1.1fr 1fr;
            gap: 2.5rem;
            align-items: start;
          }
        }
        .about-content {
          min-width: 0;
        }
        .about-lead p {
          font-size: 1.0625rem;
          color: var(--slate-700);
          line-height: 1.75;
          margin: 0 0 1.25rem 0;
          font-weight: 500;
        }
        .about-rest p {
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .about-rest p:last-child { margin-bottom: 0; }
        .about-highlights {
          list-style: none;
          margin: 0.75rem 0 0;
          padding: 0;
          display: grid;
          gap: 0.55rem;
        }
        .about-highlights li {
          position: relative;
          padding-left: 1rem;
          color: var(--slate-700);
          font-size: 0.9375rem;
          line-height: 1.55;
        }
        .about-highlights li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--purple-500);
        }
        .about-images {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .about-images {
            flex-direction: column;
            gap: 1.25rem;
          }
        }
        .about-img-main {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--border);
          aspect-ratio: 4/3;
        }
        .about-img-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .about-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .about-badge {
          padding: 0.4rem 0.7rem;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--white);
          font-size: 0.8125rem;
          color: var(--slate-700);
          font-weight: 500;
        }
        .about-cta-wrap {
          margin-top: 2rem;
        }

        .home-services {
          background: linear-gradient(180deg, var(--slate-50) 0%, var(--white) 100%);
        }
        .services-header {
          margin-bottom: 2rem;
          text-align: center;
        }
        .services-eyebrow {
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--purple-600);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .services-accent {
          width: 56px;
          height: 3px;
          background: linear-gradient(90deg, var(--purple-600), var(--blue-600));
          border-radius: 2px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1rem;
        }
        .services-title {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          color: var(--slate-800);
          margin: 0 0 0.75rem 0;
        }
        .services-intro {
          font-size: 1.0625rem;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.6;
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
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.75rem 1.5rem;
          transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
          overflow: hidden;
        }
        .home-service-card:hover {
          border-color: var(--purple-400);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1);
          transform: translateY(-2px);
        }
        .service-number {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          font-size: 2rem;
          font-weight: 700;
          color: var(--slate-100);
          font-family: var(--font-display);
          line-height: 1;
        }
        .service-card-accent {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, var(--purple-600), var(--blue-600));
          border-radius: 2px;
          margin-bottom: 1.25rem;
        }
        .home-service-card h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--slate-800);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        .home-service-card p {
          font-size: 0.9375rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0;
        }
        .home-service-card-link {
          display: block;
          color: inherit;
          text-decoration: none;
        }
        .home-service-card-read-more {
          display: inline-block;
          margin-top: 0.85rem;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--purple-600);
        }
        .home-service-card-link:hover .home-service-card-read-more {
          color: var(--purple-700);
        }
        .services-cta {
          margin-top: 2.5rem;
          text-align: center;
        }

        .why-choose-us {
          background: linear-gradient(180deg, var(--white) 0%, var(--slate-50) 100%);
        }
        .why-header {
          margin-bottom: 2.5rem;
          text-align: center;
        }
        .why-eyebrow {
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--purple-600);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .why-accent {
          width: 56px;
          height: 3px;
          background: linear-gradient(90deg, var(--purple-600), var(--blue-600));
          border-radius: 2px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1rem;
        }
        .why-title {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          color: var(--slate-800);
          margin: 0 0 0.75rem 0;
        }
        .why-intro {
          font-size: 1.0625rem;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .why-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .why-grid { grid-template-columns: repeat(3, 1fr); gap: 1.75rem; }
        }
        .why-card {
          position: relative;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.75rem 1.5rem;
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .why-card:hover {
          border-color: var(--purple-400);
          box-shadow: 0 12px 36px rgba(124, 58, 237, 0.08);
        }
        .why-num {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--slate-100);
          font-family: var(--font-display);
          line-height: 1;
        }
        .why-card-bar {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, var(--purple-600), var(--blue-600));
          border-radius: 2px;
          margin-bottom: 1.25rem;
        }
        .why-card h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--slate-800);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        .why-card p {
          font-size: 0.9375rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0;
        }

        .home-industries {
          background: linear-gradient(180deg, var(--white) 0%, var(--slate-50) 100%);
        }
        .industries-header {
          margin-bottom: 2.5rem;
          text-align: center;
        }
        .industries-eyebrow {
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--purple-600);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .industries-accent {
          width: 56px;
          height: 3px;
          background: linear-gradient(90deg, var(--purple-600), var(--blue-600));
          border-radius: 2px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1rem;
        }
        .industries-title {
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          color: var(--slate-800);
          margin: 0 0 0.75rem 0;
        }
        .industries-intro {
          font-size: 1.0625rem;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .industries-scroll-wrap {
          position: relative;
          margin: 0 -1rem;
          padding: 0 1rem;
          overflow: hidden;
        }
        .industries-scroll-wrap::before,
        .industries-scroll-wrap::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 40px;
          z-index: 2;
          pointer-events: none;
        }
        .industries-scroll-wrap::before {
          left: 0;
          background: linear-gradient(90deg, var(--slate-50) 0%, transparent 100%);
        }
        .industries-scroll-wrap::after {
          right: 0;
          background: linear-gradient(270deg, var(--slate-50) 0%, transparent 100%);
        }
        @media (min-width: 768px) {
          .industries-scroll-wrap { margin: 0 -1.5rem; padding: 0 1.5rem; }
          .industries-scroll-wrap::before,
          .industries-scroll-wrap::after { width: 60px; }
        }
        .industries-track {
          display: flex;
          gap: 1.25rem;
          width: max-content;
          padding: 0.25rem 0 1.5rem;
          animation: industries-scroll 45s linear infinite;
        }
        .industries-track:hover {
          animation-play-state: paused;
        }
        @keyframes industries-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .industries-card {
          flex: 0 0 auto;
          width: 280px;
          background: var(--white);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: box-shadow 0.25s ease, transform 0.2s ease;
        }
        @media (min-width: 640px) {
          .industries-card { width: 320px; }
        }
        .industries-card:hover {
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.12);
          transform: translateY(-4px);
        }
        .industries-card-img {
          position: relative;
          aspect-ratio: 4/3;
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
          background: linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.6) 100%);
          pointer-events: none;
        }
        .industries-card h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--slate-800);
          margin: 0;
          padding: 1.25rem 1.25rem 1.5rem;
          line-height: 1.35;
        }
        .industries-cta {
          margin-top: 2.5rem;
          text-align: center;
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
          box-shadow: 0 8px 28px rgba(124, 58, 237, 0.08);
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
          box-shadow: 0 20px 50px rgba(124, 58, 237, 0.25);
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
          text-align: center;
          margin-bottom: 2.5rem;
          max-width: 640px;
          margin-left: auto;
          margin-right: auto;
        }
        .clients-eyebrow {
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--purple-600);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .clients-accent {
          width: 56px;
          height: 3px;
          background: linear-gradient(90deg, var(--purple-600), var(--blue-600));
          border-radius: 2px;
          margin: 0 auto 1rem;
        }
        .clients-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          font-weight: 400;
          color: var(--slate-800);
          margin: 0 0 0.75rem 0;
          line-height: 1.2;
        }
        .clients-intro {
          font-size: 1.0625rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }
        .clients-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          text-align: center;
          box-shadow: 0 4px 24px rgba(30, 41, 59, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
          max-width: 720px;
          margin: 0 auto;
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
          margin: 0 0 1.5rem 0;
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
          box-shadow: 0 2px 12px rgba(124, 58, 237, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }
        .clients-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
          opacity: 1;
        }
        .clients-cta:active {
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
