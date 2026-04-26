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
  const mainOffice = CONTACT_OFFICES[0];
  const branchOffices = CONTACT_OFFICES.slice(1);
  const getEmbedMapUrl = (address) => `https://www.google.com/maps?q=${encodeURIComponent(address || '')}&output=embed`;

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
      <section className="page-hero contact-page-hero">
        <div className="container">
          <header className="contact-hero-inner">
            <span className="page-hero-kicker contact-eyebrow">Get in Touch</span>
            <h1 className="page-title contact-title">Contact Our CA Experts</h1>
            <p className="page-subtitle contact-intro">
              Whether you need tax advice, audit support, GST compliance, or company formation—our team is here to help. Reach out via the form, email, or phone. We respond to all enquiries within 24–48 hours.
            </p>
            <div className="page-hero-actions contact-hero-actions">
              <Link to="/schedule-consultation" className="btn btn-primary">Schedule Consultation</Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Chat on WhatsApp</a>
            </div>
          </header>
        </div>
      </section>

      <section className="home-section contact-seo-intent" aria-labelledby="contact-seo-title">
        <div className="container">
          <div className="contact-seo-intent-shell">
            <h2 id="contact-seo-title">Contact our Chartered Accountant team for tax, GST, audit, and compliance advisory</h2>
            <p>
              Use this page to connect for immediate compliance support, consultation scheduling, service scoping, and engagement discussions.
              You can also navigate directly to the most relevant service area below.
            </p>
            <div className="contact-seo-intent-links">
              <Link to="/services/tax-compliance">Tax Advisory Contact</Link>
              <Link to="/services/audit-assurance">Audit Support Contact</Link>
              <Link to="/services/gst-advisory">GST Compliance Contact</Link>
              <Link to="/schedule-consultation">Book Consultation Slot</Link>
              <Link to="/services">View All Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main section">
        <div className="container">
          <div className="contact-main-head">
            <span className="contact-main-kicker">Connect With Our Team</span>
            <h2>Choose your preferred way to connect with us</h2>
          </div>
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

              <div className="contact-card contact-card-expect">
                <h2 className="contact-card-title">What to Expect</h2>
                <ul className="contact-expect-list">
                  <li>Response within <strong>24–48 hours</strong> on working days</li>
                  <li><strong>Confidentiality</strong> on all enquiries</li>
                  <li>Support in <strong>Tax, Audit, GST, Company Formation</strong>, and more</li>
                  <li>Option to <strong>schedule a consultation</strong> for detailed discussions</li>
                  <li>Clear checklist of <strong>documents and next steps</strong> after first response</li>
                  <li><strong>Partner-led review</strong> for complex compliance and advisory matters</li>
                  <li>Transparent communication on <strong>timeline and scope</strong> before working on the matter.</li>
                </ul>
                <Link to="/schedule-consultation" className="contact-cta-link">Schedule a Consultation</Link>
              </div>
            </div>

            <div className="contact-form-wrap">
              <div className="contact-form-card">
                <h2 className="contact-form-title">Contact Form</h2>
                <p className="contact-form-desc">Fill in your details and we’ll get back to you as soon as possible.</p>
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

          <div className="contact-balanced-row">
            <div className="contact-card contact-card-main-office">
              <h2 className="contact-card-title">Main Office</h2>
              <p className="contact-card-desc">Primary office for direct advisory, audit, and compliance support.</p>
              <div className="contact-map-office-details">
                <p className="contact-map-office-label">{mainOffice.label}</p>
                <h3 className="contact-map-office-city">{mainOffice.city}</h3>
                <p className="contact-map-office-address">{mainOffice.address}</p>
                <a
                  href={mainOffice.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-office-link"
                >
                  Get directions →
                </a>
              </div>
              <div className="contact-map-embed-wrap">
                <iframe
                  title={`${mainOffice.city} main office map`}
                  src={getEmbedMapUrl(mainOffice.address)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="contact-map-embed contact-map-embed-main"
                />
              </div>

              <div className="contact-main-office-highlights">
                <article className="contact-main-office-highlight">
                  <h4>Visit Timings</h4>
                  <p>Mon-Sat, 10:00 AM - 7:00 PM (by appointment preferred).</p>
                </article>
                <article className="contact-main-office-highlight">
                  <h4>Best For</h4>
                  <p>Detailed consultations, document reviews, and partner meetings.</p>
                </article>
                <article className="contact-main-office-highlight">
                  <h4>Before You Visit</h4>
                  <p>Carry key documents for quicker review and actionable guidance.</p>
                </article>
              </div>
            </div>

            <div className="contact-branch-section">
              <div className="contact-branch-section-head">
                <p className="contact-branch-kicker">Regional Presence</p>
                <h3 className="contact-branch-title">Our Branch Offices</h3>
                <p className="contact-branch-subtitle">Each branch office is listed below with its address and map location.</p>
              </div>
              <div className="contact-branch-grid">
                {branchOffices.map((office) => (
                  <article key={office.city} className="contact-branch-card">
                    <div className="contact-map-office-details">
                      <p className="contact-map-office-label">Branch Office</p>
                      <h4 className="contact-branch-city">{office.city} Office</h4>
                      <p className="contact-map-office-address">{office.address}</p>
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-map-office-link"
                      >
                        Get directions →
                      </a>
                    </div>
                    <div className="contact-map-embed-wrap">
                      <iframe
                        title={`${office.city} branch office map`}
                        src={getEmbedMapUrl(office.address)}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="contact-map-embed contact-map-embed-branch"
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.22);
          background:
            radial-gradient(1100px 360px at 50% -120px, rgba(31, 93, 150, 0.24), transparent 64%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(232, 241, 252, 0.92) 56%, rgba(255, 255, 255, 0.98) 100%);
        }
        .contact-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .contact-page-hero::after {
          opacity: 0.12;
          filter: grayscale(8%) saturate(95%);
        }
        .contact-page-hero .container { max-width: 1220px; }
        .contact-hero-inner {
          text-align: center;
          max-width: 980px;
          margin: 0 auto;
        }
        .contact-title { max-width: 920px; }
        .contact-intro { max-width: 880px; }
        .contact-hero-actions { margin-top: 1.25rem; }
        .contact-seo-intent {
          padding-top: 2rem;
          padding-bottom: 0.9rem;
        }
        .contact-seo-intent-shell {
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 14px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          box-shadow: 0 10px 24px rgba(15, 39, 71, 0.06);
          padding: 1rem;
        }
        .contact-seo-intent-shell h2 {
          margin: 0;
          color: var(--slate-900);
          font-size: clamp(1.16rem, 2.3vw, 1.48rem);
          line-height: 1.35;
        }
        .contact-seo-intent-shell p {
          margin: 0.58rem 0 0;
          color: var(--slate-600);
          font-size: 0.93rem;
          line-height: 1.62;
        }
        .contact-seo-intent-links {
          margin-top: 0.74rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .contact-seo-intent-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.4rem 0.68rem;
          border-radius: 999px;
          border: 1px solid rgba(31, 93, 150, 0.28);
          background: rgba(31, 93, 150, 0.08);
          color: var(--primary);
          font-size: 0.79rem;
          font-weight: 600;
          line-height: 1.3;
        }
        .contact-seo-intent-links a:hover {
          color: #173b68;
          border-color: rgba(31, 93, 150, 0.45);
          background: rgba(31, 93, 150, 0.12);
        }

        .contact-main {
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }
        .contact-main .container { padding: 0 1rem; }
        @media (min-width: 768px) { .contact-main .container { padding: 0 1.5rem; } }
        .contact-main-head {
          text-align: center;
          max-width: 860px;
          margin: 0 auto 1.4rem;
        }
        .contact-main-kicker {
          display: inline-flex;
          padding: 0.34rem 0.78rem;
          border-radius: 999px;
          border: 1px solid rgba(140, 183, 220, 0.34);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(240, 247, 255, 0.88));
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--purple-700);
          margin-bottom: 0.55rem;
        }
        .contact-main-head h2 {
          margin: 0;
          font-size: clamp(1.7rem, 4vw, 2.45rem);
          line-height: 1.16;
          letter-spacing: -0.025em;
          color: var(--slate-900);
        }
        .contact-grid {
          display: grid;
          gap: 1.4rem;
        }
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr;
            gap: 1.5rem;
            align-items: start;
          }
        }

        .contact-sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
        .contact-card {
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 16px;
          padding: 1.5rem 1.25rem;
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.06);
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .contact-card:hover {
          box-shadow: 0 14px 32px rgba(15, 39, 71, 0.1);
          border-color: rgba(31, 93, 150, 0.28);
        }
        .contact-card-main-office {
          display: flex;
          flex-direction: column;
        }
        .contact-card-main-office .contact-card-title,
        .contact-card-main-office .contact-card-desc {
          text-align: center;
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
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 48px;
          padding: 0.78rem 1rem;
          margin-top: 0.2rem;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #0f2747 0%, #173b68 52%, #1f5d96 100%);
          border: 1px solid rgba(15, 39, 71, 0.45);
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 8px 18px rgba(15, 23, 42, 0.24);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .contact-cta-link:hover {
          color: #ffffff;
          border-color: rgba(23, 59, 104, 0.62);
          box-shadow: 0 12px 22px rgba(15, 23, 42, 0.3);
          transform: translateY(-1px);
        }

        .contact-form-wrap { min-width: 0; }
        .contact-form-card {
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 18px;
          padding: 2rem 1.5rem;
          box-shadow: 0 12px 30px rgba(15, 39, 71, 0.08), 0 1px 3px rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .contact-form-card:hover {
          box-shadow: 0 16px 36px rgba(15, 39, 71, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);
          border-color: rgba(31, 93, 150, 0.28);
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
          box-shadow: 0 0 0 3px rgba(31, 79, 134, 0.14);
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
          box-shadow: 0 4px 14px rgba(31, 79, 134, 0.34);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-submit:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(31, 79, 134, 0.42);
        }
        .contact-submit:active:not(:disabled) { transform: translateY(0); }
        .contact-submit:disabled { opacity: 0.8; cursor: not-allowed; }
        .contact-map-card {
          margin-top: 1rem;
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 18px;
          padding: 1.2rem 1rem;
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.06);
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .contact-balanced-row {
          display: block;
          margin-top: 0.9rem;
        }
        .contact-balanced-row .contact-card-main-office {
          margin-top: 0;
          min-width: 0;
          width: 100%;
          max-width: 100%;
          padding: 1.6rem 1.4rem;
        }
        .contact-support-grid {
          display: grid;
          gap: 0.75rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .contact-support-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .contact-support-item {
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 12px;
          background: #ffffff;
          padding: 0.85rem 0.8rem;
        }
        .contact-support-item h3 {
          margin: 0;
          color: var(--slate-900);
          font-size: 0.96rem;
          line-height: 1.3;
        }
        .contact-support-item p {
          margin: 0.35rem 0 0;
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.56;
        }
        .contact-support-actions {
          margin-top: auto;
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .contact-support-actions .btn {
          min-width: 170px;
        }
        .contact-map-office-details {
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 12px;
          background: #fff;
          padding: 0.9rem;
        }
        .contact-map-office-label {
          margin: 0;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--purple-700);
        }
        .contact-map-office-city {
          margin: 0.3rem 0 0;
          color: var(--slate-900);
          font-size: 1.1rem;
        }
        .contact-map-office-address {
          margin: 0.25rem 0 0;
          color: var(--slate-700);
          line-height: 1.5;
        }
        .contact-map-office-link {
          margin-top: 0.65rem;
          display: inline-flex;
          text-decoration: none;
          color: var(--purple-700);
          font-weight: 600;
          font-size: 0.88rem;
        }
        .contact-map-embed-wrap {
          margin-top: 0.8rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 12px;
          overflow: hidden;
          background: #eef4fb;
        }
        .contact-map-embed {
          display: block;
          width: 100%;
          height: 320px;
          border: 0;
        }
        .contact-map-embed-branch {
          height: 250px;
        }
        .contact-map-embed-main {
          height: 280px;
        }
        .contact-main-office-highlights {
          margin-top: 0.85rem;
          display: grid;
          gap: 0.65rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .contact-main-office-highlights {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .contact-main-office-highlight {
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 10px;
          background: #ffffff;
          padding: 0.72rem;
        }
        .contact-main-office-highlight h4 {
          margin: 0;
          font-size: 0.9rem;
          color: var(--slate-900);
        }
        .contact-main-office-highlight p {
          margin: 0.3rem 0 0;
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .contact-branch-section {
          margin-top: 1rem;
          border: 1px solid rgba(148, 163, 184, 0.24);
          border-radius: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          padding: 1rem 0.9rem;
          box-shadow: 0 10px 24px rgba(15, 39, 71, 0.05);
        }
        .contact-branch-section-head {
          margin-bottom: 1.15rem;
          text-align: center;
        }
        .contact-branch-kicker {
          margin: 0;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--purple-700);
        }
        .contact-branch-title {
          margin: 0.22rem 0 0;
          font-size: 1.22rem;
          font-weight: 700;
          color: var(--slate-900);
          letter-spacing: -0.01em;
        }
        .contact-branch-subtitle {
          margin: 0.45rem auto 0;
          color: var(--text-muted);
          font-size: 0.92rem;
          font-weight: 600;
          line-height: 1.5;
          max-width: 640px;
        }
        .contact-branch-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 1024px) {
          .contact-branch-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .contact-branch-card {
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 14px;
          background: #ffffff;
          padding: 0.62rem;
          box-shadow: 0 6px 16px rgba(15, 39, 71, 0.04);
          display: grid;
          gap: 0.62rem;
        }
        .contact-branch-city {
          margin: 0.28rem 0 0;
          color: var(--slate-900);
          font-size: 1rem;
        }
        .contact-branch-card .contact-map-office-details {
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 12px;
          background: linear-gradient(180deg, #ffffff 0%, #f9fcff 100%);
          padding: 0.8rem;
          box-shadow: none;
        }
        .contact-branch-card .contact-map-embed-wrap {
          margin-top: 0;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(15, 39, 71, 0.05);
        }
        .contact-map-embed-branch {
          height: 180px;
        }
      `}</style>
    </>
  );
}
