"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PostListHeader({ count }: { count: number }) {
  const { t } = useLanguage();
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold tracking-tight">{t.allPosts}</h1>
      <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
        {t.posts(count)}
      </p>
    </div>
  );
}
