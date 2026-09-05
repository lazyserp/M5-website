import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, XCircle, Terminal, Shield, Cpu, Layers, GitBranch, GitPullRequest, Check, Server, Laptop, Cloud, Code2, BarChart2 } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

export default function HomePage({ setActivePage, openDemoModal }) {
  const [activeTab, setActiveTab] = useState('cursor');

  return (
    <div className="m5-page-root">
      {/* ── 1. Hero Section (Deep Burgundy / Crimson Grain Radial) ─────────── */}
      <section className="m5-about-hero">
        <div className="m5-hero-inner">
          <h1 className="m5-hero-title">
            Save your AI token cost
          </h1>

          <div className="m5-hero-subtitle">
            <p>
              M5 supplies the context. Your AI produces the truth.
            </p>
          </div>

          {/* Hero Action Buttons */}
          <div className="m5-hero-actions" style={{ marginTop: '16px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="m5-hero-btn-white"
              onClick={() => setActivePage('try')}
            >
              <span>Try M5 Free</span>
              <ArrowRight size={16} />
            </button>

            <button
              className="m5-hero-btn-glass"
              onClick={() => setActivePage('benchmarks')}
            >
              <span>Explore Benchmarks</span>
              
            </button>

            <button
              className="m5-hero-btn-glass"
              onClick={openDemoModal}
            >
              <span>Request Access</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. 6-Column Feature Cards ─────────────────────────────────────── */}
      <section className="m5-features-section">
        <div className="m5-container">
          <h2 className="m5-features-title">
           Stop paying your LLMs to read <span style={{ fontStyle: 'italic', fontWeight: 300 }}>irrelevant code.</span>
          </h2>

          <div className="m5-three-cards-grid">
            {/* Card 1: Token Savings */}
            <div className="m5-three-card">
              <div className="m5-three-card-header">
                <span className="m5-three-card-title">75%+ Token Savings</span>
                <span style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '13px', color: '#B92B23', fontWeight: 600 }}>01</span>
              </div>
              <p className="m5-three-card-desc">
                Instead of dumping entire files into prompts, M5 gives your LLM only the exact code it needs , cutting token usage and cloud API costs by over 75%.
              </p>
            </div>

            {/* Card 2: Fast Indexing */}
            <div className="m5-three-card">
              <div className="m5-three-card-header">
                <span className="m5-three-card-title">&lt;100ms File Indexing</span>
                <span style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '13px', color: '#B92B23', fontWeight: 600 }}>02</span>
              </div>
              <p className="m5-three-card-desc">
                Incremental tree-sitter AST parsing updates your codebase graph instantly on every file save and Git commit, eliminating long background re-indexing delays.
              </p>
            </div>

            {/* Card 3: Fast Retrieval */}
            <div className="m5-three-card">
              <div className="m5-three-card-header">
                <span className="m5-three-card-title">Sub-15ms Fast Retrieval</span>
                <span style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '13px', color: '#B92B23', fontWeight: 600 }}>03</span>
              </div>
              <p className="m5-three-card-desc">
                Hybrid Reciprocal Rank Fusion (RRF) fuses lexical BM25 code symbols with dense semantic vectors to deliver pinpoint repository context in under 15 milliseconds.
              </p>
            </div>

            {/* Card 4: Accurate Context */}
            <div className="m5-three-card">
              <div className="m5-three-card-header">
                <span className="m5-three-card-title">Accurate Code Context</span>
                <span style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '13px', color: '#B92B23', fontWeight: 600 }}>04</span>
              </div>
              <p className="m5-three-card-desc">
                Deterministic AST syntax resolution traverses multi-hop caller chains and companion test suites, providing AI agents verified ground truth with zero hallucinations.
              </p>
            </div>

            {/* Card 5: Security / Code Control */}
            <div className="m5-three-card">
              <div className="m5-three-card-header">
                <span className="m5-three-card-title">100% Code in Your Control</span>
                <span style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '13px', color: '#B92B23', fontWeight: 600 }}>05</span>
              </div>
              <p className="m5-three-card-desc">
                Context-only and air-gap compliant. Zero file writes, zero shell execution, and your source code never leaves your private perimeter or trains third-party models.
              </p>
            </div>

            {/* Card 6: Universal Setup */}
            <div className="m5-three-card">
              <div className="m5-three-card-header">
                <span className="m5-three-card-title">Universal 1-Click Setup</span>
                <span style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '13px', color: '#B92B23', fontWeight: 600 }}>06</span>
              </div>
              <p className="m5-three-card-desc">
                Native Model Context Protocol integrates out of the box with Cursor IDE, Claude Code, Codex, VS Code, Antigravity and other Agentic IDEs with zero setup friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 16+ Languages Supported (Polyglot Monorepo Support) ────────── */}
      <section className="m5-languages-section">
        <div className="m5-container">
          <div className="m5-languages-center-header">
            <div className="m5-languages-badge-pill">
              <span>16+ LANGUAGES SUPPORTED</span>
            </div>
            <h2 className="m5-values-title-white" style={{ marginBottom: '16px' }}>
              Deep AST intelligence across your entire stack.
            </h2>
            <p className="m5-values-sub" style={{ color: 'rgba(255, 255, 255, 0.65)', marginBottom: '0' }}>
              Native Tree-sitter AST parsing, syntax-aware chunking, and multi-file dependency resolution for all major languages.
            </p>
          </div>

          <div className="m5-languages-grid">
            {[
              { name: 'Python', ext: '.py' },
              { name: 'TypeScript', ext: '.ts, .tsx'},
              { name: 'JavaScript', ext: '.js, .jsx'},
              { name: 'Go', ext: '.go' },
              { name: 'Rust', ext: '.rs' },
              { name: 'Java', ext: '.java' },
              { name: 'C++', ext: '.cpp, .hpp' },
              { name: 'C', ext: '.c, .h' },
              { name: 'C#', ext: '.cs' },
              { name: 'Kotlin', ext: '.kt, .kts' },
              { name: 'Swift', ext: '.swift' },
              { name: 'Ruby', ext: '.rb'},
              { name: 'PHP', ext: '.php'},
              { name: 'Scala', ext: '.scala' },
              { name: 'Dart', ext: '.dart' },
              { name: 'SQL', ext: '.sql' },
            ].map((lang) => (
              <div key={lang.name} className="m5-lang-card">
                <span className="m5-lang-name">{lang.name}</span>
                <span className="m5-lang-ext">{lang.ext}</span>
                <span className="m5-lang-ast-tag">{lang.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Flexible Deployment Models (Solo, On-Premises, M5 Cloud) ───── */}
      <section className="m5-deploy-section">
        <div className="m5-container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 12px' }}>
            <span style={{ fontFamily: 'PolySans Mono, monospace', fontSize: '13px', color: '#B92B23', fontWeight: 600, letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
              DEPLOYMENT MODELS
            </span>
            <h2 className="m5-values-title" style={{ marginTop: '12px' }}>
              Deploy your way. Total control over your codebase.
            </h2>
            <p className="m5-values-sub" style={{ marginBottom: '0' }}>
              From offline solo hacking on your laptop to enterprise air-gapped VPCs and fully managed high-availability cloud clusters.
            </p>
          </div>

          <div className="m5-deploy-grid">
            {/* Model 1: Solo Local */}
            <div className="m5-deploy-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="m5-deploy-tag">01 / SOLO DEVELOPER</span>
                  <Laptop size={20} color="#B92B23" />
                </div>
                <h3 className="m5-deploy-heading">Embedded Local Engine</h3>
                <div className="m5-deploy-tagline">Solo engineers &amp; offline workflows</div>
                <p className="m5-deploy-desc">
                  Run M5 directly on your workstation with an embedded SQLite store and Tree-sitter AST parser. 100% offline with zero cloud credentials.
                </p>
              </div>

              <div>
                <ul className="m5-deploy-bullets">
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Lightweight local CLI &amp; background daemon
                  </li>
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Instant sub-millisecond local vector retrieval
                  </li>
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Zero telemetry — your code never touches the internet
                  </li>
                </ul>

                <button 
                  className="m5-hero-btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '10px 16px' }}
                  onClick={openDemoModal}
                >
                  Run Solo CLI
                </button>
              </div>
            </div>

            {/* Model 2: On-Premises & VPC */}
            <div className="m5-deploy-card" style={{ border: '2px solid #000000' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="m5-deploy-tag" style={{ color: '#000000' }}>02 / ON-PREMISES &amp; VPC</span>
                  <Server size={20} color="#000000" />
                </div>
                <h3 className="m5-deploy-heading">Air-Gapped Enterprise</h3>
                <div className="m5-deploy-tagline">Strict corporate compliance &amp; data sovereignty</div>
                <p className="m5-deploy-desc">
                  Self-host M5 within your private AWS, GCP, or Azure VPC or bare-metal Kubernetes. Engineered for air-gapped security and monorepo scale.
                </p>
              </div>

              <div>
                <ul className="m5-deploy-bullets">
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Secure code transmission.
                  </li>
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Connects with internal Qdrant, Redis &amp; Git servers
                  </li>
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Complete audit trails via Langfuse &amp; OpenTelemetry
                  </li>
                </ul>

                <button 
                  className="m5-hero-btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '10px 16px', background: '#000000', color: '#FFFFFF' }}
                  onClick={openDemoModal}
                >
                  Deploy On-Premises
                </button>
              </div>
            </div>

            {/* Model 3: M5 Managed Cloud */}
            <div className="m5-deploy-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="m5-deploy-tag">03 / M5 MANAGED CLOUD</span>
                  <Cloud size={20} color="#B92B23" />
                </div>
                <h3 className="m5-deploy-heading">High-Performance SaaS</h3>
                <div className="m5-deploy-tagline">Zero infrastructure ops &amp; instant setup</div>
                <p className="m5-deploy-desc">
                  Production-grade cloud deployment managed 24/7 by M5. Connect GitHub or GitLab in 1 click, get automated AST indexing on every PR, and sub-15ms retrieval worldwide.
                </p>
              </div>

              <div>
                <ul className="m5-deploy-bullets">
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Automated PR webhooks with incremental diff indexing
                  </li>
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Multi-tenant isolated namespaces with 99.99% uptime
                  </li>
                  <li className="m5-deploy-bullet">
                    <span>✓</span> Sub-15ms worldwide API with continuous backups
                  </li>
                </ul>

                <button 
                  className="m5-hero-btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '10px 16px' }}
                  onClick={openDemoModal}
                >
                  Start Cloud Deployment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. "Our Values" 4-Card Grid ──────────────────────────────────── */}
      <section className="m5-values-section">
        <div className="m5-container">
          <h2 className="m5-values-title">Zero code leaves your building.<br></br> 100% intelligence enters your IDE.</h2>
          <p className="m5-values-sub">
            We optimize for context correctness first, token efficiency second, scale always.
          </p>

          <div className="m5-values-grid">
            <div className="m5-value-card">
              <span className="m5-value-num">01 / DETERMINISM</span>
              <div>
                <h4 className="m5-value-heading">Deterministic over Probabilistic</h4>
                <p className="m5-value-desc">
                  Fuzzy vector searches hallucinate on code syntax. M5 resolves exact AST syntax trees and call hierarchies.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">02 / INTEGRITY</span>
              <div>
                <h4 className="m5-value-heading">Zero File-System Mutation</h4>
                <p className="m5-value-desc">
                  Context-only operation. Zero file writes, zero shell execution, and complete isolation from production repositories.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">03 / VELOCITY</span>
              <div>
                <h4 className="m5-value-heading">Milliseconds Matter</h4>
                <p className="m5-value-desc">
                  Sub-15ms median retrieval latency ensures autonomous developer agent workflows feel instantaneous and effortless.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">04 / AUDITABILITY</span>
              <div>
                <h4 className="m5-value-heading">Auditable End-to-End</h4>
                <p className="m5-value-desc">
                  Every AST chunk served is logged with OpenTelemetry traces and Langfuse observability for complete compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
