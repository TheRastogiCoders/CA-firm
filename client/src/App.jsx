import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Team from './pages/Team';
import SupportTeam from './pages/SupportTeam';
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
import SeoHead from './components/SeoHead';
import ZoomAdapt from './components/ZoomAdapt';

function App() {
  const location = useLocation();

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
        threshold: 0.08,
        rootMargin: '0px 0px 12% 0px',
      }
    );

    targets.forEach((target, index) => {
      const alwaysVisible = target.classList.contains('reveal-always');
      if (!alwaysVisible) {
        target.classList.remove('is-revealed');
      } else {
        target.classList.add('is-revealed');
      }
      target.style.setProperty('--reveal-delay', `${Math.min(index * 35, 260)}ms`);
      if (!alwaysVisible) {
        observer.observe(target);
      }
    });

    // Ensure above-the-fold sections don't stay invisible
    requestAnimationFrame(() => {
      targets.forEach((target) => {
        if (target.classList.contains('is-revealed')) return;
        const rect = target.getBoundingClientRect();
        const vh = window.innerHeight || 0;
        if (rect.top < vh * 0.92 && rect.bottom > 0) {
          target.classList.add('is-revealed');
          observer.unobserve(target);
        }
      });
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <ScrollToTop />
      <ZoomAdapt />
      <SeoHead />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/clients" element={<Navigate to="/industries" replace />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-members" element={<Navigate to="/team" replace />} />
          <Route path="/support-team" element={<SupportTeam />} />
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
    </>
  );
}

export default App;
