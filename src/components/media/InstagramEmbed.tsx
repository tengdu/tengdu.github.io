"use client";

import { useEffect } from "react";

interface Props {
  url: string;
}

export default function InstagramEmbed({ url }: Props) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className="my-8 flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ maxWidth: 540, width: "100%" }}
      />
      <script async src="//www.instagram.com/embed.js" />
    </div>
  );
}
