import Link from "next/link";
import type { PostMeta } from "@/lib/types";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:shadow-md transition-shadow">
      <Link href={`/posts/${post.slug}`}>
        <time className="text-sm text-neutral-500 dark:text-neutral-400">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h2 className="mt-2 text-xl font-semibold group-hover:text-blue-600 transition-colors">
          {post.title}
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
          {post.description}
        </p>
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
      </Link>
    </article>
  );
}
