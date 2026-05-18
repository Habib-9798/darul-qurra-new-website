import Image from 'next/image';
import { PageHero, SectionTitle, CTABanner } from '@/src/components/ui/Shared';
import { Sparkles } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Masjid Interior',
    span: 'lg:col-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    title: 'Quran Study',
  },
  {
    url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    title: 'Hifz Preparation',
  },
  {
    url: 'https://images.unsplash.com/photo-1579752175955-df1ee8b7dd61?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    title: 'Campus Grounds',
  },
  {
    url: 'https://images.unsplash.com/photo-1601142634808-38923eb7c560?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    title: "Children's Class",
    span: 'lg:row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1621213076828-569dce73ee16?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    title: 'Library & Resources',
  },
  {
    url: 'https://images.unsplash.com/photo-1584285418504-03f47e303490?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    title: 'Evening Lectures',
  },
  {
    url: 'https://images.unsplash.com/photo-1597953601267-33eb97ccceeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    title: 'Graduation Ceremony',
    span: 'lg:col-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1566492031523-0564ef1df233?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    title: 'Community Iftar',
  },
];

export default function GalleryPage() {
  return (
    <div>
      <PageHero
        title="Campus Gallery"
        subtitle="Visual glimpses into the vibrant spiritual, academic, and community life at Darul Qurra Peshawar."
        image="https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        badge="Moments & Memories"
      />

      <section className="section-glow py-20 md:py-24">
        <div className="container-shell relative z-10 max-w-7xl">
          <div className="surface-card mb-12 p-8 text-center md:p-10">
            <SectionTitle
              title="Life in the Madrasa"
              subtitle="Campus Gallery"
              description="A collection of moments reflecting the spiritual atmosphere, disciplined learning, and community warmth of Darul Qurra."
            />
          </div>

          <div className="grid auto-rows-[260px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`premium-outline interactive-card group relative overflow-hidden rounded-[28px] shadow-[0_18px_60px_rgba(8,54,41,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(8,54,41,0.14)] ${img.span || ''}`}
              >
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/88 via-brand-deep/24 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-95" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="translate-y-3 transition-all duration-300 group-hover:translate-y-0">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-gold backdrop-blur-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                        Gallery
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-cream">{img.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
