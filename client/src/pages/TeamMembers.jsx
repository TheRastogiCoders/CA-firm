import { Link } from 'react-router-dom';
import PageCtaBand from '../components/PageCtaBand';

const qualifiedStaff = [
  { name: 'CA Ruchi Singh', qualification: 'ACA, B.Com', experience: '3 Years' },
  { name: 'CA Viraj Agarwal', qualification: 'ACA, B.Com', experience: '3 Years' },
  { name: 'CA Ajit Dev Pandey', qualification: 'ACA, B.Com', experience: '2 Years' },
  { name: 'Mr. P M Gupta', qualification: 'Diploma in Electrical Engineering, CAIIB (Part I)', experience: 'Retired Banker, UBI' },
  { name: 'Mr. R. K. Pandey', qualification: 'BA, LLB', experience: '26 Years' },
  { name: 'CS Apoorva Singh', qualification: 'B.Com (H), ACS', experience: '13 Years' },
  { name: 'CS Urmi Chhaparia', qualification: 'B.Com, ACS', experience: '8 Years' },
  { name: 'Miss Shreya Pandey', qualification: 'B.Com, Qualified Company Secretary', experience: 'Newly Qualified' },
];

const semiQualifiedStaff = [
  { name: 'Shruti Khemka', qualification: 'CA Intermediate' },
  { name: 'Ritika Khosala', qualification: 'CA Intermediate' },
  { name: 'Jasraj Singh', qualification: 'CA Intermediate' },
  { name: 'Shivam Agrwal', qualification: 'CA Intermediate' },
  { name: 'Vishesh Misra', qualification: 'CA Intermediate' },
  { name: 'Harsh Jaiswal', qualification: 'CA Intermediate' },
  { name: 'Nehal Ahmad', qualification: 'CA Intermediate' },
  { name: 'Vaibhav Jaiswal', qualification: 'CA Intermediate' },
  { name: 'Shreya Gupta', qualification: 'CA Intermediate' },
  { name: 'Yash Agrawal', qualification: 'CS Executive' },
  { name: 'Kajal Parikh', qualification: 'CS Executive' },
];

export default function TeamMembers() {
  return (
    <>
      <section className="page-hero tm-simple-hero">
        <div className="container">
          <span className="page-hero-kicker">Team Members</span>
          <h1 className="page-title">Our People</h1>
          <p className="page-subtitle">
            Qualified and semi-qualified professionals supporting engagement delivery.
          </p>
          <div className="page-hero-actions">
            <Link to="/team" className="btn btn-secondary">
              View Partners
            </Link>
            <Link to="/support-team" className="btn btn-primary">
              Support Team
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section tm-simple-section">
        <div className="container">
          <h2 className="tm-simple-heading">Qualified Staff</h2>
          <div className="tm-simple-grid">
            {qualifiedStaff.map((item) => (
              <article key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.qualification}</p>
                <p>{item.experience}</p>
              </article>
            ))}
          </div>

          <h2 className="tm-simple-heading tm-simple-heading-spaced">Semi-Qualified Staff</h2>
          <div className="tm-simple-grid">
            {semiQualifiedStaff.map((item) => (
              <article key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.qualification}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section tm-simple-cta">
        <div className="container">
          <PageCtaBand
            title="Need the right team for your assignment?"
            description="Tell us your requirement and we will connect you with the right people."
          />
        </div>
      </section>

      <style>{`
        .tm-simple-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .tm-simple-hero .page-subtitle { max-width: 34rem; }
        .tm-simple-hero .page-hero-actions { margin-top: 1.1rem; }

        .tm-simple-section { padding-top: 2.5rem; padding-bottom: 1.5rem; }
        .tm-simple-heading {
          margin: 0 0 1rem;
          font-size: clamp(1.25rem, 2.5vw, 1.5rem);
          color: var(--slate-900);
        }
        .tm-simple-heading-spaced { margin-top: 2rem; }
        .tm-simple-grid {
          display: grid;
          gap: 0.75rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .tm-simple-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          .tm-simple-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .tm-simple-grid article {
          padding: 0.9rem 0.95rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 10px;
          background: #fff;
        }
        .tm-simple-grid h3 {
          margin: 0 0 0.35rem;
          font-size: 0.98rem;
          color: var(--slate-900);
        }
        .tm-simple-grid p {
          margin: 0;
          font-size: 0.86rem;
          color: var(--slate-600);
          line-height: 1.45;
        }
        .tm-simple-grid p + p { margin-top: 0.2rem; }

        .tm-simple-cta { padding-top: 0.5rem; padding-bottom: 2.5rem; }
      `}</style>
    </>
  );
}
