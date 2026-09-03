import React, { useState } from 'react';
import { ArrowRight, Mail, Copy, Check, Shield, Lock, Zap } from 'lucide-react';

export default function Footer({ activePage, setActivePage, openDemoModal }) {
  const [queries, setQueries] = useState(25000);
  const [copied, setCopied] = useState(false);

  // Calculation: Traditional 40k tokens/query vs M5 8.6k tokens/query = 31.4k tokens saved per query
  // Input price $3.00/M tokens (Claude 3.5 Sonnet / GPT-4o)
  const monthlySavings = Math.round(queries * 0.0942);
  const annualSavings = monthlySavings * 12;
  const tokensSavedMillions = ((queries * 31400) / 1000000).toFixed(1);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@m5.ai');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="m5-ocean-footer">
      <div className="m5-container">
        
        {/* ── 1. Token Savings Calculator (Home Page Only) ──────────── */}
        {activePage === 'home' && (
          <div className="m5-calc-section">
            <h2 className="m5-calc-heading">
              See how much you save with M5.
            </h2>

            <div className="m5-calc-two-cards-grid">
              {/* Box 1: Slider Card */}
              <div className="m5-calc-card">
                <div className="m5-calc-card-header">
                  <span className="m5-calc-card-title">Monthly Repository Queries</span>
                  <span className="m5-calc-card-tag">{queries.toLocaleString()} / mo</span>
                </div>

                <div className="m5-slider-wrapper">
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={queries}
                    onChange={(e) => setQueries(Number(e.target.value))}
                    className="m5-range-slider"
                    aria-label="Monthly Queries Slider"
                  />
                </div>

                <div className="m5-slider-ticks">
                  <span>1k</span>
                  <span>25k</span>
                  <span>50k</span>
                  <span>75k</span>
                  <span>100k+</span>
                </div>

                <p className="m5-calc-card-desc">
                  Calibrate against your engineering team's monthly interactive AI prompt volume.
                </p>
              </div>

              {/* Box 2: Savings Amount Card */}
              <div className="m5-calc-card">
                <div className="m5-calc-card-header">
                  <span className="m5-calc-card-title">Estimated Token Costs Saved</span>
                  <span className="m5-calc-card-tag">78.4% SAVED</span>
                </div>

                <div className="m5-calc-savings-display">
                  <span className="m5-calc-dollars">${monthlySavings.toLocaleString()}</span>
                  <span className="m5-calc-period">/ month</span>
                </div>

                <p className="m5-calc-card-desc">
                  ~${annualSavings.toLocaleString()} / year saved • ~{tokensSavedMillions}M tokens eliminated from prompts
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── 2. High-Converting Enterprise Contact Hub ─────────────── */}
        <div className="m5-footer-contact-hero">
          <div>
            <h3 className="m5-footer-contact-title">
              Ready to eliminate 75%+ of your AI token costs?
            </h3>

            <p className="m5-footer-contact-sub">
              Deploy on your private air-gapped VPC, benchmark your monorepo, or schedule a technical walkthrough with our founding systems architecture team.
            </p>


          </div>

          <div className="m5-footer-actions-panel">
            <button className="m5-footer-cta-btn" onClick={openDemoModal}>
              <span>Get Demo</span>
              <ArrowRight size={16} />
            </button>

            <div className="m5-footer-email-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#FF5A52" />
                <div>
                  <a href="mailto:info@m5.ai" className="m5-footer-email-text">
                    info@m5.ai
                  </a>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
