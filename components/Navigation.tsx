'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { LiquidGlass } from '@/components/ui/liquid-glass';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navigation() {
  const { isLight } = useTheme();
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
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
    </motion.nav>
  );
}

