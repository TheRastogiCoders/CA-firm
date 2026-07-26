import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAllServices } from '../data/servicesData';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/team', label: 'Team' },
  { to: '/insights', label: 'Insights' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

const TEAM_DROPDOWN_ITEMS = [
  { to: '/team', label: 'Partners' },
  { to: '/support-team', label: 'Support Team' },
];

/** Mega-menu column layout (category titles + keyArea links). */
const SERVICES_MEGA_COLUMNS = [
  ['audit-assurance', 'tax-regulatory-services'],
  ['corporate-law-compliance', 'project-finance-consultancy'],
  ['government-subsidies', 'startup-advisory'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const servicesDropdownRef = useRef(null);
  const teamDropdownRef = useRef(null);
  const headerRef = useRef(null);
  const servicesCloseTimerRef = useRef(null);
  const location = useLocation();
  const services = getAllServices();
  const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
  const megaColumns = SERVICES_MEGA_COLUMNS.map((slugs) =>
    slugs.map((slug) => servicesBySlug[slug]).filter(Boolean)
  );
  const isServicesPath = location.pathname === '/services' || location.pathname.startsWith('/services/');
  const isTeamPath = location.pathname === '/team' || location.pathname === '/support-team';
  const isMobileViewport = () => (
    typeof window !== 'undefined' && window.matchMedia('(max-width: 991px)').matches
  );

  const clearServicesCloseTimer = () => {
    if (servicesCloseTimerRef.current) {
      window.clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }
  };

  const openServicesMenu = () => {
    clearServicesCloseTimer();
    setTeamOpen(false);
    setServicesOpen(true);
  };

  const scheduleCloseServicesMenu = () => {
    clearServicesCloseTimer();
    servicesCloseTimerRef.current = window.setTimeout(() => {
      setServicesOpen(false);
      servicesCloseTimerRef.current = null;
    }, 180);
  };

  const closeMenus = () => {
    clearServicesCloseTimer();
    setMenuOpen(false);
    setServicesOpen(false);
    setTeamOpen(false);
  };

  const handleServicesTriggerClick = () => {
    if (isMobileViewport()) {
      setServicesOpen((prev) => !prev);
      return;
    }
    openServicesMenu();
  };

  const handleTeamTriggerClick = () => {
    if (isMobileViewport()) {
      setTeamOpen((prev) => !prev);
      return;
    }
    setServicesOpen(false);
    setTeamOpen(true);
  };

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

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        clearServicesCloseTimer();
        setMenuOpen(false);
        setServicesOpen(false);
        setTeamOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    clearServicesCloseTimer();
    setServicesOpen(false);
    setTeamOpen(false);
  }, [location.pathname]);

  useEffect(() => () => clearServicesCloseTimer(), []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && headerRef.current) {
      resizeObserver = new ResizeObserver(updateHeaderHeight);
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!servicesDropdownRef.current) return;
      const clickedOutsideServices = !servicesDropdownRef.current.contains(event.target);
      const clickedOutsideTeam = !teamDropdownRef.current || !teamDropdownRef.current.contains(event.target);
      if (clickedOutsideServices) {
        clearServicesCloseTimer();
        setServicesOpen(false);
      }
      if (clickedOutsideTeam) setTeamOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const renderNavLinks = () => (
    <div className="header-nav-links">
      {navLinks.map(({ to, label }) => (
        label === 'Services' ? (
          <div
            key={to}
            ref={servicesDropdownRef}
            className={`header-services-dropdown ${isServicesPath ? 'header-services-dropdown-active' : ''}`}
            onMouseEnter={() => {
              if (!isMobileViewport()) openServicesMenu();
            }}
            onMouseLeave={() => {
              if (!isMobileViewport()) scheduleCloseServicesMenu();
            }}
          >
            <button
              type="button"
              className={`header-nav-link header-services-trigger ${isServicesPath || servicesOpen ? 'header-nav-link-active' : ''}`}
              onClick={handleServicesTriggerClick}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
            >
              Services
              <span className={`header-services-caret ${servicesOpen ? 'header-services-caret-open' : ''}`} aria-hidden="true">▾</span>
            </button>
            <div
              className={`header-services-mega ${servicesOpen ? 'header-services-mega-open' : ''}`}
              role="menu"
              aria-label="Services mega menu"
              onMouseEnter={() => {
                if (!isMobileViewport()) openServicesMenu();
              }}
              onMouseLeave={() => {
                if (!isMobileViewport()) scheduleCloseServicesMenu();
              }}
            >
              <div className="header-services-mega-inner">
                <div className="header-services-mega-top">
                  <p className="header-services-mega-label">Our Services</p>
                  <Link
                    to="/services"
                    className={`header-services-mega-all ${location.pathname === '/services' ? 'header-services-mega-all-active' : ''}`}
                    onClick={closeMenus}
                  >
                    All Services
                    <span aria-hidden="true"> →</span>
                  </Link>
                </div>
                <div className="header-services-mega-grid">
                  {megaColumns.map((column, colIndex) => (
                    <div key={`mega-col-${colIndex}`} className="header-services-mega-col">
                      {column.map((service) => {
                        const serviceActive = location.pathname === `/services/${service.slug}`;
                        return (
                          <div key={service.slug} className="header-services-mega-group">
                            <Link
                              to={`/services/${service.slug}`}
                              className={`header-services-mega-title ${serviceActive ? 'header-services-mega-title-active' : ''}`}
                              onClick={closeMenus}
                            >
                              {service.title}
                            </Link>
                            <ul className="header-services-mega-list">
                              {(service.keyAreas || []).slice(0, 4).map((area) => (
                                <li key={area}>
                                  <Link
                                    to={`/services/${service.slug}`}
                                    className="header-services-mega-link"
                                    onClick={closeMenus}
                                  >
                                    {area}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : label === 'Team' ? (
          <div
            key={to}
            ref={teamDropdownRef}
            className={`header-services-dropdown ${isTeamPath ? 'header-services-dropdown-active' : ''}`}
            onMouseEnter={() => {
              if (!isMobileViewport()) {
                setServicesOpen(false);
                setTeamOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobileViewport()) setTeamOpen(false);
            }}
          >
            <button
              type="button"
              className={`header-nav-link header-services-trigger ${isTeamPath ? 'header-nav-link-active' : ''}`}
              onClick={handleTeamTriggerClick}
              aria-expanded={teamOpen}
              aria-haspopup="menu"
            >
              Team
              <span className={`header-services-caret ${teamOpen ? 'header-services-caret-open' : ''}`} aria-hidden="true">▾</span>
            </button>
            <div className={`header-services-menu ${teamOpen ? 'header-services-menu-open' : ''}`} role="menu" aria-label="Team submenu">
              {TEAM_DROPDOWN_ITEMS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`header-services-item ${location.pathname === item.to ? 'header-services-item-active' : ''}`}
                  onClick={() => {
                    setMenuOpen(false);
                    setServicesOpen(false);
                    setTeamOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={to}
            to={to}
            className={`header-nav-link ${location.pathname === to ? 'header-nav-link-active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        )
      ))}
    </div>
  );

  return (
    <>
    <header ref={headerRef} className="header">
      {menuOpen && (
        <div
          className="header-backdrop"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className="container header-inner">
        <Link to="/" className="header-brand" onClick={() => setMenuOpen(false)}>
          <img src="/CA%20India%20Logo.png" alt="Dwivedi Gupta and Co. logo" className="header-logo" />
          <span className="header-brand-text">
            <span className="header-name">DWIVEDI GUPTA & Co.</span>
            <span className="header-tag">Chartered Accountants</span>
          </span>
        </Link>

        <nav
          id="main-navigation"
          className={`header-nav ${menuOpen ? 'header-nav-open' : ''}`}
          aria-label="Main navigation"
        >
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
          {renderNavLinks()}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="header-menu-btn"
            aria-label="Toggle menu"
            aria-controls="main-navigation"
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
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          background: #ffffff;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 2px 12px rgba(15, 23, 42, 0.04);
          padding-top: env(safe-area-inset-top, 0);
          overflow: visible;
        }
        .header-spacer {
          width: 100%;
          flex-shrink: 0;
        }
        .header .header-inner.container {
          max-width: 1360px;
          width: min(100%, 1360px);
        }
        .header-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          min-height: 74px;
          padding: 0.6rem 1rem;
        }
        @media (min-width: 768px) {
          .header-inner {
            min-height: 78px;
            padding: 0.7rem 1.5rem;
            gap: 1.5rem;
          }
        }
        @media (min-width: 1200px) {
          .header-inner {
            gap: 2rem;
          }
        }
        .header-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
          text-decoration: none;
          min-width: 0;
          flex: 0 1 auto;
        }
        .header-logo {
          height: 48px;
          width: auto;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .header-logo { height: 54px; }
        }
        .header-brand-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .header-name {
          font-size: 0.98rem;
          font-weight: 700;
          color: #1f2937;
          letter-spacing: 0.03em;
          line-height: 1.2;
          white-space: nowrap;
          text-transform: uppercase;
        }
        .header-tag {
          font-size: 0.74rem;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          line-height: 1.3;
          white-space: nowrap;
        }
        @media (min-width: 992px) {
          .header-name {
            font-size: 1.18rem;
          }
          .header-tag {
            font-size: 0.88rem;
          }
        }
        .header-nav {
          display: none;
          align-items: center;
          justify-content: flex-end;
          flex: 1 1 auto;
          min-width: 0;
          margin-left: auto;
        }
        .header-nav-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: nowrap;
          gap: 0.1rem;
          padding: 0;
          background: transparent;
          border: none;
          border-radius: 0;
          box-shadow: none;
          margin-left: auto;
        }
        @media (min-width: 1100px) {
          .header-nav-links {
            gap: 0.3rem;
          }
        }
        @media (min-width: 1200px) {
          .header-nav-links {
            gap: 0.5rem;
          }
        }
        .header-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.56rem 0.7rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: #4b5563;
          text-decoration: none;
          border-radius: 0;
          letter-spacing: 0.005em;
          white-space: nowrap;
          transition: color 0.2s ease;
          flex-shrink: 0;
          background: transparent;
        }
        .header-nav-link::after {
          content: '';
          position: absolute;
          left: 0.7rem;
          right: 0.7rem;
          bottom: 0.28rem;
          height: 2px;
          border-radius: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.2s ease;
        }
        @media (min-width: 1100px) {
          .header-nav-link {
            padding: 0.56rem 0.82rem;
            font-size: 0.97rem;
          }
          .header-nav-link::after {
            left: 0.82rem;
            right: 0.82rem;
          }
        }
        @media (min-width: 1200px) {
          .header-nav-link {
            padding: 0.56rem 0.9rem;
            font-size: 1rem;
          }
          .header-nav-link::after {
            left: 0.9rem;
            right: 0.9rem;
          }
        }
        .header-nav-link:hover {
          color: var(--primary);
          background: transparent;
        }
        .header-nav-link:hover::after {
          transform: scaleX(0.55);
          opacity: 0.55;
        }
        .header-nav-link-active {
          color: var(--primary);
          background: transparent;
        }
        .header-nav-link-active::after {
          transform: scaleX(1);
          opacity: 1;
        }
        .header-services-dropdown {
          position: relative;
          display: inline-flex;
        }
        .header-services-trigger {
          gap: 0.35rem;
          border: none;
          background: transparent;
          cursor: pointer;
          font-family: inherit;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0.56rem 0.7rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: #4b5563;
          text-decoration: none;
          border-radius: 0;
          letter-spacing: 0.005em;
          white-space: nowrap;
          transition: color 0.2s ease;
          flex-shrink: 0;
          position: relative;
          height: auto;
          line-height: inherit;
        }
        .header-services-trigger::after {
          content: '';
          position: absolute;
          left: 0.7rem;
          right: 0.7rem;
          bottom: 0.28rem;
          height: 2px;
          border-radius: 2px;
          background: var(--primary);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.2s ease;
        }
        @media (min-width: 1100px) {
          .header-services-trigger {
            padding: 0.56rem 0.82rem;
            font-size: 0.97rem;
          }
          .header-services-trigger::after {
            left: 0.82rem;
            right: 0.82rem;
          }
        }
        @media (min-width: 1200px) {
          .header-services-trigger {
            padding: 0.56rem 0.9rem;
            font-size: 1rem;
          }
          .header-services-trigger::after {
            left: 0.9rem;
            right: 0.9rem;
          }
        }
        .header-services-trigger:hover {
          color: var(--primary);
          background: transparent;
        }
        .header-services-trigger:hover::after {
          transform: scaleX(0.55);
          opacity: 0.55;
        }
        .header-services-trigger.header-nav-link-active {
          color: var(--primary);
          background: transparent;
        }
        .header-services-trigger.header-nav-link-active::after {
          transform: scaleX(1);
          opacity: 1;
        }
        .header-services-trigger:focus {
          outline: none;
        }
        .header-services-trigger:focus-visible {
          outline: 2px solid rgba(31, 93, 150, 0.32);
          outline-offset: 2px;
        }
        .header-services-caret {
          font-size: 0.64rem;
          line-height: 1;
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }
        .header-services-caret-open {
          transform: rotate(180deg);
        }
        /* Team keeps compact dropdown; Services uses mega panel */
        .header-services-menu {
          position: absolute;
          top: calc(100% + 0.25rem);
          left: 0;
          min-width: 220px;
          max-height: 360px;
          overflow-y: auto;
          padding: 0.5rem;
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.3);
          background: #ffffff;
          box-shadow: 0 18px 36px rgba(15, 23, 42, 0.16);
          opacity: 0;
          visibility: hidden;
          transform: translateY(6px);
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
          z-index: 1002;
        }
        .header-services-menu-open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }
        .header-services-item {
          display: block;
          padding: 0.58rem 0.66rem;
          border-radius: 8px;
          color: #334155;
          text-decoration: none;
          font-size: 0.83rem;
          font-weight: 600;
          line-height: 1.3;
          white-space: nowrap;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .header-services-item:hover {
          background: rgba(148, 163, 184, 0.14);
          color: #1e293b;
        }
        .header-services-item-active {
          background: rgba(31, 79, 134, 0.14);
          color: var(--primary);
        }
        /* Services mega-menu (desktop) — compact glass panel under trigger */
        .header-services-mega {
          display: none;
        }
        @media (min-width: 992px) {
          .header-services-dropdown:has(.header-services-mega) {
            position: relative;
          }
          .header-services-mega {
            display: block;
            position: absolute;
            top: calc(100% + 0.35rem);
            left: 50%;
            width: min(700px, calc(100vw - 2rem));
            padding-top: 0;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateX(-42%) translateY(6px);
            transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
            z-index: 1003;
          }
          .header-services-mega-open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateX(-42%) translateY(0);
          }
          .header-services-mega-inner {
            background: rgba(15, 39, 71, 0.82);
            backdrop-filter: blur(18px) saturate(1.15);
            -webkit-backdrop-filter: blur(18px) saturate(1.15);
            border-radius: 12px;
            box-shadow:
              0 16px 36px rgba(15, 39, 71, 0.28),
              0 2px 0 rgba(255, 255, 255, 0.06) inset;
            border: 1px solid rgba(255, 255, 255, 0.16);
            padding: 0.75rem 0.9rem 0.85rem;
          }
          .header-services-mega-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.75rem;
            margin-bottom: 0.7rem;
            padding-bottom: 0.55rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          }
          .header-services-mega-label {
            margin: 0;
            color: rgba(197, 218, 240, 0.75);
            font-size: 0.68rem;
            font-weight: 650;
            letter-spacing: 0.06em;
            text-transform: uppercase;
          }
          .header-services-mega-all {
            color: #ffffff;
            text-decoration: none;
            font-size: 0.72rem;
            font-weight: 650;
            letter-spacing: 0.01em;
            white-space: nowrap;
            transition: opacity 0.15s ease;
          }
          .header-services-mega-all:hover,
          .header-services-mega-all-active {
            opacity: 0.85;
          }
          .header-services-mega-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0.85rem 1rem;
          }
          .header-services-mega-col {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            min-width: 0;
            padding-right: 0.75rem;
            border-right: 1px solid rgba(255, 255, 255, 0.1);
          }
          .header-services-mega-col:last-child {
            border-right: none;
            padding-right: 0;
          }
          .header-services-mega-group {
            min-width: 0;
          }
          .header-services-mega-title {
            display: inline-block;
            max-width: 100%;
            color: #ffffff;
            text-decoration: none;
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.01em;
            line-height: 1.25;
            padding-bottom: 0.22rem;
            margin-bottom: 0.32rem;
            border-bottom: 1.5px solid rgba(255, 255, 255, 0.55);
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .header-services-mega-title:hover,
          .header-services-mega-title-active {
            color: #dbeafe;
            border-bottom-color: #8cb7dc;
          }
          .header-services-mega-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 0.16rem;
          }
          .header-services-mega-link {
            display: block;
            color: rgba(226, 236, 248, 0.78);
            text-decoration: none;
            font-size: 0.68rem;
            font-weight: 500;
            line-height: 1.35;
            transition: color 0.15s ease;
          }
          .header-services-mega-link:hover {
            color: #ffffff;
          }
        }
        @media (min-width: 992px) and (max-width: 1100px) {
          .header-services-mega {
            width: min(640px, calc(100vw - 1.5rem));
            transform: translateX(-48%) translateY(6px);
          }
          .header-services-mega-open {
            transform: translateX(-48%) translateY(0);
          }
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          flex-shrink: 0;
        }
        .header-menu-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 42px;
          height: 42px;
          padding: 0;
          appearance: none;
          -webkit-tap-highlight-color: transparent;
          background: #f8fafc;
          border: 1px solid rgba(148, 163, 184, 0.35);
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        @media (hover: hover) and (pointer: fine) {
          .header-menu-btn:hover {
            background: var(--slate-100);
            border-color: rgba(100, 116, 139, 0.42);
          }
        }
        .header-menu-btn:focus-visible {
          outline: 2px solid var(--purple-300);
          outline-offset: 2px;
        }
        .header-menu-icon {
          width: 19px;
          height: 2px;
          background: #334155;
          border-radius: 1px;
          transition: transform 0.2s;
        }
        .header-close-btn {
          display: none;
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.35);
          background: var(--slate-50);
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
          .header-menu-btn {
            display: none;
          }
        }
        .header-backdrop {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.4);
          z-index: 999;
        }
        @media (max-width: 991px) {
          .header-inner {
            gap: 0.7rem;
            overflow: visible;
          }
          .header-brand {
            flex: 1 1 auto;
            min-width: 0;
            gap: 0.58rem;
            align-items: center;
          }
          .header-brand-text {
            min-width: 0;
            overflow: hidden;
          }
          .header-name,
          .header-tag {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .header-backdrop {
            display: block;
            z-index: 1001;
          }
          .header-nav {
            display: flex;
            position: fixed;
            z-index: 1002;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            max-width: none;
            box-sizing: border-box;
            flex: none;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 0;
            margin: 0;
            padding: calc(4.6rem + env(safe-area-inset-top, 0px)) max(1.15rem, env(safe-area-inset-right, 0px)) calc(1.4rem + env(safe-area-inset-bottom, 0px)) max(1.15rem, env(safe-area-inset-left, 0px));
            background: #ffffff;
            box-shadow: none;
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior: contain;
            transform: translateX(100%);
            transition: transform 0.28s ease, visibility 0.28s;
            visibility: hidden;
            pointer-events: none;
          }
          .header-nav-links {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            flex-wrap: nowrap;
            gap: 0.45rem;
            width: 100%;
            max-width: 28rem;
            min-width: 0;
            margin: 0 auto;
            border: none;
            background: transparent;
            border-radius: 0;
            padding: 0;
            box-shadow: none;
          }
          .header-nav-open {
            transform: translateX(0);
            visibility: visible;
            pointer-events: auto;
          }
          .header-nav-open .header-close-btn {
            display: inline-flex;
            top: calc(0.9rem + env(safe-area-inset-top, 0px));
            right: 0.9rem;
            z-index: 2;
          }
          .header-nav-link {
            display: flex;
            box-sizing: border-box;
            width: 100%;
            max-width: 100%;
            justify-content: flex-start;
            padding: 0.88rem 0.95rem;
            font-size: 1.05rem;
            border-radius: 10px;
            border: 1px solid rgba(148, 163, 184, 0.2);
            background: rgba(255, 255, 255, 0.94);
            white-space: normal;
            flex-shrink: 1;
          }
          .header-nav-link::after {
            display: none;
          }
          .header-services-dropdown {
            display: block;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            position: relative;
          }
          .header-services-trigger {
            box-sizing: border-box;
            width: 100%;
            max-width: 100%;
            justify-content: space-between;
            padding: 0.88rem 0.95rem;
            font-size: 1.05rem;
            border-radius: 10px;
            border: 1px solid rgba(148, 163, 184, 0.2);
            background: rgba(255, 255, 255, 0.94);
            flex-shrink: 1;
          }
          .header-services-trigger::after {
            display: none;
          }
          .header-services-menu {
            position: static;
            width: 100%;
            min-width: 0;
            max-width: 100%;
            max-height: none;
            margin-top: 0.35rem;
            padding: 0.4rem;
            border-radius: 10px;
            box-shadow: none;
            border-color: rgba(148, 163, 184, 0.22);
            opacity: 1;
            visibility: visible;
            transform: none;
            pointer-events: auto;
            display: none;
            background: rgba(248, 250, 252, 0.95);
            overflow: visible;
          }
          .header-services-menu-open {
            display: block;
          }
          .header-services-item {
            font-size: 0.9rem;
            padding: 0.68rem 0.72rem;
            white-space: normal;
            word-break: break-word;
          }
          /* Mobile Services mega = stacked accordion panel */
          .header-services-mega {
            display: none;
            position: static;
            width: 100%;
            padding-top: 0.35rem;
            transform: none;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            left: auto;
          }
          .header-services-mega-open {
            display: block;
          }
          .header-services-mega-inner {
            background: rgba(15, 39, 71, 0.88);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 12px;
            padding: 0.85rem 0.9rem 0.95rem;
            box-shadow: none;
            border: 1px solid rgba(255, 255, 255, 0.12);
          }
          .header-services-mega-top {
            margin-bottom: 0.75rem;
            padding-bottom: 0.6rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
          }
          .header-services-mega-label {
            margin: 0;
            color: rgba(197, 218, 240, 0.7);
            font-size: 0.68rem;
            font-weight: 650;
            letter-spacing: 0.06em;
            text-transform: uppercase;
          }
          .header-services-mega-all {
            color: #c5daf0;
            text-decoration: none;
            font-size: 0.84rem;
            font-weight: 650;
          }
          .header-services-mega-grid {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .header-services-mega-col {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            border-right: none;
            padding-right: 0;
          }
          .header-services-mega-title {
            display: inline-block;
            color: #ffffff;
            text-decoration: none;
            font-size: 0.92rem;
            font-weight: 700;
            padding-bottom: 0.35rem;
            margin-bottom: 0.45rem;
            border-bottom: 2px solid #6ea2d0;
          }
          .header-services-mega-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 0.32rem;
          }
          .header-services-mega-link {
            display: block;
            color: rgba(226, 236, 248, 0.9);
            text-decoration: none;
            font-size: 0.84rem;
            font-weight: 500;
            line-height: 1.4;
            padding: 0.2rem 0;
          }
          .header-nav-link-active,
          .header-services-trigger.header-nav-link-active {
            color: var(--primary);
            background: rgba(31, 79, 134, 0.1);
            border-color: rgba(31, 93, 150, 0.28);
            box-shadow: inset 3px 0 0 var(--primary);
          }
        }
        @media (max-width: 991px) {
          .header-tag {
            letter-spacing: 0.12em;
          }
        }
        @media (max-width: 480px) {
          .header-logo {
            height: 38px;
          }
          .header-name {
            font-size: 0.74rem;
            letter-spacing: 0.02em;
          }
          .header-tag {
            font-size: 0.6rem;
            letter-spacing: 0.1em;
          }
        }
      `}</style>
    </header>
    <div className="header-spacer" aria-hidden="true" style={{ height: `${headerHeight}px` }} />
    </>
  );
}
