"use client";

import { useLanguage } from "@/context/LanguageContext";
import { tagTranslations } from "@/lib/i18n";
import TagChip from "./TagChip";

export default function TagPageHeader({ tag, count }: { tag: string; count: number }) {
  const { t, lang } = useLanguage();
  const tagLabel = lang === "en" ? (tagTranslations[tag] ?? tag) : tag;
  return (
    <div className="mb-10">
      <a href="/" className="text-sm transition-colors" style={{ color: "var(--accent)" }}>
        {t.backToAll}
      </a>
      <h1 className="mt-4 text-3xl font-bold tracking-tight flex items-center gap-3">
        {t.tagged} <span
          className="text-2xl px-3 py-1 rounded-full"
          style={{ backgroundColor: "var(--tag-bg)", color: "var(--tag-text)" }}
        >{tagLabel}</span>
      </h1>
      <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
        {t.posts(count)}
      </p>
    </div>
  );
}
