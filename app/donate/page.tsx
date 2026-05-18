import { PageHero, SectionTitle, CTABanner } from '@/src/components/ui/Shared';
import {
  HeartHandshake,
  Landmark,
  Smartphone,
  ArrowRight,
  Shield,
  BadgeDollarSign,
  Sparkles,
} from 'lucide-react';

export default function DonatePage() {
  return (
    <div>
      <PageHero
        title="Support Our Mission"
        subtitle="Invest in Sadaqah Jariyah by helping us sustain Quranic education, student care, and the training of future scholars."
        image="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        badge="Sadaqah Jariyah"
      />

      <section className="section-glow py-20 md:py-24">
        <div className="container-shell relative z-10 max-w-6xl">
          {/* Intro */}
          <div className="surface-card mb-12 p-8 text-center md:p-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
              <HeartHandshake className="h-8 w-8" />
            </div>

            <SectionTitle
              title="A Continual Charity"
              subtitle="Support With Intention"
              description="Supporting Darul Qurra helps sacred knowledge continue from one generation to the next. Your contribution strengthens teaching, student support, and the daily work of preserving the Book of Allah."
            />
          </div>

          {/* Payment Methods */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Bank Transfer */}
            <div className="islamic-panel p-8 md:p-10">
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/12 text-brand">
                  <Landmark className="h-7 w-7" />
                </div>

                <h3 className="mb-6 text-2xl font-bold text-brand-dark">
                  Bank Transfer
                </h3>

                <div className="space-y-4">
                  <div className="premium-outline rounded-2xl border border-gold/12 bg-white/80 p-4">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-dark/45">
                      Account Title
                    </p>
                    <p className="font-mono text-lg font-bold text-brand-dark">
                      Darul Qurra PESHAWAR TRUST
                    </p>
                  </div>

                  <div className="premium-outline rounded-2xl border border-gold/12 bg-white/80 p-4">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-dark/45">
                      IBAN
                    </p>
                    <p className="font-mono text-lg font-bold tracking-wider text-brand-dark">
                      PK32 MUCB 0123 4567 8910 11
                    </p>
                  </div>

                  <div className="premium-outline rounded-2xl border border-gold/12 bg-white/80 p-4">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-dark/45">
                      Bank Name
                    </p>
                    <p className="font-semibold text-brand-dark">
                      Meezan Bank Limited (Islamic)
                    </p>
                    <p className="text-sm text-dark/62">
                      University Road Branch, Peshawar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Accounts */}
            <div className="premium-outline overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#041f19_0%,#083629_50%,#06271f_100%)] p-8 text-cream shadow-[0_22px_70px_rgba(8,54,41,0.22)] md:p-10">
              <div
                className="absolute inset-0 opacity-12"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.65) 1px, transparent 0)',
                  backgroundSize: '30px 30px',
                }}
              />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold">
                  <Smartphone className="h-7 w-7" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-cream">
                  Mobile Accounts
                </h3>

                <p className="mb-6 text-cream/78">
                  For quick contributions, you can use our registered mobile
                  trust accounts.
                </p>

                <div className="space-y-4">
                  <div className="glass-card rounded-2xl p-5">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                      EasyPaisa
                    </p>
                    <p className="font-mono text-xl font-bold tracking-widest">
                      0300 123 4567
                    </p>
                    <p className="text-sm text-cream/62">
                      Title: Darul Qurra Trust
                    </p>
                  </div>

                  <div className="glass-card rounded-2xl p-5">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                      JazzCash / SadaPay
                    </p>
                    <p className="font-mono text-xl font-bold tracking-widest">
                      0300 123 4567
                    </p>
                    <p className="text-sm text-cream/62">
                      Title: Darul Qurra Trust
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust / Contact */}
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="surface-card p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Shield className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="mb-2 text-xl font-bold text-brand-dark">
                    Zakat & Student Sponsorship
                  </h3>
                  <p className="text-sm leading-7 text-dark/66">
                    If your donation is specifically intended for Zakat, boarding
                    support, fee relief, or sponsoring a Hifz student, please
                    contact administration so the amount can be allocated
                    correctly.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/contact"
              className="primary-btn group inline-flex items-center justify-center gap-2 rounded-[28px] px-8 py-6 text-center"
            >
              Contact Admin
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Why Give */}
          <div className="mt-8 islamic-panel p-8 md:p-10">
            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 text-gold">
                <Sparkles className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                  Why Give
                </span>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  [
                    'Transparent Use',
                    'Your support strengthens teaching, student support, and facility upkeep.',
                  ],
                  [
                    'Long-Term Reward',
                    'Helping Quranic education continue is an investment with lasting benefit.',
                  ],
                  [
                    'Trusted Giving',
                    "Contributions are handled with care and in line with the institution's mission.",
                  ],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="premium-outline card-hover-glow rounded-[24px] border border-gold/12 bg-white/75 p-5 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                      <BadgeDollarSign className="h-5 w-5" />
                    </div>
                    <h4 className="mb-2 text-lg font-bold text-brand-dark">
                      {title}
                    </h4>
                    <p className="text-sm leading-7 text-dark/66">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
