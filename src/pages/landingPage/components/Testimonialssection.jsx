import rightBg from "../../../assets/images/testimonialRightBG.png";
import leftBg from "../../../assets/images/testimonialLeftBG.png.png";
import topBg from "../../../assets/images/testimonoalTopBG.png";

export const DEFAULT_TESTIMONIALS_DATA = {
  heading: "Discover What Our Community Is Saying",
  intro:
    "At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.",
  testimonials: [
    {
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      avatar: "https://i.pravatar.cc/100?img=32",
      quote:
        "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
      name: "James L.",
      role: "Lifelong Learner",
      avatar: "https://i.pravatar.cc/100?img=52",
      quote:
        "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
      name: "Alex B.",
      role: "Inspired Creator",
      avatar: "https://i.pravatar.cc/100?img=13",
      quote:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
  ],
};

export default function TestimonialsSection({ data, className = "" }) {
  const d = DEFAULT_TESTIMONIALS_DATA;
  const heading = data?.heading ?? d.heading;
  const intro = data?.intro ?? d.intro;
  const testimonials = Array.isArray(data?.testimonials)
    ? data.testimonials
    : d.testimonials;

  return (
    <section
      className={`relative w-full overflow-hidden ${className} px-6 py-5 md:px-10 lg:px-14 lg:py-10 xl:px-21 2xl:px-21`}
    >
      {/* Background overlay: thin top line + top-right / bottom-left glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={topBg}
          alt=""
          className="absolute  -top-20 left-1/2 -translate-x-1/2  scale-[80%] "
        />
        <img
          src={rightBg}
          alt=""
          className="absolute  right-0     "
        />
        <img
          src={leftBg}
          alt=""
          className="absolute bottom-0 left-0 h-1/2 w-1/2 object-cover object-left-bottom sm:h-2/3 sm:w-2/3 lg:h-3/4 lg:w-1/2"
        />
      </div>

      <div className="relative z-10 mx-auto w-full">
        {/* Heading + intro */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-3xl lg:max-w-sm lg:text-4xl">
            {heading}
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 sm:text-base lg:max-w-md lg:pt-2">
            {intro}
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, quote, avatar }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
      <img
        src={avatar}
        alt={name}
        className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
      />

      <h3 className="mt-4 text-base font-semibold text-neutral-950 sm:text-lg">
        {name}
      </h3>
      <p className="text-sm text-[#0A3CFF] sm:text-base">{role}</p>

      <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:mt-4 sm:text-base">
        "{quote}"
      </p>
    </article>
  );
}