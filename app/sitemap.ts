import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getPublishedPosts } from "@/lib/site-data";

// Revalida a cada hora — artigos agendados entram no sitemap sozinhos
// assim que a data de publicação chega, sem novo deploy.
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/planos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/aplicacoes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/dispositivos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/sobre-nos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteConfig.url}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/termos-e-condicoes`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/politica-de-privacidade`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/politica-de-reembolso`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
