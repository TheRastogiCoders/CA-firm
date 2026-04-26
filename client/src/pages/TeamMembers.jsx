import { Link } from 'react-router-dom';

const qualifiedStaff = [
  { sno: '1', name: 'CA Ruchi Singh', qualification: 'ACA, B.Com', experience: '3 Years', line: 'Supports engagement execution with focus on review quality and reporting clarity.' },
  { sno: '2', name: 'CA Viraj Agarwal', qualification: 'ACA, B.Com', experience: '3 Years', line: 'Contributes to audit and compliance assignments with structured documentation support.' },
  { sno: '3', name: 'CA Ajit Dev Pandey', qualification: 'ACA, B.Com', experience: '2 Years', line: 'Handles core working papers and assists in timely delivery of professional assignments.' },
  {
    sno: '4',
    name: 'Mr. P M Gupta',
    qualification: 'Diploma in Electrical Engineering, CAIIB (Part I)',
    experience: 'Retired Banker as Chief Manager, UBI in 2013',
    line: 'Brings strong banking operations perspective and credit-process understanding to advisory support.',
  },
  { sno: '5', name: 'Mr. R. K. Pandey', qualification: 'BA, LLB', experience: '26 Years', line: 'Provides legal and compliance-oriented support for documentation and process alignment.' },
  { sno: '6', name: 'CS Apoorva Singh', qualification: 'B.Com (H), ACS', experience: '13 Years', line: 'Supports secretarial and regulatory workstreams with strong governance-focused execution.' },
  { sno: '7', name: 'CS Urmi Chhaparia', qualification: 'B.Com, ACS', experience: '8 Years', line: 'Assists corporate compliance and filing activities with timeline-driven coordination.' },
  { sno: '8', name: 'Miss Shreya Pandey', qualification: 'B.Com, Qualified Company Secretary', experience: 'Newly Qualified', line: 'Contributes to compliance workflows with updated regulatory knowledge and diligence.' },
];

const semiQualifiedStaff = [
  { sno: '1', name: 'Shruti Khemka', qualification: 'CA Intermediate (Pursuing CA Final)', line: 'Supports documentation and preliminary working schedules for assignment teams.' },
  { sno: '2', name: 'Ritika Khosala', qualification: 'CA Intermediate (Pursuing CA Final)', line: 'Assists in compliance data preparation and file organization across engagements.' },
  { sno: '3', name: 'Jasraj Singh', qualification: 'CA Intermediate (Pursuing CA Final)', line: 'Contributes to audit support activities and checklist-based execution tasks.' },
  { sno: '4', name: 'Shivam Agrwal', qualification: 'CA Intermediate (Pursuing CA Final)', line: 'Works on backend schedules and reconciliation support for team deliverables.' },
  { sno: '5', name: 'Vishesh Misra', qualification: 'CA Intermediate (Pursuing CA Final)', line: 'Provides process support for periodic filings and assignment documentation.' },
  { sno: '6', name: 'Harsh Jaiswal', qualification: 'CA Intermediate (Pursuing CA Final)', line: 'Supports quality checks and structured working-paper updates for execution teams.' },
  { sno: '7', name: 'Nehal Ahmad', qualification: 'CA Intermediate (Pursuing CA Final)', line: 'Assists engagement teams with data collation and compliance task tracking.' },
  { sno: '8', name: 'Vaibhav Jaiswal', qualification: 'CA Intermediate (Pursuing CA Final)', line: 'Contributes to audit and compliance support under supervised workflows.' },
  { sno: '9', name: 'Shreya Gupta', qualification: 'CA Intermediate (Pursuing CA Final)', line: 'Supports assignment coordination and readiness of key records and checklists.' },
  { sno: '10', name: 'Yash Agrawal', qualification: 'CS Executive (Pursuing CS Professional)', line: 'Assists corporate compliance workstreams and secretarial process documentation.' },
  { sno: '11', name: 'Kajal Parikh', qualification: 'CS Executive (Pursuing CS Professional)', line: 'Supports filing activities and regulatory documentation with process discipline.' },
];

