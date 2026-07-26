import { useState, useEffect } from 'react';
import { partners } from '../data/partnersData';
import PageCtaBand from '../components/PageCtaBand';

function PartnerAvatar({ member, className }) {
  if (member.photo) {
    return (
      <img
        className={className}
        src={member.photo}
        alt={member.name}
        loading="lazy"
      />
    );
  }
  return <div className={className}>{member.initials}</div>;
}

function MemberDetailModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="team-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="team-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="team-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="team-modal-header">
          <PartnerAvatar member={member} className="team-modal-avatar" />
          <div>
            <h2 id="modal-title">{member.name}</h2>
            <p>{member.role}{member.branch ? ` · ${member.branch}` : ''}</p>
          </div>
        </div>
        <div className="team-modal-body">
          <p><strong>MRN:</strong> {member.icaiMembershipNo}</p>
          <p><strong>Qualifications:</strong> {member.qualifications}</p>
          <p><strong>Specialization:</strong> {member.specialization}</p>
          <p><strong>Experience:</strong> {member.experience}</p>
          <p className="team-modal-bio">{member.bio}</p>
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
        </div>
      </section>

      <section className="home-section team-simple-list">
        <div className="container">
          <div className="team-simple-grid">
            {partners.map((member) => (
              <article key={member.icaiMembershipNo} className="team-simple-card">
                <div className="team-simple-media">
                  <PartnerAvatar member={member} className="team-simple-avatar" />
                </div>
                <div className="team-simple-body">
                  <h2>{member.name}</h2>
                  <p className="team-simple-role">{member.role}</p>
                  <p className="team-simple-branch">{member.branch || '\u00A0'}</p>
                  <p className="team-simple-meta">{member.specialization}</p>
                  <p className="team-simple-meta">{member.experience} · MRN {member.icaiMembershipNo}</p>
                  <button type="button" onClick={() => setSelectedMember(member)}>
                    View profile
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section team-gallery" aria-labelledby="team-gallery-title">
        <div className="container">
          <h2 id="team-gallery-title" className="team-gallery-heading">
            Life at Dwivedi Gupta &amp; Co.
          </h2>
          <p className="team-gallery-intro">
            Our people, celebrations, and moments together across the firm.
          </p>
          <div className="team-gallery-grid">
            {[
              {
                src: '/images/gallery/team-office-front.jpeg',
                alt: 'Firm team gathered outside the office',
              },
              {
                src: '/images/gallery/team-celebration.jpeg',
                alt: 'Firm team celebration at the office',
              },
              {
                src: '/images/gallery/team-independence-day.jpeg',
                alt: 'Firm team Independence Day gathering',
              },
              {
                src: '/images/gallery/team-flag-ceremony.jpeg',
                alt: 'Firm team at flag ceremony',
              },
            ].map((item) => (
              <figure key={item.src} className="team-gallery-item">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section team-simple-cta reveal-always is-revealed">
        <div className="container">
          <PageCtaBand
            title="Want to work with our team?"
            description="Reach out for careers or client engagements."
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

        .team-simple-list { padding-top: 2.5rem; padding-bottom: 1.5rem; }
        .team-simple-grid {
          display: grid;
          gap: 0.9rem;
          grid-template-columns: 1fr;
          align-items: stretch;
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
          align-items: stretch;
          height: 100%;
          min-height: 100%;
          padding: 0;
          overflow: hidden;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 8px 22px rgba(15, 39, 71, 0.06);
        }
        .team-simple-media {
          width: 100%;
          height: 300px;
          flex-shrink: 0;
          background: linear-gradient(145deg, rgba(31, 93, 150, 0.12), rgba(110, 162, 208, 0.18));
        }
        .team-simple-avatar {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 18%;
          border-radius: 0;
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, var(--purple-600), var(--blue-600));
        }
        div.team-simple-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .team-simple-body {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1rem 1.05rem 1.1rem;
          flex: 1;
          min-height: 0;
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
          min-height: 1.15em;
        }
        .team-simple-meta {
          margin: 0.45rem 0 0;
          font-size: 0.86rem;
          color: var(--slate-600);
          line-height: 1.45;
        }
        .team-simple-card button {
          margin-top: auto;
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

        .team-gallery {
          padding-top: 0.5rem;
          padding-bottom: 1.5rem;
        }
        .team-gallery-heading {
          margin: 0 0 0.5rem;
          text-align: center;
          font-size: clamp(1.35rem, 3vw, 1.75rem);
          color: var(--slate-900);
        }
        .team-gallery-intro {
          margin: 0 auto 1.2rem;
          max-width: 34rem;
          text-align: center;
          font-size: 0.96rem;
          color: var(--slate-600);
          line-height: 1.55;
        }
        .team-gallery-grid {
          display: grid;
          gap: 0.85rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .team-gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .team-gallery-item {
          margin: 0;
          overflow: hidden;
          border-radius: 14px;
          border: 1px solid rgba(148, 163, 184, 0.22);
          background: #fff;
          box-shadow: 0 8px 22px rgba(15, 39, 71, 0.06);
        }
        .team-gallery-item img {
          display: block;
          width: 100%;
          height: 240px;
          object-fit: cover;
          object-position: center;
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
          gap: 1rem;
          align-items: center;
          padding: 1.25rem 1.25rem 1rem;
          border-bottom: 1px solid var(--border);
          background: var(--slate-50);
        }
        .team-modal-avatar {
          width: 132px;
          height: 132px;
          flex-shrink: 0;
          display: block;
          border-radius: 14px;
          object-fit: cover;
          object-position: center top;
          background: linear-gradient(135deg, var(--purple-600), var(--blue-600));
          color: #fff;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 6px 16px rgba(15, 39, 71, 0.12);
        }
        div.team-modal-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
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
      `}</style>
    </>
  );
}
