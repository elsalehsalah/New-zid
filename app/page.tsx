import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import SectionNavigation from '@/components/SectionNavigation';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09001A] dark:bg-[#09001A] bg-[#f7f8fb] transition-colors duration-500">
      <ThemeToggle />
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
