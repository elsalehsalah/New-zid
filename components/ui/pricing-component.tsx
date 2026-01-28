'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const Pricing = () => {
  const { isLight } = useTheme();

  // Hide light version for now
  if (isLight) {
    return null;
  }

  const plans = [
    {
      name: "باقة البداية",
      price: "مجانية",
      description: "مجانية وتكفيك للبداية",
      features: [
        "إنشاء متجرك بسهولة",
        "أدوات أساسية لإدارة المنتجات",
        "دعم فني قياسي",
        "دخول إلى مجتمع التجار"
      ],
      cta: "ابدأ الآن",
      highlighted: false
    },
    {
      name: "باقة الانطلاقة",
      price: "",
      description: "عدّيت البدايات وجاهز للأقوى",
      features: [
        "جميع مزايا باقة البداية",
        "أدوات تسويق متقدمة",
        "دعم فني أولوية",
        "تقارير أداء وتحليلات",
        "تخصيص واجهة المتجر",
        "تحسين تجربة الشراء"
      ],
      cta: "اشترك الآن",
      highlighted: true
    },
    {
      name: "باقة النمو",
      price: "",
      description: "لك اسم بالسوق وتجارتك توسعت",
      features: [
        "جميع مزايا باقة الانطلاقة",
        "أدوات ذكاء اصطناعي للمحتوى",
        "تنبيهات يومية للأداء",
        "توصيات نمو دقيقة",
        "إدارة الإعلانات من لوحة التحكم",
        "تكامل مع قنوات البيع"
      ],
      cta: "اكتشف الباقة",
      highlighted: false
    },
    {
      name: "باقة الاحترافية",
      price: "مخصص",
      description: "للهوامير وكبار السوق",
      features: [
        "جميع مزايا باقة النمو",
        "مدير حساب مخصص",
        "دعم فني احترافي 24/7",
        "تكاملات مخصصة",
        "تقارير متقدمة",
        "حلول خاصة للأعمال الكبيرة"
      ],
      cta: "تواصل معنا",
      highlighted: false
    }
  ];

  return (
    <div className={cn(
      "w-full py-20 lg:py-40 transition-colors duration-500",
      "bg-[#09001A]"
    )}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-[54px] font-heading font-black mb-4 tracking-tight text-center transition-colors duration-500",
            "text-white"
          )}>
            غيرنا الأسعار وزودنا الخصائص
          </h1>
          <p className={cn(
            "text-lg mb-6 font-body text-center transition-colors duration-500",
            "text-gray-400"
          )}>
            باقات جديدة بخيارات مرنة، من المجانية إلى الاحترافية
            وكاش باك على اشتراكك السنوي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const cardRef = useRef<HTMLDivElement>(null);

            useEffect(() => {
              const card = cardRef.current;
              if (!card) return;

              const handleMouseMove = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
              };

              card.addEventListener('mousemove', handleMouseMove);

              return () => {
                card.removeEventListener('mousemove', handleMouseMove);
              };
            }, []);

            return (
              <div
                key={plan.name}
                ref={cardRef}
                className={cn(
                  "group relative rounded-2xl border p-6 overflow-hidden transition-all duration-300 cursor-pointer",
                  plan.highlighted
                    ? 'border-white/10 bg-white/[0.02] scale-[1.02] shadow-xl hover:border-[rgba(174,114,255,0.3)] hover:bg-white/[0.05] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(174,114,255,0.1)]'
                    : 'border-white/[0.08] bg-white/[0.03] hover:border-[rgba(174,114,255,0.3)] hover:bg-white/[0.05] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(174,114,255,0.1)]'
                )}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(174, 114, 255, 0.15), transparent 40%)'
                  }}
                />

                <div>
                  <h3 className={cn(
                    "text-3xl md:text-4xl font-heading font-black mb-4 transition-colors duration-500 text-right",
                    "text-white"
                  )}>{plan.name}</h3>
                  <p className={cn(
                    "text-base font-body transition-colors duration-500 text-right",
                    "text-gray-400"
                  )}>{plan.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
