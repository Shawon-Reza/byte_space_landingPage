import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiSearch, FiCheck } from "react-icons/fi";

const DEFAULT_CATEGORIES = ["Courses", "Products", "Creators"];

/**
 * Transparent background: put it on any colored section (text is white).
 *
 * Props (all optional, defaults are used when missing):
 * @param {string}   [title]              heading text
 * @param {string}   [placeholder]        input placeholder
 * @param {string[]} [categories]         dropdown options; the first one is selected by default
 * @param {string}   [defaultCategory]    initially selected category
 * @param {string}   [defaultQuery]       initial input value
 * @param {(payload: {query: string, category: string}) => void} [onSearch]
 *        called on Enter / submit and when the category changes
 * @param {string}   [className]
 */
export default function CourseSearchBar({
  title = "Find Your Next Course",
  placeholder = "Search",
  categories,
  defaultCategory,
  defaultQuery = "",
  onSearch,
  className = "",
}) {
  const options =
    Array.isArray(categories) && categories.length > 0
      ? categories
      : DEFAULT_CATEGORIES;

  const [query, setQuery] = useState(defaultQuery);
  const [category, setCategory] = useState(defaultCategory ?? options[0]);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the dropdown on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.({ query: query.trim(), category });
  };

  const handleSelect = (option) => {
    setCategory(option);
    setOpen(false);
    onSearch?.({ query: query.trim(), category: option });
  };

  return (
    <section
      className={`relative  bg-[#003BE2] isolate w-full px-4 py-8 text-white sm:px-8 sm:py-12 ${className}`}
    >
      {/* ----------- bg ----------- */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[.15] [background-image:linear-gradient(to_right,#a9c1ff_1px,transparent_1px),linear-gradient(to_bottom,#a9c1ff_1px,transparent_1px)] [background-size:clamp(64px,8.35vw,83px)_clamp(64px,14.4vh,83px)]"
      />
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 sm:gap-7">
        <h2 className="text-center text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h2>

        <form
          onSubmit={handleSubmit}
          role="search"
          className="flex w-full items-center gap-2.5 sm:gap-4"
        >
          {/* Search input */}
          <label className="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-4 text-neutral-900 focus-within:ring-2 focus-within:ring-[#CCF52B] sm:h-14 sm:px-6">
            <FiSearch
              className="shrink-0 text-lg text-neutral-500 sm:text-xl"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              aria-label={placeholder}
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-neutral-500 sm:text-base [&::-webkit-search-cancel-button]:appearance-none"
            />
          </label>

          {/* Category dropdown */}
          <div ref={menuRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={open}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#CCF52B] px-4 text-sm font-medium text-neutral-900 transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-[52px] sm:gap-3 sm:px-7 sm:text-base"
            >
              <span className="max-w-[6.5rem] truncate sm:max-w-none">
                {category}
              </span>
              <FiChevronDown
                aria-hidden
                className={`text-lg transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>

            {open && (
              <ul
                role="listbox"
                className="absolute right-0 top-full z-20 mt-2 w-44 overflow-hidden rounded-2xl bg-white py-1.5 text-neutral-900 shadow-xl ring-1 ring-black/5"
              >
                {options.map((option) => (
                  <li key={option} role="option" aria-selected={option === category}>
                    <button
                      type="button"
                      onClick={() => handleSelect(option)}
                      className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none sm:text-base"
                    >
                      {option}
                      {option === category && (
                        <FiCheck className="text-[#0A3CFF]" aria-hidden />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}