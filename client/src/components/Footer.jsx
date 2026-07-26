import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CONTACT_EMAIL,
  getMailtoHref,
  CONTACT_MOBILE_DISPLAY,
  CONTACT_MOBILE_RAW,
  WHATSAPP_URL,
} from '../data/contactInfo';

const NAV_LINKS = [
  { to: '/about-us', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/insights', label: 'Insights' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

const LEGAL_LINKS = [
  { to: '/compliance', label: 'Compliance' },
  { to: '/privacy-policy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
  { to: '/disclaimer', label: 'Disclaimer' },
];

const OFFICE_CITIES = ['VARANASI', 'DELHI', 'KOLKATA', 'BOKARO'];
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

  return (
    <button
      type="button"
      className={`footer-scroll-top${visible ? ' footer-scroll-top--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-brand-link" aria-label="Dwivedi Gupta & Co. – Home">
              <p className="footer-company-name">Dwivedi Gupta &amp; Co.</p>
              <p className="footer-tagline">Chartered Accountants since 2003</p>
            </Link>
          </div>

          <div className="footer-actions">
            <Link to="/contact" className="footer-btn footer-btn-primary">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="footer-mid">
          <nav className="footer-nav" aria-label="Footer">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className="footer-nav-link">
                {label}
              </Link>
            ))}
          </nav>

          <div className="footer-reach">
            <a href={getMailtoHref(CONTACT_EMAIL)} className="footer-reach-link">
              {CONTACT_EMAIL}
            </a>
            <a href={`tel:${CONTACT_MOBILE_RAW}`} className="footer-reach-link">
              {CONTACT_MOBILE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="footer-meta">
          <p className="footer-offices">{OFFICE_CITIES.join(' · ')}</p>
          <div className="footer-social" aria-label="Social links">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Dwivedi Gupta &amp; Co. All rights reserved.
          </p>
          <nav className="footer-legal" aria-label="Legal">
            {LEGAL_LINKS.map(({ to, label }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <ScrollToTop />

      <style>{`
        .footer {
          position: relative;
          margin-top: 2rem;
          background: linear-gradient(180deg, #0c1f38 0%, #0f2747 100%);
          color: #ffffff;
          border-top: 1px solid rgba(191, 219, 254, 0.12);
        }
        .footer-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 2.25rem 1.15rem 1.35rem;
        }

        .footer-top {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem 1.5rem;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          min-width: 0;
        }
        .footer-brand-link {
          display: block;
          text-decoration: none;
          color: inherit;
          min-width: 0;
        }
        .footer-brand-link:hover .footer-company-name {
          color: #e8f1fb;
        }
        .footer-company-name {
          margin: 0 0 0.2rem;
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.01em;
          line-height: 1.2;
        }
        .footer-tagline {
          margin: 0;
          font-size: 1rem;
          color: rgba(226, 236, 248, 0.82);
          line-height: 1.4;
        }

        .footer-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .footer-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 0.55rem 1.15rem;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.15s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .footer-btn-primary {
          color: #0f2747;
          background: #ffffff;
          border: 1px solid #ffffff;
        }
        .footer-btn-primary:hover {
          color: #0f2747;
          background: #f0f7ff;
          transform: translateY(-1px);
        }
        .footer-btn-secondary {
          color: #f8fbff;
          background: transparent;
          border: 1px solid rgba(191, 219, 254, 0.45);
        }
        .footer-btn-secondary:hover {
          color: #ffffff;
          border-color: rgba(191, 219, 254, 0.75);
          background: rgba(255, 255, 255, 0.06);
          transform: translateY(-1px);
        }

        .footer-mid {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem 1.5rem;
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(191, 219, 254, 0.14);
        }
        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem 1.15rem;
        }
        .footer-nav-link {
          position: relative;
          color: rgba(240, 248, 255, 0.88);
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          padding: 0.15rem 0;
        }
        .footer-nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1.5px;
          background: #fff;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.2s ease;
        }
        .footer-nav-link:hover {
          color: #fff;
        }
        .footer-nav-link:hover::after {
          transform: scaleX(1);
        }
        .footer-reach {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem 1.1rem;
        }
        .footer-reach-link {
          color: rgba(226, 236, 248, 0.82);
          font-size: 0.86rem;
          font-weight: 500;
          text-decoration: none;
          word-break: break-word;
        }
        .footer-reach-link:hover {
          color: #fff;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .footer-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem 1.25rem;
          margin-top: 1.15rem;
        }
        .footer-offices {
          margin: 0;
          font-size: 0.82rem;
          color: rgba(226, 236, 248, 0.68);
        }
        .footer-social {
          display: flex;
          gap: 0.5rem;
        }
        .footer-social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(191, 219, 254, 0.22);
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .footer-social-icon:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(191, 219, 254, 0.4);
          color: #fff;
        }

        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.65rem 1rem;
          margin-top: 1.15rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(191, 219, 254, 0.1);
        }
        .footer-copyright {
          margin: 0;
          font-size: 0.78rem;
          color: rgba(226, 236, 248, 0.65);
        }
        .footer-legal {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem 0.95rem;
        }
        .footer-legal a {
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(226, 236, 248, 0.72);
          text-decoration: none;
        }
        .footer-legal a:hover {
          color: #fff;
        }

        .footer-whatsapp-float {
          position: fixed;
          bottom: calc(max(1.25rem, env(safe-area-inset-bottom)) + 56px + 10px);
          right: max(1.25rem, env(safe-area-inset-right));
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: #25d366;
          border-radius: 50%;
          color: #fff;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.35);
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .footer-whatsapp-float:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(37, 211, 102, 0.42);
        }
        .footer-whatsapp-float svg {
          width: 24px;
          height: 24px;
        }
        .footer-scroll-top {
          position: fixed;
          bottom: max(1.25rem, env(safe-area-inset-bottom));
          right: max(1.25rem, env(safe-area-inset-right));
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          padding: 0;
          background: #173b68;
          border: 1px solid rgba(191, 219, 254, 0.28);
          border-radius: 50%;
          color: #f8fbff;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.3);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(8px);
          transition: opacity 0.25s ease, visibility 0.25s ease, transform 0.25s ease;
        }
        .footer-scroll-top--visible {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }
        .footer-scroll-top--visible:hover {
          transform: translateY(-2px);
          background: #1f5d96;
        }

        @media (max-width: 640px) {
          .footer-container {
            padding: 1.85rem 1rem 1.2rem;
          }
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-actions {
            width: 100%;
          }
          .footer-btn {
            flex: 1 1 auto;
            min-width: 0;
          }
          .footer-mid {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-whatsapp-float {
            width: 46px;
            height: 46px;
            bottom: calc(max(1rem, env(safe-area-inset-bottom)) + 52px + 8px);
            right: max(1rem, env(safe-area-inset-right));
          }
          .footer-scroll-top {
            width: 46px;
            height: 46px;
            bottom: max(1rem, env(safe-area-inset-bottom));
            right: max(1rem, env(safe-area-inset-right));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-btn,
          .footer-nav-link::after,
          .footer-whatsapp-float,
          .footer-scroll-top {
            transition: none;
          }
          .footer-btn:hover,
          .footer-whatsapp-float:hover,
          .footer-scroll-top--visible:hover {
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
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

