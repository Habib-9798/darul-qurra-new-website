import { PageHero, SectionTitle, CTABanner } from '@/src/components/ui/Shared';
import { faqs } from '@/src/data/mockData';
import { MessageSquareQuote, Sparkles } from 'lucide-react';

export default function FAQsPage() {
  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find clear answers to common queries about admissions, courses, campus facilities, and daily study life."
        badge="Help Center"
      />

      <section className="section-glow py-20 md:py-24">
        <div className="container-shell relative z-10 max-w-5xl">
          <div className="surface-card mb-12 p-8 text-center md:p-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
              <MessageSquareQuote className="h-7 w-7" />
            </div>

            <SectionTitle
              title="Help & Information"
              subtitle="Answers"
              description="We have gathered the most common questions from students and families to make your next steps easier."
            />
          </div>

          <div className="space-y-10">
            {faqs.map((categoryBlock, index) => (
              <section key={index} className="surface-card surface-card-hover p-7 md:p-8">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 text-gold">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                    {categoryBlock.category}
                  </span>
                </div>

                <h3 className="mb-6 border-b border-gold/12 pb-4 text-2xl font-bold text-brand-dark md:text-3xl">
                  {categoryBlock.category}
                </h3>

                <div className="space-y-4">
                  {categoryBlock.items.map((faq, i) => (
                    <details
                      key={i}
                      className="premium-outline group rounded-[24px] border border-sand/90 bg-cream/55 p-1 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-[20px] px-5 py-5 text-left text-lg font-semibold text-brand-dark transition-colors duration-300">
                        <span>{faq.question}</span>

                        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                          <span className="absolute h-0.5 w-3 bg-brand transition-all duration-300 group-open:bg-gold"></span>
                          <span className="absolute h-3 w-0.5 bg-brand transition-all duration-300 group-open:rotate-90 group-open:opacity-0"></span>
                        </span>
                      </summary>

                      <div className="px-5 pb-5 pt-1 text-sm leading-7 text-dark/68">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
