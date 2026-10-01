import { FiVideo } from "react-icons/fi";
import CountUpModule from "react-countup";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const CountUp = CountUpModule?.default ?? CountUpModule;

export const DEFAULT_LESSONS_DATA = {
  intro: {
    heading: "Explore the Modules",
    text: "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
  },
  lessonList: {
    heading: "Lesson List",
    modules: [
      {
        title: "Module 1: Introduction to Digital Assets",
        description:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        title: "Module 2: Design Principles for Impact",
        description:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        title: "Module 4: User-Centric Design Strategies",
        description:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        title: "Module 5: Interactive Media and Engagement",
        description:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        title: "Module 6: Project Showcase and Critique",
        description:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        description:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
  },
  lessonContent: {
    heading: "Lesson Content",
    text: "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
  },
  progress: {
    heading: "Lesson Progress Tracking",
    text: "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
    percent: 55,
  },
};

const pick = (obj, defaults) =>
  Object.fromEntries(
    Object.entries(defaults).map(([k, v]) => [k, obj?.[k] ?? v])
  );

/**
 * @param {{ data?: object, onModuleClick?: (module: object, index: number) => void, className?: string }} props
 */
export default function CourseDetailsLessons({
  data,
  onModuleClick,
  className = "",
}) {
  const d = DEFAULT_LESSONS_DATA;
  const intro = pick(data?.intro, d.intro);
  const lessonContent = pick(data?.lessonContent, d.lessonContent);
  const progress = pick(data?.progress, d.progress);
  const lessonList = {
    heading: data?.lessonList?.heading ?? d.lessonList.heading,
    modules: Array.isArray(data?.lessonList?.modules)
      ? data.lessonList.modules
      : d.lessonList.modules,
  };
  const percent = Math.min(Math.max(Number(progress.percent) || 0, 0), 100);

  return (
    <div className={`w-full max-w-4xl pb-5 lg:pb-10  px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21${className}`}>
      {/* Intro */}
      <section>
        <h2 className="text-lg font-semibold text-neutral-950 sm:text-xl">
          {intro.heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {intro.text}
        </p>
      </section>

      {/* Lesson list */}
      <section className="mt-8 sm:mt-10">
        <h2 className="text-lg font-semibold text-neutral-950 sm:text-xl">
          {lessonList.heading}
        </h2>
        <ul className="mt-4 space-y-4 sm:space-y-5">
          {lessonList.modules.map((module, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => onModuleClick?.(module, i)}
                className="flex w-full items-start gap-3 rounded-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3CFF]/50 sm:gap-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#CCF52B] text-neutral-900 sm:h-10 sm:w-10">
                  <FiVideo className="text-base sm:text-lg" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-neutral-900 sm:text-base">
                    {module.title}
                  </span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-neutral-500 sm:text-sm">
                    {module.description}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Lesson content */}
      <section className="mt-8 sm:mt-10">
        <h2 className="text-lg font-semibold text-neutral-950 sm:text-xl">
          {lessonContent.heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {lessonContent.text}
        </p>
      </section>

      {/* Progress tracking */}
      <section className="mt-8 sm:mt-10">
        <h2 className="text-lg font-semibold text-neutral-950 sm:text-xl">
          {progress.heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {progress.text}
        </p>

        <div className="mt-4 w-full rounded-2xl border border-neutral-200 p-4 sm:p-5">
          <p className="text-xs text-neutral-500 sm:text-sm">
            Learning Progress
          </p>
          <p className="mt-1 text-2xl font-semibold text-neutral-950 sm:text-3xl">
            <CountUp end={percent} suffix="%" enableScrollSpy scrollSpyOnce={false} />
          </p>
          <div
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Learning progress"
            className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-200"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[{ label: "Learning progress", progress: percent }]}
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
      </section>
    </div>
  );
}
