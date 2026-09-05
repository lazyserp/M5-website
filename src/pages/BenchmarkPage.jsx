import React, { useState } from 'react';
import { 
  TrendingDown, 
  Zap, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  DollarSign, 
  Clock, 
  Cpu, 
  BarChart3,
  HelpCircle
} from 'lucide-react';

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
      <section className="m5-about-hero" style={{ padding: '80px 24px 60px' }}>
        <div className="m5-hero-inner">
          <div 
            className="m5-languages-badge-pill" 
            style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              borderColor: 'rgba(255, 255, 255, 0.25)', 
              color: '#FFFFFF', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px',
              padding: '6px 16px',
              marginBottom: '8px'
            }}
          >
            <BarChart3 size={13} color="#FFB4AB" />
            <span style={{ letterSpacing: '0.04em' }}>EMPIRICAL RESULTS &amp; COST ANALYSIS</span>
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

          <div className="m5-hero-actions" style={{ marginTop: '16px', display: 'flex', gap: '14px', justifyContent: 'center' }}>
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
      <section style={{ background: '#FFFFFF', padding: '60px 0 20px' }}>
        <div className="m5-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '-100px', position: 'relative', zIndex: 3 }}>
            {/* Card 1 */}
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', borderRadius: '14px', padding: '32px 28px', boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'PolySans, sans-serif', fontSize: '12px', color: '#B92B23', fontWeight: 500, letterSpacing: '0.04em' }}>01 / TOKEN REDUCTION</span>
                <TrendingDown size={18} color="#B92B23" />
              </div>
              <div style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '44px', fontWeight: 600, color: '#000000', lineHeight: 1, marginBottom: '10px' }}>
                -78%
              </div>
              <p style={{ fontFamily: 'PolySans, sans-serif', fontSize: '14px', color: '#666666', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                Cuts prompt token bloat by ~78% compared to dumping full files into agent context windows.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', borderRadius: '14px', padding: '32px 28px', boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'PolySans, sans-serif', fontSize: '12px', color: '#B92B23', fontWeight: 500, letterSpacing: '0.04em' }}>02 / INSTANT SPEED</span>
                <Zap size={18} color="#B92B23" />
              </div>
              <div style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '44px', fontWeight: 600, color: '#000000', lineHeight: 1, marginBottom: '10px' }}>
                33 ms
              </div>
              <p style={{ fontFamily: 'PolySans, sans-serif', fontSize: '14px', color: '#666666', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                Sub-second AST index query time. No waiting 40+ seconds for slow CPU vector embeddings.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{ background: '#FFFFFF', border: '1px solid rgba(0, 0, 0, 0.08)', borderRadius: '14px', padding: '32px 28px', boxShadow: '0 12px 30px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontFamily: 'PolySans, sans-serif', fontSize: '12px', color: '#B92B23', fontWeight: 500, letterSpacing: '0.04em' }}>03 / GROUND TRUTH</span>
                <ShieldCheck size={18} color="#B92B23" />
              </div>
              <div style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '44px', fontWeight: 600, color: '#000000', lineHeight: 1, marginBottom: '10px' }}>
                100%
              </div>
              <p style={{ fontFamily: 'PolySans, sans-serif', fontSize: '14px', color: '#666666', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                Deterministic syntax trees. The model sees exact caller hierarchies and type definitions, not guesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Visual Comparison Chart: Token Consumption ────────────────── */}
      <section style={{ background: '#FFFFFF', padding: '60px 0 40px' }}>
        <div className="m5-container">
          <div style={{ maxWidth: '840px', margin: '0 auto 40px', textAlign: 'center' }}>
            <span style={{ fontFamily: 'PolySans, sans-serif', fontSize: '12px', color: '#B92B23', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              VISUAL COMPARISON
            </span>
            <h2 className="m5-values-title" style={{ marginTop: '12px', marginBottom: '12px' }}>
              Token Consumption per Agent Question
            </h2>
            <p className="m5-values-sub" style={{ margin: '0 auto', color: '#666666', fontWeight: 400 }}>
              Benchmarking prompt context size across all 3 code retrieval methods (0 to 20,000 tokens).
            </p>
          </div>

          <div style={{ background: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', padding: '36px 0', maxWidth: '960px', margin: '0 auto' }}>
            
            {/* Graph Legend - Clean Swatches, No Dots, No Emojis */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '28px', paddingBottom: '16px', borderBottom: '1px solid #F3F4F6' }}>
              <div>
                <span style={{ fontFamily: 'PolySans, sans-serif', fontSize: '11px', color: '#888888', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 400 }}>
                  Context Benchmark
                </span>
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#111111', marginTop: '2px' }}>
                  Prompt Footprint per Search
                </div>
              </div>

              {/* Theme-matching swatches: Slate (#475569), Gold (#D48B38), Brand Red (#B92B23) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#475569', fontWeight: 400 }}>
                  <span style={{ width: '16px', height: '3px', background: '#475569', borderRadius: '1px' }} />
                  <span>Standard Code Reading (17,144)</span>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#D48B38', fontWeight: 400 }}>
                  <span style={{ width: '16px', height: '3px', background: '#D48B38', borderRadius: '1px' }} />
                  <span>Plain Vector Search (1,369)</span>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#B92B23', fontWeight: 500 }}>
                  <span style={{ width: '16px', height: '3px', background: '#B92B23', borderRadius: '1px' }} />
                  <span>M5 AST Context Engine (3,788)</span>
                </div>
              </div>
            </div>

            {/* ── Normal Cartesian Graph (Clean, Standard, Authentic) ──────────── */}
            <div style={{ width: '100%', overflowX: 'auto', padding: '10px 0 16px' }}>
              <svg 
                viewBox="0 0 920 230" 
                style={{ width: '100%', minWidth: '720px', height: 'auto', display: 'block', overflow: 'visible' }}
              >
                {/* Vertical Gridlines (0, 5k, 10k, 15k, 20k tokens) */}
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

                {/* ── Row 1: Standard Code Reading (y = 38) ──────────────────── */}
                <g>
                  {/* Category Label on Left Axis */}
                  <text x="215" y="47" textAnchor="end" fill="#111111" fontSize="12.5" fontWeight="450" fontFamily="PolySans, sans-serif">
                    Standard Code Reading
                  </text>
                  <text x="215" y="62" textAnchor="end" fill="#888888" fontSize="11" fontWeight="400" fontFamily="PolySans, sans-serif">
                    Full file dumps
                  </text>

                  {/* Solid Bar */}
                  <rect x="230" y="41" width="540.0" height="22" rx="2" fill="#475569" />

                  {/* Vertical Dotted Reference Line down to Axis */}
                  <line 
                    x1="770.0" 
                    y1="41" 
                    x2="770.0" 
                    y2="180" 
                    stroke="#94A3B8" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                  />

                  {/* Value Label */}
                  <text x="782" y="56" textAnchor="start" fill="#334155" fontSize="11.5" fontWeight="400" fontFamily="PolySans Mono, monospace">
                    17,144 tokens (100% baseline)
                  </text>
                </g>

                {/* ── Row 2: M5 Context Engine (y = 88) ──────────────────────── */}
                <g>
                  {/* Category Label on Left Axis */}
                  <text x="215" y="97" textAnchor="end" fill="#B92B23" fontSize="12.5" fontWeight="500" fontFamily="PolySans, sans-serif">
                    M5 Context Engine
                  </text>
                  <text x="215" y="112" textAnchor="end" fill="#888888" fontSize="11" fontWeight="400" fontFamily="PolySans, sans-serif">
                    AST syntax graph slices
                  </text>

                  {/* Solid Bar */}
                  <rect x="230" y="91" width="119.3" height="22" rx="2" fill="#B92B23" />

                  {/* Vertical Dotted Reference Line down to Axis */}
                  <line 
                    x1="349.3" 
                    y1="91" 
                    x2="349.3" 
                    y2="180" 
                    stroke="#B92B23" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                  />

                  {/* Value Label */}
                  <text x="361" y="106" textAnchor="start" fill="#B92B23" fontSize="11.5" fontWeight="500" fontFamily="PolySans Mono, monospace">
                    3,788 tokens (-78% reduction)
                  </text>
                </g>

                {/* ── Row 3: Plain Vector Search (y = 138) ────────────────────── */}
                <g>
                  {/* Category Label on Left Axis */}
                  <text x="215" y="147" textAnchor="end" fill="#111111" fontSize="12.5" fontWeight="450" fontFamily="PolySans, sans-serif">
                    Plain Vector Search
                  </text>
                  <text x="215" y="162" textAnchor="end" fill="#888888" fontSize="11" fontWeight="400" fontFamily="PolySans, sans-serif">
                    50-line arbitrary chunks
                  </text>

                  {/* Solid Bar */}
                  <rect x="230" y="141" width="43.1" height="22" rx="2" fill="#D48B38" />

                  {/* Vertical Dotted Reference Line down to Axis */}
                  <line 
                    x1="273.1" 
                    y1="141" 
                    x2="273.1" 
                    y2="180" 
                    stroke="#D48B38" 
                    strokeWidth="1.5" 
                    strokeDasharray="3 3" 
                  />

                  {/* Value Label */}
                  <text x="285" y="156" textAnchor="start" fill="#B45309" fontSize="11.5" fontWeight="400" fontFamily="PolySans Mono, monospace">
                    1,369 tokens (Lossy)
                  </text>
                </g>

                {/* Baseline Ruler */}
                <line x1="230" y1="180" x2="860" y2="180" stroke="#D1D5DB" strokeWidth="1" />

                {/* Clean Numeric Indicators at the Dotted Line drop points */}
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

            {/* 3-Column Clean Editorial Breakdown Cards (No side borders) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '24px', borderTop: '1px solid #F3F4F6', paddingTop: '24px' }}>
              {/* Card 1: Standard */}
              <div style={{ background: '#F6F6F6', border: 'none', borderRadius: '4px', padding: '24px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ width: '12px', height: '2px', background: '#475569' }} />
                  <span style={{ fontWeight: 450, fontSize: '13px', color: '#111111' }}>Standard Code Reading</span>
                </div>
                <div style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '16px', fontWeight: 600, color: '#000000', marginBottom: '8px' }}>
                  17,144 tokens <span style={{ fontSize: '11px', color: '#777777', fontWeight: 400 }}>(Baseline)</span>
                </div>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                  Agents dump full files into context. 80%+ of prompt space is wasted on imports, comments, and irrelevant boilerplate.
                </p>
              </div>

              {/* Card 2: Plain Vector */}
              <div style={{ background: '#F6F6F6', border: 'none', borderRadius: '4px', padding: '24px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ width: '12px', height: '2px', background: '#D48B38' }} />
                  <span style={{ fontWeight: 450, fontSize: '13px', color: '#111111' }}>Plain Vector Search</span>
                </div>
                <div style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '16px', fontWeight: 600, color: '#000000', marginBottom: '8px' }}>
                  1,369 tokens <span style={{ fontSize: '11px', color: '#888888', fontWeight: 400 }}>(Lossy)</span>
                </div>
                <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                  Blindly slices code into 50-line snippets. Cuts through functions midway and misses caller chains, triggering hallucinations.
                </p>
              </div>

              {/* Card 3: M5 AST Engine */}
              <div style={{ background: '#F6F6F6', border: 'none', borderRadius: '4px', padding: '24px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ width: '12px', height: '2px', background: '#B92B23' }} />
                  <span style={{ fontWeight: 500, fontSize: '13px', color: '#B92B23' }}>M5 AST Syntax Engine</span>
                </div>
                <div style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '16px', fontWeight: 600, color: '#000000', marginBottom: '8px' }}>
                  3,788 tokens <span style={{ fontSize: '11px', color: '#B92B23', fontWeight: 400 }}>(-78% Reduction)</span>
                </div>
                <p style={{ fontSize: '13px', color: '#555555', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                  Deterministic Tree-sitter AST syntax graphs. Extracts only the target function, verified callers, and companion test cases.
                </p>
              </div>
            </div>

            {/* Takeaway note (No side borders, no dots, no emojis) */}
            <div style={{ marginTop: '20px', padding: '16px 20px', background: '#F6F6F6', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <p style={{ margin: 0, fontSize: '13px', color: '#444444', lineHeight: 1.55, fontWeight: 400 }}>
                <span style={{ fontWeight: 500, color: '#111111' }}>Key Takeaway:</span> M5 trims over 13,356 unnecessary tokens on every query. The LLM stays focused on actual logic rather than parsing boilerplate files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Visual Speed / Latency Meter ──────────────────────────────── */}
      <section style={{ background: '#FFFFFF', padding: '40px 0 60px' }}>
        <div className="m5-container">
          <div style={{ maxWidth: '840px', margin: '0 auto 40px', textAlign: 'center' }}>
            <span style={{ fontFamily: 'PolySans, sans-serif', fontSize: '12px', color: '#B92B23', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              AGENT VELOCITY
            </span>
            <h2 className="m5-values-title" style={{ marginTop: '12px', marginBottom: '12px' }}>
              Time to Context: Zero Latency Lag
            </h2>
            <p className="m5-values-sub" style={{ margin: '0 auto', color: '#666666', fontWeight: 400 }}>
              AI agents perform multiple tool lookups in a single turn. Slow retrieval breaks developer momentum.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {/* Speed Card 1 */}
            <div style={{ background: '#F6F6F6', border: 'none', borderRadius: '4px', padding: '28px 24px' }}>
              <div style={{ fontFamily: 'PolySans, sans-serif', fontSize: '13px', color: '#777777', fontWeight: 400, marginBottom: '8px' }}>
                Traditional Vector Search
              </div>
              <div style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '32px', fontWeight: 600, color: '#000000', marginBottom: '8px' }}>
                47.4 sec
              </div>
              <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                CPU embeddings stall background threads. Developers wait almost a minute for context.
              </p>
            </div>

            {/* Speed Card 2 */}
            <div style={{ background: '#F6F6F6', border: 'none', borderRadius: '4px', padding: '28px 24px' }}>
              <div style={{ fontFamily: 'PolySans, sans-serif', fontSize: '13px', color: '#777777', fontWeight: 400, marginBottom: '8px' }}>
                Keyword File Grep
              </div>
              <div style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '32px', fontWeight: 600, color: '#000000', marginBottom: '8px' }}>
                162 ms
              </div>
              <p style={{ fontSize: '13px', color: '#666666', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                Fast regex matching, but floods the prompt with thousands of lines of irrelevant file noise.
              </p>
            </div>

            {/* Speed Card 3 */}
            <div style={{ background: '#F6F6F6', border: 'none', borderRadius: '4px', padding: '28px 24px' }}>
              <div style={{ fontFamily: 'PolySans, sans-serif', fontSize: '13px', color: '#B92B23', fontWeight: 500, marginBottom: '8px' }}>
                M5 AST Graph Engine
              </div>
              <div style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '32px', fontWeight: 600, color: '#000000', marginBottom: '8px' }}>
                33 ms
              </div>
              <p style={{ fontSize: '13px', color: '#555555', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                Instant SQLite B-tree lookups. Context arrives instantaneously during agent tool reasoning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Interactive ROI & Cost Savings Calculator ──────────────────── */}
      <section style={{ background: '#0B0B0C', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="m5-container">
          <div style={{ maxWidth: '840px', margin: '0 auto 48px', textAlign: 'center' }}>
            <span style={{ fontFamily: 'PolySans, sans-serif', fontSize: '12px', color: '#FF6B64', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              COST IMPACT CALCULATOR
            </span>
            <h2 className="m5-values-title-white" style={{ marginTop: '12px', marginBottom: '14px' }}>
              Estimate Your Team's Monthly Savings
            </h2>
            <p style={{ fontFamily: 'PolySans, sans-serif', color: 'rgba(255, 255, 255, 0.65)', fontSize: '16px', margin: '0 auto', maxWidth: '640px', lineHeight: 1.55, fontWeight: 400 }}>
              See how cutting 78% of repetitive code context translates directly into lower LLM API bills.
            </p>

            {/* Preset Selector */}
            <div style={{ display: 'inline-flex', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '9999px', padding: '4px', marginTop: '28px', border: '1px solid rgba(255,255,255,0.12)', flexWrap: 'wrap', gap: '4px' }}>
              {Object.keys(presets).map((key) => (
                <button
                  key={key}
                  onClick={() => setTeamSize(key)}
                  style={{
                    background: teamSize === key ? '#B92B23' : 'transparent',
                    color: teamSize === key ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                    border: 'none',
                    padding: '7px 20px',
                    borderRadius: '9999px',
                    fontFamily: 'PolySans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 400,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {presets[key].label}
                </button>
              ))}
            </div>

            {/* Model Tier Selector (Calibrates Realistic Frontier Agent Pricing) */}
            <div style={{ marginTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', fontFamily: 'PolySans, sans-serif', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 400 }}>
                Agent Model Stack:
              </span>
              <div style={{ display: 'inline-flex', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '2px', border: '1px solid rgba(255,255,255,0.09)' }}>
                {Object.keys(modelTiers).map((tierKey) => (
                  <button
                    key={tierKey}
                    onClick={() => setModelTier(tierKey)}
                    style={{
                      background: modelTier === tierKey ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                      color: modelTier === tierKey ? '#38BDF8' : 'rgba(255, 255, 255, 0.6)',
                      border: 'none',
                      padding: '5px 14px',
                      borderRadius: '6px',
                      fontFamily: 'PolySans, sans-serif',
                      fontSize: '11.5px',
                      fontWeight: 400,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {modelTiers[tierKey].label} (${modelTiers[tierKey].rate}/M)
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator Visual Display */}
          <div style={{ maxWidth: '860px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '36px 32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', textAlign: 'center', marginBottom: '32px' }}>
              {/* Monthly Queries */}
              <div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)', fontFamily: 'PolySans, sans-serif', marginBottom: '8px', fontWeight: 400, letterSpacing: '0.06em' }}>
                  ESTIMATED QUERIES
                </div>
                <div style={{ fontSize: '28px', fontWeight: 500, fontFamily: 'PolySans Mono, monospace', color: '#FFFFFF' }}>
                  {activePreset.monthlyQueries.toLocaleString()} / mo
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '6px', fontWeight: 400, fontFamily: 'PolySans, sans-serif' }}>
                  {activePreset.desc}
                </div>
              </div>

              {/* Tokens Saved */}
              <div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)', fontFamily: 'PolySans, sans-serif', marginBottom: '8px', fontWeight: 400, letterSpacing: '0.06em' }}>
                  TOKENS ELIMINATED
                </div>
                <div style={{ fontSize: '28px', fontWeight: 500, fontFamily: 'PolySans Mono, monospace', color: '#38BDF8' }}>
                  {savedTokensM}M tokens
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(56, 189, 248, 0.85)', marginTop: '6px', fontWeight: 400, fontFamily: 'PolySans, sans-serif' }}>
                  78% prompt context reduction
                </div>
              </div>

              {/* Net Monthly Dollar Savings */}
              <div>
                <div style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.45)', fontFamily: 'PolySans, sans-serif', marginBottom: '8px', fontWeight: 400, letterSpacing: '0.06em' }}>
                  ESTIMATED SAVINGS
                </div>
                <div style={{ fontSize: '30px', fontWeight: 500, fontFamily: 'PolySans Mono, monospace', color: '#4ADE80' }}>
                  ${monthlySavings.toLocaleString()} / mo
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(74, 222, 128, 0.85)', marginTop: '6px', fontWeight: 400, fontFamily: 'PolySans, sans-serif' }}>
                  ~${annualSavings.toLocaleString()} saved annually
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '28px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '14px' }}>
              <button
                className="m5-hero-btn-white"
                style={{ padding: '12px 36px', fontSize: '14px', margin: '0 auto', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                onClick={() => setActivePage('try')}
              >
                <span>Start Saving Token Costs</span>
                <ArrowRight size={15} />
              </button>
              <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', maxWidth: '560px', fontWeight: 400, fontFamily: 'PolySans, sans-serif' }}>
                Calculated using {modelTiers[modelTier].desc}, active agent loops, and benchmarked 78% AST retrieval efficiency.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Simple 3-Column Visual Comparison (No side borders, no dots, no emojis) ─ */}
      <section style={{ background: '#FFFFFF', padding: '70px 0' }}>
        <div className="m5-container">
          <div style={{ maxWidth: '840px', margin: '0 auto 44px', textAlign: 'center' }}>
            <span style={{ fontFamily: 'PolySans, sans-serif', fontSize: '12px', color: '#B92B23', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              HOW IT WORKS
            </span>
            <h2 className="m5-values-title" style={{ marginTop: '12px' }}>
              Why AST Graphs Outperform Plain Searches
            </h2>
            <p className="m5-values-sub" style={{ margin: '0 auto', color: '#666666', fontWeight: 400 }}>
              Comparing how different context retrieval methods feed information to your LLM.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '1040px', margin: '0 auto' }}>
            {/* Approach A (No side borders) */}
            <div style={{ background: '#F6F6F6', border: 'none', borderRadius: 0, padding: '34px 28px' }}>
              <div style={{ fontFamily: 'PolySans, sans-serif', fontSize: '11.5px', color: '#777777', fontWeight: 450, marginBottom: '8px', letterSpacing: '0.04em' }}>
                APPROACH 1
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 500, color: '#111111', margin: '0 0 10px' }}>
                Full-File Grep
              </h3>
              <p style={{ fontSize: '13.5px', color: '#666666', lineHeight: 1.55, marginBottom: '22px', fontWeight: 400 }}>
                Opens complete files where a keyword matches. Dumps hundreds of lines of boilerplate that the LLM doesn't need.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#222222', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#222222', fontWeight: 400 }}><span style={{ color: '#EF4444', fontWeight: 600 }}>—</span> Consumes 17,000+ tokens</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#222222', fontWeight: 400 }}><span style={{ color: '#EF4444', fontWeight: 600 }}>—</span> Exhausts agent context</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#222222', fontWeight: 400 }}><span style={{ color: '#EF4444', fontWeight: 600 }}>—</span> Multi-file blindspots</li>
              </ul>
            </div>

            {/* Approach B (No side borders) */}
            <div style={{ background: '#F6F6F6', border: 'none', borderRadius: 0, padding: '34px 28px' }}>
              <div style={{ fontFamily: 'PolySans, sans-serif', fontSize: '11.5px', color: '#777777', fontWeight: 450, marginBottom: '8px', letterSpacing: '0.04em' }}>
                APPROACH 2
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 500, color: '#111111', margin: '0 0 10px' }}>
                Plain Vector Search
              </h3>
              <p style={{ fontSize: '13.5px', color: '#666666', lineHeight: 1.55, marginBottom: '22px', fontWeight: 400 }}>
                Splits code into arbitrary 50-line chunks. Slices through functions midway and loses caller hierarchies.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#222222', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#222222', fontWeight: 400 }}><span style={{ color: '#EF4444', fontWeight: 600 }}>—</span> Misses function callers</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#222222', fontWeight: 400 }}><span style={{ color: '#EF4444', fontWeight: 600 }}>—</span> 45+ second CPU latency</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#222222', fontWeight: 400 }}><span style={{ color: '#EF4444', fontWeight: 600 }}>—</span> Syntax hallucinations</li>
              </ul>
            </div>

            {/* Approach C (No side or top borders, visible black text) */}
            <div style={{ background: '#F6F6F6', border: 'none', borderRadius: 0, padding: '34px 28px' }}>
              <div style={{ fontFamily: 'PolySans, sans-serif', fontSize: '11.5px', color: '#B92B23', fontWeight: 500, marginBottom: '8px', letterSpacing: '0.04em' }}>
                APPROACH 3 (M5)
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 500, color: '#111111', margin: '0 0 10px' }}>
                AST Syntax Graph
              </h3>
              <p style={{ fontSize: '13.5px', color: '#555555', lineHeight: 1.55, marginBottom: '22px', fontWeight: 400 }}>
                Parses the exact code structure. Provides the target function, its callers, and companion test cases.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#111111', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111111', fontWeight: 450 }}>
                  <span style={{ color: '#B92B23', fontWeight: 600 }}>✓</span> -78% Token Reduction
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111111', fontWeight: 450 }}>
                  <span style={{ color: '#B92B23', fontWeight: 600 }}>✓</span> 33ms Instant Retrieval
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#111111', fontWeight: 450 }}>
                  <span style={{ color: '#B92B23', fontWeight: 600 }}>✓</span> Deterministic Ground Truth
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Call To Action Banner ─────────────────────────────────────── */}
      <section style={{ padding: '20px 0 90px', background: '#FFFFFF' }}>
        <div className="m5-container">
          <div className="m5-about-cta-card" style={{ marginTop: 0 }}>
            <h2 className="m5-about-cta-title">
              Stop paying your LLMs to read irrelevant code.
            </h2>
            <p className="m5-about-cta-desc">
              Connect M5 to Cursor, Claude Code, or VS Code in under 60 seconds. Free for solo developers.
            </p>
            <div className="m5-about-cta-actions" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                className="m5-hero-btn-primary"
                style={{ padding: '12px 28px', fontSize: '15px' }}
                onClick={() => setActivePage('try')}
              >
                <span>Try M5 Free</span>
                <ArrowRight size={16} />
              </button>
              <button
                className="m5-hero-btn-primary"
                style={{ padding: '12px 28px', fontSize: '15px', background: '#000000', color: '#FFFFFF' }}
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
