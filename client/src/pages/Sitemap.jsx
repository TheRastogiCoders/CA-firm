import { Link } from 'react-router-dom';
import { getAllServices } from '../data/servicesData';
import { getAllInsights } from '../data/insightsData';

const CORE_PAGES = [
  { path: '/', label: 'Home' },
  { path: '/about-us', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/industries', label: 'Industries' },
  { path: '/team', label: 'Team' },
  { path: '/clients', label: 'Clients' },
  { path: '/insights', label: 'Insights' },
  { path: '/careers', label: 'Careers' },
  { path: '/schedule-consultation', label: 'Schedule Consultation' },
  { path: '/contact', label: 'Contact' },
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms', label: 'Terms & Conditions' },
  { path: '/disclaimer', label: 'Disclaimer' },
  { path: '/compliance', label: 'Compliance Information' },
];

const servicePages = getAllServices().map((s) => ({ path: `/services/${s.slug}`, label: `${s.title} (Service)` }));
const insightPages = getAllInsights().map((i) => ({ path: `/insights/${i.slug}`, label: `${i.title} (Insight)` }));
const PAGES = [...CORE_PAGES, ...servicePages, ...insightPages];

export default function Sitemap() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Sitemap</h1>
          <p className="page-subtitle">
            All pages on the Dwivedi Gupta & Co. website.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {PAGES.map(({ path, label }) => (
              <li key={path} style={{ marginBottom: '0.5rem' }}>
                <Link to={path} style={{ color: 'var(--primary)' }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
