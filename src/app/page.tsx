import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import PostListHeader from "@/components/PostListHeader";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <PostListHeader count={posts.length} />
      {posts.length === 0 ? (
        <p style={{ color: "var(--muted)" }}>No posts yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
