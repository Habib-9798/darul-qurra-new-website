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

 {/* 4. Form + Sidebar */}
<section
  className="border-t relative py-20 md:py-24"
  style={{ backgroundImage: 'url(/programs-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  {/* Overlay to darken the background slightly */}
  <div className="absolute inset-0 -z-10 bg-black/25"></div>

  <div className="container-shell max-w-7xl">
    <div className="mb-12">
      <SectionTitle
        title="Application Form"
        subtitle="Apply Now"
        description="Submit your details and our admissions office will guide you through the next steps."
      />
    </div>

    {/* Changed back to items-start so the left panel tightly hugs the form without extra space */}
    <div className="grid gap-8 lg:grid-cols-3 lg:items-start xl:gap-10">
      
      {/* LEFT COLUMN: Form Container */}
      <div className="lg:col-span-2 w-full">
        {/* Removed h-full so the panel stops exactly at the bottom of the form */}
        <div className="islamic-panel flex w-full flex-col p-6 sm:p-8 md:p-10">
          <div className="relative z-10 w-full">
            <ApplicationForm />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Sidebar (Compacted to match left column's natural height) */}
      <div className="flex flex-col gap-5 lg:gap-6">
        
        {/* Helpline (Premium Card) */}
        <div className="relative flex w-full flex-col rounded-[28px] border border-gold/25 bg-white/80 p-6 shadow-[0_24px_70px_rgba(8,54,41,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-gold/40 xl:p-7">
          <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
              Need Help?
            </span>
          </div>

          <h3 className="mb-2 text-xl font-bold text-brand-dark xl:text-2xl">
            Admissions Helpline
          </h3>

          <p className="mb-5 border-b border-gold/15 pb-5 text-[13px] leading-relaxed text-dark/70 xl:text-sm">
            Having trouble selecting a course or filling out the form? Our
            admissions office is available Monday to Saturday during office
            hours.
          </p>

          <div className="space-y-4 xl:space-y-5">
            <a
              href="tel:+92911234567"
              className="group flex items-center gap-3.5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/5 text-brand shadow-sm transition-colors duration-300 group-hover:bg-brand group-hover:text-gold xl:h-11 xl:w-11">
                <Phone className="h-4 w-4 xl:h-5 xl:w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-dark transition-colors group-hover:text-brand xl:text-base">Call Direct</p>
                <p className="text-[13px] font-medium text-dark/60">+92 91 123 4567</p>
              </div>
            </a>

            <a
              href="mailto:admissions@darulquran.edu.pk"
              className="group flex items-center gap-3.5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/5 text-brand shadow-sm transition-colors duration-300 group-hover:bg-brand group-hover:text-gold xl:h-11 xl:w-11">
                <Mail className="h-4 w-4 xl:h-5 xl:w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-dark transition-colors group-hover:text-brand xl:text-base">Email Us</p>
                <p className="text-[13px] font-medium text-dark/60">
                  admissions@darulquran.edu.pk
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Documents */}
        <div className="relative flex w-full flex-col rounded-[28px] border border-gold/25 bg-white/80 p-6 shadow-[0_24px_70px_rgba(8,54,41,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-gold/40 xl:p-7">
          <h3 className="mb-4 flex items-center gap-2.5 text-lg font-bold text-brand-dark xl:text-xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-brand">
              <ClipboardList className="h-4 w-4" />
            </div>
            Required Documents
          </h3>

          <p className="mb-4 text-[13px] font-medium leading-relaxed text-dark/70">
            Please bring these items to your assessment interview:
          </p>

          <ul className="flex flex-col gap-2.5">
            {[
              "Copy of Student's B-Form or CNIC",
              "Copy of Father/Guardian's CNIC",
              '2 recent passport-sized photographs',
              'Previous school leaving certificate (if applicable)',
              'Previous Tajweed/Hifz certificate (for advanced courses)',
            ].map((doc, idx) => (
              <li
                key={idx}
                className="group flex items-start gap-3 rounded-[16px] border border-gold/15 bg-white/60 p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-gold/5 hover:shadow-md"
              >
                <CheckCircle className="mt-[3px] h-4 w-4 shrink-0 text-brand/60 transition-colors group-hover:text-brand" />
                <span className="text-[12px] font-semibold leading-5 text-brand-dark/80 transition-colors group-hover:text-brand-dark xl:text-[13px]">
                  {doc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick trust card */}
        <div className="premium-outline shine-effect relative flex w-full flex-col overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#0d6b53,#094536)] p-6 text-cream shadow-[0_24px_60px_rgba(13,107,83,0.26)] transition-transform duration-500 hover:-translate-y-1 xl:p-7">
          <h3 className="mb-2 text-lg font-bold text-cream xl:text-xl">
            What happens after you apply?
          </h3>
          <p className="mb-5 text-[13px] leading-relaxed text-cream/80">
            Our team will review your form and contact you within 24 to 48
            working hours to arrange the next step.
          </p>
          <a
            href="/contact"
            className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-[13px] font-bold tracking-wide text-gold backdrop-blur-md transition-all hover:bg-gold hover:text-brand-dark xl:px-5 xl:py-2.5"
          >
            Contact Admissions <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 5. FAQ */}
<section
  className="relative py-20 md:py-24"
  style={{ backgroundImage: 'url(/admissions-callout-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  {/* Overlay to darken the background slightly */}
  <div className="absolute inset-0 -z-10 bg-black/25"></div>

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
<section
  className="relative overflow-hidden py-16 text-center text-cream"
  style={{ backgroundImage: 'url(/media-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  {/* Optional: Keep the subtle radial overlay for texture */}
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
