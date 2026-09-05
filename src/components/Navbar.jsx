import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activePage, openDemoModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;
  const isHome = currentPath === '/' || currentPath === '/overview';
  const isBenchmarks = currentPath === '/benchmarks';
  const isTry = currentPath === '/try' || currentPath === '/trynow';
  const isAbout = currentPath === '/about';

  const handleCtaClick = () => {
    setMobileOpen(false);
    openDemoModal();
  };

  return (
    <header className="m5-header">
      <div className="m5-header-container">
        {/* Left: M5 Logo */}
        <Link
          to="/overview"
          className="m5-brand-logo"
          onClick={() => setMobileOpen(false)}
        >
          <img src="/logo.png" alt="M5 Logo" className="m5-brand-logo-img" />
        </Link>

        {/* Center: Small Navigation Pill */}
        <div className="m5-nav-center-slot">
          <div className="m5-nav-pill-group">
            <Link
              to="/overview"
              className={`m5-nav-item ${isHome ? 'active' : ''}`}
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              onClick={() => setMobileOpen(false)}
            >
              Overview
            </Link>
            <Link
              to="/benchmarks"
              className={`m5-nav-item ${isBenchmarks ? 'active' : ''}`}
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              onClick={() => setMobileOpen(false)}
            >
              Benchmarks
            </Link>
            <Link
              to="/trynow"
              className={`m5-nav-item ${isTry ? 'active' : ''}`}
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              onClick={() => setMobileOpen(false)}
            >
              Try Now
            </Link>
            <Link
              to="/about"
              className={`m5-nav-item ${isAbout ? 'active' : ''}`}
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
          </div>
        </div>

        {/* Right: Request Access Button */}
        <div className="m5-nav-right-slot">
          <button className="m5-cta-pill" onClick={handleCtaClick}>
            <span>Request Access</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-only-hamburger"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="m5-mobile-drawer">
          <Link
            to="/overview"
            className={`m5-nav-item ${isHome ? 'active' : ''}`}
            style={{ textAlign: 'left', fontSize: '16px', padding: '10px 14px', textDecoration: 'none', display: 'block' }}
            onClick={() => setMobileOpen(false)}
          >
            Overview
          </Link>
          <Link
            to="/benchmarks"
            className={`m5-nav-item ${isBenchmarks ? 'active' : ''}`}
            style={{ textAlign: 'left', fontSize: '16px', padding: '10px 14px', textDecoration: 'none', display: 'block' }}
            onClick={() => setMobileOpen(false)}
          >
            Benchmarks
          </Link>
          <Link
            to="/trynow"
            className={`m5-nav-item ${isTry ? 'active' : ''}`}
            style={{ textAlign: 'left', fontSize: '16px', padding: '10px 14px', textDecoration: 'none', display: 'block' }}
            onClick={() => setMobileOpen(false)}
          >
            Try Now
          </Link>
          <Link
            to="/about"
            className={`m5-nav-item ${isAbout ? 'active' : ''}`}
            style={{ textAlign: 'left', fontSize: '16px', padding: '10px 14px', textDecoration: 'none', display: 'block' }}
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '8px 0' }} />
          <button className="m5-cta-pill" style={{ width: '100%', height: '40px' }} onClick={handleCtaClick}>
            <span>Request Access</span>
          </button>
        </div>
      )}
    </header>
  );
}
