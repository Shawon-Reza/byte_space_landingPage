import { useMemo, useState } from "react";
import { Link } from "react-router";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CourseSearchBar from "../searchPage/components/CourseSearchBar";
import Pagination from "../../components/ui/Pagination";
import { courses } from "../../components/common/courseCard/courses";

const PAGE_SIZE = 9;
const SORT_OPTIONS = ["Most courses", "Highest rated", "Name"];

const creators = Object.values(courses.reduce((grouped, course) => {
  const { name, href } = course.instructor ?? {};
  if (!name || !href) return grouped;

  if (!grouped[href]) {
    grouped[href] = { name, href, courses: [], categories: new Set(), ratingTotal: 0 };
  }

  const creator = grouped[href];
  creator.courses.push(course);
  creator.categories.add(course.category);
  creator.ratingTotal += course.rating ?? 0;
  return grouped;
}, {})).map((creator) => ({
  name: creator.name,
  href: creator.href,
  courses: creator.courses,
  categories: [...creator.categories],
  rating: creator.ratingTotal / creator.courses.length,
}));

const categories = [...new Set(creators.flatMap((creator) => creator.categories))].sort();

export default function CreatorDirectoryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState(SORT_OPTIONS[0]);
  const [page, setPage] = useState(1);

  const matchingCreators = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const result = creators.filter((creator) =>
      (!normalizedQuery || creator.name.toLocaleLowerCase().includes(normalizedQuery))
      && (!category || creator.categories.includes(category))
    );

    if (sort === "Highest rated") result.sort((a, b) => b.rating - a.rating);
    else if (sort === "Name") result.sort((a, b) => a.name.localeCompare(b.name));
    else result.sort((a, b) => b.courses.length - a.courses.length);
    return result;
  }, [query, category, sort]);

  const totalPages = Math.max(1, Math.ceil(matchingCreators.length / PAGE_SIZE));
  const visibleCreators = matchingCreators.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSearch = ({ query: nextQuery }) => {
    setQuery(nextQuery);
    setPage(1);
  };

  const updateCategory = (event) => {
    setCategory(event.target.value);
    setPage(1);
  };

  const updateSort = (event) => {
    setSort(event.target.value);
    setPage(1);
  };

  return (
    <div>
      <Navbar />
      <CourseSearchBar
        title="Find Your Creator"
        placeholder="Search creators"
        categories={["Creators"]}
        onSearch={handleSearch}
      />

      <div className="flex w-full flex-wrap items-center justify-between gap-3 px-6 py-5 md:px-10 lg:px-14 lg:py-10 xl:px-21 2xl:px-21">
        <label className="flex h-10 items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 text-sm text-neutral-800">
          <span>Category</span>
          <select value={category} onChange={updateCategory} className="max-w-40 bg-transparent outline-none">
            <option value="">All categories</option>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label className="flex h-10 items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 text-sm text-neutral-800">
          <span>Sort</span>
          <select value={sort} onChange={updateSort} className="bg-transparent outline-none">
            {SORT_OPTIONS.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>

      {visibleCreators.length ? (
        <main className="grid grid-cols-1 gap-4 px-6 pb-5 sm:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8 lg:px-14 lg:pb-10 xl:px-21 2xl:px-21">
          {visibleCreators.map((creator) => <CreatorCard key={creator.href} creator={creator} />)}
        </main>
      ) : (
        <p className="px-6 pb-10 text-center text-neutral-600">No creators found.</p>
      )}

      <Pagination totalPages={totalPages} page={page} onPageChange={setPage} />
      <Footer />
    </div>
  );
}

function CreatorCard({ creator }) {
  const initials = creator.name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  const cover = creator.courses[0]?.image;

  return (
    <Link
      to={creator.href}
      className="group mx-auto w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm  hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50  hover:scale-102 transition-all transform duration-700 ease-in-out p-3"
    >
      <div className="relative aspect-[7/4] overflow-hidden ">
        {cover?.src &&
          <img src={cover.src}
            alt={cover.alt ?? ""}
            loading="lazy"
            className="h-full w-full object-cover rounded-xl shadow-sm" />}

        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs text-neutral-800 backdrop-blur-sm">
          {creator.categories.slice(0, 2).join(" · ")}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="truncate text-base font-semibold text-neutral-950">{creator.name}</h2>
          <span className="shrink-0 text-sm text-neutral-600" aria-label={`Average course rating ${creator.rating.toFixed(1)} out of 5`}>
            ★ {creator.rating.toFixed(1)}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3 text-sm text-neutral-600">
          <span>{creator.courses.length} {creator.courses.length === 1 ? "course" : "courses"}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#003BE2] text-xs font-semibold text-white" aria-hidden="true">
            {initials}
          </span>
        </div>
      </div>
    </Link>
  );
}
