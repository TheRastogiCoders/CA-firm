/**
 * Single source of truth for service pages.
 * Used by Services list, ServiceDetail, and for related-service links.
 */

export const SERVICES_DATA = [
  {
    slug: 'tax-compliance',
    title: 'Tax & Compliance',
    shortDescription: 'Tax planning, direct and indirect tax compliance, and representation before authorities. We help you optimise your tax position within the law.',
    longDescription: 'Our Tax & Compliance practice supports businesses and individuals on Indian tax law. We advise on tax planning to reduce liability within the legal framework. We handle income tax, TDS, and indirect tax compliance on time. We represent you before tax authorities when required. We track amendments and judicial developments so advice stays current and practical.',
    keyAreas: ['Income tax planning & returns', 'TDS & TCS compliance', 'Indirect taxes (GST coordination)', 'Tax representation & appeals', 'International tax aspects'],
    relatedSlugs: ['gst-advisory', 'audit-assurance', 'company-formation'],
  },
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    shortDescription: 'Statutory audits, internal audits, tax audits, and assurance services. We strengthen financial controls, transparency, and stakeholder confidence.',
    longDescription: 'We provide statutory, internal, tax, and stock audits suited to your size, sector, and regulatory requirements. Statutory audits follow applicable standards and give assurance to shareholders and regulators. Internal and tax audits help identify risks and improve processes. Our reports are clear, actionable, and aligned with professional standards.',
    keyAreas: ['Statutory audit', 'Internal audit', 'Tax audit', 'Stock audit', 'Management audit', 'Assurance & agreed-upon procedures'],
    relatedSlugs: ['tax-compliance', 'corporate-law', 'financial-consulting'],
  },
  {
    slug: 'gst-advisory',
    title: 'GST Advisory',
    shortDescription: 'GST registration, returns, refunds, and litigation support. We help you stay compliant and use input tax credit and other benefits correctly.',
    longDescription: 'GST affects most businesses. We advise from registration and classification through monthly and quarterly returns, refunds, and litigation. We help you optimise input tax credit, maintain proper records, and respond to notices and assessments. We keep you informed on rate changes, compliance deadlines, and opportunities under the GST regime.',
    keyAreas: ['GST registration & amendments', 'Returns (GSTR-1, GSTR-3B, annual)', 'Refunds & reconciliation', 'Litigation & dispute resolution', 'Compliance reviews & health checks'],
    relatedSlugs: ['tax-compliance', 'company-formation', 'audit-assurance'],
  },
  {
    slug: 'corporate-law',
    title: 'Corporate Law',
    shortDescription: 'Company law advisory, corporate governance, secretarial services, and regulatory filings. We keep your organisation compliant and well governed.',
    longDescription: 'We advise on company law, corporate governance, and secretarial compliance. Our work includes board and general meeting support, statutory registers, ROC and MCA filings, and guidance on SEBI and other regulations where applicable. We support listed and unlisted companies, LLPs, and other entities on ongoing compliance.',
    keyAreas: ['Company law & governance', 'Secretarial services', 'ROC & MCA filings', 'Board & general meetings', 'Compliance calendars'],
    relatedSlugs: ['company-formation', 'audit-assurance', 'financial-consulting'],
  },
  {
    slug: 'company-formation',
    title: 'Company Formation',
    shortDescription: 'Incorporation of companies and LLPs, ROC filings, and ongoing corporate compliance. You can focus on running the business.',
    longDescription: 'Setting up a company or LLP involves several steps and continuing compliance. We handle incorporation, MOA or AOA or LLP agreement drafting, name approval, and registration. After incorporation we support annual filings, director KYC, changes in directorship or capital, and other ROC compliances so the entity stays in good standing.',
    keyAreas: ['Company & LLP incorporation', 'ROC filings & amendments', 'Annual returns & financial statements', 'Director KYC & changes', 'Strike-off & restoration support'],
    relatedSlugs: ['corporate-law', 'gst-advisory', 'tax-compliance'],
  },
  {
    slug: 'financial-consulting',
    title: 'Financial Consulting',
    shortDescription: 'Business valuation, due diligence, restructuring, and financial advisory for mergers, investments, and reorganisation.',
    longDescription: 'We support transactions and restructuring with independent analysis. Services include business and asset valuation, financial and commercial due diligence for M&A and investments, and restructuring advice. Whether you are raising capital, acquiring a business, or reorganising your group, we explain the financial position and risks in clear terms.',
    keyAreas: ['Business & asset valuation', 'Financial due diligence', 'M&A advisory', 'Restructuring & demerger', 'Fundraising support'],
    relatedSlugs: ['audit-assurance', 'project-finance', 'corporate-law'],
  },
  {
    slug: 'project-finance',
    title: 'Project Finance',
    shortDescription: 'Financial structuring, debt syndication, and banking support for projects. We help you secure funding and structure workable deals.',
    longDescription: 'We support projects and infrastructure with financial structuring, debt syndication, and banking liaison. We prepare bankable financial models, information memorandums, and lender documentation. We work with promoters, banks, and institutions on structure, covenants, and timelines to support financial closure and project delivery.',
    keyAreas: ['Financial structuring', 'Debt syndication', 'Banking support & documentation', 'Project financial models', 'Lender due diligence support'],
    relatedSlugs: ['financial-consulting', 'audit-assurance', 'government-schemes-advisory'],
  },
  {
    slug: 'government-schemes-advisory',
    title: 'Government Schemes Advisory',
    shortDescription: 'Awareness, planning, and implementation support for Central and State Government schemes. We help you access benefits and incentives in a compliant way.',
    longDescription: 'Central and State Governments run many schemes for industry, export, R&D, and sector specific incentives. We explain eligibility, documentation, and compliance for relevant schemes. Our work covers scheme selection, application support, and ongoing compliance so you can claim subsidies, interest subventions, and other benefits on time.',
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
