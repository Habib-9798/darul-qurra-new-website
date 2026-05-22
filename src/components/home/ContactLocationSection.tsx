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

          {/* FIX: Removed broken Unsplash image entirely.
              The image was used as a decorative map background at opacity-35
              (nearly invisible) behind a dark overlay — purely decorative.
              Replaced with a CSS grid pattern that mimics a stylized map aesthetic.
              Zero network request, zero 404, identical visual weight. */}
          <div className="premium-outline map-glow group relative flex h-80 items-center justify-center overflow-hidden rounded-[28px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:h-[420px]">

            {/* CSS map-style background */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#041f19,#083629)]" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(202,162,77,0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(202,162,77,0.4) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,162,77,0.12),transparent_60%)]" />
            {/* Map pin dot at center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-3 w-3 rounded-full bg-gold shadow-[0_0_0_6px_rgba(202,162,77,0.2),0_0_0_12px_rgba(202,162,77,0.08)]" />
            </div>

            <a
              href="https://maps.google.com/?q=Darul+Qurra+University+Road+Peshawar"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-button relative z-10 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#d3aa56,#efcd7c)] px-8 py-3.5 text-sm font-bold text-brand-deep shadow-[0_18px_45px_rgba(202,162,77,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(202,162,77,0.38)]"
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
