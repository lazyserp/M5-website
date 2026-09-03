import React, { useState } from 'react';
import { Layers, GitBranch, GitPullRequest, CheckCircle2, Terminal, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export default function StickyArchitecture({ openDemoModal }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: '01',
      tag: 'AST HYBRID RRF RETRIEVAL',
      title: 'Syntax-aware chunking with Reciprocal Rank Fusion.',
      subtitle: 'Raw vectors miss exact symbols. BM25 misses semantic intent. M5 fuses both.',
      description: 'Traditional embeddings treat code like plain prose, splitting functions in half and confusing variable names. M5 parses the language Abstract Syntax Tree (AST) directly, preserving semantic boundaries and fusing exact keyword tokens with dense embeddings in sub-15ms.',
      bullets: [
        'Tree-sitter native parsing across 24+ programming languages',
        'Hybrid Reciprocal Rank Fusion (RRF) over BM25 + Qdrant vectors',
        'Zero token truncation or mid-scope function splitting'
      ],
      previewType: 'code-ast',
      metric: '99.4%',
      metricLabel: 'Symbol Recall Precision'
    },
    {
      id: '02',
      tag: 'MULTI-HOP DEPENDENCY GRAPH',
      title: 'Context beyond the file boundary.',
      subtitle: 'Functions do not live in isolation. Neither should your LLM context.',
      description: 'When an agent inspects a function, M5 traverses the AST dependency graph in real time. It automatically packages 1-hop and 2-hop caller chains, class inheritance hierarchies, and companion unit test suites into a single context payload.',
      bullets: [
        'Automatic cross-file call hierarchy resolution',
        'Zero prompt bloat: only referenced signatures and interface contracts',
        'Instant discovery of companion test fixtures and mock models'
      ],
      previewType: 'graph',
      metric: '2-Hop',
      metricLabel: 'Deep Call-Graph Traversal'
    },
    {
      id: '03',
      tag: 'INCREMENTAL GIT CI INDEXING',
      title: 'Indexes changed diffs in milliseconds, not hours.',
      subtitle: 'Continuous code context without re-indexing whole monorepos.',
      description: 'Re-indexing millions of lines of code on every commit is expensive and sluggish. M5 hooks directly into your Git PR lifecycle, indexing only modified AST nodes and updating dependency edges incrementally.',
      bullets: [
        'Save >95% CI compute time compared to full-repo vectorizers',
        'Automatic branch isolation and ephemeral staging preview contexts',
        'Read-only security model: zero repo mutation, audited via OpenTelemetry'
      ],
      previewType: 'ci-pipeline',
      metric: '< 450ms',
      metricLabel: 'PR Diff Indexing Latency'
    }
  ];

  return (
    <section className="sticky-architecture-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-eyebrow-center">
          <span className="mono-pill-badge">
            <span className="mono-dot" />
            ENGINEERING SPECIFICATION
          </span>
          <h2 className="editorial-section-title">
            Artisanal precision at <span className="serif-highlight">monorepo scale</span>.
          </h2>
          <p className="editorial-section-desc">
            Three interconnected subsystems engineered specifically for the Model Context Protocol (MCP).
          </p>
        </div>

        {/* 50/50 Architecture Grid */}
        <div className="sticky-grid">
          {/* Left Column: Pinned Step Indicators & Narrative */}
          <div className="sticky-nav-column">
            <div className="sticky-nav-content">
              {steps.map((step, idx) => (
                <div
                  key={step.id}
                  className={`sticky-nav-card ${activeStep === idx ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="sticky-card-header">
                    <span className="sticky-step-num">{step.id}</span>
                    <span className="sticky-step-tag">{step.tag}</span>
                  </div>
                  <h3 className="sticky-card-title">{step.title}</h3>
                  <p className="sticky-card-desc">{step.subtitle}</p>
                  
                  {activeStep === idx && (
                    <div className="sticky-card-expanded">
                      <p className="sticky-expanded-body">{step.description}</p>
                      <ul className="sticky-bullet-list">
                        {step.bullets.map((b, i) => (
                          <li key={i} className="sticky-bullet-item">
                            <CheckCircle2 size={15} className="bullet-check-icon" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Interactive Visual Card */}
          <div className="sticky-visual-column">
            <div className="sticky-visual-display">
              {/* Top Header of Display */}
              <div className="visual-display-header">
                <div className="terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="visual-header-title">
                  <code>m5_engine_v2::{steps[activeStep].tag.toLowerCase().replace(/ /g, '_')}</code>
                </div>
                <div className="visual-header-badge">
                  <span className="pulse-indicator" />
                  ONLINE
                </div>
              </div>

              {/* Body Content Based on Step */}
              <div className="visual-display-body">
                {activeStep === 0 && (
                  <div className="ast-visual-content">
                    <div className="ast-spec-metric-bar">
                      <div className="ast-stat">
                        <span className="ast-stat-label">RECALL RATE</span>
                        <span className="ast-stat-val">99.4%</span>
                      </div>
                      <div className="ast-stat">
                        <span className="ast-stat-label">ALGORITHM</span>
                        <span className="ast-stat-val">RRF (k=60)</span>
                      </div>
                      <div className="ast-stat">
                        <span className="ast-stat-label">LATENCY</span>
                        <span className="ast-stat-val">12.8ms</span>
                      </div>
                    </div>

                    <div className="ast-code-inspector">
                      <div className="code-line commented"># Tree-sitter AST Chunk Boundaries [RFC 8421]</div>
                      <div className="code-line"><span className="token-fn">def</span> <span className="token-name">verify_jwt_session</span>(token: <span className="token-type">str</span>) -&gt; <span className="token-type">AuthSession</span>:</div>
                      <div className="code-line indent highlight-chunk">
                        <span className="token-keyword">payload</span> = jwt.decode(token, SECRET, algorithms=[<span className="token-str">"RS256"</span>])
                        <span className="ast-chunk-badge">AST Node #824 (Weight: 0.984)</span>
                      </div>
                      <div className="code-line indent">
                        <span className="token-keyword">if</span> payload.is_expired():
                      </div>
                      <div className="code-line indent-2">
                        <span className="token-keyword">raise</span> <span className="token-err">SessionExpiredError</span>(payload.session_id)
                      </div>
                      <div className="code-line indent">
                        <span className="token-keyword">return</span> <span className="token-type">AuthSession</span>(user_id=payload.sub)
                      </div>
                    </div>

                    <div className="ast-retrieval-summary">
                      <span className="summary-label">RRF FUSION RESULT:</span>
                      <span className="summary-match">Exact symbol match: <code>verify_jwt_session</code> (BM25: 1.00) + Semantic Match (Qdrant: 0.968)</span>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="graph-visual-content">
                    <div className="graph-tree-wrapper">
                      <div className="graph-node origin-node">
                        <div className="node-badge">TARGET FUNCTION</div>
                        <div className="node-code">verify_jwt_session()</div>
                      </div>

                      <div className="graph-arrow-down">↓ 1-Hop Callers</div>

                      <div className="graph-children-row">
                        <div className="graph-node child-node">
                          <div className="node-badge">CALLER 01</div>
                          <div className="node-code">api/middleware.py</div>
                          <span className="node-detail">AuthInterceptor()</span>
                        </div>
                        <div className="graph-node child-node">
                          <div className="node-badge">CALLER 02</div>
                          <div className="node-code">routes/auth.py</div>
                          <span className="node-detail">@require_auth</span>
                        </div>
                      </div>

                      <div className="graph-arrow-down">↓ 2-Hop Test Suite</div>

                      <div className="graph-node test-node">
                        <div className="node-badge">COMPANION TEST FILE</div>
                        <div className="node-code">tests/test_jwt_session.py::test_expired_token_raises()</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="pipeline-visual-content">
                    <div className="pipeline-row">
                      <div className="pipeline-step done">
                        <GitPullRequest size={16} />
                        <span>Git PR #412 Created</span>
                        <span className="pill-done">TRIGGERED</span>
                      </div>
                      <div className="pipeline-connector" />
                      <div className="pipeline-step processing">
                        <Cpu size={16} />
                        <span>AST AST Diff Parser</span>
                        <span className="pill-speed">18ms</span>
                      </div>
                      <div className="pipeline-connector" />
                      <div className="pipeline-step ready">
                        <ShieldCheck size={16} />
                        <span>MCP Vector Index Updated</span>
                        <span className="pill-ready">READY</span>
                      </div>
                    </div>

                    <div className="pipeline-diff-box">
                      <div className="diff-header">
                        <code>DIFF: +14 lines • -3 lines • 1 AST Scope Changed</code>
                      </div>
                      <div className="diff-lines">
                        <div className="diff-line removed">-  def validate(token): return True</div>
                        <div className="diff-line added">+  def validate(token: str) -&gt; bool:</div>
                        <div className="diff-line added">+    return crypto.constant_time_compare(token, HASH)</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Visual Display Footer */}
              <div className="visual-display-footer">
                <div className="visual-footer-metric">
                  <span className="num">{steps[activeStep].metric}</span>
                  <span className="txt">{steps[activeStep].metricLabel}</span>
                </div>
                <button className="btn-pill-white" onClick={openDemoModal}>
                  <span>Request Live Sandbox</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
