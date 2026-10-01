import { TbWaveSine, TbLoader, TbBolt, TbAsterisk, TbFingerprint } from "react-icons/tb";
import Marquee from "../../../components/ui/Marquee";

const DEFAULT_LOGOS = [
  { label: "Logoipsum", icon: TbWaveSine },
  { label: "Logoipsum", icon: TbLoader },
  { label: "Logoipsum", icon: TbBolt },
  { label: "Logoipsum", icon: TbAsterisk },
  { label: "Logoipsum", icon: TbFingerprint },
];

export default function LogosMarquee({ logos, className = "" }) {
  const items = Array.isArray(logos) && logos.length > 0 ? logos : DEFAULT_LOGOS;

  return (
    <div
      className={`relative w-full overflow-hidden bg-neutral-100 px-4 py-8 sm:px-8 sm:py-10 ${className}`}
    >
      <Marquee pauseOnHover className="[--duration:25s] gap-5">
        {items.map((logo, i) => (
          <LogoItem key={i} {...logo} />
        ))}
      </Marquee>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-neutral-100 to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-neutral-100 to-transparent sm:w-24" />
    </div>
  );
}

function LogoItem({ label, icon: Icon, src, alt }) {
  return (
    <div className="flex shrink-0 items-center gap-2 sm:gap-2.5 px-5">
      {src ? (
        <img src={src} alt={alt ?? label} className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
      ) : Icon ? (
        <Icon className="text-xl text-neutral-500 sm:text-2xl" aria-hidden />
      ) : null}
      <span className="text-base font-extrabold text-neutral-500 sm:text-xl">
        {label}
      </span>
    </div>
  );
}