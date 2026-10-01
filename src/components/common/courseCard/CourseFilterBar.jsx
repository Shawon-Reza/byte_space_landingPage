import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { MdSignalCellularAlt, MdSort } from "react-icons/md";
import { TbCategory } from "react-icons/tb";

const DEFAULT_LEVELS = ["Beginner", "Intermediate", "Advanced"];
const DEFAULT_CATEGORIES = ["Design", "Development", "Marketing", "Business"];
const DEFAULT_SORTS = ["Most relevant", "Newest", "Highest rated", "Price: low to high"];

/**
 * Props (all optional, defaults are used when missing):
 * @param {string[]} [levels]
 * @param {string[]} [categories]
 * @param {string[]} [sortOptions]          first one is the default sort
 * @param {{level?: string|null, category?: string|null, sort?: string}} [defaultValues]
 * @param {(v: {level: string|null, category: string|null, sort: string}) => void} [onChange]
 * @param {() => void} [onFilterClick]      "Filter" button (e.g. open a filter drawer)
 * @param {string} [className]
 */
export default function CourseFilterBar({
  levels,
  categories,
  sortOptions,
  defaultValues,
  onChange,
  onFilterClick,
  className = "",
}) {
  const levelOptions = nonEmpty(levels, DEFAULT_LEVELS);
  const categoryOptions = nonEmpty(categories, DEFAULT_CATEGORIES);
  const sorts = nonEmpty(sortOptions, DEFAULT_SORTS);

  const [values, setValues] = useState({
    level: defaultValues?.level ?? null,
    category: defaultValues?.category ?? null,
    sort: defaultValues?.sort ?? sorts[0],
  });

  const update = (key, value) => {
    const next = { ...values, [key]: value };
    setValues(next);
    onChange?.(next);
  };

  return (
    <div
      className={`flex w-full flex-wrap items-center justify-between gap-3 py-5 lg:py-10 px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21 ${className}`}
    >
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <Pill onClick={onFilterClick}>
          <FaFilter className="text-base" aria-hidden />
          Filter
        </Pill>

        <Dropdown
          icon={<MdSignalCellularAlt className="text-lg" aria-hidden />}
          label="Level"
          options={levelOptions}
          value={values.level}
          onSelect={(v) => update("level", v === values.level ? null : v)}
        />

        <Dropdown
          icon={<TbCategory className="text-lg" aria-hidden />}
          label="Category"
          options={categoryOptions}
          value={values.category}
          onSelect={(v) => update("category", v === values.category ? null : v)}
        />
      </div>

      <Dropdown
        align="right"
        icon={<MdSort className="text-lg" aria-hidden />}
        label={sorts[0]}
        options={sorts}
        value={values.sort}
        showValue
        onSelect={(v) => update("sort", v)}
      />
    </div>
  );
}

/* ---------- helpers ---------- */

const nonEmpty = (arr, fallback) =>
  Array.isArray(arr) && arr.length > 0 ? arr : fallback;

function Pill({ children, active = false, className = "", ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-full border bg-white px-3 text-xs transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 sm:h-10 sm:px-4 sm:text-sm ${
        active
          ? "border-[#0A3CFF] text-[#0A3CFF]"
          : "border-neutral-300 text-neutral-800"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Dropdown({
  icon,
  label,
  options,
  value,
  onSelect,
  align = "left",
  showValue = false, // true: button always shows the selected value (used for sort)
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const text = value ? value : label;
  const active = !showValue && Boolean(value);

  return (
    <div ref={ref} className="relative">
      <Pill
        active={active}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {icon}
        <span className="max-w-[9rem] truncate">{text}</span>
      </Pill>

      {open && (
        <ul
          role="listbox"
          className={`absolute top-full z-20 mt-2 w-48 overflow-hidden rounded-2xl bg-white py-1.5 text-neutral-900 shadow-xl ring-1 ring-black/5 ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {options.map((option) => (
            <li key={option} role="option" aria-selected={option === value}>
              <button
                type="button"
                onClick={() => {
                  onSelect(option);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none"
              >
                {option}
                {option === value && (
                  <FiCheck className="text-[#0A3CFF]" aria-hidden />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}