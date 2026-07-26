/** Simple line icons for service areas (inline SVG). */

function IconShell({ children }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export function TaxIcon() {
  return (
    <IconShell>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h10" />
      <path d="M16 15l4 4" />
      <path d="M20 15l-4 4" />
    </IconShell>
  );
}

export function AssuranceIcon() {
  return (
    <IconShell>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9.5 12.2l1.8 1.8 3.7-3.8" />
    </IconShell>
  );
}

export function FinanceIcon() {
  return (
    <IconShell>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 16V10" />
      <path d="M12 16V7" />
      <path d="M16 16v-5" />
    </IconShell>
  );
}

export function AdvisoryIcon() {
  return (
    <IconShell>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19c1.4-3 3.7-4.5 6.5-4.5S17.1 16 18.5 19" />
      <path d="M17 4.5l1.2 1.2L21 2.9" />
    </IconShell>
  );
}

export function CorporateIcon() {
  return (
    <IconShell>
      <path d="M4 20h16" />
      <path d="M6 20V8l6-3 6 3v12" />
      <path d="M10 12h.01" />
      <path d="M14 12h.01" />
      <path d="M10 16h.01" />
      <path d="M14 16h.01" />
    </IconShell>
  );
}

export function SubsidyIcon() {
  return (
    <IconShell>
      <path d="M4 20h16" />
      <path d="M6 20V10h12v10" />
      <path d="M9 10V7l3-2 3 2v3" />
      <path d="M12 14v3" />
    </IconShell>
  );
}

export function StartupIcon() {
  return (
    <IconShell>
      <path d="M5 19c2-1 3.5-3.5 4-6 3.5.5 6 2 7 4-2 1.5-4.5 2-7 2-1.5 0-2.8-.3-4 0z" />
      <path d="M12 5c2.5 1 4.5 3.2 5 6-2.5.2-4.5-1-5.5-2.5C10.8 7 11 5.8 12 5z" />
      <path d="M9.5 14.5L7 18" />
    </IconShell>
  );
}

export const HERO_TOPLINE = [
  { label: 'Tax', Icon: TaxIcon },
  { label: 'Assurance', Icon: AssuranceIcon },
  { label: 'Finance', Icon: FinanceIcon },
  { label: 'Advisory', Icon: AdvisoryIcon },
];

export const SERVICE_ICONS = {
  'audit-assurance': AssuranceIcon,
  'tax-regulatory-services': TaxIcon,
  'corporate-law-compliance': CorporateIcon,
  'project-finance-consultancy': FinanceIcon,
  'government-subsidies': SubsidyIcon,
  'startup-advisory': StartupIcon,
};
