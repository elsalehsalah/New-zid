'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { LiquidGlass } from '@/components/ui/liquid-glass';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import PricingSectionWrapperStatic from '@/components/static/PricingSectionWrapperStatic';
import { Feature } from '@/components/ui/feature';
import { CyberneticBentoGrid } from '@/components/ui/cybernetic-bento-grid';
import { Features } from '@/components/ui/features-5';
import Pricing from '@/components/ui/pricing-component';
import FeaturesGridStatic from '@/components/static/FeaturesGridStatic';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import SectionNavigation from '@/components/SectionNavigation';

export default function StaticPage() {
  const { isLight } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#eeeeee] dark:bg-[#09001A] transition-colors duration-500">
      {/* Navigation - Static */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] border-b border-solid transition-colors duration-500",
          isLight
            ? "bg-white/80 border-gray-200/50"
            : "bg-[#09001a] border-[rgba(255,255,255,0.1)]"
        )}
      >
        <LiquidGlass className="absolute inset-0" rounded="" disabled={!isLight} />
        <div className="w-full flex items-center justify-between px-6 md:px-12 lg:px-[112px] py-[22px] relative z-10">
          {/* Logo - on the left */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={136}
              height={48}
              className="h-[48px] w-auto object-contain"
            />
          </div>
          {/* Theme Toggle - on the right */}
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero - Static */}
      <section id="hero" className={cn(
        "relative min-h-screen overflow-hidden transition-colors duration-500",
        isLight ? "bg-[#eeeeee]" : "bg-[#09001A]"
      )}>
        <div className={cn(
          "fixed inset-0 bg-[size:80px_80px] pointer-events-none z-0 transition-opacity duration-500",
          isLight
            ? "bg-[linear-gradient(to_right,rgba(174,114,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(174,114,255,0.03)_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"
        )} />
        <div className={cn(
          "fixed top-[10%] right-[5%] w-[800px] h-[800px] blur-[100px] pointer-events-none z-0 transition-opacity duration-500",
          isLight
            ? "bg-[radial-gradient(circle,rgba(174,114,255,0.08)_0%,transparent_70%)]"
            : "bg-[radial-gradient(circle,rgba(174,114,255,0.12)_0%,transparent_70%)]"
        )} />
        <div className={cn(
          "fixed bottom-[10%] left-[5%] w-[700px] h-[700px] blur-[100px] pointer-events-none z-0 transition-opacity duration-500",
          isLight
            ? "bg-[radial-gradient(circle,rgba(131,56,236,0.08)_0%,transparent_70%)]"
            : "bg-[radial-gradient(circle,rgba(131,56,236,0.12)_0%,transparent_70%)]"
        )} />
        <div className="relative z-10">
          <ScrollExpandMedia
            mediaType="video"
            mediaSrc="https://www.youtube.com/watch?v=R9YXHDyz3s4"
            posterSrc="https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1280"
            bgImageSrc="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1920&auto=format&fit=crop"
            title="مستقبل التجارة الإلكترونية"
            date="إصدار شتاء 2026"
            scrollToExpand="مرر للتوسيع"
          />
        </div>
      </section>

      {/* Pricing - Static */}
      {/* <PricingSectionWrapperStatic /> */}

      {/* Feature Section */}
      <Feature />

      {/* Cybernetic Bento Grid */}
      <CyberneticBentoGrid />

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      {/* Features - Static */}
      {/* <FeaturesGridStatic /> */}

      {/* CTA - Static */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Section Navigation - Static */}
      <SectionNavigation />
    </main>
  );
}

