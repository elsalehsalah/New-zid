'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

interface BentoItemProps {
  className?: string;
  children: ReactNode;
}

// Reusable BentoItem component
const BentoItem = ({ className, children }: BentoItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
    };

    item.addEventListener('mousemove', handleMouseMove);

    return () => {
      item.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={itemRef} className={cn('bento-item', className)}>
      {children}
    </div>
  );
};

// Main Component
export const CyberneticBentoGrid = () => {
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
      <div className="w-full max-w-6xl mx-auto px-6 z-10">
        <h1 className={cn(
          "text-4xl md:text-5xl lg:text-[54px] font-heading font-black mb-4 tracking-tight text-center transition-colors duration-500",
          "text-white"
        )}>
          لوحة تحكم جديدة 3× أسرع
        </h1>
        <p className={cn(
          "text-lg mb-6 font-body text-center transition-colors duration-500",
          "text-gray-400"
        )}>
          تشتغل لك، ما تشغلك
        </p>
        <div className="bento-grid">
          <BentoItem className="col-span-2 row-span-2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-heading font-black text-white text-right">أسرع… لأن الوقت يفرق</h2>
              <p className="mt-2 font-body text-gray-400 text-right">أعدنا بناء تقنيات زد من الأساس باستخدام أحدث لغات البرمجة لتجربة أسهل وتنقّل أسرع واستجابة أعلى على جميع الأجهزة.</p>
            </div>
            <div className="mt-4 h-48 bg-neutral-800 rounded-lg flex items-center justify-center text-gray-500 font-body">
              Chart Placeholder
            </div>
          </BentoItem>
          <BentoItem>
            <h2 className="text-xl font-heading font-black text-white text-right">مكان واحد بمعنى الكلمة</h2>
            <p className="mt-2 font-body text-gray-400 text-sm text-right">من إدارة المتجر وتتبع الإعلانات إلى استلام فواتير قنوات البيع، كل شيء تديره من لوحة تحكم واحدة بواجهة أوضح وتنقّل أسرع وشغل أقل ونمو أكثر.</p>
          </BentoItem>
          <BentoItem>
            <h2 className="text-xl font-heading font-black text-white text-right">ذكاء يخدمك، ما يشتتك</h2>
            <p className="mt-2 font-body text-gray-400 text-sm text-right">من كتابة المحتوى وتحسين ظهوره في البحث إلى فهم أدائك اليومي واتخاذ قرارات أسرع عبر مستشار ذكي وتنبيهات يومية وتوصيات أدق.</p>
          </BentoItem>
          <BentoItem className="col-span-2">
            <h2 className="text-xl font-heading font-black text-white text-right">مكافآت على نموك</h2>
            <p className="mt-2 font-body text-gray-400 text-sm text-right">تقدّمك ما يضيع — نحسبه، نتابعه، ونكافئك عليه في صفحة واحدة تشمل سجل الإنجازات ومكافآت الأهداف ومقارنة النمو.</p>
          </BentoItem>
        </div>
      </div>
    </div>
  );
};
