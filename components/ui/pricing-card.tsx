"use client"

import * as React from "react"
import { BadgeCheck, ArrowRight } from "lucide-react"
import NumberFlow from "@number-flow/react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTheme } from "@/contexts/ThemeContext"
import { LiquidGlass } from "@/components/ui/liquid-glass"

export interface PricingTier {
  name: string
  price: Record<string, number | string>
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
  popular?: boolean
  originalPrice?: Record<string, number>
}

interface PricingCardProps {
  tier: PricingTier
  paymentFrequency: string
}

export function PricingCard({ tier, paymentFrequency }: PricingCardProps) {
  const { isLight } = useTheme()
  const price = tier.price[paymentFrequency]
  const isHighlighted = tier.highlighted
  const isPopular = tier.popular

  return (
    <Card
      className={cn(
        "relative flex flex-col gap-8 overflow-hidden p-6 transition-colors duration-500",
        isHighlighted
          ? isLight
            ? "bg-[#3c1c54] text-white"
            : "bg-foreground text-background"
          : isLight
            ? "bg-white border-gray-200 text-[#3c1c54]"
            : "bg-background text-foreground",
        isPopular && "ring-2 ring-[#AE72FF]"
      )}
    >
      {isLight && isHighlighted && <LiquidGlass className="absolute inset-0" rounded="rounded-lg" />}
      {isHighlighted && <HighlightedBackground />}
      {isPopular && <PopularBackground />}

      <h2 className="flex items-center gap-3 text-xl font-heading font-bold capitalize relative z-10">
        {tier.name}
        {isPopular && (
          <Badge 
            variant="secondary" 
            className={cn(
              "mt-1 z-10",
              isLight 
                ? "bg-[#AE72FF]/10 text-[#AE72FF] border-[#AE72FF]/20"
                : ""
            )}
          >
            الأكثر طلبًا
          </Badge>
        )}
      </h2>

      <div className="relative h-12 z-10">
        {typeof price === "number" ? (
          <>
            <div className="flex items-baseline gap-2">
              {tier.originalPrice?.[paymentFrequency] && (
                <span className={cn(
                  "text-lg line-through transition-colors duration-500",
                  isHighlighted 
                    ? "text-white/50" 
                    : isLight 
                      ? "text-[#777d88]" 
                      : "text-gray-500"
                )}>
                  {tier.originalPrice[paymentFrequency]} {paymentFrequency === "monthly" ? "ريال" : "ريال"}
                </span>
              )}
              <NumberFlow
                format={{
                  style: "currency",
                  currency: "SAR",
                  trailingZeroDisplay: "stripIfInteger",
                }}
                value={price}
                className={cn(
                  "text-4xl font-heading font-black",
                  isHighlighted ? "text-white" : isLight ? "text-[#3c1c54]" : "text-white"
                )}
              />
            </div>
            <p className={cn(
              "-mt-2 text-xs transition-colors duration-500",
              isHighlighted 
                ? "text-white/70" 
                : isLight 
                  ? "text-[#777d88]" 
                  : "text-muted-foreground"
            )}>
              {paymentFrequency === "monthly" ? "شهري" : "سنوي"}
            </p>
          </>
        ) : (
          <>
            <h1 className={cn(
              "text-4xl font-heading font-black",
              isHighlighted ? "text-white" : isLight ? "text-[#3c1c54]" : "text-white"
            )}>
              {price}
            </h1>
            {tier.price.monthly_equivalent && (
              <p className={cn(
                "-mt-2 text-xs transition-colors duration-500",
                isHighlighted 
                  ? "text-white/70" 
                  : isLight 
                    ? "text-[#777d88]" 
                    : "text-muted-foreground"
              )}>
                /{tier.price.monthly_equivalent} ريال شهريًا
              </p>
            )}
          </>
        )}
      </div>

      <div className="flex-1 space-y-2 z-10">
        <h3 className={cn(
          "text-sm font-medium transition-colors duration-500",
          isHighlighted 
            ? "text-white/90" 
            : isLight 
              ? "text-[#777d88]" 
              : "text-muted-foreground"
        )}>
          {tier.description}
        </h3>
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-center gap-2 text-sm font-medium",
                isHighlighted 
                  ? "text-white/90" 
                  : isLight 
                    ? "text-[#3c1c54]" 
                    : "text-foreground"
              )}
            >
              <BadgeCheck className={cn(
                "h-4 w-4 shrink-0",
                isHighlighted ? "text-white" : "text-emerald-600 dark:text-emerald-400"
              )} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={isHighlighted ? "secondary" : "default"}
        className={cn(
          "w-full relative z-10",
          isHighlighted && isLight && "bg-white text-[#3c1c54] hover:bg-gray-100",
          !isHighlighted && isLight && "bg-gradient-to-l from-[#AE72FF] to-[#4C1289] text-white hover:from-[#8B5CF6] hover:to-[#5B21B6]"
        )}
      >
        {tier.cta}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Card>
  )
}

const HighlightedBackground = () => (
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
)

const PopularBackground = () => (
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(174,114,255,0.1),rgba(255,255,255,0))]" />
)

