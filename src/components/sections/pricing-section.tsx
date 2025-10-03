"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle2, CircleX } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";

interface Plan {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

interface FeatureComparison {
  name: string;
  free: boolean | string;
  starter: boolean | string;
  professional: boolean | string;
}

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [highlightedPlan, setHighlightedPlan] = useState<string | null>(
    "professional"
  );
  const plans: Plan[] = [
    {
      id: "free",
      name: "Free",
      price: {
        monthly: 0,
        yearly: 0,
      },
      description: "Perfect for individuals or new users just getting started",
      features: [
        "Unlimited Pinterest accounts & websites",
        "35 pins/day (1000/month)",
        "Unlimited regenerations",
        "50 AI Pins per month",
        "1 underperforming pin delete/day",
        "Unlimited AI text & board generation",
        "Standard support",
        "Analytics dashboard with basic reports",
        "Access to top pins, boards & URL analytics",
        "Template Library access",
        "Custom Template upload",
      ],
      cta: "Get Started",
    },
    {
      id: "starter",
      name: "Starter",
      price: {
        monthly: 29,
        yearly: 25,
      },
      description: "Perfect for small teams scaling Pinterest automation",
      features: [
        "Unlimited Pinterest accounts & websites",
        "350 pins/day (10000/month)",
        "Unlimited regenerations",
        "150 AI Pins per month",
        "12 underperforming pins delete/day",
        "Unlimited AI text & board generation",
        "Priority support",
        "Analytics dashboard with extended insights",
        "Color, Template, Resolution analytics",
        "Top pins, boards & URL analytics",
        "Template Library access",
        "Upload custom fonts",
        "Custom Template upload",
      ],
      cta: "Get Started",
    },
    {
      id: "professional",
      name: "Professional",
      price: {
        monthly: 79,
        yearly: 69,
      },
      description: "For growing businesses that need power features",
      features: [
        "Unlimited Pinterest accounts & websites",
        "1000 pins/day (30000/month)",
        "Unlimited regenerations",
        "500 AI Pins per month",
        "12 underperforming pins delete/day",
        "Unlimited AI text & board generation",
        "Auto-create pins daily",
        "Urgent support",
        "30min Pinterest strategy call",
        "Team member invite (coming soon)",
        "Full analytics: Color, Template, Resolution & more",
        "Upload custom fonts",
        "Upload custom templates",
        "Template Library access",
      ],
      featured: true,
      cta: "Get Started",
    },
  ];

