'use client';

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Feature() {
  const { isLight } = useTheme();

  // Hide light version for now
  if (isLight) {
    return null;
  }

  return (
    <div className={cn(
      "w-full py-20 lg:py-40 transition-colors duration-500",
      "bg-[#09001A]"
    )}>
      <div className="container mx-auto">
        <div
          className={cn(
            "group relative rounded-3xl p-12 md:p-16 overflow-hidden transition-all duration-500",
            "bg-white/[0.04] border border-white/8 hover:bg-white/[0.05] hover:border-white/13"
          )}
        >
          
          {/* Glow on Hover */}
          <motion.div
            className="absolute -top-1/2 -left-1/3 w-96 h-96 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[100px] pointer-events-none"
            style={{ background: `radial-gradient(circle, #AE72FF15 0%, transparent 70%)` }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">المنصة</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h1 className={cn(
                  "text-4xl md:text-5xl lg:text-[54px] font-heading font-black mb-4 tracking-tight max-w-xl text-right transition-colors duration-500",
                  "text-white"
                )}>
                  التغيير اللي صار… باختصار
                </h1>
                <p className={cn(
                  "text-lg mb-6 max-w-xl text-right font-body transition-colors duration-500",
                  "text-gray-400"
                )}>
                  لوحة تحكم جديدة بالكامل تساعدك تدير متجرك بسهولة ووضوح أكثر.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              <div className="flex flex-row gap-6 items-start">
                <Check className={cn(
                  "w-4 h-4 mt-2 transition-colors duration-500",
                  "text-[#AE72FF]"
                )} />
                <div className="flex flex-col gap-1">
                  <p className={cn(
                    "text-right font-heading transition-colors duration-500",
                    "text-white"
                  )}>لوحة تحكم أسهل وأوضح</p>
                  <p className={cn(
                    "text-sm text-right font-body transition-colors duration-500",
                    "text-gray-400"
                  )}>
                    تجربة استخدام محسّنة بتصميم أبسط وتنقّل أسرع بين جميع الأدوات.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className={cn(
                  "w-4 h-4 mt-2 transition-colors duration-500",
                  "text-[#AE72FF]"
                )} />
                <div className="flex flex-col gap-1">
                  <p className={cn(
                    "text-right font-heading transition-colors duration-500",
                    "text-white"
                  )}>تصفّح أسرع ×3 وتحويل شراء أعلى</p>
                  <p className={cn(
                    "text-sm text-right font-body transition-colors duration-500",
                    "text-gray-400"
                  )}>
                    أداء أسرع ينعكس مباشرة على تجربة عملائك وزيادة معدّل الشراء عبر متاجر تجارنا.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className={cn(
                  "w-4 h-4 mt-2 transition-colors duration-500",
                  "text-[#AE72FF]"
                )} />
                <div className="flex flex-col gap-1">
                  <p className={cn(
                    "text-right font-heading transition-colors duration-500",
                    "text-white"
                  )}>باقات زد محدثة بمزايا أكثر</p>
                  <p className={cn(
                    "text-sm text-right font-body transition-colors duration-500",
                    "text-gray-400"
                  )}>
                    خطط تسعير جديدة بأسعار تناسب كل مرحلة من نمو أعمالك.
                  </p>
                </div>
              </div>
            </div>
          </div>
            <div className={cn(
              "aspect-video rounded-2xl border flex items-center justify-center relative overflow-hidden transition-colors duration-500"
            )}
            style={{ 
              background: `linear-gradient(135deg, #AE72FF06 0%, transparent 100%)`, 
              borderColor: `#AE72FF15` 
            }}
            >
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="لوحة تحكم زد"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
