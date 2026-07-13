import { Link } from 'react-router-dom';

/**
 * Reusable conversion strip: primary = Schedule, secondary = Contact.
 */
export default function PageCtaBand({
  title = 'Discuss your requirement with our CA team',
  description = 'Book a free 30-minute consultation or send us your query. We respond within 24 to 48 working hours.',
  primaryLabel = 'Schedule Consultation',
  primaryTo = '/schedule-consultation',
  secondaryLabel = 'Contact Us',
  secondaryTo = '/contact',
  className = '',
  compact = false,
}) {
  return (
    <aside
      className={`page-cta-band${compact ? ' page-cta-band-compact' : ''}${className ? ` ${className}` : ''}`}
      aria-label="Next steps"
    >
      <div className="page-cta-band-glow" aria-hidden="true" />
      <div className="page-cta-band-inner">
        <div className="page-cta-band-text">
          <p className="page-cta-band-eyebrow">Dwivedi Gupta &amp; Co.</p>
          {title && <h3 className="page-cta-band-title">{title}</h3>}
          {description && <p className="page-cta-band-desc">{description}</p>}
        </div>
        <div className="page-cta-band-actions">
          <Link to={primaryTo} className="page-cta-band-primary">
            {primaryLabel}
          </Link>
          <Link to={secondaryTo} className="page-cta-band-secondary">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </aside>
  );
}
