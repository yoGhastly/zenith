import React from "react";
import { PricingContent } from "./content";

interface Plan {
  label: string;
  price: string;
  description: string;
  features: string[];
}

export function Pricing({ plan }: { plan: Plan }) {
  return (
    <div className="flex justify-center items-center p-5 w-full">
      <PricingContent plan={plan} />
    </div>
  );
}
