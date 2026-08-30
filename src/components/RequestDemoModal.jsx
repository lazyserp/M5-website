import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function RequestDemoModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [aiTool, setAiTool] = useState('cursor');
  const [teamSize, setTeamSize] = useState('10-50');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/lazyserp@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New M5 Demo Request from ${company || name}`,
          _template: 'table',
          _captcha: 'false',
          Name: name,
          Work_Email: email,
          Company: company,
          Engineering_Team_Size: teamSize,
          Timestamp: new Date().toLocaleString()
        })
      });
    } catch (err) {
      console.warn('Email dispatch notice:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail('');
    setName('');
    setCompany('');
    setNotes('');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="modal-header">
              <div className="modal-badge">
                <span className="modal-badge-dot" />
                Enterprise &amp; Team Sandbox
              </div>
              <h2 className="modal-title">Request an M5 Demo</h2>
              <p className="modal-subtitle">
                Experience blazing fast AI Agents and 85% token savings with 100% accuracy. All while your code remains secure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="modal-form-grid">
                <div className="modal-field">
                  <label className="modal-label">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Smith"
                    className="modal-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="modal-field">
                  <label className="modal-label">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="modal-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal-form-grid">
                <div className="modal-field">
                  <label className="modal-label">Company / Team</label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Inc."
                    className="modal-input"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div className="modal-field">
                  <label className="modal-label">Engineering Team Size</label>
                  <select
                    className="modal-select"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                  >
                    <option value="1-10">1 – 10 developers</option>
                    <option value="10-50">10 – 50 developers</option>
                    <option value="50-200">50 – 200 developers</option>
                    <option value="200+">200+ developers</option>
                  </select>
                </div>
              </div>


              <div className="modal-footer-note">
                <ShieldCheck size={14} color="#FFFFFF" style={{ flexShrink: 0 }} />
                <span>Zero code leaves your VPC. Context-only read operations.</span>
              </div>

              <button
                type="submit"
                className="btn btn-primary modal-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Scheduling sandbox...</span>
                ) : (
                  <>
                    <span>Submit Demo Request</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-success-state">
            <div className="modal-success-icon">
              <CheckCircle2 size={40} color="#FFFFFF" />
            </div>
            <h2 className="modal-success-title">Demo Request Received</h2>
            <p className="modal-success-desc">
              Thank you, <strong style={{ color: '#FFFFFF' }}>{name || 'there'}</strong>. We've queued your private VPC sandbox setup for <strong style={{ color: '#FFFFFF' }}>{company || 'your team'}</strong>.
            </p>
            <p className="modal-success-note">
              An engineer from our team will reach out to <strong style={{ color: '#FFFFFF' }}>{email}</strong> within 24 hours with your invite link and MCP integration keys.
            </p>
            <button className="btn btn-primary" onClick={handleReset} style={{ marginTop: '24px' }}>
              <span>Done</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
