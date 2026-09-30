import { useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";


export default function HeroIcons({
  spiralGreen,
  spiralWhite1,
  triangle,
  cylinder,
  ring,
  spiralWhite2,
  className = "",
  paused = false,
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <Shape
        icon={spiralGreen}
        paused={paused}
        style={{ left: "-3%", top: "18%", width: "15%" }}
        fallbackClassName="rounded-full border-[10px] border-[#CCF52B] border-t-transparent border-l-transparent bg-transparent"
        entranceDelay={0.1}
        spinDuration={25}
      />

      <Shape
        icon={spiralWhite1}
        paused={paused}
        style={{ left: "15%", top: "45%", width: "8%" }}
        fallbackClassName="rounded-full border-[7px] border-white border-t-transparent border-l-transparent bg-transparent"
        entranceDelay={0.35}
        spinDuration={25}
      />

      <Shape
        icon={triangle}
        paused={paused}
        style={{ right: "15%", top: "45%", width: "8%" }}
        fallbackClassName="bg-white"
        fallbackStyle={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        entranceDelay={0.5}
        spinDuration={25}
      />

      <Shape
        icon={cylinder}
        paused={paused}
        style={{ right: "-3%", top: "18%", width: "15%" }}
        fallbackClassName="rounded-2xl bg-[#CCF52B]"
        entranceDelay={0.15}
        spinDuration={25}
      />

      <Shape
        icon={ring}
        paused={paused}
        style={{ left: "4%", top: "66%", width: "16%" }}
        fallbackClassName="rounded-full border-[14px] border-white bg-transparent"
        entranceDelay={0.65}
        spinDuration={10}
      />

      <Shape
        icon={spiralWhite2}
        paused={paused}
        style={{ left: "86%", top: "66%", width: "16 %" }}
        fallbackClassName="rounded-full border-[9px] border-white border-t-transparent border-l-transparent bg-transparent"
        entranceDelay={0.1}
        spinDuration={25}
      />
    </div>
  );
}

function Shape({
  icon,
  style,
  fallbackClassName,
  fallbackStyle,
  entranceDelay,
  spinDuration = 6,
  paused,
}) {
  const [scope, animate] = useAnimate();
  const controls = useRef([]);

  useEffect(() => {
    const entrance = animate(scope.current, { opacity: 1, scale: 1 }, {
      type: "spring", stiffness: 140, damping: 14, delay: entranceDelay,
    });
    const spin = animate(scope.current.querySelector(".hero-icon-spin"), { rotate: 360 }, {
      delay: entranceDelay + 0.5, duration: spinDuration, repeat: Infinity,
      repeatType: "loop", ease: "linear",
    });
    controls.current = [entrance, spin];
    return () => { entrance.stop(); spin.stop(); };
  }, [animate, entranceDelay, scope, spinDuration]);

  useEffect(() => {
    const [entrance, spin] = controls.current;
    if (!entrance || !spin) return;

    if (paused) {
      // If paused during its entrance, finish the reveal so the icon never
      // remains hidden at a partial opacity or scale.
      entrance.complete();
      spin.pause();
    } else {
      spin.play();
    }
  }, [paused]);

  return (
    // Outer div: one-time entrance (fade + scale in) — runs once on mount.
    <div
      ref={scope}
      className="absolute z-40 aspect-square"
      style={{ ...style, opacity: 0, transform: "scale(0.3)" }}
    >
      {/* Inner div: continuous infinite rotation, starts once the entrance settles */}
      <div className="hero-icon-spin h-full w-full">
        {icon?.src ? (
          <img
            src={icon.src}
            alt={icon.alt ?? ""}
            className="h-full w-full object-contain"
          />
        ) : (
          // Placeholder shape — swap via the `src` prop later.
          <div
            aria-hidden
            className={`h-full w-full ${fallbackClassName}`}
            style={fallbackStyle}
          />
        )}
      </div>
    </div>
  );
}
