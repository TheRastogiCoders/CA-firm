import { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiUrl } from '../config';

const serviceOptions = [
  'Tax Planning & Compliance',
  'Audit & Assurance',
  'Accounting & Bookkeeping',
  'GST Advisory',
  'Company Formation & Compliance',
  'Financial Advisory',
  'Other',
];

const timeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  '4:00 PM - 5:00 PM',
];

const whyBookItems = [
  {
    title: 'Free 30-minute discussion',
    desc: 'Understand your needs with no cost or obligation—get clarity before you commit.',
  },
  {
    title: 'Your choice of format',
    desc: 'In-person at our office, phone call, or video call—we adapt to your preference.',
  },
  {
    title: 'Partner-led expertise',
    desc: 'Speak directly with experienced CAs who can advise on tax, audit, and compliance.',
  },
];

export default function ScheduleConsultation() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
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
    const consultationDetails = [
      `Preferred date: ${form.preferredDate || 'Not specified'}`,
      `Preferred time: ${form.preferredTime || 'Not specified'}`,
      `Service of interest: ${form.service || 'Not specified'}`,
      form.message ? `Message: ${form.message}` : '',
    ].filter(Boolean).join('\n');

    try {
      const res = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: 'Schedule Consultation',
          message: consultationDetails,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', message: data.message || 'Your consultation request has been received. We will confirm your slot shortly.' });
        setForm({ name: '', email: '', phone: '', service: '', preferredDate: '', preferredTime: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Unable to submit. Please check your connection and try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <section className="page-hero sched-page-hero" aria-labelledby="schedule-consultation-title">
        <div className="container">
          <span className="page-hero-kicker">Schedule Consultation</span>
          <h1 id="schedule-consultation-title" className="page-title">Book Your Consultation Session</h1>
          <p className="page-subtitle sched-page-subtitle">
            Reserve a focused 30-minute advisory call with our CA team. Share your preferred slot and service area,
            and we will confirm the engagement mode within 1-2 business days.
          </p>
          <div className="page-hero-actions sched-hero-actions">
            <Link to="/services" className="btn btn-primary">Explore Services</Link>
            <Link to="/contact" className="btn btn-secondary">Talk to Our Team</Link>
          </div>
          <div className="sched-hero-trust">
            <span>Free 30-minute discussion</span>
            <span aria-hidden="true">•</span>
            <span>No obligation advisory</span>
            <span aria-hidden="true">•</span>
            <span>Confidential interaction</span>
          </div>
        </div>
      </section>

      <section className="section sched-section">
        <div className="container">
          <div className="sched-section-head">
            <span className="sched-section-kicker">Consultation Desk</span>
            <h2>Share your details and preferred slot</h2>
            <p>Our team reviews each request personally and aligns the consultation format to your requirement.</p>
          </div>
          <div className="sched-layout">
            {/* Left: Why book + trust */}
            <aside className="sched-sidebar">
              <div className="sched-sidebar-card">
                <h2 className="sched-sidebar-title">Why Book a Consultation?</h2>
                <div className="sched-accent-bar" />
                <ul className="sched-why-list">
                  {whyBookItems.map((item, i) => (
                    <li key={i} className="sched-why-item">
                      <span className="sched-why-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h3 className="sched-why-item-title">{item.title}</h3>
                        <p className="sched-why-item-desc">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="sched-note">
                  After you submit, our team will reach out within 1–2 business days to confirm your slot and mode (in-person, phone, or video).
                </p>
                <Link to="/contact" className="sched-link-contact">
                  Prefer to email or call? Contact us here →
                </Link>
              </div>
              <div className="sched-trust">
                <span className="sched-trust-item">Free 30-min</span>
                <span className="sched-trust-dot" aria-hidden="true">·</span>
                <span className="sched-trust-item">No obligation</span>
                <span className="sched-trust-dot" aria-hidden="true">·</span>
                <span className="sched-trust-item">Confidential</span>
              </div>
            </aside>

            {/* Right: Form card */}
            <div className="sched-form-wrap">
              <div className="sched-form-card">
                <h2 className="sched-form-heading">Request your slot</h2>
                <p className="sched-form-subheading">Fill in your details and preferred time. We’ll confirm via email or phone.</p>
                <form className="sched-form" onSubmit={handleSubmit}>
                  <div className="sched-form-group">
                    <label htmlFor="sched-name">
                      Full name <span className="sched-required">*</span>
                    </label>
                    <input
                      id="sched-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="sched-form-row">
                    <div className="sched-form-group">
                      <label htmlFor="sched-email">
                        Email <span className="sched-required">*</span>
                      </label>
                      <input
                        id="sched-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        autoComplete="email"
                      />
                    </div>
                    <div className="sched-form-group">
                      <label htmlFor="sched-phone">
                        Phone <span className="sched-required">*</span>
                      </label>
                      <input
                        id="sched-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 94158 05906"
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                  <div className="sched-form-group">
                    <label htmlFor="sched-service">Service of interest</label>
                    <select
                      id="sched-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sched-form-row">
                    <div className="sched-form-group">
                      <label htmlFor="sched-date">Preferred date</label>
                      <input
                        id="sched-date"
                        type="date"
                        name="preferredDate"
                        value={form.preferredDate}
                        onChange={handleChange}
                        min={today}
                      />
                    </div>
                    <div className="sched-form-group">
                      <label htmlFor="sched-time">Preferred time</label>
                      <select
                        id="sched-time"
                        name="preferredTime"
                        value={form.preferredTime}
                        onChange={handleChange}
                      >
                        <option value="">Select a slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="sched-form-group">
                    <label htmlFor="sched-message">Additional details</label>
                    <textarea
                      id="sched-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe your query or requirements (optional)"
                    />
                  </div>
                  {status.message && (
                    <p className={`sched-form-status sched-form-status-${status.type}`} role="alert">
                      {status.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="btn btn-primary sched-submit"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting…' : 'Request Consultation'}
                  </button>
                  <p className="sched-form-hint">We’ll respond within 1–2 business days. Your information is kept confidential.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .sched-page-hero {
          border-bottom: 1px solid rgba(31, 93, 150, 0.24);
          background:
            radial-gradient(1000px 340px at 50% -120px, rgba(31, 93, 150, 0.2), transparent 62%),
            linear-gradient(180deg, rgba(241, 247, 255, 0.98) 0%, rgba(231, 241, 252, 0.92) 56%, rgba(255, 255, 255, 0.98) 100%);
        }
        .sched-page-hero::before {
          background-image: radial-gradient(circle at 1px 1px, rgba(23, 59, 104, 0.1) 1px, transparent 0);
          opacity: 0.24;
        }
        .sched-page-hero::after {
          opacity: 0.1;
          filter: grayscale(8%) saturate(95%);
        }
        .sched-page-subtitle {
          max-width: 940px;
        }
        .sched-hero-actions {
          justify-content: center;
        }
        .sched-hero-trust {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.84rem;
          color: var(--slate-700);
          font-weight: 600;
        }
        .sched-hero-trust span[aria-hidden='true'] {
          color: rgba(100, 116, 139, 0.6);
        }

        .sched-section {
          padding: 4rem 0 5.5rem;
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
        }
        @media (min-width: 768px) {
          .sched-section { padding: 4.8rem 0 6rem; }
        }
        .sched-section-head {
          text-align: center;
          max-width: 860px;
          margin: 0 auto 2rem;
        }
        .sched-section-kicker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.34rem 0.78rem;
          border-radius: 999px;
          background: rgba(31, 93, 150, 0.12);
          color: var(--primary);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .sched-section-head h2 {
          margin: 0.78rem 0 0;
          font-size: clamp(1.46rem, 2.8vw, 2.04rem);
          color: var(--slate-900);
          line-height: 1.24;
        }
        .sched-section-head p {
          margin: 0.64rem 0 0;
          color: var(--slate-600);
          font-size: 0.98rem;
          line-height: 1.62;
        }
        .sched-layout {
          display: grid;
          gap: 1.6rem;
          align-items: start;
        }
        @media (min-width: 968px) {
          .sched-layout { grid-template-columns: 1fr 1.16fr; gap: 2rem; }
        }

        .sched-sidebar-card {
          background: #fff;
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 18px;
          padding: 2rem 1.5rem;
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.08);
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .sched-sidebar-card:hover {
          border-color: rgba(31, 93, 150, 0.34);
          box-shadow: 0 16px 38px rgba(31, 79, 134, 0.13);
        }
        .sched-sidebar-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--slate-800);
          margin: 0 0 0.75rem 0;
          font-family: var(--font-display);
        }
        .sched-accent-bar {
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, #1f5d96, #2f6ea8);
          border-radius: 2px;
          margin-bottom: 1.5rem;
        }
        .sched-why-list {
          list-style: none;
          margin: 0 0 1.5rem 0;
          padding: 0;
        }
        .sched-why-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.25rem;
          align-items: flex-start;
        }
        .sched-why-item:last-of-type { margin-bottom: 0; }
        .sched-why-num {
          flex-shrink: 0;
          font-size: 0.75rem;
          font-weight: 700;
          color: #1f5d96;
          font-family: var(--font-display);
          letter-spacing: 0.02em;
        }
        .sched-why-item-title {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--slate-800);
          margin: 0 0 0.25rem 0;
        }
        .sched-why-item-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
        }
        .sched-note {
          font-size: 0.9375rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0 0 1.25rem 0;
          padding-top: 1rem;
          border-top: 1px solid rgba(148, 163, 184, 0.28);
        }
        .sched-link-contact {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #1f5d96;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .sched-link-contact:hover { color: #173b68; }
        .sched-trust {
          margin-top: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          color: var(--text-muted);
        }
        .sched-trust-dot {
          color: var(--slate-300, #CBD5E1);
          font-weight: 700;
        }

        .sched-form-wrap { min-width: 0; }
        .sched-form-card {
          background: #fff;
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 18px;
          padding: 2.25rem 1.75rem;
          box-shadow: 0 10px 28px rgba(15, 39, 71, 0.08);
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .sched-form-card:hover {
          border-color: rgba(31, 93, 150, 0.34);
          box-shadow: 0 16px 38px rgba(31, 79, 134, 0.13);
        }
        @media (min-width: 768px) {
          .sched-form-card { padding: 2.5rem 2.25rem; }
        }
        .sched-form-heading {
          font-size: 1.375rem;
          font-weight: 600;
          color: var(--slate-800);
          margin: 0 0 0.35rem 0;
          font-family: var(--font-display);
        }
        .sched-form-subheading {
          font-size: 0.9375rem;
          color: var(--text-muted);
          margin: 0 0 1.75rem 0;
          line-height: 1.5;
        }
        .sched-form .sched-form-group {
          margin-bottom: 1.25rem;
        }
        .sched-form .sched-form-group label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--slate-700);
          margin-bottom: 0.4rem;
        }
        .sched-required { color: #1f5d96; }
        .sched-form input,
        .sched-form select,
        .sched-form textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border);
          border-radius: 10px;
          font-size: 1rem;
          font-family: var(--font-body);
          color: var(--text);
          background: var(--white);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .sched-form input::placeholder,
        .sched-form textarea::placeholder {
          color: var(--slate-600);
          opacity: 0.8;
        }
        .sched-form input:focus,
        .sched-form select:focus,
        .sched-form textarea:focus {
          outline: none;
          border-color: #1f5d96;
          box-shadow: 0 0 0 3px rgba(31, 79, 134, 0.16);
        }
        .sched-form textarea {
          resize: vertical;
          min-height: 100px;
        }
        .sched-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 480px) {
          .sched-form-row { grid-template-columns: 1fr; }
        }
        .sched-form-status {
          margin-bottom: 1rem;
          padding: 0.875rem 1rem;
          border-radius: 10px;
          font-size: 0.9375rem;
          line-height: 1.5;
        }
        .sched-form-status-success {
          background: #D1FAE5;
          color: #065F46;
          border: 1px solid #A7F3D0;
        }
        .sched-form-status-error {
          background: #FEE2E2;
          color: #991B1B;
          border: 1px solid #FECACA;
        }
        .sched-submit {
          width: 100%;
          padding: 0.875rem 1.5rem;
          font-size: 1rem;
          margin-top: 0.25rem;
        }
        .sched-form-hint {
          margin-top: 1rem;
          font-size: 0.8125rem;
          color: var(--text-muted);
          line-height: 1.5;
          text-align: center;
        }
      `}</style>
    </>
  );
}
