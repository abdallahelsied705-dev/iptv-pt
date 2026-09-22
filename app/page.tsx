import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { DeviceMarquee } from "@/components/device-marquee";
import { DevicesSection } from "@/components/devices-section";
import { AppsPreviewSection } from "@/components/apps-preview-section";
import { FeaturesSection } from "@/components/features-section";
import { ChannelsSection } from "@/components/channels-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { PricingSection } from "@/components/pricing-section";
import { ComparisonSection } from "@/components/comparison-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { BlogPreviewSection } from "@/components/blog-preview-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";

// Revalida a cada hora — garante que artigos agendados aparecem na secção
// de blog da homepage automaticamente, sem novo deploy.
export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main>
        <HeroSection />
        <DeviceMarquee />
        <DevicesSection />
        <AppsPreviewSection />
        <FeaturesSection />
        <ChannelsSection />
        <HowItWorksSection />
        <PricingSection showDetailsLink />
        <ComparisonSection />
        <TestimonialsSection />
        <FaqSection />
        <BlogPreviewSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
