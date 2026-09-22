import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { ReactNode } from "react";

export function LegalPage({
  title,
  updated,
  breadcrumbLabel,
  children,
}: {
  title: string;
  updated: string;
  breadcrumbLabel: string;
  children: ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main>
        <article className="section shell legal-page">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Início</Link> / <span>{breadcrumbLabel}</span>
          </nav>
          <h1 className="page-title">{title}</h1>
          <p className="blog-meta" style={{ marginBottom: 32 }}>Última atualização: {updated}</p>
          <div className="legal-body">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
