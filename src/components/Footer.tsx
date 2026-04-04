"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t mt-16" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-4xl mx-auto px-4 py-6 text-sm" style={{ color: "var(--muted)" }}>
        {t.footer(new Date().getFullYear())}
      </div>
    </footer>
  );
}
