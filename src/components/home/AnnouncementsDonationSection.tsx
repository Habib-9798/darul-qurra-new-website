import Link from 'next/link';
import { ArrowRight, Calendar, Heart, Tag } from 'lucide-react';

import { announcements } from '@/src/data/mockData';
import { SectionTitle } from '@/src/components/ui/Shared';

export function AnnouncementsDonationSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-sand/80"
      style={{
        backgroundImage: "url('/news-donation-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/12"></div>
      <div className="section-depth-bg opacity-40"></div>

      <section className="relative z-10 py-24">
        <div className="container-shell relative z-10 max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="reveal-left md:w-2/3">
              <SectionTitle
                title="Latest News & Notices"
                subtitle="Announcements"
                alignment="left"
              />
              <div className="arabic-divider justify-start">
                <span></span>
              </div>
            </div>

            <Link
              href="/events"
              className="magnetic-button group hidden items-center gap-2 font-semibold text-brand transition-colors duration-300 hover:text-gold md:inline-flex"
            >
              View All News
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {announcements.map((item, index) => (
              <article
                key={item.id}
                className={`surface-card slide-up-reveal structured-stagger card-hover-glow group rounded-[28px] border border-white/55 bg-white/45 p-8 backdrop-blur-md stagger-item stagger-${index + 1}`}
              >
                <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/10 bg-brand/5 px-3 py-1">
                    <Tag className="premium-icon-hover h-3 w-3" />
                    {item.category}
                  </span>
                  <span className="mx-1 h-1.5 w-1.5 rounded-full bg-gold"></span>
                  <span className="inline-flex items-center gap-1.5 text-dark/50">
                    <Calendar className="premium-icon-hover h-3.5 w-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold leading-snug text-brand-dark transition-colors duration-300 group-hover:text-brand">
                  <Link href="/events">{item.title}</Link>
                </h3>

                <p className="mb-6 text-sm leading-7 text-dark/68">
                  {item.summary}
                </p>

                <Link
                  href="/events"
                  className="magnetic-button group inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors duration-300 hover:text-gold"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              href="/events"
              className="secondary-btn magnetic-button group inline-flex items-center gap-2 px-6"
            >
              View All News
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-24 pt-4 md:pb-28">
        <div className="container-shell max-w-5xl">
          <div className="premium-outline reveal-card shine-effect relative overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,rgba(13,107,83,0.96)_0%,rgba(9,86,64,0.96)_55%,rgba(6,55,43,0.98)_100%)] px-6 py-14 text-center text-cream shadow-[0_24px_80px_rgba(8,54,41,0.22)] md:px-10">
            <div
              className="absolute inset-0 opacity-14"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.65) 1px, transparent 0)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="floating-particles"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,76,0.24),transparent_24%)]"></div>

            <div className="relative z-10">
              <div className="soft-float-rotate mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-gold">
                <Heart className="h-8 w-8" />
              </div>

              <h2 className="mb-4 text-balance text-3xl font-bold text-cream md:text-5xl">
                Invest in Sadaqah Jariyah
              </h2>

              <div className="arabic-divider">
                <span></span>
              </div>

              <p className="mx-auto mb-8 mt-6 max-w-2xl text-lg leading-8 text-cream/82">
                Your generous contributions help us provide scholarships,
                maintain our facilities, and continue spreading the light of the
                Quran.
              </p>

              <Link
                href="/donate"
                className="gold-pulse-button magnetic-button inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#caa24d,#e8cf96)] px-10 py-3.5 text-sm font-bold text-brand-deep shadow-[0_18px_45px_rgba(202,162,77,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(202,162,77,0.38)]"
              >
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
