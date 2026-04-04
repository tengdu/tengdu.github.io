import { MDXRemote } from "next-mdx-remote/rsc";
import YouTubeEmbed from "./media/YouTubeEmbed";
import InstagramEmbed from "./media/InstagramEmbed";
import BlogImage from "./media/BlogImage";

const components = {
  YouTubeEmbed,
  InstagramEmbed,
  BlogImage,
  img: BlogImage,
};

export default function MDXContent({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
