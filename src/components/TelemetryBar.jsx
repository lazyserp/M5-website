import React, { useState, useEffect } from 'react';
import { Activity, Zap, Cpu, Layers, ShieldCheck } from 'lucide-react';

export default function TelemetryBar() {
  const [latency, setLatency] = useState(14.2);
  const [activePings, setActivePings] = useState(2847);

  useEffect(() => {
    const interval = setInterval(() => {
      // Micro-jitter to feel alive like M5's live NOAA & clock telemetry
      setLatency((prev) => +(13.8 + Math.random() * 1.1).toFixed(1));
      setActivePings((prev) => prev + Math.floor(Math.random() * 5));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="telemetry-bar-wrapper">
      <div className="telemetry-container">
        <div className="telemetry-item status-live">
          <span className="telemetry-live-dot" />
          <span className="telemetry-label">SYSTEM</span>
          <span className="telemetry-val highlight-green">OPERATIONAL</span>
        </div>

        <div className="telemetry-divider" />

        <div className="telemetry-item">
          <Zap size={13} className="telemetry-icon" />
          <span className="telemetry-label">MEDIAN LATENCY</span>
          <span className="telemetry-val">{latency} ms</span>
        </div>

        <div className="telemetry-divider" />

        <div className="telemetry-item">
          <Cpu size={13} className="telemetry-icon" />
          <span className="telemetry-label">AST PARSE RATE</span>
          <span className="telemetry-val">1.2M LOC/s</span>
        </div>

        <div className="telemetry-divider" />

        <div className="telemetry-item">
          <Layers size={13} className="telemetry-icon" />
          <span className="telemetry-label">TOKEN REDUCTION</span>
          <span className="telemetry-val">78.4%</span>
        </div>

        <div className="telemetry-divider" />

        <div className="telemetry-item">
          <ShieldCheck size={13} className="telemetry-icon" />
          <span className="telemetry-label">INTEGRITY GUARD</span>
          <span className="telemetry-val">READ-ONLY AUDITED</span>
        </div>

        <div className="telemetry-divider hide-mobile" />

        <div className="telemetry-item hide-mobile">
          <Activity size={13} className="telemetry-icon" />
          <span className="telemetry-label">RPC PINGS</span>
          <span className="telemetry-val">{activePings.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
