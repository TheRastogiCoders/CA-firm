import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMailtoHref } from '../data/contactInfo';
import { partners } from '../data/partnersData';
import PageCtaBand from '../components/PageCtaBand';

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
          <div>
            <h2 id="modal-title">{member.name}</h2>
            <p>{member.role}{member.branch ? ` · ${member.branch}` : ''}</p>
          </div>
        </div>
        <div className="team-modal-body">
          <p><strong>ICAI:</strong> {member.icaiMembershipNo}</p>
          <p><strong>Qualifications:</strong> {member.qualifications}</p>
          <p><strong>Specialization:</strong> {member.specialization}</p>
          <p><strong>Experience:</strong> {member.experience}</p>
          <p className="team-modal-bio">{member.bio}</p>
          <div className="team-modal-links">
            <a href={getMailtoHref(member.email)}>{member.email}</a>
            <a href={`tel:${member.phone.replace(/\s/g, '')}`}>{member.phone}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (!selectedMember) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedMember(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedMember]);

  return (
    <>
      <section className="page-hero team-simple-hero">
        <div className="container">
          <span className="page-hero-kicker">Team</span>
          <h1 className="page-title">Our Partners</h1>
          <p className="page-subtitle">
            Seven partners leading tax, audit, compliance, and advisory across four offices.
          </p>
          <div className="page-hero-actions">
            <Link to="/team-members" className="btn btn-secondary">
              Team Members
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section team-simple-list">
        <div className="container">
          <div className="team-simple-grid">
            {partners.map((member) => (
              <article key={member.icaiMembershipNo} className="team-simple-card">
                <div className="team-simple-avatar">{member.initials}</div>
                <h2>{member.name}</h2>
                <p className="team-simple-role">{member.role}</p>
                {member.branch && <p className="team-simple-branch">{member.branch}</p>}
                <p className="team-simple-meta">{member.specialization}</p>
                <p className="team-simple-meta">{member.experience} · ICAI {member.icaiMembershipNo}</p>
                <button type="button" onClick={() => setSelectedMember(member)}>
                  View profile
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section team-simple-cta">
        <div className="container">
          <PageCtaBand
            title="Want to work with our team?"
            description="Reach out for careers or client engagements."
            primaryLabel="Contact Us"
            primaryTo="/contact"
            secondaryLabel="Careers"
            secondaryTo="/careers"
          />
        </div>
      </section>

      {selectedMember && (
        <MemberDetailModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}

      <style>{`
        .team-simple-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .team-simple-hero .page-subtitle { max-width: 36rem; }
        .team-simple-hero .page-hero-actions { margin-top: 1.1rem; }

        .team-simple-list { padding-top: 2.5rem; padding-bottom: 1.5rem; }
        .team-simple-grid {
          display: grid;
          gap: 0.9rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .team-simple-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          .team-simple-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .team-simple-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1.1rem 1rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 8px 22px rgba(15, 39, 71, 0.06);
        }
        .team-simple-avatar {
          width: 48px;
          height: 48px;
          margin-bottom: 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--purple-600), var(--blue-600));
          color: #fff;
          font-size: 0.85rem;
          font-weight: 700;
        }
        .team-simple-card h2 {
          margin: 0 0 0.25rem;
          font-size: 1.02rem;
          color: var(--slate-900);
          line-height: 1.3;
        }
        .team-simple-role {
          margin: 0;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--purple-700);
        }
        .team-simple-branch {
          margin: 0.15rem 0 0;
          font-size: 0.78rem;
          color: var(--slate-500);
        }
        .team-simple-meta {
          margin: 0.45rem 0 0;
          font-size: 0.86rem;
          color: var(--slate-600);
          line-height: 1.45;
        }
        .team-simple-card button {
          margin-top: 0.85rem;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          border: 1px solid rgba(31, 93, 150, 0.28);
          background: rgba(31, 93, 150, 0.08);
          color: var(--purple-700);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
        }
        .team-simple-card button:hover {
          background: rgba(31, 93, 150, 0.14);
        }

        .team-simple-cta { padding-top: 0.5rem; padding-bottom: 2.5rem; }

        .team-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
          background: rgba(15, 23, 42, 0.55);
        }
        .team-modal {
          position: relative;
          width: 100%;
          max-width: 560px;
          max-height: 88vh;
          overflow: auto;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        .team-modal-close {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          width: 34px;
          height: 34px;
          border: none;
          border-radius: 8px;
          background: var(--slate-100);
          color: var(--slate-600);
          font-size: 1.35rem;
          cursor: pointer;
        }
        .team-modal-header {
          display: flex;
          gap: 0.85rem;
          align-items: center;
          padding: 1.25rem 1.25rem 1rem;
          border-bottom: 1px solid var(--border);
          background: var(--slate-50);
        }
        .team-modal-avatar {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--purple-600), var(--blue-600));
          color: #fff;
          font-weight: 700;
        }
        .team-modal-header h2 {
          margin: 0 0 0.2rem;
          font-size: 1.1rem;
          color: var(--slate-900);
        }
        .team-modal-header p {
          margin: 0;
          font-size: 0.84rem;
          color: var(--slate-600);
        }
        .team-modal-body {
          padding: 1.1rem 1.25rem 1.35rem;
        }
        .team-modal-body p {
          margin: 0 0 0.55rem;
          font-size: 0.92rem;
          color: var(--slate-700);
          line-height: 1.5;
        }
        .team-modal-bio {
          margin-top: 0.85rem !important;
          padding-top: 0.85rem;
          border-top: 1px solid var(--border);
          color: var(--slate-600) !important;
          line-height: 1.65 !important;
        }
        .team-modal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.85rem;
        }
        .team-modal-links a {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--purple-700);
          text-decoration: none;
        }
        .team-modal-links a:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}
