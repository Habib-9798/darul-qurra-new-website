import { AboutPreviewSection } from '@/src/components/home/AboutPreviewSection';
import { AdmissionsCalloutSection } from '@/src/components/home/AdmissionsCalloutSection';
import { AnnouncementsDonationSection } from '@/src/components/home/AnnouncementsDonationSection';
import { ContactLocationSection } from '@/src/components/home/ContactLocationSection';
import { FacultyPreviewSection } from '@/src/components/home/FacultyPreviewSection';
import { HeroSection } from '@/src/components/home/HeroSection';
import { MediaSection } from '@/src/components/home/MediaSection';
import { ProgramsOverviewSection } from '@/src/components/home/ProgramsOverviewSection';
import { TestimonialsSection } from '@/src/components/home/TestimonialsSection';
import { WhyChooseSection } from '@/src/components/home/WhyChooseSection';
import { CTABanner } from '@/src/components/ui/Shared';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <HeroSection />
      <AboutPreviewSection />
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
