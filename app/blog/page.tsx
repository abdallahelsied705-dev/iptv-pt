import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BlogCover } from "@/components/blog-cover";
import { getPublishedPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog IPTV Portugal — Guias, Legalidade e Tutoriais",
  description:
    "Artigos sobre IPTV em Portugal: guias de escolha, legalidade, instalação em Smart TV, Firestick e Android Box.",
  alternates: { canonical: "/blog" },
};

// Revalida a cada hora — artigos agendados (com data futura) passam a
// aparecer aqui sozinhos assim que a data chega, sem novo deploy.
export const revalidate = 3600;

export default function BlogIndexPage() {
  const posts = getPublishedPosts();
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section shell">
          <p className="eyebrow">BLOG IPTV PT</p>
          <h1 className="page-title">Guias e novidades sobre IPTV em Portugal</h1>
          <p className="lead" style={{ marginBottom: 48 }}>
            Artigos escritos para ajudar-te a escolher, instalar e tirar o máximo partido do teu
            serviço IPTV em Portugal.
          </p>
          <div className="blog-grid blog-grid-index">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <BlogCover post={post} />
                <span className="blog-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <span className="blog-meta">{post.readingTime} de leitura</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
