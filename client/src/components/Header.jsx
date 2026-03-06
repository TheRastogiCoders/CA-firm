import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/team', label: 'Team' },
  { to: '/clients', label: 'Clients' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="header">
      {menuOpen && (
        <div
          className="header-backdrop"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className="container header-inner">
        <Link to="/" className="header-brand" onClick={() => setMenuOpen(false)}>
          <img src="/CA%20India%20Logo.png" alt="" className="header-logo" />
          <span className="header-name">DWIVEDI GUPTA & Co.</span>
        </Link>

        <nav className={`header-nav ${menuOpen ? 'header-nav-open' : ''}`} aria-label="Main navigation">
          {menuOpen && (
            <button
              type="button"
              className="header-close-btn"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className="header-close-icon" />
              <span className="header-close-icon" />
            </button>
          )}
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`header-nav-link ${location.pathname === to ? 'header-nav-link-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/schedule-consultation"
            className="header-cta header-cta-mobile"
            onClick={() => setMenuOpen(false)}
          >
            Schedule Consultation
          </Link>
        </nav>

        <div className="header-actions">
          <Link
            to="/schedule-consultation"
            className="header-cta header-cta-desktop"
            onClick={() => setMenuOpen(false)}
          >
            Schedule Consultation
          </Link>
          <button
            type="button"
            className="header-menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="header-menu-icon" />
            <span className="header-menu-icon" />
            <span className="header-menu-icon" />
          </button>
        </div>
      </div>

      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--white);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
          padding-top: env(safe-area-inset-top, 0);
        }
        .header .header-inner.container {
          max-width: none;
          width: 100%;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          min-height: 64px;
          padding: 0 1rem;
        }
        @media (min-width: 768px) {
          .header-inner {
            min-height: 72px;
            padding: 0 1.5rem;
            gap: 1rem;
          }
        }
        .header-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
          text-decoration: none;
          min-width: 0;
          flex: 1 1 auto;
        }
        .header-logo {
          height: 38px;
          width: auto;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .header-logo { height: 44px; }
        }
        .header-name {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--slate-800);
          letter-spacing: 0.02em;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (min-width: 768px) {
          .header-name { font-size: 1rem; }
        }
        .header-nav {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 0.125rem;
          flex: 0 1 auto;
          min-width: 0;
          margin: 0 1rem;
        }
        .header-nav-link {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--slate-600);
          text-decoration: none;
          border-radius: 6px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: color 0.2s ease, background 0.2s ease;
        }
        @media (min-width: 1200px) {
          .header-nav-link {
            padding: 0.5rem 0.625rem;
            font-size: 0.9375rem;
          }
        }
        .header-nav-link:hover {
          color: var(--primary);
          background: rgba(124, 58, 237, 0.06);
        }
        .header-nav-link-active {
          color: var(--primary);
          font-weight: 600;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }
        .header-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, var(--purple-600), var(--purple-700));
          border: none;
          border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
          white-space: nowrap;
        }
        @media (min-width: 1200px) {
          .header-cta {
            padding: 0.625rem 1.25rem;
            font-size: 0.9375rem;
          }
        }
        .header-cta:hover {
          color: #fff;
          background: linear-gradient(135deg, var(--purple-500), var(--purple-600));
          box-shadow: 0 4px 16px rgba(124, 58, 237, 0.5);
          transform: translateY(-1px);
        }
        .header-cta:active {
          transform: translateY(0) scale(0.98);
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.4);
        }
        .header-cta-desktop { display: none; }
        .header-cta-mobile { display: none; }
        .header-menu-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          padding: 0;
          appearance: none;
          -webkit-tap-highlight-color: transparent;
          background: none;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s;
        }
        @media (hover: hover) and (pointer: fine) {
          .header-menu-btn:hover { background: var(--slate-100); }
        }
        .header-menu-btn:focus-visible {
          outline: 2px solid var(--purple-300);
          outline-offset: 2px;
        }
        .header-menu-icon {
          width: 20px;
          height: 2px;
          background: var(--slate-700);
          border-radius: 1px;
          transition: transform 0.2s;
        }
        .header-close-btn {
          display: none;
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: none;
          background: var(--slate-100);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
        .header-close-btn:hover {
          background: var(--slate-200);
        }
        .header-close-icon {
          position: absolute;
          width: 16px;
          height: 2px;
          background: var(--slate-700);
          border-radius: 999px;
        }
        .header-close-icon:first-child {
          transform: rotate(45deg);
        }
        .header-close-icon:last-child {
          transform: rotate(-45deg);
        }
        @media (min-width: 992px) {
          .header-nav {
            display: flex;
          }
          .header-cta-desktop {
            display: inline-flex;
          }
          .header-menu-btn {
            display: none;
          }
        }
        .header-backdrop {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 999;
        }
        @media (max-width: 991px) {
          .header-backdrop { display: block; }
          .header-nav {
            display: flex;
            position: fixed;
            z-index: 1001;
            top: 0;
            right: 0;
            bottom: 0;
            width: min(320px, 100vw);
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 0;
            margin: 0;
            padding: 5rem 1.5rem 1.5rem;
            background: var(--white);
            box-shadow: -4px 0 24px rgba(0, 0, 0, 0.08);
            overflow-y: auto;
            transform: translateX(100%);
            transition: transform 0.25s ease, visibility 0.25s;
            visibility: hidden;
            pointer-events: none;
            position: fixed;
          }
          .header-nav-open {
            transform: translateX(0);
            visibility: visible;
            pointer-events: auto;
          }
          .header-nav-open .header-close-btn {
            display: inline-flex;
          }
          .header-nav-link {
            padding: 0.875rem 1rem;
            font-size: 1rem;
            border-radius: 8px;
            border-bottom: 1px solid var(--slate-100);
            white-space: normal;
          }
          .header-nav-link:nth-last-child(2) { border-bottom: none; }
          .header-cta-mobile {
            display: inline-flex !important;
            width: 100%;
            margin-top: 1rem;
            padding: 0.875rem 1.25rem;
            font-size: 1rem;
            text-align: center;
          }
        }
        @media (max-width: 991px) {
          .header-name {
            white-space: normal;
            overflow: visible;
            text-overflow: clip;
            line-height: 1.15;
            max-width: none;
          }
        }
        @media (max-width: 480px) {
          .header-logo {
            height: 34px;
          }
          .header-name {
            font-size: 0.72rem;
          }
        }
      `}</style>
    </header>
  );
}
