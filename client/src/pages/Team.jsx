import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const partners = [
  {
    name: 'CA. Surendra Kumar Dwivedi',
    role: 'Founder Partner',
    initials: 'SKD',
    qualifications: 'FCA, FAFP, DISA, B.Com, LLB',
    specialization: 'Direct & Indirect Tax, Assurance & Accounting, Project Finance/Debt Syndication',
    experience: '33 Years',
    membership: '074798',
    email: 'surendra.dwivedi@dgc.ind.in',
    phone: '+91 9415203012',
    bio: 'Mr. Surendra Kumar Dwivedi is founder partner of the firm. He is double graduate and a fellow member of Institute of Chartered Accountants of India with over 3 decades of standing in the profession. He holds certificate in Forensic Audit & Fraud Prevention (FAFP), Information System Audit (ISA), and Goods & Service Tax from ICAI. He has wide experience in the field of Direct Tax, Assurance and Accounting & Project Financing. He has served various advisory roles by being member of Auditing Practices and Professional Development Committee of the Institute of Chartered Accountants of India, New Delhi. He has been Chairman of "Varanasi Branch of ICAI"; he is an active member of Managing Committee of Varanasi Branch of Central India Regional Council of Institute of Chartered Accountants of India and served at various posts. Apart from academic attributes, he has in depth practicing excellence in field of Project Funding & Consultancy. Under his able guidance DGC has achieved heights and is one of recognized reputed firm, having client base pan India. He is actively engaged in financial planning and project funding and has to his credit a portfolio of more than 3000.00 crores being executed under his guidance.',
  },
  {
    name: 'CA. Vivek Anand Mohan',
    role: 'Partner',
    initials: 'VAM',
    qualifications: 'FCA, B.S.C., LLB, DISA(ICAI), DIM, CCCAB',
    specialization: 'Assurance & Accounting',
    experience: '18 Years',
    membership: '407188',
    email: 'vivek.gupta@dgc.ind.in',
    phone: '+91 9415804906',
    bio: 'Mr. Vivek Anand Mohan joined the firm in 2007. Owing to his multi-faceted talent he soon joined the firm as Partner, and has rich experience of auditing manufacturing entities. He leads the auditing & assurance wing of the firm.',
  },
  {
    name: 'CA. Aditi Kapoor',
    role: 'Partner',
    initials: 'AK',
    qualifications: 'FCA, DISA (ICAI), DIRM (ICAI), B.Com (H)',
    specialization: 'Financial Advisory, Technical & Economic Viability, Treasury, Direct Tax, Government Schemes',
    experience: '14 Years',
    membership: '413477',
    email: 'aditi.kapoor@dgc.ind.in',
    phone: '+91 9455113033',
    branch: 'In Charge: Delhi Branch',
    bio: 'Ms. Aditi Kapoor partner is associated with firm for more than a decade now; prior to joining firm she handled post of Forex Manager in a Limited Company based in Mumbai. She looks after the financial advisory wing of the firm besides assurance, audit and taxation matters. She is a confident deliverer, with remarkable drafting and communication skills. She has to her credit certificates of excellence throughout her academics carrier. She is a regular faculty for courses conducted by ICAI for grooming students.',
  },
  {
    name: 'CA. Sharad Kumar Jaiswal',
    role: 'Partner',
    initials: 'SKJ',
    qualifications: 'FCA, B.Com',
    specialization: 'Audit, Project financing, Statutory Compliance',
    experience: '16 Years',
    membership: '410050',
    email: 'sharad.jaiswal@dgc.ind.in',
    phone: '+91 9026281688',
    bio: 'Mr. Sharad Kumar Jaiswal, is a sparking talent who has spent initial 10 years of his carrier in various industries and then switched to practice in the year 2021. Owing to his industrial service he has knack of understanding business processes very closely and give tailor made ideas for effective management & business operations.',
  },
  {
    name: 'CA. Shweta Bharuka',
    role: 'Partner',
    initials: 'SB',
    qualifications: 'ACA, B. Com (H)',
    specialization: 'Direct Tax, Assurance & Accounting',
    experience: '9 Years',
    membership: '308394',
    email: 'swetabharuka@gmail.com',
    phone: '+91 9831381135',
    branch: 'In-charge: Kolkata Branch',
    bio: 'Mrs. Shweta Bharuka has done her schooling from Mahadevi Birla Girls Higher Secondary School (Kolkata). She is a Commerce Graduate from Calcutta University. She is an associate member of Institute of Chartered Accountants of India. She is presently looking after the Kolkata based operations of the firm.',
  },
  {
    name: 'CA. Neha Nathani',
    role: 'Partner',
    initials: 'NN',
    qualifications: 'FCA and B.Com (H)',
    specialization: 'Taxation and Auditing',
    experience: '11 Years',
    membership: '425953',
    email: 'neha.nathani@dgc.ind.in',
    phone: '+91 9918115575',
    bio: 'She is a fellow member of Institute of Chartered Accountant of India, qualified as Chartered Accountant in 2014 and since then has been engaged in practice. She has more than 10 years\' of rich experience in the field of accounting, auditing and finance in relating to private/public company, manufacturing industries and banking sector.',
  },
  {
    name: 'CA. Breesket Singh',
    role: 'Partner',
    initials: 'BS',
    qualifications: 'FCA and B.Com (H)',
    specialization: 'Taxation and Auditing',
    experience: '21 Years',
    membership: '062437',
    email: 'breesket@gmail.com',
    phone: '+91 9430309193',
    branch: 'In Charge: Bokaro Branch',
    bio: 'A very senior member of Institute, and has rich experience of auditing of trading, manufacturing entities. He leads the auditing & assurance wing of the firm with finance in relating to private/public Company, manufacturing industries, government audit of C&AG and banking sector etc.',
  },
];

