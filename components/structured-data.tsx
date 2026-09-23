import { faqs, pricingPlans } from "@/lib/site-data";
import { siteConfig } from "@/config/site";

export function StructuredData() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.ico`,
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Subscrição IPTV Portugal",
    description: siteConfig.description,
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: pricingPlans.map((plan) => ({
      "@type": "Offer",
      name: `Plano ${plan.name}`,
      price: plan.price.replace(",", "."),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/#planos`,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
