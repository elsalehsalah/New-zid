'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { LiquidGlass } from '@/components/ui/liquid-glass';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { toggleTheme, isLight } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        "fixed top-24 left-8 z-[60] p-3 rounded-full backdrop-blur-xl border transition-all duration-300 relative overflow-hidden",
        isLight
          ? "bg-white/[0.39] border-4 border-[rgba(255,255,255,0.15)] text-[#3c1c54] hover:bg-white/[0.5] shadow-[0px_1.71px_22.22px_0px_rgba(174,114,255,0.21)]"
          : "bg-[#09001a]/80 border-white/10 text-white hover:bg-[#09001a] hover:border-white/20",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isLight ? 'الوضع الداكن' : 'الوضع الفاتح'}
    >
      {isLight && <LiquidGlass className="absolute inset-0" rounded="rounded-full" />}
      <span className="relative z-10">
        {isLight ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </span>
    </motion.button>
  );
}

