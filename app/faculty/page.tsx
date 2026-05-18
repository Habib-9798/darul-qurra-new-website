import Image from 'next/image';
import { PageHero, SectionTitle, CTABanner } from '@/src/components/ui/Shared';
import { faculty } from '@/src/data/mockData';
import { BadgeCheck, BookOpen, Sparkles, GraduationCap } from 'lucide-react';

export default function FacultyPage() {
  return (
    <div>
      <PageHero
        title="Our Faculty"
        subtitle="Meet the scholars and instructors guiding students with knowledge, patience, and sincere dedication to the Quran."
        badge="Qualified Guidance"
      />

      <section className="section-glow py-20 md:py-24">
        <div className="container-shell relative z-10 max-w-6xl">
          <div className="surface-card mb-12 p-8 md:p-10">
            <SectionTitle
              title="Teachers & Mentors"
              subtitle="Scholars of Trust"
              description="Our faculty combines spiritual depth, teaching experience, and a deep commitment to transmitting Quranic knowledge with care and precision."
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {faculty.map((member) => (
              <article
                key={member.id}
                className="surface-card surface-card-hover premium-outline interactive-card group overflow-hidden p-6 md:p-7"
              >
                <div className="grid items-start gap-6 sm:grid-cols-[160px_1fr]">
                  <div className="relative overflow-hidden rounded-[26px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={320}
                      height={320}
                      sizes="(min-width: 640px) 160px, 100vw"
                      className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-44"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 to-transparent" />
                  </div>

                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                        Faculty Profile
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-brand-dark">
                      {member.name}
                    </h3>

                    <p className="mt-1 font-medium text-gold">{member.title}</p>

                    <p className="mt-4 text-sm leading-7 text-dark/68">
                      {member.bio}
                    </p>

                    {(member.badges || []).length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {(member.badges || []).map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center gap-1 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold"
                          >
                            <BadgeCheck className="h-3.5 w-3.5" />
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-5 rounded-[22px] border border-gold/12 bg-cream/60 p-4">
                      <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-brand-dark">
                        <BookOpen className="h-4 w-4 text-gold" />
                        Teaching Areas
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {member.courses.map((course) => (
                          <span
                            key={course}
                            className="rounded-full border border-brand/8 bg-white px-3 py-1 text-xs font-medium text-dark/70 shadow-sm"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-sm text-dark/55">
                      <GraduationCap className="h-4 w-4 text-brand" />
                      <span>Dedicated to careful instruction and student growth</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
