import { FiCheckCircle } from "react-icons/fi";


export default function ManageCoursesRight({
  heading = "Create & Manage Courses Easily.",
  descriptionLead = "ByteSpace",
  descriptionRest = "supports individuals or entities in the creation, publication, and administration of educational courses.",
  items = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ],
  className = "",
}) {
  return (
    <div className={`w-full max-w-lg ${className} z-50`}>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
        {heading}
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:mt-5 sm:text-base">
        <span className="font-semibold text-neutral-900">
          {descriptionLead}
        </span>{" "}
        {descriptionRest}
      </p>

      <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-2.5 text-sm text-neutral-800 sm:text-base"
          >
            <FiCheckCircle className="shrink-0 text-[#0A3CFF]" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}