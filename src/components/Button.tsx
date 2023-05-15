import { useAnimate } from 'framer-motion';
import React from 'react';

export default function Button() {
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    animate([['.letter', { y: -48 }, { duration: 0.2 }]]);
  };

  return (
    <div ref={scope}>
      <button
        onClick={onButtonClick}
        className="relative rounded-full border-2 border-blue-600 px-6 py-2 text-2xl text-blue-600 transition-colors hover:bg-blue-100"
      >
        <span className="sr-only">Motion</span>
        <span aria-hidden>
          {['M', 'o', 't', 'i', 'o', 'n'].map((letter, index) => (
            <span className="letter inline-block" key={`${letter}-${index}`}>
              {letter}
            </span>
          ))}
        </span>
      </button>
    </div>
  );
}
