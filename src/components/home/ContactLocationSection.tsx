import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

export function ContactLocationSection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/contact-location-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-brand-deep/55"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,162,76,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(13,107,83,0.14),transparent_30%)]"></div>
      <div className="floating-particles"></div>

      <div className="container-shell relative z-10 max-w-6xl">
        <div className="reveal-up text-center">
          <div className="shine-effect mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
            We are here for you
          </div>

          <h2 className="text-4xl font-bold text-cream md:text-5xl">
            Get in Touch
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-cream/80">
            Visit our campus, speak with our team, and experience the environment
            firsthand.
          </p>

          <div className="arabic-divider mt-6">
            <span></span>
          </div>
        </div>

        <div className="reveal-card mt-16 grid items-center gap-10 rounded-[34px] border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-3xl font-bold text-cream">
                Visit Our Campus
              </h3>
              <p className="max-w-md text-cream/74">
                Our doors are open for visitors. Come and witness our ongoing
                classes, speak with teachers, and observe the disciplined
                environment firsthand.
              </p>
            </div>

            <div className="space-y-5">
              <div className="glass-card glass-card-hover premium-outline flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/6 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <MapPin className="premium-icon-hover h-5 w-5" />
                </div>

                <div>
                  <h4 className="mb-1 font-semibold text-cream">
                    Campus Location
                  </h4>
                  <p className="text-sm leading-7 text-cream/72">
                    Darul Qurra Building, University Road,
                    <br />
                    Peshawar, KP, Pakistan
                  </p>
                </div>
              </div>

              <div className="glass-card glass-card-hover premium-outline flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/6 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Phone className="premium-icon-hover h-5 w-5" />
                </div>

                <div>
                  <h4 className="mb-1 font-semibold text-cream">
                    Contact Office
                  </h4>
                  <p className="text-sm leading-7 text-cream/72">
                    +92 91 123 4567
                    <br />
                    +92 300 1234567 (WhatsApp available)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="premium-outline map-glow group image-mask-reveal relative flex h-80 items-center justify-center overflow-hidden rounded-[28px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Map-style city location preview"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-35 transition-all duration-700 group-hover:scale-105 group-hover:opacity-45"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-deep/45"></div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-button inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#d3aa56,#efcd7c)] px-8 py-3.5 text-sm font-bold text-brand-deep shadow-[0_18px_45px_rgba(202,162,77,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(202,162,77,0.38)]"
            >
              <MapPin className="h-4 w-4" />
              Open Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
