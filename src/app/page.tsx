import HeroSection from "@/components/sections/hero-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { PricingSection } from "@/components/sections/pricing-section";
import CTASection from "@/components/sections/cta-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import FeaturesSection from "@/components/sections/features-section";
import FAQSection from "@/components/sections/faq-section";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* CTA Section */}
        <CTASection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
