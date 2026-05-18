import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

const galleryPreviewImages = [
  {
    src: 'https://images.unsplash.com/photo-1542618837-1d6d63e5b387?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    alt: 'Students studying Quran in a classroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1597953601267-33eb97ccceeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    alt: 'Quran learning session with students',
  },
  {
    src: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    alt: 'Student preparing for Hifz lesson',
  },
  {
    src: 'https://images.unsplash.com/photo-1609599006353-e629aaab31f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
    alt: 'Open Quran in a peaceful study setting',
  },
];

export function MediaSection() {
  return (
    <section
      className="relative overflow-hidden border-t border-brand-deep/40 py-24"
      style={{
        backgroundImage: "url('/media-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-brand-deep/35"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/35 via-brand-deep/10 to-brand-deep/45"></div>
      <div className="floating-particles"></div>

      <div className="container-shell relative z-10 max-w-7xl">
        <div className="reveal-up text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50"></span>
            <span className="shine-effect rounded-full border border-gold/30 bg-gold/10 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Media Showcase
            </span>
            <span className="h-px w-12 bg-gold/50"></span>
          </div>

          <h2 className="text-4xl font-bold text-cream drop-shadow-lg md:text-5xl">
            Experience the Atmosphere
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cream/85 drop-shadow-md">
            A glimpse into our environment, student life, and sacred learning spaces.
          </p>

          <div className="arabic-divider">
            <span></span>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="premium-outline reveal-left group image-mask-reveal image-hover-zoom relative aspect-video overflow-hidden rounded-[30px] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <Image
              src="https://images.unsplash.com/photo-1601142634808-38923eb7c560?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Quran Recitation Video"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-full w-full object-cover opacity-75"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/92 via-brand-deep/25 to-transparent"></div>
            <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-brand-deep/42 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold backdrop-blur-xl">
              Featured Video
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="soft-float-rotate mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,#caa24d,#e8cf96)] text-brand-dark shadow-[0_18px_40px_rgba(202,162,77,0.28)] transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-1 h-8 w-8" fill="currentColor" />
              </div>

              <h3 className="px-4 text-2xl font-bold text-cream drop-shadow-lg md:text-3xl">
                Introduction to Darul Qurra
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {galleryPreviewImages.map((image, idx) => (
              <div
                key={image.src}
                className={`premium-outline reveal-card group image-hover-zoom overflow-hidden rounded-[24px] border border-white/15 bg-white/10 p-1 shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-md stagger-item stagger-${idx + 1}`}
              >
                <Image
                  src={image.src}
                  width={700}
                  height={700}
                  sizes="(min-width: 1024px) 21vw, 50vw"
                  className="aspect-[4/4] w-full rounded-[20px] object-cover"
                  alt={image.alt}
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center reveal-up">
          <Link
            href="/gallery"
            className="magnetic-button group inline-flex items-center gap-2 font-semibold text-cream transition-colors duration-300 hover:text-gold"
          >
            Go to Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
