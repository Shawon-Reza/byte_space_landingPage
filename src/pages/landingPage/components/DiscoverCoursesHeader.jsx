import { useState } from "react";

/**
 * Shape of the `data` prop (every field optional, missing ones use defaults):
 * {
 *   heading: string,
 *   description: string,
 *   filters: string[],
 * }
 */
export const DEFAULT_DISCOVER_DATA = {
  heading: "Discover Your Passion, Build Your Skills",
  description:
    "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
  filters: [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Creative Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    
    "Digital Illustration",
    "Film & Video",
    ,
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Web Development",
    "Data Science",
    "Cooking",
    "Crafts"
  ],
};


export default function DiscoverCoursesHeader({
  data,
  value,
  defaultValue,
  onChange,
  visibleCount,
  onMoreClick,
  className = "",
}) {
  const d = DEFAULT_DISCOVER_DATA;
  const heading = data?.heading ?? d.heading;
  const description = data?.description ?? d.description;
  const filters = Array.isArray(data?.filters) ? data.filters : d.filters;

  const [internalValue, setInternalValue] = useState(
    defaultValue ?? filters[0]
  );
  const activeFilter = value ?? internalValue;

  const [expanded, setExpanded] = useState(false);
  const hasMore =
    typeof visibleCount === "number" && visibleCount < filters.length;
  const shownFilters =
    hasMore && !expanded ? filters.slice(0, visibleCount) : filters;

  const handleSelect = (filter) => {
    if (value === undefined) setInternalValue(filter);
    onChange?.(filter);
  };

  const handleMore = () => {
    if (onMoreClick) return onMoreClick();
    setExpanded(true);
  };

  return (
    <section
      className={`w-full px-4 py-10 text-center sm:px-8 sm:py-14 lg:px-16 ${className}`}
    >
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-5xl text-sm leading-relaxed text-neutral-500 sm:mt-4 sm:text-base">
          {description}
        </p>

        <div
          role="tablist"
          aria-label="Course categories"
          className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3"
        >
          {shownFilters.map((filter) => {
            const active = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleSelect(filter)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50  ${
                  active
                    ? "bg-[#CCF52B] text-neutral-900"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {filter}
              </button>
            );
          })}

          {hasMore && !expanded && (
            <button
              type="button"
              onClick={handleMore}
              className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-[#0A3CFF] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 sm:text-base"
            >
              + More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}