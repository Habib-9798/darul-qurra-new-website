import { PageHero, SectionTitle, CTABanner } from '@/src/components/ui/Shared';
import { programs } from '@/src/data/mockData';
import { ProgramCard } from '@/src/components/ui/ProgramCard';
import {
  BookOpenText,
  GraduationCap,
  Clock3,
  Sparkles,
} from 'lucide-react';

export default function CoursesPage() {
  return (
    <div>
      <PageHero
        title="Our Programs"
        subtitle="Explore a carefully structured range of Quranic programs for children, adults, Huffaz, and advanced students."
        badge="Academic Pathways"
      />

      <section className="section-glow py-20 md:py-24">
        <div className="container-shell relative z-10">
          <div className="surface-card mb-12 p-8 md:p-10">
            <SectionTitle
              title="Structured Learning Paths"
              subtitle="Academic Offerings"
              description="Thoughtfully designed programs that support beginners, developing reciters, memorization students, and advanced learners."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                [
                  BookOpenText,
                  'Foundational Study',
                  'Nazra, reading fluency, letter precision, and careful Tajweed progression.',
                ],
                [
                  GraduationCap,
                  'Advanced Mastery',
                  "Hifz, Qira'at, and scholar-guided advanced recitation for serious learners.",
                ],
                [
                  Clock3,
                  'Flexible Schedules',
                  'Daytime, evening, weekend, and adult-friendly options for practical access.',
                ],
              ].map(([Icon, title, desc]) => (
                <div
                  key={title as string}
                  className="premium-outline card-hover-glow rounded-[24px] border border-gold/12 bg-cream/60 p-5 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-brand-dark">
                    {title as string}
                  </h3>
                  <p className="text-sm leading-7 text-dark/66">
                    {desc as string}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 text-gold">
                <Sparkles className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
                  Explore All
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">
                Browse Every Program
              </h2>
            </div>

            <p className="max-w-xl text-dark/66">
              Each program is designed with a clear pathway, guided teaching,
              and a focus on sound Quranic learning.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
