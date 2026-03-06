import { Link } from 'react-router-dom';

const coreValues = [
  { title: 'Partnership', desc: 'Instead of being a distant service provider, we collaborate with our clients in all our engagements, work with them as a team and take ownership and responsibility of things, to create long lasting partnerships.' },
  { title: 'Integrity', desc: 'Our services are aimed at protecting our client\'s interests. By adopting transparent processes and adhering to highest ethical standards, we ensure client confidentiality and our own credibility. Whilst collaborating with our clients, we remain absolutely independent to deliver unbiased opinions.' },
  { title: 'Passion', desc: 'We are passionate for our client\'s success. By creating a highly stimulating work environment, working with utmost dedication and commitment and focusing on delivery and execution, we perform to not just satisfy but delight our clients.' },
  { title: 'Excellence', desc: 'By continually focusing on quality and deploying best practices, we bring excellence in our work, add value for our clients and strive to enter the realm of supremacy.' },
];

const strengths = [
  '20+ Years Experience',
  'Experienced Professionals',
  'Multi-City Presence',
  'Diverse Industry Expertise',
  'Strong Client Relationships',
  'Partner-Led Approach',
  'Ethical Practices',
];

const industriesList = [
  { title: 'Manufacturing & Infrastructure', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Banking & Financial Institutions', image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Real Estate & Construction', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Trading & Export Businesses', image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Government & Public Sector', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85' },
  { title: 'SMEs & Startups', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Non-Profit Organizations', image: 'https://media.istockphoto.com/id/1391554503/photo/team-of-motivated-volunteers-gathering-hands-in-unity-after-successful-meeting-at-donation.jpg?s=612x612&w=0&k=20&c=zj-530d9qjnKtzwQhygQajjEySUav9urPEJaAXa2bxs=' },
];

const presenceBranches = [
  { initial: 'D', city: 'Delhi', address: '62, Shrestha Vihar, Vikas Marg Extension, Delhi – 110092', contact: 'In charge: Delhi Branch. Reach us for audit, tax & compliance in NCR.' },
  { initial: 'K', city: 'Kolkata', address: 'Brijdham Housing Complex, 637 Dakshin Dari Road, 5th Floor Flat-5E, Building No 16-C, Kolkata, West Bengal', contact: 'In charge: Kolkata Branch. Serving Eastern India with local expertise.' },
  { initial: 'B', city: 'Bokaro', address: 'C-1, 21A, 2nd Floor, City Centre, Sector-4, Bokaro Steel City, Jharkhand', contact: 'In charge: Bokaro Branch. Industry-focused CA services in the region.' },
];

export default function About() {
  return (
    <>
      {/* Hero — same style as Home */}
      <section className="hero hero-about" aria-label="About hero">
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
              <p className="hero-tagline">Chartered Accountants | Advisors | Consultants</p>
              <h1 className="hero-title">About Dwivedi Gupta & Co.</h1>
              <p className="hero-desc">
                A reputed firm providing taxation, audit & assurance, advisory, and financial consulting services with over two decades of experience.
              </p>
              <div className="hero-cta">
                <Link to="/schedule-consultation" className="hero-btn hero-btn-primary">Schedule Consultation</Link>
                <Link to="/contact" className="hero-btn hero-btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are — same as Home "About the Firm" */}
      <section className="home-section home-about" id="who-we-are">
        <div className="container">
          <div className="about-header">
            <span className="about-eyebrow">Who We Are</span>
            <div className="about-accent" />
            <h2 className="about-title">About the Firm</h2>
          </div>
          <div className="about-stats about-stats-primary">
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
                  Founded in 2003, Dwivedi Gupta & Co. (DGC) is a Chartered Accountants firm providing Assurance, Taxation and Advisory/Consulting services. Revered for our professional ethos and technical expertise, drawn on perspicacity of over two decades and a team of highly competent professionals, we provide efficacious solutions to our client's needs, running deep into their engagements, understanding need and products.
                </p>
              </div>
              <div className="about-rest">
                <p>
                  Our philosophy is of partnering with our clients and not being a distant service provider. Since businesses are inherently different, we tailor our services to meet client's specific needs and banish the 'one-size-fits-all' standardization.
                </p>
                <p>
                  We recruit, train, motivate and retain highly capable and sharpest talent, who bring quality in their work and deliver the best solutions. Headquartered in Varanasi with branches at Kolkata, Delhi and Bokaro, at each center we aim to deploy state-of-art infrastructure, best practices and people development programs. Under the able direction of 7 partners & other qualified CA Staff, DGC's team strength is uniquely positioned to provide you quality opinions and services. Our interdisciplinary approach renders to give you seamless value.
                </p>
                <p>
                  Serving to the wider business community for more than two decades, we enjoy unparalleled reputation and respect of our clients, who trust and rely on us for our expertise and professionalism.
                </p>
              </div>
            </div>
            <div className="about-images">
              <div className="about-img-main">
                <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=85" alt="Professional advisory and consulting at Dwivedi Gupta & Co." />
              </div>
            </div>
          </div>
          <div className="about-compliance-link-wrap">
            <p className="about-compliance-link-text">
              Looking for registration numbers and statutory details?
            </p>
            <Link to="/compliance" className="btn btn-secondary">View Compliance Information</Link>
          </div>
        </div>
      </section>

      {/* Vision & Mission — card style like Home services/why */}
      <section className="home-section home-services">
        <div className="container">
          <div className="services-header">
            <span className="services-eyebrow">Our Direction</span>
            <div className="services-accent" />
            <h2 className="services-title">Vision & Mission</h2>
            <p className="services-intro">Guiding principles that define our commitment to excellence and client success.</p>
          </div>
          <div className="home-services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="home-service-card">
              <span className="service-number">01</span>
              <div className="service-card-accent" />
              <h3>Vision</h3>
              <p>To become a trusted leader in professional financial and advisory services through excellence, innovation, and integrity.</p>
            </div>
            <div className="home-service-card">
              <span className="service-number">02</span>
              <div className="service-card-accent" />
              <h3>Mission</h3>
              <p>Provide high-quality services with transparency; deliver innovative financial solutions; maintain ethical standards; build lasting client relationships; and continuously enhance our expertise and capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values — same as Home "Why Choose Us" */}
      <section className="home-section why-choose-us">
        <div className="container">
          <div className="why-header">
            <span className="why-eyebrow">What We Stand For</span>
            <div className="why-accent" />
            <h2 className="why-title">Core Values</h2>
            <p className="why-intro">Our philosophy, principles and values are so strongly weaved in our culture fabric that our beliefs are shared amongst all and which helps us earn our client's trust and respect.</p>
          </div>
          <div className="why-grid">
            {coreValues.map((item, i) => (
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

      {/* Our People — from PDF */}
      <section className="home-section why-choose-us">
        <div className="container">
          <div className="why-header">
            <span className="why-eyebrow">Our People</span>
            <div className="why-accent" />
            <h2 className="why-title">Our People</h2>
            <p className="why-intro">
              We recruit, train, motivate and retain highly capable and sharpest talent, who bring quality in their work and deliver the best solutions. We nurture our people and turn them into our assets. The firm has adequate manpower and infrastructure to undertake specialized assignments from Government, Semi-Government, Financial Institutions, Insurance Companies, Bank and Corporate Sectors.
            </p>
          </div>
          <div className="about-stats" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
            <div className="about-stat"><span className="about-stat-value">20</span><span className="about-stat-label">Audit Staff</span></div>
            <div className="about-stat"><span className="about-stat-value">10</span><span className="about-stat-label">Finance & Consultancy</span></div>
            <div className="about-stat"><span className="about-stat-value">8</span><span className="about-stat-label">Tax & Legal Section</span></div>
            <div className="about-stat"><span className="about-stat-value">5</span><span className="about-stat-label">Government Schemes & Consultancy</span></div>
            <div className="about-stat"><span className="about-stat-value">7</span><span className="about-stat-label">E.D.P. Operators</span></div>
            <div className="about-stat"><span className="about-stat-value">10</span><span className="about-stat-label">Semi-skilled Staff / Peons</span></div>
          </div>
          <p className="about-rest" style={{ maxWidth: '720px', margin: '1.5rem auto 0', textAlign: 'center' }}>
            Apart from qualified CA and CS staff, our firm has strategic alliance with various expert professionals who are engaged based on assignment requirements.
          </p>
        </div>
      </section>

      {/* Our Strengths — stat-style list */}
      <section className="home-section home-about">
        <div className="container">
          <div className="about-header">
            <span className="about-eyebrow">Our Edge</span>
            <div className="about-accent" />
            <h2 className="about-title">Our Strengths</h2>
          </div>
          <div className="about-stats" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
            {strengths.map((item, i) => (
              <div key={i} className="about-stat">
                <span className="about-stat-value about-strength-value">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve — same card style as Home */}
      <section className="home-section home-industries">
        <div className="container">
          <div className="industries-header">
            <span className="industries-eyebrow">Sector Expertise</span>
            <div className="industries-accent" />
            <h2 className="industries-title">Industries We Serve</h2>
            <p className="industries-intro">We provide services across multiple industries with sector-specific knowledge and compliance support.</p>
          </div>
          <div className="industries-grid-static">
            {industriesList.map((ind, i) => (
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
      </section>

      {/* Commitment to Clients — single block like intro */}
      <section className="home-section why-choose-us">
        <div className="container">
          <div className="why-header">
            <span className="why-eyebrow">Our Promise</span>
            <div className="why-accent" />
            <h2 className="why-title">Commitment to Clients</h2>
          </div>
          <p className="about-rest" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            We deliver solutions that go beyond compliance—improving financial efficiency, reducing risks, and supporting strategic decision-making for long-term client success.
          </p>
        </div>
      </section>

      {/* Our Presence — same as Home */}
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

      {/* CTA — same as Home hero-2 */}
      <section className="home-hero-2">
        <div className="home-hero-2-pattern" aria-hidden="true" />
        <div className="home-hero-2-accent" aria-hidden="true" />
        <div className="container home-hero-2-inner">
          <p className="home-hero-2-eyebrow">Expert guidance since 2003</p>
          <h2 className="home-hero-2-title">Partner with Dwivedi Gupta & Co.</h2>
          <p className="home-hero-2-desc">
            For trusted financial guidance and professional excellence.
          </p>
          <Link to="/schedule-consultation" className="btn btn-primary btn-lg home-hero-2-btn">Schedule a Consultation</Link>
        </div>
      </section>

      <style>{`
        .hero-about .hero-nav { display: none; }
        .industries-grid-static {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .industries-grid-static { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .industries-grid-static { grid-template-columns: repeat(3, 1fr); }
        }
        .industries-grid-static .industries-card {
          width: 100%;
        }
        .about-stat .about-stat-value.about-strength-value {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--slate-800);
        }
        .about-stats-primary {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 900px) {
          .about-stats-primary {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 560px) {
          .about-stats-primary {
            grid-template-columns: 1fr;
            margin-bottom: 1.75rem;
          }
          .about-stats-primary .about-stat {
            padding: 1.1rem 0.9rem;
          }
          .about-stats-primary .about-stat-value {
            font-size: 1.55rem;
          }
        }
        .about-compliance-link-wrap {
          margin-top: 2rem;
          padding: 1.25rem;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--white);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .about-compliance-link-text {
          margin: 0;
          color: var(--slate-700);
          font-size: 0.95rem;
        }
      `}</style>
    </>
  );
}
