import { pricingPlans } from "@/lib/site-data";
import { siteConfig } from "@/config/site";

/** Product + Offers partilhado pela página inicial e por /planos. */
export function productSchema(offerUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Subscrição IPTV Portugal",
    description: siteConfig.description,
    image: `${siteConfig.url}/images/og-image.png`,
    sku: "iptv-pt-subscricao",
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: pricingPlans.map((plan) => ({
      "@type": "Offer",
      name: `Plano ${plan.name}`,
      sku: `iptv-pt-${plan.id}`,
      price: plan.price.replace(",", "."),
      priceCurrency: "EUR",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url: offerUrl,
      seller: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      // Serviço digital: ativação online, sem envio físico.
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "EUR" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "PT" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
        },
      },
    })),
  };
}

export function PricingStructuredData() {
  const product = productSchema(`${siteConfig.url}/planos`);

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
