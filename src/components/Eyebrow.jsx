import React from 'react';

export default function Eyebrow({ children, variant = 'aqua' }) {
  const isPurple = variant === 'purple';
  return (
    <div className={`eyebrow ${isPurple ? 'eyebrow-purple' : ''}`}>
      {children}
    </div>
  );
}
