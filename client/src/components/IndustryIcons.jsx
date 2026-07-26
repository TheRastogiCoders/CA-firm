/** Line icons for industry sectors. */

function IconShell({ children }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export function ManufacturingIcon() {
  return (
    <IconShell>
      <path d="M3 21h18" />
      <path d="M5 21V10l4 2V8l4 2V7l6-2v16" />
      <path d="M9 21v-4h4v4" />
    </IconShell>
  );
}

export function BankingIcon() {
  return (
    <IconShell>
      <path d="M3 10l9-6 9 6" />
      <path d="M5 10v8" />
      <path d="M10 10v8" />
      <path d="M14 10v8" />
      <path d="M19 10v8" />
      <path d="M3 18h18" />
      <path d="M2 21h20" />
    </IconShell>
  );
}

export function RealEstateIcon() {
  return (
    <IconShell>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M10 21v-6h4v6" />
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
    </IconShell>
  );
}

export function TradingIcon() {
  return (
    <IconShell>
      <path d="M3 7h11l2 3h5v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
      <circle cx="7.5" cy="16.5" r="1.5" />
      <circle cx="16.5" cy="16.5" r="1.5" />
      <path d="M12 7V4h4l2 3" />
    </IconShell>
  );
}

export function GovernmentIcon() {
  return (
    <IconShell>
      <path d="M4 21h16" />
      <path d="M6 21V11h12v10" />
      <path d="M4 11l8-6 8 6" />
      <path d="M9 15h.01" />
      <path d="M12 15h.01" />
      <path d="M15 15h.01" />
      <path d="M9 18h.01" />
      <path d="M12 18h.01" />
      <path d="M15 18h.01" />
    </IconShell>
  );
}

export function SmeStartupIcon() {
  return (
    <IconShell>
      <path d="M5 19c2-1 3.5-3.5 4-6 3.5.5 6 2 7 4-2 1.5-4.5 2-7 2-1.5 0-2.8-.3-4 0z" />
      <path d="M12 5c2.5 1 4.5 3.2 5 6-2.5.2-4.5-1-5.5-2.5C10.8 7 11 5.8 12 5z" />
      <path d="M9.5 14.5L7 18" />
    </IconShell>
  );
}

export function NonprofitIcon() {
  return (
    <IconShell>
      <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" />
    </IconShell>
  );
}
