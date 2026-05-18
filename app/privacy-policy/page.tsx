import { PageHero, SectionTitle } from '@/src/components/ui/Shared';
import { Sparkles } from 'lucide-react';

const sections = [
  [
    'Information We Collect',
    'We may collect personal details you voluntarily submit through contact, admission, or inquiry forms, such as your name, phone number, email address, and course interest.',
  ],
  [
    'How We Use Information',
    'Submitted information is used to respond to inquiries, process applications, improve communication, and provide relevant updates regarding our programs and services.',
  ],
  [
    'Data Protection',
    'We take reasonable administrative and technical measures to protect the information entrusted to us. Access is limited to authorized personnel where needed.',
  ],
  [
    'Sharing of Information',
    'We do not sell personal information. Data may only be shared when required for essential administrative purposes or where disclosure is legally necessary.',
  ],
  [
    'Cookies & Site Usage',
    'Basic website analytics or technical cookies may be used to improve site performance and usability.',
  ],
  [
    'Contact',
    'If you have questions about privacy or how your information is handled, please contact the administration office through the Contact page.',
  ],
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect the information shared with Darul Qurra through this website."
        badge="Website Policy"
      />

      <section className="section-glow py-20 md:py-24">
        <div className="container-shell relative z-10 max-w-4xl">
          <div className="surface-card mb-10 p-8 text-center md:p-10">
            <SectionTitle
              title="Your Information & Privacy"
              subtitle="Transparency"
              description="We value trust and handle information shared through this website with care, responsibility, and respect."
            />
          </div>

          <div className="surface-card premium-outline p-8 md:p-10">
            <div className="space-y-8">
              {sections.map(([title, desc]) => (
                <div
                  key={title}
                  className="border-b border-gold/12 pb-8 last:border-b-0 last:pb-0"
                >
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                      Policy
                    </span>
                  </div>

                  <h2 className="mb-3 text-2xl font-bold text-brand-dark">
                    {title}
                  </h2>

                  <p className="leading-8 text-dark/68">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
