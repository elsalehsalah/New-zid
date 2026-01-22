'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export default function Hero() {
  const { isLight } = useTheme();
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <section id="hero" className={cn(
      "relative min-h-screen overflow-hidden transition-colors duration-500",
      isLight ? "bg-[#eeeeee]" : "bg-[#09001A]"
    )}>
      {/* Grid Background */}
      <div className={cn(
        "fixed inset-0 bg-[size:80px_80px] pointer-events-none z-0 transition-opacity duration-500",
        isLight
          ? "bg-[linear-gradient(to_right,rgba(174,114,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(174,114,255,0.03)_1px,transparent_1px)]"
          : "bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"
      )} />

      {/* Magnetic Gradient Orbs */}
      <motion.div
        className={cn(
          "fixed top-[10%] right-[5%] w-[800px] h-[800px] blur-[100px] pointer-events-none z-0 transition-opacity duration-500",
          isLight
            ? "bg-[radial-gradient(circle,rgba(174,114,255,0.08)_0%,transparent_70%)]"
            : "bg-[radial-gradient(circle,rgba(174,114,255,0.12)_0%,transparent_70%)]"
        )}
        animate={{
          scale: [1, 1.1, 1],
          opacity: isLight ? [0.3, 0.5, 0.3] : [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className={cn(
          "fixed bottom-[10%] left-[5%] w-[700px] h-[700px] blur-[100px] pointer-events-none z-0 transition-opacity duration-500",
          isLight
            ? "bg-[radial-gradient(circle,rgba(131,56,236,0.08)_0%,transparent_70%)]"
            : "bg-[radial-gradient(circle,rgba(131,56,236,0.12)_0%,transparent_70%)]"
        )}
        animate={{
          scale: [1, 1.1, 1],
          opacity: isLight ? [0.3, 0.5, 0.3] : [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

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
  );
}
