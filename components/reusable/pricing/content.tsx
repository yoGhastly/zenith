import { cn } from "@/utils/cn";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Button } from "../button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface Plan {
  label: string;
  price?: string;
  description: string;
  features: string[];
}

interface Props {
  plan: Plan;
  isRecommended?: boolean;
}

export function PricingContent({ plan, isRecommended }: Props) {
  return (
    <article
      className={cn("flex flex-col items-center p-8 gap-2 w-full rounded-xl", {
        "backdrop-blur-[2px] bg-gradient-to-b from-[#EF3E31] from-0% to-transparent to-30%":
          isRecommended,
      })}
      style={{
        border: "0.3px solid rgba(161, 161, 161, 0.3)",
      }}
    >
      <div className="flex flex-col gap-2 font-bold self-start">
        <p className="text-xl">{plan.label}</p>
        <h4 className={cn({ "text-4xl": plan.price, hidden: !plan.price })}>
          ${plan.price}
        </h4>
      </div>

      <div className="flex flex-col justify-between h-full gap-8">
        <div className="flex flex-col gap-5 text-gray-base">
          <p>{plan.description}</p>
          {plan.features.map((f, idx) => (
            <div className="flex items-center gap-2" key={`${f}_${idx}`}>
              <div className="w-6 h-6 flex items-center justify-center">
                <CheckCircleIcon className="text-white w-auto h-full" />
              </div>
              <div>
                <p>{f}</p>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-52 animate-background-shine bg-[length:200%_100%] bg-[linear-gradient(110deg,#ffffff,45%,#e5e5e5,55%,#ffffff)]">
          <Button.Text>
            <div className="font-semibold text-black flex items-center gap-2">
              {plan.label === "Basic"
                ? "Get started for free"
                : plan.label === "Starter"
                  ? "Upgrade to Starter"
                  : "Upgrade to Professional"}
              <ChevronRightIcon className="h-4" />
            </div>
          </Button.Text>
        </Button>
      </div>
    </article>
  );
}
