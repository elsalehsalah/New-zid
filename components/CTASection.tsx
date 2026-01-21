'use client';

import { motion } from 'framer-motion';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';
import { Zap, TrendingUp, ShoppingBag, Globe, Sparkles, Camera } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { LiquidGlass } from '@/components/ui/liquid-glass';

export default function CTASection() {
  const { isLight } = useTheme();
  const ctaBlocks = [
    {
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
      icon: Zap,
      title: "ابدأ في دقائق",
      description: "سجّل حسابك وابدأ البيع خلال دقائق. لا حاجة لخبرة تقنية.",
    },
    {
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
      icon: TrendingUp,
      title: "نمو مضمون",
      description: "انضم لأكثر من 50,000 تاجر ينمون أعمالهم معنا يومياً.",
    },
    {
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
      icon: ShoppingBag,
      title: "دعم على مدار الساعة",
      description: "فريق دعم متاح 24/7 لمساعدتك في كل خطوة من رحلتك.",
    },
    {
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
      icon: Globe,
      title: "بيع عالمي",
      description: "وسّع تجارتك إلى أكثر من 175 دولة بعملات متعددة.",
    },
    {
      area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
      icon: Sparkles,
      title: "جاهز لتحويل تجارتك؟",
      description: "ابدأ تجربتك المجانية اليوم وانضم لملايين التجار الناجحين.",
      isMain: true,
    },
  ];

  return (
    <section id="cta" className={cn(
      "py-32 px-12 relative overflow-hidden transition-colors duration-500",
      isLight ? "bg-[#f7f8fb]" : "bg-[#09001A]"
    )}>
      <div className={cn(
        "absolute inset-0 blur-[100px] transition-opacity duration-500",
        isLight
          ? "bg-[radial-gradient(circle_at_center,rgba(174,114,255,0.05)_0%,transparent_70%)]"
          : "bg-[radial-gradient(circle_at_center,rgba(174,114,255,0.1)_0%,transparent_70%)]"
      )} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {ctaBlocks.map((block, index) => (
            <CTABlock key={index} {...block} />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface CTABlockProps {
  area: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  isMain?: boolean;
}

const CTABlock = ({ area, icon: Icon, title, description, isMain }: CTABlockProps) => {
  const { isLight } = useTheme();
  
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className={cn(
        "relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3 transition-colors duration-500",
        isLight ? "border-[0.75px] border-gray-200/50" : "border-[0.75px] border-white/13"
      )}>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
          variant="default"
        />
        <div className={cn(
          "relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 backdrop-blur-xl md:p-6 transition-colors duration-500",
          isLight
            ? "border-[0.75px] border-gray-200/50 bg-white/80"
            : "border-[0.75px] border-white/13 bg-white/[0.05]"
        )}>
          {isLight && <LiquidGlass className="absolute inset-0" rounded="rounded-xl" />}
          <div className="relative flex flex-1 flex-col justify-between gap-3 z-10">
            <div className={cn(
              "w-fit rounded-lg p-2 transition-colors duration-500",
              isLight
                ? "border-[0.75px] border-gray-200/50 bg-white/60"
                : "border-[0.75px] border-white/13 bg-white/[0.02]"
            )}>
              <Icon className={cn(
                "h-4 w-4 transition-colors duration-500",
                isLight ? "text-slate-700" : "text-white"
              )} />
            </div>
            <div className="space-y-3">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "pt-0.5 text-xl leading-[1.375rem] font-heading tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance transition-colors duration-500",
                  isMain
                    ? isLight
                      ? "font-black bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent"
                      : "font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent"
                    : isLight
                      ? "font-bold text-slate-900"
                      : "font-bold text-white"
                )}
              >
                {title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className={cn(
                  "font-body text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] transition-colors duration-500",
                  isLight ? "text-slate-600" : "text-gray-400"
                )}
              >
                {description}
              </motion.p>
              {isMain && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="mt-4 px-8 py-3 rounded-full bg-gradient-to-l from-[#AE72FF] to-[#4C1289] font-bold text-sm shadow-[0_16px_64px_rgba(174,114,255,0.4)] font-body"
                >
                  ابدأ تجربتك المجانية
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

