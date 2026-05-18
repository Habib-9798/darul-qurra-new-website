import { Quote, Star } from 'lucide-react';

import { testimonials } from '@/src/data/mockData';
import { SectionTitle } from '@/src/components/ui/Shared';

export function TestimonialsSection() {
  return (
    <section
      className="floating-bokeh relative overflow-hidden border-t border-sand/70 py-24"
      style={{
        backgroundImage: "url('/testimonials-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/12"></div>

      <div className="container-shell relative z-10 max-w-7xl">
        <div className="reveal-up">
          <SectionTitle
            title="Voices of our Community"
            subtitle="Testimonials"
            description="Experiences shared by students, families, and members of our wider community."
          />
          <div className="arabic-divider">
            <span></span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((test, index) => (
            <div
              key={test.id}
              className={`surface-card card-hover-glow reveal-card relative rounded-[28px] border border-white/50 bg-white/40 p-8 backdrop-blur-md md:p-10 stagger-item stagger-${index + 1}`}
            >
              <Quote className="soft-float-rotate absolute right-8 top-8 h-12 w-12 text-gold/20" />

              <div className="relative z-10 mb-6 flex gap-1.5 text-gold">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="relative z-10 mb-8 text-lg italic leading-8 text-dark/78">
                &ldquo;{test.content}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="animated-counter flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-lg font-bold text-brand">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark">{test.name}</h4>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
