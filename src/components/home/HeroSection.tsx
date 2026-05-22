import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, PlayCircle, Shield } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="luxury-dark-section relative flex min-h-[88vh] items-start overflow-visible pt-0">

      {/* ── Background Layer ───────────────────────────────────────────────
          FIX 1: Removed parallax-bg class from the Image.
          If parallax-bg attaches a scroll event listener anywhere, it runs
          on the main thread and directly competes with scroll painting.
          The hero already has heroImageZoom (CSS-only) — that's enough motion.

          FIX 2: Removed hero-image-zoom class. That class likely applies
          heroImageZoom keyframe which runs indefinitely. On a full-viewport
          image, a continuous scale animation means the browser is compositing
          a large layer on every frame. Removed to reduce background layer cost.
          If you want the slow zoom effect, it can be re-added only for desktop
          via a media query — not worth the cost on mobile.

          FIX 3: Merged 5 gradient overlay divs into 2.
          Previously: 5 absolutely-positioned full-viewport divs for gradients.
          Each one is a separate compositor layer. Merged into 2 combined
          gradients — visually identical, half the layer count.
      ───────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero.bg.png"
          alt="Darul Qurra Islamic Institute campus"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-top"
          quality={85}
        />

        {/* Merged overlay 1: left fade + bottom fade + top vignette */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(4,31,25,0.72)_0%,rgba(4,31,25,0.46)_38%,rgba(4,31,25,0.13)_68%,rgba(4,31,25,0.22)_100%),linear-gradient(to_bottom,rgba(4,31,25,0.02),rgba(4,31,25,0.34)),linear-gradient(to_bottom,transparent_64%,rgba(4,31,25,0.80)_100%)]" />

        {/* Merged overlay 2: ambient radial color tints + left side darkening */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(202,162,77,0.16),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(13,107,83,0.1),transparent_30%),linear-gradient(to_right,rgba(4,31,25,0.72),rgba(4,31,25,0.34)_50%,transparent_80%)]" />

        <div className="floating-dots opacity-12"></div>
      </div>

      {/* ── Ambient Orbs ───────────────────────────────────────────────────
          FIX 4: Removed blur-3xl (64px) from both orbs.
          The .ambient-orb class already applies filter:blur(50px) via CSS.
          blur-3xl on top of that was doubling the blur cost to ~114px effective
          blur radius — one of the most expensive compositor operations.
          Removed the Tailwind blur utility; the CSS class blur alone is enough
          for the soft glow effect.

          FIX 5: Reduced opacity values.
          opacity-32 and opacity-26 are non-standard Tailwind values — likely
          arbitrary values being applied. Reduced to standard values.
          Lighter orbs = less compositing cost at the edges.
      ───────────────────────────────────────────────────────────────────── */}
      <div className="ambient-orb ambient-orb-gold left-[5%] top-[18%] h-40 w-40 opacity-30" />
      <div className="ambient-orb ambient-orb-green right-[10%] top-[22%] h-60 w-60 opacity-25" />

      {/* ── Hero Content ───────────────────────────────────────────────── */}
      <div className="container-shell relative z-10 w-full pb-24 pt-32 md:pb-28 md:pt-36 lg:pb-32 lg:pt-40 xl:pt-44">
        <div className="max-w-[760px] lg:-ml-14 xl:-ml-20 2xl:-ml-24">

          {/* Admissions badge */}
          <div className="hero-text-reveal shine-effect mb-5 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-brand-deep/46 px-4 py-2 text-gold shadow-[0_0_30px_rgba(202,162,77,0.14)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-gold glow-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
              Admissions Open 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-text-reveal-delay text-balance mb-5 max-w-[760px] text-5xl font-bold leading-[0.94] text-cream drop-shadow-2xl md:text-6xl lg:text-7xl xl:text-8xl">
            A Legacy of
            <span className="gradient-motion mt-3 block bg-gradient-to-r from-[#FFF5C8] via-gold to-[#D9A44F] bg-clip-text text-transparent">
              Quranic Excellence
            </span>
          </h1>

          <div className="arabic-divider justify-start">
            <span></span>
          </div>

          {/* Description */}
          <p className="animate-fade-up mt-5 max-w-[660px] text-base leading-8 text-cream/92 drop-shadow-md md:text-lg lg:text-xl">
            Dedicated to the preservation and teaching of the Holy Quran
            through Tajweed, Qira&apos;at, and authentic Islamic guidance since
            1969.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/admissions"
              className="gold-pulse-button magnetic-button group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-8 py-3.5 text-sm font-bold text-brand-deep shadow-[0_18px_45px_rgba(202,162,77,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(202,162,77,0.38)] md:text-base"
            >
              Apply for Admission
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/courses"
              className="magnetic-button inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/24 bg-brand-deep/30 px-8 py-3.5 text-sm font-bold text-cream shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-brand-deep/44 md:text-base"
            >
              <PlayCircle className="h-4 w-4 text-gold" />
              Explore Programs
            </Link>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3 text-sm text-cream/84 md:mt-10">
            <div className="glass-card-hover flex items-center gap-2 rounded-full border border-white/16 bg-brand-deep/40 px-4 py-2 backdrop-blur-xl">
              <Shield className="premium-icon-hover h-4 w-4 text-gold" />
              <span>Established 1969</span>
            </div>

            <div className="glass-card-hover flex items-center gap-2 rounded-full border border-white/16 bg-brand-deep/40 px-4 py-2 backdrop-blur-xl">
              <BookOpen className="premium-icon-hover h-4 w-4 text-gold" />
              <span>Quran - Tajweed - Qira&apos;at</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

