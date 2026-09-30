import { FiStar } from "react-icons/fi";
import mask from "../../../assets/images/Mask Group.png"
import bg from "../../../assets/images/testimonoalTopBG.png"

export default function ManageCoursesLeft({
  src = "https://picsum.photos/seed/manage-courses/700/900",
  alt = "Creator using ByteSpace to manage courses",
  totalRevenue = {
    label: "Total Revenue",
    period: "July 1-26",
    amount: "$120.29",
    progressPercent: 62,
  },
  yearToDate = {
    label: "Year to Date",
    period: "2023",
    amount: "$1,200.38",
    badge: "128",
  },
  happyStudents = {
    label: "Happy Students",
    rating: 4.5,
    reviews: 240,
    avatars: [
      "https://i.pravatar.cc/100?img=12",
      "https://i.pravatar.cc/100?img=32",
      "https://i.pravatar.cc/100?img=47",
      "https://i.pravatar.cc/100?img=68",
    ],
    extraCount: 2000,
  },
  className = "",
}) {
  return (
    <div
      className={`relative mx-auto aspect-[7/9] w-full max-w-sm sm:max-w-md ${className}`}
    >
     

      <img
        src={src}
        alt={alt}
        className="absolute inset-0 z-20 h-full w-full rounded-3xl object-cover"
      />

      {/* Total Revenue */}
      <div className="absolute left-0 top-[10%] w-[48%] rounded-2xl bg-[#0A3CFF] px-4 py-3 text-white shadow-lg sm:rounded-3xl sm:px-5 sm:py-4">
        <p className="text-[11px] text-white/80 sm:text-xs">
          {totalRevenue.label}
        </p>
        <p className="text-[10px] text-white/60 sm:text-[11px]">
          {totalRevenue.period}
        </p>
        <p className="mt-1 text-lg font-semibold sm:text-xl">
          {totalRevenue.amount}
        </p>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/25">
          <div
            className="h-full rounded-full bg-[#CCF52B]"
            style={{ width: `${Math.min(Math.max(totalRevenue.progressPercent, 0), 100)}%` }}
          />
        </div>
      </div>

      {/* Year to Date */}
      <div className="absolute left-0 top-[31%] w-[48%] rounded-2xl bg-[#0A3CFF] px-4 py-3 text-white shadow-lg sm:rounded-3xl sm:px-5 sm:py-4">
        <p className="text-[11px] text-white/80 sm:text-xs">
          {yearToDate.label}
        </p>
        <p className="text-[10px] text-white/60 sm:text-[11px]">
          {yearToDate.period}
        </p>
        <p className="mt-1 text-lg font-semibold sm:text-xl">
          {yearToDate.amount}
        </p>
        <span className="mt-2 inline-flex items-center rounded-full bg-[#CCF52B] px-2 py-0.5 text-[10px] font-medium text-neutral-900 sm:text-xs">
          {yearToDate.badge}
        </span>
      </div>

      {/* Happy Students */}
      <div className="absolute z-30 bottom-[8%] right-0 w-[62%] rounded-2xl bg-white px-4 py-3 shadow-lg sm:rounded-3xl sm:px-5 sm:py-4">
        <p className="text-sm font-semibold text-neutral-950 sm:text-base">
          {happyStudents.label}
        </p>
        <div className="mt-0.5 flex items-center gap-1 text-xs text-neutral-600 sm:text-sm">
          <span>{happyStudents.rating}</span>
          <span className="text-neutral-400">({happyStudents.reviews})</span>
          <FiStar className="text-[#CCF52B]" aria-hidden />
        </div>

        <div className="mt-2.5 flex -space-x-2 sm:mt-3">
          {happyStudents.avatars.map((a, i) => (
            <img
              key={i}
              src={a}
              alt=""
              className="h-7 w-7 rounded-full border-2 border-white object-cover sm:h-8 sm:w-8"
            />
          ))}
          <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#CCF52B] text-[10px] font-medium text-neutral-900 sm:h-8 sm:w-8 sm:text-xs">
            {happyStudents.extraCount >= 1000
              ? `${Math.round(happyStudents.extraCount / 1000)}K+`
              : `${happyStudents.extraCount}+`}
          </span>
        </div>
      </div>


      <img src={mask} alt="icons"
        className="absolute right-[10%] top-[24%] w-[26%] z-30 scale-110"
      />


    </div>
  );
}