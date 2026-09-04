import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  ArrowRight, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Code2,
  FolderGit2,
  Eye,
  Activity
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

export default function TryPage({ setActivePage, openDemoModal }) {
  const [activePkg, setActivePkg] = useState('pip');
  const [activeIde, setActiveIde] = useState('cursor');
  const [copiedHero, setCopiedHero] = useState(false);
  const [copiedPromptIndex, setCopiedPromptIndex] = useState(null);

  const handleCopyHero = () => {
    navigator.clipboard.writeText('pip install m5-engine');
    setCopiedHero(true);
    setTimeout(() => setCopiedHero(false), 2000);
  };

  const handleCopyPrompt = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptIndex(index);
    setTimeout(() => setCopiedPromptIndex(null), 2000);
  };

  const pkgCommands = {
    pip: 'pip install m5-engine',
    uv: 'uv pip install m5-engine',
    python: 'python -m pip install m5-engine'
  };

  const ideConfigs = {
    cursor: {
      name: 'Cursor IDE',
      desc: 'Connect M5 directly to Cursor as an MCP server command.',
      steps: [
        'Open Cursor and go to Settings → Features → MCP (or edit ~/.cursor/mcp.json).',
        'Click "Add New MCP Server" with Name: m5, Type: command, Command: m5 serve',
        'Or add the JSON snippet below to your ~/.cursor/mcp.json file.',
        'Open Cursor Chat (Cmd+L / Ctrl+L) and start asking whole-repo questions.'
      ],
      codeTitle: '~/.cursor/mcp.json',
      code: `{
  "mcpServers": {
    "m5": {
      "command": "m5",
      "args": ["serve"]
    }
  }
}`
    },
    vscode: {
      name: 'VS Code',
      desc: 'Connect M5 to VS Code via native MCP (.vscode/mcp.json) or agent extensions (GitHub Copilot, Cline, Roo Code).',
      steps: [
        'In your workspace root, create or open the .vscode/mcp.json configuration file.',
        'If using Cline or Roo Code, open your extension MCP Settings.',
        'Paste the m5 stdio server configuration shown below.',
        'Open Copilot Chat or your agent panel and begin querying multi-file code paths.'
      ],
      codeTitle: '.vscode/mcp.json',
      code: `{
  "mcpServers": {
    "m5": {
      "command": "m5",
      "args": ["serve"]
    }
  }
}`
    },
    codex: {
      name: 'Codex',
      desc: 'Equip OpenAI Codex and autonomous coding agents with deterministic AST code intelligence.',
      steps: [
        'Open your Codex agent configuration or tool definitions file (e.g. codex.config.json).',
        'Register the m5 stdio server command with arguments ["serve"].',
        'Your Codex agent will automatically call m5_get_context and m5_search_code.',
        'Enables pinpoint call graph analysis without consuming high token windows.'
      ],
      codeTitle: 'codex.config.json',
      code: `{
  "mcpServers": {
    "m5": {
      "command": "m5",
      "args": ["serve"]
    }
  }
}`
    },
    claude: {
      name: 'Claude Code & Desktop',
      desc: 'Add whole-repo AST retrieval to Claude Desktop or Claude Code CLI.',
      steps: [
        'Open your Claude Desktop configuration file (Settings → Developer → Edit Config).',
        'On Mac: ~/Library/Application Support/Claude/claude_desktop_config.json',
        'On Windows: %APPDATA%\\Claude\\claude_desktop_config.json',
        'Paste the mcpServers configuration below and restart Claude.'
      ],
      codeTitle: 'claude_desktop_config.json',
      code: `{
  "mcpServers": {
    "m5": {
      "command": "m5",
      "args": ["serve"]
    }
  }
}`
    },
    windsurf: {
      name: 'Windsurf',
      desc: 'Universal stdio MCP server for Codeium Windsurf Cascade.',
      steps: [
        'Open Windsurf Settings and navigate to Cascade → MCP Servers.',
        'Add the m5 command server definition as shown below.',
        'Your Cascade agent can now call m5_get_context with zero Docker and zero open ports.'
      ],
      codeTitle: '~/.codeium/windsurf/mcp_config.json',
      code: `{
  "mcpServers": {
    "m5": {
      "command": "m5",
      "args": ["serve"]
    }
  }
}`
    }
  };

  const testPrompts = [
    {
      title: '01 / Trace Code Flow',
      prompt: 'How does authentication and session validation work across this project? Trace the full call path from route to database.',
      explanation: 'Instead of grepping across dozens of files, your agent queries M5 to pinpoint the exact entrypoint, callers, and database handlers with zero hallucinations.'
    },
    {
      title: '02 / Refactor Impact Analysis',
      prompt: 'If I update the user signup logic, which functions, services, and API endpoints across the repo will be affected?',
      explanation: 'M5 resolves multi-hop callers and type dependencies across all files, giving your agent complete blast-radius awareness before changing code.'
    },
    {
      title: '03 / Token Savings Verification',
      prompt: 'How many tokens did M5 save for this prompt compared to loading entire source files into context?',
      explanation: 'Your agent compares targeted AST slices against whole-file loading, demonstrating an 85%+ reduction in prompt tokens and faster responses.'
    }
  ];

  return (
    <div className="m5-about-page-root">
      
      {/* ── 1. Top Hero Section (Black Background & Centered "Try M5 Now") ── */}
      <section className="m5-about-black-hero">
        <div className="m5-hero-inner">
          <div className="m5-about-hero-pill">
            DEVELOPER TESTING PREVIEW 
          </div>

          <h1 className="m5-about-black-hero-title">
            Try M5 Now
          </h1>

          <p className="m5-about-black-hero-sub">
            The zero-cost, air-gapped AST code intelligence engine for AI agents. Give Cursor, VS Code, Codex, Claude Code, or Windsurf whole-repo execution context in under 60 seconds.
          </p>

          {/* Quick Terminal Command in Hero */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: '9999px',
            padding: '8px 18px',
            marginTop: '28px',
            backdropFilter: 'blur(16px)',
            fontFamily: 'PolySans Mono, monospace',
            fontSize: '14px',
            color: '#FFFFFF'
          }}>
            <Terminal size={15} color="#FF5A52" />
            <span>pip install m5-engine</span>
            <button
              onClick={handleCopyHero}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                borderRadius: '9999px',
                padding: '4px 10px',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '12px',
                fontFamily: 'PolySans Mono, monospace',
                transition: 'background 0.2s ease'
              }}
              title="Copy install command"
            >
              {copiedHero ? <Check size={12} color="#42FFFC" /> : <Copy size={12} />}
              <span>{copiedHero ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 2. White Content Section (Matches AboutPage & Theme) ── */}
      <div className="m5-about-page-content">
        <div className="m5-container">

          {/* Editorial Intro */}
          <section className="m5-about-hero-block" style={{ marginBottom: '56px' }}>
            <span className="m5-about-section-tag">TESTER ONBOARDING GUIDE</span>
            <h2 className="m5-about-title">
              Connect M5 to your agent in three steps.
            </h2>
            <p className="m5-about-lead">
              M5 runs 100% locally on your machine. Zero Docker containers, zero open ports, zero API keys to index, and zero code egress. Follow the guide below to index your repository and connect your AI editor.
            </p>
          </section>

          {/* ── STEP 1: INSTALL ENGINE ── */}
          <div className="m5-try-step-wrapper">
            <div className="m5-try-step-header">
              <span className="m5-value-num">STEP 01 / INSTALLATION</span>
              <h3 className="m5-try-step-title">Install the M5 Engine CLI</h3>
              <p className="m5-try-step-desc">
                Requires Python 3.9+. M5 installs as a standalone CLI with embedded Tree-sitter AST parsers and a local vector engine.
              </p>
            </div>

            {/* Package Manager Toggle */}
            <div className="m5-try-pkg-tabs">
              <button 
                className={`m5-try-pkg-btn ${activePkg === 'pip' ? 'active' : ''}`}
                onClick={() => setActivePkg('pip')}
              >
                pip
              </button>
              <button 
                className={`m5-try-pkg-btn ${activePkg === 'uv' ? 'active' : ''}`}
                onClick={() => setActivePkg('uv')}
              >
                uv
              </button>
              <button 
                className={`m5-try-pkg-btn ${activePkg === 'python' ? 'active' : ''}`}
                onClick={() => setActivePkg('python')}
              >
                python -m pip
              </button>
            </div>

            <CodeBlock title="Terminal" code={pkgCommands[activePkg]} language="bash" />

            
          </div>

          {/* ── STEP 2: SETUP WORKSPACE ── */}
          <div className="m5-try-step-wrapper">
            <div className="m5-try-step-header">
              <span className="m5-value-num">STEP 02 / INITIAL SCAN</span>
              <h3 className="m5-try-step-title">Scan and index your project</h3>
              <p className="m5-try-step-desc">
                Run this command inside your repository root. In less than 1 second, M5 parses your AST, maps symbol dependencies into local SQLite, and auto-injects navigation rules into AGENTS.md.
              </p>
            </div>

            <CodeBlock 
              title="Terminal (Run inside your project directory)" 
              code={`cd /path/to/your/project\nm5 setup`} 
              language="bash" 
            />

            {/* What Happens Under the Hood 3-Col Cards */}
            <div className="m5-try-micro-grid">
              <div className="m5-try-micro-card">
                <h4 className="m5-try-micro-heading">&lt;1s Tree-sitter Scan</h4>
                <p className="m5-try-micro-text">
                  Parses functions, classes, and calls across 16+ languages (TypeScript, Python, Go, Rust, Java, C++, and more).
                </p>
              </div>

              <div className="m5-try-micro-card">
                <h4 className="m5-try-micro-heading">Local SQLite Graph</h4>
                <p className="m5-try-micro-text">
                  Creates a fast, self-contained <code style={{ color: '#B92B23', background: '#F1F1F1', padding: '2px 6px', borderRadius: 4 }}>.m5/</code> folder in your project root. Never pollutes git.
                </p>
              </div>

              <div className="m5-try-micro-card">
                <h4 className="m5-try-micro-heading">Auto Agent Rules</h4>
                <p className="m5-try-micro-text">
                  Injects directives into <code style={{ color: '#B92B23', background: '#F1F1F1', padding: '2px 6px', borderRadius: 4 }}>AGENTS.md</code> so your agent automatically uses M5 instead of grep.
                </p>
              </div>
            </div>
          </div>

          {/* ── STEP 3: CONNECT AGENT (INTERACTIVE IDE TABS) ── */}
          <div className="m5-try-step-wrapper">
            <div className="m5-try-step-header">
              <span className="m5-value-num">STEP 03 / AGENT CONNECTION</span>
              <h3 className="m5-try-step-title">Connect M5 to your AI editor</h3>
              <p className="m5-try-step-desc">
                Select your preferred editor to see the exact configuration:
              </p>
            </div>

            {/* IDE Selector Tabs */}
            <div className="m5-try-ide-tabs">
              {Object.keys(ideConfigs).map((key) => {
                const item = ideConfigs[key];
                return (
                  <button
                    key={key}
                    className={`m5-try-ide-tab-btn ${activeIde === key ? 'active' : ''}`}
                    onClick={() => setActiveIde(key)}
                  >
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active IDE Details */}
            <div className="m5-try-ide-panel">
              <p style={{
                fontFamily: 'PolySans, sans-serif',
                fontSize: '15px',
                color: '#555555',
                marginBottom: '16px'
              }}>
                {ideConfigs[activeIde].desc}
              </p>

              <ol style={{
                fontFamily: 'PolySans, sans-serif',
                fontSize: '14.5px',
                color: '#222222',
                paddingLeft: '20px',
                marginBottom: '16px',
                lineHeight: '1.7'
              }}>
                {ideConfigs[activeIde].steps.map((step, idx) => (
                  <li key={idx} style={{ marginBottom: '6px' }}>{step}</li>
                ))}
              </ol>

              <CodeBlock 
                title={ideConfigs[activeIde].codeTitle} 
                code={ideConfigs[activeIde].code} 
                language="json" 
              />
            </div>
          </div>


          {/* ── STEP 4: HOW TO TEST (PROMPT PLAYBOOK) ── */}
          <div className="m5-about-section-header" style={{ marginBottom: '36px' }}>
            <span className="m5-about-section-tag">TESTER PLAYBOOK • VERIFICATION PROMPTS</span>
            <h2 className="m5-about-section-title">Test M5 in action with your agent.</h2>
            <p className="m5-about-section-sub">
              Open your agent chat (Cursor, VS Code, Codex, Claude Code, Windsurf) in your newly indexed project and try these multi-file prompts:
            </p>
          </div>

          <div className="m5-try-prompts-grid">
            {testPrompts.map((item, idx) => (
              <div key={idx} className="m5-try-prompt-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span className="m5-value-num" style={{ margin: 0, fontSize: '13px' }}>{item.title}</span>
                  <button
                    onClick={() => handleCopyPrompt(item.prompt, idx)}
                    className="copy-btn"
                    style={{ background: '#FFFFFF', color: '#111111', borderColor: '#E0E0E0' }}
                  >
                    {copiedPromptIndex === idx ? (
                      <>
                        <Check size={12} color="#059669" />
                        <span>Copied Prompt</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="m5-try-prompt-quote">
                  “{item.prompt}”
                </div>

                <p className="m5-try-prompt-exp">
                  <strong>What happens:</strong> {item.explanation}
                </p>
              </div>
            ))}
          </div>

          {/* ── 4-Card Grid: Power Tools for Testers (Matches AboutPage 4-Card Grid) ── */}
          <div className="m5-about-section-header" style={{ marginTop: '72px' }}>
            <span className="m5-about-section-tag">TESTER TOOLKIT &amp; UTILITIES</span>
            <h2 className="m5-about-section-title">Built for developer productivity.</h2>
            <p className="m5-about-section-sub">
              Helpful commands to inspect and synchronize your code graph while coding.
            </p>
          </div>

          <div className="m5-values-grid" style={{ marginBottom: '80px' }}>
            <div className="m5-value-card">
              <span className="m5-value-num">01 / LIVE SYNC</span>
              <div>
                <h4 className="m5-value-heading">Incremental File Watcher</h4>
                <p className="m5-value-desc">
                  Run <code style={{ color: '#B92B23' }}>m5 live</code> in your terminal. On every file save, M5 updates the AST call graph incrementally in &lt;50ms without re-scanning.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">02 / VISUAL GRAPH</span>
              <div>
                <h4 className="m5-value-heading">Local Browser UI</h4>
                <p className="m5-value-desc">
                  Run <code style={{ color: '#B92B23' }}>m5 view</code> to open an interactive graph explorer at <code style={{ color: '#B92B23' }}>http://127.0.0.1:5555</code> to visually trace callers and callees.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">03 / SURGICAL CLI</span>
              <div>
                <h4 className="m5-value-heading">Direct Terminal Queries</h4>
                <p className="m5-value-desc">
                  Use <code style={{ color: '#B92B23' }}>m5 trace &lt;query&gt;</code> or <code style={{ color: '#B92B23' }}>m5 callers &lt;sym&gt;</code> directly from CLI to inspect symbol bodies without opening AI chat.
                </p>
              </div>
            </div>

            <div className="m5-value-card">
              <span className="m5-value-num">04 / TEAM CACHE</span>
              <div>
                <h4 className="m5-value-heading">CI/CD Index Sharing</h4>
                <p className="m5-value-desc">
                  Run <code style={{ color: '#B92B23' }}>m5 dump</code> in CI and <code style={{ color: '#B92B23' }}>m5 pull</code> during onboarding so your team never re-indexes large monorepos from scratch.
                </p>
              </div>
            </div>
          </div>

          {/* ── Call to Action Banner (Matches Screenshot 5) ── */}
          <div className="m5-about-cta-card">
            <h2 className="m5-about-cta-title">
              Testing M5 with a team or monorepo?
            </h2>
            <p className="m5-about-cta-desc">
              We work directly with testing engineers to optimize token savings, customize AST grammars, and test enterprise VPC deployments.
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

              <a
                href="https://pypi.org/project/m5-engine/"
                target="_blank"
                rel="noopener noreferrer"
                className="m5-hero-btn-secondary"
                style={{ padding: '12px 28px', fontSize: '15px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>View PyPI Package</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
