import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function BlogImage({ src, alt, width, height }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 0}
      height={height ?? 0}
      sizes="(max-width: 672px) 100vw, 672px"
      className="rounded-xl my-6 w-full h-auto shadow"
    />
  );
}
