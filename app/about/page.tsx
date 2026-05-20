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
        badge="Sacred Legacy"
      />

{/* 1. Heritage */}
<section className="section-glow relative overflow-hidden py-20 lg:py-28">
 {/* Background Image */}
<div 
  className="absolute inset-0 -z-10 bg-cover bg-center pointer-events-none"
  style={{ backgroundImage: 'url(/faculty-preview-bg.png)' }}
/>
  <div className="container-shell relative z-10 max-w-6xl">
    <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
      
      {/* Left Content */}
      <div className="reveal-left flex flex-col justify-center">
        
        {/* Premium Label */}
        <div className="self-start inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-gold backdrop-blur-sm shadow-sm mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
          Our Heritage
        </div>

        <h2 className="text-balance text-3xl font-bold leading-tight text-brand-dark md:text-[2.75rem]">
          A Legacy of Qur’anic Excellence Since 1969
        </h2>

        <div className="mt-6 space-y-5 text-base leading-relaxed text-dark/75 md:text-lg">
          {/* Highlighted First Paragraph */}
          <p className="border-l-2 border-gold/50 pl-5 font-medium text-brand-dark">
            Darul Qurra Peshawar began its journey around 1969–1970 from a
            small mosque in Namak Mandi, under the guidance of Hazrat Maulana
            Qari Fayaz-ur-Rehman Alvi.
          </p>

          <p>
            By the grace of Allah, this humble beginning grew into a central
            institution for Quranic and Islamic education. Over the decades,
            more than 60,000 Huffaz, Qurra, Ulama, and Alimat have graduated
            from Darul Qurra and are serving the Qur’an and religious knowledge
            across the world.
          </p>

          <p>
            Today, with more than 50 educational departments, Darul Qurra
            continues its mission of preserving, teaching, and spreading the
            sacred knowledge of the Qur’an with sincerity, discipline, and
            tradition.
          </p>
        </div>

        {/* Premium Stats Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Since 1969",
              text: "Founded in Namak Mandi, Peshawar.",
            },
            {
              title: "60,000+ Grads",
              text: "Serving the Qur’an worldwide.",
            },
            {
              title: "50+ Depts",
              text: "Dedicated to Islamic education.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[20px] border border-brand/10 bg-white/60 p-5 shadow-[0_8px_30px_rgba(8,54,41,0.04)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(8,54,41,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/5 text-brand transition-colors duration-500 group-hover:bg-gold/10 group-hover:text-gold">
                <BadgeCheck className="h-5 w-5" />
              </div>

              <h3 className="text-base font-bold text-brand-dark">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-dark/60">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Presentation */}
      <div className="reveal-right relative flex justify-center mt-8 lg:mt-0">
        {/* Soft Background Glows */}
        <div className="absolute -right-6 top-0 h-48 w-48 rounded-full bg-gold/15 blur-[60px] pointer-events-none" />
        <div className="absolute -bottom-10 -left-6 h-56 w-56 rounded-full bg-brand/15 blur-[60px] pointer-events-none" />

        {/* Outer Glass Frame */}
        <div className="relative w-full max-w-[540px] rounded-[32px] border border-gold/20 bg-white/50 p-2.5 shadow-[0_30px_80px_rgba(8,54,41,0.12)] backdrop-blur-xl">
          
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-[24px] bg-brand-deep shadow-inner border border-white/40">
            <Image
              src="/images/darul.qurra entrance.png"
              alt="Darul Qurra Peshawar madrassa entrance"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover transition-transform duration-1000 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Soft inner vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent opacity-60" />
          </div>

          {/* Floating Detail Badge (Center Aligned) */}
          <div className="absolute -bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-[24px] border border-white/90 bg-white/95 p-4 shadow-[0_20px_50px_rgba(8,54,41,0.15)] backdrop-blur-md transition-transform duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand/10 to-brand/5 text-brand border border-brand/10">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                  Sacred Knowledge
                </p>
                <p className="mt-0.5 text-sm font-semibold text-brand-dark leading-tight">
                  Tradition, discipline, and Qur’anic service since 1969.
                </p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Decorative Floating Icon */}
        <div className="absolute -right-4 top-10 hidden animate-bounce-slow rounded-full border border-gold/30 bg-white/80 p-3.5 text-gold shadow-lg backdrop-blur-md md:block z-20">
          <Landmark className="h-5 w-5" />
        </div>
      </div>

    </div>
  </div>
