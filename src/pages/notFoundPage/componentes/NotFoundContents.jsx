

import notFound from "../../../assets/images/404.png"



// --------Line bg--------
// [background-image:linear-gradient(to_right,#a9c1ff_1px,transparent_1px),linear-gradient(to_bottom,#a9c1ff_1px,transparent_1px)] [background-size:clamp(64px,8.35vw,83px)_clamp(64px,14.4vh,83px)]

export default function NotFoundContents() {
    return (
        <main className="relative isolate grid min-h-[calc(100vh-65px)] place-items-center overflow-hidden bg-[#003BE2] px-4 font-sans text-white">
            {/* Grid background */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-[.15] [background-image:linear-gradient(to_right,#a9c1ff_1px,transparent_1px),linear-gradient(to_bottom,#a9c1ff_1px,transparent_1px)] [background-size:clamp(64px,8.35vw,83px)_clamp(64px,14.4vh,83px)]"
            />

            <section
                aria-labelledby="not-found-title"
                className="flex w-full max-w-[840px] flex-col items-center py-8 text-center sm:py-12"
            >
            
                <img
                    src={notFound}
                    alt="404"
                    className=" w-full max-w-[720px]"
                />


                <h1
                    id="not-found-title"
                    className="max-w-[760px] text-[clamp(2.25rem,5.6vw,3.35rem)] font-extrabold leading-[.99] tracking-[-.055em] max-[560px]:text-[clamp(2rem,9vw,2.7rem)]"
                >
                    The page you are looking
                    <br className="max-[560px]:hidden" /> for doesn&apos;t exist
                </h1>

                <p className="my-6 max-w-[320px] text-[clamp(.78rem,1.5vw,.88rem)] leading-[1.4] text-white/75 sm:mb-7 sm:max-w-none">
                    Try to use a correct url or go back to homepage to start again
                </p>

                <a
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#caff17] px-5 py-2.5 text-xs font-medium text-[#101900] transition hover:-translate-y-0.5 hover:bg-[#d9ff4b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                >
                    
                    Back to Home
                </a>
            </section>
        </main>
    )
}