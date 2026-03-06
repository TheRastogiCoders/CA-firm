import { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiUrl } from '../config';

const CONTACT_OFFICES = [
  {
    label: 'Head Office',
    city: 'Varanasi',
    address: 'S-8/108-B-3-A Prashantpuri, M.A Road, Varanasi – 221002',
    description: 'Our flagship office for assurance, tax, and advisory. Visit by appointment.',
    mapUrl: 'https://tinyurl.com/kz2y9bax',
    initial: 'HQ',
  },
  {
    label: 'Branch Office',
    city: 'Delhi',
    address: '62, Shrestha Vihar, Vikas Marg Extension, Delhi – 110092',
    description: 'Serving corporates and institutions in the capital region.',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=62+Shrestha+Vihar+Vikas+Marg+Extension+Delhi+110092',
    initial: 'D',
  },
  {
    label: 'Branch Office',
    city: 'Kolkata',
    address: 'Brijdham Housing Complex, 637 Dakshin Dari Road, 5th Floor Flat-5E, Building No 16-C, Kolkata, West Bengal',
    description: 'Eastern India presence for audit, tax, and compliance.',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Brijdham+Housing+Complex+637+Dakshin+Dari+Road+Kolkata',
    initial: 'K',
  },
  {
    label: 'Branch Office',
    city: 'Bokaro',
    address: 'C-1, 21A, 2nd Floor, City Centre, Sector-4, Bokaro Steel City, Jharkhand',
    description: 'Industry-focused CA services in the region.',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=C-1+21A+City+Centre+Sector+4+Bokaro+Steel+City',
    initial: 'B',
  },
];

