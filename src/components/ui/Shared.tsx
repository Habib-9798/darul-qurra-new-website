import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface TitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  description?: string;
}

export function SectionTitle({
  title,
  subtitle,
  alignment = 'center',
  description,
}: TitleProps) {
  const isCenter = alignment === 'center';

  return (
    <div
      className={cn(
        isCenter ? 'mx-auto text-center' : 'text-left',
        'reveal-up mb-12'
      )}
    >
      <div
        className={cn(
          'mb-4 flex items-center gap-3',
          isCenter ? 'justify-center' : 'justify-start'
        )}
      >
        <div className="h-px w-12 bg-gold/45"></div>
        <span className="section-label shine-effect">{subtitle || 'Darul Qurra'}</span>
        <div className="h-px w-12 bg-gold/45"></div>
      </div>

      <h2 className="text-balance mb-4 text-3xl font-bold text-brand-dark md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            'text-dark/66',
            isCenter ? 'mx-auto max-w-2xl' : 'max-w-xl'
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
  badge?: string;
}

export function PageHero({
  title,
  subtitle,
  // FIX: Replaced broken Unsplash URL with local hero image.
  // The Unsplash URL was returning 404 because the external image was
  // unavailable, causing a red error in the console on every page that
  // uses PageHero (About, Admissions, Courses, Faculty, etc.).
  // Using the same hero image already present in /public/images/ ensures
  // it always loads, works offline/dev, and goes through Next.js optimization.
  image = '/images/hero.bg.png',
  badge = 'Since 1969',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-deep py-28 md:py-36">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Darul Qurra Islamic Institute"
          fill
          priority
          sizes="100vw"
          className="hero-image-zoom h-full w-full scale-[1.04] object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,76,0.18),transparent_20%),linear-gradient(to_bottom,rgba(4,31,25,0.62),rgba(6,39,31,0.96))]"></div>
        <div className="absolute inset-0 bg-grid-fade opacity-[0.06]"></div>
        <div className="floating-particles"></div>
      </div>

      <div className="ambient-orb ambient-orb-gold floating-glow left-[8%] top-[14%] h-36 w-36"></div>
      <div className="ambient-orb ambient-orb-green floating-glow right-[10%] top-[18%] h-44 w-44"></div>

      <div className="container-shell relative z-10 text-center">
        <div className="hero-shell premium-outline shine-effect mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-14">
          <div className="hero-text-reveal mb-6 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-gold/90">
            <div className="h-px w-7 bg-gold/45"></div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
              {badge}
            </span>
            <div className="h-px w-7 bg-gold/45"></div>
          </div>

          <h1 className="hero-text-reveal-delay text-balance mb-6 text-4xl font-bold tracking-tight text-cream md:text-5xl lg:text-7xl">
            {title}
          </h1>

          <p className="animate-fade-up text-balance mx-auto max-w-3xl text-lg leading-8 text-cream/82 md:text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container-shell">
        <div className="premium-outline reveal-card shine-effect relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0b6a51_0%,#09513f_50%,#06372b_100%)] px-6 py-14 text-center text-cream shadow-[0_24px_80px_rgba(8,54,41,0.22)] md:px-10 md:py-18">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.65) 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }}
          />
          <div className="floating-particles"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,76,0.26),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_20%)]"></div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-gold">
              <Sparkles className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
                Begin Today
              </span>
            </div>

            <h2 className="text-balance mb-4 text-3xl font-bold text-cream md:text-5xl">
              Ready to Begin Your Quranic Journey?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-cream/80">
              Join our established community of learners. Admissions are open for
              upcoming batches in our Hifz and Tajweed programs.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/admissions" className="gold-btn group px-8">
                Apply for Admission
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-cream backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