</section>

{/* 2. Founder */}
<section className="premium-blur-bg relative overflow-hidden py-24">
  <div 
  className="absolute inset-0 -z-10 bg-cover bg-center pointer-events-none"
  style={{ backgroundImage: 'url(/programs-bg.png)' }}
/>

  <div className="container-shell relative z-10 max-w-6xl">
    <div className="grid items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
      <div className="reveal-left relative flex motion-safe:animate-[fadeScale_0.85s_ease-out_both]">
        <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-8 right-8 h-44 w-44 rounded-full bg-brand/14 blur-3xl" />

        <div className="relative flex w-full overflow-hidden rounded-[36px] border border-white/75 bg-white/64 p-4 shadow-[0_28px_85px_rgba(8,54,41,0.12)] backdrop-blur-md lg:min-h-[610px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(212,175,55,0.10),transparent_32%),radial-gradient(circle_at_80%_78%,rgba(16,102,75,0.08),transparent_34%)]" />
          <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,rgba(16,102,75,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(16,102,75,0.18)_1px,transparent_1px)] bg-[size:28px_28px]" />

          <div className="relative z-10 flex h-full w-full flex-col justify-between gap-3">
            <div className="group image-hover-zoom relative overflow-hidden rounded-[28px] bg-white/70 shadow-[0_24px_65px_rgba(0,0,0,0.14)]">
              <Image
                src="/images/founder.png"
                alt="Maulana Qari Fayyaz ur Rehman Alvi"
                width={1000}
                height={1250}
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="h-[390px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025] sm:h-[430px] lg:h-[410px]"
                referrerPolicy="no-referrer"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/18 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35" />
            </div>

            <div className="px-4 pt-2 text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-gold/12 text-gold shadow-[0_12px_30px_rgba(212,175,55,0.12)]">
                <Crown className="h-5 w-5" />
              </div>

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                Founder
              </p>

              <h3 className="mt-2 text-2xl font-bold text-brand-dark">
                Maulana Qari Fayyaz ur Rehman Alvi
              </h3>

              <p className="mx-auto mt-2 max-w-sm text-sm font-medium leading-6 text-dark/72">
                Founder & Spiritual Leader of Markazi Darul Qurra, Peshawar
              </p>
            </div>

            <div className="mx-4 mb-2 rounded-3xl border border-gold/20 bg-white/88 p-4 text-center shadow-[0_16px_40px_rgba(8,54,41,0.09)] backdrop-blur-md">
              <div className="mb-2 flex items-center justify-center gap-2 text-gold">
                <Sparkles className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                  Founder’s Legacy
                </span>
              </div>
              <p className="text-sm font-semibold leading-6 text-brand-dark">
                A legacy built on sincerity, knowledge, humility, and service to
                the Ummah.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal-right relative flex">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-10 left-8 h-48 w-48 rounded-full bg-brand/10 blur-3xl" />

        <div className="relative flex w-full overflow-hidden rounded-[36px] border border-white/75 bg-white/64 p-6 shadow-[0_28px_85px_rgba(8,54,41,0.12)] backdrop-blur-md md:p-7 lg:min-h-[610px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_12%,rgba(212,175,55,0.13),transparent_30%),radial-gradient(circle_at_8%_88%,rgba(16,102,75,0.10),transparent_34%)]" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          <Quote className="absolute right-8 top-8 h-14 w-14 text-brand/10 md:h-16 md:w-16" />

          <div className="relative z-10 flex w-full flex-col justify-center space-y-5">
            <div className="section-label w-fit animate-[fadeIn_0.7s_ease-out_both]">
              FOUNDER & SPIRITUAL LEADER
            </div>

            <h2 className="text-balance text-3xl font-bold leading-tight text-brand-dark md:text-4xl xl:text-[44px] motion-safe:animate-[fadeUp_0.8s_ease-out_0.08s_both]">
              A Lifetime Dedicated to the Qur’an and Service
            </h2>

            <div className="space-y-3 motion-safe:animate-[fadeUp_0.8s_ease-out_0.16s_both]">
              <p className="text-base leading-7 text-dark/72 md:text-[17px] md:leading-8">
                Maulana Qari Fayyaz ur Rehman Alvi laid the foundation of
                Markazi Darul Qurra, Namak Mandi, Peshawar, with a sincere
                vision to preserve the Holy Qur’an through authentic recitation,
                disciplined learning, and spiritual guidance.
              </p>

              <p className="text-base leading-7 text-dark/68 md:leading-8">
                Under his leadership, Darul Qurra grew from a humble beginning
                into a trusted center of Qur’anic education, training
                generations of Huffaz, Qurra, teachers, scholars, and students.
              </p>
            </div>

            <div className="grid gap-3 pt-1 sm:grid-cols-3">
              {[
                "Founder of Markazi Darul Qurra",
                "Mentor of Qur’an Teachers",
                "Lifelong Service to Islamic Education",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group rounded-2xl border border-white/75 bg-white/76 p-4 shadow-[0_12px_34px_rgba(8,54,41,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:shadow-[0_18px_45px_rgba(8,54,41,0.12)] motion-safe:animate-[fadeUp_0.75s_ease-out_both]"
                  style={{ animationDelay: `${0.18 + index * 0.08}s` }}
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-brand/10 bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold leading-6 text-brand-dark">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-2 rounded-[26px] border border-gold/20 bg-white/88 p-5 shadow-[0_18px_50px_rgba(8,54,41,0.09)] backdrop-blur-md motion-safe:animate-[fadeUp_0.8s_ease-out_0.32s_both]">
              <div className="mb-3 flex items-center gap-3 text-gold">
                <Quote className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                  Founder’s Legacy
                </span>
              </div>
              <p className="text-base font-semibold leading-8 text-brand-dark md:text-lg">
                “Serving the Qur’an, educating generations, and helping humanity
                with sincerity and discipline.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 3. Muhtamim */}
<section className="luxury-dark-section relative overflow-hidden py-24">
  {/* Background Image Setup */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
    style={{ backgroundImage: 'url(/media-bg.png)' }}
  >
    {/* Semi-transparent dark overlay so the text remains readable */}
    <div className="absolute inset-0 bg-brand-dark/40" />
    {/* Subtle gradient at the top and bottom to blend smoothly into other sections */}
    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark/60" />
  </div>

  <div className="container-shell relative z-10 max-w-5xl">
    <div className="grid items-stretch gap-9 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10">
      <div className="reveal-left relative flex">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-10 right-10 h-44 w-44 rounded-full bg-brand/16 blur-3xl" />

        <div className="relative flex w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.07] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-7 lg:min-h-[555px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_10%,rgba(212,175,55,0.09),transparent_28%),radial-gradient(circle_at_8%_88%,rgba(255,255,255,0.04),transparent_32%)]" />
          <div className="absolute inset-0 opacity-[0.016] bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[size:34px_34px]" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="relative z-10 flex w-full flex-col justify-center space-y-5">
            <div className="section-label w-fit animate-[fadeIn_0.7s_ease-out_both]">
              CURRENT LEADERSHIP
            </div>

            <h2 className="text-balance text-3xl font-bold leading-tight text-cream md:text-4xl xl:text-[40px] motion-safe:animate-[fadeUp_0.8s_ease-out_0.08s_both]">
              Guiding Darul Qurra with Knowledge and Service
            </h2>

            <div className="space-y-3 motion-safe:animate-[fadeUp_0.8s_ease-out_0.16s_both]">
              <p className="text-base leading-7 text-cream/74 md:text-[17px]">
                The Muhtamim and Naib Khateeb leadership of Darul Qurra
                continues the mission of serving the Holy Qur’an through
                authentic recitation, Islamic education, and community guidance.
              </p>

              <p className="text-base leading-7 text-cream/66">
                With sincerity and discipline, the leadership supervises
                students, supports teachers, preserves traditional standards,
                and keeps the institution connected with the wider community.
              </p>
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {[
                {
                  title: "Qur’anic Leadership",
                  icon: BookOpen,
                },
                {
                  title: "Academic Supervision",
                  icon: GraduationCap,
                },
                {
                  title: "Community Guidance",
                  icon: Users,
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="group flex min-h-[72px] min-w-0 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.085] px-3 py-3 shadow-[0_10px_26px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/35 hover:bg-white/[0.12] motion-safe:animate-[fadeUp_0.7s_ease-out_both]"
                  style={{ animationDelay: `${0.18 + index * 0.07}s` }}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/12 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-brand-dark">
                    <item.icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="min-w-0 text-center text-[13px] font-semibold leading-5 text-cream">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-1 rounded-2xl border border-gold/16 bg-white/[0.075] px-5 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.14)] backdrop-blur-md motion-safe:animate-[fadeUp_0.8s_ease-out_0.3s_both]">
              <div className="flex items-center gap-3">
                <Quote className="h-4 w-4 shrink-0 text-gold" />
                <p className="text-sm font-semibold leading-7 text-cream/86 md:text-base">
                  Leadership built on sincerity, knowledge, discipline, and
                  service to the Qur’an.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal-right relative flex motion-safe:animate-[fadeScale_0.85s_ease-out_both]">
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gold/14 blur-3xl" />
        <div className="absolute -bottom-10 -left-8 h-44 w-44 rounded-full bg-brand/20 blur-3xl" />

        <div className="relative flex w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.07] p-4 shadow-[0_22px_60px_rgba(0,0,0,0.24)] backdrop-blur-md lg:min-h-[555px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_16%,rgba(212,175,55,0.09),transparent_28%),radial-gradient(circle_at_80%_78%,rgba(255,255,255,0.045),transparent_32%)]" />
          <div className="absolute inset-0 opacity-[0.016] bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[size:34px_34px]" />

          <div className="relative z-10 flex h-full w-full flex-col gap-3">
            <div className="group image-hover-zoom relative overflow-hidden rounded-[26px] bg-white/8 shadow-[0_22px_58px_rgba(0,0,0,0.26)]">
              <Image
                src="/images/muhtamim.jpg"
                alt="Muhtamim portrait placeholder"
                width={1000}
                height={1250}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-[410px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025] sm:h-[450px] lg:h-[420px]"
                referrerPolicy="no-referrer"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/42 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/16" />
            </div>

            <div className="flex flex-1 flex-col justify-center px-4 pb-1 text-center">
              <div className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-gold/12 text-gold shadow-[0_10px_26px_rgba(212,175,55,0.10)]">
                <UserRound className="h-5 w-5" />
              </div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">
                MUHTAMIM / NAIB KHATEEB
              </p>

              <h3 className="mt-2 text-2xl font-bold text-cream">
                Darul Qurra Peshawar Leadership
              </h3>

              <p className="mx-auto mt-1.5 max-w-sm text-sm font-medium leading-6 text-cream/68">
                Serving Qur’anic education and community guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 4. Sanad Certificate */}
<section
  className="section-glow py-20 lg:py-28 relative"
  style={{
    backgroundImage: 'url(/about-preview-bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="container-shell relative z-10 max-w-6xl">
    <div className="mx-auto max-w-3xl text-center reveal-up">
      <div className="section-label">Sanad Certificate</div>

      <h2 className="mt-6 text-balance text-3xl font-bold text-brand-dark md:text-5xl">
        Certificate of Sanad
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-dark/70">
        This certificate represents the verified chain of Quranic transmission,
        tracing through renowned teachers and scholars directly linked to Prophet Muhammad ﷺ.
      </p>
    </div>

    <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1fr] lg:gap-12 items-center">

      {/* Certificate Image Card (Enlarged Premium Framed Look) */}
      <div className="reveal-card relative flex justify-center">
        <div className="relative w-full max-w-[540px] rounded-[28px] border border-gold/20 bg-white/60 p-3 shadow-[0_20px_50px_rgba(8,54,41,0.12)] backdrop-blur-md">
          <div className="overflow-hidden rounded-[24px] bg-white border border-brand/5 h-full">
            <Image
              src="/images/Certificate.png"
              alt="Sanad Certificate"
              width={1200}
              height={1600}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Content Card (Compacted & Refined) */}
      <div className="reveal-card relative flex justify-center w-full">
        <div className="relative w-full max-w-[520px] flex flex-col justify-center rounded-[32px] border border-gold/25 bg-white/80 p-6 shadow-[0_24px_70px_rgba(8,54,41,0.08)] backdrop-blur-xl md:p-8">

          <div className="text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
              Chain of Transmission
            </p>
            <h3 className="mt-2 text-balance text-2xl font-bold text-brand-dark md:text-3xl">
              Sanad of the Holy Quran
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {[
              'Prophet Muhammad ﷺ',
              'Jibril (Peace be upon him)',
              'Companions of Quran',
              'Classical Imams',
              'Authorized Qaris',
              'Darul Qurra Peshawar',
            ].map((item, idx) => (
              <div
                key={item}
                className="group flex items-center gap-3 rounded-2xl border border-brand/10 bg-white/50 p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:bg-gold/5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-dark/5 text-brand-dark transition-colors group-hover:bg-gold/20 group-hover:text-brand-dark">
                  <span className="font-serif text-xs font-bold">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-sm font-semibold text-brand-dark leading-tight">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start justify-between divide-x divide-gold/20 border-y border-gold/15 py-4">
            <div className="flex flex-1 flex-col items-center px-2 text-center">
              <BadgeCheck className="mb-2 h-5 w-5 text-gold" />
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-dark">Verified</h4>
              <p className="mt-1 hidden text-[10px] leading-tight text-dark/60 sm:block">Teacher-to-teacher preservation.</p>
            </div>
            <div className="flex flex-1 flex-col items-center px-2 text-center">
              <BookOpen className="mb-2 h-5 w-5 text-brand" />
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-dark">Recitation</h4>
              <p className="mt-1 hidden text-[10px] leading-tight text-dark/60 sm:block">Perfecting tajweed & discipline.</p>
            </div>
            <div className="flex flex-1 flex-col items-center px-2 text-center">
              <Shield className="mb-2 h-5 w-5 text-gold" />
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-brand-dark">Sacred</h4>
              <p className="mt-1 hidden text-[10px] leading-tight text-dark/60 sm:block">A lifelong trust and honor.</p>
            </div>
          </div>

          <div className="mt-6 rounded-[20px] bg-brand-deep p-4 text-center shadow-inner">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">Important</p>
            <p className="mx-auto mt-1.5 max-w-sm text-xs leading-relaxed text-cream/80">
              Replace placeholder text and names with the exact Sanad details from your official certificate.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

   {/* 5. Mission & Vision */}
<section
  className="dark-section relative py-20 lg:py-28 overflow-hidden"
  style={{
    backgroundImage: 'url(/contact-location-bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Decorative Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(212,175,55,0.06)_0%,transparent_50%)] pointer-events-none" />
  <div className="floating-particles" />

  <div className="container-shell relative z-10 max-w-6xl">
    
    {/* Custom Title Area (Ensures White Text on Dark Background) */}
    <div className="mx-auto max-w-3xl text-center reveal-up">
      <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-gold backdrop-blur-sm shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
        Guiding Principles
      </div>

      <h2 className="mt-6 text-balance text-3xl font-bold text-white md:text-5xl">
        Our Mission & Vision
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream/75">
        The purpose behind our teaching, service, and long-term commitment to Quranic excellence.
      </p>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-10">
      
      {/* Mission Card */}
      <div className="glass-card premium-outline interactive-card glass-motion group relative overflow-hidden p-8 md:p-12 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-gold/30">
        {/* Subtle Hover Glow */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none" />
        
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold shadow-inner border border-gold/15 transition-transform duration-500 group-hover:scale-105">
          <BookOpen className="h-8 w-8" />
        </div>

        <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
          The Mission
        </h3>

        <p className="text-base leading-relaxed text-cream/80 md:text-lg">
          To provide accessible, high-quality, and authentic Quranic
          education while nurturing recitation, understanding, discipline,
          and spiritual growth in every student.
        </p>
      </div>

      {/* Vision Card */}
      <div className="glass-card premium-outline interactive-card glass-motion group relative overflow-hidden p-8 md:p-12 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-gold/30">
        {/* Subtle Hover Glow */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/10 blur-3xl transition-opacity duration-700 opacity-0 group-hover:opacity-100 pointer-events-none" />
        
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold shadow-inner border border-gold/15 transition-transform duration-500 group-hover:scale-105">
          <Globe className="h-8 w-8" />
        </div>

        <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
          The Vision
        </h3>

        <p className="text-base leading-relaxed text-cream/80 md:text-lg">
          To remain a trusted center of Quranic excellence that produces
          students who serve their communities with knowledge, dignity,
          humility, and sound recitation.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* 6. Core Values */}
      <section
  className="py-24"
  style={{
    backgroundImage: "url('/testimonials-bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
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
