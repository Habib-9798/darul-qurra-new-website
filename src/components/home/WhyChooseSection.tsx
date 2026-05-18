import { BookOpen, Clock, GraduationCap, Heart, Shield, Users } from 'lucide-react';

export function WhyChooseSection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/why-choose-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-brand-deep/25"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/20 via-brand-deep/5 to-brand-deep/35"></div>
      <div className="floating-particles"></div>
      <div className="section-depth-bg opacity-30"></div>

      <div className="container-shell relative z-10 max-w-7xl">
        <div className="reveal-up text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50"></span>
            <span className="shine-effect rounded-full border border-gold/30 bg-gold/10 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Our Distinction
            </span>
            <span className="h-px w-12 bg-gold/50"></span>
          </div>

          <h2 className="text-4xl font-bold text-cream drop-shadow-lg md:text-5xl">
            Why Choose Darul Qurra?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cream/85 drop-shadow-md">
            A disciplined, trusted, and spiritually grounded environment for Quranic excellence.
          </p>

          <div className="arabic-divider">
            <span></span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: 'Specialized Focus',
              desc: 'A deep focus on precise recitation, memorization, and sound transmission of the Quran.',
            },
            {
              icon: Users,
              title: 'Experienced Faculty',
              desc: 'Senior Qaris with authentic Ijazahs and years of guided teaching experience.',
            },
            {
              icon: Shield,
              title: 'Community Trust',
              desc: 'Trusted by generations of families in Peshawar since 1969.',
            },
            {
              icon: GraduationCap,
              title: 'Structured Curriculum',
              desc: "A progressive path from foundational recitation to advanced Qira'at.",
            },
            {
              icon: Heart,
              title: 'Respectful Environment',
              desc: 'An atmosphere centered on Tarbiyah, discipline, and care.',
            },
            {
              icon: Clock,
              title: 'Flexible Schedules',
              desc: 'Morning, evening, and weekend options for students and adults.',
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className={`glass-card glass-motion glow-hover premium-outline reveal-card bg-brand-deep/42 p-7 backdrop-blur-md stagger-item stagger-${(index % 6) + 1}`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                <feature.icon className="premium-icon-hover h-5 w-5" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-cream">
                {feature.title}
              </h3>
              <p className="text-sm leading-7 text-cream/74">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
