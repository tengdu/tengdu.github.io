import Link from "next/link";
import type { PostWithContent } from "@/lib/types";

export default function PostHeader({ post }: { post: PostWithContent }) {
  return (
    <header className="mb-10">
      <Link
        href="/"
        className="text-sm text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
      >
        ← Back to all posts
      </Link>
      <h1 className="mt-4 text-4xl font-bold tracking-tight">{post.title}</h1>
      <div className="mt-3 flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
        <time>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
      {post.tags && post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
