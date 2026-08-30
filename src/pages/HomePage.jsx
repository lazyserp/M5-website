import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, XCircle, Layers, GitBranch, ShieldCheck, Zap, GitPullRequest } from 'lucide-react';
import Eyebrow from '../components/Eyebrow';
import CodeBlock from '../components/CodeBlock';
import HeroTitle from '../components/HeroTitle';

export default function HomePage({ setActivePage, openDemoModal }) {
  const [activeTab, setActiveTab] = useState('cursor');

  const configs = {
    cursor: {
      title: 'Cursor IDE (Remote HTTP MCP)',
      code: `// Add to ~/.cursor/mcp.json or Settings > MCP
{
  "mcpServers": {
    "m5-context": {
      "serverUrl": "http://m5.ai/mcp",
      "headers": {
        "Authorization": "Your M5 API token"
      }
    }
  }
}`
    },
    vscode: {
      title: 'VS Code / GitHub Copilot (Remote HTTP MCP)',
      code: `// Add to .vscode/mcp.json
{
  "servers": {
    "m5-context": {
      "type": "http",
      "url": "http://m5.ai/mcp",
      "headers": {
        "Authorization": "Your M5 API token"
      }
    }
  }
}`
    },
    claude: {
      title: 'Claude Code (Remote HTTP MCP)',
      code: `// Add to mcp.json
{
  "mcpServers": {
    "m5-context": {
      "url": "http://m5.ai/mcp",
      "headers": {
        "Authorization": "Your M5 API token"
      }
    }
  }
}`
    },
    chatgpt: {
      title: 'ChatGPT & Custom Agents (Remote HTTP MCP)',
      code: `Endpoint: http://m5.ai/mcp
Protocol: JSON-RPC 2.0 (MCP 2024-11-05)
Auth: Authorization: Bearer <Your M5 API token>

Available Tools:
- m5_get_context (Hybrid AST + Dependency Graph Retrieval)
- m5_search_code (Dense Semantic + Exact BM25 Search)
- m5_read_lines (Cited AST Range Reader)
- m5_get_dependencies (Call Graph / Import Hierarchy)
- m5_find_symbol_references (Cross-File Symbol References)`
    },
    rest: {
      title: 'Direct HTTP REST API (Context Engine)',
      code: `curl -X POST http://m5.ai/api/context \\
  -H "Authorization: Bearer <Your M5 API token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "how is authentication token verified in middleware?",
    "top_k": 3,
    "expand_dependencies": true
  }'`
    }
  };

  return (
    <div>
      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-content">
          <HeroTitle />

          <p className="hero-subtitle" style={{ maxWidth: '640px', marginTop: '16px' }}>
            The invisible code context layer for Copilot, Cursor, and Claude Code.
            <span className="highlight-white" style={{ display: 'block', marginTop: '6px' }}>
              M5 supplies the context. Your AI produces the truth.
            </span>
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={openDemoModal}>
              <span>Request Demo</span>
              <ArrowRight size={14} />
            </button>
            <button className="btn btn-secondary" onClick={() => setActivePage('docs')}>
              <span>Read Documentation</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Metrics Bar ──────────────────────────────────────────────────── */}
      <section className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-val">&lt; 100ms</div>
              <div className="metric-label">Median MCP Latency</div>
            </div>
            <div className="metric-item">
              <div className="metric-val">75%</div>
              <div className="metric-label">Token Spend Reduction</div>
            </div>
            <div className="metric-item">
              <div className="metric-val">100%</div>
              <div className="metric-label">Code Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem & The Solution ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <Eyebrow>Context on Demand • Tokens on Budget</Eyebrow>
            <h2 className="section-title">
              Stop paying LLMs to read <span className="highlight-white">irrelevant code</span>.
            </h2>
            <p className="section-desc">
              Autonomous agents that blindly ingest whole files explode API costs and hallucinate on large monorepos. M5 decouples retrieval from reasoning to deliver AST precision.
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card">
              <div className="comparison-header">
                <span className="comparison-title">Brittle Whole-File Ingestion</span>
                <span className="comparison-badge badge-warning">Traditional</span>
              </div>
              <ul className="comparison-list">
                <li className="comparison-item">
                  <XCircle size={18} color="#F87171" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Context Window Bloat:</strong> Pastes thousands of irrelevant lines, exploding LLM token costs.</span>
                </li>
                <li className="comparison-item">
                  <XCircle size={18} color="#F87171" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Zero Dependency Awareness:</strong> Fails to discover cross-file imports, callers, and companion test files.</span>
                </li>
                <li className="comparison-item">
                  <XCircle size={18} color="#F87171" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Security Exposure:</strong> Autonomous write/shell execution risks destroying production repositories.</span>
                </li>
              </ul>
            </div>

            <div className="comparison-card card-highlight">
              <div className="comparison-header">
                <span className="comparison-title">M5 Intelligent Context Layer</span>
                <span className="comparison-badge badge-success">M5 v2 Engine</span>
              </div>
              <ul className="comparison-list">
                <li className="comparison-item">
                  <CheckCircle2 size={18} color="#FFFFFF" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>AST Hybrid RRF Retrieval:</strong> Combines lexical BM25 code tokens with dense vector semantics for sub-20ms pinpoint accuracy.</span>
                </li>
                <li className="comparison-item">
                  <CheckCircle2 size={18} color="#FFFFFF" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Multi-Hop Graph Traversal:</strong> Automatically packages 1/2-hop dependencies and companion tests in one response.</span>
                </li>
                <li className="comparison-item">
                  <CheckCircle2 size={18} color="#FFFFFF" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Read-Only Guardrails:</strong> Context-only operation. Zero file writes, zero shell execution, complete audit trails via Langfuse.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 Architectural Pillars (Bento Grid) ──────────────────────────── */}
      <section className="section" style={{ background: '#050507' }}>
        <div className="container">
          <div className="section-header">
            <Eyebrow>AST-Level Intelligence</Eyebrow>
            <h2 className="section-title">
            Make your AI Agent <span className="highlight-white">Intelligent !</span>
            </h2>
            <p className="section-desc">The brain behind Copilot, Cursor, and Claude Code. Three isolated subsystems delivering verified truth.</p>
          </div>

          <div className="bento-grid">
            <div className="bento-card">
              <div>
                <div className="bento-icon">
                  <Layers size={22} />
                </div>
                <h3 className="bento-title">AST Parsing &amp; Hybrid RRF</h3>
                <p className="bento-text">
                  Indexes codebases into syntax-aware AST chunks. Queries execute via Reciprocal Rank Fusion (RRF) across exact BM25 keyword symbols and high-dimensional vector embeddings in Qdrant.
                </p>
              </div>
            </div>

            <div className="bento-card">
              <div>
                <div className="bento-icon">
                  <GitBranch size={22} />
                </div>
                <h3 className="bento-title">Multi-Hop Dependency Graph</h3>
                <p className="bento-text">
                  Maintains a live dependency graph of function calls, class inheritances, and imports. When context is requested, M5 expands up to 2 hops and automatically attaches companion test files.
                </p>
              </div>
            </div>

            <div className="bento-card">
              <div>
                <div className="bento-icon">
                  <GitPullRequest size={22} />
                </div>
                <h3 className="bento-title">Incremental Git PR Indexing</h3>
                <p className="bento-text">
                  Automatically indexes changed diffs on every Pull Request instead of re-indexing entire monorepos. Saves over 95% in CI compute time and keeps code context synchronized in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 1-Click IDE Setup Hub ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <Eyebrow>Your Code • Your Data • Your Control</Eyebrow>
            <h2 className="section-title">
              Zero code leaves your building. <span className="highlight-white">100% intelligence enters your IDE</span>.
            </h2>
            <p className="section-desc">Index once in CI/CD. Serve 10,000 developers in milliseconds with universal MCP support.</p>
          </div>

          <div className="setup-hub-card">
            <div className="setup-hub-tabs">
              {Object.keys(configs).map((key) => (
                <button
                  key={key}
                  className={`setup-tab-item ${activeTab === key ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  <span>{key === 'cursor' ? 'Cursor' : key === 'vscode' ? 'VS Code / Copilot' : key === 'claude' ? 'Claude Code CLI' : key === 'chatgpt' ? 'ChatGPT Remote MCP' : 'REST API'}</span>
                </button>
              ))}
            </div>

            <div className="setup-hub-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ color: '#FFFFFF', fontWeight: 500 }}>{configs[activeTab].title}</span>
                <span className="setup-mcp-badge">MCP Protocol</span>
              </div>
              <CodeBlock code={configs[activeTab].code} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
