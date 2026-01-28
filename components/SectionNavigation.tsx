'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { LiquidGlass } from '@/components/ui/liquid-glass';
import featuresData from '@/data/features.json';

// Convert number to Roman numeral
function toRoman(num: number): string {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  let result = '';
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += numerals[i];
      num -= values[i];
    }
  }
  return result;
}

export default function SectionNavigation() {
  const { isLight } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);

  // Dynamically generate sections from features data in the order they appear
  const sections = useMemo(() => {
    // Get unique sections in the order they first appear in the JSON
    const seenSections = new Set<string>();
    const featureSections: string[] = [];
    
    featuresData.features.forEach((feature: { section: string }) => {
      if (!seenSections.has(feature.section)) {
        seenSections.add(feature.section);
        featureSections.push(feature.section);
      }
    });

    // Convert to section objects with IDs matching FeaturesGrid format
    const sectionObjects = featureSections.map((section) => ({
      id: `${section.replace(/\s/g, '-').toLowerCase()}-features`,
      label: section,
    }));

    // Add hero, pricing, intro, and CTA sections
    return [
      { id: 'hero', label: 'الرئيسية' },
      { id: 'pricing', label: 'الأسعار' },
      { id: 'intro', label: 'مقدمة' },
      ...sectionObjects,
      { id: 'cta', label: 'ابدأ الآن' },
    ].map((section, index) => ({
      ...section,
      roman: toRoman(index + 1),
    }));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;
          
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }

      // Hide navigation when at the very top
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100; // Account for fixed header
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <LiquidGlass
        className={cn(
          "backdrop-blur-xl rounded-2xl p-4 max-h-[80vh] overflow-y-auto transition-colors duration-500",
          isLight
            ? "bg-white/[0.39] border-4 border-[rgba(255,255,255,0.15)] shadow-[0px_1.71px_22.22px_0px_rgba(174,114,255,0.21)]"
            : "bg-white/[0.02] border border-white/10"
        )}
        rounded="2xl"
        disabled={!isLight}
      >
        <ul className="space-y-0.5">
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "group relative flex items-center gap-4 w-full text-right transition-all duration-300",
                        isActive
                          ? isLight ? "text-[#3c1c54]" : "text-white"
                          : isLight ? "text-[#777d88] hover:text-[#3c1c54]" : "text-gray-500 hover:text-gray-300"
                      )}
                >
                  {/* Dotted line */}
                      <div className={cn(
                        "flex-1 border-t border-dotted transition-colors",
                        isLight
                          ? "border-[rgba(174,114,255,0.2)] group-hover:border-[rgba(174,114,255,0.4)]"
                          : "border-white/20 group-hover:border-white/40"
                      )} />
                  
                  {/* Label */}
                  <span className={cn(
                    "text-xs font-mono transition-all duration-300 whitespace-nowrap",
                    isActive ? "font-bold" : "font-normal"
                  )}>
                    {section.label}
                  </span>
                  
                  {/* Roman numeral */}
                  <span className={cn(
                    "text-xs font-mono w-5 text-left transition-all duration-300",
                    isActive ? "font-bold" : ""
                  )}>
                    {section.roman}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </LiquidGlass>
    </motion.nav>
  );
}

