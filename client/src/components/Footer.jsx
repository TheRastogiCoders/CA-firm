import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllServices } from '../data/servicesData';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/team', label: 'Team' },
  { to: '/clients', label: 'Clients' },
  { to: '/insights', label: 'Insights' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
  { to: '/schedule-consultation', label: 'Schedule Consultation' },
];

const FOOTER_SERVICES = getAllServices().map((s) => ({ to: `/services/${s.slug}`, label: s.title }));

const OFFICES = [
  { city: 'Varanasi', label: 'Head Office', address: 'S-8/108-B-3-A Prashantpuri, M.A Road, Varanasi – 221002', mapUrl: 'https://tinyurl.com/kz2y9bax' },
  { city: 'Delhi', label: 'Branch Office', address: '62, Shrestha Vihar, Vikas Marg Extension, Delhi – 110092', mapUrl: 'https://www.google.com/maps/search/?api=1&query=62+Shrestha+Vihar+Vikas+Marg+Extension+Delhi+110092' },
  { city: 'Kolkata', label: 'Branch Office', address: 'Brijdham Housing Complex, 637 Dakshin Dari Road, 5th Floor Flat-5E, Bldg 16-C, Kolkata, WB', mapUrl: 'https://www.google.com/maps/search/?api=1&query=Brijdham+Housing+Complex+637+Dakshin+Dari+Road+Kolkata' },
  { city: 'Bokaro', label: 'Branch Office', address: 'C-1, 21A, 2nd Floor, City Centre, Sector-4, Bokaro Steel City, Jharkhand', mapUrl: 'https://www.google.com/maps/search/?api=1&query=C-1+21A+City+Centre+Sector+4+Bokaro+Steel+City' },
];

