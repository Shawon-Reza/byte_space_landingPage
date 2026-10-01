const DEFAULT_TABS = ["About", "Lessons", "Reviews"];


export default function CourseDetailsTabs({
  tabs,
  value,
  onChange,
  className = "",
}) {
  const options = Array.isArray(tabs) && tabs.length > 0 ? tabs : DEFAULT_TABS;

  return (
    <div
      role="tablist"
      aria-label="Course sections"
      className={`flex flex-wrap gap-2 sm:gap-3 px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21 py-5 lg:py-7 ${className}`}
    >
      {options.map((tab) => {
        const isActive = tab === value;
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab)}
            className={`rounded-full px-4 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 sm:px-5 sm:text-base ${
              isActive
                ? "bg-[#CCF52B] text-neutral-900"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}