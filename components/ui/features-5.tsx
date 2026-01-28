'use client';

import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export function Features() {
  const { isLight } = useTheme();

  // Hide light version for now
  if (isLight) {
    return null;
  }

  return (
    <section className={cn(
      "py-20 lg:py-40 transition-colors duration-500",
      "bg-[#09001A]"
    )}>
      <div className="mx-auto max-w-xl md:max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h1 className={cn(
                "text-[44px] font-heading font-black mb-4 tracking-tight transition-colors duration-500 text-right",
                "text-white"
              )}>
                تجربة شراء بسرعة صاروخية
              </h1>
              <p className={cn(
                "text-lg mb-6 font-body transition-colors duration-500 text-right",
                "text-gray-400"
              )}>
                أعدنا بناء كامل تجربة التصفح والشراء لواجهة المتجر
              </p>
            </div>
            <ul className="mt-8 border-y border-white/10 *:flex *:items-start *:gap-3 *:py-4">
              <li className="border-b border-white/10">
                <DraftingCompass className="size-5 text-[#AE72FF] mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <h3 className={cn(
                    "font-heading font-black text-base transition-colors duration-500 text-right",
                    "text-white"
                  )}>
                    استقرار
                  </h3>
                  <p className={cn(
                    "font-body text-sm transition-colors duration-500 text-right",
                    "text-gray-400"
                  )}>
                    أداء ثابت حتى وقت الضغط
                  </p>
                </div>
              </li>
              <li className="border-b border-white/10">
                <Zap className="size-5 text-[#AE72FF] mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <h3 className={cn(
                    "font-heading font-black text-base transition-colors duration-500 text-right",
                    "text-white"
                  )}>
                    سرعة
                  </h3>
                  <p className={cn(
                    "font-body text-sm transition-colors duration-500 text-right",
                    "text-gray-400"
                  )}>
                    عملائك بينسون معنى الانتظار
                  </p>
                </div>
              </li>
              <li className="border-b border-white/10">
                <Activity className="size-5 text-[#AE72FF] mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <h3 className={cn(
                    "font-heading font-black text-base transition-colors duration-500 text-right",
                    "text-white"
                  )}>
                    تحمّل
                  </h3>
                  <p className={cn(
                    "font-body text-sm transition-colors duration-500 text-right",
                    "text-gray-400"
                  )}>
                    حرية تخصيص ماتطيّح متجرك
                  </p>
                </div>
              </li>
              <li>
                <Mail className="size-5 text-[#AE72FF] mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <h3 className={cn(
                    "font-heading font-black text-base transition-colors duration-500 text-right",
                    "text-white"
                  )}>
                    سلاسة Checkout
                  </h3>
                  <p className={cn(
                    "font-body text-sm transition-colors duration-500 text-right",
                    "text-gray-400"
                  )}>
                    أخف، أقصر، وأسهل للتطوير
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={cn(
            "border-border/50 relative rounded-3xl border border-white/10 p-3 lg:col-span-3 transition-colors duration-500"
          )}>
            <div className="bg-gradient-to-b aspect-[76/59] relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <div className="relative w-full h-full rounded-[15px] overflow-hidden bg-neutral-900">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="Features illustration"
                  fill
                  className="object-cover rounded-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
