"use client";

import Giscus from "@giscus/react";
import { useLanguage } from "@/context/LanguageContext";

export default function Comments() {
  const { lang } = useLanguage();

  const isProduction = typeof window !== "undefined" && window.location.hostname !== "localhost";
  const theme = isProduction
    ? `${window.location.origin}/giscus-theme.css`
    : "preferred_color_scheme";

  return (
    <div className="mt-16 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
      <Giscus
        repo="tengdu/tengdu.github.io"
        repoId="R_kgDONEoXaQ"
        category="Announcements"
        categoryId="DIC_kwDONEoXac4CjpYh"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme}
        lang={lang === "zh" ? "zh-CN" : "en"}
        loading="lazy"
      />
    </div>
  );
}
