import { Link } from 'react-router-dom';
import PageCtaBand from '../components/PageCtaBand';

const facts = [
  { value: '2003', label: 'Established' },
  { value: '20+', label: 'Years' },
  { value: '4', label: 'Offices' },
  { value: '7', label: 'Partners' },
];

const offices = [
  {
    city: 'Varanasi',
    kind: 'Head Office',
    mapUrl: 'https://tinyurl.com/kz2y9bax',
  },
  {
    city: 'Delhi',
    kind: 'Branch',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=62+Shrestha+Vihar+Vikas+Marg+Extension+Delhi+110092',
  },
  {
    city: 'Kolkata',
    kind: 'Branch',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Brijdham+Housing+Complex+637+Dakshin+Dari+Road+Kolkata',
  },
  {
    city: 'Bokaro',
    kind: 'Branch',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=C-1+21A+City+Centre+Sector+4+Bokaro+Steel+City',
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero about-page-hero">
        <div className="container">
          <span className="page-hero-kicker">About Us</span>
          <h1 className="page-title">Dwivedi Gupta &amp; Co.</h1>
          <p className="page-subtitle">
            Chartered Accountants for tax, audit, and advisory since 2003.
          </p>
          <div className="page-hero-actions">
            <Link to="/schedule-consultation" className="btn btn-primary">
              Schedule Consultation
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section about-simple">
        <div className="container">
          <div className="about-simple-grid">
            <div className="about-simple-copy">
              <h2>Who We Are</h2>
              <p>
                Dwivedi Gupta &amp; Co. is a Chartered Accountants firm based in Varanasi, with
                offices in Delhi, Kolkata, and Bokaro. We help businesses with tax, audit, GST,
                company law, and financial advisory.
              </p>
              <p>
                Partners stay involved in significant assignments so you get practical advice and
                clear timelines.
              </p>
              <div className="about-simple-facts">
                {facts.map((item) => (
                  <article key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
              <div className="about-simple-links">
                <Link to="/team" className="btn btn-secondary">
                  Meet Our Team
                </Link>
                <Link to="/services" className="btn btn-primary">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="about-simple-media">
              <img src="/officeimage.png" alt="Dwivedi Gupta and Co office" />
            </div>
          </div>
        </div>
      </section>

      <section className="home-section about-simple-vm">
        <div className="container">
          <div className="about-simple-vm-grid">
            <article>
              <h2>Vision</h2>
              <p>
                To be a trusted Chartered Accountants firm known for sound advice and consistent
                professional service.
              </p>
            </article>
            <article>
              <h2>Mission</h2>
              <p>
                To provide practical tax, audit, and advisory support that helps clients stay
                compliant and manage financial matters with confidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section about-simple-offices">
        <div className="container">
          <h2 className="about-simple-section-title">Our Offices</h2>
          <div className="about-simple-offices-grid">
            {offices.map((item) => (
              <a
                key={item.city}
                href={item.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="about-simple-office-card"
              >
                <strong>{item.city}</strong>
                <span>{item.kind}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section about-simple-cta">
        <div className="container">
          <PageCtaBand
            title="Need help with tax, audit, or compliance?"
            description="Speak with our team about your requirements. We respond within 24 to 48 working hours."
          />
        </div>
      </section>

      <style>{`
        .about-page-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .about-page-hero .page-title {
          max-width: 20ch;
        }
        .about-page-hero .page-subtitle {
          max-width: 36rem;
        }
        .about-page-hero .page-hero-actions {
          margin-top: 1.1rem;
        }

        .about-simple {
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
        }
        .about-simple-grid {
          display: grid;
          gap: 1.75rem;
          align-items: center;
        }
        @media (min-width: 768px) {
          .about-simple-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 2.25rem;
          }
        }
        .about-simple-copy h2 {
          margin: 0 0 0.75rem;
          font-size: clamp(1.5rem, 3vw, 2rem);
          color: var(--slate-900);
          letter-spacing: -0.02em;
        }
        .about-simple-copy p {
          margin: 0 0 0.85rem;
          color: var(--slate-600);
          font-size: 1.02rem;
          line-height: 1.65;
          max-width: 36rem;
        }
        .about-simple-facts {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.65rem;
          margin: 1.15rem 0 1.25rem;
        }
        @media (min-width: 480px) {
          .about-simple-facts {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        .about-simple-facts article {
          text-align: center;
          padding: 0.7rem 0.5rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 10px;
          background: #fff;
        }
        .about-simple-facts strong {
          display: block;
          font-size: 1.15rem;
          color: var(--purple-700);
          line-height: 1.2;
        }
        .about-simple-facts span {
          display: block;
          margin-top: 0.2rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--slate-600);
        }
        .about-simple-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .about-simple-media {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
          aspect-ratio: 5 / 4;
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.1);
        }
        .about-simple-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-simple-vm {
          padding-top: 0.5rem;
          padding-bottom: 2.25rem;
          background: linear-gradient(180deg, var(--slate-50) 0%, var(--white) 100%);
        }
        .about-simple-vm-grid {
          display: grid;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .about-simple-vm-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
          }
        }
        .about-simple-vm-grid article {
          padding: 1.15rem 1.1rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 12px;
          background: #fff;
        }
        .about-simple-vm-grid h2 {
          margin: 0 0 0.45rem;
          font-size: 1.05rem;
          color: var(--purple-700);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .about-simple-vm-grid p {
          margin: 0;
          color: var(--slate-600);
          line-height: 1.6;
          font-size: 0.98rem;
        }

        .about-simple-offices {
          padding-top: 0.5rem;
          padding-bottom: 2rem;
        }
        .about-simple-section-title {
          margin: 0 0 1rem;
          text-align: center;
          font-size: clamp(1.35rem, 3vw, 1.75rem);
          color: var(--slate-900);
        }
        .about-simple-offices-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
        }
        @media (min-width: 768px) {
          .about-simple-offices-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        .about-simple-offices-grid article,
        .about-simple-office-card {
          text-align: center;
          padding: 0.9rem 0.75rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 10px;
          background: #fff;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
        }
        .about-simple-office-card:hover {
          border-color: rgba(31, 93, 150, 0.4);
          box-shadow: 0 8px 20px rgba(15, 39, 71, 0.1);
          transform: translateY(-2px);
          color: inherit;
        }
        .about-simple-offices-grid strong {
          display: block;
          font-size: 1rem;
          color: var(--slate-900);
        }
        .about-simple-offices-grid span {
          display: block;
          margin-top: 0.2rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--slate-500);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .about-simple-office-card:hover strong {
          color: var(--purple-700);
        }

        .about-simple-cta {
          padding-top: 0.5rem;
          padding-bottom: 2.5rem;
        }
      `}</style>
    </>
  );
}
