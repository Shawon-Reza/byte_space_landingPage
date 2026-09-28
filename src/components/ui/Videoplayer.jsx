import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

// Public sample video (MDN, CC0) + random placeholder poster.
// Replace both with your real course preview.
const DEFAULT_SRC =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const DEFAULT_POSTER = "https://picsum.photos/seed/course-preview/1280/720";

/**
 * Props (all optional, defaults are used when missing):
 * @param {string} [src]        video url (mp4/webm)
 * @param {string} [poster]     thumbnail shown before play
 * @param {string} [title]      accessible label
 * @param {() => void} [onPlay] called when playback starts
 * @param {string} [className]
 */
export default function VideoPlayer({
  src = DEFAULT_SRC,
  poster = DEFAULT_POSTER,
  title = "Course preview video",
  onPlay,
  className = "",
}) {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const handlePlayClick = () => {
    videoRef.current?.play();
  };

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-200 sm:rounded-3xl ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        title={title}
        controls={started}
        playsInline
        preload="metadata"
        onPlay={() => {
          setStarted(true);
          onPlay?.();
        }}
        onEnded={() => setStarted(false)}
        className="h-full w-full object-cover"
      >
        Your browser does not support the video tag.
      </video>

      {!started && (
        <button
          type="button"
          onClick={handlePlayClick}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 flex items-center justify-center focus:outline-none"
        >
          {/* Frosted rounded square */}
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-700/50 backdrop-blur-md transition group-hover:scale-105 group-focus-visible:ring-2 group-focus-visible:ring-white sm:h-20 sm:w-20 md:h-24 md:w-24 md:rounded-3xl">
            {/* White circle + play icon */}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-neutral-800 sm:h-12 sm:w-12 md:h-14 md:w-14">
              <FaPlay
                aria-hidden
                className="ml-0.5 text-sm sm:text-lg md:text-xl"
              />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}