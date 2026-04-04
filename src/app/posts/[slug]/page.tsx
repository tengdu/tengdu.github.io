import { getPostBySlug, getAllPosts } from "@/lib/posts";
import PostHeader from "@/components/PostHeader";
import MDXContent from "@/components/MDXContent";
import Prose from "@/components/ui/Prose";
import type { Metadata } from "next";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return { title: post.title, description: post.description };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <PostHeader post={post} />
      <Prose>
        <MDXContent source={post.content} />
      </Prose>
    </article>
  );
}
