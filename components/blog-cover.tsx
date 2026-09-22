import Image from "next/image";
import { Icon } from "@/components/icon";
import type { BlogPost } from "@/lib/site-data";

export function BlogCover({
  post,
  priority = false,
  variant = "card",
}: {
  post: BlogPost;
  priority?: boolean;
  variant?: "card" | "article";
}) {
  const imgClass = variant === "article" ? "article-cover-img" : "blog-card-img";
  if (post.cover) {
    return (
      <Image
        src={post.cover}
        alt={post.title}
        width={1200}
        height={675}
        priority={priority}
        className={imgClass}
      />
    );
  }
  return (
    <div className={`${imgClass} blog-cover-placeholder`} aria-hidden="true">
      <Icon name={post.coverIcon} size={variant === "article" ? 48 : 34} />
    </div>
  );
}
