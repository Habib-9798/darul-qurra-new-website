import Link from 'next/link';
import Image from 'next/image';
import { programs, faculty } from '@/src/data/mockData';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Clock,
  Users,
  BookOpen,
  Calendar,
  ArrowRight,
  ShieldCheck,
  FileText,
  BadgeCheck,
  GraduationCap,
} from 'lucide-react';
import { CTABanner, SectionTitle } from '@/src/components/ui/Shared';
import { ProgramCard } from '@/src/components/ui/ProgramCard';

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default async function SingleCoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const related = programs.filter((p) =>
    program.relatedPrograms.includes(p.id)
  );
 const teachers = faculty.filter((f) => program.facultyIds.includes(String(f.id)));

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-deep py-24 text-cream md:py-28">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={program.image}
            alt={program.title}
            fill
            priority
            sizes="100vw"
            className="h-full w-full scale-[1.03] object-cover mix-blend-screen"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,76,0.16),transparent_18%),linear-gradient(to_bottom,rgba(4,31,25,0.46),rgba(4,31,25,0.96))]" />
          <div className="absolute inset-0 bg-grid-fade opacity-[0.06]" />
        </div>

        <div className="ambient-orb ambient-orb-gold left-[8%] top-[12%] h-36 w-36" />
        <div className="ambient-orb ambient-orb-green right-[10%] top-[16%] h-44 w-44" />

        <div className="container-shell relative z-10 max-w-6xl">
          <Link
            href="/courses"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gold/85 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Programs
          </Link>

          <div className="hero-shell premium-outline max-w-4xl px-6 py-8 md:px-8 md:py-10">
            <h1 className="text-balance mb-5 text-4xl font-bold text-cream md:text-5xl lg:text-6xl">
              {program.title}
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-cream/84 md:text-xl">
              {program.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-glow py-20 md:py-24">
        <div className="container-shell relative z-10 max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            {/* Left */}
            <div className="space-y-10">
              <div className="surface-card p-8 md:p-10">
                <h2 className="mb-5 flex items-center gap-3 text-3xl font-bold text-brand-dark">
                  <FileText className="h-6 w-6 text-gold" />
                  Program Overview
                </h2>
                <p className="text-lg leading-8 text-dark/72">
                  {program.overview}
                </p>
              </div>

              <div className="surface-card p-8 md:p-10">
                <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-brand-dark">
                  <BookOpen className="h-6 w-6 text-gold" />
                  Curriculum Structure
                </h2>

                <div className="space-y-5">
                  {program.structure.map((item, i) => (
                    <div
                      key={i}
                      className="premium-outline flex items-start gap-4 rounded-[24px] border border-gold/12 bg-cream/55 p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-cream shadow-[0_12px_24px_rgba(13,107,83,0.18)]">
                        {i + 1}
                      </div>
                      <p className="leading-7 text-dark/78">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card p-8 md:p-10">
                <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-brand-dark">
                  <ShieldCheck className="h-6 w-6 text-gold" />
                  Learning Outcomes
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  {program.outcomes.map((outcome, i) => (
                    <div
                      key={i}
                      className="premium-outline flex gap-3 rounded-[22px] border border-gold/12 bg-white/85 p-4"
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <BadgeCheck className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-7 text-dark/72">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card p-8 md:p-10">
                <h2 className="mb-5 text-2xl font-bold text-brand-dark">
                  Eligibility Requirements
                </h2>
                <ul className="space-y-3">
                  {program.eligibility.map((req, i) => (
                    <li
                      key={i}
                      className="flex gap-3 rounded-[20px] border border-gold/10 bg-cream/55 p-4 text-dark/72"
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gold"></span>
                      <span className="leading-7">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-8">
              <div className="islamic-panel premium-outline p-8 lg:sticky lg:top-24">
                <div className="relative z-10">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-gold/15 bg-gold/10 px-3 py-1 text-gold">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                      Key Details
                    </span>
                  </div>

                  <h3 className="mb-7 text-2xl font-bold text-brand-dark">
                    Program Snapshot
                  </h3>

                  <div className="space-y-5">
                    {[
                      [Users, 'Ideal For', program.audience],
                      [
                        Calendar,
                        'Duration & Format',
                        `${program.duration} • ${program.format}`,
                      ],
                      [Clock, 'Timings', program.timings],
                    ].map(([Icon, label, value]) => (
                      <div
                        key={label as string}
                        className="premium-outline flex gap-4 rounded-[22px] border border-gold/12 bg-white/80 p-4"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-dark/45">
                            {label as string}
                          </p>
                          <p className="font-semibold leading-7 text-brand-dark">
                            {value as string}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/admissions?course=${program.id}`}
                    className="primary-btn group mt-8 flex items-center justify-center gap-2 px-5 py-4"
                  >
                    Apply for this Program
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>

                  <div className="mt-4 text-center">
                    <Link
                      href="/contact"
                      className="text-sm font-medium text-dark/55 transition-colors hover:text-brand"
                    >
                      Have questions? Contact us
                    </Link>
                  </div>
                </div>
              </div>

              {teachers.length > 0 && (
                <div className="surface-card p-8">
                  <h3 className="mb-6 text-xl font-bold text-brand-dark">
                    Program Instructors
                  </h3>

                  <div className="space-y-4">
                    {teachers.map((teacher) => (
                      <div
                        key={teacher.id}
                        className="premium-outline card-hover-glow flex items-center gap-4 rounded-[22px] border border-gold/12 bg-cream/55 p-4 transition-all duration-500 hover:-translate-y-1"
                      >
                        <Image
                          src={teacher.image}
                          alt={teacher.name}
                          width={64}
                          height={64}
                          sizes="64px"
                          className="h-16 w-16 rounded-full object-cover ring-2 ring-white"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="font-semibold text-brand-dark">
                            {teacher.name}
                          </p>
                          <p className="text-sm text-gold">{teacher.title}</p>
                          <p className="mt-1 text-xs text-dark/60">
                            {teacher.specialization}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-sand/80 bg-sand/25 py-20 md:py-24">
          <div className="container-shell max-w-6xl">
            <SectionTitle
              title="Related Programs"
              subtitle="Explore More"
              description="Discover other courses that complement this learning path."
            />

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {related.map((p) => (
                <ProgramCard key={p.id} program={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </div>
  );
}