'use client';

import { useState, FormEvent } from 'react';
import { PageHero, SectionTitle, CTABanner } from '@/src/components/ui/Shared';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const fieldClassName =
  'w-full rounded-[20px] border border-sand/80 bg-white/90 px-4 py-3.5 shadow-sm shadow-brand/5 backdrop-blur-sm';

export default function ContactPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/thank-you');
    }, 1200);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: 'Campus Location',
      body: 'Darul Qurra Educational Complex, Opposite Main Jamia Masjid, Phase 3, Hayatabad, Peshawar, Khyber Pakhtunkhwa.',
    },
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      body: `Office: +92 91 123 4567
Admissions: +92 300 123 4567`,
    },
    {
      icon: Mail,
      title: 'Email Address',
      body: `info@darulquran.edu.pk
admissions@darulquran.edu.pk`,
    },
    {
      icon: Clock,
      title: 'Office Hours',
      body: `Monday - Saturday: 8:00 AM - 2:00 PM
Friday: 8:00 AM - 12:00 PM
Closed on Sundays`,
      dark: true,
    },
  ];

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We welcome your inquiries. Reach out for admissions, support, campus visits, or general information."
        badge="Get In Touch"
      />

      {/* Main Contact Section with background image */}
      <section
        className="section-glow py-20 md:py-24 relative"
        style={{
          backgroundImage: "url('/courses.page.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container-shell relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* Left */}
            <div className="space-y-8">
              <div className="surface-card p-8 md:p-10">
                <SectionTitle
                  title="We are here for you"
                  subtitle="Get in Touch"
                  alignment="left"
                  description="Whether you are a prospective student, a parent, or a supporter of Quranic education, our team will be glad to guide you with clarity and care."
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {contactCards.map((item, index) => (
                  <div
                    key={index}
                    className={
                      item.dark
                        ? 'premium-outline overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#0d6b53,#094536)] p-7 text-cream shadow-[0_20px_50px_rgba(13,107,83,0.22)]'
                        : 'surface-card surface-card-hover p-7'
                    }
                  >
                    <div
                      className={
                        item.dark
                          ? 'mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold'
                          : 'mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-brand'
                      }
                    >
                      <item.icon className="h-5 w-5" />
                    </div>

                    <h3
                      className={
                        item.dark
                          ? 'mb-3 text-xl font-bold text-cream'
                          : 'mb-3 text-xl font-bold text-brand-dark'
                      }
                    >
                      {item.title}
                    </h3>

                    <p
                      className={
                        item.dark
                          ? 'whitespace-pre-line text-sm leading-7 text-cream/78'
                          : 'whitespace-pre-line text-sm leading-7 text-dark/68'
                      }
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="islamic-panel premium-outline p-8 md:p-10">
              <div className="relative z-10">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                    Direct Inquiry
                  </span>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-brand-dark md:text-3xl">
                  Send us a Message
                </h3>

                <p className="mb-8 text-dark/66">
                  Share your query and our team will get back to you shortly, in
                  sha Allah.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-semibold text-dark/80"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      type="text"
                      className={fieldClassName}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="text-sm font-semibold text-dark/80"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className={fieldClassName}
                        placeholder="email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-phone"
                        className="text-sm font-semibold text-dark/80"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        required
                        type="tel"
                        className={fieldClassName}
                        placeholder="Your contact number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="text-sm font-semibold text-dark/80"
                    >
                      Message / Inquiry *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      className={`${fieldClassName} resize-none`}
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="primary-btn group flex w-full items-center justify-center gap-2 py-4 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit / Map Section */}
      <section className="pb-20 md:pb-24">
        <div className="container-shell">
          <div className="premium-outline shine-effect relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#041f19_0%,#083629_50%,#06271f_100%)] px-6 py-16 text-center text-cream shadow-[0_24px_80px_rgba(8,54,41,0.22)] md:px-12">
            <div
              className="absolute inset-0 opacity-14"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.65) 1px, transparent 0)',
                backgroundSize: '30px 30px',
              }}
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,76,0.2),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_20%)]" />

            <div className="relative z-10 mx-auto max-w-xl rounded-[28px] border border-white/10 bg-white/10 p-8 backdrop-blur-md">
              <MapPin className="mx-auto mb-4 h-10 w-10 text-gold" />

              <h3 className="mb-3 text-2xl font-bold text-cream md:text-3xl">
                Visit the Campus
              </h3>

              <p className="mb-6 text-sm leading-7 text-cream/78">
                If you would like directions or want to arrange a campus visit for
                admissions guidance, contact the office and we will assist you.
              </p>

              <a
                href="https://maps.google.com/?q=Darul%20Qurra%20Educational%20Complex%20Hayatabad%20Peshawar"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn inline-flex items-center gap-2 px-6"
              >
                Open Directions
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
