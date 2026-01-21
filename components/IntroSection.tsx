'use client';

import { motion } from 'framer-motion';
import { TextColor } from '@/components/ui/text-color';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export default function IntroSection() {
  const { isLight } = useTheme();

  return (
    <section 
      id="intro" 
      className={cn(
        "py-20 md:py-32 px-6 md:px-12 transition-colors duration-500",
        isLight ? "bg-[#f7f8fb]" : "bg-[#09001A]"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Animated Text */}
          <TextColor 
            words={['زد..', 'أبسط..', 'أسهل..', 'أسرع']}
          />

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className={cn(
              "text-lg md:text-xl max-w-3xl mx-auto mt-8 font-body transition-colors duration-500",
              isLight ? "text-slate-600" : "text-gray-400"
            )}
          >
            تحديثات شتاء 2026 تجعل إدارة متجرك أكثر سهولة وسرعة من أي وقت مضى
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

