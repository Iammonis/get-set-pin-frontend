import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      quote:
        "Get Set Pin has 10x our Pinterest traffic! Scheduling a month's worth of content takes minutes now. The automation is game-changing.",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Bloom & Grow",
      avatar: "https://avatar.iran.liara.run/public/girl?username=sarah",
    },
    {
      id: "2",
      quote:
        "Our organic reach increased by 300% since using Get Set Pin. The hands-free scheduling lets us focus on strategy rather than manual pinning.",
      name: "Michael Chen",
      role: "E-commerce Manager",
      company: "StyleHaven",
      avatar: "https://avatar.iran.liara.run/public/boy?username=michael",
    },
    {
      id: "3",
      quote:
        "As a solopreneur, Get Set Pin saves me 10+ hours weekly. I can batch-create content and let the AI optimize my posting schedule.",
      name: "Priya Patel",
      role: "Founder",
      company: "ZenBakery",
      avatar: "https://avatar.iran.liara.run/public/girl?username=priya",
    },
    {
      id: "4",
      quote:
        "The analytics dashboard helped us identify our best-performing pins. We doubled our click-through rate in 2 months!",
      name: "David Kim",
      role: "Head of Growth",
      company: "AdventureGear",
      avatar: "https://avatar.iran.liara.run/public/boy?username=david",
    },
    {
      id: "5",
      quote:
        "Get Set Pin's Smart Schedule feature boosted our impressions by 450%. Worth every penny for serious Pinterest marketers.",
      name: "Lisa Wong",
      role: "Social Media Lead",
      company: "LuxeInteriors",
      avatar: "https://avatar.iran.liara.run/public/girl?username=lisa",
    },
    {
      id: "6",
      quote:
        "From 200 to 5,000 monthly visitors in 90 days! The automatic pin rotation keeps our content fresh without extra work.",
      name: "Carlos Mendez",
      role: "SEO Specialist",
      company: "FitFuel",
      avatar: "https://avatar.iran.liara.run/public/boy?username=carlos",
    },
    {
      id: "7",
      quote:
        "Our affiliate revenue tripled thanks to Get Set Pin's optimal posting times. The hands-off approach delivers real results.",
      name: "Natalie Brooks",
      role: "Content Creator",
      company: "TheGreenLife",
      avatar: "https://avatar.iran.liara.run/public/girl?username=natalie",
    },
    {
      id: "8",
      quote:
        "The bulk scheduling cut our Pinterest management time by 80%. Now we manage 5 brands in the time it took to handle one.",
      name: "Ryan Park",
      role: "Agency Owner",
      company: "SocialBurst",
      avatar: "https://avatar.iran.liara.run/public/boy?username=ryan",
    },
    // {
    //   id: "9",
    //   quote:
    //     "Get Set Pin helped us go viral with trending content suggestions. Our followers grew from 1K to 25K in 4 months!",
    //   name: "Aisha Diallo",
    //   role: "Brand Manager",
    //   company: "AfroChic",
    //   avatar: "https://avatar.iran.liara.run/public/girl?username=aisha",
    // },
    // {
    //   id: "10",
    //   quote:
    //     "As a Pinterest newbie, I appreciated the guided setup. Now my DIY blog gets consistent traffic without daily effort.",
    //   name: "Thomas Wright",
    //   role: "Blogger",
    //   company: "CraftyHacks",
    //   avatar: "https://avatar.iran.liara.run/public/boy?username=thomas",
    // },
    // {
    //   id: "11",
    //   quote:
    //     "The ROI is incredible - we gained 8,000 email subscribers via Pinterest in Q1 alone using Get Set Pin's automation.",
    //   name: "Sophie Martin",
    //   role: "Digital Director",
    //   company: "WellnessHub",
    //   avatar: "https://avatar.iran.liara.run/public/girl?username=sophie",
    // },
    // {
    //   id: "12",
    //   quote:
    //     "Get Set Pin's team helped us customize a strategy for our niche. Our engagement rate is now 3x industry average!",
    //   name: "Daniel Ng",
    //   role: "CMO",
    //   company: "PetPals",
    //   avatar: "https://avatar.iran.liara.run/public/boy?username=daniel",
    // },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-18 lg:py-24">
      <div className="px-4 md:px-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Typography type="h1">What Our Customers Say</Typography>
            <Typography
              type="h6"
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            >
              Don&apos;t just take our word for it. Here&apos;s what our customers have to
              say.
            </Typography>
          </div>
        </div>

        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full flex flex-col">
              <CardContent className="flex-grow p-6">
                <Typography className="text-muted-foreground">
                  {testimonial.quote}
                </Typography>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pt-0 pb-6 px-6">
                <Image
                  src={testimonial.avatar + testimonial?.name}
                  width={40}
                  height={40}
                  alt={testimonial.name}
                  className="rounded-full"
                />
                <div>
                  <Typography className="font-medium">
                    {testimonial.name}
                  </Typography>
                  <Typography className="text-xs">
                    {testimonial.role}, {testimonial.company}
                  </Typography>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
