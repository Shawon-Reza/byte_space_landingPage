import { FaStar } from "react-icons/fa";
import { MdSignalCellularAlt } from "react-icons/md";
import { Link } from "react-router";
import CourseAvatarGroup from "./CourseAvatarGroup";



export const DEFAULT_COURSE = {
  image: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    alt: "Learn Figma from Basic",
  },
  stats: { lessons: 17, duration: "2 hours 16 mins", comments: 59 },
  title: "Learn Figma from Basic",
  instructor: { name: "purepearl studio", href: "#" },
  rating: 4.5,
  level: "Beginner",
  students: {
    avatars: [
      { src: "https://i.pravatar.cc/100?img=12", alt: "Student 1", fallback: "S1" },
      { src: "https://i.pravatar.cc/100?img=47", alt: "Student 2", fallback: "S2" },
      { src: "https://i.pravatar.cc/100?img=32", alt: "Student 3", fallback: "S3" },
      { src: "https://i.pravatar.cc/100?img=68", alt: "Student 4", fallback: "S4" },
    ],
    extraCount: 26,
  },
  price: { amount: 25, currency: "$", period: "lifetime" },
};

/** Returns obj[key] if it is not undefined/null, otherwise the default. */
const pick = (obj, defaults) =>
  Object.fromEntries(
    Object.entries(defaults).map(([key, fallback]) => [
      key,
      obj?.[key] ?? fallback,
    ])
  );

/** Merge parent data with defaults, field by field (also for nested objects). */
function mergeCourse(course = {}) {
  const d = DEFAULT_COURSE;
  return {
    title: course?.title ?? d.title,
    rating: course?.rating ?? d.rating,
    level: course?.level ?? d.level,
    image: pick(course?.image, d.image),
    stats: pick(course?.stats, d.stats),
    instructor: pick(course?.instructor, d.instructor),
    price: pick(course?.price, d.price),
    students: {
      avatars: Array.isArray(course?.students?.avatars)
        ? course.students.avatars
        : d.students.avatars,
      extraCount: course?.students?.extraCount ?? d.students.extraCount,
    },
  };
}

/**
 * @param {{ course?: Course, className?: string }} props
 */
export default function CourseCard({ course, className = "", onClick }) {
  const { image, stats, title, instructor, rating, level, students, price } =
    mergeCourse(course);

  return (
    <article
      className={`w-full max-w-[360 rounded-2xl border border-neutral-200 bg-white p-3 ${className}`}
      onClick={(event) => {
        // Links inside the card have their own destination; don't trigger the
        // card's course-details navigation when the creator name is clicked.
        if (event.target.closest("a")) return;
        onClick?.(event);
      }}
    >
      {/* Cover + stat pills */}
      <div className="relative aspect-[7/4] w-full overflow-hidden rounded-lg bg-neutral-200 max-h-[60%]">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="h-full w-full object-cover "
        />
        <ul className="absolute inset-x-1.5 bottom-1.5 flex flex-wrap gap-1 text-[8px] text-neutral-800">
          <Pill>{stats.lessons} Lessons</Pill>
          <Pill>{stats.duration}</Pill>
          <Pill>{stats.comments} Comments</Pill>
        </ul>
      </div>

      {/* Title + rating */}
      <div className="mt-3 flex items-start justify-between gap-1.5 px-0.5">
        <div className="min-w-0">
          <h3 className="truncate text-[15px] font-semibold leading-tight text-neutral-950 ">
            {title}
          </h3>
          <p className="mt-1 truncate text-[11px] text-neutral-500">
            by{" "}
            <Link
              to={instructor.href}
              onClick={(event) => event.stopPropagation()}
              className="text-[#0A3CFF] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50"
            >
              {instructor.name}
            </Link>
          </p>
        </div>

        <div
          className="flex shrink-0 items-center gap-0.5 text-[11px] text-neutral-500"
          aria-label={`Rating ${rating} out of 5`}
        >
          <span>{rating}</span>
          <FaStar className="text-neutral-400" aria-hidden />
        </div>
      </div>

      {/* Level + students */}
      <div className="mt-2.5 flex items-center gap-2 px-0.5">
        <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] text-neutral-700">
          <MdSignalCellularAlt
            className="text-xs text-neutral-500"
            aria-hidden
          />
          {level}
        </span>

        {/*  -------------------- avatar group ------------------ */}
        <CourseAvatarGroup
          avatars={students.avatars}
          extraCount={students.extraCount}
        />
      </div>

      {/* Price */}
      <p className="mt-2 px-0.5 pb-0.5">
        <span className="text-xl font-semibold text-[#0A3CFF]">
          {price.currency}
          {price.amount}
        </span>
        <span className="text-[8px] text-neutral-500">
          /{price.period}
        </span>
      </p>
    </article>
  );
}

function Pill({ children }) {
  return (
    <li className="rounded-full bg-white/70 px-2 py-0.5 backdrop-blur-md">
      {children}
    </li>
  );
}
