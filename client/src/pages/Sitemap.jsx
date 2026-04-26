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
const SITEMAP_GROUPS = [
  {
    title: 'Main Pages',
    desc: 'Primary website navigation and business information pages.',
    pages: CORE_PAGES,
  },
  {
    title: 'Service Detail Pages',
    desc: 'Detailed pages describing our engagement scope and deliverables.',
    pages: servicePages,
  },
  {
    title: 'Insights Library',
    desc: 'Knowledge articles, updates, and practical guidance notes.',
    pages: insightPages,
  },
];

export default function Sitemap() {
  return (
    <>
      <section className="page-hero sitemap-page-hero">
        <div className="container">
          <span className="page-hero-kicker">Site Navigation</span>
          <h1 className="page-title">Sitemap</h1>
          <p className="page-subtitle">
            Explore all public pages on the Dwivedi Gupta & Co. website in one structured view.
          </p>
        </div>
      </section>
      <section className="section sitemap-section">
        <div className="container sitemap-container">
          <div className="sitemap-head">
            <span className="sitemap-head-kicker">Website Directory</span>
            <h2>Complete page map for easier navigation</h2>
          </div>
          <div className="sitemap-groups">
            {SITEMAP_GROUPS.map((group) => (
              <article key={group.title} className="sitemap-group-card">
                <h3>{group.title}</h3>
                <p>{group.desc}</p>
                <ul>
                  {group.pages.map(({ path, label }) => (
                    <li key={path}>
                      <Link to={path}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="sitemap-note">
            Some pages may be updated over time as we refresh services, articles, and regulatory content.
          </p>
        </div>
      </section>
      <style>{`
        .sitemap-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(960px 320px at 50% -120px, rgba(31, 93, 150, 0.2), transparent 62%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 58%, rgba(255, 255, 255, 0.98) 100%);
        }
        .sitemap-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.22;
        }
        .sitemap-page-hero::after { opacity: 0.1; }
        .sitemap-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }
        .sitemap-container {
          max-width: 1160px;
        }
        .sitemap-head {
          text-align: center;
          margin-bottom: 1.75rem;
        }
        .sitemap-head-kicker {
          display: inline-flex;
          padding: 0.34rem 0.78rem;
          border-radius: 999px;
          background: rgba(31, 93, 150, 0.12);
          color: var(--primary);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .sitemap-head h2 {
          margin: 0.78rem 0 0;
          color: var(--slate-900);
          font-size: clamp(1.42rem, 2.8vw, 1.96rem);
        }
        .sitemap-groups {
          display: grid;
          gap: 0.95rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 980px) {
          .sitemap-groups {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .sitemap-group-card {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 16px;
          background: #fff;
          padding: 1rem;
          box-shadow: 0 10px 26px rgba(15, 39, 71, 0.08);
        }
        .sitemap-group-card h3 {
          margin: 0;
          font-size: 1.08rem;
          color: var(--slate-900);
        }
        .sitemap-group-card p {
          margin: 0.5rem 0 0;
          color: var(--slate-600);
          font-size: 0.9rem;
          line-height: 1.55;
        }
        .sitemap-group-card ul {
          list-style: none;
          margin: 0.8rem 0 0;
          padding: 0;
          display: grid;
          gap: 0.38rem;
        }
        .sitemap-group-card li a {
          color: var(--primary);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 600;
          line-height: 1.4;
        }
        .sitemap-group-card li a:hover {
          text-decoration: underline;
        }
        .sitemap-note {
          margin: 1rem 0 0;
          text-align: center;
          color: var(--slate-600);
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}
