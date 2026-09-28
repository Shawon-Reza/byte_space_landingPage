import { FiCheckCircle } from "react-icons/fi";

/**
 * Shape of the `data` prop (every field optional, missing ones use defaults):
 * {
 *   description: { heading: string, paragraphs: string[] },
 *   gallery: { heading: string, images: {src: string, alt?: string}[] },
 *   keyPoints: { heading: string, items: string[] },
 * }
 */
export const DEFAULT_COURSE_DETAILS = {
  tabs: ["About", "Lessons", "Reviews"],
  description: {
    heading: "Description",
    paragraphs: [
      `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.`,
      `In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.`,
      `As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.`,
    ],
  },
  gallery: {
    heading: "Sneak Peak",
    images: [
      { src: "https://picsum.photos/seed/sneak1/400/400", alt: "Sketching a wireframe" },
      { src: "https://picsum.photos/seed/sneak2/400/400", alt: "Working on a laptop" },
      { src: "https://picsum.photos/seed/sneak3/400/400", alt: "Design workspace" },
      { src: "https://picsum.photos/seed/sneak4/400/400", alt: "Mobile app mockups" },
    ],
  },
  keyPoints: {
    heading: "Key Points",
    items: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
  },
};

const pick = (obj, defaults) =>
  Object.fromEntries(
    Object.entries(defaults).map(([k, v]) => [k, obj?.[k] ?? v])
  );

/**
 * @param {{ data?: object, className?: string }} props
 */
export default function CourseDetailsAbout({ data, className = "" }) {
  const d = DEFAULT_COURSE_DETAILS;
  const description = pick(data?.description, d.description);
  const gallery = pick(data?.gallery, d.gallery);
  const keyPoints = pick(data?.keyPoints, d.keyPoints);

  return (
    <div className={`w-full max-w-4xl  px-6 md:px-10 lg:px-14 xl:px-21 2xl:px-21 pb-5 lg:pb-10  ${className}`}>
      {/* Description */}
      <section className="">
        <h2 className="text-lg font-semibold text-neutral-950 sm:text-xl">
          {description.heading}
        </h2>
        <div className="mt-3 space-y-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {description.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mt-8 sm:mt-10">
        <h2 className="text-lg font-semibold text-neutral-950 sm:text-xl">
          {gallery.heading}
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-4 sm:gap-4">
          {gallery.images.map((img, i) => (
            <div
              key={img.src ?? i}
              className="aspect-square overflow-hidden rounded-xl bg-neutral-200 sm:rounded-2xl"
            >
              <img
                src={img.src}
                alt={img.alt ?? ""}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Key points */}
      <section className="mt-8 sm:mt-10">
        <h2 className="text-lg font-semibold text-neutral-950 sm:text-xl">
          {keyPoints.heading}
        </h2>
        <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
          {keyPoints.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-neutral-700 sm:text-base"
            >
              <FiCheckCircle
                className="mt-0.5 shrink-0 text-[#0A3CFF]"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
