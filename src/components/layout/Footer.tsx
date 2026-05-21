import Link from 'next/link';
import Image from 'next/image'; // ← Added import
import {
  MapPin,
  Phone,
  Mail,
  Heart,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '@/src/config/site';
import { footerProgramLinks, footerQuickLinks } from '@/src/data/navigation';

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-gold/20 bg-brand-deep text-cream/80">
      <div
        className="absolute inset-0 opacity-18"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(201,162,76,0.32) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="floating-particles"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,76,0.12),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_20%)]" />

      <div className="container-shell relative py-20">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="reveal-card">
            <div className="mb-6 flex items-center gap-3">
              <div className="glow-hover relative flex h-12 w-12 items-center justify-center rounded-full bg-cream shadow-lg">
                {/* Official Logo */}
                <Image
                  src="/darul-qurra-logo.png"
                  alt="Official Logo"
                  width={48}
                  height={48}
                  className="rounded-full object-contain border border-gold/40"
                />
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold leading-tight text-cream">
                  {siteConfig.name}
                </h2>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  {siteConfig.city}
                </p>
              </div>
            </div>

            <p className="mb-6 max-w-sm text-sm leading-7 text-cream/72">
              Established in 1969, serving the community with trust,
              scholarship, and spiritual care through Quran education, Tajweed,
              and Qira&apos;at.
            </p>

            <div className="flex gap-3">
              <a
                href={siteConfig.emailHref}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold hover:text-brand-dark hover:shadow-[0_14px_30px_rgba(202,162,77,0.2)]"
                aria-label={`Email ${siteConfig.name}`}
              >
                <Mail className="h-4 w-4" />
              </a>

              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-gold hover:text-brand-dark hover:shadow-[0_14px_30px_rgba(202,162,77,0.2)]"
                aria-label={`Call ${siteConfig.name}`}
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="reveal-card">
            <div className="shine-effect mb-5 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
              <Sparkles className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                Explore
              </span>
            </div>

            <h3 className="mb-5 font-serif text-lg font-semibold text-gold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {footerQuickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="group inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-cream"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="reveal-card">
            <div className="shine-effect mb-5 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
              <Sparkles className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                Learn
              </span>
            </div>

            <h3 className="mb-5 font-serif text-lg font-semibold text-gold">
              Programs
            </h3>

            <ul className="space-y-3 text-sm">
              {footerProgramLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="group inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-cream"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="reveal-card">
            <div className="shine-effect mb-5 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
              <Sparkles className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                Connect
              </span>
            </div>

            <h3 className="mb-5 font-serif text-lg font-semibold text-gold">
              Contact Us
            </h3>

            <ul className="mb-6 space-y-4 text-sm text-cream/74">
              <li className="glass-card-hover flex items-start gap-3 rounded-2xl p-2">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{siteConfig.address}</span>
              </li>

              <li className="glass-card-hover flex items-center gap-3 rounded-2xl p-2">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <span>{siteConfig.phone}</span>
              </li>

              <li className="glass-card-hover flex items-center gap-3 rounded-2xl p-2">
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>

            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2.5 text-sm font-semibold text-gold transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-brand-dark hover:shadow-[0_16px_34px_rgba(202,162,77,0.22)]"
            >
              <Heart className="h-4 w-4" />
              Support Our Work
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-cream/60 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name} {siteConfig.city}. All rights
            reserved.
          </p>

          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-cream"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-cream">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
