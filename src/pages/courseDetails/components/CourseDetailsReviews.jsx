import { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";

/**
 * Shape of the `data` prop (every field optional, missing ones use defaults):
 * {
 *   heading: string,
 *   subtext: string,
 *   summary: { average: number, breakdown: {stars: 5|4|3|2|1, count: number}[] },
 *   reviews: {
 *     name: string, role: string, timeAgo: string, rating: number,
 *     text: string, avatar?: string,
 *   }[],
 * }
 */
export const DEFAULT_REVIEWS_DATA = {
  heading: "What Learners Are Saying",
  subtext:
    "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
  summary: {
    average: 4.7,
    breakdown: [
      { stars: 5, count: 720 },
      { stars: 4, count: 120 },
      { stars: 3, count: 21 },
      { stars: 2, count: 12 },
      { stars: 1, count: 16 },
    ],
  },
  reviews: [
    {
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      timeAgo: "a year ago",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=12",
      text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      timeAgo: "a year ago",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=33",
      text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      timeAgo: "a year ago",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=52",
      text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      timeAgo: "a year ago",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=48",
      text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ],
};

const pick = (obj, defaults) =>
  Object.fromEntries(
    Object.entries(defaults).map(([k, v]) => [k, obj?.[k] ?? v])
  );

const FILTERS = ["All rating", 5, 4, 3, 2, 1];

/**
 * @param {{ data?: object, className?: string }} props
 */
export default function CourseDetailsReviews({ data, className = "" }) {
  const d = DEFAULT_REVIEWS_DATA;
  const heading = data?.heading ?? d.heading;
  const subtext = data?.subtext ?? d.subtext;
  const summary = {
    average: data?.summary?.average ?? d.summary.average,
    breakdown: Array.isArray(data?.summary?.breakdown)
      ? data.summary.breakdown
      : d.summary.breakdown,
  };
  const reviews = Array.isArray(data?.reviews) ? data.reviews : d.reviews;

  const [filter, setFilter] = useState("All rating");

  const totalCount = summary.breakdown.reduce((sum, row) => sum + row.count, 0);
  const maxCount = Math.max(...summary.breakdown.map((row) => row.count), 1);

  const filteredReviews = useMemo(
    () =>
      filter === "All rating"
        ? reviews
        : reviews.filter((r) => Math.round(r.rating) === filter),
    [reviews, filter]
  );

  return (
    <div className={`w-full max-w-4xl pb-5 lg:pb-10 px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21 ${className}`}>
      {/* Heading */}
      <section>
        <h2 className="text-lg font-semibold text-neutral-950 sm:text-xl">
          {heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {subtext}
        </p>
      </section>

      {/* Rating summary */}
      <div className="mt-5 flex flex-col gap-4 rounded-2xl border border-neutral-200 p-4 sm:mt-6 sm:flex-row sm:items-center sm:gap-6 sm:p-5">
        <div className="flex aspect-square w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#CCF52B] sm:w-24">
          <span className="text-[10px] font-medium text-neutral-800 sm:text-xs">
            Ratings
          </span>
          <span className="text-2xl font-bold text-neutral-950 sm:text-3xl">
            {summary.average}
          </span>
        </div>

        <ul className="flex-1 space-y-1.5 sm:space-y-2">
          {summary.breakdown.map((row) => (
            <li key={row.stars} className="flex items-center gap-2 sm:gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200">
                <div
                  className="h-full rounded-full bg-[#CCF52B]"
                  style={{ width: `${(row.count / maxCount) * 100}%` }}
                />
              </div>
              <Stars rating={row.stars} size="text-[10px] sm:text-xs" />
              <span className="w-8 shrink-0 text-right text-xs text-neutral-500 sm:text-sm">
                {row.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Individual reviews */}
      <section className="mt-8 sm:mt-10">
        <h3 className="text-sm font-semibold text-neutral-950 sm:text-base">
          Individual Reviews:
        </h3>

        <div
          role="tablist"
          aria-label="Filter reviews by rating"
          className="mt-3 flex flex-wrap gap-2"
        >
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                className={`inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-full px-3 text-xs font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 sm:h-9 sm:px-3.5 sm:text-sm ${
                  active
                    ? "bg-[#CCF52B] text-neutral-900"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {f !== "All rating" && (
                  <FaStar className="text-[10px] sm:text-xs" aria-hidden />
                )}
                {f}
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          {totalCount ? `${filteredReviews.length} reviews shown` : ""}
        </p>

        <ul className="mt-4 space-y-4 sm:space-y-5">
          {filteredReviews.map((review, i) => (
            <li
              key={i}
              className="rounded-2xl border border-neutral-200 p-4 sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-neutral-950 sm:text-base">
                      {review.name}
                    </p>
                    <p className="text-xs text-neutral-500 sm:text-sm">
                      {review.role}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-xs text-neutral-400 sm:text-sm">
                  {review.timeAgo}
                </span>
              </div>

              <Stars
                rating={review.rating}
                size="text-xs sm:text-sm"
                className="mt-3"
              />

              <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
                {review.text}
              </p>
            </li>
          ))}

          {filteredReviews.length === 0 && (
            <li className="rounded-2xl border border-dashed border-neutral-300 p-6 text-center text-sm text-neutral-500">
              No reviews for this rating yet.
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}

function Stars({ rating, size = "text-sm", className = "" }) {
  const rounded = Math.round(rating);
  return (
    <div
      className={`flex items-center gap-0.5 text-[#CCF52B] ${size} ${className}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          aria-hidden
          className={i < rounded ? "text-[#CCF52B]" : "text-neutral-200"}
        />
      ))}
    </div>
  );
}