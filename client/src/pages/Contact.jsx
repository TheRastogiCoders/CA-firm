import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiUrl } from '../config';
import {
  CONTACT_EMAIL,
  getMailtoHref,
  CONTACT_LANDLINE,
  CONTACT_LANDLINE_RAW,
  CONTACT_MOBILE_DISPLAY,
} from '../data/contactInfo';

const FIRM_KEYWORDS = ['Tax', 'Assurance', 'Finance', 'Advisory'];

const SUBJECT_OPTIONS = [
  'General Enquiry',
  'Careers',
  'Tax',
  'Audit',
  'GST',
  'Company Formation',
  'Compliance',
  'Other',
];

const OFFICES = [
  {
    city: 'VARANASI',
    kind: 'Head Office',
    address: 'S-8/108-B-3-A Prashantpuri, M.A Road, Varanasi – 221002',
    mapUrl: 'https://tinyurl.com/kz2y9bax',
  },
  {
    city: 'DELHI',
    kind: 'Branch',
    address: '62, Shrestha Vihar, Vikas Marg Extension, Delhi – 110092',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=62+Shrestha+Vihar+Vikas+Marg+Extension+Delhi+110092',
  },
  {
    city: 'KOLKATA',
    kind: 'Branch',
    address: 'Brijdham Housing Complex, 637 Dakshin Dari Road, Kolkata',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Brijdham+Housing+Complex+637+Dakshin+Dari+Road+Kolkata',
  },
  {
    city: 'BOKARO',
    kind: 'Branch',
    address: 'C-1, 21A, 2nd Floor, City Centre, Sector-4, Bokaro Steel City',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=C-1+21A+City+Centre+Sector+4+Bokaro+Steel+City',
  },
];

