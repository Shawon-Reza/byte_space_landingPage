import { motion } from "framer-motion";

/**
 * The 3 decorative shapes (ring, triangle, spiral) that float over the
 * card composition. Meant to be stacked on top of <SignupPromoIllustration />
 * inside a shared container (see usage note in chat).
 *
 * Each shape flies in once on mount, then spins continuously forever.
 *
 * Each shape is a placeholder box for now — pass `src` once you have the
 * real icon/image and it renders that instead of the placeholder color block.
 *
 * Props (all optional, defaults are used when missing):
 * @param {{src?: string, alt?: string}} [ring]     top shape, lime ring
 * @param {{src?: string, alt?: string}} [triangle]  bottom-left shape, lime triangle
 * @param {{src?: string, alt?: string}} [spiral]     shape near bottom-right, white spiral
 * @param {string} [className]
 */
export default function SignupPromoIcons({
  ring,
  triangle,
  spiral,
  className = "",
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidde ${className}`}>
      <Shape
        icon={ring}
      style={{ left: "12%", top: "30%", width: "21%" }}
        fallbackClassName="rounded-full border-[10px] border-[#CCF52B] bg-transparent"
        entranceDelay={0.55}
        spinDuration={7}
      />

      <Shape
        icon={triangle}
      style={{ left: "0%", top: "82%", width: "30%" }}
        fallbackClassName="bg-[#CCF52B]"
        fallbackStyle={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        entranceDelay={0.7}
        spinDuration={9}
      />

      <Shape
        icon={spiral}
      style={{ left: "80%", top: "72%", width: "21%" }}
        fallbackClassName="rounded-full border-[6px] border-dashed border-white bg-transparent"
        entranceDelay={0.85}
        spinDuration={5}
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
}) {
  return (
    // Outer div: one-time entrance (fly in, fade, settle) — runs once on mount.
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 14,
        delay: entranceDelay,
      }}
      className="absolute z-40 aspect-square"
      style={style}
    >
        
      {/* Inner div: continuous infinite rotation, starts once the entrance settles */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -360] }}
        transition={{
          delay: entranceDelay + 0.5,
          duration: spinDuration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="h-full w-full"
        style={{ transformOrigin: "center center" }}
      >
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
      </motion.div>

    </motion.div>
  );
}
