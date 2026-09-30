import { useEffect, useRef, useState } from "react";
import { FiPause, FiPlay, FiSearch, FiStar } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import heroBoy from "../../../assets/images/heroBoy.png";
import rainbow from "../../../assets/images/heroRainbowBG.png"
import CountUpModule from "react-countup";
import Magnet from "../../../components/ui/Magnet";
import TextType from "../../../components/ui/TextType";




const CountUp = CountUpModule.default ?? CountUpModule;

export default function HeroSection({
  heading = "Get Access to Hundreds Courses Available",
  description = "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  searchPlaceholder = "Course, topic, creator",
  onSearch,
  personImage = heroBoy,
  designCard = { title: "UI/UX Design", subtitle: "200 Courses  •  1000+ Students" },
  progressCard = { label: "Learning Progress", percent: 55 },
  studentsCard = {
    label: "Happy Students",
    rating: 4.5,
    reviews: 240,
    avatars: [
      "https://i.pravatar.cc/100?img=12",
      "https://i.pravatar.cc/100?img=32",
      "https://i.pravatar.cc/100?img=47",
      "https://i.pravatar.cc/100?img=68",
      "https://i.pravatar.cc/100?img=47",
      "https://i.pravatar.cc/100?img=68",
    ],
    extraCount: 2000,
  },
  className = "",
  iconsPaused = false,
  onToggleIcons,
}) {
  const [query, setQuery] = useState("");
  const [showIconHint, setShowIconHint] = useState(false);
  const iconControlRef = useRef(null);
  const percent = Math.min(Math.max(Number(progressCard.percent) || 0, 0), 100);

  useEffect(() => {
    const control = iconControlRef.current;
    if (!control) return;

    let wasVisible = false;
    let hideTimer;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !wasVisible) {
        wasVisible = true;
        setShowIconHint(true);
        window.clearTimeout(hideTimer);
        hideTimer = window.setTimeout(() => setShowIconHint(false), 6000);
      } else if (!entry.isIntersecting) {
        wasVisible = false;
      }
    }, { threshold: 0.9 });

    observer.observe(control);
    return () => {
      observer.disconnect();
      window.clearTimeout(hideTimer);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <section
      className={`relative isolate flex h-[calc(100vh-65px)] w-full flex-col items-center overflow-hidden bg-[#063be5] px-4 pb-0 pt-10 text-center text-white sm:px-8 sm:pt-12 lg:min-h-0 lg:px-10 lg:pt-8 ${className}`}
    >
      {/*  ----------- bg --------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[.14] [background-image:linear-gradient(to_right,#a9c1ff_1px,transparent_1px),linear-gradient(to_bottom,#a9c1ff_1px,transparent_1px)] [background-size:clamp(56px,8.35vw,86px)_clamp(56px,13.25vh,86px)]"
      />

      {/* ----------- Main Contents ---------- */}
      <div className="z-20 mx-auto w-full max-w-5xl">
        <h1 className="mx-auto  text-[clamp(2rem,5.1vw,3.25rem)] font-bold leading-[1.12] tracking-[-0.035em]">
          {heading}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-white/90 sm:mt-5 sm:text-sm">
          {description}
        </p>

        <form
          onSubmit={handleSubmit}
          role="search"
          className="mx-auto mt-7 flex w-full max-w-[415px] items-center gap-2.5 sm:mt-10"
        >
          <label className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-4 text-neutral-900 focus-within:ring-2 focus-within:ring-[#ceff00] sm:h-12 sm:px-5">
            <FiSearch className="shrink-0 text-base text-neutral-500" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className="w-full min-w-0 bg-transparent text-xs outline-none placeholder:text-neutral-400 sm:text-sm"
            />
          </label>
          <button
            type="submit"
            className="h-11 shrink-0 rounded-full bg-[#ceff00] px-5 text-xs font-semibold text-neutral-900 transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95 sm:h-12 sm:px-6 sm:text-sm"
          >
            Search
          </button>
          <div ref={iconControlRef} className="relative shrink-0">
            <AnimatePresence>
              {showIconHint && (
                <motion.span
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-full left-1/2 z-30 mb-3 w-max -translate-x-1/2 rounded-lg bg-whit px-3 py-2 text-[10px] font-medium  shadow-lg sm:text-xs text-white"
                >

                  <TextType
                    text={["Click to stop or start the rotating icons"]}
                    typingSpeed={35}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    texts={["Click to stop or strat the rotating icons", ""]}
                    deletingSpeed={50}
                    variableSpeedEnabled={false}
                    variableSpeedMin={60}
                    variableSpeedMax={120}
                    cursorBlinkDuration={0.5}
                  />
                  <span aria-hidden="true" className="absolute left-1/2 top-full -translate-x-1/2 border-[5px] border-transparent border-t-white" />
                </motion.span>
              )}
            </AnimatePresence>
            <button
              type="button"
              onClick={onToggleIcons}
              aria-pressed={iconsPaused}
              aria-label={iconsPaused ? "Resume hero icon animations" : "Pause hero icon animations"}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/70 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ceff00] active:scale-95 sm:h-12 sm:w-12"
            >
              {iconsPaused ? <FiPlay aria-hidden /> : <FiPause aria-hidden />}
            </button>
          </div>
        </form>
      </div>
      {/*  --------- bottom contents --------- */}

      <div>
        {/* --------- bottom rainbow ---------- */}
        <img src={rainbow} alt="rainbow"
          className="absolute -bottom-13 left-1/2 -translate-x-1/2 "
        />
        {/* --- bottom boy ---- */}
        <img
          src={personImage}
          alt="Person learning with a laptop"
          className="absolute bottom-0 z-10  left-1/2 -translate-x-1/2 max-h-[420px]"
        />

        {/* ---------- Happy Student ----------- */}
        <div className="absolute bottom-15 left-[10%] z-20 lg:left-[25%] 2xl:left-[30%]">
          <Magnet padding={100} disabled={false} magnetStrength={10}>
            <div className="rounded-xl bg-white px-3 py-2.5 text-left text-neutral-900 shadow-lg sm:rounded-2xl sm:px-4 sm:py-3">
              <p className="text-[11px] font-semibold sm:text-xs">{studentsCard.label}</p>
              <div className="mt-0.5 flex items-center gap-1 text-[9px] text-neutral-600 sm:text-[10px]">
                <span>{studentsCard.rating}</span>
                <span className="text-neutral-400">({studentsCard.reviews})</span>
                <FiStar className="fill-[#ceff00] text-[#9dbb00]" aria-hidden />
              </div>
              <div className="mt-2 flex -space-x-2">
                {studentsCard.avatars.map((avatar, index) => (
                  <img key={index} src={avatar} alt="" className="h-6 w-6 rounded-full border-2 border-white object-cover sm:h-7 sm:w-7" />
                ))}
                <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#ceff00] text-[8px] font-medium text-neutral-900 sm:h-7 sm:w-7 sm:text-[9px]">
                  {studentsCard.extraCount >= 1000
                    ? `${Math.round(studentsCard.extraCount / 1000)}K+`
                    : `${studentsCard.extraCount}+`}
                </span>
              </div>
            </div>
          </Magnet>
        </div>

        {/*----------- Percentage ----------- */}
        <div className="absolute bottom-[30%] right-[15%] z-20 min-w-[100px] w-[12%] rounded-xl lg:right-[30%] md:right-[25%] md:min-w-[150px] 2xl:right-[30%] 2xl:bottom-50 ">
          <Magnet padding={100} disabled={false} magnetStrength={10}>
            <div className="rounded-xl bg-white px-3 py-2.5 text-left text-neutral-900 sm:rounded-2xl sm:px-4 sm:py-3">
              <p className="text-[9px] text-neutral-600 sm:text-[10px]">{progressCard.label}</p>
              <p className="mt-1 text-2xl font-bold leading-none sm:text-3xl">
                <CountUp end={percent} enableScrollSpy scrollSpyOnce={false} />
                %
              </p>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-100">
                <div className="h-full rounded-full bg-[#ceff00] font-extrabold" style={{ width: `${percent}%` }} />
              </div>
            </div>
          </Magnet>
        </div>

        {/*  ----------- UI/UX ----------- */}



        <div className="absolute 2xl:left-[28%] md:left-[15%] lg:left-[25%] left-[2%] 2xl:bottom-60 bottom-[43%] z-20">
          <Magnet padding={100} disabled={false} magnetStrength={10}>
            <div className="rounded-xl bg-white px-3 py-2.5 text-left text-neutral-900 shadow-lg sm:rounded-2xl sm:px-4 sm:py-3">
              <p className="text-[11px] font-semibold sm:text-xs">{designCard.title}</p>
              <p className="mt-0.5 text-[9px] text-neutral-500 sm:text-[10px]">{designCard.subtitle}</p>
            </div>
          </Magnet>
        </div>



      </div>


    </section>
  );
}
