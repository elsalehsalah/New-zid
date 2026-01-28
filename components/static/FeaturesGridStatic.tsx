'use client';

import { useMemo } from 'react';
import FeatureCardStatic from './FeatureCardStatic';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { 
  Package, 
  Warehouse, 
  CreditCard, 
  ShoppingCart, 
  Megaphone, 
  Share2,
  BarChart3,
  Settings,
  Wallet,
  Truck,
  Briefcase
} from 'lucide-react';
import featuresData from '@/data/features.json';

interface Feature {
  section: string;
  number: string;
  title: string;
  description: string;
  cta: string;
  link: string;
  label: string;
  package: string;
}

const sectionIcons: Record<string, any> = {
  'المنتجات': Package,
  'المخزون': Warehouse,
  'الكاشير': CreditCard,
  'الطلبات': ShoppingCart,
  'التسويق': Megaphone,
  'قنوات البيع - مزيد': Share2,
  'التحليلات': BarChart3,
  'الجمعيات': Briefcase,
  'المدفوعات والتمويل': Wallet,
  'اللوجستيات والشحن': Truck,
  'لوحة التحكم': Settings,
};

const sectionColors: Record<string, string> = {
  'المنتجات': '#AE72FF',
  'المخزون': '#AE72FF',
  'الكاشير': '#AE72FF',
  'الطلبات': '#AE72FF',
  'التسويق': '#AE72FF',
  'قنوات البيع - مزيد': '#AE72FF',
  'التحليلات': '#AE72FF',
  'الجمعيات': '#AE72FF',
  'المدفوعات والتمويل': '#AE72FF',
  'اللوجستيات والشحن': '#AE72FF',
  'لوحة التحكم': '#AE72FF',
};

const sectionDescriptions: Record<string, string> = {
  'المنتجات': 'إدارة أذكى للمنتجات مع خيارات أكثر مرونة وتحكم أفضل',
  'المخزون': 'تنظيم وإدارة المخازن بدقة وسهولة',
  'الكاشير': 'نقاط بيع مرنة ومتطورة لكل فروعك',
  'الطلبات': 'متابعة وإدارة الطلبات بكفاءة عالية',
  'التسويق': 'أدوات تسويقية قوية لزيادة مبيعاتك',
  'قنوات البيع - مزيد': 'منصة مزيد بميزات محسّنة ودعم أفضل',
  'التحليلات': 'رؤى دقيقة لاتخاذ قرارات أفضل',
  'الجمعيات': 'حلول مخصصة للجمعيات الخيرية',
  'المدفوعات والتمويل': 'طرق دفع متنوعة وحلول تمويل مرنة',
  'اللوجستيات والشحن': 'شحن أسرع وأكثر موثوقية',
  'لوحة التحكم': 'واجهة محسّنة لإدارة متجرك',
};

export default function FeaturesGridStatic() {
  const { isLight } = useTheme();

  const featuresBySection = useMemo(() => {
    const grouped: Record<string, Feature[]> = {};
    featuresData.features.forEach((feature: Feature) => {
      if (!grouped[feature.section]) {
        grouped[feature.section] = [];
      }
      grouped[feature.section].push(feature);
    });
    return grouped;
  }, []);

  const sections = Object.keys(featuresBySection);

  return (
    <section id="features" className={cn(
      "py-32 px-12 transition-colors duration-500",
      isLight ? "bg-[#eeeeee]" : "bg-[#09001A]"
    )}>
      <div className="max-w-content mx-auto">
        <div className="text-center mb-20">
          <h2 className={cn(
            "font-heading text-6xl md:text-7xl font-black mb-6 bg-clip-text text-transparent transition-colors duration-500",
            isLight
              ? "text-[#3c1c54]"
              : "bg-gradient-to-br from-white to-gray-400"
          )}
          style={isLight ? {
            backgroundImage: "linear-gradient(10.2906deg, rgb(123, 175, 253) 17.573%, rgb(175, 114, 254) 52.447%, rgb(95, 43, 134) 93.133%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          } : undefined}>
            تحديثات ماوقفت
          </h2>
          <p className={cn(
            "text-lg max-w-2xl mx-auto transition-colors duration-500",
            isLight ? "text-[#1f0433]" : "text-gray-400"
          )}>
            +90 خاصية جديدة على منتجاتنا من المخزون إلى التمويل
          </p>
        </div>

        <div className="space-y-32">
          {sections.map((section, sectionIndex) => {
            const Icon = sectionIcons[section] || Package;
            const color = sectionColors[section] || '#AE72FF';
            const features = featuresBySection[section];

            return (
              <div key={section} id={`${section.replace(/\s/g, '-').toLowerCase()}-features`} className="space-y-12 scroll-mt-32">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center border shrink-0"
                    style={{ 
                      background: `${color}08`, 
                      borderColor: `${color}20` 
                    }}
                  >
                    <Icon size={32} style={{ color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className={cn(
                        "font-heading text-4xl md:text-5xl font-black transition-colors duration-500",
                        isLight ? "text-[#3c1c54]" : "text-white"
                      )}>
                        {section}
                      </h3>
                      <span className={cn(
                        "text-sm font-mono px-3 py-1 rounded-full transition-colors duration-500",
                        isLight ? "bg-slate-100 text-slate-600" : "bg-white/5 text-gray-500"
                      )}>
                        {features.length} {features.length === 1 ? 'ميزة' : 'ميزات'}
                      </span>
                    </div>
                    <p className={cn(
                      "text-lg font-body transition-colors duration-500",
                      isLight ? "text-[#777d88]" : "text-gray-400"
                    )}>
                      {sectionDescriptions[section] || ''}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {features.map((feature, index) => (
                    <FeatureCardStatic 
                      key={`${section}-${index}`}
                      title={feature.title}
                      subtitle={feature.label}
                      description={feature.description}
                      stats={feature.package}
                      color={color}
                      reverse={index % 2 === 1}
                      index={index}
                      id={`feature-${section}-${index}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

