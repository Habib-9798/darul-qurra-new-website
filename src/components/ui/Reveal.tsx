'use client';
import { ReactNode, useEffect, useRef, useCallback } from 'react';

type RevealType =
  | 'fade-up'
  | 'fade-left'
  | 'fade-right'
  | 'scale'
  | 'blur'
  | 'mask';

interface RevealProps {
  children: ReactNode;
  type?: RevealType;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  type = 'fade-up',
  delay = 0,
  className = '',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // KEY CHANGE: No useState. Directly manipulate the DOM class.
  // This avoids React re-renders completely on scroll.
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    [once]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set delay via CSS custom property — avoids inline style recalc
    if (delay > 0) {
      element.style.setProperty('--reveal-delay', `${delay}ms`);
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.12,       // Slightly lower — more forgiving on mobile
      rootMargin: '0px 0px -6% 0px',
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, handleIntersection]);

  return (
    <div
      ref={ref}
      className={`premium-reveal premium-reveal-${type}${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  );
}

interface RevealGroupProps {
  children: ReactNode[];
  className?: string;
  type?: RevealType;
  staggerDelay?: number;
}

export function RevealGroup({
  children,
  className = '',
  type = 'fade-up',
  staggerDelay = 110,
}: RevealGroupProps) {
  return (
    <>
      {children.map((child, index) => (
        <Reveal
          key={index}
          type={type}
          delay={index * staggerDelay}
          className={className}
        >
          {child}
        </Reveal>
      ))}
    </>
  );
}
