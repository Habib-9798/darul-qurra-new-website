import {
  PageHero,
  SectionTitle,
  CTABanner,
} from '@/src/components/ui/Shared';
import { ApplicationForm } from '@/src/components/forms/ApplicationForm';
import {
  Phone,
  CheckCircle,
  FileText,
  Users,
  Mail,
  ClipboardList,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 1. Hero */}
      <PageHero
        title="Admissions"
        subtitle="Embark on your journey of Quranic mastery. Apply today to secure your place in our upcoming academic sessions."
        image="https://images.unsplash.com/photo-1542618837-1d6d63e5b387?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        badge="Apply Now"
      />

      {/* 2. Overview */}
      <section className="section-glow py-20 md:py-24">
        <div className="container-shell relative z-10 max-w-6xl">
          <div className="surface-card mb-12 p-8 text-center md:p-10">
            <SectionTitle
              title="Welcome to Darul Qurra"
              subtitle="Admissions Overview"
              description="We welcome students from all backgrounds who sincerely wish to learn the Holy Quran. Our admissions process is designed to place every learner at the right level with care and clarity."
            />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: 'Children & Youth',
                desc: 'Dedicated classes for children beginning their Nazra journey, through to supervised and disciplined Hifz programs.',
              },
              {
                icon: FileText,
                title: 'Huffaz & Scholars',
                desc: "Advanced placement for current Huffaz seeking Tajweed refinement, Ijazah, or Qira'at specialization.",
              },
              {
                icon: Clock,
                title: 'Adults & Professionals',
                desc: 'Respectful, flexible scheduling for adults who want to improve recitation or continue Quranic learning.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="surface-card surface-card-hover interactive-card p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-brand-dark">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-dark/68">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Process */}
      <section className="dark-section py-20 md:py-24">
        <div className="container-shell relative z-10 max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gold/50"></div>
              <span className="rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                Steps to Join
              </span>
              <div className="h-px w-10 bg-gold/50"></div>
            </div>

            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              The Admission Process
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              A simple and supportive process to help students begin in the right
              place.
            </p>
          </div>

          <div className="relative mt-16 grid gap-8 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-10 z-0 hidden border-t-2 border-dashed border-gold/20 md:block"></div>

            {[
              {
                title: 'Submit Form',
                desc: 'Fill out the application form with the required student details.',
              },
              {
                title: 'Assessment',
                desc: 'Attend a short oral reading evaluation with an instructor.',
              },
              {
                title: 'Placement',
                desc: 'Receive placement in the most suitable class and level.',
              },
              {
                title: 'Registration',
                desc: 'Complete documentation and finalize enrollment with the office.',
              },
            ].map((step, i) => (
              <div key={step.title} className="relative z-10 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0d6b53,#094536)] text-2xl font-bold text-gold shadow-[0_20px_40px_rgba(13,107,83,0.22)] ring-8 ring-white">
                  {i + 1}
                </div>

                <h3 className="mb-2 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mx-auto max-w-[220px] text-sm leading-7 text-white/72">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Form + Sidebar */}
      <section className="border-t border-sand/70 bg-sand/25 py-20 md:py-24">
        <div className="container-shell max-w-7xl">
          <div className="mb-12">
            <SectionTitle
              title="Application Form"
              subtitle="Apply Now"
              description="Submit your details and our admissions office will guide you through the next steps."
            />
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="islamic-panel p-8 md:p-12">
                <div className="relative z-10">
                  <ApplicationForm />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Helpline */}
              <div className="surface-card surface-card-hover p-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                    Need Help?
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-brand-dark">
                  Admissions Helpline
                </h3>

                <p className="mb-8 border-b border-sand pb-8 text-sm leading-7 text-dark/68">
                  Having trouble selecting a course or filling out the form? Our
                  admissions office is available Monday to Saturday during office
                  hours.
                </p>

                <div className="space-y-6">
                  <a
                    href="tel:+92911234567"
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-brand transition-colors duration-300 group-hover:bg-gold">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Call Direct</p>
                      <p className="text-sm text-dark/60">+92 91 123 4567</p>
                    </div>
                  </a>

                  <a
                    href="mailto:admissions@darulquran.edu.pk"
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sand text-brand transition-colors duration-300 group-hover:bg-gold">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark">Email Us</p>
                      <p className="text-sm text-dark/60">
                        admissions@darulquran.edu.pk
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Documents */}
              <div className="surface-card surface-card-hover p-8">
                <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-brand-dark">
                  <ClipboardList className="h-6 w-6 text-brand" />
                  Required Documents
                </h3>

                <p className="mb-4 text-sm text-dark/68">
                  Please bring these items to your assessment interview:
                </p>

                <ul className="space-y-3">
                  {[
                    "Copy of Student's B-Form or CNIC",
                    "Copy of Father/Guardian's CNIC",
                    '2 recent passport-sized photographs',
                    'Previous school leaving certificate (if applicable)',
                    'Previous Tajweed/Hifz certificate (for advanced courses)',
                  ].map((doc, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-[18px] border border-gold/10 bg-cream/60 p-3"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span className="text-sm font-medium leading-7 text-dark/80">
                        {doc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick trust card */}
              <div className="premium-outline shine-effect overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#0d6b53,#094536)] p-7 text-cream shadow-[0_20px_50px_rgba(13,107,83,0.22)]">
                <h3 className="mb-3 text-xl font-bold text-cream">
                  What happens after you apply?
                </h3>
                <p className="mb-5 text-sm leading-7 text-cream/78">
                  Our team will review your form and contact you within 24 to 48
                  working hours to arrange the next step.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 font-semibold text-gold transition-colors hover:text-gold-soft"
                >
                  Contact Admissions <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-20 md:py-24">
        <div className="container-shell max-w-4xl">
          <SectionTitle
            title="Admissions FAQ"
            subtitle="Common Questions"
            description="A few quick answers to the questions families and students ask most often."
          />

          <div className="mt-12 space-y-6">
            {[
              {
                q: 'Do I need prior Arabic knowledge to join?',
                a: 'For beginner courses like Adult Learning or Nazra classes, no prior Arabic knowledge is required. We begin from the basics using a structured foundation.',
              },
              {
                q: 'How quickly will I be contacted after applying?',
                a: 'Our admissions office typically processes online applications within 24 to 48 working hours. We will contact you by phone or WhatsApp to arrange assessment and placement.',
              },
              {
                q: 'Can females apply to Darul Qurra?',
                a: 'Yes, we have dedicated and segregated facilities for female students, taught by qualified female scholars and instructors.',
              },
            ].map((item) => (
              <div key={item.q} className="surface-card surface-card-hover p-8">
                <h4 className="mb-3 text-lg font-bold text-brand-dark">
                  {item.q}
                </h4>
                <p className="text-sm leading-7 text-dark/68">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Trust Block */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0d6b53,#095640)] py-16 text-center text-cream">
        <div
          className="absolute inset-0 opacity-12"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.65) 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="container-shell relative z-10 max-w-3xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cream/10 text-gold">
            <Shield className="h-8 w-8" />
          </div>

          <h2 className="mb-4 text-2xl font-bold text-cream md:text-3xl">
            A Sacred Trust (Amanah)
          </h2>

          <p className="text-lg leading-8 text-cream/80">
            We treat your educational journey and personal information with the
            confidentiality, respect, and care required by our faith. Darul
            Quran is committed to upholding Islamic values in every interaction.
          </p>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
