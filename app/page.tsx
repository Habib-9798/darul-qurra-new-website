import dynamic from 'next/dynamic';
import { HeroSection } from '@/src/components/home/HeroSection';
import { AboutPreviewSection } from '@/src/components/home/AboutPreviewSection';

// ✅ NEW: Lazy load everything below the fold
const ProgramsOverviewSection = dynamic(
  () => import('@/src/components/home/ProgramsOverviewSection').then(m => m.ProgramsOverviewSection),
  { loading: () => <div className="h-96 bg-gray-50 animate-pulse" /> }
);

const WhyChooseSection = dynamic(
  () => import('@/src/components/home/WhyChooseSection').then(m => m.WhyChooseSection),
  { loading: () => <div className="h-96 bg-white animate-pulse" /> }
);

const FacultyPreviewSection = dynamic(
  () => import('@/src/components/home/FacultyPreviewSection').then(m => m.FacultyPreviewSection),
  { loading: () => <div className="h-96 bg-gray-50 animate-pulse" /> }
);

const MediaSection = dynamic(
  () => import('@/src/components/home/MediaSection').then(m => m.MediaSection),
  { loading: () => <div className="h-96 bg-white animate-pulse" /> }
);

const AdmissionsCalloutSection = dynamic(
  () => import('@/src/components/home/AdmissionsCalloutSection').then(m => m.AdmissionsCalloutSection),
  { loading: () => <div className="h-64 bg-gray-50 animate-pulse" /> }
);

const TestimonialsSection = dynamic(
  () => import('@/src/components/home/TestimonialsSection').then(m => m.TestimonialsSection),
  { loading: () => <div className="h-96 bg-white animate-pulse" /> }
);

const AnnouncementsDonationSection = dynamic(
  () => import('@/src/components/home/AnnouncementsDonationSection').then(m => m.AnnouncementsDonationSection),
  { loading: () => <div className="h-96 bg-gray-50 animate-pulse" /> }
);

const ContactLocationSection = dynamic(
  () => import('@/src/components/home/ContactLocationSection').then(m => m.ContactLocationSection),
  { loading: () => <div className="h-96 bg-white animate-pulse" /> }
);

const CTABanner = dynamic(
  () => import('@/src/components/ui/Shared').then(m => m.CTABanner),
  { loading: () => <div className="h-32 bg-gray-50 animate-pulse" /> }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* ✅ Loads immediately — users see this first */}
      <HeroSection />
      <AboutPreviewSection />

      {/* ✅ These load as user scrolls down */}
      <ProgramsOverviewSection />
      <WhyChooseSection />
      <FacultyPreviewSection />
      <MediaSection />
      <AdmissionsCalloutSection />
      <TestimonialsSection />
      <AnnouncementsDonationSection />
      <ContactLocationSection />
      <CTABanner />
    </div>
  );
}

