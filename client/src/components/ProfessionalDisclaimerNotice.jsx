import { Link } from 'react-router-dom';
import { PROFESSIONAL_DISCLAIMER_SHORT } from '../data/professionalDisclaimer';

/**
 * Concise professional disclaimer for Footer, About, Contact, and Home.
 * @param {'default' | 'light'} variant — `light` for dark footer background
 */
export default function ProfessionalDisclaimerNotice({ variant = 'default', className = '' }) {
  return (
    <aside
      className={`professional-disclaimer-notice professional-disclaimer-notice--${variant}${className ? ` ${className}` : ''}`}
      aria-label="Professional disclaimer"
    >
      <p className="professional-disclaimer-notice-title">Professional Disclaimer</p>
      <p className="professional-disclaimer-notice-text">{PROFESSIONAL_DISCLAIMER_SHORT}</p>
      <p className="professional-disclaimer-notice-links">
        <Link to="/disclaimer">Full disclaimer</Link>
        <span aria-hidden="true"> · </span>
        <Link to="/privacy-policy">Privacy policy</Link>
      </p>
    </aside>
  );
}
