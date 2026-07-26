/**
 * Single source of truth for service pages.
 * Used by Services list, ServiceDetail, and for related-service links.
 */

export const SERVICES_DATA = [
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    shortDescription:
      'Statutory audits, internal audits, tax audits, and assurance services. We strengthen financial controls, transparency, and stakeholder confidence.',
    longDescription:
      'We provide statutory, internal, tax, and stock audits suited to your size, sector, and regulatory requirements. Statutory audits follow applicable standards and give assurance to shareholders and regulators. Internal and tax audits help identify risks and improve processes. Our reports are clear, actionable, and aligned with professional standards.',
    keyAreas: [
      'Statutory audit',
      'Internal audit',
      'Tax audit',
      'Stock audit',
      'Management audit',
      'Assurance & agreed-upon procedures',
    ],
    relatedSlugs: ['tax-regulatory-services', 'corporate-law-compliance', 'project-finance-consultancy'],
  },
  {
    slug: 'tax-regulatory-services',
    title: 'Tax & Regulatory Services',
    shortDescription:
      'Direct and indirect tax planning, GST, TDS, and regulatory compliance. We help you meet deadlines and optimise your tax position within the law.',
    longDescription:
      'Our Tax & Regulatory practice supports businesses and individuals on Indian tax law, GST, and related regulations. We advise on tax planning, handle income tax and TDS compliance, manage GST registration, returns, refunds, and litigation support, and represent you before authorities when required. We track amendments and judicial developments so advice stays current and practical.',
    keyAreas: [
      'Income tax planning & returns',
      'TDS & TCS compliance',
      'GST registration, returns & refunds',
      'Tax representation & appeals',
      'Regulatory filings & health checks',
    ],
    relatedSlugs: ['audit-assurance', 'corporate-law-compliance', 'startup-advisory'],
  },
  {
    slug: 'corporate-law-compliance',
    title: 'Corporate Law & Compliance',
    shortDescription:
      'Company law, incorporation, secretarial services, and ROC/MCA filings. We keep your entity compliant and well governed.',
    longDescription:
      'We advise on company law, corporate governance, and secretarial compliance for companies, LLPs, and other entities. Our work covers incorporation, MOA/AOA and LLP agreements, board and general meeting support, statutory registers, ROC and MCA filings, director KYC, and ongoing compliance calendars so your organisation stays in good standing.',
    keyAreas: [
      'Company & LLP incorporation',
      'Company law & governance',
      'Secretarial services',
      'ROC & MCA filings',
      'Board & general meetings',
      'Compliance calendars',
    ],
    relatedSlugs: ['tax-regulatory-services', 'startup-advisory', 'audit-assurance'],
  },
  {
    slug: 'project-finance-consultancy',
    title: 'Project Finance & Consultancy Services',
    shortDescription:
      'Financial structuring, debt syndication, valuation, and transaction advisory. We help you secure funding and structure workable deals.',
    longDescription:
      'We support projects and businesses with financial structuring, debt syndication, banking liaison, valuation, due diligence, and restructuring advice. We prepare bankable financial models, information memorandums, and lender documentation, and explain financial position and risks clearly for fundraising, acquisitions, and reorganisation.',
    keyAreas: [
      'Financial structuring',
      'Debt syndication & banking support',
      'Project financial models',
      'Business & asset valuation',
      'Financial due diligence',
      'Restructuring & fundraising support',
    ],
    relatedSlugs: ['government-subsidies', 'audit-assurance', 'tax-regulatory-services'],
  },
  {
    slug: 'government-subsidies',
    title: 'Government Subsidies',
    shortDescription:
      'Awareness, planning, and implementation support for Central and State subsidies and incentives. We help you access benefits in a compliant way.',
    longDescription:
      'Central and State Governments run many schemes for industry, export, R&D, and sector-specific incentives. We explain eligibility, documentation, and compliance for relevant subsidies and schemes. Our work covers scheme selection, application support, and ongoing compliance so you can claim subsidies, interest subventions, and other benefits on time.',
    keyAreas: [
      'Scheme awareness & selection',
      'Subsidy & incentive applications',
      'Documentation support',
      'Compliance for incentives',
      'State & Central scheme mapping',
    ],
    relatedSlugs: ['project-finance-consultancy', 'startup-advisory', 'tax-regulatory-services'],
  },
  {
    slug: 'startup-advisory',
    title: 'Startup Advisory',
    shortDescription:
      'Incorporation, compliance setup, tax, and funding-readiness support for startups and new ventures.',
    longDescription:
      'We help founders set up and scale with the right entity structure, early compliance calendar, tax and GST registrations, and advisory on Startup India and related benefits where eligible. From incorporation through first filings and fundraising readiness, we provide practical CA support so you can focus on building the product and the business.',
    keyAreas: [
      'Entity setup & incorporation',
      'Startup compliance calendar',
      'Tax & GST registrations',
      'Startup India & scheme guidance',
      'Funding-readiness support',
    ],
    relatedSlugs: ['corporate-law-compliance', 'tax-regulatory-services', 'government-subsidies'],
  },
];

/** Old service URLs → current slugs (bookmarks & external links). */
export const SERVICE_SLUG_REDIRECTS = {
  'tax-compliance': 'tax-regulatory-services',
  'gst-advisory': 'tax-regulatory-services',
  'corporate-law': 'corporate-law-compliance',
  'company-formation': 'corporate-law-compliance',
  'financial-consulting': 'project-finance-consultancy',
  'project-finance': 'project-finance-consultancy',
  'government-schemes-advisory': 'government-subsidies',
};

export function getServiceBySlug(slug) {
  return SERVICES_DATA.find((s) => s.slug === slug) ?? null;
}

export function getAllServices() {
  return SERVICES_DATA;
}

export function getRelatedServices(slug, limit = 3) {
  const service = getServiceBySlug(slug);
  if (!service?.relatedSlugs?.length) {
    return SERVICES_DATA.filter((s) => s.slug !== slug).slice(0, limit);
  }
  const related = service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter(Boolean)
    .slice(0, limit);
  if (related.length < limit) {
    const remaining = SERVICES_DATA.filter(
      (s) => s.slug !== slug && !related.some((r) => r.slug === s.slug)
    ).slice(0, limit - related.length);
    return [...related, ...remaining];
  }
  return related;
}
