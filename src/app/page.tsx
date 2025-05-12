import HeroSection from "@/components/sections/hero-section";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { PricingSection } from "@/components/sections/pricing-section";
import CTASection from "@/components/sections/cta-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import FeaturesSection from "@/components/sections/features-section";
import FAQSection from "@/components/sections/faq-section";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
