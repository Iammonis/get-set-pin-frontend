import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Clock, FileText, BadgeCheck, Paintbrush, Image as ImageIcon, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-muted/40 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_600px]">
          {/* LEFT: Text Content */}
          <div className="space-y-6 px-6">
            <div className="space-y-4">
              <Typography type="h1" className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
                Best Pinterest Automation Tool
              </Typography>
              <Typography  className="text-muted-foreground text-lg lg:text-xl max-w-[600px]">
                Easily schedule a month’s worth of Pins for your website in just minutes. 
                Boost your Pinterest growth and organic reach — all hands-free.
              </Typography>
            </div>

            {/* Features List */}
            <div className="grid gap-4">
              <FeatureItem icon={<Clock className="text-muted-foreground h-4 w-4" />} text="Plan and publish Pins across hundreds of pages with a single click" />
              <FeatureItem icon={<FileText className="text-muted-foreground h-4 w-4" />} text="Auto-generate fresh titles and descriptions for each Pin" />
              <FeatureItem icon={<BadgeCheck className="text-muted-foreground h-4 w-4" />} text="Smart AI selects the most relevant board for every Pin" />
              <FeatureItem icon={<Paintbrush className="text-muted-foreground h-4 w-4" />} text="Bring in your custom Canva templates effortlessly" />
              <FeatureItem icon={<ImageIcon className="text-muted-foreground h-4 w-4" />} text="Create AI-powered visuals tailored to your content" />
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link href="/login">
                <Button size="lg" className="gap-2">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="w-full mx-auto">
            <Image
              src="/placeholder.svg?height=550&width=550"
              width={550}
              height={550}
              alt="Hero Image"
              className="w-full rounded-xl object-cover aspect-square border shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// FeatureItem Component
function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-1">{icon}</div>
      <Typography className="text-muted-foreground text-[16px]">{text}</Typography>
    </div>
  );
}
