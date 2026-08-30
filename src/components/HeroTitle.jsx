import React, { useState, useEffect } from 'react';

const WORDS = [
  {
    text: 'Tokens.',
    type: 'tokens',
    className: 'hero-serif-tokens'
  },
  {
    text: 'Money.',
    type: 'money',
    className: 'hero-serif-money'
  }
];

export default function HeroTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % WORDS.length;
      setOutgoingIndex(currentIndex);
      setCurrentIndex(nextIndex);
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setOutgoingIndex(null);
      }, 750);

      return () => clearTimeout(timer);
    }, 3200);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const activeWord = WORDS[currentIndex];
  const outgoingWord = outgoingIndex !== null ? WORDS[outgoingIndex] : null;

  return (
    <div className="hero-giant-headline">
      <div className="hero-headline-row">
        <span className="hero-word-save">Save</span>
        <span className="hero-word-flip-slot">
          {/* Outgoing word smoothly gliding up */}
          {outgoingWord && isTransitioning && (
            <span className={`hero-word-layer outgoing-layer ${outgoingWord.className} word-slide-out`}>
              {outgoingWord.text}
            </span>
          )}

          {/* Active incoming word gliding in from bottom with ease-in-out */}
          <span className={`hero-word-layer active-layer ${activeWord.className} ${isTransitioning ? 'word-slide-in' : 'word-settled'}`}>
            {activeWord.text}
          </span>
        </span>
      </div>
    </div>
  );
}
