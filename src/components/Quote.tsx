import React, { useEffect, useRef, useState } from 'react';
import { getRandomInt } from '../utils/random';

interface QuoteProps {}
const quotes = [
  'a web developer',
  'a musician',
  'a server programmer',
  'a gamer',
  'a fullstack developer',
  'a future millionaire ;)',
  'a student',
  'an AI developer'
];
const getRandomQuote = () => {
  const idx = getRandomInt(0, quotes.length - 1);
  return quotes[idx];
};
const speed = 150;
export const Quote: React.FC<QuoteProps> = () => {
  const [currentQuote, setCurrentQuote] = useState<string>('');
  const currentStateRef = useRef<string>('');
  currentStateRef.current = currentQuote;
  useEffect(() => {
    const removeText = async () => {
      return new Promise<void>((resolve) => {
        const timer = setInterval(() => {
          if (currentStateRef.current.length === 0) {
            clearInterval(timer);
            resolve();
            return;
          }
          setCurrentQuote(currentStateRef.current.slice(0, -1));
        }, speed);
      });
    };

    const main = async () => {
      while (true) {
        const quote = getRandomQuote();
        setCurrentQuote(quote[0]);
        await new Promise<void>((resolve) => {
          const timer = setInterval(() => {
            let remaining = quote.replace(currentStateRef.current, '');
            if (currentStateRef.current === quote) {
              clearInterval(timer);
              setTimeout(() => {
                removeText().then(() => {
                  setTimeout(() => {
                    resolve();
                  }, 500);
                });
              }, 2000);

              return;
            }
            setCurrentQuote(currentStateRef.current + remaining[0]);
          }, speed);
        });
      }
    };
    main();
  }, []);

  return (
    <p
      id="quote"
      className="mt-5 text-2xl sm:text-3xl font-consolas text-light-200 w-60 sm:w-96 h-20"
    >
      {currentQuote}
    </p>
  );
};
