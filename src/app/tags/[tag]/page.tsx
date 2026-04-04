import { getAllTags, getPostsByTag } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import TagPageHeader from "@/components/TagPageHeader";
import type { Metadata } from "next";

type Params = { tag: string };

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  return { title: `#${decoded} — tengdu.me` };
}

export default async function TagPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const posts = getPostsByTag(decoded);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <TagPageHeader tag={decoded} count={posts.length} />
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