const RESOURCE_LINKS = [
  { to: '/sitemap', label: 'Sitemap' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/disclaimer', label: 'Disclaimer' },
  { to: '/compliance', label: 'Compliance Information' },
];

const EMAIL = 'vivek.gupta@dgc.ind.in';
const PHONE = '+919415805906';
const PHONE_DISPLAY = '+91 94158 05906';
const WHATSAPP_URL = `https://wa.me/${PHONE.replace(/\D/g, '')}`;
const LINKEDIN_URL = 'https://www.linkedin.com/company/dwivedi-gupta-co';

const SCROLL_THRESHOLD = 400;

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <button
      type="button"
      className={`footer-scroll-top${visible ? ' footer-scroll-top--visible' : ''}`}
      onClick={scrollTop}
      aria-label="Scroll to top"
      aria-hidden={!visible}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) setSubscribed(true);
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col footer-brand">
            <Link to="/" className="footer-logo-link" aria-label="Dwivedi Gupta & Co. (DGC India) – Home">
              <img
                src="/CA%20India%20Logo.png"
                alt=""
                className="footer-logo-img"
                width="120"
                height="44"
              />
            </Link>
            <p className="footer-company-name">Dwivedi Gupta & Co.</p>
            <p className="footer-tagline">
              Dwivedi Gupta & Co. is a Chartered Accountants firm providing taxation, audit,
              advisory, and financial consulting services since 2003 with offices in Varanasi,
              Delhi, Kolkata, and Bokaro.
            </p>
            <Link to="/schedule-consultation" className="footer-cta-btn">
              Schedule Consultation
            </Link>
            <div className="footer-social" aria-label="Social and contact links">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href={`mailto:${EMAIL}`} className="footer-social-icon" aria-label="Email">
                <EmailIcon />
              </a>
              <a href={`tel:${PHONE}`} className="footer-social-icon" aria-label="Phone">
                <PhoneIcon />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <nav className="footer-col" aria-label="Quick links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              {QUICK_LINKS.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-list">
              {FOOTER_SERVICES.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Office Addresses */}
          <div className="footer-col">
            <h3 className="footer-heading">Our Offices</h3>
            <ul className="footer-list footer-offices">
              {OFFICES.map(({ city, label, address, mapUrl }) => (
                <li key={city}>
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="footer-office-link">
                    <span className="footer-office-icon" aria-hidden="true">
                      <LocationIcon />
                    </span>
                    <span className="footer-office-text">
                      <strong>{city}</strong> — {label}
                      <br />
                      <span className="footer-office-address">{address}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter & Resources */}
          <div className="footer-col footer-newsletter-col">
            <h3 className="footer-heading">Newsletter</h3>
            {subscribed ? (
              <p className="footer-newsletter-success">Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  className="footer-newsletter-input"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="footer-newsletter-btn">Subscribe</button>
              </form>
            )}
            <h3 className="footer-heading footer-resources-heading">Resources</h3>
            <ul className="footer-list">
              {RESOURCE_LINKS.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Dwivedi Gupta & Co. All Rights Reserved.
          </p>
          <nav className="footer-bottom-links" aria-label="Legal and sitemap">
            <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
            <span className="footer-bottom-sep">|</span>
            <Link to="/terms" className="footer-bottom-link">Terms</Link>
            <span className="footer-bottom-sep">|</span>
            <Link to="/sitemap" className="footer-bottom-link">Sitemap</Link>
          </nav>
        </div>
      </div>

      <ScrollToTop />

      <style>{`
        .footer {
          position: relative;
          background: linear-gradient(180deg, #0c1222 0%, #071018 50%, #050b12 100%);
          color: #e2e8f0;
          padding: 0;
          margin-top: auto;
        }
        .footer-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 2rem;
        }
        .footer-grid {
          display: grid;
          gap: 2.5rem 1.5rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 900px) {
          .footer-grid { grid-template-columns: 1.5fr 1fr 1fr; }
        }
        @media (min-width: 1200px) {
          .footer-grid {
            grid-template-columns: 1.6fr 1fr 1fr 1.4fr 1.2fr;
            gap: 2.5rem 2rem;
            margin-bottom: 2.5rem;
          }
        }
        .footer-col { min-width: 0; }
        .footer-brand { max-width: 340px; }
        .footer-logo-link {
          display: inline-flex;
          margin-bottom: 1rem;
          transition: opacity 0.2s ease;
        }
        .footer-logo-link:hover { opacity: 0.9; }
        .footer-logo-img { height: 44px; width: auto; object-fit: contain; display: block; }
        .footer-tagline {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .footer-company-name {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 500;
          color: #fff;
          margin-bottom: 0.75rem;
          letter-spacing: 0.02em;
        }
        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.625rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, var(--purple-600), var(--purple-700));
          border: none;
          border-radius: 6px;
          text-decoration: none;
          transition: box-shadow 0.25s ease, transform 0.2s ease, opacity 0.2s ease;
          margin-bottom: 1.5rem;
        }
        .footer-cta-btn:hover {
          box-shadow: 0 4px 20px rgba(124, 58, 237, 0.45);
          transform: translateY(-1px);
          opacity: 0.95;
        }
        .footer-cta-btn:focus-visible { outline: 2px solid var(--purple-400); outline-offset: 2px; }
        .footer-social {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .footer-social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
          color: #60A5FA;
          transition: color 0.2s ease, background 0.2s ease, box-shadow 0.25s ease;
        }
        .footer-social-icon:hover {
          color: #93c5fd;
          background: rgba(96, 165, 250, 0.15);
          box-shadow: 0 0 16px rgba(96, 165, 250, 0.3);
        }
        .footer-heading {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #fff;
          margin-bottom: 1rem;
        }
        .footer-resources-heading { margin-top: 1.5rem; }
        .footer-list { list-style: none; padding: 0; margin: 0; }
        .footer-list li { margin-bottom: 0.5rem; }
        .footer-link {
          display: inline-block;
          color: #94a3b8;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.2s ease, text-indent 0.2s ease;
        }
        .footer-link:hover {
          color: #60A5FA;
          text-indent: 2px;
        }
        .footer-offices { display: flex; flex-direction: column; gap: 0.75rem; }
        .footer-office-link {
          display: inline-flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-office-link:hover { color: #60A5FA; }
        .footer-office-icon {
          flex-shrink: 0;
          color: #60A5FA;
          margin-top: 2px;
        }
        .footer-office-text strong { color: #e2e8f0; font-size: 0.9rem; }
        .footer-office-address { color: #64748b; font-size: 0.8rem; }
        .footer-newsletter-form {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0;
          max-width: 320px;
        }
        .footer-newsletter-input {
          flex: 1;
          min-width: 140px;
          padding: 0.6rem 0.75rem;
          font-size: 0.875rem;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
        }
        .footer-newsletter-input::placeholder { color: #64748b; }
        .footer-newsletter-input:focus {
          outline: none;
          border-color: #60A5FA;
          box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.25);
        }
        .footer-newsletter-btn {
          flex-shrink: 0;
          padding: 0.6rem 1rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #0f172a;
          background: linear-gradient(135deg, #60A5FA, #3B82F6);
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: box-shadow 0.25s ease, opacity 0.2s ease;
        }
        .footer-newsletter-btn:hover {
          box-shadow: 0 0 16px rgba(96, 165, 250, 0.4);
          opacity: 0.95;
        }
        .footer-newsletter-success { color: #86efac; font-size: 0.9rem; }
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          margin-bottom: 1.5rem;
        }
        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding-top: 0;
          text-align: center;
        }
        .footer-copyright {
          font-size: 0.8125rem;
          color: #64748b;
          letter-spacing: 0.02em;
        }
        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-bottom-link {
          font-size: 0.8125rem;
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-bottom-link:hover { color: #60A5FA; }
        .footer-bottom-sep { color: #475569; font-size: 0.75rem; user-select: none; }
        .footer-scroll-top {
          position: fixed;
          bottom: max(1.25rem, env(safe-area-inset-bottom));
          right: max(1.25rem, env(safe-area-inset-right));
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          padding: 0;
          background:
            radial-gradient(120% 120% at 30% 20%, rgba(147, 197, 253, 0.35), transparent 55%),
            linear-gradient(145deg, #1e40af 0%, #1d4ed8 55%, #1e3a8a 100%);
          border: 1px solid rgba(191, 219, 254, 0.3);
          border-radius: 50%;
          color: #eff6ff;
          cursor: pointer;
          box-shadow:
            0 10px 24px rgba(15, 23, 42, 0.35),
            0 3px 10px rgba(37, 99, 235, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(14px) scale(0.94);
          transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease, box-shadow 0.25s ease, filter 0.25s ease;
        }
        .footer-scroll-top::after {
          content: '';
          position: absolute;
          inset: 5px;
          border-radius: inherit;
          border: 1px solid rgba(255, 255, 255, 0.18);
          pointer-events: none;
        }
        .footer-scroll-top--visible {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }
        .footer-scroll-top--visible:hover {
          transform: translateY(-3px) scale(1.03);
          filter: brightness(1.05);
          box-shadow:
            0 16px 32px rgba(30, 64, 175, 0.4),
            0 0 24px rgba(96, 165, 250, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        .footer-scroll-top--visible:active {
          transform: translateY(0) scale(0.98);
        }
        .footer-scroll-top:focus-visible {
          outline: 2px solid #bfdbfe;
          outline-offset: 3px;
        }
        @media (max-width: 640px) {
          .footer-scroll-top {
            width: 50px;
            height: 50px;
            bottom: max(1rem, env(safe-area-inset-bottom));
            right: max(1rem, env(safe-area-inset-right));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-scroll-top {
            transition: opacity 0.2s ease, visibility 0.2s ease;
            transform: none;
          }
          .footer-scroll-top--visible:hover,
          .footer-scroll-top--visible:active {
            transform: none;
          }
        }
      `}</style>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
