import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiCheck, FiShare2, FiUsers } from "react-icons/fi";
import { MdSignalCellularAlt } from "react-icons/md";
import { Link } from "react-router";
import VideoPlayer from "../../../components/ui/Videoplayer";
import CourseEnrollCard from "./CourseEnrollCard";


export const DEFAULT_COURSE_HEADER = {
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  instructor: { name: "purepearl studio", href: "/creators/purepearl-studio" },
  level: "Intermediate",
  rating: 4.8,
  reviews: 172,
  students: 199,
};

const pick = (obj, defaults) =>
  Object.fromEntries(
    Object.entries(defaults).map(([k, v]) => [k, obj?.[k] ?? v])
  );

/**
 * Transparent background (text is white), place it on any colored section.
 * @param {{ course?: object, onShare?: () => void, className?: string }} props
 */
export default function CourseDetailsHeader({ course, onShare, className = "" }) {
  const data = {
    ...pick(course, DEFAULT_COURSE_HEADER),
    instructor: pick(course?.instructor, DEFAULT_COURSE_HEADER.instructor),
  };
  const { title, subtitle, instructor, level, rating, reviews, students } = data;

  const [copied, setCopied] = useState(false);

  // Uses the parent's handler if given, otherwise native share / copy link.
  const handleShare = async () => {
    if (onShare) return onShare();
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      /* user cancelled or clipboard blocked */
    }
  };

  return (
    <header
      className={`relative w-full bg-[#003BE2] isolate py-8 text-white  sm:py-10  px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21 ${className}`}
    >
      {/* ----------- bg ----------- */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[.15] [background-image:linear-gradient(to_right,#a9c1ff_1px,transparent_1px),linear-gradient(to_bottom,#a9c1ff_1px,transparent_1px)] [background-size:clamp(64px,8.35vw,83px)_clamp(64px,14.4vh,83px)]"
      />
      <div className=" flex w-full max-w-6xl flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">

        {/* Left: info */}
        <div className="min-w-0 flex-1">
          <h1 className="text-xl font-semibold leading-tight tracking-tight sm:text-2xl lg:text-3xl">
            {title}
          </h1>
          <p className="mt-1.5 text-sm font-medium sm:text-base">{subtitle}</p>

          <p className="mt-5 text-xs sm:mt-6 sm:text-sm">
            by{" "}
            <Link
              to={instructor.href}
              className="text-[#CCF52B] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {instructor.name}
            </Link>
          </p>

          <ul className="mt-3 flex flex-wrap gap-2 sm:gap-3">
            <Pill icon={<MdSignalCellularAlt aria-hidden />}>{level}</Pill>
            <Pill icon={<FaStar className="text-[#0A3CFF]" aria-hidden />}>
              {rating} ({reviews} reviews)
            </Pill>
            <Pill icon={<FiUsers aria-hidden />}>{students} Students</Pill>
          </ul>
        </div>

        {/* Right: share */}
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex h-9 shrink-0 items-center gap-2 self-start rounded-full bg-[#CCF52B] px-4 text-sm font-medium text-neutral-900 transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
        >
          {copied ? <FiCheck aria-hidden /> : <FiShare2 aria-hidden />}
          {copied ? "Copied" : "Share"}
        </button>
      </div>

      {/* ------------- Video part --------------*/}
      <div className="flex w-full flex-col gap-8 py-10 md:flex-row md:items-start md:gap-6">
        <div className="w-full min-w-0 md:w-[60%]">
          <VideoPlayer
            src="https://res.cloudinary.com/dbmdhxmtx/video/upload/v1790624043/4495983-uhd_3840_2160_25fps_shnasn.mp4"
            poster="https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781442186/PXL_20260307_073300163.PORTRAIT_zynmss.jpg"
            title="Course preview"
            onPlay={() => console.log("started")}
            className="h-[35dvh] min-h-56 w-full shadow-lg sm:h-[45dvh] md:h-[55dvh]"
          />
        </div>
        <div className="relative w-full md:w-[40%]">

          <div className="relative mx-auto w-full max-w-sm md:absolute md:top-0 md:right-0 xl:right-10">
            <CourseEnrollCard/>
          </div>

        </div>

      </div>


    </header>
  );
}

function Pill({ icon, children }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-xs text-neutral-900 sm:px-5 sm:py-2.5 sm:text-sm">
      <span className="text-base text-neutral-800">{icon}</span>
      {children}
    </li>
  );
}

