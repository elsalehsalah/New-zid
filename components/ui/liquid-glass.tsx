'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface LiquidGlassProps {
  children?: ReactNode;
  className?: string;
  rounded?: string;
  disabled?: boolean;
}

export function LiquidGlass({ children, className, rounded = 'rounded-xl', disabled = false }: LiquidGlassProps) {
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden",
          rounded
        )}
        style={{ backdropFilter: 'url("#container-glass")' }}
      />
      {children}
    </div>
  );
}

export function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          {/* Generate turbulent noise for distortion */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />

          {/* Blur the turbulence pattern slightly */}
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />

          {/* Displace the source graphic with the noise */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />

          {/* Apply overall blur on the final result */}
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />

          {/* Output the result */}
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

