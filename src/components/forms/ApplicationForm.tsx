'use client';

import { Suspense, useState, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Send } from 'lucide-react';
import { programs } from '@/src/data/mockData';

const fieldClassName =
  'w-full rounded-[20px] border border-sand/80 bg-white/90 px-4 py-3.5 shadow-sm shadow-brand/5 backdrop-blur-sm';
const labelClassName = 'text-sm font-semibold text-dark/80';

function ApplicationFormBase() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultCourse = searchParams.get('course') || '';
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/thank-you');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="student-name" className={labelClassName}>
            Student Full Name *
          </label>
          <input
            id="student-name"
            name="studentName"
            required
            type="text"
            className={fieldClassName}
            placeholder="e.g. Muhammad Ahmad"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="guardian-name" className={labelClassName}>
            Parent / Guardian Name *
          </label>
          <input
            id="guardian-name"
            name="guardianName"
            required
            type="text"
            className={fieldClassName}
            placeholder="e.g. Tariq Khan"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone-number" className={labelClassName}>
            Phone Number *
          </label>
          <input
            id="phone-number"
            name="phoneNumber"
            required
            type="tel"
            className={fieldClassName}
            placeholder="+92 XXX XXXXXXX"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="whatsapp-number" className={labelClassName}>
            WhatsApp Number *
          </label>
          <input
            id="whatsapp-number"
            name="whatsappNumber"
            required
            type="tel"
            className={fieldClassName}
            placeholder="+92 XXX XXXXXXX"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2 md:col-span-1">
          <label htmlFor="email-address" className={labelClassName}>
            Email Address
          </label>
          <input
            id="email-address"
            name="emailAddress"
            type="email"
            className={fieldClassName}
            placeholder="email@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="student-age" className={labelClassName}>
            Student Age *
          </label>
          <input
            id="student-age"
            name="studentAge"
            required
            type="number"
            min="4"
            max="90"
            className={fieldClassName}
            placeholder="e.g. 12"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="city" className={labelClassName}>
            City of Residence *
          </label>
          <input
            id="city"
            name="city"
            required
            type="text"
            className={fieldClassName}
            placeholder="e.g. Peshawar"
          />
        </div>
      </div>

      <div className="grid gap-6 border-t border-sand/70 pt-6 md:grid-cols-3">
        <div className="space-y-2">
          <label htmlFor="desired-course" className={labelClassName}>
            Desired Course *
          </label>
          <select
            id="desired-course"
            name="desiredCourse"
            required
            defaultValue={defaultCourse}
            className={fieldClassName}
          >
            <option value="" disabled>
              Select a program...
            </option>
            {programs.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="quran-level" className={labelClassName}>
            Current Quran Level *
          </label>
          <select
            id="quran-level"
            name="quranLevel"
            required
            className={fieldClassName}
          >
            <option value="" disabled>
              Select level...
            </option>
            <option value="beginner">
              Absolute Beginner (No alphabet knowledge)
            </option>
            <option value="basic">
              Basic (Can read slowly / with difficulty)
            </option>
            <option value="fluent">Fluent (Nazra reader)</option>
            <option value="hafiz_partial">Partial Hafiz</option>
            <option value="hafiz_full">Complete Hafiz</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="preferred-timing" className={labelClassName}>
            Preferred Timing *
          </label>
          <select
            id="preferred-timing"
            name="preferredTiming"
            required
            className={fieldClassName}
          >
            <option value="" disabled>
              Select timing...
            </option>
            <option value="morning">Morning (8 AM - 1 PM)</option>
            <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
            <option value="evening">Evening (6 PM - 8 PM)</option>
            <option value="weekend">Weekends only</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="additional-message" className={labelClassName}>
          Additional Message or Questions (Optional)
        </label>
        <textarea
          id="additional-message"
          name="additionalMessage"
          rows={4}
          className={`${fieldClassName} resize-none`}
          placeholder="Any specific needs or questions..."
        ></textarea>
      </div>

      <div className="rounded-[24px] border border-gold/12 bg-cream/70 p-4 md:p-5">
        <div className="flex items-start gap-3">
          <input
            required
            type="checkbox"
            id="consent"
            className="mt-1 h-5 w-5 rounded border-sand text-brand"
          />
          <label
            htmlFor="consent"
            className="cursor-pointer text-sm leading-7 text-dark/70"
          >
            I confirm that the information provided is accurate. I understand
            that admission is subject to an entrance assessment and seat
            availability at Darul Qurra Peshawar.
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="primary-btn group flex w-full items-center justify-center gap-2 py-4 text-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          'Submitting Application...'
        ) : (
          <>
            Submit Official Application
            <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}

export function ApplicationForm() {
  return (
    <Suspense
      fallback={
        <div className="flex h-40 items-center justify-center text-dark/50">
          Loading application form...
        </div>
      }
    >
      <ApplicationFormBase />
    </Suspense>
  );
}
