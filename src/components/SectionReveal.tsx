'use client';

import { useEffect, useRef, useCallback, type ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // FIX: Removed useState(isVisible) entirely.
  // Previously, every section entering the viewport triggered setIsVisible(true),
  // causing a React re-render for each section. With 10+ sections on the home page,
  // scrolling through triggered a cascade of re-renders on the main thread,
  // competing directly with scroll paint and causing jank.
  //
  // Now we directly add the class to the DOM element — zero React involvement,
  // zero re-renders, instant visual response.
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    []
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // FIX: Set delay as CSS custom property instead of inline style.
    // Inline style on every render forces style recalculation.
    // CSS custom property is set once and never touched again.
    if (delay > 0) {
      node.style.setProperty('--section-reveal-delay', `${delay}ms`);
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, [delay, handleIntersection]);

  const directionClass = {
    up: 'reveal-up',
    down: 'reveal-down',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }[direction];

  // FIX: Removed isVisible from className — it is now applied directly
  // via classList.add in the IntersectionObserver callback above.
  // The inline style for transitionDelay is also removed — handled via
  // CSS custom property --section-reveal-delay set in useEffect.
  return (
    <div
      ref={ref}
      className={cn('reveal-base', directionClass, className)}
    >
      {children}
    </div>
  );
}
