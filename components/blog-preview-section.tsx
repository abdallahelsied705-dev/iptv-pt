import Link from "next/link";
import { getPublishedPosts } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { BlogCover } from "@/components/blog-cover";

export function BlogPreviewSection() {
  const latest = getPublishedPosts().slice(0, 3);
  return (
    <section className="section dark" id="blog-preview">
      <div className="shell">
        <Reveal>
          <div className="split split-align-start">
            <div>
              <p className="eyebrow">BLOG IPTV PT</p>
              <h2>Guias e novidades sobre IPTV em Portugal.</h2>
            </div>
            <Link className="button secondary" href="/blog">Ver todos os artigos</Link>
          </div>
        </Reveal>
        <div className="blog-grid">
          {latest.map((post, index) => (
            <Reveal key={post.slug} delay={index * 70}>
              <Link href={`/blog/${post.slug}`} className="blog-card">
                <BlogCover post={post} />
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="blog-meta">{post.readingTime} de leitura</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
