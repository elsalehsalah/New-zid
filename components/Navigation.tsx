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
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] border-b border-solid transition-colors duration-500 relative",
        isLight
          ? "bg-white/80 border-gray-200/50"
          : "bg-[#09001a] border-[rgba(255,255,255,0.1)]"
      )}
    >
      {isLight && <LiquidGlass className="absolute inset-0" rounded="" />}
      <div className="w-full flex items-center justify-end px-[112px] py-[22px] relative">
        <ThemeToggle className="absolute left-6 top-1/2 -translate-y-1/2 z-[60]" />
        <div className="flex gap-[16px] items-center ml-auto" dir="ltr">
          {/* Text Content */}
          <div className="flex flex-col items-end leading-[0] text-[17.633px] text-right w-[148px]">
            {/* Arabic Text - Bold */}
            <div className={cn(
              "bg-clip-text bg-gradient-to-l flex flex-col font-body font-bold justify-center min-w-full relative shrink-0 transition-colors duration-500",
              isLight ? "from-slate-900 to-slate-600" : "from-white to-[#99a1af]"
            )}>
              <p className="leading-[23.51px] text-transparent" dir="auto" style={{ WebkitTextFillColor: 'transparent' }}>
                تحديثات الشتاء 26'
              </p>
            </div>
            {/* English Text - Light/Thin */}
            <div className={cn(
              "bg-clip-text bg-gradient-to-l flex flex-col font-body font-light justify-center relative shrink-0 uppercase transition-colors duration-500",
              isLight ? "from-slate-900 to-slate-600" : "from-white to-[#99a1af]"
            )}>
              <p className="leading-[23.51px] text-[14px] text-transparent" dir="auto" style={{ WebkitTextFillColor: 'transparent' }}>
                Winter Updates
              </p>
            </div>
          </div>
          
          {/* Logo - appears on the right of the text */}
          <div className="h-[48px] overflow-clip relative shrink-0 w-[102px]">
            <div className="absolute contents inset-0">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={102}
                height={48}
                className="block max-w-none size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

