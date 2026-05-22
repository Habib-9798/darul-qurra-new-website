'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 1400,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(0);
  // FIX: Removed separate hasStarted state + the useEffect that watched it.
  // Previously: IntersectionObserver fired → setHasStarted(true) → React re-render
  // → second useEffect detected hasStarted changed → started animation.
  // That's 2 renders before the counter even begins.
  //
  // Now: IntersectionObserver fires → animation starts immediately inside
  // the same callback. One fewer render, no wasted frame.
  const animationRef = useRef<number | null>(null);

  const startAnimation = useCallback(() => {
    // Cancel any in-progress animation (safety guard)
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Cubic ease-out: fast start, smooth finish — same easing as before
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(easedProgress * value);

      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // FIX: Ensure final value is exactly correct regardless of floating
        // point rounding in the easing calculation
        setCount(value);
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [value, duration]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      // FIX: Clean up any running animation frame on unmount
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startAnimation]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
