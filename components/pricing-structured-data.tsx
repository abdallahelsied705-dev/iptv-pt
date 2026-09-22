import { pricingPlans } from "@/lib/site-data";
import { siteConfig } from "@/config/site";

export function PricingStructuredData() {
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
      url: `${siteConfig.url}/planos`,
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Planos", item: `${siteConfig.url}/planos` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
