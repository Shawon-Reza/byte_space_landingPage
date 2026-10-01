import {
  FaPencilRuler,
  FaLaptopCode,
  FaLaptop,
  FaBuilding,
  FaBullhorn,
  FaCamera,
} from "react-icons/fa";


const DEFAULT_ICONS = [FaPencilRuler, FaLaptopCode, FaLaptop, FaBuilding, FaBullhorn, FaCamera];

export const DEFAULT_CATEGORIES_DATA = {
  heading: "Explore Diverse Learning Paths at Bytespace",
  description:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
  categories: [
    { label: "Design", icon: FaPencilRuler },
    { label: "Development", icon: FaLaptopCode },
    { label: "IT & Software", icon: FaLaptop },
    { label: "Business", icon: FaBuilding },
    { label: "Marketing", icon: FaBullhorn },
    { label: "Photography", icon: FaCamera },
  ],
};

/**
 * @param {{ data?: object, onCategoryClick?: (category: object, index: number) => void, className?: string }} props
 */
export default function CategoriesSection({
  data,
  onCategoryClick,
  className = "",
}) {
  const d = DEFAULT_CATEGORIES_DATA;
  const heading = data?.heading ?? d.heading;
  const description = data?.description ?? d.description;
  const categories = Array.isArray(data?.categories)
    ? data.categories
    : d.categories;

  return (
    <section
      className={`w-full px-4 py-10 text-center sm:px-8 sm:py-14 lg:px-16 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-2xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-3xl">
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-6xl text-sm leading-relaxed text-neutral-500 sm:mt-4 sm:text-base">
          {description}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {categories.map((category, i) => {
            const Icon = category.icon ?? DEFAULT_ICONS[i % DEFAULT_ICONS.length];
            return (
              <button
                key={category.label ?? i}
                type="button"
                onClick={() => onCategoryClick?.(category, i)}
                className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-6 transition hover:border-neutral-300 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 sm:gap-4 sm:py-7  cursor-pointer hover:scale-102 transition-all transform duration-700 ease-in-out"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CCF52B] text-lg text-neutral-900 sm:h-14 sm:w-14 sm:text-xl hover:scale-102 transition-all transform duration-500 ease-in-out">
                  <Icon aria-hidden />
                </span>
                <span className="text-sm font-medium text-neutral-900 sm:text-base hover:scale-102 transition-all transform duration-500 ease-in-out">
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}