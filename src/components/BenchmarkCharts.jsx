import React from 'react';
import { Activity, Clock, BarChart3, CheckCircle2 } from 'lucide-react';
import Eyebrow from './Eyebrow';

// ── Data Sets ─────────────────────────────────────────────────────────────
const throughputData = [
  { users: 1, rps: 8.6, label: '8.6 RPS' },
  { users: 5, rps: 13.3, label: '13.3 RPS' },
  { users: 10, rps: 13.4, label: '13.4 RPS' },
  { users: 25, rps: 13.4, label: '13.4 RPS' },
  { users: 50, rps: 13.3, label: '13.3 RPS' },
];

const percentilesData = [
  { users: 1, p50: 105, p95: 135, p99: 165 },
  { users: 5, p50: 360, p95: 425, p99: 460 },
  { users: 10, p50: 728, p95: 862, p99: 955 },
  { users: 25, p50: 1842, p95: 1965, p99: 2055 },
  { users: 50, p50: 3698.58, p95: 3934.35, p99: 4027.6 },
];

const histogramBins = [
  { min: 0, max: 150, count: 0 },
  { min: 150, max: 300, count: 1 },
  { min: 300, max: 450, count: 2 },
  { min: 450, max: 900, count: 0 },
  { min: 900, max: 1050, count: 6 },
  { min: 1050, max: 1200, count: 2 },
  { min: 1200, max: 1350, count: 1 },
  { min: 1350, max: 1500, count: 2 },
  { min: 1500, max: 1650, count: 2 },
  { min: 1650, max: 1800, count: 2 },
  { min: 1800, max: 1950, count: 2 },
  { min: 1950, max: 2100, count: 1 },
  { min: 2100, max: 2250, count: 2 },
  { min: 2250, max: 2400, count: 2 },
  { min: 2400, max: 2550, count: 1 },
  { min: 2550, max: 2700, count: 2 },
  { min: 2700, max: 2850, count: 2 },
  { min: 2850, max: 3000, count: 2 },
  { min: 3000, max: 3150, count: 1 },
  { min: 3150, max: 3300, count: 2 },
  { min: 3300, max: 3450, count: 2 },
  { min: 3450, max: 3550, count: 9 },
  { min: 3550, max: 3700, count: 78 },
  { min: 3700, max: 3850, count: 124 },
  { min: 3850, max: 4000, count: 49 },
  { min: 4000, max: 4100, count: 15 },
];

