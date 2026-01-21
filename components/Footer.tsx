'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export default function Footer() {
  const { isLight } = useTheme();
  
  return (
    <footer className={cn(
      "py-12 px-12 border-t transition-colors duration-500",
      isLight ? "border-gray-200/50 bg-[#f7f8fb]" : "border-white/10 bg-[#09001A]"
    )}>
      <div className="max-w-content mx-auto text-center">
        <p className={cn(
          "text-sm transition-colors duration-500",
          isLight ? "text-slate-500" : "text-gray-500"
        )}>
          © 2026 زد. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}

