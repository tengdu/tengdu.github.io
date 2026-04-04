"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { tagTranslations } from "@/lib/i18n";

export default function TagChip({ tag }: { tag: string }) {
  const { lang } = useLanguage();
  const label = lang === "en" ? (tagTranslations[tag] ?? tag) : tag;

  return (
    <Link
      href={`/tags/${encodeURIComponent(tag)}`}
      className="text-xs px-2 py-1 rounded-full transition-opacity hover:opacity-70"
      style={{ backgroundColor: "var(--tag-bg)", color: "var(--tag-text)" }}
    >
      {label}
    </Link>
  );
}
