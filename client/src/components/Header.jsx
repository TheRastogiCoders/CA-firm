import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAllServices } from '../data/servicesData';

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

const TEAM_DROPDOWN_ITEMS = [
  { to: '/team', label: 'Partners' },
  { to: '/team-members', label: 'Team Members' },
  { to: '/support-team', label: 'Support Team' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const servicesDropdownRef = useRef(null);
  const teamDropdownRef = useRef(null);
  const headerRef = useRef(null);
  const location = useLocation();
  const services = getAllServices();
  const isServicesPath = location.pathname === '/services' || location.pathname.startsWith('/services/');
  const isTeamPath = location.pathname === '/team' || location.pathname === '/team-members' || location.pathname === '/support-team';
  const isMobileViewport = () => (
    typeof window !== 'undefined' && window.matchMedia('(max-width: 991px)').matches
  );

  const handleServicesTriggerClick = () => {
    if (isMobileViewport()) {
      setServicesOpen((prev) => !prev);
      return;
    }
    setTeamOpen(false);
    setServicesOpen(true);
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
        setMenuOpen(false);
        setServicesOpen(false);
        setTeamOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setTeamOpen(false);
  }, [location.pathname]);

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
          <div className="header-nav-links">
            {navLinks.map(({ to, label }) => (
              label === 'Services' ? (
                <div
                  key={to}
                  ref={servicesDropdownRef}
                  className={`header-services-dropdown ${isServicesPath ? 'header-services-dropdown-active' : ''}`}
                  onMouseEnter={() => {
                    if (!isMobileViewport()) {
                      setTeamOpen(false);
                      setServicesOpen(true);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isMobileViewport()) setServicesOpen(false);
                  }}
                >
                  <button
                    type="button"
                    className={`header-nav-link header-services-trigger ${isServicesPath ? 'header-nav-link-active' : ''}`}
                    onClick={handleServicesTriggerClick}
                    aria-expanded={servicesOpen}
                    aria-haspopup="menu"
                  >
                    Services
                    <span className={`header-services-caret ${servicesOpen ? 'header-services-caret-open' : ''}`} aria-hidden="true">▾</span>
                  </button>
                  <div className={`header-services-menu ${servicesOpen ? 'header-services-menu-open' : ''}`} role="menu" aria-label="Services submenu">
                    <Link
                      to="/services"
                      className={`header-services-item ${location.pathname === '/services' ? 'header-services-item-active' : ''}`}
                      onClick={() => {
                        setMenuOpen(false);
                        setServicesOpen(false);
                        setTeamOpen(false);
                      }}
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className={`header-services-item ${location.pathname === `/services/${service.slug}` ? 'header-services-item-active' : ''}`}
                        onClick={() => {
                          setMenuOpen(false);
                          setServicesOpen(false);
                          setTeamOpen(false);
                        }}
                      >
                        {service.title}
                      </Link>
                    ))}
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
          font-size: 0.82rem;
          font-weight: 700;
          color: #1f2937;
          letter-spacing: 0.03em;
          line-height: 1.2;
          white-space: nowrap;
          text-transform: uppercase;
        }
        .header-tag {
          font-size: 0.62rem;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          line-height: 1.3;
          white-space: nowrap;
        }
        @media (min-width: 992px) {
          .header-name {
            font-size: 0.94rem;
          }
          .header-tag {
            font-size: 0.71rem;
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
          font-size: 0.78rem;
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
            font-size: 0.79rem;
          }
          .header-nav-link::after {
            left: 0.82rem;
            right: 0.82rem;
          }
        }
        @media (min-width: 1200px) {
          .header-nav-link {
            padding: 0.56rem 0.9rem;
            font-size: 0.8rem;
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
          font-size: 0.78rem;
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
            font-size: 0.79rem;
          }
          .header-services-trigger::after {
            left: 0.82rem;
            right: 0.82rem;
          }
        }
        @media (min-width: 1200px) {
          .header-services-trigger {
            padding: 0.56rem 0.9rem;
            font-size: 0.8rem;
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
        .header-services-menu {
          position: absolute;
          top: calc(100% + 0.25rem);
          left: 0;
          min-width: 292px;
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
          .header-backdrop { display: block; }
          .header-nav {
            display: flex;
            position: fixed;
            z-index: 1001;
            top: 0;
            right: 0;
            bottom: 0;
            width: min(360px, 100vw);
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 0;
            margin: 0;
            padding: 4.4rem 1rem 1rem;
            background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
            box-shadow: -12px 0 40px rgba(15, 23, 42, 0.14);
            overflow-y: auto;
            transform: translateX(100%);
            transition: transform 0.25s ease, visibility 0.25s;
            visibility: hidden;
            pointer-events: none;
          }
          .header-nav-links {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 0.35rem;
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
          }
          .header-nav-link {
            display: flex;
            width: 100%;
            justify-content: flex-start;
            padding: 0.88rem 0.9rem;
            font-size: 0.97rem;
            border-radius: 10px;
            border: 1px solid rgba(148, 163, 184, 0.2);
            background: rgba(255, 255, 255, 0.74);
            white-space: normal;
          }
          .header-nav-link::after {
            display: none;
          }
          .header-services-dropdown {
            display: block;
            width: 100%;
          }
          .header-services-trigger {
            width: 100%;
            justify-content: space-between;
            padding: 0.88rem 0.9rem;
            font-size: 0.97rem;
            border-radius: 10px;
            border: 1px solid rgba(148, 163, 184, 0.2);
            background: rgba(255, 255, 255, 0.74);
          }
          .header-services-trigger::after {
            display: none;
          }
          .header-services-menu {
            position: static;
            min-width: 0;
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
            background: rgba(248, 250, 252, 0.9);
          }
          .header-services-menu-open {
            display: block;
          }
          .header-services-item {
            font-size: 0.9rem;
            padding: 0.68rem 0.72rem;
          }
          .header-nav-link-active {
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
