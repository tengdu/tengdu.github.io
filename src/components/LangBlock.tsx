"use client";

import { useLanguage } from "@/context/LanguageContext";

export function ZH({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();
  return lang === "zh" ? <>{children}</> : null;
}

export function EN({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();
  return lang === "en" ? <>{children}</> : null;
}
