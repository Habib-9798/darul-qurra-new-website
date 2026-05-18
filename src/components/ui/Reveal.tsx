'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [once]);

  return (
    <div
      ref={ref}
      className={`premium-reveal premium-reveal-${type} ${
        visible ? 'is-visible' : ''
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
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