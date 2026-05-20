"use client";

import Image from "next/image";
import { useState } from "react";
import { PageHero, SectionTitle, CTABanner } from "@/src/components/ui/Shared";

const galleryImages = [
  { url: "/Qari Fayaz-ur-rehman.png" },
  { url: "/Molana Ahmad Ali .png" },
  { url: "/classes.png" },
  { url: "/Class.png" },
  { url: "/ahadees.jpg" },
  { url: "/cermony.jpg" },
  { url: "/cermony 2.jpg" },
  { url: "/Masjid Interior.JPG" },
  { url: "/Graduation Ceremony.jpg" },
];

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const openModal = (url: string) => {
    setActiveImage(url);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveImage("");
  };

  return (
    <div>
      <PageHero
        title="Campus Gallery"
        subtitle="Visual glimpses into the vibrant spiritual, academic, and community life at Darul Qurra Peshawar."
        badge="Moments & Memories"
      />

      {/* Gallery Section with Background Image */}
      <section className="relative py-20 md:py-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(/programs-bg.png)' }}
        />

        <div className="container-shell relative z-10 max-w-7xl">
          <div className="surface-card mb-12 p-8 text-center md:p-10 bg-transparent">
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
                onClick={() => openModal(img.url)}
                className="premium-outline interactive-card group relative overflow-hidden rounded-[28px] shadow-[0_18px_60px_rgba(8,54,41,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(8,54,41,0.14)] cursor-pointer"
              >
                <Image
                  src={img.url}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* Modal for Image Preview */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold z-50"
            >
              &times;
            </button>
            <Image
              src={activeImage}
              alt=""
              width={1000}
              height={1000}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