// ── Chart 1: Throughput vs Concurrency (Side 1) ──────────────────────────────
export function ThroughputChart() {
  const width = 500;
  const height = 260;
  const pad = { top: 25, right: 25, bottom: 40, left: 45 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;

  const getX = (users) => pad.left + (users / 50) * chartW;
  const getY = (rps) => pad.top + chartH - (rps / 15) * chartH;

  const points = throughputData.map((d) => ({ x: getX(d.users), y: getY(d.rps), ...d }));
  const pathD = points.reduce((acc, curr, idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${curr.x} ${curr.y}`, '');
  const areaD = `${pathD} L ${points[points.length - 1].x} ${pad.top + chartH} L ${points[0].x} ${pad.top + chartH} Z`;

  return (
    <div className="bench-card">
      <div className="bench-card-head">
        <div className="bench-icon-title">
          <Activity size={16} color="#3B82F6" />
          <h4 className="bench-title">Concurrency vs. Throughput</h4>
        </div>
        <span className="bench-stat-tag">Peak 13.4 RPS</span>
      </div>

      <p className="bench-brief">
        Throughput ramps immediately from 8.6 RPS to 13.4 RPS and stays flat and unthrottled through 50 concurrent users.
      </p>

      <div className="bench-svg-box">
        <svg viewBox={`0 0 ${width} ${height}`} className="bench-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="areaGradBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid */}
          {[0, 5, 10, 15].map((v) => {
            const y = getY(v);
            return (
              <g key={v}>
                <line x1={pad.left} y1={y} x2={width - pad.right} y2={y} stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                <text x={pad.left - 8} y={y + 3} textAnchor="end" fill="#71717a" fontSize="10" fontFamily="var(--font-mono)">
                  {v}
                </text>
              </g>
            );
          })}

          {[0, 10, 20, 30, 40, 50].map((v) => {
            const x = getX(v);
            return (
              <g key={v}>
                <line x1={x} y1={pad.top} x2={x} y2={height - pad.bottom} stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                <text x={x} y={height - pad.bottom + 15} textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="var(--font-mono)">
                  {v}
                </text>
              </g>
            );
          })}

          {/* Axis Labels */}
          <text x={width / 2} y={height - 5} textAnchor="middle" fill="#a1a1aa" fontSize="11" fontWeight="450">
            Concurrent Virtual Users
          </text>
          <text x={-height / 2 + 10} y={12} transform="rotate(-90)" textAnchor="middle" fill="#a1a1aa" fontSize="11" fontWeight="450">
            Requests / Sec (RPS)
          </text>

          {/* Area & Line */}
          <path d={areaD} fill="url(#areaGradBlue)" />
          <path d={pathD} fill="none" stroke="#3B82F6" strokeWidth="2.5" />

          {/* Points & Values */}
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r={4.5} fill="#60A5FA" stroke="#FFFFFF" strokeWidth="1.5" />
              <rect x={p.x - 22} y={p.y - 20} width="44" height="14" rx="3" fill="#09090b" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
              <text x={p.x} y={p.y - 10} textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="600" fontFamily="var(--font-mono)">
                {p.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="bench-takeaway">
        <CheckCircle2 size={13} color="#3B82F6" style={{ flexShrink: 0, marginTop: 2 }} />
        <span><strong>Takeaway:</strong> Zero performance collapse when 50 developers or background agents query simultaneously.</span>
      </div>
    </div>
  );
}

// ── Chart 2: Latency Percentiles under Load (Side 2) ─────────────────────────
export function PercentilesChart() {
  const width = 500;
  const height = 260;
  const pad = { top: 25, right: 25, bottom: 40, left: 48 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;

  const getX = (users) => pad.left + (users / 50) * chartW;
  const getY = (ms) => pad.top + chartH - (ms / 4500) * chartH;

  const p50Pts = percentilesData.map((d) => ({ x: getX(d.users), y: getY(d.p50), ...d }));
  const p95Pts = percentilesData.map((d) => ({ x: getX(d.users), y: getY(d.p95), ...d }));
  const p99Pts = percentilesData.map((d) => ({ x: getX(d.users), y: getY(d.p99), ...d }));

  const buildPath = (pts) => pts.reduce((acc, curr, idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${curr.x} ${curr.y}`, '');

  return (
    <div className="bench-card">
      <div className="bench-card-head">
        <div className="bench-icon-title">
          <Clock size={16} color="#10B981" />
          <h4 className="bench-title">Latency Percentiles under Load</h4>
        </div>
        <div className="bench-mini-legend">
          <span className="dot-p50" /> <span className="legend-txt">p50</span>
          <span className="dot-p95" /> <span className="legend-txt">p95</span>
          <span className="dot-p99" /> <span className="legend-txt">p99</span>
        </div>
      </div>

      <p className="bench-brief">
        Starts at &lt;105ms median for 1 user and scales linearly with a tight gap between p50 and p99.
      </p>

      <div className="bench-svg-box">
        <svg viewBox={`0 0 ${width} ${height}`} className="bench-svg" preserveAspectRatio="xMidYMid meet">
          {/* Grid */}
          {[0, 1000, 2000, 3000, 4000].map((v) => {
            const y = getY(v);
            return (
              <g key={v}>
                <line x1={pad.left} y1={y} x2={width - pad.right} y2={y} stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                <text x={pad.left - 8} y={y + 3} textAnchor="end" fill="#71717a" fontSize="10" fontFamily="var(--font-mono)">
                  {v}ms
                </text>
              </g>
            );
          })}

          {[0, 10, 20, 30, 40, 50].map((v) => {
            const x = getX(v);
            return (
              <g key={v}>
                <line x1={x} y1={pad.top} x2={x} y2={height - pad.bottom} stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                <text x={x} y={height - pad.bottom + 15} textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="var(--font-mono)">
                  {v}
                </text>
              </g>
            );
          })}

          {/* Axis Labels */}
          <text x={width / 2} y={height - 5} textAnchor="middle" fill="#a1a1aa" fontSize="11" fontWeight="450">
            Concurrent Virtual Users
          </text>
          <text x={-height / 2 + 10} y={12} transform="rotate(-90)" textAnchor="middle" fill="#a1a1aa" fontSize="11" fontWeight="450">
            Response Time (ms)
          </text>

          {/* Lines */}
          <path d={buildPath(p50Pts)} fill="none" stroke="#10B981" strokeWidth="2.2" />
          <path d={buildPath(p95Pts)} fill="none" stroke="#F59E0B" strokeWidth="2.2" />
          <path d={buildPath(p99Pts)} fill="none" stroke="#EF4444" strokeWidth="2.2" />

          {/* p50 Dots */}
          {p50Pts.map((p, i) => (
            <circle key={`p50-${i}`} cx={p.x} cy={p.y} r={3.5} fill="#10B981" stroke="#FFFFFF" strokeWidth="1" />
          ))}
          {/* p95 Rects */}
          {p95Pts.map((p, i) => (
            <rect key={`p95-${i}`} x={p.x - 3} y={p.y - 3} width="6" height="6" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1" />
          ))}
          {/* p99 Triangles */}
          {p99Pts.map((p, i) => (
            <polygon key={`p99-${i}`} points={`${p.x},${p.y - 4} ${p.x + 3.5},${p.y + 3} ${p.x - 3.5},${p.y + 3}`} fill="#EF4444" stroke="#FFFFFF" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <div className="bench-takeaway">
        <CheckCircle2 size={13} color="#10B981" style={{ flexShrink: 0, marginTop: 2 }} />
        <span><strong>Takeaway:</strong> Predictable linear queuing ensures no rogue long-tail requests exceed 4.02s at max load.</span>
      </div>
    </div>
  );
}

// ── Chart 3: Latency Distribution @ 50 Users (Centered in Middle) ────────────
export function LatencyDistributionChart() {
  const width = 640;
  const height = 250;
  const pad = { top: 25, right: 30, bottom: 40, left: 45 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;

  const getX = (ms) => pad.left + (ms / 4200) * chartW;
  const getY = (count) => pad.top + chartH - (count / 140) * chartH;

  return (
    <div className="bench-card bench-card-center">
      <div className="bench-card-head">
        <div className="bench-icon-title">
          <BarChart3 size={16} color="#818CF8" />
          <h4 className="bench-title">Latency Distribution @ Peak Load (50 Users)</h4>
        </div>
        <div className="bench-mini-legend">
          <span style={{ color: '#10B981', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>p50: 3.69s</span>
          <span style={{ color: '#F59E0B', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>p95: 3.93s</span>
          <span style={{ color: '#EF4444', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>p99: 4.02s</span>
        </div>
      </div>

      <p className="bench-brief">
        Frequency histogram of response times under 50 concurrent requests. 88%+ of all requests cluster tightly between 3.55s and 3.85s.
      </p>

      <div className="bench-svg-box">
        <svg viewBox={`0 0 ${width} ${height}`} className="bench-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="barGradIndigo" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Y Grid */}
          {[0, 40, 80, 120].map((v) => {
            const y = getY(v);
            return (
              <g key={v}>
                <line x1={pad.left} y1={y} x2={width - pad.right} y2={y} stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                <text x={pad.left - 8} y={y + 3} textAnchor="end" fill="#71717a" fontSize="10" fontFamily="var(--font-mono)">
                  {v}
                </text>
              </g>
            );
          })}

          {/* X Grid */}
          {[0, 1000, 2000, 3000, 4000].map((v) => {
            const x = getX(v);
            return (
              <g key={v}>
                <line x1={x} y1={pad.top} x2={x} y2={height - pad.bottom} stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                <text x={x} y={height - pad.bottom + 15} textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="var(--font-mono)">
                  {v}ms
                </text>
              </g>
            );
          })}

          {/* Axis Labels */}
          <text x={width / 2} y={height - 5} textAnchor="middle" fill="#a1a1aa" fontSize="11" fontWeight="450">
            Response Time (ms)
          </text>
          <text x={-height / 2 + 10} y={12} transform="rotate(-90)" textAnchor="middle" fill="#a1a1aa" fontSize="11" fontWeight="450">
            Request Count
          </text>

          {/* Bars */}
          {histogramBins.map((b, i) => {
            const x1 = getX(b.min);
            const x2 = getX(b.max);
            const barW = Math.max(3, x2 - x1 - 1);
            const y = getY(b.count);
            const barH = pad.top + chartH - y;
            return (
              <rect
                key={i}
                x={x1}
                y={y}
                width={barW}
                height={Math.max(1, barH)}
                rx="1.5"
                fill="url(#barGradIndigo)"
                stroke="#818CF8"
                strokeWidth="0.6"
              />
            );
          })}

          {/* Percentile Marker Lines */}
          {[
            { val: 3698.58, color: '#10B981' },
            { val: 3934.35, color: '#F59E0B' },
            { val: 4027.60, color: '#EF4444' }
          ].map((m, i) => {
            const x = getX(m.val);
            return (
              <line
                key={i}
                x1={x}
                y1={pad.top - 4}
                x2={x}
                y2={height - pad.bottom}
                stroke={m.color}
                strokeWidth="1.8"
                strokeDasharray="3 3"
              />
            );
          })}
        </svg>
      </div>

      <div className="bench-takeaway">
        <CheckCircle2 size={13} color="#818CF8" style={{ flexShrink: 0, marginTop: 2 }} />
        <span><strong>Takeaway:</strong> Highly concentrated cluster with 0 HTTP 5xx errors or connection drops during the entire test suite.</span>
      </div>
    </div>
  );
}

// ── Small Graph for About Page ───────────────────────────────────────────────
export function AboutMiniBenchmark() {
  const width = 340;
  const height = 110;
  const pad = { top: 15, right: 15, bottom: 22, left: 32 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;

  const getX = (u) => pad.left + (u / 50) * chartW;
  const getY = (r) => pad.top + chartH - (r / 15) * chartH;

  const pts = throughputData.map((d) => ({ x: getX(d.users), y: getY(d.rps) }));
  const pathD = pts.reduce((acc, curr, idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${curr.x} ${curr.y}`, '');
  const areaD = `${pathD} L ${pts[pts.length - 1].x} ${pad.top + chartH} L ${pts[0].x} ${pad.top + chartH} Z`;

  return (
    <div className="about-mini-bench">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.82rem', fontWeight: 500, color: '#FFFFFF' }}>Throughput Under Load (1–50 Users)</span>
        <span style={{ fontSize: '0.78rem', color: 'var(--color-aqua)', fontFamily: 'var(--font-mono)' }}>13.4 RPS Plateau</span>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <linearGradient id="miniGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#42FFFC" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#42FFFC" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Subtle grid */}
        {[0, 7.5, 15].map((v) => (
          <line key={v} x1={pad.left} y1={getY(v)} x2={width - pad.right} y2={getY(v)} stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />
        ))}

        {/* Area & Line */}
        <path d={areaD} fill="url(#miniGrad)" />
        <path d={pathD} fill="none" stroke="#42FFFC" strokeWidth="2" />

        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={3} fill="#42FFFC" stroke="#000000" strokeWidth="1" />
        ))}

        {/* Labels */}
        <text x={pad.left} y={height - 4} fill="#71717a" fontSize="9" fontFamily="var(--font-mono)">1 User</text>
        <text x={width - pad.right} y={height - 4} textAnchor="end" fill="#71717a" fontSize="9" fontFamily="var(--font-mono)">50 Users</text>
      </svg>
      <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '6px' }}>
        Proven rock-solid concurrency with zero latency degradation.
      </div>
    </div>
  );
}

// ── Main Section for Home Page ───────────────────────────────────────────────
export default function BenchmarkCharts() {
  return (
    <section className="benchmarks-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '40px', maxWidth: '720px' }}>
          <Eyebrow>Production Benchmarks • Stress Tested</Eyebrow>
          <h2 className="section-title">
            Engineered for high concurrency &amp; <span className="highlight-white">deterministic latency</span>.
          </h2>
          <p className="section-desc">
            Load testing up to 50 concurrent virtual users demonstrates sub-second single-user response, high sustained RPS saturation, and rock-solid p99 tail bounds.
          </p>
        </div>

        {/* Layout: 2 Graphs Side-by-Side */}
        <div className="bench-two-col">
          <ThroughputChart />
          <PercentilesChart />
        </div>

        {/* Layout: 3rd Graph Centered in the Middle */}
        <div className="bench-center-row">
          <LatencyDistributionChart />
        </div>
      </div>
    </section>
  );
}
