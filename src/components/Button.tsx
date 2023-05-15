import { stagger, useAnimate } from 'framer-motion';
import React from 'react';

export default function Button() {
  const [scope, animate] = useAnimate();

  //? at: '<' means that the animation will start at the same time as the previous animation

  const onButtonClick = () => {
    animate([
      ['.letter', { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ['button', { scale: 0.8 }, { duration: 0.1, at: '<' }],
      ['button', { scale: 1 }, { duration: 0.1 }],
      ['.letter', { y: 0 }, { duration: 0.0001, at: 0.5 }],
    ]);
  };

  return (
    <div ref={scope}>
      <button
        onClick={onButtonClick}
        className="relative rounded-full border-2 border-blue-600 px-6 py-2 text-2xl text-blue-600 transition-colors hover:bg-blue-100"
      >
        <span className="sr-only">Motion</span>
        <span aria-hidden className="block h-8 overflow-hidden">
          {['M', 'o', 't', 'i', 'o', 'n'].map((letter, index) => (
            <span
              data-letter={letter}
              className="letter inline-block relative h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
              key={`${letter}-${index}`}
            >
              {letter}
            </span>
          ))}
        </span>
      </button>
    </div>
  );
}
