import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { SectionTitle } from '@/src/components/ui/Shared';

export function AboutPreviewSection() {
  return (
    <section
      className="relative overflow-visible"
      style={{
        backgroundImage: "url('/about-preview-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="section-depth-bg opacity-60"></div>

      <section className="relative z-30 -mt-14 pb-12 md:-mt-16 md:pb-16 lg:-mt-20">
        <div className="container-shell">
          <div className="premium-outline reveal-card shine-effect overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#caa24d,#e7ca8d)] px-4 py-8 shadow-[0_24px_70px_rgba(4,31,25,0.22)] md:px-8">
            <div className="grid grid-cols-2 gap-8 text-center text-brand-dark md:grid-cols-4">
              {[
                ['50+', 'Years Legacy'],
                ['10k+', 'Alumni'],
                ['20+', 'Expert Qaris'],
                ['Authentic', 'Certification'],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={`stagger-item stagger-${index + 1} px-2`}
                >
                  <h3 className="animated-counter mb-1 text-3xl font-bold md:text-4xl">
                    {value}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] md:text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-24 pt-6 md:pb-24 md:pt-8">
        <div className="container-shell relative z-10 max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div className="reveal-left relative">
              <div className="premium-outline image-mask-reveal image-hover-zoom relative overflow-hidden rounded-[34px] shadow-luxury-dark">

                {/* FIX: Replaced width/height props + className height with a
                    wrapper div that controls the height, and fill on the Image.
                    Previously: width={900} height={720} with CSS overriding both
                    dimensions → Next.js warned about mismatched sizing.
                    Now: the container div owns the height at each breakpoint,
                    Image uses fill + object-cover which is the correct pattern
                    for CSS-controlled responsive images. No more warning. */}
                <div className="relative h-[420px] w-full md:h-[560px] lg:h-[720px]">
                  <Image
                    src="/images/madrasa.png"
                    alt="Darul Qurra Madrasa Building"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/18 bg-brand-deep/58 p-5 text-cream shadow-[0_18px_50px_rgba(4,31,25,0.24)] backdrop-blur-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                    Peshawar Campus
                  </p>
                  <p className="mt-2 text-sm leading-6 text-cream/82">
                    A disciplined learning environment shaped by tradition,
                    adab, and care.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-right lg:pl-4">
              <SectionTitle
                title="A Beacon of Islamic Learning"
                subtitle="Welcome to Darul Qurra"
                alignment="left"
                description="Darul Qurra Peshawar has been a trusted center of Islamic learning for over five decades."
              />

              <div className="arabic-divider justify-start">
                <span></span>
              </div>

              <p className="mb-6 mt-8 text-lg text-dark/72">
                We are dedicated to providing a respectful, rigorous, and
                supportive environment for students seeking to connect deeply
                with the words of Allah.
              </p>

              <p className="mb-8 text-dark/68">
                From foundational Nazra classes to specialization in the ten
                Qira&apos;at, our expert faculty guides each student with patience,
                continuing an unbroken chain of spiritual transmission.
              </p>

              <div className="mb-10 grid gap-4">
                {[
                  'Specialized focus on exact Tajweed and beautiful recitation',
                  'Qualified teachers holding authentic Ijazahs',
                  'Structured memorization and lifelong retention methods',
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`soft-glass-card glass-card-hover stagger-item stagger-${index + 1} flex items-start gap-4 p-4 md:p-5`}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <BadgeCheck className="premium-icon-hover h-4 w-4" />
                    </div>
                    <p className="font-medium text-dark/86">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="magnetic-button group inline-flex items-center gap-2 font-semibold text-brand transition-colors duration-300 hover:text-gold"
              >
                Read Our Full History
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

