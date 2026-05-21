import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { faculty } from '@/src/data/mockData';
import { SectionTitle } from '@/src/components/ui/Shared';

export function FacultyPreviewSection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/faculty-preview-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/12"></div>
      <div className="section-depth-bg opacity-40"></div>

      <div className="container-shell relative z-10 max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="reveal-left md:w-2/3">
            <SectionTitle
              title="Learn from Masters"
              subtitle="Our Revered Faculty"
              alignment="left"
              description="Our institution is blessed with scholars who have dedicated their lives to the study, practice, and teaching of the Holy Quran."
            />
            <div className="arabic-divider justify-start">
              <span></span>
            </div>
          </div>

          <Link
            href="/faculty"
            className="magnetic-button group hidden items-center gap-2 font-semibold text-brand transition-colors duration-300 hover:text-gold md:inline-flex"
          >
            View All Faculty
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.slice(0, 4).map((teacher, index) => (
            <div
              key={teacher.id}
              className={`surface-card soft-shadow-lift reveal-card group overflow-hidden rounded-[28px] border border-white/40 bg-white/35 p-3 backdrop-blur-md stagger-item stagger-${index + 1}`}
            >
              <div className="image-mask-reveal image-hover-zoom relative overflow-hidden rounded-[24px]">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  width={500}
                  height={500}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="h-72 w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/92 via-brand-deep/20 to-transparent"></div>

                <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                  <h3 className="text-xl font-bold text-cream">{teacher.name}</h3>
                  <p className="mt-1 text-sm font-medium text-gold">
                    {teacher.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/faculty" className="secondary-btn magnetic-button px-6">
            View All Faculty
          </Link>
        </div>
      </div>
    </section>
  );
}
