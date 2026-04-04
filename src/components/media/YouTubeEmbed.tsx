interface Props {
  id: string;
  title?: string;
}

export default function YouTubeEmbed({ id, title = "YouTube video" }: Props) {
  return (
    <div className="relative aspect-video my-8 overflow-hidden rounded-xl shadow-lg">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
