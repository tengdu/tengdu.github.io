export type Lang = "en" | "zh";

export const tagTranslations: Record<string, string> = {
  旅行: "travel",
  飞行: "flights",
  流浪: "nomad",
  日常: "daily",
  回忆: "memories",
  珍贵: "precious",
};

export const translations = {
  en: {
    allPosts: "All Posts",
    posts: (n: number) => `${n} ${n === 1 ? "post" : "posts"}`,
    backToAll: "← All posts",
    tagged: "Tagged:",
    noPosts: "No posts yet.",
    footer: (year: number) => `© ${year} tengdu.me`,
  },
  zh: {
    allPosts: "所有文章",
    posts: (n: number) => `共 ${n} 篇`,
    backToAll: "← 返回",
    tagged: "标签：",
    noPosts: "暂无文章。",
    footer: (year: number) => `© ${year} tengdu.me`,
  },
} satisfies Record<Lang, object>;

export type Translations = (typeof translations)["en"];