  const featureComparison: FeatureComparison[] = [
    {
      name: "Pinterest Accounts",
      free: "Unlimited",
      starter: "Unlimited",
      professional: "Unlimited",
    },
    {
      name: "Websites",
      free: "Unlimited",
      starter: "Unlimited",
      professional: "Unlimited",
    },
    {
      name: "Scheduled Pins per day",
      free: "35 pins/day (1000/month)",
      starter: "350 pins/day (10000/month)",
      professional: "1000 pins/day (30000/month)",
    },
    {
      name: "Regenerations",
      free: "Unlimited",
      starter: "Unlimited",
      professional: "Unlimited",
    },
    {
      name: "AI Pins per month",
      free: "50",
      starter: "150",
      professional: "500",
    },
    {
      name: "Delete underperforming pins",
      free: "1 pin/day",
      starter: "12 pins/day",
      professional: "12 pins/day",
    },
    {
      name: "AI Text & Board Generation",
      free: "Unlimited",
      starter: "Unlimited",
      professional: "Unlimited",
    },
    {
      name: "Auto-Create Pins daily",
      free: false,
      starter: false,
      professional: true,
    },
    {
      name: "Support",
      free: "Standard",
      starter: "Priority Support",
      professional: "Urgent Support",
    },
    {
      name: "Pinterest strategy call",
      free: false,
      starter: false,
      professional: "30min Pinterest strategy call",
    },
    {
      name: "Invite Team Members",
      free: false,
      starter: false,
      professional: "Coming soon",
    },
    {
      name: "Analytics Dashboard",
      free: true,
      starter: true,
      professional: true,
    },
    {
      name: "Top Pins",
      free: true,
      starter: true,
      professional: true,
    },
    {
      name: "Top Boards",
      free: true,
      starter: true,
      professional: true,
    },
    {
      name: "URL Analytics",
      free: true,
      starter: true,
      professional: true,
    },
    {
      name: "Template Analytics",
      free: false,
      starter: true,
      professional: true,
    },
    {
      name: "Color Analytics",
      free: false,
      starter: true,
      professional: true,
    },
    {
      name: "Resolution Analytics",
      free: false,
      starter: true,
      professional: true,
    },
    {
      name: "Template Library",
      free: true,
      starter: true,
      professional: true,
    },
    {
      name: "Upload Custom Fonts",
      free: false,
      starter: true,
      professional: true,
    },
    {
      name: "Upload Custom Template",
      free: true,
      starter: true,
      professional: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-12 md:py-18 lg:py-24 bg-muted bg-grid-pattern"
    >
      <div className="px-4 md:px-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Typography type="h1">Simple, Transparent Pricing</Typography>

            <Typography
              type="h6"
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Choose the plan that's right for your business
            </Typography>
          </div>
        </div>
        <div
          className={`grid place-content-center px-4 transition-colors py-4`}
        >
          <SliderToggle
            billingCycle={billingCycle}
            setBillingCycle={setBillingCycle}
          />
        </div>

        <div className="mx-auto grid gap-6 py-12 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:cursor-pointer",
                highlightedPlan === plan.id ? "ring-2 ring-primary" : "",
                plan.featured ? "border-primary" : ""
              )}
              onClick={() => setHighlightedPlan(plan.id)}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">
                  $
                  {billingCycle === "monthly"
                    ? plan.price.monthly
                    : plan.price.yearly}
                </span>
                <span className="ml-1 text-sm text-muted-foreground">
                  /{billingCycle === "monthly" ? "month" : "year"}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={cn("mt-6", plan.featured ? "" : "variant-outline")}
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mx-auto py-8">
          <Typography type="h1" className="text-center mb-8">
            Feature Comparison
          </Typography>
          <div className="border-2 rounded-lg overflow-hidden bg-primary-foreground shadow-xl">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left">Feature</th>
                  {plans.map((plan) => (
                    <th
                      key={plan.id}
                      className={cn(
                        "p-4 text-center",
                        highlightedPlan === plan.id ? "bg-primary/10" : ""
                      )}
                      onClick={() => setHighlightedPlan(plan.id)}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={`${
                      index % 2 === 0 ? "bg-muted/50" : ""
                    } border-b`}
                  >
                    <td className="p-4 font-medium">{feature.name}</td>
                    <td
                      className={cn(
                        "p-4 text-center",
                        highlightedPlan === "free" ? "bg-primary/5" : ""
                      )}
                    >
                      {typeof feature.free === "boolean" ? (
                        feature.free ? (
                          <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
                        ) : (
                          <CircleX className="mx-auto h-5 w-5 text-red-500" />
                        )
                      ) : (
                        feature.free
                      )}
                    </td>
                    <td
                      className={cn(
                        "p-4 text-center",
                        highlightedPlan === "starter" ? "bg-primary/5" : ""
                      )}
                    >
                      {typeof feature.starter === "boolean" ? (
                        feature.starter ? (
                          <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
                        ) : (
                          <CircleX className="mx-auto h-5 w-5 text-red-500" />
                        )
                      ) : (
                        feature.starter
                      )}
                    </td>
                    <td
                      className={cn(
                        "p-4 text-center",
                        highlightedPlan === "professional" ? "bg-primary/5" : ""
                      )}
                    >
                      {typeof feature.professional === "boolean" ? (
                        feature.professional ? (
                          <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />
                        ) : (
                          <CircleX className="mx-auto h-5 w-5 text-red-500" />
                        )
                      ) : (
                        feature.professional
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

type BillingCycle = "monthly" | "yearly";
const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10 cursor-pointer";

interface SliderToggleProps {
  billingCycle: BillingCycle;
  setBillingCycle: (cycle: BillingCycle) => void;
}

const SliderToggle: React.FC<SliderToggleProps> = ({
  billingCycle,
  setBillingCycle,
}) => {
  return (
    <div className="rounded-full hover:cursor-pointer border bg-background shadow-lg p-2">
      <div className="relative flex w-fit items-center">
        <button
          className={TOGGLE_CLASSES}
          onClick={() => {
            setBillingCycle("monthly");
          }}
        >
          <span
            className={`relative z-10 ${
              billingCycle === "monthly" && "text-gray-100"
            }`}
          >
            Monthly
          </span>
        </button>
        <button
          className={TOGGLE_CLASSES}
          onClick={() => {
            setBillingCycle("yearly");
          }}
        >
          <span
            className={`relative z-10 ${
              billingCycle === "yearly" && "text-gray-100"
            }`}
          >
            Yearly
          </span>
        </button>
        <div
          className={`absolute inset-0 z-0 flex ${
            billingCycle === "yearly" ? "justify-end" : "justify-start"
          }`}
        >
          <motion.span
            layout
            transition={{ type: "spring", damping: 15, stiffness: 250 }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};
