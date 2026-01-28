'use client';

import { PricingSectionStatic, convertPricingDataToTiers } from '@/components/static/PricingSectionStatic';
import pricingData from '@/data/pricing.json';

export default function PricingSectionWrapperStatic() {
  const tiers = convertPricingDataToTiers(pricingData.monthly, pricingData.annual);

  return (
    <PricingSectionStatic
      title="خطط بسيطة وشفافة"
      subtitle="اختر الخطة المناسبة لاحتياجاتك"
      frequencies={["monthly", "yearly"]}
      tiers={tiers}
    />
  );
}

