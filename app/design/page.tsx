'use client';

import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { LiquidGlass } from '@/components/ui/liquid-glass';
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Activity, DraftingCompass, Mail, Zap, TrendingUp, ShoppingBag, Globe, Sparkles } from 'lucide-react';
import FeaturesGridStatic from '@/components/static/FeaturesGridStatic';

export default function DesignPage() {
  const { isLight } = useTheme();

  // Split title for display
  const titleLines = 'زد تغيرت\nبسّطنا، سرّعنا، وزوّدنا الإمكانيات'.split('\n');
  const firstLine = titleLines[0] || '';
  const secondLineFull = titleLines[1] || '';
  let secondLine = '';
  let thirdLine = '';
  if (secondLineFull && secondLineFull.includes('وزوّدنا الإمكانيات')) {
    const splitIndex = secondLineFull.indexOf('وزوّدنا الإمكانيات');
    secondLine = secondLineFull.substring(0, splitIndex).trim();
    thirdLine = 'وزوّدنا الإمكانيات';
  } else {
    secondLine = secondLineFull;
  }

  // Static plans data
  const plans = [
    {
      name: "باقة البداية",
      description: "مجانية وتكفيك للبداية",
      features: [
        "إنشاء متجرك بسهولة",
        "أدوات أساسية لإدارة المنتجات",
        "دعم فني قياسي",
        "دخول إلى مجتمع التجار"
      ],
      highlighted: false
    },
    {
      name: "باقة الانطلاقة",
      description: "عدّيت البدايات وجاهز للأقوى",
      features: [
        "جميع مزايا باقة البداية",
        "أدوات تسويق متقدمة",
        "دعم فني أولوية",
        "تقارير أداء وتحليلات",
        "تخصيص واجهة المتجر",
        "تحسين تجربة الشراء"
      ],
      highlighted: true
    },
    {
      name: "باقة النمو",
      description: "لك اسم بالسوق وتجارتك توسعت",
      features: [
        "جميع مزايا باقة الانطلاقة",
        "أدوات ذكاء اصطناعي للمحتوى",
        "تنبيهات يومية للأداء",
        "توصيات نمو دقيقة",
        "إدارة الإعلانات من لوحة التحكم",
        "تكامل مع قنوات البيع"
      ],
      highlighted: false
    },
    {
      name: "باقة الاحترافية",
      description: "للهوامير وكبار السوق",
      features: [
        "جميع مزايا باقة النمو",
        "مدير حساب مخصص",
        "دعم فني احترافي 24/7",
        "تكاملات مخصصة",
        "تقارير متقدمة",
        "حلول خاصة للأعمال الكبيرة"
      ],
      highlighted: false
    }
  ];

  if (isLight) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#09001A]">
      {/* Navigation - Static */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] border-b border-solid bg-[#09001a] border-[rgba(255,255,255,0.1)]">
        <LiquidGlass className="absolute inset-0" rounded="" disabled={true} />
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
        </div>
      </nav>

      {/* Hero - Static */}
      <section id="hero" className="relative min-h-screen overflow-hidden bg-[#09001A]">
        {/* Grid Background */}
        <div className="fixed inset-0 bg-[size:80px_80px] pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]" />

        {/* Static Gradient Orbs */}
        <div className="fixed top-[10%] right-[5%] w-[800px] h-[800px] blur-[100px] pointer-events-none z-0 bg-[radial-gradient(circle,rgba(174,114,255,0.12)_0%,transparent_70%)]" />
        <div className="fixed bottom-[10%] left-[5%] w-[700px] h-[700px] blur-[100px] pointer-events-none z-0 bg-[radial-gradient(circle,rgba(131,56,236,0.12)_0%,transparent_70%)]" />

        {/* Hero Content - Static */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="container mx-auto flex flex-col items-center justify-center w-full h-[100dvh] relative">
            {/* Media - Static */}
            <div
              className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl"
              style={{
                width: '800px',
                height: '600px',
                maxWidth: '95vw',
                maxHeight: '85vh',
                boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div className="relative w-full h-full pointer-events-none">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/R9YXHDyz3s4?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=R9YXHDyz3s4"
                  className="w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-black/30 rounded-xl" />
              </div>
            </div>

            {/* Title - Static */}
            <div className="flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col">
              {firstLine && (
                <h2 className="font-heading text-4xl md:text-5xl lg:text-[54px] font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                  {firstLine}
                </h2>
              )}
              {secondLine && (
                <h2 className="font-heading text-4xl md:text-5xl lg:text-[54px] font-black text-center bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                  {secondLine}
                </h2>
              )}
              {thirdLine && (
                <h2 className="font-heading text-4xl md:text-5xl lg:text-[54px] font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                  {thirdLine}
                </h2>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section - Static */}
      <div className="w-full py-20 lg:py-40 bg-[#09001A]">
        <div className="container mx-auto">
          <div className="relative rounded-3xl p-12 md:p-16 overflow-hidden bg-white/[0.04] border border-white/8">
            <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
              <div className="flex gap-10 flex-col">
                <div className="flex gap-4 flex-col">
                  <div>
                    <Badge variant="outline">المنصة</Badge>
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-4xl md:text-5xl lg:text-[54px] font-heading font-black mb-4 tracking-tight max-w-xl text-right text-white">
                      التغيير اللي صار… باختصار
                    </h2>
                    <p className="text-lg leading-relaxed tracking-tight text-gray-400 max-w-xl text-right">
                      لوحة تحكم جديدة بالكامل تساعدك تدير متجرك بسهولة ووضوح أكثر.
                    </p>
                  </div>
                </div>
                <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
                  <div className="flex flex-row gap-6 items-start">
                    <Check className="w-4 h-4 mt-2 text-[#AE72FF]" />
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-heading font-black">لوحة تحكم أسهل وأوضح</p>
                      <p className="text-gray-400 text-sm font-body">تجربة استخدام محسّنة بتصميم أبسط وتنقّل أسرع بين جميع الأدوات.</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start">
                    <Check className="w-4 h-4 mt-2 text-[#AE72FF]" />
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-heading font-black">تصفّح أسرع ×3 وتحويل شراء أعلى</p>
                      <p className="text-gray-400 text-sm font-body">أداء أسرع ينعكس مباشرة على تجربة عملائك وزيادة معدّل الشراء عبر متاجر تجارنا.</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start">
                    <Check className="w-4 h-4 mt-2 text-[#AE72FF]" />
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-heading font-black">باقات زد محدثة بمزايا أكثر</p>
                      <p className="text-gray-400 text-sm font-body">خطط تسعير جديدة بأسعار تناسب كل مرحلة من نمو أعمالك.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-800 rounded-md aspect-square"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Cybernetic Bento Grid - Static */}
      <div className="w-full py-20 lg:py-40 bg-[#09001A]">
        <div className="w-full max-w-6xl mx-auto px-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-heading font-black mb-4 tracking-tight text-center text-white">
            لوحة تحكم جديدة 3× أسرع
          </h1>
          <p className="text-lg mb-6 font-body text-center text-gray-400">
            تشتغل لك، ما تشغلك
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 row-span-2 flex flex-col justify-between p-6 rounded-xl bg-white/[0.03] border border-white/10">
              <div>
                <h2 className="text-2xl font-heading font-black text-white text-right mb-2">أسرع… لأن الوقت يفرق</h2>
                <p className="mt-2 font-body text-gray-400 text-right">أعدنا بناء تقنيات زد من الأساس باستخدام أحدث لغات البرمجة لتجربة أسهل وتنقّل أسرع واستجابة أعلى على جميع الأجهزة.</p>
              </div>
              <div className="mt-4 h-48 bg-neutral-800 rounded-lg flex items-center justify-center text-gray-500 font-body">Chart Placeholder</div>
            </div>
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
              <h2 className="text-xl font-heading font-black text-white text-right mb-2">مكان واحد بمعنى الكلمة</h2>
              <p className="mt-2 font-body text-gray-400 text-sm text-right">من إدارة المتجر وتتبع الإعلانات إلى استلام فواتير قنوات البيع، كل شيء تديره من لوحة تحكم واحدة بواجهة أوضح وتنقّل أسرع وشغل أقل ونمو أكثر.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
              <h2 className="text-xl font-heading font-black text-white text-right mb-2">ذكاء يخدمك، ما يشتتك</h2>
              <p className="mt-2 font-body text-gray-400 text-sm text-right">من كتابة المحتوى وتحسين ظهوره في البحث إلى فهم أدائك اليومي واتخاذ قرارات أسرع عبر مستشار ذكي وتنبيهات يومية وتوصيات أدق.</p>
            </div>
            <div className="col-span-2 p-6 rounded-xl bg-white/[0.03] border border-white/10">
              <h2 className="text-xl font-heading font-black text-white text-right mb-2">مكافآت على نموك</h2>
              <p className="mt-2 font-body text-gray-400 text-sm text-right">تقدّمك ما يضيع — نحسبه، نتابعه، ونكافئك عليه في صفحة واحدة تشمل سجل الإنجازات ومكافآت الأهداف ومقارنة النمو.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Static */}
      <section className="py-20 lg:py-40 bg-[#09001A]">
        <div className="mx-auto max-w-xl md:max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
            <div className="lg:col-span-2">
              <div className="md:pr-6 lg:pr-0">
                <h1 className="text-[44px] font-heading font-black mb-4 tracking-tight text-right text-white">
                  تجربة شراء بسرعة صاروخية
                </h1>
                <p className="text-lg mb-6 font-body text-right text-gray-400">
                  أعدنا بناء كامل تجربة التصفح والشراء لواجهة المتجر
                </p>
              </div>
              <ul className="mt-8 border-y">
                <li className="flex items-center gap-3 py-3 border-b">
                  <Activity className="size-5 text-[#AE72FF] mt-1 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading font-black text-base text-right text-white">استقرار</h3>
                    <p className="font-body text-sm text-right text-gray-400">أداء ثابت حتى وقت الضغط</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 py-3 border-b">
                  <Zap className="size-5 text-[#AE72FF] mt-1 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading font-black text-base text-right text-white">سرعة</h3>
                    <p className="font-body text-sm text-right text-gray-400">عملائك بينسون معنى الانتظار</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 py-3 border-b">
                  <DraftingCompass className="size-5 text-[#AE72FF] mt-1 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading font-black text-base text-right text-white">تحمّل</h3>
                    <p className="font-body text-sm text-right text-gray-400">حرية تخصيص ماتطيّح متجرك</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 py-3">
                  <Mail className="size-5 text-[#AE72FF] mt-1 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading font-black text-base text-right text-white">سلاسة Checkout</h3>
                    <p className="font-body text-sm text-right text-gray-400">أخف، أقصر، وأسهل للتطوير</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
              <div className="bg-gradient-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                <img src="https://tailark.com/_next/image?url=%2Fpayments.png&w=3840&q=75" className="rounded-[15px]" alt="payments illustration dark" width={1207} height={929} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Static */}
      <div className="w-full py-20 lg:py-40 bg-[#09001A]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-heading font-black mb-4 tracking-tight text-center text-white">
              غيرنا الأسعار وزودنا الخصائص
            </h1>
            <p className="text-lg mb-6 font-body text-center text-gray-400">
              باقات جديدة بخيارات مرنة، من المجانية إلى الاحترافية
              وكاش باك على اشتراكك السنوي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-2xl border p-6 overflow-hidden",
                  plan.highlighted
                    ? 'border-white/10 bg-white/[0.02] scale-[1.02] shadow-xl'
                    : 'border-white/[0.08] bg-white/[0.03]'
                )}
              >
                <div>
                  <h3 className="text-3xl md:text-4xl font-heading font-black mb-4 text-right text-white">{plan.name}</h3>
                  <p className="text-base font-body text-right text-gray-400">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid - Static */}
      <FeaturesGridStatic />

      {/* CTA Section - Static */}
      <section id="cta" className="py-32 px-12 relative overflow-hidden bg-[#09001A]">
        <div className="absolute inset-0 blur-[100px] bg-[radial-gradient(circle_at_center,rgba(174,114,255,0.1)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <li className="min-h-[14rem] list-none md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]">
              <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3 border-[0.75px] border-white/13">
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 backdrop-blur-xl md:p-6 border-[0.75px] border-white/13 bg-white/[0.05]">
                  <div className="relative flex flex-1 flex-col justify-between gap-3 z-10">
                    <div className="w-fit rounded-lg p-2 border-[0.75px] border-white/13 bg-white/[0.02]">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="pt-0.5 text-xl leading-[1.375rem] font-heading tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance font-bold text-white">
                        ابدأ في دقائق
                      </h3>
                      <p className="font-body text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-400">
                        سجّل حسابك وابدأ البيع خلال دقائق. لا حاجة لخبرة تقنية.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="min-h-[14rem] list-none md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]">
              <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3 border-[0.75px] border-white/13">
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 backdrop-blur-xl md:p-6 border-[0.75px] border-white/13 bg-white/[0.05]">
                  <div className="relative flex flex-1 flex-col justify-between gap-3 z-10">
                    <div className="w-fit rounded-lg p-2 border-[0.75px] border-white/13 bg-white/[0.02]">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="pt-0.5 text-xl leading-[1.375rem] font-heading tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance font-bold text-white">
                        نمو مضمون
                      </h3>
                      <p className="font-body text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-400">
                        انضم لأكثر من 50,000 تاجر ينمون أعمالهم معنا يومياً.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="min-h-[14rem] list-none md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]">
              <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3 border-[0.75px] border-white/13">
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 backdrop-blur-xl md:p-6 border-[0.75px] border-white/13 bg-white/[0.05]">
                  <div className="relative flex flex-1 flex-col justify-between gap-3 z-10">
                    <div className="w-fit rounded-lg p-2 border-[0.75px] border-white/13 bg-white/[0.02]">
                      <ShoppingBag className="h-4 w-4 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="pt-0.5 text-xl leading-[1.375rem] font-heading tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance font-bold text-white">
                        دعم على مدار الساعة
                      </h3>
                      <p className="font-body text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-400">
                        فريق دعم متاح 24/7 لمساعدتك في كل خطوة من رحلتك.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="min-h-[14rem] list-none md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]">
              <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3 border-[0.75px] border-white/13">
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 backdrop-blur-xl md:p-6 border-[0.75px] border-white/13 bg-white/[0.05]">
                  <div className="relative flex flex-1 flex-col justify-between gap-3 z-10">
                    <div className="w-fit rounded-lg p-2 border-[0.75px] border-white/13 bg-white/[0.02]">
                      <Globe className="h-4 w-4 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="pt-0.5 text-xl leading-[1.375rem] font-heading tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance font-bold text-white">
                        بيع عالمي
                      </h3>
                      <p className="font-body text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-400">
                        وسّع تجارتك إلى أكثر من 175 دولة بعملات متعددة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="min-h-[14rem] list-none md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]">
              <div className="relative h-full rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3 border-[0.75px] border-white/13">
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 backdrop-blur-xl md:p-6 border-[0.75px] border-white/13 bg-white/[0.05]">
                  <div className="relative flex flex-1 flex-col justify-between gap-3 z-10">
                    <div className="w-fit rounded-lg p-2 border-[0.75px] border-white/13 bg-white/[0.02]">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="pt-0.5 text-xl leading-[1.375rem] font-heading tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance font-black bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                        جاهز لتحويل تجارتك؟
                      </h3>
                      <p className="font-body text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-400">
                        ابدأ تجربتك المجانية اليوم وانضم لملايين التجار الناجحين.
                      </p>
                      <button className="mt-4 px-8 py-3 rounded-full bg-gradient-to-l from-[#AE72FF] to-[#4C1289] font-bold text-sm shadow-[0_16px_64px_rgba(174,114,255,0.4)] font-body text-white">
                        ابدأ تجربتك المجانية
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer - Static */}
      <footer className="py-12 px-12 border-t border-white/10 bg-[#09001A]">
        <div className="max-w-content mx-auto text-center">
          <p className="text-sm text-gray-500">
            © 2026 زد. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </main>
  );
}
