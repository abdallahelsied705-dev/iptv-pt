import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentBlock } from "@/lib/site-data";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderWithLinks(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    const [full, label, url] = match;
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (url.startsWith("/")) {
      parts.push(
        <Link key={key++} href={url}>
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a key={key++} href={url} target="_blank" rel="nofollow noopener noreferrer">
          {label}
        </a>
      );
    }
    lastIndex = match.index + full.length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

export function ArticleBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{renderWithLinks(block.text)}</h2>;
    case "h3":
      return <h3>{renderWithLinks(block.text)}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{renderWithLinks(item)}</li>
          ))}
        </ul>
      );
    case "p":
    default:
      return <p>{renderWithLinks(block.text)}</p>;
  }
}
