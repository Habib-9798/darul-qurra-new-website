import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { SectionTitle } from '@/src/components/ui/Shared';

export function AdmissionsCalloutSection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/admissions-callout-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/20"></div>
      <div className="section-depth-bg opacity-50"></div>

      <div className="container-shell relative z-10 max-w-5xl text-center">
        <div className="reveal-up">
          <SectionTitle
            title="Simple Admission Process"
            subtitle="How to Join"
            description="A clear and supportive process to help students begin with confidence."
          />
          <div className="arabic-divider">
            <span></span>
          </div>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3 md:gap-10">
          <div className="absolute left-[18%] right-[18%] top-12 z-0 hidden border-t-2 border-dashed border-gold/35 md:block"></div>

          {[
            {
              no: '1',
              title: 'Explore',
              desc: 'Choose the program that fits your current reading level and goals.',
            },
            {
              no: '2',
              title: 'Apply',
              desc: 'Submit the quick online inquiry form to register your interest.',
            },
            {
              no: '3',
              title: 'Assess',
              desc: 'Meet our teachers for a brief reading assessment and placement.',
            },
          ].map((step, index) => (
            <div
              key={step.no}
              className={`glass-card-hover reveal-card relative z-10 rounded-[28px] border border-white/65 bg-white/58 p-7 shadow-[0_18px_50px_rgba(166,139,79,0.12)] backdrop-blur-md stagger-item stagger-${index + 1}`}
            >
              <div className="animated-counter mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0d6b53,#094536)] text-3xl font-bold text-gold shadow-[0_20px_40px_rgba(13,107,83,0.22)] ring-8 ring-white/80">
                {step.no}
              </div>

              <h3 className="mb-3 text-xl font-bold text-brand-dark">
                {step.title}
              </h3>

              <p className="mx-auto max-w-xs text-dark/72">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center opacity-100">
          <Link
            href="/admissions"
            className="magnetic-button group inline-flex items-center justify-center gap-2 rounded-full bg-[#064B3A] px-10 py-3.5 text-sm font-bold text-white opacity-100 shadow-[0_18px_45px_rgba(6,75,58,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#04382C] hover:shadow-[0_24px_60px_rgba(6,75,58,0.45)]"
          >
            Start Application
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
