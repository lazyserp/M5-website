import React, { useState, useEffect } from 'react';
import Eyebrow from '../components/Eyebrow';
import CodeBlock from '../components/CodeBlock';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  Lock,
  Server,
  GitPullRequest,
  RefreshCw,
  Cpu,
  CheckCircle2,
  Terminal,
  Code2
} from 'lucide-react';

export default function DocsPage({ openDemoModal }) {
  const [activeSection, setActiveSection] = useState('how-it-works');
  const [activeSetupTab, setActiveSetupTab] = useState('cursor');

  useEffect(() => {
    const sectionIds = [
      'how-it-works',
      'key-features',
      'plug-and-play-setup',
      'security-privacy',
      'faq'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const setupConfigs = {
    cursor: {
      name: 'Cursor IDE',
      subtitle: 'Native remote MCP setup in under 30 seconds',
      steps: [
        'Open Cursor and press Cmd+, (or Ctrl+,) to open Settings.',
        'Navigate to Features → MCP Servers, or open ~/.cursor/mcp.json.',
        'Paste the JSON configuration below with your M5 API endpoint & token.',
        'In Cursor Chat, ask questions about your codebase with zero setup friction.'
      ],
      codeTitle: '~/.cursor/mcp.json',
      code: `// Add to ~/.cursor/mcp.json or Settings > Features > MCP
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
      name: 'VS Code & GitHub Copilot',
      subtitle: 'Universal AST context layer for VS Code and Copilot Chat',
      steps: [
        'Create or open .vscode/mcp.json in your project workspace.',
        'Add the M5 HTTP server configuration shown below.',
        'GitHub Copilot Chat automatically accesses AST symbols and call graphs.'
      ],
      codeTitle: '.vscode/mcp.json',
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
      name: 'Claude Code CLI',
      subtitle: 'Direct CLI agent integration for autonomous terminal tasks',
      steps: [
        'Open your global or project mcp.json configuration file.',
        'Add the m5-context remote HTTP endpoint definition.',
        'Run claude in your terminal to begin querying with cited syntax ranges.'
      ],
      codeTitle: 'mcp.json',
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
      name: 'ChatGPT & Custom Agents',
      subtitle: 'Enterprise context gateway for custom LLM bots and pipelines',
      steps: [
        'Configure your custom GPT, LangChain agent, or internal Slack bot.',
        'Use standard JSON-RPC 2.0 (MCP 2024-11-05 protocol) with Bearer token auth.',
        'Access tools: m5_get_context, m5_search_code, m5_get_dependencies.'
      ],
      codeTitle: 'MCP Tool Manifest',
      code: `Endpoint: http://m5.ai/mcp
Protocol: JSON-RPC 2.0 (MCP 2024-11-05)
Auth: Authorization: <Your M5 API token>
`
    }
  };

  return (
    <div className="container docs-layout">
      {/* ── Customer Docs Sidebar ──────────────────────────────────────────── */}
      <aside className="docs-sidebar">
        <div className="docs-sidebar-group">
          <div className="docs-sidebar-title">Overview</div>
          <ul className="docs-sidebar-links">
            <li>
              <span
                className={`docs-sidebar-link ${activeSection === 'how-it-works' ? 'active' : ''}`}
                onClick={() => scrollToSection('how-it-works')}
              >
                How M5 Works
              </span>
            </li>
            <li>
              <span
                className={`docs-sidebar-link ${activeSection === 'key-features' ? 'active' : ''}`}
                onClick={() => scrollToSection('key-features')}
              >
                Key Capabilities &amp; Features
              </span>
            </li>
          </ul>
        </div>

        <div className="docs-sidebar-group">
          <div className="docs-sidebar-title">Integration</div>
          <ul className="docs-sidebar-links">
            <li>
              <span
                className={`docs-sidebar-link ${activeSection === 'plug-and-play-setup' ? 'active' : ''}`}
                onClick={() => scrollToSection('plug-and-play-setup')}
              >
                Plug &amp; Play Setup Hub
              </span>
            </li>
          </ul>
        </div>

        <div className="docs-sidebar-group">
          <div className="docs-sidebar-title">Trust &amp; Security</div>
          <ul className="docs-sidebar-links">
            <li>
              <span
                className={`docs-sidebar-link ${activeSection === 'security-privacy' ? 'active' : ''}`}
                onClick={() => scrollToSection('security-privacy')}
              >
                Security &amp; Air-Gapped Control
              </span>
            </li>
            <li>
              <span
                className={`docs-sidebar-link ${activeSection === 'faq' ? 'active' : ''}`}
                onClick={() => scrollToSection('faq')}
              >
                Frequently Asked Questions
              </span>
            </li>
          </ul>
        </div>
      </aside>

      {/* ── Customer Docs Main Content ─────────────────────────────────────── */}
      <main className="docs-content">
        {/* 1. How It Works */}
        <section className="docs-article" id="how-it-works">
          <Eyebrow>Architecture Overview</Eyebrow>
          <h1 className="docs-h1" style={{ fontWeight: 350, letterSpacing: '-1.5px' }}>How M5 Works for Your Team</h1>
          <p className="docs-p">
            <span style={{ color: '#FFFFFF', fontWeight: 450 }}>
              M5 is an invisible code context layer that connects your codebase to the AI developer tools you already use. Instead of shoveling entire repositories into AI models, M5 delivers precise, verified code citations and dependency maps in real-time.
            </span>
          </p>

          {/* Simple 3-Step Flow Diagram */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', margin: '32px 0' }}>
            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
              <div style={{ color: '#FFFFFF', fontWeight: 500, fontSize: '0.82rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Step 1: Index Once</div>
              <h3 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 450 }}>Index in Your Perimeter</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                M5 scans your codebase in CI/CD or your private cloud, mapping syntax trees, functions, and cross-file relationships securely.
              </p>
            </div>

            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
              <div style={{ color: '#FFFFFF', fontWeight: 500, fontSize: '0.82rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Step 2: Plug &amp; Play</div>
              <h3 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 450 }}>Connect Any AI Editor</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                Developers connect Cursor, VS Code, Claude Code, or ChatGPT in 30 seconds via the open Model Context Protocol (MCP).
              </p>
            </div>

            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px' }}>
              <div style={{ color: '#FFFFFF', fontWeight: 500, fontSize: '0.82rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Step 3: Verified Truth</div>
              <h3 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '8px', fontWeight: 450 }}>Exact Answers, 75% Less Spend</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                Your AI gets exact line numbers and caller graphs. No hallucinations, zero code egress, and massive token savings.
              </p>
            </div>
          </div>

          <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px 24px', margin: '24px 0' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.96rem', margin: 0 }}>
              <span style={{ color: '#FFFFFF', fontWeight: 450 }}>The M5 Principle:</span> M5 supplies the verified context; your favorite AI produces the answer. You never have to switch editors or retrain developers.
            </p>
          </div>
        </section>

        {/* 2. Key Capabilities & Standout Features */}
        <section className="docs-article" id="key-features">
          <Eyebrow>Engineered for Speed, Precision &amp; Scale</Eyebrow>
          <h1 className="docs-h1" style={{ fontWeight: 350, letterSpacing: '-1.5px' }}>Key Capabilities &amp; Features</h1>
          <p className="docs-p">
            Built from the ground up to eliminate LLM hallucinations, slash CI indexing costs, and deliver pinpoint AST intelligence.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '28px 0' }}>
            {/* Feature 1: Automatic Git PR Incremental Indexing */}
            <div className="feature-doc-card">
              <div className="feature-doc-icon" style={{ background: 'rgba(66, 255, 252, 0.12)', color: '#42FFFC' }}>
                <GitPullRequest size={20} />
              </div>
              <h3 className="feature-doc-title">Automatic Git PR Incremental Indexing</h3>
              <p className="feature-doc-text">
                <strong>Only indexes changed diffs on every Pull Request</strong> rather than wasting hours re-indexing entire monorepos. Saves over 95% in CI compute time while keeping your vector index synchronized in seconds.
              </p>
            </div>

            {/* Feature 2: AST Hybrid RRF Search */}
            <div className="feature-doc-card">
              <div className="feature-doc-icon" style={{ background: 'rgba(59, 130, 246, 0.12)', color: '#60A5FA' }}>
                <Cpu size={20} />
              </div>
              <h3 className="feature-doc-title"> 100ms AST Hybrid RRF Retrieval</h3>
              <p className="feature-doc-text">
                Fuses lexical BM25 exact symbol matching with dense vector semantics via <strong>Reciprocal Rank Fusion (RRF)</strong>. Finds the exact function definition and syntax node in under 20ms.
              </p>
            </div>

            {/* Feature 5: Safe Read-Only Guardrails */}
            <div className="feature-doc-card">
              <div className="feature-doc-icon" style={{ background: 'rgba(239, 68, 68, 0.12)', color: '#F87171' }}>
                <ShieldCheck size={20} />
              </div>
              <h3 className="feature-doc-title">Safe Read-Only Guardrails</h3>
              <p className="feature-doc-text">
                M5 is strictly context-supplying. It <strong>never writes files to disk and never executes shell commands</strong>, eliminating any danger of autonomous agent bugs corrupting production code.
              </p>
            </div>

            {/* Feature 4: Token Spend Reduction */}
            <div className="feature-doc-card">
              <div className="feature-doc-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#34D399' }}>
                <Zap size={20} />
              </div>
              <h3 className="feature-doc-title">75%+ Token Spend Reduction</h3>
              <p className="feature-doc-text">
                Stops shoveling thousands of lines of irrelevant boilerplate into LLM prompts. By providing <strong>exact cited line ranges</strong>, engineering teams slash monthly AI context token bills immediately.
              </p>
            </div>

            
          </div>
        </section>

        {/* 3. Interactive Compact Plug & Play Setup Hub */}
        <section className="docs-article" id="plug-and-play-setup">
          <Eyebrow>Universal 30-Second Integration</Eyebrow>
          <h1 className="docs-h1" style={{ fontWeight: 350, letterSpacing: '-1.5px' }}>Plug &amp; Play Setup Hub</h1>
          <p className="docs-p">
            Select your developer tool below to view simple, step-by-step setup instructions and configuration code.
          </p>

          {/* Interactive Compact Setup Card */}
          <div className="setup-hub-card">
            {/* Header Tabs */}
            <div className="setup-hub-tabs">
              {Object.keys(setupConfigs).map((key) => {
                const conf = setupConfigs[key];
                const isActive = activeSetupTab === key;
                return (
                  <button
                    key={key}
                    className={`setup-tab-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveSetupTab(key)}
                  >
                    <span>{conf.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Body */}
            <div className="setup-hub-body">
              <div className="setup-hub-header-row">
                <div>
                  <h3 className="setup-hub-title">{setupConfigs[activeSetupTab].name}</h3>
                  <p className="setup-hub-sub">{setupConfigs[activeSetupTab].subtitle}</p>
                </div>
                <span className="setup-mcp-badge">MCP Protocol</span>
              </div>

              {/* Numbered Steps */}
              <div className="setup-steps-list">
                {setupConfigs[activeSetupTab].steps.map((step, idx) => (
                  <div key={idx} className="setup-step-row">
                    <span className="setup-step-num">{idx + 1}</span>
                    <span className="setup-step-text">{step}</span>
                  </div>
                ))}
              </div>

              {/* Code Configuration */}
              <div style={{ marginTop: '20px' }}>
                <CodeBlock
                  title={setupConfigs[activeSetupTab].codeTitle}
                  code={setupConfigs[activeSetupTab].code}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Security & Privacy */}
        <section className="docs-article" id="security-privacy">
          <Eyebrow>Enterprise Security</Eyebrow>
          <h1 className="docs-h1" style={{ fontWeight: 350, letterSpacing: '-1.5px' }}>Security, Privacy &amp; Air-Gapped Control</h1>
          <p className="docs-p">
            M5 is architected specifically for enterprise engineering organizations with strict intellectual property and compliance requirements.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '24px 0' }}>
            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <Lock size={22} color="#FFFFFF" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '8px', fontWeight: 450 }}>Zero Code Egress</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Your source code never leaves your VPC or private infrastructure. Indexing, parsing, and vector search execute entirely within your security boundary.
              </p>
            </div>

            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <Server size={22} color="#FFFFFF" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', marginBottom: '8px', fontWeight: 450 }}>Multi-Tenant Isolation</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Strict physical namespace separation per organization, team, and repository branch. Developers only access repositories they have permissions for.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="docs-article" id="faq">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="docs-h1" style={{ fontWeight: 350, letterSpacing: '-1.5px' }}>Frequently Asked Questions</h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>
            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '8px', fontWeight: 450 }}>Does M5 train AI models on our proprietary code?</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                No. M5 never trains models. It is strictly a context retrieval and citation layer. It reads your indexed syntax graph and provides approved snippets to your editor&apos;s AI model.
              </p>
            </div>

            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '8px', fontWeight: 450 }}>Do our developers need to switch editors or install custom extensions?</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                No. M5 uses the industry-standard Model Context Protocol (MCP). It works natively in Cursor, VS Code (Copilot), Claude Code, and ChatGPT without requiring any custom plugin installation.
              </p>
            </div>

            <div style={{ background: 'var(--color-surface-card)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.05rem', marginBottom: '8px', fontWeight: 450 }}>Can M5 accidentally overwrite or delete our code?</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                No. M5 operates with strict read-only safety guardrails. It cannot modify files on disk or execute shell commands.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
