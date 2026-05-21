import Image from 'next/image';
import { PageHero, SectionTitle, CTABanner } from '@/src/components/ui/Shared';
import { Sparkles } from 'lucide-react';

const teachers = [
  {
    id: 1,
    name: 'Qari Muhammad Ikram',
    designation: 'Senior Tajweed Teacher',
    image: '/images/teachers/Qari-Muhammad-Ikram.png',
  },
  {
    id: 2,
    name: 'Maulana Muhammad Ashiq',
    designation: 'Moderator',
    image: '/images/teachers/Molana-Ashiq.png',
  },
  {
    id: 3,
    name: 'Mufti Zeeshan',
    designation: 'supervisor & Dars-e-Nizami Teacher',
    image: '/images/teachers/Mufti Zeeshan.png',
  },
  {
    id: 4,
    name: 'Qari Atta-ur-rehman Turabi',
    designation: 'Senior Tajweed Teacher',
    image: '/images/teachers/Qari Atta-ur-rehman-Turabi.png',
  },
  {
    id: 5,
    name: 'Qari Naseerullah',
    designation: 'Hifz & Dars-e-Nizami Teacher',
    image: '/images/teachers/Qari Naseer.png',
  },
  {
    id: 6,
    name: 'Maulana Said Umar',
    designation: 'Dars-e-Nizami Teacher',
    image: '/images/teachers/Molana-Said-Umar.png',
  },
  {
    id: 7,
    name: 'Qari Ukasha',
    designation: 'Tajweed Teacher',
    image: '/images/teachers/Qari Ukasha.png',
  },
  {
    id: 8,
    name: 'Qari Abdul Wahab',
    designation: 'Senior Tajweed Teacher',
    image: '/images/teachers/Qari-Abdul-Wahab.png',
  },
  {
    id: 9,
    name: 'Qari Muhammad Shah',
    designation: 'Senior Tajweed Teacher',
    image: '/images/teachers/Qari-Muhammad-Shah.png',
  },
  {
    id: 10,
    name: 'Maulana Amir Siraj',
    designation: 'Dars-e-Nizami Teacher',
    image: '/images/teachers/Qari-Amir-Siraj.png',
  },
  {
    id: 11,
    name: 'Qari Atta-ur-rehman',
    designation: 'Hifz Teacher',
    image: '/images/teachers/Qari Atta-ur-rehman.png',
  },
  {
    id: 12,
    name: 'Qari Esmatullah',
    designation: 'Senior Hifz Teacher',
    image: '/images/teachers/Qari Esmatullah.png',
  },
  {
    id: 13,
    name: 'Qari Abdul-satar',
    designation: 'Senior Hifz Teacher',
    image: '/images/teachers/Qari Abd-us-satar.png',
  },
  {
    id: 14,
    name: 'Qari Hazrat Bilal',
    designation: 'Tajweed Teacher',
    image: '/images/teachers/Qari-Hazrat-Bilal.png',
  },
  {
    id: 15,
    name: 'Qari Munawar Shah',
    designation: 'Tajweed Teacher',
    image: '/images/teachers/Qari-Munawar-Shah.png',
  },
  {
    id: 16,
    name: 'Qari Muhibullah',
    designation: 'Tajweed Teacher',
    image: '/images/teachers/Qari Muhibullah.png',
  },
  {
    id: 17,
    name: 'Qari Shah Hussain',
    designation: 'Senior Hifz & Tajweed Teacher',
    image: '/images/teachers/Qari-Shah-Hussain.png',
  },
  {
    id: 18,
    name: 'Qari Hijratullah',
    designation: 'Hifz Teacher',
    image: '/images/teachers/Qari Hijratullah.png',
  },
  
];

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

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <article
                key={teacher.id}
                className="surface-card surface-card-hover premium-outline interactive-card group overflow-hidden p-5 text-center md:p-6"
              >
                <div className="relative overflow-hidden rounded-[26px]">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={420}
                    height={420}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-72 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority={teacher.id <= 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 to-transparent" />
                </div>

                <div className="mt-6">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                      Faculty Profile
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-dark">
                    {teacher.name}
                  </h3>

                  <p className="mt-2 font-medium text-gold">
                    {teacher.designation}
                  </p>
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
