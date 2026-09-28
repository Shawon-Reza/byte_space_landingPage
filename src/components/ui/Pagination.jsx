import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const range = (from, to) =>
  Array.from({ length: Math.max(to - from + 1, 0) }, (_, i) => from + i);

/** Builds [1, 2, 3, "…", 10] style lists. Shows every page when there are few. */
function getPages(total, current, siblings) {
  const maxWithoutDots = siblings * 2 + 5;
  if (total <= maxWithoutDots) return range(1, total);

  const left = Math.max(current - siblings, 1);
  const right = Math.min(current + siblings, total);
  const showLeftDots = left > 2;
  const showRightDots = right < total - 1;
  const edgeCount = 3 + siblings * 2;

  if (!showLeftDots && showRightDots) {
    return [...range(1, edgeCount), "…", total];
  }
  if (showLeftDots && !showRightDots) {
    return [1, "…", ...range(total - edgeCount + 1, total)];
  }
  return [1, "…", ...range(left, right), "…", total];
}

/**
 * Props (all optional):
 * @param {number} [totalPages=5]
 * @param {number} [page]             controlled current page (1-based)
 * @param {number} [defaultPage=1]    initial page when uncontrolled
 * @param {number} [siblingCount=1]   pages shown on each side of the current one
 * @param {(page: number) => void} [onPageChange]
 * @param {string} [className]
 */
export default function Pagination({
  totalPages = 5,
  page,
  defaultPage = 1,
  siblingCount = 1,
  onPageChange,
  className = "",
}) {
  const [internalPage, setInternalPage] = useState(defaultPage);
  const total = Math.max(Number(totalPages) || 1, 1);
  const current = Math.min(Math.max(page ?? internalPage, 1), total);

  const goTo = (next) => {
    const value = Math.min(Math.max(next, 1), total);
    if (value === current) return;
    if (page === undefined) setInternalPage(value);
    onPageChange?.(value);
  };

  const pages = getPages(total, current, siblingCount);

  const arrowClass =
    "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-lg text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white sm:h-11 sm:w-11 sm:text-xl";

  return (
    <nav
      aria-label="Pagination"
      className={`flex w-full items-center justify-center px-4 pt-5 pb-10 ${className}`}
    >
      <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        <li>
          <button
            type="button"
            aria-label="Previous page"
            onClick={() => goTo(current - 1)}
            disabled={current === 1}
            className={arrowClass}
          >
            <FiChevronLeft aria-hidden />
          </button>
        </li>

        {pages.map((item, i) =>
          item === "…" ? (
            <li
              key={`dots-${i}`}
              aria-hidden
              className="px-1 text-sm text-neutral-400 sm:px-2 sm:text-base"
            >
              …
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                onClick={() => goTo(item)}
                aria-label={`Page ${item}`}
                aria-current={item === current ? "page" : undefined}
                className={`min-w-8 rounded-full px-2 py-1.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 sm:min-w-10 sm:px-3 sm:text-base ${
                  item === current
                    ? "text-neutral-300"
                    : "text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                {item}
              </button>
            </li>
          )
        )}

        <li>
          <button
            type="button"
            aria-label="Next page"
            onClick={() => goTo(current + 1)}
            disabled={current === total}
            className={arrowClass}
          >
            <FiChevronRight aria-hidden />
          </button>
        </li>
      </ul>
    </nav>
  );
}