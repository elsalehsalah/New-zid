'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ANIMATIONS } from '@/lib/design-system';
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

export default function FeatureCard({ title, subtitle, description, stats, color, reverse, index, id }: Props) {
  const { isLight } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: ANIMATIONS.easing }}
    >
      <div
        className={cn(
          "group relative rounded-3xl p-12 md:p-16 overflow-hidden transition-all duration-500",
          isLight
            ? "border-4 border-[rgba(255,255,255,0.15)] hover:border-white/[0.2]"
            : "bg-white/[0.04] border border-white/8 hover:bg-white/[0.05] hover:border-white/13"
        )}
        style={isLight ? {
          background: 'url(/textures/feature-bg.png) lightgray 50% / cover no-repeat, rgba(255, 255, 255, 0.39)',
          borderRadius: '24px'
        } : undefined}
      >
        {isLight && <LiquidGlass className="absolute inset-0" rounded="rounded-3xl" />}
        
        {/* Glow on Hover */}
        <motion.div
          className="absolute -top-1/2 -left-1/3 w-96 h-96 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[100px] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${color}15 0%, transparent 70%)` }}
        />

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          {/* Content */}
          <div className={`relative z-10 ${reverse ? 'lg:col-start-2' : ''}`}>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
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
            </motion.div>

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-5 border"
              style={{ background: `${color}12`, borderColor: `${color}25`, color }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
              {stats}
            </motion.div>

            {/* Title - Word Reveal */}
            <motion.h3
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-heading text-4xl md:text-5xl font-black leading-[1.2] mb-3"
            >
              {title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block ml-[0.25em]"
                  variants={{
                    hidden: { opacity: 0, y: 20, rotateX: 45 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      transition: { duration: 0.5, delay: 0.5 + i * 0.05, ease: ANIMATIONS.easing },
                    },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-lg font-medium mb-4"
              style={{ color }}
            >
              {subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
              className={cn(
                "text-base leading-relaxed mb-8 transition-colors duration-500",
                isLight ? "text-[#777d88]" : "text-gray-400"
              )}
            >
              {description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="w-8 h-px"
                style={{ background: color }}
              />
              <motion.button
                whileHover={{ x: -4 }}
                className="font-bold text-sm"
                style={{ color }}
              >
                اعرف المزيد ←
              </motion.button>
            </motion.div>
          </div>

          {/* Visual Placeholder */}
          <div className={`relative z-10 ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              className={cn(
                "aspect-video rounded-2xl border flex items-center justify-center transition-colors duration-500",
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
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

