"use client"

import * as React from "react"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"
import { TabStatic as Tab } from "@/components/ui/pricing-tab-static"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/ThemeContext"
import pricingData from "@/data/pricing.json"

interface PricingSectionProps {
  title: string
  subtitle: string
  tiers: PricingTier[]
  frequencies: string[]
}

export function PricingSectionStatic({
  title,
  subtitle,
  tiers,
  frequencies,
}: PricingSectionProps) {
  const { isLight } = useTheme()
  const [selectedFrequency, setSelectedFrequency] = React.useState(frequencies[0])

  return (
    <section 
      id="pricing"
      className={cn(
        "flex flex-col items-center gap-10 py-12 px-4 md:py-24 lg:py-32 transition-colors duration-500",
        isLight ? "bg-[#eeeeee]" : "bg-[#09001A]"
      )}
    >
      <div className="space-y-7 text-center">
        <div className="space-y-4">
          <h1 className={cn(
            "text-4xl font-heading font-black md:text-5xl transition-colors duration-500",
            isLight ? "text-[#3c1c54]" : "text-white"
          )}>
            {title}
          </h1>
          <p className={cn(
            "text-muted-foreground transition-colors duration-500",
            isLight ? "text-[#777d88]" : "text-gray-400"
          )}>
            {subtitle}
          </p>
        </div>
        <div className={cn(
          "mx-auto flex w-fit rounded-full p-1 transition-colors duration-500",
          isLight ? "bg-white" : "bg-muted"
        )}>
          {frequencies.map((freq) => (
            <Tab
              key={freq}
              text={freq === "monthly" ? "شهري" : "سنوي"}
              selected={selectedFrequency === freq}
              setSelected={setSelectedFrequency}
              discount={freq === "yearly"}
            />
          ))}
        </div>
      </div>

      <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <PricingCard
            key={tier.name}
            tier={tier}
            paymentFrequency={selectedFrequency}
          />
        ))}
      </div>
    </section>
  )
}

// Helper function to convert pricing data to tiers format
export function convertPricingDataToTiers(
  monthlyData: typeof pricingData.monthly,
  annualData: typeof pricingData.annual
): PricingTier[] {
  return monthlyData.plans.map((monthlyPlan, index) => {
    const annualPlan = annualData.plans[index]
    const price: Record<string, number | string> = {}
    
    // Monthly price
    if (monthlyPlan.price !== undefined) {
      price.monthly = monthlyPlan.price
    } else {
      price.monthly = monthlyPlan.billing || "مخصص"
    }
    
    // Annual/Yearly price
    if (annualPlan.price !== undefined) {
      price.yearly = annualPlan.price
    } else {
      price.yearly = annualPlan.billing || "مخصص"
    }
    
    // Monthly equivalent for annual plans
    if ('monthly_equivalent' in annualPlan && annualPlan.monthly_equivalent) {
      price.monthly_equivalent = annualPlan.monthly_equivalent
    }
    
    // Original prices if they exist (store as metadata, not in price object)
    // These can be accessed separately if needed for display

    // Original prices for strikethrough
    const originalPrice: Record<string, number> = {}
    if ('original_price' in monthlyPlan && typeof monthlyPlan.original_price === 'number') {
      originalPrice.monthly = monthlyPlan.original_price
    }
    if ('original_price' in annualPlan && typeof annualPlan.original_price === 'number') {
      originalPrice.yearly = annualPlan.original_price
    }

    return {
      name: monthlyPlan.title,
      price,
      description: monthlyPlan.description,
      features: monthlyPlan.features,
      cta: monthlyPlan.cta,
      popular: monthlyPlan.badge === "الأكثر طلبًا",
      highlighted: monthlyPlan.id === "enterprise",
      originalPrice: Object.keys(originalPrice).length > 0 ? originalPrice : undefined,
    }
  })
}
