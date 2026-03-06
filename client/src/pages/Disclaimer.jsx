export default function Disclaimer() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Disclaimer</h1>
          <p className="page-subtitle">
            Legal disclaimer for information provided by Dwivedi Gupta & Co.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container disclaimer-content">
          <p>
            The information contained in this document prepared by Dwivedi Gupta & Co. (hereinafter referred to as DGC) is furnished to the recipient, on his/ her specific request and for information purpose only. In no way, this document should be treated as a marketing material or efforts to solicit a client. The sole purpose of this document is to furnish factual information about DGC's profile.
          </p>
          <p>
            While we have made every attempt to ensure that the information contained in this document is true, DGC, its partners and/or any of its employees does not give any warranty, express or implied, including the warranty of opinions expressed for a particular purpose, or assume any liability or responsibility for the accuracy, completeness, or usefulness of any information available from this document.
          </p>
          <p className="disclaimer-updated">Last updated: 2025.</p>
        </div>
      </section>
      <style>{`
        .disclaimer-content {
          max-width: 720px;
          margin: 0 auto;
        }
        .disclaimer-content p {
          color: var(--slate-700);
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }
        .disclaimer-content p:last-child { margin-bottom: 0; }
        .disclaimer-updated { font-size: 0.9375rem; color: var(--text-muted); }
      `}</style>
    </>
  );
}
