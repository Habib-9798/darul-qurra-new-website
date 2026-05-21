"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionTitle } from "@/src/components/ui/Shared";

export const galleryImages = [
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

export function MediaSection() {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  return (
    <section className="relative py-20 md:py-24">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url(/programs-bg.png)" }}
      />
      <div className="container-shell relative z-10 max-w-7xl">
        <div className="mb-12 text-center">
          <SectionTitle
            title="Experience the Atmosphere"
            subtitle="Media Showcase"
            description="A glimpse into our environment, student life, and sacred learning spaces."
          />
        </div>
        <div className="grid auto-rows-[260px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              onClick={() => { setActiveImage(img.url); setOpen(true); }}
              className="premium-outline interactive-card group relative overflow-hidden rounded-[28px] shadow-[0_18px_60px_rgba(8,54,41,0.08)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(8,54,41,0.14)] cursor-pointer"
            >
              <Image
                src={img.url}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-4xl w-full p-4">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-white text-2xl font-bold z-50">&times;</button>
            <Image src={activeImage} alt="" width={1000} height={1000} className="w-full h-auto rounded-xl" />
          </div>
        </div>
      )}
    </section>
  );
}
