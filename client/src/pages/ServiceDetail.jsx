import { Link, useParams, Navigate } from 'react-router-dom';
import { getServiceBySlug, getRelatedServices, SERVICE_SLUG_REDIRECTS } from '../data/servicesData';
import PageCtaBand from '../components/PageCtaBand';

export default function ServiceDetail() {
  const { slug } = useParams();
  const redirectedSlug = slug ? SERVICE_SLUG_REDIRECTS[slug] : null;
  if (redirectedSlug) {
    return <Navigate to={`/services/${redirectedSlug}`} replace />;
  }

  const service = slug ? getServiceBySlug(slug) : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = getRelatedServices(service.slug, 3);

  return (
    <>
      <section className="page-hero svc-detail-hero" aria-labelledby="service-detail-title">
        <div className="container">
          <nav className="svc-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/services">Services</Link>
            <span>/</span>
            <span>{service.title}</span>
          </nav>
          <h1 id="service-detail-title" className="page-title">
            {service.title}
          </h1>
          <p className="page-subtitle">{service.shortDescription}</p>
        </div>
      </section>

      <section className="home-section svc-detail-body">
        <div className="container svc-detail-container">
          <article className="svc-detail-overview">
            <h2>Overview</h2>
            <p>{service.longDescription}</p>
          </article>

          <div className="svc-detail-areas">
            <h2>Key Areas</h2>
            <ul>
              {service.keyAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {related.length > 0 && (
            <div className="svc-detail-related">
              <h2>Related Services</h2>
              <div className="svc-detail-related-grid">
                {related.map((item) => (
                  <Link key={item.slug} to={`/services/${item.slug}`}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <PageCtaBand
            title={`Discuss ${service.title}`}
            description="Share your requirements. We will confirm scope and timelines before starting."
          />
        </div>
      </section>

      <style>{`
        .svc-detail-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .svc-detail-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          align-items: center;
          margin-bottom: 0.75rem;
          font-size: 0.82rem;
          color: var(--slate-500);
        }
        .svc-detail-breadcrumb a {
          color: var(--slate-600);
          text-decoration: none;
        }
        .svc-detail-breadcrumb a:hover {
          color: var(--purple-700);
        }
        .svc-detail-hero .page-subtitle {
          max-width: 40rem;
        }
        .svc-detail-hero .page-hero-actions {
          margin-top: 1.1rem;
        }

        .svc-detail-body {
          padding-top: 2.25rem;
          padding-bottom: 2.5rem;
        }
        .svc-detail-container {
          max-width: 760px;
        }
        .svc-detail-overview h2,
        .svc-detail-areas h2,
        .svc-detail-related h2 {
          margin: 0 0 0.65rem;
          font-size: 1.2rem;
          color: var(--slate-900);
        }
        .svc-detail-overview p {
          margin: 0;
          color: var(--slate-600);
          font-size: 1.02rem;
          line-height: 1.7;
        }
        .svc-detail-areas {
          margin-top: 1.75rem;
        }
        .svc-detail-areas ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.45rem;
        }
        .svc-detail-areas li {
          position: relative;
          padding: 0.65rem 0.85rem 0.65rem 1.35rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 10px;
          background: #fff;
          color: var(--slate-700);
          font-size: 0.94rem;
          line-height: 1.45;
        }
        .svc-detail-areas li::before {
          content: '';
          position: absolute;
          left: 0.65rem;
          top: 50%;
          width: 6px;
          height: 6px;
          margin-top: -3px;
          border-radius: 50%;
          background: var(--purple-600);
        }
        .svc-detail-related {
          margin: 1.75rem 0 1.5rem;
        }
        .svc-detail-related-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .svc-detail-related-grid a {
          display: inline-flex;
          padding: 0.45rem 0.8rem;
          border-radius: 8px;
          border: 1px solid rgba(31, 93, 150, 0.26);
          background: rgba(31, 93, 150, 0.06);
          color: var(--purple-700);
          font-size: 0.86rem;
          font-weight: 600;
          text-decoration: none;
        }
        .svc-detail-related-grid a:hover {
          background: rgba(31, 93, 150, 0.12);
          border-color: rgba(31, 93, 150, 0.4);
        }
      `}</style>
    </>
  );
}