function buildInitialForm(searchParams) {
  const subjectParam = searchParams.get('subject') || '';
  const role = searchParams.get('role') || '';
  const subject = SUBJECT_OPTIONS.includes(subjectParam)
    ? subjectParam
    : role
      ? 'Careers'
      : 'General Enquiry';

  return {
    name: '',
    email: '',
    phone: '',
    subject,
    message:
      subject === 'Careers' && role
        ? `I would like to apply for the ${role} role.\n\n`
        : '',
  };
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const formKey = useMemo(
    () => `${searchParams.get('subject') || ''}|${searchParams.get('role') || ''}`,
    [searchParams]
  );

  const [form, setForm] = useState(() => buildInitialForm(searchParams));
  const [status, setStatus] = useState({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setForm(buildInitialForm(searchParams));
    setStatus({ type: null, message: '' });
  }, [formKey, searchParams]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: '' });
    try {
      const res = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({
          type: 'success',
          message: data.message || 'Thank you. We will get back to you within 24–48 hours.',
        });
        setForm({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Unable to send. Please check your connection and try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-hero contact-simple-hero">
        <div className="container">
          <span className="page-hero-kicker">Contact</span>
          <h1 className="page-title">Talk to our Chartered Accountants</h1>
          <p className="contact-simple-keywords" aria-label="Services">
            {FIRM_KEYWORDS.join(' · ')}
          </p>
        </div>
      </section>

      <section className="home-section contact-simple-main">
        <div className="container">
          <div className="contact-simple-grid">
            <div className="contact-simple-details">
              <div className="contact-simple-media">
                <img
                  src="/images/gallery/office-varanasi.png"
                  alt="Dwivedi Gupta & Co. head office in Varanasi"
                  loading="lazy"
                />
              </div>
              <div className="contact-simple-details-body">
                <h2>Reach Us</h2>
                <ul>
                  <li>
                    <span>Email</span>
                    <a href={getMailtoHref(CONTACT_EMAIL)}>{CONTACT_EMAIL}</a>
                  </li>
                  <li>
                    <span>Landline</span>
                    <a href={`tel:${CONTACT_LANDLINE_RAW}`}>{CONTACT_LANDLINE}</a>
                  </li>
                </ul>
                <p className="contact-simple-note">
                  Response within 24–48 hours on working days.
                </p>
              </div>
            </div>

            <div className="contact-simple-form-card">
              <h2>Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Name *
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </label>
                <label>
                  Email *
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </label>
                <label>
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={CONTACT_MOBILE_DISPLAY}
                  />
                </label>
                <label>
                  Subject
                  <select name="subject" value={form.subject} onChange={handleChange}>
                    {SUBJECT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Message *
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="How can we help?"
                  />
                </label>
                {status.message && (
                  <p className={`contact-simple-status contact-simple-status--${status.type}`}>
                    {status.message}
                  </p>
                )}
                <button type="submit" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          <div className="contact-simple-offices">
            <h2>Our Offices</h2>
            <div className="contact-simple-offices-grid">
              {OFFICES.map((office) => (
                <article key={office.city}>
                  <strong>{office.city}</strong>
                  <span>{office.kind}</span>
                  <p>{office.address}</p>
                  <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
                    Directions →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-simple-hero {
          padding-top: clamp(4rem, 7vw, 5.5rem);
          padding-bottom: clamp(2.5rem, 5vw, 3.5rem);
          border-bottom: 1px solid rgba(31, 93, 150, 0.18);
          background:
            radial-gradient(900px 300px at 50% -100px, rgba(23, 59, 104, 0.22), transparent 64%),
            linear-gradient(180deg, rgba(236, 244, 253, 0.96) 0%, rgba(243, 249, 255, 0.98) 100%);
        }
        .contact-simple-hero .page-title {
          max-width: 16ch;
        }
        .contact-simple-keywords {
          margin: 1rem 0 0;
          font-size: clamp(0.9rem, 2vw, 1.05rem);
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--purple-700);
          line-height: 1.5;
        }
        .contact-simple-hero .page-hero-actions {
          margin-top: 1.25rem;
        }

        .contact-simple-main {
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
        }
        .contact-simple-grid {
          display: grid;
          gap: 1.5rem;
        }
        @media (min-width: 900px) {
          .contact-simple-grid {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 2rem;
            align-items: start;
          }
        }
        .contact-simple-details,
        .contact-simple-form-card {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.06);
        }
        .contact-simple-form-card {
          padding: 1.25rem 1.15rem;
        }
        .contact-simple-details {
          padding: 0;
          overflow: hidden;
        }
        .contact-simple-media {
          width: 100%;
          aspect-ratio: 16 / 11;
          background: linear-gradient(145deg, rgba(31, 93, 150, 0.1), rgba(110, 162, 208, 0.16));
        }
        .contact-simple-media img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .contact-simple-details-body {
          padding: 1.15rem 1.15rem 1.25rem;
        }
        @media (min-width: 640px) {
          .contact-simple-form-card {
            padding: 1.5rem 1.4rem;
          }
          .contact-simple-details-body {
            padding: 1.35rem 1.4rem 1.4rem;
          }
        }
        .contact-simple-details h2,
        .contact-simple-form-card h2,
        .contact-simple-offices h2 {
          margin: 0 0 0.85rem;
          font-size: 1.25rem;
          color: var(--slate-900);
        }
        .contact-simple-details ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .contact-simple-details li {
          padding: 0.7rem 0;
          border-bottom: 1px solid rgba(148, 163, 184, 0.22);
        }
        .contact-simple-details li:last-of-type {
          border-bottom: none;
        }
        .contact-simple-details li span {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--slate-500);
          margin-bottom: 0.2rem;
        }
        .contact-simple-details a {
          color: var(--purple-700);
          font-size: 0.98rem;
          font-weight: 600;
          text-decoration: none;
          word-break: break-word;
        }
        .contact-simple-details a:hover {
          text-decoration: underline;
        }
        .contact-simple-note {
          margin: 0.85rem 0 0;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(148, 163, 184, 0.22);
          font-size: 0.9rem;
          color: var(--slate-600);
        }

        .contact-simple-form-card form {
          display: grid;
          gap: 0.9rem;
        }
        .contact-simple-form-card label {
          display: grid;
          gap: 0.35rem;
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--slate-700);
        }
        .contact-simple-form-card input,
        .contact-simple-form-card select,
        .contact-simple-form-card textarea {
          width: 100%;
          padding: 0.7rem 0.85rem;
          border: 1px solid var(--border);
          border-radius: 10px;
          font-size: 1rem;
          font-family: var(--font-body);
          color: var(--slate-800);
          background: #fff;
        }
        .contact-simple-form-card input:focus,
        .contact-simple-form-card select:focus,
        .contact-simple-form-card textarea:focus {
          outline: none;
          border-color: var(--purple-500);
          box-shadow: 0 0 0 3px rgba(31, 79, 134, 0.12);
        }
        .contact-simple-form-card textarea {
          resize: vertical;
          min-height: 120px;
        }
        .contact-simple-status {
          margin: 0;
          padding: 0.65rem 0.85rem;
          border-radius: 8px;
          font-size: 0.9rem;
        }
        .contact-simple-status--success {
          background: #d1fae5;
          color: #065f46;
        }
        .contact-simple-status--error {
          background: #fee2e2;
          color: #991b1b;
        }
        .contact-simple-form-card button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0.7rem 1.2rem;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--purple-600), var(--blue-700));
          color: #fff;
          font-size: 0.98rem;
          font-weight: 700;
          cursor: pointer;
        }
        .contact-simple-form-card button:disabled {
          opacity: 0.75;
          cursor: not-allowed;
        }

        .contact-simple-offices {
          margin-top: 2.5rem;
        }
        .contact-simple-offices-grid {
          display: grid;
          gap: 0.75rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .contact-simple-offices-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .contact-simple-offices-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        .contact-simple-offices-grid article {
          padding: 0.95rem 0.9rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 10px;
          background: #fff;
        }
        .contact-simple-offices-grid strong {
          display: block;
          font-size: 1rem;
          letter-spacing: 0.06em;
          color: var(--slate-900);
        }
        .contact-simple-offices-grid span {
          display: block;
          margin-top: 0.15rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--purple-700);
        }
        .contact-simple-offices-grid p {
          margin: 0.45rem 0 0.55rem;
          font-size: 0.86rem;
          color: var(--slate-600);
          line-height: 1.45;
        }
        .contact-simple-offices-grid a {
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--purple-700);
          text-decoration: none;
        }
        .contact-simple-offices-grid a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
