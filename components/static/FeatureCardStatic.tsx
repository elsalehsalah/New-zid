'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';
import { LiquidGlass } from '@/components/ui/liquid-glass';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  stats: string;
  color: string;
  reverse?: boolean;
  index: number;
  id?: string;
}

export default function FeatureCardStatic({ title, subtitle, description, stats, color, reverse, index, id }: Props) {
  const { isLight } = useTheme();

  return (
    <div
      id={id}
      className="opacity-100"
    >
      <div
        className={cn(
          "relative rounded-3xl p-12 md:p-16 overflow-hidden",
          isLight
            ? "border-4 border-[rgba(255,255,255,0.15)]"
            : "bg-white/[0.04] border border-white/8"
        )}
        style={isLight ? {
          background: 'url(/textures/feature-bg.png) lightgray 50% / cover no-repeat, rgba(255, 255, 255, 0.39)',
          borderRadius: '24px'
        } : undefined}
      >
        {isLight && <LiquidGlass className="absolute inset-0" rounded="rounded-3xl" />}

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          {/* Content */}
          <div className={`relative z-10 ${reverse ? 'lg:col-start-2' : ''}`}>
            {/* Label */}
            <div className="flex items-center gap-4 mb-6 opacity-100">
              <div className={cn(
                "w-8 h-px transition-colors duration-500",
                isLight ? "bg-[#777d88]" : "bg-gray-500"
              )} />
              <span className={cn(
                "text-xs font-mono uppercase tracking-widest transition-colors duration-500",
                isLight ? "text-[#777d88]" : "text-gray-500"
              )}>
                الميزة {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Badges Container */}
            <div className="flex items-center gap-2 mb-5 flex-wrap opacity-100">
              {/* Package Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-solid"
                style={{ 
                  background: 'rgba(174,114,255,0.07)', 
                  borderColor: 'rgba(174,114,255,0.14)'
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#ae72ff' }} />
                <span className="text-[11.8px] font-body text-[#ae72ff] text-right leading-[16px]" dir="auto">
                  {stats}
                </span>
              </div>

              {/* Label Badge */}
              {subtitle && (() => {
                const isNewFeature = subtitle.includes('خاصية جديدة') || subtitle.includes('خاصية جديده');
                const isImprovement = subtitle.includes('خاصية تحسن تجربتك');
                
                // Default to purple if neither condition matches
                const badgeColor = isNewFeature 
                  ? '#ff006e' // Pink/Magenta for new features
                  : isImprovement 
                    ? '#00b8a9' // Teal/Cyan for improvements
                    : '#ae72ff'; // Purple default
                
                const badgeBg = isNewFeature
                  ? 'rgba(255,0,110,0.07)'
                  : isImprovement
                    ? 'rgba(0,184,169,0.07)'
                    : 'rgba(174,114,255,0.07)';
                
                const badgeBorder = isNewFeature
                  ? 'rgba(255,0,110,0.14)'
                  : isImprovement
                    ? 'rgba(0,184,169,0.14)'
                    : 'rgba(174,114,255,0.14)';
                
                return (
                  <div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-solid"
                    style={{ 
                      background: badgeBg, 
                      borderColor: badgeBorder
                    }}
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full shrink-0" 
                      style={{ background: badgeColor }} 
                    />
                    <span 
                      className="text-[11.8px] font-body text-right leading-[16px]" 
                      style={{ color: badgeColor }}
                      dir="auto"
                    >
                      {subtitle}
                    </span>
                  </div>
                );
              })()}
            </div>

            {/* Title */}
            <h3 className="font-heading text-4xl md:text-5xl font-black leading-[1.2] mb-3">
              {title}
            </h3>

            {/* Description */}
            <p
              className={cn(
                "text-base leading-relaxed mb-8 transition-colors duration-500 opacity-100",
                isLight ? "text-[#777d88]" : "text-gray-400"
              )}
            >
              {description}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-3 opacity-100">
              <div
                className="w-8 h-px"
                style={{ background: color }}
              />
              <button
                className="font-bold text-sm"
                style={{ color }}
              >
                اعرف المزيد ←
              </button>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className={`relative z-10 ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <div
              className={cn(
                "aspect-video rounded-2xl border flex items-center justify-center transition-colors duration-500 opacity-100",
                isLight ? "border-gray-200/50" : ""
              )}
              style={{ 
                background: isLight 
                  ? `linear-gradient(135deg, ${color}08 0%, transparent 100%)` 
                  : `linear-gradient(135deg, ${color}06 0%, transparent 100%)`, 
                borderColor: isLight ? `${color}20` : `${color}15` 
              }}
            >
              <div className={cn(
                "text-center transition-colors duration-500",
                isLight ? "text-[#777d88]" : "text-gray-700"
              )}>
                <div className="text-sm font-mono">عرض الميزة</div>
                <div className="text-xs opacity-50">(فيديو أو صورة)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

