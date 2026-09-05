import React, { useState } from 'react';
import { 
  TrendingDown, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  BarChart3
} from 'lucide-react';
import './BenchmarkPage.css';

export default function BenchmarkPage({ setActivePage, openDemoModal }) {
  // Interactive Team Savings Calculator State
  const [teamSize, setTeamSize] = useState('org'); // default to 'org' to showcase major enterprise savings
  const [modelTier, setModelTier] = useState('frontier'); // 'frontier' ($12) | 'opus' ($18) | 'standard' ($8)

  const presets = {
    solo: { label: 'Solo Engineer', queriesPerDay: 400, monthlyQueries: 12000, desc: '1 active developer pairing with Cursor or Claude Code' },
    team: { label: 'Fast Team (10 Devs)', queriesPerDay: 3000, monthlyQueries: 90000, desc: '10 engineers shipping features with autonomous agent loops' },
    org: { label: 'Engineering Org (50 Devs)', queriesPerDay: 15000, monthlyQueries: 450000, desc: '50 engineers + CI agent context retrieval across repositories' }
  };

  const modelTiers = {
    frontier: { label: 'Claude 3.7 Sonnet / GPT-4o Agent', rate: 12, desc: '$12 / 1M blended reasoning & agent context tokens' },
    opus: { label: 'Claude 3.5 Opus / o1 Tier', rate: 18, desc: '$18 / 1M high-reasoning agent tokens' },
    standard: { label: 'Standard Prompt Input Tier', rate: 8, desc: '$8 / 1M baseline context tokens' }
  };

  const activePreset = presets[teamSize];
  const activeRate = modelTiers[modelTier].rate;

  // Average tokens: standard = 17,144; M5 = 3,788
  const standardMonthlyTokens = (activePreset.monthlyQueries * 17144) / 1000000; // in Millions
  const m5MonthlyTokens = (activePreset.monthlyQueries * 3788) / 1000000; // in Millions
  const savedTokensM = (standardMonthlyTokens - m5MonthlyTokens).toFixed(1);
  
  // Real-world agent multi-turn cost calculation based on selected model tier
  const standardCost = Math.round(standardMonthlyTokens * activeRate);
  const m5Cost = Math.round(m5MonthlyTokens * activeRate);
  const monthlySavings = standardCost - m5Cost;
  const annualSavings = monthlySavings * 12;

  return (
    <div className="m5-page-root">
      {/* ── 1. Hero Section ──────────────────────────────────────────────── */}
      <section className="m5-about-hero benchmark-hero">
        <div className="m5-hero-inner">
          <div className="m5-languages-badge-pill benchmark-hero-badge">
          
            <span>EMPIRICAL RESULTS &amp; COST ANALYSIS</span>
          </div>

          <h1 className="m5-hero-title">
            Proven 78% Token Reduction
          </h1>

          <div className="m5-hero-subtitle">
            <p>
              We evaluated M5 against standard agent context methods. 
              Here is how syntax-aware AST graphs eliminate token waste and accelerate AI coding agent loops.
            </p>
          </div>

          <div className="m5-hero-actions benchmark-hero-actions">
            <button
              className="m5-hero-btn-white"
              onClick={() => setActivePage('try')}
            >
              <span>Get Started Free</span>
              <ArrowRight size={16} />
            </button>
            <button
              className="m5-hero-btn-glass"
              onClick={openDemoModal}
            >
              <span>Schedule Walkthrough</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. Top 3 Headline Summary Cards ──────────────────────────────── */}
      <section className="benchmark-summary-section">
        <div className="m5-container">
          <div className="benchmark-summary-grid">
            {/* Card 1 */}
            <div className="benchmark-summary-card">
              <div className="benchmark-summary-card-header">
                <span className="benchmark-card-tag">01 / TOKEN REDUCTION</span>
                <TrendingDown size={18} color="#B92B23" />
              </div>
              <div className="benchmark-summary-card-metric">
                -78%
              </div>
              <p className="benchmark-card-desc">
                Cuts prompt token bloat by ~78% compared to dumping full files into agent context windows.
              </p>
            </div>

            {/* Card 2 */}
            <div className="benchmark-summary-card">
              <div className="benchmark-summary-card-header">
                <span className="benchmark-card-tag">02 / INSTANT SPEED</span>
                <Zap size={18} color="#B92B23" />
              </div>
              <div className="benchmark-summary-card-metric">
                33 ms
              </div>
              <p className="benchmark-card-desc">
                Sub-second AST index query time. No waiting 40+ seconds for slow CPU vector embeddings.
              </p>
            </div>

            {/* Card 3 */}
            <div className="benchmark-summary-card">
              <div className="benchmark-summary-card-header">
                <span className="benchmark-card-tag">03 / GROUND TRUTH</span>
                <ShieldCheck size={18} color="#B92B23" />
              </div>
              <div className="benchmark-summary-card-metric">
                100%
              </div>
              <p className="benchmark-card-desc">
                Deterministic syntax trees. The model sees exact caller hierarchies and type definitions, not guesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Visual Comparison Chart: Token Consumption ────────────────── */}
      <section className="benchmark-graph-section">
        <div className="m5-container">
          <div className="benchmark-section-header">
            <span className="benchmark-section-badge">
              VISUAL COMPARISON
            </span>
            <h2 className="m5-values-title">
              Token Consumption per Agent Question
            </h2>
            <p className="m5-values-sub benchmark-section-sub">
              Benchmarking prompt context size across all 3 code retrieval methods (0 to 20,000 tokens).
            </p>
          </div>

          <div className="benchmark-graph-container">
            {/* Graph Legend */}
            <div className="benchmark-graph-legend">
              <div>
                <span className="benchmark-legend-title-tag">
                  Context Benchmark
                </span>
                <div className="benchmark-legend-title">
                  Prompt Footprint per Search
                </div>
              </div>

              {/* Theme-matching swatches: Slate (#475569), Gold (#D48B38), Brand Red (#B92B23) */}
              <div className="benchmark-legend-swatches">
                <div className="benchmark-legend-item" style={{ color: '#475569' }}>
                  <span className="benchmark-legend-swatch-bar" style={{ background: '#475569' }} />
                  <span>Standard Code Reading (17,144)</span>
                </div>

                <div className="benchmark-legend-item" style={{ color: '#D48B38' }}>
                  <span className="benchmark-legend-swatch-bar" style={{ background: '#D48B38' }} />
                  <span>Plain Vector Search (1,369)</span>
                </div>

                <div className="benchmark-legend-item" style={{ color: '#B92B23', fontWeight: 500 }}>
                  <span className="benchmark-legend-swatch-bar" style={{ background: '#B92B23' }} />
                  <span>M5 AST Context Engine (3,788)</span>
                </div>
              </div>
            </div>

            {/* Cartesian Bar Chart */}
            <div className="benchmark-svg-wrapper">
              <svg 
                viewBox="0 0 920 230" 
                className="benchmark-svg-canvas"
              >
                {/* Vertical Gridlines */}
                {[
                  { tokens: 0, x: 230, label: '0' },
                  { tokens: 5000, x: 387.5, label: '5,000' },
                  { tokens: 10000, x: 545, label: '10,000' },
                  { tokens: 15000, x: 702.5, label: '15,000' },
                  { tokens: 20000, x: 860, label: '20,000 tokens' }
                ].map((tick, idx) => (
                  <g key={idx}>
                    <line 
                      x1={tick.x} 
                      y1={24} 
                      x2={tick.x} 
                      y2={180} 
                      stroke="#F3F4F6" 
                      strokeWidth="1" 
                      strokeDasharray="2 3" 
                    />
                    <text 
                      x={tick.x} 
                      y={198} 
                      textAnchor="middle" 
                      fill="#888888" 
                      fontSize="11" 
                      fontWeight="400"
                      fontFamily="PolySans Mono, monospace"
                    >
                      {tick.label}
                    </text>
                  </g>
                ))}

                {/* Row 1: Standard Code Reading */}
                <g>
                  <text x="215" y="47" textAnchor="end" fill="#111111" fontSize="12.5" fontWeight="450" fontFamily="PolySans, sans-serif">
                    Standard Code Reading
                  </text>
                  <text x="215" y="62" textAnchor="end" fill="#888888" fontSize="11" fontWeight="400" fontFamily="PolySans, sans-serif">
                    Full file dumps
                  </text>
                  <rect x="230" y="41" width="540.0" height="22" rx="2" fill="#475569" />
                  <line 
                    x1="770.0" 
                    y1="41" 
                    x2="770.0" 
                    y2="180" 
                    stroke="#94A3B8" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                  />
                  <text x="782" y="56" textAnchor="start" fill="#334155" fontSize="11.5" fontWeight="400" fontFamily="PolySans Mono, monospace">
                    17,144 tokens (100% baseline)
                  </text>
                </g>

                {/* Row 2: M5 Context Engine */}
                <g>
                  <text x="215" y="97" textAnchor="end" fill="#B92B23" fontSize="12.5" fontWeight="500" fontFamily="PolySans, sans-serif">
                    M5 Context Engine
                  </text>
                  <text x="215" y="112" textAnchor="end" fill="#888888" fontSize="11" fontWeight="400" fontFamily="PolySans, sans-serif">
                    AST syntax graph slices
                  </text>
                  <rect x="230" y="91" width="119.3" height="22" rx="2" fill="#B92B23" />
                  <line 
                    x1="349.3" 
                    y1="91" 
                    x2="349.3" 
                    y2="180" 
                    stroke="#B92B23" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                  />
                  <text x="361" y="106" textAnchor="start" fill="#B92B23" fontSize="11.5" fontWeight="500" fontFamily="PolySans Mono, monospace">
                    3,788 tokens (-78% reduction)
                  </text>
                </g>

                {/* Row 3: Plain Vector Search */}
                <g>
                  <text x="215" y="147" textAnchor="end" fill="#111111" fontSize="12.5" fontWeight="450" fontFamily="PolySans, sans-serif">
                    Plain Vector Search
                  </text>
                  <text x="215" y="162" textAnchor="end" fill="#888888" fontSize="11" fontWeight="400" fontFamily="PolySans, sans-serif">
                    50-line arbitrary chunks
                  </text>
                  <rect x="230" y="141" width="43.1" height="22" rx="2" fill="#D48B38" />
                  <line 
                    x1="273.1" 
                    y1="141" 
                    x2="273.1" 
                    y2="180" 
                    stroke="#D48B38" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                  />
                  <text x="285" y="156" textAnchor="start" fill="#B45309" fontSize="11.5" fontWeight="400" fontFamily="PolySans Mono, monospace">
                    1,369 tokens (Lossy)
                  </text>
                </g>

                {/* Baseline Ruler */}
                <line x1="230" y1="180" x2="860" y2="180" stroke="#D1D5DB" strokeWidth="1" />

                {/* Numeric Indicators */}
                <text x="273.1" y="218" textAnchor="middle" fill="#D48B38" fontSize="11" fontWeight="400" fontFamily="PolySans Mono, monospace">
                  1,369
                </text>
                <text x="349.3" y="218" textAnchor="middle" fill="#B92B23" fontSize="11" fontWeight="500" fontFamily="PolySans Mono, monospace">
                  3,788
                </text>
                <text x="770.0" y="218" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="400" fontFamily="PolySans Mono, monospace">
                  17,144
                </text>
              </svg>
            </div>

            {/* 3-Column Editorial Breakdown Cards */}
            <div className="benchmark-editorial-grid">
              {/* Card 1: Standard */}
              <div className="benchmark-editorial-card">
                <div className="benchmark-editorial-card-header">
                  <span style={{ width: '12px', height: '2px', background: '#475569' }} />
                  <span className="benchmark-editorial-card-title">Standard Code Reading</span>
                </div>
                <div className="benchmark-editorial-metric">
                  17,144 tokens <span className="benchmark-editorial-metric-tag" style={{ color: '#777777' }}>(Baseline)</span>
                </div>
                <p className="benchmark-editorial-desc">
                  Agents dump full files into context. 80%+ of prompt space is wasted on imports, comments, and irrelevant boilerplate.
                </p>
              </div>

              {/* Card 2: Plain Vector */}
              <div className="benchmark-editorial-card">
                <div className="benchmark-editorial-card-header">
                  <span style={{ width: '12px', height: '2px', background: '#D48B38' }} />
                  <span className="benchmark-editorial-card-title">Plain Vector Search</span>
                </div>
                <div className="benchmark-editorial-metric">
                  1,369 tokens <span className="benchmark-editorial-metric-tag" style={{ color: '#888888' }}>(Lossy)</span>
                </div>
                <p className="benchmark-editorial-desc">
                  Blindly slices code into 50-line snippets. Cuts through functions midway and misses caller chains, triggering hallucinations.
                </p>
              </div>

              {/* Card 3: M5 AST Engine */}
              <div className="benchmark-editorial-card">
                <div className="benchmark-editorial-card-header">
                  <span style={{ width: '12px', height: '2px', background: '#B92B23' }} />
                  <span className="benchmark-editorial-card-title-red">M5 AST Syntax Engine</span>
                </div>
                <div className="benchmark-editorial-metric">
                  3,788 tokens <span className="benchmark-editorial-metric-tag" style={{ color: '#B92B23' }}>(-78% Reduction)</span>
                </div>
                <p className="benchmark-editorial-desc" style={{ color: '#555555' }}>
                  Deterministic Tree-sitter AST syntax graphs. Extracts only the target function, verified callers, and companion test cases.
                </p>
              </div>
            </div>

            {/* Takeaway note */}
            <div className="benchmark-takeaway-box">
              <p className="benchmark-takeaway-text">
                <strong style={{ fontWeight: 500, color: '#111111' }}>Key Takeaway:</strong> M5 trims over 13,356 unnecessary tokens on every query. The LLM stays focused on actual logic rather than parsing boilerplate files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Visual Speed / Latency Meter ──────────────────────────────── */}
      <section className="benchmark-speed-section">
        <div className="m5-container">
          <div className="benchmark-section-header">
            <span className="benchmark-section-badge">
              AGENT VELOCITY
            </span>
            <h2 className="m5-values-title">
              Time to Context: Zero Latency Lag
            </h2>
            <p className="m5-values-sub benchmark-section-sub">
              AI agents perform multiple tool lookups in a single turn. Slow retrieval breaks developer momentum.
            </p>
          </div>

          <div className="benchmark-speed-grid">
            {/* Speed Card 1 */}
            <div className="benchmark-speed-card">
              <div className="benchmark-speed-card-title">
                Traditional Vector Search
              </div>
              <div className="benchmark-speed-metric">
                47.4 sec
              </div>
              <p className="benchmark-speed-desc">
                CPU embeddings stall background threads. Developers wait almost a minute for context.
              </p>
            </div>

            {/* Speed Card 2 */}
            <div className="benchmark-speed-card">
              <div className="benchmark-speed-card-title">
                Keyword File Grep
              </div>
              <div className="benchmark-speed-metric">
                162 ms
              </div>
              <p className="benchmark-speed-desc">
                Fast regex matching, but floods the prompt with thousands of lines of irrelevant file noise.
              </p>
            </div>

            {/* Speed Card 3 */}
            <div className="benchmark-speed-card">
              <div className="benchmark-speed-card-title-red">
                M5 AST Graph Engine
              </div>
              <div className="benchmark-speed-metric">
                33 ms
              </div>
              <p className="benchmark-speed-desc" style={{ color: '#555555' }}>
                Instant SQLite B-tree lookups. Context arrives instantaneously during agent tool reasoning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Interactive ROI & Cost Savings Calculator ──────────────────── */}
      <section className="benchmark-calc-section">
        <div className="m5-container">
          <div className="benchmark-calc-header">
            <span className="benchmark-section-badge-light">
              COST IMPACT CALCULATOR
            </span>
            <h2 className="m5-values-title-white benchmark-calc-title">
              Estimate Your Team's Monthly Savings
            </h2>
            <p className="benchmark-calc-subtitle">
              See how cutting 78% of repetitive code context translates directly into lower LLM API bills.
            </p>

            {/* Preset Selector */}
            <div className="benchmark-preset-pills">
              {Object.keys(presets).map((key) => (
                <button
                  key={key}
                  onClick={() => setTeamSize(key)}
                  className={`benchmark-preset-pill-btn ${teamSize === key ? 'active' : 'inactive'}`}
                >
                  {presets[key].label}
                </button>
              ))}
            </div>

            {/* Model Tier Selector */}
            <div className="benchmark-model-tier-row">
              <span className="benchmark-model-tier-label">
                Agent Model Stack:
              </span>
              <div className="benchmark-model-tier-pills">
                {Object.keys(modelTiers).map((tierKey) => (
                  <button
                    key={tierKey}
                    onClick={() => setModelTier(tierKey)}
                    className={`benchmark-model-tier-btn ${modelTier === tierKey ? 'active' : 'inactive'}`}
                  >
                    {modelTiers[tierKey].label} (${modelTiers[tierKey].rate}/M)
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator Visual Display */}
          <div className="benchmark-calc-box">
            <div className="benchmark-calc-metrics-grid">
              {/* Monthly Queries */}
              <div>
                <div className="benchmark-calc-metric-header">
                  ESTIMATED QUERIES
                </div>
                <div className="benchmark-calc-metric-value">
                  {activePreset.monthlyQueries.toLocaleString()} / mo
                </div>
                <div className="benchmark-calc-metric-desc">
                  {activePreset.desc}
                </div>
              </div>

              {/* Tokens Saved */}
              <div>
                <div className="benchmark-calc-metric-header">
                  TOKENS ELIMINATED
                </div>
                <div className="benchmark-calc-metric-value cyan">
                  {savedTokensM}M tokens
                </div>
                <div className="benchmark-calc-metric-desc cyan">
                  78% prompt context reduction
                </div>
              </div>

              {/* Net Monthly Dollar Savings */}
              <div>
                <div className="benchmark-calc-metric-header">
                  ESTIMATED SAVINGS
                </div>
                <div className="benchmark-calc-metric-value green">
                  ${monthlySavings.toLocaleString()} / mo
                </div>
                <div className="benchmark-calc-metric-desc green">
                  ~${annualSavings.toLocaleString()} saved annually
                </div>
              </div>
            </div>

            <div className="benchmark-calc-footer">
              <button
                className="m5-hero-btn-white benchmark-calc-btn"
                onClick={() => setActivePage('try')}
              >
                <span>Start Saving Token Costs</span>
                <ArrowRight size={15} />
              </button>
              <div className="benchmark-calc-footnote">
                Calculated using {modelTiers[modelTier].desc}, active agent loops, and benchmarked 78% AST retrieval efficiency.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Simple 3-Column Visual Comparison ─────────────────────────── */}
      <section className="benchmark-approaches-section">
        <div className="m5-container">
          <div className="benchmark-section-header">
            <span className="benchmark-section-badge">
              HOW IT WORKS
            </span>
            <h2 className="m5-values-title">
              Why AST Graphs Outperform Plain Searches
            </h2>
            <p className="m5-values-sub benchmark-section-sub">
              Comparing how different context retrieval methods feed information to your LLM.
            </p>
          </div>

          <div className="benchmark-approaches-grid">
            {/* Approach 1 */}
            <div className="benchmark-approach-card">
              <div className="benchmark-approach-label">
                APPROACH 1
              </div>
              <h3 className="benchmark-approach-title">
                Full-File Grep
              </h3>
              <p className="benchmark-approach-desc">
                Opens complete files where a keyword matches. Dumps hundreds of lines of boilerplate that the LLM doesn't need.
              </p>
              <ul className="benchmark-approach-list">
                <li className="benchmark-approach-item"><span className="benchmark-bullet-dash">—</span> Consumes 17,000+ tokens</li>
                <li className="benchmark-approach-item"><span className="benchmark-bullet-dash">—</span> Exhausts agent context</li>
                <li className="benchmark-approach-item"><span className="benchmark-bullet-dash">—</span> Multi-file blindspots</li>
              </ul>
            </div>

            {/* Approach 2 */}
            <div className="benchmark-approach-card">
              <div className="benchmark-approach-label">
                APPROACH 2
              </div>
              <h3 className="benchmark-approach-title">
                Plain Vector Search
              </h3>
              <p className="benchmark-approach-desc">
                Splits code into arbitrary 50-line chunks. Slices through functions midway and loses caller hierarchies.
              </p>
              <ul className="benchmark-approach-list">
                <li className="benchmark-approach-item"><span className="benchmark-bullet-dash">—</span> Misses function callers</li>
                <li className="benchmark-approach-item"><span className="benchmark-bullet-dash">—</span> 45+ second CPU latency</li>
                <li className="benchmark-approach-item"><span className="benchmark-bullet-dash">—</span> Syntax hallucinations</li>
              </ul>
            </div>

            {/* Approach 3 */}
            <div className="benchmark-approach-card">
              <div className="benchmark-approach-label-red">
                APPROACH 3 (M5)
              </div>
              <h3 className="benchmark-approach-title">
                AST Syntax Graph
              </h3>
              <p className="benchmark-approach-desc" style={{ color: '#555555' }}>
                Parses the exact code structure. Provides the target function, its callers, and companion test cases.
              </p>
              <ul className="benchmark-approach-list">
                <li className="benchmark-approach-item highlight">
                  <span className="benchmark-bullet-check">✓</span> -78% Token Reduction
                </li>
                <li className="benchmark-approach-item highlight">
                  <span className="benchmark-bullet-check">✓</span> 33ms Instant Retrieval
                </li>
                <li className="benchmark-approach-item highlight">
                  <span className="benchmark-bullet-check">✓</span> Deterministic Ground Truth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Call To Action Banner ─────────────────────────────────────── */}
      <section className="benchmark-cta-section">
        <div className="m5-container">
          <div className="m5-about-cta-card">
            <h2 className="m5-about-cta-title">
              Stop paying your LLMs to read irrelevant code.
            </h2>
            <p className="m5-about-cta-desc">
              Connect M5 to Cursor, Claude Code, or VS Code in under 60 seconds. Free for solo developers.
            </p>
            <div className="benchmark-cta-actions">
              <button
                className="m5-hero-btn-primary benchmark-cta-btn-primary"
                onClick={() => setActivePage('try')}
              >
                <span>Try M5 Free</span>
                <ArrowRight size={16} />
              </button>
              <button
                className="m5-hero-btn-primary benchmark-cta-btn-dark"
                onClick={openDemoModal}
              >
                <span>Request Enterprise Pilot</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
