import React, { useState } from 'react';
import { Menu, X, ArrowRight, BookOpen, Info, Home } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, openDemoModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setMobileOpen(false);
  };

  const handleDemoClick = () => {
    setMobileOpen(false);
    openDemoModal();
  };

  return (
    <header className="site-header">
      <div className="container">
        {/* Brand Logo */}
        <div
          className="brand-logo"
          onClick={() => handleNavClick('home')}
          role="button"
          tabIndex={0}
        >
          <img src="/logo.png" alt="M5 Logo" className="brand-logo-img" />
          <span>M5</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li>
            <button
              className={`nav-btn ${activePage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Overview
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${activePage === 'docs' ? 'active' : ''}`}
              onClick={() => handleNavClick('docs')}
            >
              Documentation
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${activePage === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About
            </button>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <button className="btn btn-secondary nav-docs-btn" onClick={() => handleNavClick('docs')}>
            Docs
          </button>
          <button className="btn btn-primary" onClick={handleDemoClick}>
            <span>Request Demo</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {mobileOpen && (
        <div className="mobile-nav-drawer">
          <button
            className={`mobile-nav-item ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            <Home size={17} />
            <span>Overview</span>
          </button>
          <button
            className={`mobile-nav-item ${activePage === 'docs' ? 'active' : ''}`}
            onClick={() => handleNavClick('docs')}
          >
            <BookOpen size={17} />
            <span>Documentation</span>
          </button>
          <button
            className={`mobile-nav-item ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            <Info size={17} />
            <span>About</span>
          </button>
          <div className="mobile-nav-divider" />
          <button className="btn btn-primary mobile-demo-btn" onClick={handleDemoClick}>
            <span>Request Demo</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}
    </header>
  );
}
