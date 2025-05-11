import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

const CTASection = () => {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Typography type="h1">
              Ready to Streamline Your Workflow?
            </Typography>
            <Typography className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of satisfied customers who have transformed their
              business with Get Set Pin.
            </Typography>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href={"/login"}>
              <Button size="lg" className="gap-1">
                Start Your Free Trial <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
