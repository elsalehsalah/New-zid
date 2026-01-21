'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { LiquidGlass } from '@/components/ui/liquid-glass';

const sections = [
  { id: 'hero', label: 'الرئيسية', roman: 'I' },
  { id: 'intro', label: 'مقدمة', roman: 'II' },
  { id: 'المنتجات-features', label: 'المنتجات', roman: 'III' },
  { id: 'المخزون-features', label: 'المخزون', roman: 'IV' },
  { id: 'الكاشير-features', label: 'الكاشير', roman: 'V' },
  { id: 'الطلبات-features', label: 'الطلبات', roman: 'VI' },
  { id: 'التسويق-features', label: 'التسويق', roman: 'VII' },
  { id: 'قنوات-البيع---مزيد-features', label: 'قنوات البيع - مزيد', roman: 'VIII' },
  { id: 'التحليلات-features', label: 'التحليلات', roman: 'IX' },
  { id: 'الجمعيات-features', label: 'الجمعيات', roman: 'X' },
  { id: 'المدفوعات-والتمويل-features', label: 'المدفوعات والتمويل', roman: 'XI' },
  { id: 'اللوجستيات-والشحن-features', label: 'اللوجستيات والشحن', roman: 'XII' },
  { id: 'لوحة-التحكم-features', label: 'لوحة التحكم', roman: 'XIII' },
  { id: 'cta', label: 'ابدأ الآن', roman: 'XIV' },
];

export default function SectionNavigation() {
  const { isLight } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);

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
  }, []);

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
            ? "bg-white/80 border border-gray-200/50 shadow-lg"
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
                      ? isLight ? "text-slate-900" : "text-white"
                      : isLight ? "text-slate-600 hover:text-slate-800" : "text-gray-500 hover:text-gray-300"
                  )}
                >
                  {/* Dotted line */}
                  <div className={cn(
                    "flex-1 border-t border-dotted transition-colors",
                    isLight
                      ? "border-gray-300/50 group-hover:border-gray-400/50"
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

