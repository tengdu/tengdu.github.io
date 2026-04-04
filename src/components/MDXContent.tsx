import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import YouTubeEmbed from "./media/YouTubeEmbed";
import InstagramEmbed from "./media/InstagramEmbed";
import BlogImage from "./media/BlogImage";
import MyFlights from "./MyFlights";
import { ZH, EN } from "./LangBlock";

const components = {
  ZH,
  EN,
  YouTubeEmbed,
  InstagramEmbed,
  BlogImage,
  MyFlights,
  img: BlogImage,
};

export default function MDXContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  );
}
