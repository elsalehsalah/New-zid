'use client';

import { PricingSection, convertPricingDataToTiers } from '@/components/PricingSection';
import pricingData from '@/data/pricing.json';

export default function PricingSectionWrapper() {
  const tiers = convertPricingDataToTiers(pricingData.monthly, pricingData.annual);

  return (
    <PricingSection
      title="خطط بسيطة وشفافة"
      subtitle="اختر الخطة المناسبة لاحتياجاتك"
      frequencies={["monthly", "yearly"]}
      tiers={tiers}
    />
  );
}

