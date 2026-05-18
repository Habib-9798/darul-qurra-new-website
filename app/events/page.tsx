import { PageHero, SectionTitle, CTABanner } from '@/src/components/ui/Shared';
import { announcements } from '@/src/data/mockData';
import { Calendar, Tag, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <div>
      <PageHero
        title="Events & Announcements"
        subtitle="Stay updated with the latest happenings, academic deadlines, and community gatherings."
        image="https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        badge="Latest Updates"
      />

      <section className="section-glow py-20 md:py-24">
        <div className="container-shell relative z-10 max-w-5xl">
          <div className="surface-card mb-12 p-8 text-center md:p-10">
            <SectionTitle
              title="Latest Updates"
              subtitle="News & Notices"
              description="Keep up with admissions, academic activities, special events, and important institute notices."
            />
          </div>

          <div className="space-y-6">
            {announcements.map((announcement) => (
              <article
                id={announcement.slug}
                key={announcement.id}
                className="surface-card surface-card-hover premium-outline group flex flex-col gap-6 p-6 md:flex-row md:items-center md:p-8"
              >
                <div className="hidden h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full border border-gold/15 bg-cream/70 text-center md:flex">
                  <span className="text-3xl font-bold text-brand-dark">
                    {announcement.date.split(' ')[1].replace(',', '')}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                    {announcement.date.split(' ')[0]}
                  </span>
                </div>

                <div className="flex-grow">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/10 bg-brand/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                      <Tag className="h-3.5 w-3.5" />
                      {announcement.category}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-dark/50 md:hidden">
                      <Calendar className="h-3.5 w-3.5" />
                      {announcement.date}
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-brand-dark transition-colors duration-300 group-hover:text-brand">
                    {announcement.title}
                  </h3>

                  <p className="mb-6 leading-7 text-dark/68">
                    {announcement.summary}
                  </p>

                  <Link
                    href={`/events#${announcement.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors duration-300 hover:text-gold"
                  >
                    Read Full Detail
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="premium-outline shine-effect relative mt-16 overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#041f19_0%,#083629_50%,#06271f_100%)] p-8 text-center text-cream shadow-[0_22px_70px_rgba(8,54,41,0.22)] md:p-12">
            <div
              className="absolute inset-0 opacity-14"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.65) 1px, transparent 0)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,76,0.2),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_20%)]" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-gold">
                <Sparkles className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                  Stay Connected
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-cream md:text-3xl">
                Never Miss an Update
              </h3>

              <p className="mx-auto mb-8 max-w-xl text-cream/80">
                Join our community WhatsApp or mailing list to receive immediate
                notifications regarding admission deadlines and events.
              </p>

              <Link href="/contact" className="gold-btn px-8">
                Contact Us to Join
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
