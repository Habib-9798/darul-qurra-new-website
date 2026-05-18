import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Program } from '@/src/data/models';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="surface-card surface-card-hover card-hover-lift shine-effect premium-outline group flex h-full flex-col overflow-hidden">
      <div className="image-hover-zoom relative h-64 overflow-hidden bg-brand-dark/10">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/82 via-brand-deep/18 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <h3 className="mb-3 text-2xl font-bold text-brand-dark transition-colors duration-300 group-hover:text-brand">
          {program.title}
        </h3>

        <p className="mb-6 flex-grow text-sm leading-7 text-dark/68">
          {program.summary}
        </p>

        <Link
          href={`/courses/${program.slug}`}
          className="primary-btn group/button inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm"
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}