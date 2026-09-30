import CountUp from "react-countup";

const CountUpComponent = CountUp?.default ?? CountUp;

export const DEFAULT_GROWTH_PROMO_DATA = {
    heading: "Your Path to Professional Growth Starts Here!",
    description:
        "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
    stats: [
        { value: "12K", label: "Students" },
        { value: "70+", label: "Courses" },
        { value: "16", label: "Creators" },
    ],
};

const pick = (obj, defaults) =>
    Object.fromEntries(
        Object.entries(defaults).map(([k, v]) => [k, obj?.[k] ?? v])
    );

export default function GrowthPromoLeft({ data, className = "" }) {
    const d = DEFAULT_GROWTH_PROMO_DATA;
    const merged = pick(data, d);
    const stats = Array.isArray(data?.stats) ? data.stats : d.stats;

    return (
        <div className={`relative w-full max-w-lg ${className} `}
        >
            <h2 className="text-2xl font-bold leading-[1.15] tracking-tight text-neutral-950 sm:text-3xl lg:text-[32px]">
                {merged.heading}
            </h2>

            <p className="mt-4 text-[13px] leading-[1.65] text-neutral-600 sm:mt-5 sm:text-sm">
                {merged.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-8 sm:mt-8 sm:gap-10">
                {stats.map((stat, i) => (
                    <li key={i}>
                        <p className="text-2xl font-semibold text-[#0A3CFF] sm:text-3xl">
                            {(() => {
                                const value = String(stat.value);
                                const match = value.match(/^(\D*)([\d,.]+)(.*)$/);

                                if (!match) return value;

                                const [, prefix, amount, suffix] = match;
                                return (
                                    <>
                                        {prefix}
                                        <CountUpComponent
                                            end={Number(amount.replace(/,/g, ""))}
                                            enableScrollSpy
                                            scrollSpyOnce={false}
                                        />
                                        {suffix}
                                    </>
                                );
                            })()}
                        </p>
                        <p className="mt-0.5 text-sm text-neutral-600 sm:text-base">
                            {stat.label}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
