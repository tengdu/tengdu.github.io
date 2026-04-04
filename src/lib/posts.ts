import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { PostMeta, PostWithContent } from "./types";

const postsDir = path.join(process.cwd(), "content/posts");

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title as string,
      titleEn: data.titleEn as string | undefined,
      date: data.date as string,
      description: data.description as string,
      descriptionEn: data.descriptionEn as string | undefined,
      tags: data.tags as string[] | undefined,
      coverImage: data.coverImage as string | undefined,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set(posts.flatMap((p) => p.tags ?? []));
  return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((p) => p.tags?.includes(tag));
}

export function getPostBySlug(slug: string): PostWithContent {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const { text: readingTimeText } = readingTime(content);

  return {
    slug,
    title: data.title as string,
    titleEn: data.titleEn as string | undefined,
    date: data.date as string,
    description: data.description as string,
    descriptionEn: data.descriptionEn as string | undefined,
    tags: data.tags as string[] | undefined,
    coverImage: data.coverImage as string | undefined,
    content,
    readingTime: readingTimeText,
  };
}
