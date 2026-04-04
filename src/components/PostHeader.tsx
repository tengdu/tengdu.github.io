"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { PostWithContent } from "@/lib/types";
import TagChip from "./TagChip";

export default function PostHeader({ post }: { post: PostWithContent }) {
  const { t, lang } = useLanguage();
  return (
    <header className="mb-10">
      <a
        href="/"
        className="text-sm transition-colors"
        style={{ color: "var(--accent)" }}
      >
        {t.backToAll}
      </a>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">
        {lang === "en" && post.titleEn ? post.titleEn : post.title}
      </h1>
      <div className="mt-3 flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
        <time>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      {post.tags && post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagChip key={tag} tag={tag} />
          ))}
        </div>
      )}
    </header>
  );
}
