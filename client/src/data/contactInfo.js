/** Official website and contact — single source of truth. */
export const SITE_URL = 'https://dwivediguptaandco.com';
export const CONTACT_EMAIL = 'vivek.gupta@dgc.ind.in';
export const CONTACT_EMAIL_DOMAIN = 'dgc.ind.in';

export const CONTACT_MOBILE = '9721227799';
export const CONTACT_MOBILE_DISPLAY = '+91 9721227799';
export const CONTACT_MOBILE_RAW = '+919721227799';

export const CONTACT_LANDLINE = '0542-2502525';
export const CONTACT_LANDLINE_RAW = '+915422502525';

export const WHATSAPP_NUMBER = '919721227799';
export const WHATSAPP_MESSAGE =
  "Hi, I'm visiting the Dwivedi Gupta & Co. website and would like to discuss tax, assurance, finance, or advisory support.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/** Consistent mailto links site-wide (audit #23). */
export function getMailtoHref(email, options = {}) {
  const address = String(email || '').trim();
  if (!address) return '#';
  const { subject, body } = options;
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return query ? `mailto:${address}?${query}` : `mailto:${address}`;
}
