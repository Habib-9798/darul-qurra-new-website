import Image from 'next/image';
import { PageHero, SectionTitle, CTABanner } from '@/src/components/ui/Shared';
import {
  Award,
  BadgeCheck,
  BookOpen,
  CheckCircle,
  Crown,
  Globe,
  GraduationCap,
  Heart,
  Landmark,
  Quote,
  ScrollText,
  Shield,
  Sparkles,
  Star,
  UserRound,
  Users,
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Authenticity',
      desc: 'A firm commitment to classical scholarship, sound transmission, and faithful Quranic teaching.',
    },
    {
      icon: Heart,
      title: 'Tarbiyah',
      desc: 'Character, manners, and spiritual refinement are nurtured alongside academic learning.',
    },
    {
      icon: Users,
      title: 'Community',
      desc: 'A respectful environment where students and families feel guided, welcomed, and supported.',
    },
    {
      icon: Award,
      title: 'Excellence',
      desc: 'A culture of ihsan in recitation, discipline, teaching, and service to the wider Ummah.',
    },
  ];

  const heritagePoints = [
    'A legacy rooted in trust, discipline, and sound recitation.',
    'An environment that combines sacred knowledge with spiritual care.',
    'A place where reverence for the Quran shapes every level of learning.',
  ];

  const founderHighlights = [
    'Established a trusted center for Quranic learning in Peshawar.',
    'Dedicated his life to preserving authentic recitation and sacred knowledge.',
    'Built a foundation of discipline, humility, service, and traditional scholarship.',
  ];

  const muhtamimResponsibilities = [
    {
      icon: BookOpen,
      title: 'Academic Supervision',
      desc: 'Overseeing Quranic programs, teaching standards, and student progress.',
    },
    {
      icon: GraduationCap,
      title: 'Student Guidance',
      desc: 'Nurturing discipline, adab, spiritual care, and personal development.',
    },
    {
      icon: Shield,
      title: 'Traditional Standards',
      desc: 'Protecting the institution’s commitment to authentic Islamic learning.',
    },
    {
      icon: Users,
      title: 'Community Leadership',
      desc: 'Serving students, families, teachers, and the wider community with care.',
    },
  ];

  const sanadNames = [
    'النبي محمد ﷺ',
    'جبريل عليه السلام',
    'سيدنا عثمان بن عفان رضي الله عنه',
    'سيدنا علي بن أبي طالب رضي الله عنه',
    'الإمام عاصم بن أبي النجود رحمه الله',
    'الإمام حفص بن سليمان رحمه الله',
    'شيخ الإسلام زكريا الأنصاري رحمه الله',
    'الشيخ عبد الرحمن بن أحمد البجدادي رحمه الله',
    'الشيخ محمد المقري رحمه الله',
    'الشيخ محمد بن عبد الله رحمه الله',
    'Certified teacher of the student',
    'Darul Qurra Peshawar',
  ];

  return (
    <div>
      <PageHero
        title="About Darul Qurra"
        subtitle="A beacon of Islamic learning devoted to preserving and transmitting the knowledge of the Holy Quran since 1969."
        image="/images/darul.qurra entrance.png"
        badge="Sacred Legacy"
      />

      {/* 1. Heritage */}
      <section className="section-glow py-24">
        <div className="container-shell relative z-10 max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.02fr] lg:gap-16">
            <div className="reveal-left space-y-6">
              <div className="section-label">Our Heritage</div>

              <h2 className="text-balance text-3xl font-bold text-brand-dark md:text-5xl">
                Decades of dedication to the Sacred Word
              </h2>

              <p className="text-lg leading-8 text-dark/72">
                Darul Qurra Peshawar was founded to create a place where the Book
                of Allah is learned, memorized, understood, and honored according
                to the authentic Prophetic tradition.
              </p>

              <p className="text-dark/68">
                Over the decades, the institution has grown into a trusted
                academy serving students from foundational recitation to advanced
                Quranic sciences, while preserving a careful balance between
                traditional rigor and compassionate guidance.
              </p>

              <div className="grid gap-4 pt-3">
                {heritagePoints.map((item) => (
                  <div
                    key={item}
                    className="surface-card card-hover-glow flex items-start gap-4 p-4 md:p-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    <p className="font-medium leading-7 text-dark/82">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right relative">
              <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-brand/15 blur-3xl" />

              <div className="premium-outline image-hover-zoom relative overflow-hidden rounded-[34px] shadow-[0_24px_70px_rgba(8,54,41,0.16)]">
                <Image
                  src="https://images.unsplash.com/photo-1597953601267-33eb97ccceeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Students studying"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="surface-card p-5">
                  <div className="mb-3 flex items-center gap-2 text-gold">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                      Since 1969
                    </span>
                  </div>
                  <p className="text-sm font-semibold leading-6 text-brand-dark">
                    A trusted institution shaping generations through Quranic
                    learning and spiritual discipline.
                  </p>
                </div>

                <div className="surface-card p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Landmark className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold leading-6 text-brand-dark">
                    Rooted in tradition, refined for every generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Founder */}
      <section className="premium-blur-bg py-24">
        <div className="container-shell relative z-10 max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div className="reveal-left relative">
              <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute -bottom-8 right-8 h-44 w-44 rounded-full bg-brand/14 blur-3xl" />

              <div className="islamic-panel image-hover-zoom relative p-4">
                <div className="premium-outline overflow-hidden rounded-[28px]">
                  <Image
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Founder portrait placeholder"
                    width={1000}
                    height={1250}
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="aspect-[4/5] w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="relative z-10 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Crown className="h-6 w-6" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    Founder
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-brand-dark">
                    Founding Leadership
                  </h3>

                  <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-dark/64">
                    Founder of Darul Qurra Peshawar and a respected servant of
                    Quranic learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal-right space-y-6">
              <div className="section-label">Legacy Builder</div>

              <h2 className="text-balance text-3xl font-bold text-brand-dark md:text-5xl">
                Honoring the founder who laid the foundation of Darul Qurra
              </h2>

              <p className="text-lg leading-8 text-dark/72">
                The founder of Darul Qurra Peshawar established this institution
                with a sincere vision: to preserve the Book of Allah through
                authentic recitation, disciplined learning, and spiritual
                refinement.
              </p>

              <p className="text-dark/68">
                His legacy continues through generations of students, teachers,
                and families who have benefited from an environment built on
                reverence for the Quran and service to the Ummah.
              </p>

              <div className="grid gap-4 pt-3">
                {founderHighlights.map((item) => (
                  <div
                    key={item}
                    className="soft-glass-card card-hover-glow flex items-start gap-4 p-5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p className="font-medium leading-7 text-dark/78">{item}</p>
                  </div>
                ))}
              </div>

              <div className="surface-card mt-7 p-6">
                <div className="mb-4 flex items-center gap-3 text-gold">
                  <Quote className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                    Founder’s Spirit
                  </span>
                </div>
                <p className="text-lg font-semibold leading-8 text-brand-dark">
                  A place where the Quran is not only recited, but honored,
                  preserved, and carried with adab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Muhtamim */}
      <section className="luxury-dark-section py-24">
        <div className="floating-particles" />

        <div className="container-shell relative z-10 max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="reveal-left space-y-6">
              <div className="section-label">Current Leadership</div>

              <h2 className="text-balance text-3xl font-bold text-cream md:text-5xl">
                Guided today by the Muhtamim of Darul Qurra
              </h2>

              <p className="text-lg leading-8 text-cream/76">
                The current Muhtamim continues the mission of Darul Qurra with
                care, discipline, and dedication to authentic Quranic education.
                His role brings together academic supervision, spiritual
                guidance, and community service.
              </p>

              <div className="grid gap-5 pt-5 sm:grid-cols-2">
                {muhtamimResponsibilities.map((item) => (
                  <div
                    key={item.title}
                    className="glass-card glass-card-hover p-6"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                      <item.icon className="h-6 w-6" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-cream">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-cream/68">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right relative">
              <div className="absolute -right-8 -top-8 h-44 w-44 rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute -bottom-12 -left-8 h-48 w-48 rounded-full bg-brand/25 blur-3xl" />

              <div className="luxury-glass-card p-4">
                <div className="premium-outline image-hover-zoom overflow-hidden rounded-[30px]">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Muhtamim portrait placeholder"
                    width={1000}
                    height={1250}
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="aspect-[4/5] w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="relative z-10 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <UserRound className="h-6 w-6" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    Muhtamim
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-cream">
                    Current Muhtamim
                  </h3>

                  <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-cream/68">
                    Current Imam and academic supervisor of Darul Qurra
                    Peshawar.
                  </p>

                  <div className="mt-6 rounded-[24px] border border-gold/20 bg-white/6 p-5">
                    <div className="mb-3 flex items-center justify-center gap-2 text-gold">
                      <Star className="h-4 w-4" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                        Leadership
                      </span>
                    </div>
                    <p className="text-sm font-medium leading-6 text-cream/76">
                      Serving students with knowledge, humility, and care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sanad Certificate */}
      <section className="section-glow py-24">
        <div className="container-shell relative z-10 max-w-6xl">
          <div className="mx-auto max-w-3xl text-center reveal-up">
            <div className="section-label">Sanad Certificate</div>

            <h2 className="mt-6 text-balance text-3xl font-bold text-brand-dark md:text-5xl">
              A sacred chain of transmission reaching back to the Messenger ﷺ
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-dark/70">
              The Sanad represents a blessed chain of teachers through whom the
              Quran and its recitation have been transmitted with care,
              precision, and trust.
            </p>

            <div className="arabic-divider">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="mt-16">
            <div className="islamic-panel reveal-card relative overflow-hidden p-5 md:p-10 lg:p-12">
              <div className="absolute left-8 top-8 hidden h-24 w-24 rounded-full border border-gold/20 bg-gold/10 md:block" />
              <div className="absolute bottom-8 right-8 hidden h-28 w-28 rounded-full border border-brand/10 bg-brand/5 md:block" />

              <div className="relative z-10 rounded-[32px] border border-gold/25 bg-white/72 p-6 shadow-premium backdrop-blur-xl md:p-10">
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-gold/20 to-brand/10 text-gold shadow-[0_0_34px_rgba(202,162,77,0.18)]">
                    <ScrollText className="h-10 w-10" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                    Certificate of Sanad
                  </p>

                  <h3 className="mt-4 text-balance text-3xl font-bold text-brand-dark md:text-5xl">
                    Sanad of the Holy Quran
                  </h3>

                  <h3 className="hidden">
                    سند القرآن الكريم
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm font-semibold uppercase tracking-[0.24em] text-brand/70">
                    Chain of Quranic Transmission
                  </p>
                </div>

                <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-gold/45 to-transparent" />

                <div className="mx-auto max-w-5xl rounded-[28px] border border-gold/20 bg-cream/70 p-6 text-center md:p-8">
                  <p className="text-lg font-semibold leading-8 text-brand-dark md:text-xl">
                    This certificate section represents the institution&apos;s
                    chain of Quranic transmission.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-dark/68">
                    Replace this sample text with the approved Sanad wording and
                    verified teacher names before publication. The layout is
                    prepared for an official chain while keeping the page clean
                    and readable.
                  </p>
                </div>

                <div
                  dir="rtl"
                  className="hidden"
                >
                  <p className="text-xl leading-[2.5] text-brand-dark md:text-2xl">
                    فَيَقُولُ الْفَقِيرُ إِلَى عَفْوِ رَبِّهِ: قَدْ أَجَازَنِي
                    شَيْخِي بِقِرَاءَةِ الْقُرْآنِ الْكَرِيمِ وَتَجْوِيدِهِ
                    وَضَبْطِهِ، وَهُوَ قَدْ أَخَذَهُ عَنْ شَيْخِهِ، وَشَيْخُهُ
                    عَنْ شَيْخِهِ، بِسَنَدٍ مُتَّصِلٍ إِلَى النَّبِيِّ
                    مُحَمَّدٍ ﷺ، عَنْ جِبْرِيلَ عَلَيْهِ السَّلَامُ، عَنْ
                    رَبِّ الْعَالَمِينَ.
                  </p>

                  <p className="mt-6 text-lg leading-[2.4] text-dark/70 md:text-xl">
                    هَذَا النَّصُّ مَوْضِعٌ لِصِيغَةِ السَّنَدِ الْكَامِلَةِ.
                    عِنْدَمَا تُرِيدُ، اسْتَبْدِلْ هَذَا النَّصَّ بِالنَّصِّ
                    الْعَرَبِيِّ الصَّحِيحِ مِنْ شَهَادَةِ السَّنَدِ
                    الْمُعْتَمَدَةِ لَدَيْكُمْ.
                  </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    'Prophet Muhammad (peace be upon him)',
                    'Jibril (peace be upon him)',
                    'Companions of Quranic transmission',
                    'Classical Imams of recitation',
                    'Authorized scholars and Qaris',
                    'Darul Qurra Peshawar',
                  ].map((name, index) => (
                    <div
                      key={name}
                      className="rounded-[22px] border border-gold/20 bg-white/70 p-4 text-center shadow-[0_14px_34px_rgba(8,54,41,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(8,54,41,0.1)]"
                    >
                      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <span className="font-serif text-sm font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <p className="text-base font-semibold leading-7 text-brand-dark">
                        {name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="hidden">
                  {sanadNames.map((name, index) => (
                    <div
                      key={`${name}-${index}`}
                      className="rounded-[22px] border border-gold/20 bg-white/70 p-4 text-center shadow-[0_14px_34px_rgba(8,54,41,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_50px_rgba(8,54,41,0.1)]"
                    >
                      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <span className="font-serif text-sm font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <p
                        dir={index < 10 ? 'rtl' : 'ltr'}
                        className="text-base font-semibold leading-7 text-brand-dark"
                      >
                        {name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                  <div className="rounded-[26px] border border-gold/20 bg-gold/10 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <BadgeCheck className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-dark">
                      Verified Chain
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-dark/64">
                      Teacher-to-teacher transmission preserved with care.
                    </p>
                  </div>

                  <div className="rounded-[26px] border border-brand/15 bg-brand/5 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-dark">
                      Quranic Recitation
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-dark/64">
                      Preserving correct recitation, tajweed, and discipline.
                    </p>
                  </div>

                  <div className="rounded-[26px] border border-gold/20 bg-gold/10 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-dark">
                      Sacred Trust
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-dark/64">
                      A certificate of responsibility, honor, and service.
                    </p>
                  </div>
                </div>

                <div className="mt-10 rounded-[28px] border border-brand/10 bg-brand-deep p-6 text-center text-cream md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                    Important
                  </p>
                  <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-cream/74">
                    Replace the Arabic paragraph and placeholder names with the
                    exact Sanad text and teacher names from your official
                    certificate. The layout is designed to look like a premium
                    certificate while staying readable on mobile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision */}
      <section className="dark-section py-24">
        <div className="floating-particles" />

        <div className="container-shell relative z-10 max-w-6xl">
          <SectionTitle
            title="Our Mission & Vision"
            subtitle="Guiding Principles"
            description="The purpose behind our teaching, service, and long-term commitment to Quranic excellence."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="glass-card premium-outline interactive-card glass-motion p-8 md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                <BookOpen className="h-7 w-7" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-cream md:text-3xl">
                The Mission
              </h3>

              <p className="leading-8 text-cream/78">
                To provide accessible, high-quality, and authentic Quranic
                education while nurturing recitation, understanding, discipline,
                and spiritual growth in every student.
              </p>
            </div>

            <div className="glass-card premium-outline interactive-card glass-motion p-8 md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                <Globe className="h-7 w-7" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-cream md:text-3xl">
                The Vision
              </h3>

              <p className="leading-8 text-cream/78">
                To remain a trusted center of Quranic excellence that produces
                students who serve their communities with knowledge, dignity,
                humility, and sound recitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Core Values */}
      <section className="py-24">
        <div className="container-shell max-w-6xl">
          <SectionTitle
            title="Core Values"
            subtitle="What We Stand For"
            description="The principles that shape our environment, teaching style, and long-term identity."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="surface-card surface-card-hover interactive-card card-hover-glow p-7 text-center"
              >
                <div className="premium-icon-hover mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-brand/10 text-brand">
                  <value.icon className="h-6 w-6" />
                </div>

                <h4 className="mb-3 text-xl font-bold text-brand-dark">
                  {value.title}
                </h4>

                <p className="text-sm leading-7 text-dark/66">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
