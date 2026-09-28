import { useState } from "react";
import { FiCheck, FiPlus } from "react-icons/fi";

export default function CreatorProfileHeader({
    name = "PurePearl Studio",
    role = "Creator",
    tagline = "Passionate UI/UX, Web designer",
    avatar = "https://i.pravatar.cc/200?img=12",
    bio = [
        "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
        "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    products = 3,
    followers = 12,
    onFollowChange,
}) {
    const [following, setFollowing] = useState(false);

    const handleFollow = () => {
        const next = !following;
        setFollowing(next);
        onFollowChange?.(next);
    };

    return (
        <section className=" relative isolate grid bg-[#003BE2] w-full  py-8 text-white  lg:py-12">

            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-[.15] [background-image:linear-gradient(to_right,#a9c1ff_1px,transparent_1px),linear-gradient(to_bottom,#a9c1ff_1px,transparent_1px)] [background-size:clamp(64px,8.35vw,83px)_clamp(64px,14.4vh,83px)]"
            />

            <div className=" w-full max-w-7xl px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21">
                {/* Identity */}
                <div className="flex items-center gap-4 sm:gap-5">
                    <img
                        src={avatar}
                        alt={`${name} avatar`}
                        className="h-16 w-16 shrink-0 rounded-2xl bg-pink-300 object-cover sm:h-20 sm:w-20 lg:h-[76px] lg:w-[76px] xl:h-20 xl:w-20"
                    />

                    <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                            <h1 className="break-words text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                                {name}
                            </h1>
                            <span className="rounded-full bg-[#CCF52B] px-4 py-1 text-xs font-medium text-neutral-900 sm:text-sm">
                                {role}
                            </span>
                        </div>
                        <p className="mt-1 text-sm text-white/90 sm:mt-2 sm:text-base">
                            {tagline}
                        </p>
                    </div>
                </div>

                {/* Bio */}
                <div className="mt-8 space-y-1 text-sm leading-relaxed text-white/90 sm:mt-10 sm:text-[15px] lg:mt-12 lg:text-base">
                    {bio.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>

                {/* Stats + action */}
                <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
                    <ul className="flex flex-wrap gap-3">
                        <StatPill value={products} label="Products" />
                        <StatPill value={followers + (following ? 1 : 0)} label="Followers" />
                    </ul>

                    <button
                        type="button"
                        onClick={handleFollow}
                        aria-pressed={following}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#CCF52B] px-8 py-3 text-sm font-medium text-neutral-900 transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A3CFF] active:scale-95 sm:w-auto sm:py-2.5"
                    >
                        {following ? <FiCheck aria-hidden /> : <FiPlus aria-hidden />}
                        {following ? "Following" : "Follow"}
                    </button>
                </div>
            </div>
        </section>
    );
}

function StatPill({ value, label }) {
    return (
        <li className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-neutral-900 sm:px-6">
            <span className="font-medium text-[#0A3CFF]">{value}</span>
            <span>{label}</span>
        </li>
    );
}