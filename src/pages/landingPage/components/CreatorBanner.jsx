import bg from "../../../assets/images/creatorBannerBG.png"


export default function CreatorBanner({
    heading = "Unlock Your Potential as a Creator with ByteSpace",
    description = "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.",
    ctaLabel = "Join as Creator",
    onCtaClick,
    className = "",
}) {
    return (
        <section
            className={`relative w-full bg-[#003BE2] isolate px-4 py-12 text-center text-white sm:px-8 sm:py-16 lg:py-20 ${className}  bg-cover bg-center bg-no-repeat`}
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >

            {/* ----------- bg ----------- */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-[.15] [background-image:linear-gradient(to_right,#a9c1ff_1px,transparent_1px),linear-gradient(to_bottom,#a9c1ff_1px,transparent_1px)] [background-size:clamp(64px,8.35vw,83px)_clamp(64px,14.4vh,83px)]"
            />

            <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
                <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-[40px]">
                    {heading}
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:mt-5 sm:text-base">
                    {description}
                </p>

                <button
                    type="button"
                    onClick={onCtaClick}
                    className="mt-6 rounded-full bg-[#CCF52B] px-7 py-3 text-sm font-semibold text-neutral-900 transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95 sm:mt-8 sm:px-8 sm:text-base cursor-pointer hover:scale-105 transition-all transform duration-700 ease-in-out"
                >
                    {ctaLabel}
                </button>
            </div>
        </section>
    );
}