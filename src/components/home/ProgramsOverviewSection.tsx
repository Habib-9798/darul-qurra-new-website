import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { programs } from '@/src/data/mockData';
import { ProgramCard } from '@/src/components/ui/ProgramCard';
import { SectionTitle } from '@/src/components/ui/Shared';

export function ProgramsOverviewSection() {
  return (
    <section className="relative overflow-hidden border-y border-sand/80 py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/programs-bg.png')",
        }}
      ></div>

      <div className="absolute inset-0 bg-white/35"></div>
      <div className="section-depth-bg opacity-40"></div>

      <div className="container-shell relative z-10 max-w-7xl">
        <div className="reveal-up">
          <SectionTitle
            title="Our Academic Programs"
            subtitle="Structured Learning"
            description="Carefully designed pathways for children, adults, Huffaz, and advanced students."
          />
          <div className="arabic-divider">
            <span></span>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 6).map((program, index) => (
            <div
              key={program.id}
              className={`reveal-card premium-hover-3d card-hover-lift shine-effect stagger-item stagger-${(index % 6) + 1}`}
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="primary-btn magnetic-button group px-8 opacity-100"
          >
            Browse All Programs
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
