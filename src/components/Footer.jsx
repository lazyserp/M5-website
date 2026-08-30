import React from 'react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-logo" onClick={() => setActivePage('home')}>
              <img src="/logo.png" alt="M5 Logo" className="brand-logo-img" />
              <span>M5 Context Engine</span>
            </div>
            <p className="footer-brand-desc">
              The invisible, permission-aware code context layer for AI developer tools.
            </p>
          </div>

          <div>
            <div className="footer-heading">Product</div>
            <ul className="footer-links">
              <li><span className="footer-link" onClick={() => setActivePage('home')}>Overview</span></li>
              <li><span className="footer-link" onClick={() => setActivePage('docs')}>IDE Setup Hub</span></li>
              {/* <li><span className="footer-link" onClick={() => setActivePage('docs')}>MCP 7-Tool Catalog</span></li> */}
              {/* <li><span className="footer-link" onClick={() => setActivePage('about')}>Product Thesis</span></li> */}
            </ul>
          </div>

          <div>
            <div className="footer-heading">Integrations</div>
            <ul className="footer-links">
              <li><span className="footer-link" onClick={() => setActivePage('docs')}>Cursor IDE</span></li>
              <li><span className="footer-link" onClick={() => setActivePage('docs')}>VS Code &amp; Copilot</span></li>
              <li><span className="footer-link" onClick={() => setActivePage('docs')}>Claude Code </span></li>
              <li><span className="footer-link" onClick={() => setActivePage('docs')}>ChatGPT Remote MCP</span></li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Architecture</div>
            <ul className="footer-links">
              <li><span className="footer-link" onClick={() => setActivePage('about')}>Context-Only Model</span></li>
              <li><span className="footer-link" onClick={() => setActivePage('about')}>Air-Gapped Security</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