export default function TeamMembers() {
  return (
    <>
      <section className="page-hero team-members-hero">
        <div className="container">
          <span className="page-hero-kicker">Team Members</span>
          <h1 className="page-title">Our People</h1>
          <p className="page-subtitle">
            We recruit, train, motivate and retain highly capable and sharp talent who bring quality to their work and deliver the best solutions.
            We nurture our people and turn them into our strongest assets.
          </p>
          <div className="page-hero-actions">
            <Link to="/team" className="btn btn-secondary">View Partners</Link>
            <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
          </div>
        </div>
      </section>

      <section className="section team-members-section">
        <div className="container team-members-container">
          <div className="team-members-block">
            <div className="team-members-head">
              <span className="team-members-kicker">Qualified Staff/Consultants</span>
              <h2>Experienced professionals supporting engagement delivery</h2>
            </div>
            <div className="team-members-cards-grid">
              {qualifiedStaff.map((item) => (
                <article key={`${item.sno}-${item.name}`} className="team-member-card">
                  <span className="team-member-index">{item.sno}</span>
                  <h3 className="team-member-name">{item.name}</h3>
                  <p className="team-member-meta">
                    <strong>Qualification:</strong> {item.qualification}
                  </p>
                  <p className="team-member-meta">
                    <strong>Experience:</strong> {item.experience}
                  </p>
                  <p className="team-member-line">{item.line}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="team-members-block">
            <div className="team-members-head">
              <span className="team-members-kicker">Semi Qualified Staff</span>
              <h2>Emerging professionals under structured mentorship</h2>
            </div>
            <div className="team-members-cards-grid">
              {semiQualifiedStaff.map((item) => (
                <article key={`${item.sno}-${item.name}`} className="team-member-card">
                  <span className="team-member-index">{item.sno}</span>
                  <h3 className="team-member-name">{item.name}</h3>
                  <p className="team-member-meta">
                    <strong>Qualification:</strong> {item.qualification}
                  </p>
                  <p className="team-member-line">{item.line}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="team-members-cta">
            <p>Need support from the right team unit for your requirement?</p>
            <div>
              <Link to="/schedule-consultation" className="btn btn-primary">Schedule Consultation</Link>
              <Link to="/contact" className="btn btn-secondary">Discuss Requirement</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .team-members-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1000px 340px at 50% -120px, rgba(31, 93, 150, 0.2), transparent 64%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 58%, rgba(255, 255, 255, 0.98) 100%);
        }
        .team-members-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .team-members-hero::after { opacity: 0.1; }
        .team-members-section {
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }
        .team-members-container {
          max-width: 1180px;
        }
        .team-members-block + .team-members-block {
          margin-top: 1.35rem;
        }
        .team-members-head {
          text-align: center;
          max-width: 880px;
          margin: 0 auto 0.9rem;
        }
        .team-members-kicker {
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
        .team-members-head h2 {
          margin: 0.64rem 0 0;
          color: var(--slate-900);
          font-size: clamp(1.34rem, 2.7vw, 1.86rem);
        }
        .team-members-cards-grid {
          display: grid;
          gap: 0.9rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 760px) {
          .team-members-cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1100px) {
          .team-members-cards-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .team-member-card {
          position: relative;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          box-shadow: 0 10px 24px rgba(15, 39, 71, 0.08);
          padding: 1rem;
          min-height: 148px;
        }
        .team-member-index {
          position: absolute;
          top: 0.82rem;
          right: 0.86rem;
          width: 26px;
          height: 26px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(31, 93, 150, 0.14);
          color: var(--primary);
          font-size: 0.76rem;
          font-weight: 700;
        }
        .team-member-name {
          margin: 0;
          padding-right: 2rem;
          color: var(--slate-900);
          font-size: 1rem;
          line-height: 1.35;
        }
        .team-member-meta {
          margin: 0.56rem 0 0;
          color: var(--slate-700);
          font-size: 0.88rem;
          line-height: 1.52;
        }
        .team-member-meta strong {
          color: var(--slate-900);
        }
        .team-member-line {
          margin: 0.52rem 0 0;
          color: var(--slate-600);
          font-size: 0.84rem;
          line-height: 1.52;
        }
        .team-members-cta {
          margin-top: 1.1rem;
          border: 1px solid rgba(140, 183, 220, 0.3);
          border-radius: 18px;
          background: linear-gradient(135deg, #0f2747 0%, #173b68 52%, #1f5d96 100%);
          color: #fff;
          padding: 1.7rem 1rem;
          text-align: center;
        }
        .team-members-cta p {
          margin: 0;
          color: rgba(240, 248, 255, 0.92);
          font-size: 1rem;
          line-height: 1.58;
        }
        .team-members-cta div {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .team-members-cta .btn-secondary {
          border-color: rgba(220, 236, 252, 0.48);
          color: #f8fcff;
          background: transparent;
        }
      `}</style>
    </>
  );
}
