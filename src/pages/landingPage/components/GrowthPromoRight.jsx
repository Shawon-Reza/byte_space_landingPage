import CourseCard from "../../../components/common/courseCard/CourseCard";
import icon from "../../../assets/images/Mask Group.png";
import studentImage from "../../../assets/images/laptopBoy.png";
import CountUp from "react-countup";
import Magnet from "../../../components/ui/Magnet";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const CountUpComponent = CountUp?.default ?? CountUp;

export default function GrowthPromoRight({
    src = studentImage,
    alt = "Student using ByteSpace, with a course preview card and progress tracker",
    course,
    progressPercent = 55,
    progressLabel = "Learning Progress",
    className = "",
}) {
    const percent = Math.min(Math.max(Number(progressPercent) || 0, 0), 100);

    return (
        <div className={`relative isolate mx-auto aspect-[1.05] w-full ${className}`}>
            {/* Course preview sits behind the student on the left. */}
            <div className="absolute left-0 sm:-left-10 top-[7%] z-10 w-[64%] sm:top-[8%] sm:w-[66%]">

                <Magnet padding={100} disabled={false} magnetStrength={10}>
                    <CourseCard
                        course={course}
                        className="max-w-none rounded-2xl p-2 shadow-md sm:rounded-3xl sm:p-3"
                    />
                </Magnet>

            </div>

            {/* The transparent artwork keeps the original backdrop visible. */}
            <img
                src={src}
                alt={alt}
                className="absolute inset-x-0 bottom-0 z-20 h-full w-full object-contain object-bottom"
            />




            {/* Live learning-progress card */}
            <div className="absolute right-20 sm:-right-10 top-[44%] z-30   sm:top-[43%] sm:w-[58%] sm:rounded-3xl sm:px-5 sm:py-4">

                <Magnet padding={100} disabled={false} magnetStrength={10}>

                    <div className=" bg-white rounded-2xl px-3 py-3  w-[150%]">
                        <p className="text-[10px] font-medium text-neutral-700 sm:text-sm">
                            {progressLabel}
                        </p>
                        <p className="mt-1 text-3xl font-semibold leading-none text-neutral-900 sm:mt-3 sm:text-5xl">
                            <CountUpComponent
                                end={percent}
                                suffix="%"
                                enableScrollSpy
                                scrollSpyOnce={false}
                            />
                        </p>
                        <div
                            className="mt-3 h-1.5 overflow-hidden rounded-full bg-neutral-100 sm:mt-4 sm:h-2"
                            role="progressbar"
                            aria-label={progressLabel}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-valuenow={percent}
                        >
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={[{ label: progressLabel, progress: percent }]}
                                    layout="vertical"
                                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    barSize={8}
                                >
                                    <XAxis type="number" domain={[0, 100]} hide />
                                    <YAxis type="category" dataKey="label" hide />
                                    <Bar
                                        dataKey="progress"
                                        fill="#CCF52B"
                                        radius={4}
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

            {/* Decorative spiral */}

            <div className="absolute right-[5%] top-[18%] z-30 w-[23%] object-contain sm:right-[4%] sm:top-[17%] sm:w-[24%] lg:scale-150">
                <Magnet padding={100} disabled={false} magnetStrength={10}>
                    <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        className=""
                    />
                </Magnet>

            </div>

        </div>
    );
}
