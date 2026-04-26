import { useEffect, useMemo, useState } from 'react';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Team from './pages/Team';
import TeamMembers from './pages/TeamMembers';
import SupportTeam from './pages/SupportTeam';
import Clients from './pages/Clients';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import ScheduleConsultation from './pages/ScheduleConsultation';
import ServiceDetail from './pages/ServiceDetail';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import Disclaimer from './pages/Disclaimer';
import Compliance from './pages/Compliance';
import { getAllServices } from './data/servicesData';
import SeoHead from './components/SeoHead';

const QUICK_SERVICE_MODAL_KEY = 'dgc_quick_service_modal_hidden';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showQuickServiceModal, setShowQuickServiceModal] = useState(false);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState('');
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const services = useMemo(() => getAllServices(), []);

  useEffect(() => {
    const hidden = window.localStorage.getItem(QUICK_SERVICE_MODAL_KEY) === 'true';
    if (!hidden) {
      setShowQuickServiceModal(true);
    }
  }, []);

  useEffect(() => {
    if (!showQuickServiceModal) return;
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setShowQuickServiceModal(false);
      }
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [showQuickServiceModal]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const targets = Array.from(
      document.querySelectorAll(
        'main .page-hero, main .section, main .home-section, main .about-card, main .service-card, main article'
      )
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    targets.forEach((target, index) => {
      target.classList.remove('is-revealed');
      target.style.setProperty('--reveal-delay', `${Math.min(index * 35, 260)}ms`);
      observer.observe(target);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  const handleCloseModal = () => {
    if (dontShowAgain) {
      window.localStorage.setItem(QUICK_SERVICE_MODAL_KEY, 'true');
    }
    setShowQuickServiceModal(false);
  };

  const handleContinueToService = () => {
    if (!selectedServiceSlug) return;
    if (dontShowAgain) {
      window.localStorage.setItem(QUICK_SERVICE_MODAL_KEY, 'true');
    }
    setShowQuickServiceModal(false);
    navigate(`/services/${selectedServiceSlug}`);
  };

  return (
    <>
      <ScrollToTop />
      <SeoHead />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-members" element={<TeamMembers />} />
          <Route path="/support-team" element={<SupportTeam />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/compliance" element={<Compliance />} />
        </Routes>
      </main>
      <Footer />
      {showQuickServiceModal && (
        <div className="quick-service-modal-backdrop" role="presentation" onClick={handleCloseModal}>
          <section
            className="quick-service-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-service-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="quick-service-modal-close"
              onClick={handleCloseModal}
              aria-label="Close quick services popup"
            >
              ×
            </button>
            <span className="quick-service-modal-kicker">Quick Services</span>
            <h2 id="quick-service-modal-title">How can we help you today?</h2>
            <p>Select a service to go directly to the detailed page and explore scope, deliverables, and next steps.</p>

            <div className="quick-service-modal-grid">
              {services.map((service) => (
                <button
                  key={service.slug}
                  type="button"
                  className={`quick-service-chip${selectedServiceSlug === service.slug ? ' quick-service-chip-active' : ''}`}
                  onClick={() => setSelectedServiceSlug(service.slug)}
                >
                  {service.title}
                </button>
              ))}
            </div>

            <div className="quick-service-modal-actions">
              <button
                type="button"
                className="btn btn-primary quick-service-continue"
                onClick={handleContinueToService}
                disabled={!selectedServiceSlug}
              >
                Continue
              </button>
              <Link to="/services" className="btn btn-secondary quick-service-view-all" onClick={handleCloseModal}>
                View All Services
              </Link>
            </div>

            <label className="quick-service-modal-check">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(event) => setDontShowAgain(event.target.checked)}
              />
              <span>Do not show this again</span>
            </label>
          </section>
        </div>
      )}
      <style>{`
        .quick-service-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .quick-service-modal {
          position: relative;
          width: min(760px, 100%);
          border-radius: 18px;
          border: 1px solid rgba(148, 163, 184, 0.26);
          background: #fff;
          padding: 1.15rem;
          box-shadow: 0 20px 44px rgba(15, 23, 42, 0.24);
        }
        .quick-service-modal-close {
          position: absolute;
          top: 0.7rem;
          right: 0.7rem;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.3);
          background: #f8fafc;
          color: #334155;
          font-size: 1.15rem;
          line-height: 1;
          cursor: pointer;
        }
        .quick-service-modal-kicker {
          display: inline-flex;
          padding: 0.34rem 0.74rem;
          border-radius: 999px;
          background: rgba(31, 93, 150, 0.12);
          color: #1f5d96;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }
        .quick-service-modal h2 {
          margin: 0.72rem 0 0;
          font-size: clamp(1.24rem, 2.8vw, 1.72rem);
          color: #0f172a;
          line-height: 1.28;
        }
        .quick-service-modal > p {
          margin: 0.6rem 0 0;
          color: #475569;
          font-size: 0.92rem;
          line-height: 1.56;
        }
        .quick-service-modal-grid {
          margin-top: 1rem;
          display: grid;
          gap: 0.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 700px) {
          .quick-service-modal-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .quick-service-chip {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 11px;
          background: #fff;
          color: #334155;
          min-height: 44px;
          padding: 0.58rem 0.78rem;
          text-align: left;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .quick-service-chip:hover {
          border-color: rgba(31, 93, 150, 0.4);
          background: rgba(31, 93, 150, 0.08);
        }
        .quick-service-chip-active {
          border-color: rgba(31, 93, 150, 0.56);
          background: rgba(31, 93, 150, 0.14);
          color: #173b68;
        }
        .quick-service-modal-actions {
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
        }
        .quick-service-continue {
          min-width: 138px;
        }
        .quick-service-continue:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .quick-service-view-all {
          min-width: 152px;
          justify-content: center;
          text-decoration: none;
        }
        .quick-service-modal-check {
          margin-top: 0.8rem;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: #475569;
          font-size: 0.84rem;
          user-select: none;
        }
        .quick-service-modal-check input {
          width: 16px;
          height: 16px;
          accent-color: #1f5d96;
        }
      `}</style>
    </>
  );
}

export default App;
