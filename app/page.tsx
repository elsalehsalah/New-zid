import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import SectionNavigation from '@/components/SectionNavigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eeeeee] dark:bg-[#09001A] transition-colors duration-500">
      <Navigation />
      <Hero />
      <IntroSection />
      <FeaturesGrid />
      <CTASection />
      <Footer />
      <SectionNavigation />
      </main>
  );
}
