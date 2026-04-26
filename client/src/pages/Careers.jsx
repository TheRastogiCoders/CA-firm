import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-kicker">Work With Us</span>
          <h1 className="page-title">Careers</h1>
          <p className="page-subtitle">
            Join our team of professionals. Explore opportunities at Dwivedi Gupta & Co.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
            We are always looking for talented chartered accountants and finance professionals.
            For current openings, please write to us at{' '}
            <a href="mailto:vivek.gupta@dgc.ind.in">vivek.gupta@dgc.ind.in</a> or check back later.
          </p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
