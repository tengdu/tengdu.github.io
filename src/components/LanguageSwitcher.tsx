"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      className="text-sm px-3 py-1 rounded-full border transition-opacity hover:opacity-70"
      style={{ borderColor: "var(--border)", color: "var(--muted)" }}
    >
      {lang === "zh" ? "EN" : "中文"}
    </button>
  );
}
