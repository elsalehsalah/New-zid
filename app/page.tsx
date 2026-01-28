import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { Feature } from '@/components/ui/feature';
import { CyberneticBentoGrid } from '@/components/ui/cybernetic-bento-grid';
import { Features } from '@/components/ui/features-5';
import Pricing from '@/components/ui/pricing-component';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import SectionNavigation from '@/components/SectionNavigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eeeeee] dark:bg-[#09001A] transition-colors duration-500">
      <Navigation />
      <Hero />
      <Feature />
      <CyberneticBentoGrid />
      <Features />
      <Pricing />
      <FeaturesGrid />
      <CTASection />
      <Footer />
      <SectionNavigation />
      </main>
  );
}
