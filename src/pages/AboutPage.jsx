import React from 'react';
import Eyebrow from '../components/Eyebrow';
import { ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react';
import BenchmarkCharts from '../components/BenchmarkCharts';

export default function AboutPage({ setActivePage, openDemoModal }) {
  return (
    <div className="container" style={{ paddingTop: 'calc(var(--header-height) + 70px)', paddingBottom: '100px', maxWidth: '960px' }}>
      {/* ── Editorial Header ─────────────────────────────────────── */}
      <header style={{ marginBottom: '64px', maxWidth: '840px' }}>
        <Eyebrow>Product Philosophy</Eyebrow>
        <h1
          style={{
            fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
            fontWeight: 300,
            letterSpacing: '-1.8px',
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginTop: '16px',
            marginBottom: '28px'
          }}
        >
          Context is the real bottleneck in AI.
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: 1.65,
            color: 'var(--color-text-muted)',
            fontWeight: 350,
            maxWidth: '720px'
          }}
        >
          M5 is an invisible, permission-aware code context layer that plugs into tools developers already use. <span style={{ color: '#FFFFFF', fontWeight: 400 }}>M5 supplies the context; your AI produces the truth.</span>
        </p>
      </header>

      {/* ── Minimalist 3 Pillars (Editorial Flow) ─────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', borderTop: '1px solid var(--color-border)', paddingTop: '56px', maxWidth: '840px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '24px', alignItems: 'baseline' }}>
          <span style={{ fontSize: '0.85rem', color: '#52525b', fontFamily: 'var(--font-mono)' }}>01</span>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 400, color: '#FFFFFF', letterSpacing: '-0.5px', marginBottom: '12px' }}>
              The Ingestion Dilemma
            </h3>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--color-text-muted)', margin: 0 }}>
              Feeding entire repositories into LLM prompts wastes 85% of token budgets and buries the actual answer in noise. When models lack dependency context, they hallucinate imports, miss downstream callers, and produce broken code.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '24px', alignItems: 'baseline', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '48px' }}>
          <span style={{ fontSize: '0.85rem', color: '#52525b', fontFamily: 'var(--font-mono)' }}>02</span>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 400, color: '#FFFFFF', letterSpacing: '-0.5px', marginBottom: '12px' }}>
              Sub-20ms AST Precision &amp; Scalability
            </h3>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--color-text-muted)', margin: 0 }}>
              M5 builds an incremental graph of AST symbols, call hierarchies, and companion tests. When your AI asks a question, M5 returns exact line citations and commit provenance in under 20 milliseconds, holding a rock-solid 13.4 RPS plateau under heavy multi-developer concurrency.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '24px', alignItems: 'baseline', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '48px' }}>
          <span style={{ fontSize: '0.85rem', color: '#52525b', fontFamily: 'var(--font-mono)' }}>03</span>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 400, color: '#FFFFFF', letterSpacing: '-0.5px', marginBottom: '12px' }}>
              Air-Gapped &amp; Safe by Default
            </h3>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--color-text-muted)', margin: 0 }}>
              M5 is context-only and read-only. It runs completely inside your private VPC perimeter. Zero code leaves your infrastructure, and M5 cannot write files or execute shell commands.
            </p>
          </div>
        </div>
      </div>

      {/* ── Empirical Load Testing Benchmarks ─────────────────────────────── */}
      <div style={{ marginTop: '72px', borderTop: '1px solid var(--color-border)', paddingTop: '56px' }}>
        <BenchmarkCharts />
      </div>

      {/* ── Actions ──────────────────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid var(--color-border)', marginTop: '48px', paddingTop: '48px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button className="btn btn-primary" onClick={openDemoModal}>
          <span>Request Demo</span>
          <ArrowRight size={14} />
        </button>
        <button className="btn btn-secondary" onClick={() => setActivePage('docs')}>
          <span>Read Documentation</span>
        </button>
      </div>
    </div>
  );
}

