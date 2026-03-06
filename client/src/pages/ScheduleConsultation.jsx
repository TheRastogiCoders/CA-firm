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
      {/* Premium page hero — aligned with home-hero-2 */}
      <section className="sched-hero" aria-label="Schedule a consultation">
        <div className="sched-hero-pattern" aria-hidden="true" />
        <div className="sched-hero-accent" aria-hidden="true" />
        <div className="container">
          <div className="sched-hero-inner">
            <p className="sched-hero-eyebrow">Schedule a Consultation</p>
            <h1 className="sched-hero-title">Book a Free Consultation</h1>
            <p className="sched-hero-desc">
              Reserve a 30-minute slot with our CAs. Choose your preferred date and time—we’ll confirm within 1–2 business days. No obligation.
            </p>
          </div>
        </div>
      </section>

      <section className="section sched-section">
        <div className="container">
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
        .sched-hero {
          position: relative;
          min-height: clamp(360px, 52vh, 520px);
          min-height: clamp(360px, 52dvh, 520px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(3.8rem, 7vw, 5rem) 0 clamp(2.6rem, 4.5vw, 3.4rem);
          background:
            linear-gradient(135deg, rgba(76, 29, 149, 0.9) 0%, rgba(30, 58, 138, 0.9) 100%),
            url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=85');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        @media (max-width: 767px) {
          .sched-hero {
            min-height: clamp(320px, 46vh, 460px);
            min-height: clamp(320px, 46dvh, 460px);
            padding: 3.2rem 1rem 2.25rem;
          }
        }
        .sched-hero-pattern {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.06;
          background-image: radial-gradient(circle at 1px 1px, #fff 1px, transparent 0);
          background-size: 32px 32px;
        }
        .sched-hero-accent {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--purple-400), var(--blue-400), transparent);
          z-index: 1;
        }
        .sched-hero-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }
        .sched-hero-eyebrow {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--purple-400);
          margin-bottom: 0.75rem;
        }
        .sched-hero-title {
          font-size: clamp(1.95rem, 4.7vw, 3rem);
          font-weight: 600;
          color: var(--white);
          line-height: 1.16;
          margin-bottom: 0.9rem;
          letter-spacing: -0.02em;
        }
        .sched-hero-desc {
          color: rgba(255, 255, 255, 0.92);
          font-size: clamp(1rem, 2.1vw, 1.1rem);
          line-height: 1.72;
          margin: 0;
        }
        @media (max-width: 767px) {
          .sched-hero-inner {
            text-align: left;
          }
        }

        .sched-section {
          padding: 4rem 0 5rem;
          background: linear-gradient(180deg, var(--slate-50) 0%, var(--white) 100%);
        }
        @media (min-width: 768px) {
          .sched-section { padding: 5rem 0 6rem; }
        }
        .sched-layout {
          display: grid;
          gap: 2.5rem;
          align-items: start;
        }
        @media (min-width: 968px) {
          .sched-layout { grid-template-columns: 1fr 1.15fr; gap: 3rem; }
        }

        .sched-sidebar-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          box-shadow: 0 4px 24px rgba(30, 41, 59, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .sched-sidebar-card:hover {
          border-color: var(--purple-200, #E9D5FF);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.08);
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
          background: linear-gradient(90deg, var(--purple-600), var(--blue-600));
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
          color: var(--purple-400);
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
          border-top: 1px solid var(--border);
        }
        .sched-link-contact {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--blue-600);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .sched-link-contact:hover { color: var(--blue-700); }
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
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2.25rem 1.75rem;
          box-shadow: 0 4px 24px rgba(30, 41, 59, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .sched-form-card:hover {
          border-color: var(--purple-200, #E9D5FF);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.08);
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
        .sched-required { color: var(--purple-600); }
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
          border-color: var(--purple-500);
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
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
