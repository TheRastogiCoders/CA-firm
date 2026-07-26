import PageCtaBand from '../components/PageCtaBand';

const facts = [
  { value: '2003', label: 'Established' },
  { value: '20+', label: 'Years' },
  { value: '4', label: 'Offices' },
  { value: '7', label: 'Partners' },
];

const offices = [
  {
    city: 'VARANASI',
    kind: 'Head Office',
    mapUrl: 'https://tinyurl.com/kz2y9bax',
  },
  {
    city: 'DELHI',
    kind: 'Branch',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=62+Shrestha+Vihar+Vikas+Marg+Extension+Delhi+110092',
  },
  {
    city: 'KOLKATA',
    kind: 'Branch',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Brijdham+Housing+Complex+637+Dakshin+Dari+Road+Kolkata',
  },
  {
    city: 'BOKARO',
    kind: 'Branch',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=C-1+21A+City+Centre+Sector+4+Bokaro+Steel+City',
  },
];

const galleryImages = [
  {
    src: '/images/gallery/team-office-front.jpeg',
    alt: 'Firm team gathered outside the office',
    caption: 'Our Team',
  },
  {
    src: '/images/gallery/team-celebration.jpeg',
    alt: 'Firm team celebration at the office',
    caption: 'Team Celebration',
  },
  {
    src: '/images/gallery/team-independence-day.jpeg',
    alt: 'Firm team Independence Day gathering',
    caption: 'Independence Day',
  },
  {
    src: '/images/gallery/team-flag-ceremony.jpeg',
    alt: 'Firm team at flag ceremony',
    caption: 'Together at Work',
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
            </div>
            <div className="about-simple-media">
              <img
                src="/images/gallery/office-varanasi.png"
                alt="Dwivedi Gupta & Co. head office in Varanasi"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-section about-purpose" aria-labelledby="about-purpose-title">
        <div className="container">
          <div className="about-purpose-panel">
            <p className="about-purpose-eyebrow">Our Purpose</p>
            <h2 id="about-purpose-title" className="about-purpose-title">
              Help businesses stay compliant and grow with clarity
            </h2>
            <p className="about-purpose-lead">
              We exist to give clients practical tax, audit, and advisory support they can trust —
              clear advice, steady execution, and partners who stay accountable through every engagement.
            </p>
            <ul className="about-purpose-pillars">
              <li>
                <strong>Compliance</strong>
                <span>Timely filings and regulatory discipline without unnecessary complexity.</span>
              </li>
              <li>
                <strong>Clarity</strong>
                <span>Plain explanations, defined scope, and decisions you can act on.</span>
              </li>
              <li>
                <strong>Continuity</strong>
                <span>Long-term partnership across offices, seasons, and business stages.</span>
              </li>
            </ul>
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

      <section className="home-section about-gallery" aria-labelledby="about-gallery-title">
        <div className="container">
          <h2 id="about-gallery-title" className="about-simple-section-title">
            Office &amp; Team Moments
          </h2>
          <p className="about-gallery-intro">
            A look at our Varanasi office and the people behind Dwivedi Gupta &amp; Co.
          </p>
          <div className="about-gallery-grid">
            {galleryImages.map((item) => (
              <figure key={item.src} className="about-gallery-item">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section about-simple-cta reveal-always is-revealed">
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

        .about-purpose {
          padding-top: 0.25rem;
          padding-bottom: 2.5rem;
        }
        .about-purpose-panel {
          position: relative;
          overflow: hidden;
          padding: clamp(1.75rem, 4vw, 2.75rem) clamp(1.25rem, 3.5vw, 2.5rem);
          border-radius: 18px;
          border: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(720px 280px at 12% 0%, rgba(110, 162, 208, 0.28), transparent 58%),
            radial-gradient(640px 260px at 100% 100%, rgba(23, 59, 104, 0.18), transparent 55%),
            linear-gradient(145deg, #0f2747 0%, #173b68 48%, #1f5d96 100%);
          color: #f8fbff;
          box-shadow: 0 18px 40px rgba(15, 39, 71, 0.18);
        }
        .about-purpose-panel::before {
          content: '';
          position: absolute;
          inset: 0 auto 0 0;
          width: 5px;
          background: linear-gradient(180deg, #8cb7dc, #4a86bd 50%, #2f6ea8);
        }
        .about-purpose-eyebrow {
          margin: 0 0 0.7rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(226, 236, 248, 0.78);
        }
        .about-purpose-title {
          margin: 0 0 0.85rem;
          max-width: 18ch;
          font-size: clamp(1.55rem, 1.1rem + 1.8vw, 2.35rem);
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.03em;
          color: #ffffff;
        }
        .about-purpose-lead {
          margin: 0;
          max-width: 42rem;
          font-size: clamp(1rem, 0.94rem + 0.3vw, 1.1rem);
          line-height: 1.7;
          color: rgba(236, 244, 253, 0.9);
        }
        .about-purpose-pillars {
          list-style: none;
          margin: 1.6rem 0 0;
          padding: 1.35rem 0 0;
          border-top: 1px solid rgba(191, 219, 254, 0.22);
          display: grid;
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .about-purpose-pillars {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1.35rem;
          }
        }
        .about-purpose-pillars li {
          min-width: 0;
        }
        .about-purpose-pillars strong {
          display: block;
          margin-bottom: 0.35rem;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #dbeafe;
        }
        .about-purpose-pillars span {
          display: block;
          font-size: 0.94rem;
          line-height: 1.55;
          color: rgba(226, 236, 248, 0.82);
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
          letter-spacing: 0.06em;
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

        .about-gallery {
          padding-top: 0.5rem;
          padding-bottom: 2rem;
        }
        .about-gallery-intro {
          margin: -0.35rem auto 1.25rem;
          max-width: 36rem;
          text-align: center;
          font-size: 0.98rem;
          line-height: 1.55;
          color: var(--slate-600);
        }
        .about-gallery-grid {
          display: grid;
          gap: 0.85rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .about-gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .about-gallery-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        .about-gallery-item {
          margin: 0;
          overflow: hidden;
          border-radius: 14px;
          border: 1px solid rgba(148, 163, 184, 0.22);
          background: #fff;
          box-shadow: 0 8px 22px rgba(15, 39, 71, 0.06);
        }
        .about-gallery-item img {
          display: block;
          width: 100%;
          height: 220px;
          object-fit: cover;
          object-position: center;
        }
        .about-gallery-item figcaption {
          padding: 0.7rem 0.9rem;
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--slate-700);
          border-top: 1px solid rgba(148, 163, 184, 0.16);
        }

        .about-simple-cta {
          padding-top: 1rem;
          padding-bottom: 2.5rem;
        }
        .about-simple-cta .page-cta-band {
          margin-top: 0;
        }
      `}</style>
    </>
  );
}
