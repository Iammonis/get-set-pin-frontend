"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { Typography } from "@/components/ui/typography";

export interface FAQ {
    question: string;
    answer: string;
  }
  
  export const faqs: FAQ[] = [
    {
      question: "Can I schedule pins for future dates?",
      answer:
        "Absolutely! Our scheduling system allows you to queue pins in advance. Maintain a consistent Pinterest presence without needing to manually publish every hour.",
    },
    {
      question: "Is there a pin publishing limit?",
      answer:
        "Depending on your plan, you can publish between 35 and 350 pins per day. If you need more, we can work with you on a custom plan.",
    },
    {
      question: "Is GetSetPin officially approved by Pinterest?",
      answer:
        "Yes, our tool complies with Pinterest’s API rules and has been reviewed and approved by the Pinterest team.",
    },
    {
      question: "I have many pages. Is this tool still effective?",
      answer:
        "Definitely! GetSetPin automatically tracks your pages and visuals to prevent duplicates and maximize your exposure. Our smart scheduler ensures wide and varied distribution.",
    },
    {
      question: "Can it handle complex websites?",
      answer:
        "Yes, we offer flexible logic and can exclude certain sections like suggested articles or ads to ensure relevance in your pins.",
    },
    {
      question: "Will it work for niche markets?",
      answer:
        "It depends on your content, but Pinterest is a great fit for most visual-based topics. If your visuals are high-quality, GetSetPin will help them shine.",
    },
    {
      question: "What if I don’t have images on my site?",
      answer:
        "No worries! We provide templates and support AI-based image generation. You can also upload custom visuals or use stock images.",
    },
    {
      question: "What does 'regeneration' mean?",
      answer:
        "You can regenerate all your AI pins if needed — up to 1000 pins per site monthly. If you’re not happy with the outcome, regenerate with fresh input anytime — up to twice per month.",
    },
    {
      question: "I don’t have many blog posts. Can I still use GetSetPin?",
      answer:
        "Of course! Pick from our diverse pin styles and use our scheduler to evenly distribute them, ensuring maximum visibility.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, subscriptions can be canceled at any time through your account settings — no hassle.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach us at hello@getsetpin.com or message us on Telegram @getsetpin for fast responses.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Due to the high costs of AI processing, we don’t offer refunds. However, you can test our features for free or regenerate your AI pins before committing to a plan.",
    },
    {
      question: "Can I use GetSetPin with Etsy/RedBubble/Amazon?",
      answer:
        "Absolutely! Just submit the product URLs and we’ll fetch the content and generate pins accordingly.",
    },
    {
      question: "Can I use GetSetPin with Medium or YouTube?",
      answer:
        "Yes! Provide us the links to your Medium posts or YouTube videos and we’ll create pins from that content.",
    },
    {
      question: "Will using GetSetPin hurt my organic Pinterest reach?",
      answer:
        "Not at all! Our smart scheduler mimics organic behavior and ensures optimal distribution. You maintain full control and can manually post if you prefer.",
    },
  ];
  
const FAQSection = () => {
  const [value, setValue] = useState<string>();
  return (
    <div className="flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-screen-lg">

        <Typography type="h1" className="text-center">
          Frequently Asked Questions
        </Typography>
        <div className="mt-6 w-full grid md:grid-cols-2 gap-x-10">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={value}
            onValueChange={setValue}
          >
            {faqs.slice(0, 8).map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`}>
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                      "text-start text-lg hover:cursor-pointer"
                    )}
                  >
                    {question}
                    <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="bg-gray-100 p-2">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={value}
            onValueChange={setValue}
          >
            {faqs.slice(8).map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index + 8}`}>
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                      "text-start text-lg hover:cursor-pointer"
                    )}
                  >
                    {question}
                    <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="bg-secondary p-2">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
