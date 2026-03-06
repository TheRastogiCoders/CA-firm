/**
 * Single source of truth for service pages.
 * Used by Services list, ServiceDetail, and for related-service links.
 */

export const SERVICES_DATA = [
  {
    slug: 'tax-compliance',
    title: 'Tax & Compliance',
    shortDescription: 'Strategic tax planning, direct and indirect tax compliance, and representation before authorities to optimise your tax position while meeting all regulatory requirements.',
    longDescription: 'Our Tax & Compliance practice helps businesses and individuals navigate the complexities of Indian tax laws. We provide strategic tax planning to minimise liability within the legal framework, ensure timely compliance with income tax, TDS, and indirect tax obligations, and represent you before tax authorities when required. Our team stays abreast of amendments and judicial developments to give you accurate, practical advice.',
    keyAreas: ['Income tax planning & returns', 'TDS & TCS compliance', 'Indirect taxes (GST coordination)', 'Tax representation & appeals', 'International tax aspects'],
    relatedSlugs: ['gst-advisory', 'audit-assurance', 'company-formation'],
  },
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    shortDescription: 'Statutory audits, internal audits, tax audits, and assurance services that strengthen financial controls, transparency, and stakeholder confidence.',
    longDescription: 'We deliver a full range of audit and assurance services tailored to your size, sector, and regulatory requirements. Our statutory audits comply with applicable standards and provide assurance to shareholders and regulators. We also conduct internal audits, tax audits, and stock audits to strengthen controls, identify risks, and improve processes. Our reports are clear, actionable, and aligned with best practices.',
    keyAreas: ['Statutory audit', 'Internal audit', 'Tax audit', 'Stock audit', 'Management audit', 'Assurance & agreed-upon procedures'],
    relatedSlugs: ['tax-compliance', 'corporate-law', 'financial-consulting'],
  },
  {
    slug: 'gst-advisory',
    title: 'GST Advisory',
    shortDescription: 'End-to-end GST support including registration, returns, refunds, and litigation. We help you stay compliant and leverage GST benefits effectively.',
    longDescription: 'GST impacts every business. We offer end-to-end GST advisory—from registration and classification to monthly/quarterly returns, refunds, and litigation support. We help you optimise input tax credit, maintain robust documentation, and respond to notices and assessments. Our team keeps you updated on rate changes, compliance deadlines, and opportunities under the GST regime.',
    keyAreas: ['GST registration & amendments', 'Returns (GSTR-1, GSTR-3B, annual)', 'Refunds & reconciliation', 'Litigation & dispute resolution', 'Compliance reviews & health checks'],
    relatedSlugs: ['tax-compliance', 'company-formation', 'audit-assurance'],
  },
  {
    slug: 'corporate-law',
    title: 'Corporate Law',
    shortDescription: 'Company law advisory, corporate governance, secretarial services, and regulatory filings to keep your organisation compliant and well-governed.',
    longDescription: 'We advise on company law, corporate governance, and secretarial compliance. Our services include board and general meeting support, maintenance of statutory registers, filing of forms and returns with the Registrar of Companies, and guidance on SEBI and other regulations where applicable. We help listed and unlisted companies, LLPs, and other entities stay compliant and governance-ready.',
    keyAreas: ['Company law & governance', 'Secretarial services', 'ROC & MCA filings', 'Board & general meetings', 'Compliance calendars'],
    relatedSlugs: ['company-formation', 'audit-assurance', 'financial-consulting'],
  },
  {
    slug: 'company-formation',
    title: 'Company Formation',
    shortDescription: 'Incorporation of companies and LLPs, ROC filings, and ongoing corporate compliance so you can focus on running your business.',
    longDescription: 'Starting a company or LLP involves multiple steps and ongoing compliance. We handle incorporation, drafting of MOA/AOA or LLP agreement, name approval, and registration. Post-incorporation, we support you with annual filings, director KYC, changes in directorship or capital, and other ROC-related compliances so your entity remains in good standing and you can focus on business.',
    keyAreas: ['Company & LLP incorporation', 'ROC filings & amendments', 'Annual returns & financial statements', 'Director KYC & changes', 'Strike-off & restoration support'],
    relatedSlugs: ['corporate-law', 'gst-advisory', 'tax-compliance'],
  },
  {
    slug: 'financial-consulting',
    title: 'Financial Consulting',
    shortDescription: 'Business valuation, due diligence, restructuring, and financial advisory to support mergers, investments, and strategic decisions.',
    longDescription: 'Our Financial Consulting practice supports strategic decisions with rigorous analysis and independent advice. We provide business and asset valuation, financial and commercial due diligence for M&A and investments, and restructuring advisory. Whether you are raising capital, acquiring a business, or reorganising your group, we deliver clarity and credibility to the numbers.',
    keyAreas: ['Business & asset valuation', 'Financial due diligence', 'M&A advisory', 'Restructuring & demerger', 'Fundraising support'],
    relatedSlugs: ['audit-assurance', 'project-finance', 'corporate-law'],
  },
  {
    slug: 'project-finance',
    title: 'Project Finance',
    shortDescription: 'Financial structuring, debt syndication, and banking support for projects. We help you secure funding and structure deals that work.',
    longDescription: 'We support projects and infrastructure with financial structuring, debt syndication, and banking liaison. Our team helps prepare bankable financial models, information memorandums, and documentation required by lenders. We work with promoters, banks, and institutions to align structure, covenants, and timelines so projects can achieve financial closure and stay on track.',
    keyAreas: ['Financial structuring', 'Debt syndication', 'Banking support & documentation', 'Project financial models', 'Lender due diligence support'],
    relatedSlugs: ['financial-consulting', 'audit-assurance', 'government-schemes-advisory'],
  },
  {
    slug: 'government-schemes-advisory',
    title: 'Government Schemes Advisory',
    shortDescription: 'Awareness, planning, and implementation support for Central and State Government schemes across sectors to help you access benefits and incentives.',
    longDescription: 'Central and State Governments run numerous schemes for industry, export, R&D, and sector-specific incentives. We help you understand eligibility, documentation, and compliance requirements for relevant schemes. Our advisory includes scheme selection, application support, and ongoing compliance so you can access subsidies, interest subventions, and other benefits in a timely, compliant manner.',
    keyAreas: ['Scheme awareness & selection', 'Application & documentation support', 'Compliance for incentives', 'State & Central scheme mapping'],
    relatedSlugs: ['company-formation', 'tax-compliance', 'project-finance'],
  },
];

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