const EMAIL_PRIMARY = 'vivek.gupta@dgc.ind.in';
const EMAIL_SECONDARY = 'shikhar.dwivedi@dgc.ind.in';
const PHONE_PRIMARY = '+91 94158 05906';
const PHONE_SECONDARY = '+91 9721227799';
const PHONE_RAW_PRIMARY = '+919415805906';
const PHONE_RAW_SECONDARY = '+919721227799';
const WHATSAPP_URL = `https://wa.me/${PHONE_RAW_PRIMARY.replace(/\D/g, '')}`;

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);

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
        setStatus({ type: 'success', message: data.message || 'Thank you. We will get back to you within 24–48 hours.' });
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
      <section className="contact-hero">
        <div className="container">
          <header className="contact-hero-inner">
            <span className="contact-eyebrow">Get in Touch</span>
            <div className="contact-accent" aria-hidden="true" />
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-intro">
              Whether you need tax advice, audit support, GST compliance, or company formation—our team is here to help. Reach out via the form, email, or phone. We respond to all enquiries within 24–48 hours.
            </p>
          </header>
        </div>
      </section>

      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-sidebar">
              <div className="contact-card contact-card-details">
                <h2 className="contact-card-title">Reach Us Directly</h2>
                <p className="contact-card-desc">For urgent matters or a quick conversation, use the details below.</p>
                <ul className="contact-meta">
                  <li>
                    <span className="contact-meta-label">Email</span>
                    <a href={`mailto:${EMAIL_PRIMARY}`} className="contact-meta-value">{EMAIL_PRIMARY}</a>
                    <br />
                    <a href={`mailto:${EMAIL_SECONDARY}`} className="contact-meta-value">{EMAIL_SECONDARY}</a>
                  </li>
                  <li>
                    <span className="contact-meta-label">Phone</span>
                    <a href={`tel:${PHONE_RAW_PRIMARY}`} className="contact-meta-value">{PHONE_PRIMARY}</a>
                    <br />
                    <a href={`tel:${PHONE_RAW_SECONDARY}`} className="contact-meta-value">{PHONE_SECONDARY}</a>
                  </li>
                  <li>
                    <span className="contact-meta-label">WhatsApp</span>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contact-meta-value">Chat with us</a>
                  </li>
                </ul>
              </div>

              <div className="contact-card contact-card-offices">
                <h2 className="contact-card-title">Our Offices</h2>
                <p className="contact-card-desc">Head office in Varanasi and branch offices across India. Visit by appointment.</p>
                <div className="contact-offices-list">
                  {CONTACT_OFFICES.map((office, i) => (
                    <div key={i} className="contact-office-item">
                      <div className="contact-office-icon">{office.initial}</div>
                      <div className="contact-office-body">
                        <span className="contact-office-label">{office.label}</span>
                        <strong className="contact-office-city">{office.city}</strong>
                        <p className="contact-office-address">{office.address}</p>
                        <a href={office.mapUrl} target="_blank" rel="noopener noreferrer" className="contact-office-link">Get directions →</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-card contact-card-expect">
                <h2 className="contact-card-title">What to Expect</h2>
                <ul className="contact-expect-list">
                  <li>Response within <strong>24–48 hours</strong> on working days</li>
                  <li><strong>Confidentiality</strong> on all enquiries</li>
                  <li>Support in <strong>Tax, Audit, GST, Company Formation</strong>, and more</li>
                  <li>Option to <strong>schedule a consultation</strong> for detailed discussions</li>
                </ul>
                <Link to="/schedule-consultation" className="contact-cta-link">Schedule a Consultation</Link>
              </div>
            </div>

            <div className="contact-form-wrap">
              <div className="contact-form-card">
                <h2 className="contact-form-title">Send a Message</h2>
                <p className="contact-form-desc">Fill in the form below and we’ll get back to you as soon as possible.</p>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <label className="contact-field">
                    <span className="contact-field-label">Name <span className="required">*</span></span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="contact-input"
                    />
                  </label>
                  <label className="contact-field">
                    <span className="contact-field-label">Email <span className="required">*</span></span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="contact-input"
                    />
                  </label>
                  <label className="contact-field">
                    <span className="contact-field-label">Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 94158 05906"
                      className="contact-input"
                    />
                  </label>
                  <label className="contact-field">
                    <span className="contact-field-label">Subject</span>
                    <select name="subject" value={form.subject} onChange={handleChange} className="contact-input contact-select">
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Tax">Tax</option>
                      <option value="Audit">Audit</option>
                      <option value="GST">GST</option>
                      <option value="Company Formation">Company Formation</option>
                      <option value="Compliance">Compliance</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                  <label className="contact-field">
                    <span className="contact-field-label">Message <span className="required">*</span></span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="contact-input contact-textarea"
                    />
                  </label>
                  {status.message && (
                    <p className={`contact-form-status contact-form-status--${status.type}`}>{status.message}</p>
                  )}
                  <button type="submit" className="contact-submit" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-hero {
          position: relative;
          overflow: hidden;
          padding: clamp(3.75rem, 8vw, 5.25rem) 0 clamp(2.5rem, 4vw, 3.25rem);
          border-bottom: 1px solid var(--border);
          background:
            radial-gradient(900px 320px at 50% -140px, rgba(124, 58, 237, 0.22), transparent 68%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 255, 0.9) 100%),
            url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=85'),
            linear-gradient(180deg, var(--slate-50) 0%, var(--white) 100%);
          background-size: auto, auto, cover, auto;
          background-position: center, center, center, center;
        }
        .contact-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(76, 29, 149, 0.08) 1px, transparent 0);
          background-size: 22px 22px;
          opacity: 0.35;
          pointer-events: none;
        }
        .contact-hero .container {
          position: relative;
          z-index: 1;
        }
        .contact-hero-inner {
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }
        .contact-eyebrow {
          display: block;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--purple-600);
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }
        .contact-accent {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--purple-600), var(--blue-600));
          border-radius: 2px;
          margin: 0 auto 1rem;
        }
        .contact-title {
          font-family: var(--font-display);
          font-size: clamp(1.95rem, 4.5vw, 3rem);
          font-weight: 600;
          color: var(--slate-900);
          margin: 0 0 0.8rem 0;
          line-height: 1.16;
          letter-spacing: -0.02em;
        }
        .contact-intro {
          font-size: clamp(1rem, 2.2vw, 1.12rem);
          color: var(--slate-600);
          line-height: 1.7;
          margin: 0;
        }
        @media (max-width: 767px) {
          .contact-hero {
            padding: 3.4rem 0 2.25rem;
          }
          .contact-hero-inner {
            text-align: left;
          }
          .contact-accent {
            margin: 0 0 1rem;
          }
        }

        .contact-main .container { padding: 0 1rem; }
        @media (min-width: 768px) { .contact-main .container { padding: 0 1.5rem; } }
        .contact-grid {
          display: grid;
          gap: 2rem;
        }
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr;
            gap: 2.5rem;
            align-items: start;
          }
        }

        .contact-sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
        .contact-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.5rem 1.25rem;
          box-shadow: 0 2px 12px rgba(30, 41, 59, 0.04);
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .contact-card:hover {
          box-shadow: 0 8px 24px rgba(30, 41, 59, 0.06);
          border-color: var(--slate-200);
        }
        .contact-card-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--slate-800);
          margin: 0 0 0.5rem 0;
        }
        .contact-card-desc {
          font-size: 0.9375rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0 0 1.25rem 0;
        }
        .contact-meta {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .contact-meta li {
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--slate-100);
        }
        .contact-meta li:last-child { border-bottom: none; }
        .contact-meta-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--slate-600);
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        }
        .contact-meta-value {
          font-size: 0.9375rem;
          color: var(--purple-600);
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .contact-meta-value:hover { color: var(--purple-700); }

        .contact-offices-list { display: flex; flex-direction: column; gap: 1rem; }
        .contact-office-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--slate-100);
        }
        .contact-office-item:last-child { border-bottom: none; padding-bottom: 0; }
        .contact-office-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--purple-600), var(--blue-600));
          color: var(--white);
          font-size: 0.875rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-office-body { min-width: 0; }
        .contact-office-label {
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--purple-600);
          text-transform: uppercase;
        }
        .contact-office-city {
          display: block;
          font-size: 1rem;
          color: var(--slate-800);
          margin: 0.15rem 0 0.25rem 0;
        }
        .contact-office-address {
          font-size: 0.8125rem;
          color: var(--text-muted);
          margin: 0 0 0.35rem 0;
        }
        .contact-office-link {
          font-size: 0.8125rem;
          color: var(--blue-600);
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .contact-office-link:hover { color: var(--blue-700); }

        .contact-expect-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.25rem 0;
        }
        .contact-expect-list li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.6rem;
          font-size: 0.9375rem;
          color: var(--slate-700);
          line-height: 1.5;
        }
        .contact-expect-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--purple-500);
        }
        .contact-cta-link {
          display: inline-block;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--purple-600);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .contact-cta-link:hover { color: var(--purple-700); }

        .contact-form-wrap { min-width: 0; }
        .contact-form-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          box-shadow: 0 4px 24px rgba(30, 41, 59, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .contact-form-card:hover {
          box-shadow: 0 12px 40px rgba(30, 41, 59, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
          border-color: var(--slate-200);
        }
        @media (min-width: 640px) { .contact-form-card { padding: 2.5rem 2rem; } }
        .contact-form-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--slate-800);
          margin: 0 0 0.35rem 0;
        }
        .contact-form-desc {
          font-size: 0.9375rem;
          color: var(--text-muted);
          margin: 0 0 1.5rem 0;
          line-height: 1.5;
        }
        .contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .contact-field { display: block; }
        .contact-field-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--slate-700);
          margin-bottom: 0.35rem;
        }
        .contact-field .required { color: var(--purple-600); }
        .contact-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border);
          border-radius: 10px;
          font-size: 1rem;
          font-family: var(--font-body);
          color: var(--slate-800);
          background: var(--white);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-input::placeholder { color: var(--slate-600); opacity: 0.8; }
        .contact-input:focus {
          outline: none;
          border-color: var(--purple-500);
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);
        }
        .contact-select { cursor: pointer; appearance: auto; }
        .contact-textarea { resize: vertical; min-height: 140px; }
        .contact-form-status {
          padding: 0.75rem 1rem;
          border-radius: 10px;
          font-size: 0.9375rem;
          line-height: 1.4;
        }
        .contact-form-status--success {
          background: #D1FAE5;
          color: #065F46;
        }
        .contact-form-status--error {
          background: #FEE2E2;
          color: #991B1B;
        }
        .contact-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.875rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          color: var(--white);
          background: linear-gradient(135deg, var(--purple-600) 0%, var(--purple-700) 50%, var(--blue-600) 100%);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(124, 58, 237, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-submit:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(124, 58, 237, 0.45);
        }
        .contact-submit:active:not(:disabled) { transform: translateY(0); }
        .contact-submit:disabled { opacity: 0.8; cursor: not-allowed; }
      `}</style>
    </>
  );
}
