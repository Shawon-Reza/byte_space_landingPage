import { FiBookOpen, FiVideo, FiAward, FiPhoneCall } from "react-icons/fi";
import { useNavigate } from 'react-router';


export const DEFAULT_ENROLL_CARD = {
  lessonsCount: 112,
  totalDuration: "24 hours",
  lessons: [
    { title: "Introduction to Digital Assets", duration: "12 mins" },
    { title: "Design Principles for Impacts", duration: "21 mins" },
    { title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ],
  moreCount: 99,
  ctaText: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  price: { amount: 25, currency: "$", period: "lifetime" },
  enrollLabel: "Enroll Now",
  includes: [
    "Learning Resources",
    "Quality Lesson Videos",
    "Certificate of Completion",
    "Private Consultation",
  ],
  instructor: {
    name: "PurePearl Studio",
    role: "Professional Creator",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  footerText: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  profileLabel: "See Full Profile",
};

const INCLUDE_ICONS = [FiBookOpen, FiVideo, FiAward, FiPhoneCall];

const pick = (obj, defaults) =>
  Object.fromEntries(
    Object.entries(defaults).map(([k, v]) => [k, obj?.[k] ?? v])
  );


export default function CourseEnrollCard({
  data,
  onEnroll,
  onSeeProfile,
  className = "",
}) {
  const d = DEFAULT_ENROLL_CARD;
  const lessonsCount = data?.lessonsCount ?? d.lessonsCount;
  const totalDuration = data?.totalDuration ?? d.totalDuration;
  const lessons = Array.isArray(data?.lessons) ? data.lessons : d.lessons;
  const moreCount = data?.moreCount ?? d.moreCount;
  const ctaText = data?.ctaText ?? d.ctaText;
  const price = pick(data?.price, d.price);
  const enrollLabel = data?.enrollLabel ?? d.enrollLabel;
  const includes = Array.isArray(data?.includes) ? data.includes : d.includes;
  const instructor = pick(data?.instructor, d.instructor);
  const footerText = data?.footerText ?? d.footerText;
  const profileLabel = data?.profileLabel ?? d.profileLabel;
  const navigate = useNavigate();

  return (
    <aside
      className={`w-full max-w-sm overflow-hidden rounded-3xl border-2 shadow-md bg-white ${className}`}
    >
      <div className="">
        {/* Top: lessons + price + enroll */}
        <div className="p-5 sm:p-6">
          <h2 className="text-base font-semibold text-neutral-950 sm:text-lg">
            {lessonsCount} Lessons ({totalDuration})
          </h2>

          <ol className="mt-4 space-y-3 sm:mt-5">
            {lessons.map((lesson, i) => (
              <li key={i} className="flex items-start justify-between gap-3">
                <span className="flex min-w-0 items-start gap-2 text-sm text-neutral-900 sm:text-base">
                  <span className="shrink-0 text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{lesson.title}</span>
                </span>
                <span className="shrink-0 text-xs text-[#0A3CFF] sm:text-sm">
                  {lesson.duration}
                </span>
              </li>
            ))}
          </ol>

          {moreCount > 0 && (
            <p className="mt-3 text-sm text-neutral-500">
              {moreCount} more videos
            </p>
          )}

          <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:mt-6 sm:text-base">
            {ctaText}
          </p>

          <p className="mt-4 sm:mt-5">
            <span className="text-3xl font-bold text-[#0A3CFF] sm:text-4xl">
              {price.currency}
              {price.amount}
            </span>
            <span className="text-sm text-neutral-500 sm:text-base">
              /{price.period}
            </span>
          </p>

          <button
            type="button"
            onClick={onEnroll}
            className="mt-4 w-full rounded-full bg-[#CCF52B] py-3 text-sm font-semibold text-neutral-900 transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 active:scale-[0.99] sm:mt-5 sm:text-base"
          >
            {enrollLabel}
          </button>

          <h3 className="mt-5 text-sm font-semibold text-neutral-950 sm:mt-6 sm:text-base">
            This course include
          </h3>
        </div>

        {/* Bottom: includes + instructor */}
        <div className="rounded-t-3xl bg-neutral-50 p-5 sm:p-6">
          <ul className="space-y-3">
            {includes.map((item, i) => {
              const Icon = INCLUDE_ICONS[i % INCLUDE_ICONS.length];
              return (
                <li
                  key={i}
                  className="flex items-center gap-2.5 text-sm text-neutral-700 sm:text-base"
                >
                  <Icon className="shrink-0 text-[#0A3CFF]" aria-hidden />
                  {item}
                </li>
              );
            })}
          </ul>

          <hr className="my-4 border-neutral-200 sm:my-5" />

          <div className="flex items-center gap-3">
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="h-11 w-11 shrink-0 rounded-full object-cover sm:h-12 sm:w-12"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-neutral-950 sm:text-base">
                {instructor.name}
              </p>
              <p className="text-xs text-neutral-500 sm:text-sm">
                {instructor.role}
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            {footerText}
          </p>

          <button
            type="button"
            onClick={() => {
              navigate("/creators/purepearl-studio");
              window.scrollTo(0, 0);
            }}
            className="mt-4 w-full rounded-full border border-neutral-300 bg-white py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 sm:text-base cursor-pointer"
          >
            {profileLabel}
          </button>
        </div>
      </div>
    </aside>
  );
}