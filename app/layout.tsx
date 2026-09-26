import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/config/site";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { ScrollToTop } from "@/components/scroll-to-top";
import { CookieBanner } from "@/components/cookie-banner";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "IPTV PT | Futebol em direto, filmes e séries",
    description: "Mais de 25.000 canais, futebol em direto, filmes e séries em 4K. Planos desde 12,99€/mês, sem fidelização e com apoio em português.",
    images: [{ url: "/og/share", width: 1200, height: 630, type: "image/png", alt: "IPTV PT Portugal — futebol em direto, cinema a pedido e planos desde 12,99€/mês" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV PT | Futebol em direto, filmes e séries",
    description: "Mais de 25.000 canais, filmes e séries em 4K, desde 12,99€/mês.",
    images: ["/og/share"],
  },
  icons: { icon: "/images/logo-icon.png", shortcut: "/favicon.ico", apple: "/images/logo-icon.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081426",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT" className={geist.variable}>
      <body>
        {children}
        <WhatsAppFloat />
        <ScrollToTop />
        <CookieBanner />
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
