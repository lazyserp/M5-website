import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Shield, ArrowUpRight } from 'lucide-react';

export default function ManifestoSection({ openDemoModal }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the section we have scrolled (0 to 1)
      const start = windowHeight * 0.85;
      const end = -rect.height * 0.3;
      const current = rect.top;
      
      const progress = Math.min(Math.max((start - current) / (start - end), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lines = [
    {
      text: "Autonomous agents shouldn't blindly ingest thousands of lines of irrelevant code.",
      serifHighlight: "thousands of lines"
    },
    {
      text: "Whole-file dumps blow up context windows, spike token invoices, and cause fatal monorepo hallucinations.",
      serifHighlight: "fatal monorepo hallucinations"
    },
    {
      text: "M5 decouples retrieval from reasoning — serving pinpoint AST syntax chunks and verified dependency graphs in sub-15ms.",
      serifHighlight: "decouples retrieval from reasoning"
    }
  ];

  return (
    <section className="manifesto-section" ref={containerRef}>
      <div className="container">
        <div className="manifesto-badge-row">
          <span className="mono-pill-badge">
            <span className="mono-dot" />
            THE CONTEXT PARADOX
          </span>
          <span className="mono-date-tag">SPEC 2026.04</span>
        </div>

        <div className="manifesto-text-stack">
          {lines.map((item, index) => {
            // Determine active illumination threshold for each line
            const threshold = (index + 0.3) / lines.length;
            const isLit = scrollProgress >= threshold;
            const lineOpacity = Math.min(Math.max(0.28 + (scrollProgress * lines.length - index) * 0.72, 0.28), 1);

            return (
              <p
                key={index}
                className="manifesto-line"
                style={{
                  opacity: lineOpacity,
                  filter: isLit ? 'drop-shadow(0 0 24px rgba(255,255,255,0.18))' : 'none',
                  transition: 'opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease'
                }}
              >
                {item.text}
              </p>
            );
          })}
        </div>

        <div className="manifesto-footer-row">
          <div className="manifesto-stat-pill">
            <span className="manifesto-stat-num">&lt; 15ms</span>
            <span className="manifesto-stat-desc">Deterministic AST Hybrid Retrieval</span>
          </div>
          <button className="btn-pill-glass" onClick={openDemoModal}>
            <span>See the Retrieval Benchmark</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
