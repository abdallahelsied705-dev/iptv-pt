import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BlogCover } from "@/components/blog-cover";
import { ArticleParagraph } from "@/components/article-paragraph";
import { blogPosts, isPublished, getPublishedPosts } from "@/lib/site-data";
import { siteConfig } from "@/config/site";

// Revalida a cada hora — um artigo agendado (data futura) passa a ficar
// acessível sozinho assim que a data chega, sem novo deploy.
export const revalidate = 3600;

export function generateStaticParams() {
  // Gera as páginas de TODOS os posts, incluindo agendados para o futuro —
  // ficam prontas como 404 até à data de publicação, altura em que o ISR
  // as regenera automaticamente como publicadas.
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post || !isPublished(post)) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post || !isPublished(post)) notFound();

  const others = getPublishedPosts().filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  const related = [...sameCategory, ...rest].slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };

  const firstHalf = post.content.slice(0, 2);
  const secondHalf = post.content.slice(2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SiteHeader />
      <main>
        <article className="section shell article">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Início</Link> / <Link href="/blog">Blog</Link> / <span>{post.title}</span>
          </nav>
          <span className="blog-category">{post.category}</span>
          <h1 className="page-title">{post.title}</h1>
          <p className="blog-meta">
            {new Date(post.date).toLocaleDateString("pt-PT", { day: "2-digit", month: "long", year: "numeric" })}
            {" · "}{post.readingTime} de leitura
          </p>
          <BlogCover post={post} variant="article" priority />

          <div className="article-body">
            {firstHalf.map((paragraph, i) => (
              <ArticleParagraph key={i} text={paragraph} />
            ))}
          </div>

          {secondHalf.length > 0 && (
            <div className="article-inline-cta">
              <span>💬 Já sabes que plano queres?</span>
              <Link href="/planos">Ver planos e preços <span>→</span></Link>
            </div>
          )}

          <div className="article-body">
            {secondHalf.map((paragraph, i) => (
              <ArticleParagraph key={i} text={paragraph} />
            ))}
          </div>

          <div className="article-cta">
            <p>Já sabes o que precisas? Consulta os nossos planos e preços.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="button primary" href="/planos">Ver planos <span>→</span></Link>
              <Link className="button secondary" href="/contacto">Tenho dúvidas</Link>
            </div>
          </div>

          {related.length > 0 && (
            <div className="related-posts">
              <h2>Continua a ler</h2>
              <div className="blog-grid">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="blog-card">
                    <BlogCover post={r} />
                    <span className="blog-category">{r.category}</span>
                    <h3>{r.title}</h3>
                    <p>{r.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
