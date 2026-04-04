"use client";

import Link from "next/link";
import type { PostMeta } from "@/lib/types";
import TagChip from "./TagChip";
import { useLanguage } from "@/context/LanguageContext";

export default function PostCard({ post }: { post: PostMeta }) {
  const { lang } = useLanguage();

  return (
    <article
      className="group rounded-xl p-6 hover:shadow-md transition-shadow border"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--card)" }}
    >
      <Link href={`/posts/${post.slug}`} className="block">
        <time className="text-sm" style={{ color: "var(--muted)" }}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h2
          className="mt-2 text-xl font-semibold transition-colors"
          style={{ color: "var(--foreground)" }}
        >
          {lang === "en" && post.titleEn ? post.titleEn : post.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {lang === "en" && post.descriptionEn ? post.descriptionEn : post.description}
        </p>
      </Link>
      {post.tags && post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagChip key={tag} tag={tag} />
          ))}
        </div>
      )}
    </article>
  );
}
