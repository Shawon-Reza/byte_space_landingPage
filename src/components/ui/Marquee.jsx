/**
 * Infinite auto-scrolling marquee. Self-contained: the keyframes are
 * injected via a <style> tag, so no Tailwind config changes are needed.
 *
 * Props:
 * @param {string} [className]
 * @param {boolean} [reverse=false]        scroll right-to-left instead of left-to-right
 * @param {boolean} [pauseOnHover=false]
 * @param {boolean} [vertical=false]
 * @param {number} [repeat=4]              how many times the children are duplicated to fill the loop
 * @param {React.ReactNode} children
 */
export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  children,
  ...props
}) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] gap-[--gap] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
    >
      <style>{`
        @keyframes rc-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - var(--gap))); }
        }
        @keyframes rc-marquee-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-100% - var(--gap))); }
        }
        .rc-marquee-track {
          animation: rc-marquee var(--duration) linear infinite;
        }
        .rc-marquee-track-vertical {
          animation: rc-marquee-vertical var(--duration) linear infinite;
        }
      `}</style>

      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={`flex shrink-0 justify-around gap-[--gap] ${
            vertical
              ? "flex-col rc-marquee-track-vertical"
              : "flex-row rc-marquee-track"
          } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
          style={reverse ? { animationDirection: "reverse" } : undefined}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export default Marquee;