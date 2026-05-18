import { PageHero, SectionTitle } from '@/src/components/ui/Shared';
import { Sparkles } from 'lucide-react';

const sections = [
  [
    'Use of Website',
    'This website is provided for general information, inquiries, and admission-related communication. Users are expected to use it responsibly and lawfully.',
  ],
  [
    'Accuracy of Information',
    'We aim to keep information updated and useful, but schedules, admissions, and program details may change as administrative needs evolve.',
  ],
  [
    'Intellectual Property',
    'Website content, branding, text, and design elements belong to Darul Qurra unless otherwise stated. Reuse should not occur without permission.',
  ],
  [
    'External Links',
    'Some pages may include links to outside services or maps for convenience. We are not responsible for the content or privacy practices of external sites.',
  ],
  [
    'Admissions & Forms',
    'Submitting a form does not guarantee admission. Placement, availability, and evaluation requirements remain subject to institutional review.',
  ],
  [
    'Changes to Terms',
    'These terms may be updated from time to time to reflect improvements, policy changes, or operational needs.',
  ],
];

export default function TermsPage() {
  return (
    <div>
      <PageHero
        title="Terms of Use"
        subtitle="Basic terms governing the use of this website, its forms, and informational content."
        badge="Website Terms"
      />

      <section className="section-glow py-20 md:py-24">
        <div className="container-shell relative z-10 max-w-4xl">
          <div className="surface-card mb-10 p-8 text-center md:p-10">
            <SectionTitle
              title="Website Terms & Conditions"
              subtitle="Use & Responsibility"
              description="These terms outline the general conditions governing website usage, informational content, and communication through Darul Qurra's site."
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
                      Terms
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
