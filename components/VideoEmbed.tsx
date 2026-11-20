import type { Video } from "@/data/content";

// Shows a YouTube, Vimeo, or Instagram video. If the id is still "TODO", shows a placeholder box.
export default function VideoEmbed({ video }: { video: Video }) {
  const vertical = video.platform === "instagram";
  const aspect = vertical ? "aspect-[9/16]" : "aspect-video";
  const isPlaceholder = !video.id || video.id.startsWith("TODO");

  const src =
    video.platform === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${video.id}`
      : video.platform === "vimeo"
        ? `https://player.vimeo.com/video/${video.id}`
        : `https://www.instagram.com/reel/${video.id}/embed`;

  return (
    <figure className={vertical ? "mx-auto w-full max-w-[340px]" : ""}>
      <div className={`${aspect} w-full overflow-hidden rounded-2xl border border-line bg-card`}>
        {isPlaceholder ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center text-muted">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            <span className="text-sm">TODO: add {video.platform} video ID in content.ts</span>
          </div>
        ) : (
          <iframe
            src={src}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="h-full w-full"
          />
        )}
      </div>
      <figcaption className="mt-3">
        <p className="font-medium">{video.title}</p>
        {video.description && <p className="mt-1 text-sm text-muted">{video.description}</p>}
      </figcaption>
    </figure>
  );
}
