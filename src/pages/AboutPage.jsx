import React from 'react';
import { ArrowRight, ArrowUpRight, Shield, Zap, Lock, Terminal, Cpu, Layers } from 'lucide-react';

export default function AboutPage({ setActivePage, openDemoModal }) {
  return (
    <div className="m5-about-page-root">
      
      {/* ── 1. Top Hero Section (Black Background & Centered "About us") ─── */}
      <section className="m5-about-black-hero">
        <div className="m5-hero-inner">
          <h1 className="m5-about-black-hero-title">
            About us
          </h1>
          
        </div>
      </section>

      {/* ── 2. White Content Section (Black text, Kalice & PolySans) ─────── */}
      <div className="m5-about-page-content">
        <div className="m5-container">

          {/* ── Editorial Intro ────────────────────────────────────────── */}
          <section className="m5-about-hero-block">
            <h2 className="m5-about-title">
              Tokens Cost is the real bottleneck in AI.
            </h2>

            <p className="m5-about-lead">
              We believe the next leap in AI coding isn't model intelligence it's context correctness. 
              M5 decouples retrieval from reasoning, grounding autonomous agents in verified AST truth.
            </p>

          </section>



          {/* ── High-Contrast Editorial Case Study: The Runaway Token Crisis ── */}
          <div className="m5-about-quote-box">
            <span className="m5-about-quote-tag">THE RUNAWAY TOKEN CRISIS • INDUSTRY REPORT</span>
            <blockquote className="m5-about-quote-text">
              “Uber Spent Its Entire 2026 AI Budget in 4 Months.”
            </blockquote>
            <p style={{
              fontFamily: 'PolySans, sans-serif',
              fontSize: '17px',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.78)',
              maxWidth: '740px',
              margin: '0 auto 24px'
            }}>
              Why? Autonomous developer agents dump entire 10,000-line monorepo files into prompt windows. When your LLM is forced to read thousands of lines of irrelevant boilerplate to fix a 2-line function, token budgets collapse.
            </p>
          </div>

          {/* ── Core Engineering Principles: AI Token Cost Optimization (4-Card Grid) ── */}
          <div className="m5-about-section-header">
            <span className="m5-about-section-tag">TOKEN ECONOMICS &amp; EFFICIENCY</span>
            <h2 className="m5-about-section-title">How M5 slashes your AI token costs.</h2>
            <p className="m5-about-section-sub">
              Four architectural mechanisms designed to prevent AI budget blowouts without compromising model reasoning.
            </p>
          </div>

          <div className="m5-values-grid" style={{ marginBottom: '80px' }}>
            <div className="m5-value-card">
              <span className="m5-value-num">01 / TOKEN COMPRESSION</span>
              <div>
                <h4 className="m5-value-heading">Sub-AST Chunk Precision</h4>
                <p className="m5-value-desc">
                  Instead of dumping 10,000-line files, M5 extracts only the exact function or class required slashing input token payload size by over 75%.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">02 / DEDUPLICATION</span>
              <div>
                <h4 className="m5-value-heading">Boilerplate Elimination</h4>
                <p className="m5-value-desc">
                  Redundant headers, repeated package imports, and dead boilerplate are stripped away before reaching the model context window.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">03 / RETRY REDUCTION</span>
              <div>
                <h4 className="m5-value-heading">First-Shot Correctness</h4>
                <p className="m5-value-desc">
                  The most expensive tokens are repeated hallucination retries. Supplying verified caller graphs upfront gets prompts solved on attempt #1.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">04 / PREDICTABLE SCALE</span>
              <div>
                <h4 className="m5-value-heading">Linear Budget Control</h4>
                <p className="m5-value-desc">
                  Sub-15ms local and VPC retrieval keeps costs flat and predictable 
                  protecting engineering teams from sudden multi-million dollar API overages.
                </p>
              </div>
            </div>
          </div>

          {/* ── Call to Action Banner ─────────────────────────────────── */}
          <div className="m5-about-cta-card">
            <h2 className="m5-about-cta-title">
              Stop paying your LLMs to read irrelevant code.
            </h2>
            <p className="m5-about-cta-desc">
              Connect M5 to Cursor, Claude Code, or your custom agent in under two minutes.
            </p>
            <div className="m5-about-cta-actions">
              <button
                className="m5-hero-btn-primary"
                style={{ padding: '12px 28px', fontSize: '15px' }}
                onClick={openDemoModal}
              >
                <span>Request Access</span>
                <ArrowRight size={16} />
              </button>
              
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
