import { FiStar } from "react-icons/fi";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import mask from "../../../assets/images/Mask Group.png"
import Magnet from "../../../components/ui/Magnet";

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
  const revenueProgress = Math.min(Math.max(Number(totalRevenue.progressPercent) || 0, 0), 100);

  return (
    <div
      className={`relative mx-auto aspect-[7/9] w-full max-w-sm sm:max-w-md overflow-hidden ${className}`}
    >


      <img
        src={src}
        alt={alt}
        className="absolute inset-0 z-20 h-full w-full rounded-3xl object-cover"
      />



      {/* Total Revenue */}
      <div className="absolute left-0 top-[10%]">
        <Magnet padding={100} disabled={false} magnetStrength={15}>
          <div className=" w-[150%] rounded-2xl bg-[#0A3CFF] px-4 py-3 text-white shadow-lg sm:rounded-3xl sm:px-5 sm:py-4">
            <p className="text-[11px] text-white/80 sm:text-xs">
              {totalRevenue.label}
            </p>
            <p className="text-[10px] text-white/60 sm:text-[11px]">
              {totalRevenue.period}
            </p>
            <p className="mt-1 text-lg font-semibold sm:text-xl">
              {totalRevenue.amount}
            </p>
            <div
              className="mt-2 h-1 overflow-hidden rounded-full bg-white/25"
              role="progressbar"
              aria-label={totalRevenue.label}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={revenueProgress}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[{ label: totalRevenue.label, progress: revenueProgress }]}
                  layout="vertical"
                  margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                  barSize={4}
                >
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis type="category" dataKey="label" hide />
                  <Bar
                    dataKey="progress"
                    fill="#CCF52B"
                    radius={2}
                    isAnimationActive
                    animationDuration={1200}
                    animationEasing="ease-out"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Magnet>

      </div>

      {/* Year to Date */}
      <div className="absolute left-0 top-[37%] sm:top-[33%] ">

        <Magnet padding={100} disabled={false} magnetStrength={15}>
          <div className="w-[100%] rounded-2xl bg-[#0A3CFF] px-4 py-3 text-white shadow-lg sm:rounded-3xl sm:px-5 sm:py-4">
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
        </Magnet>
      </div>


      {/* Happy Students */}
      <div className="absolute z-30 bottom-[8%] right-0 ">
        <Magnet padding={100} disabled={false} magnetStrength={15}>
          <div className="w-[150%] rounded-2xl bg-white px-4 py-3 shadow-lg sm:rounded-3xl sm:px-5 sm:py-4">
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
        </Magnet>
      </div>

      <div className="absolute right-[10%] top-[24%] w-[26%] z-30 scale-110 lg:scale-130 "
      >
        <Magnet padding={100} disabled={false} magnetStrength={15}>
          <img src={mask} alt="icons"
            className="rotate-45"
          />
        </Magnet>
      </div>




    </div>
  );
}
