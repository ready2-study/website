"use client";

import { useState, useEffect, useRef } from "react";

export const Counter = ({ maxCount }: { maxCount: number }) => {
  const [currVal, setCurrVal] = useState<number>(0);
  const [shouldCount, setShouldCount] = useState(false);
  const counterRef = useRef(null);

  const countingSpeedMs = 50;
  let countingValue = Math.floor(maxCount / 20) | 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldCount(true);
          observer.disconnect();
        }
      },
      { threshold: 1 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldCount) {
      const intervalId = setInterval(() => {
        setCurrVal((prevVal) => {
          if (prevVal >= maxCount) {
            clearInterval(intervalId);
            return prevVal;
          } else {
            const missingPart = maxCount - prevVal;
            if (missingPart < countingValue) {
              const exponent = Math.floor(Math.log10(missingPart));

              countingValue = Math.pow(10, exponent);
            }
            return prevVal + countingValue;
          }
        });
      }, countingSpeedMs);

      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }
  }, [shouldCount, maxCount]);
  return (
    <div ref={counterRef} className="text-additional text-5xl">
      {currVal}
    </div>
  );
};