function MemberDetailModal({ member, onClose }) {
  if (!member) return null;
  return (
    <div className="team-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="team-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="team-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="team-modal-header">
          <div className="team-modal-avatar">{member.initials}</div>
          <div className="team-modal-heading">
            <h2 id="modal-title" className="team-modal-name">{member.name}</h2>
            <p className="team-modal-role">{member.role}</p>
            {member.branch && <p className="team-modal-branch">{member.branch}</p>}
          </div>
        </div>
        <div className="team-modal-body">
          <div className="team-modal-grid">
            <div className="team-modal-item">
              <span className="team-modal-label">Qualifications</span>
              <span className="team-modal-value">{member.qualifications}</span>
            </div>
            <div className="team-modal-item">
              <span className="team-modal-label">Specialization</span>
              <span className="team-modal-value">{member.specialization}</span>
            </div>
            <div className="team-modal-item">
              <span className="team-modal-label">Experience</span>
              <span className="team-modal-value">{member.experience} post-qualification</span>
            </div>
            <div className="team-modal-item">
              <span className="team-modal-label">ICAI Membership</span>
              <span className="team-modal-value">{member.membership}</span>
            </div>
          </div>
          <div className="team-modal-bio-section">
            <h3 className="team-modal-bio-title">Profile</h3>
            <p className="team-modal-bio">{member.bio}</p>
          </div>
          <div className="team-modal-contact">
            <h3 className="team-modal-contact-title">Contact</h3>
            <div className="team-modal-links">
              <a href={`mailto:${member.email}`} className="team-modal-link team-modal-email">
                {member.email}
              </a>
              <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="team-modal-link team-modal-phone">
                {member.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const closeModal = () => setSelectedMember(null);

  useEffect(() => {
    if (!selectedMember) return;
    const onKeyDown = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedMember]);

  return (
    <>
      <section className="page-hero team-hero">
        <div className="container">
          <h1 className="page-title">Our Team</h1>
          <p className="page-subtitle">
            Under the able direction of 7 partners and other qualified CA staff, DGC's team is uniquely positioned to provide you quality opinions and services.
          </p>
          <p className="team-hero-extra">
            Click <strong>View more</strong> on any profile to see full qualifications, experience, and contact details.
          </p>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="team-grid">
            {partners.map((member, i) => (
              <article key={i} className="team-card">
                <div className="team-card-inner">
                  <div className="team-avatar">{member.initials}</div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-preview">
                    {member.qualifications.split(',')[0].trim()}
                    {member.qualifications.includes(',') && ' …'}
                    {' · '}
                    {member.experience} exp
                  </p>
                  <p className="team-spec-preview">{member.specialization}</p>
                  <button
                    type="button"
                    className="team-view-more"
                    onClick={() => setSelectedMember(member)}
                  >
                    View more
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="page-cta">
            <p>We recruit, train, motivate and retain highly capable talent who deliver the best solutions. Want to work with us?</p>
            <div className="page-cta-btns">
              <Link to="/careers" className="btn btn-secondary">Careers</Link>
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {selectedMember && (
        <MemberDetailModal
          member={selectedMember}
          onClose={closeModal}
        />
      )}

      <style>{`
        .team-hero .container { max-width: 920px; }
        .team-hero-extra {
          margin-top: 1rem;
          font-size: 0.9375rem;
          color: var(--slate-600);
        }
        .team-hero-extra strong { color: var(--purple-600); }

        .team-section { padding-top: 2.5rem; padding-bottom: 3rem; }
        .team-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .team-grid { grid-template-columns: repeat(3, 1fr); gap: 1.75rem; }
        }

        .team-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.75rem;
          transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
        }
        .team-card:hover {
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.1);
          border-color: var(--purple-400);
          transform: translateY(-2px);
        }
        .team-card-inner { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .team-avatar {
          width: 72px;
          height: 72px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--purple-600), var(--blue-600));
          color: white;
          border-radius: 50%;
          font-size: 1.25rem;
          font-weight: 700;
          font-family: var(--font-display);
        }
        .team-name {
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--slate-800);
          margin-bottom: 0.25rem;
          line-height: 1.3;
        }
        .team-role {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--purple-600);
          margin-bottom: 0.5rem;
        }
        .team-preview {
          font-size: 0.8125rem;
          color: var(--slate-600);
          margin-bottom: 0.25rem;
        }
        .team-spec-preview {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .team-view-more {
          margin-top: auto;
          padding: 0.5rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--purple-600);
          background: rgba(124, 58, 237, 0.08);
          border: 1px solid var(--purple-300);
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .team-view-more:hover {
          background: var(--purple-600);
          color: white;
          border-color: var(--purple-600);
        }

        /* Modal */
        .team-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1.5rem;
          animation: teamModalFadeIn 0.2s ease;
        }
        @keyframes teamModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .team-modal {
          position: relative;
          background: var(--white);
          border-radius: 16px;
          max-width: 560px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: teamModalSlide 0.25s ease;
        }
        @keyframes teamModalSlide {
          from { opacity: 0; transform: scale(0.96) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .team-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          line-height: 1;
          color: var(--slate-500);
          background: var(--slate-100);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          z-index: 2;
          transition: background 0.2s, color 0.2s;
        }
        .team-modal-close:hover {
          background: var(--slate-200);
          color: var(--slate-800);
        }
        .team-modal-header {
          padding: 2rem 2rem 1.5rem;
          background: linear-gradient(135deg, var(--slate-50) 0%, rgba(224,231,255,0.3) 100%);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .team-modal-avatar {
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--purple-600), var(--blue-600));
          color: white;
          border-radius: 50%;
          font-size: 1.125rem;
          font-weight: 700;
          font-family: var(--font-display);
        }
        .team-modal-heading { min-width: 0; }
        .team-modal-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--slate-900);
          margin: 0 0 0.25rem 0;
          line-height: 1.3;
        }
        .team-modal-role {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--purple-600);
          margin: 0 0 0.25rem 0;
        }
        .team-modal-branch {
          font-size: 0.8125rem;
          color: var(--slate-600);
          margin: 0;
        }
        .team-modal-body {
          padding: 1.5rem 2rem 2rem;
          overflow-y: auto;
        }
        .team-modal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem 1.5rem;
          margin-bottom: 1.5rem;
        }
        .team-modal-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .team-modal-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--slate-500);
        }
        .team-modal-value {
          font-size: 0.875rem;
          color: var(--slate-800);
          line-height: 1.4;
        }
        .team-modal-bio-section { margin-bottom: 1.5rem; }
        .team-modal-bio-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--slate-800);
          margin: 0 0 0.5rem 0;
        }
        .team-modal-bio {
          font-size: 0.9375rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0;
        }
        .team-modal-contact { padding-top: 1rem; border-top: 1px solid var(--slate-100); }
        .team-modal-contact-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--slate-800);
          margin: 0 0 0.5rem 0;
        }
        .team-modal-links { display: flex; flex-wrap: wrap; gap: 0.75rem; }
        .team-modal-link {
          font-size: 0.875rem;
          color: var(--purple-600);
          font-weight: 500;
          text-decoration: none;
        }
        .team-modal-link:hover { text-decoration: underline; }

        .page-cta {
          margin-top: 3rem;
          text-align: center;
          padding: 2rem;
          background: var(--slate-50);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .page-cta p { margin: 0; color: var(--text-muted); }
        .page-cta-btns { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; }
      `}</style>
    </>
  );
}
