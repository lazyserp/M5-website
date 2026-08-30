import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ title, code, language = 'json' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="codeblock-wrapper">
      {title && (
        <div className="codeblock-header">
          <span>{title}</span>
          <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
            {copied ? (
              <>
                <Check size={12} />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      {!title && (
        <button
          className={`copy-btn ${copied ? 'copied' : ''}`}
          style={{ position: 'absolute', top: 12, right: 12, zIndex: 10 }}
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <Check size={12} />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      )}
      <pre className="codeblock-pre">
        <code>{code}</code>
      </pre>
    </div>
  );
}
