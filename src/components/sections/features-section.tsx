import React from "react";
import { Typography } from "@/components/ui/typography";

export interface FeatureSection {
  section: string;
  items: string[];
}

const features: FeatureSection[] = [
  {
    section: "Accounts",
    items: ["Pinterest Accounts", "Websites"],
  },
  {
    section: "Limits",
    items: ["Scheduled Pins per day", "Regenerations", "AI Pins per month"],
  },
  {
    section: "Features",
    items: [
      "Delete underperforming pins",
      "AI Text & Board Generation",
      "Auto-Create Pins daily",
    ],
  },
  {
    section: "Support",
    items: ["Support", "Pinterest strategy call"],
  },
  {
    section: "Team",
    items: ["Invite Team Members"],
  },
  {
    section: "Analytics",
    items: [
      "Analytics Dashboard",
      "Top Pins",
      "Top Boards",
      "URL Analytics",
      "Template Analytics",
      "Color Analytics",
      "Resolution Analytics",
    ],
  },
  {
    section: "Design",
    items: [
      "Template Library",
      "Upload Custom Fonts",
      "Upload Custom Template",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-18 lg:py-24 bg-muted bg-grid-pattern"
    >
      <div className="min-h-screen flex items-center justify-center ">
        <div className="max-w-screen-lg w-full py-10 px-6">
          <Typography
            type="h1"
            className="tracking-tight max-w-xl md:text-center md:mx-auto"
          >
            Boost Your Strategy with Smart Features
          </Typography>

          <div className="mt-8 md:mt-16 w-full mx-auto space-y-16">
            {features.map((feature) => (
              <div
                key={feature.section}
                className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse bg-card text-card-foreground rounded-xl border p-6 shadow-sm"
              >
                <div className="w-full aspect-[6/4] bg-muted rounded-xl border border-border/50 basis-1/2" />
                <div className="basis-1/2 shrink-0">
                  <Typography type="h2" className="font-semibold">
                    {feature.section}
                  </Typography>
                  {feature.items.map((item: string, idx: number) => (
                    <Typography
                      key={idx}
                      className="text-muted-foreground text-[17px]"
                    >
                      {item}
                    </Typography>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
