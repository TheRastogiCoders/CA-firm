import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Team from './pages/Team';
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

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/team" element={<Team />} />
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
    </>
  );
}

export default App;
