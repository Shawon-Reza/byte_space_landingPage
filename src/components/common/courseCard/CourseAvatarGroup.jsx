import { FiPlus } from "react-icons/fi";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../../ui/avatar";

const DEFAULT_AVATARS = [
  { src: "https://i.pravatar.cc/100?img=12", alt: "Student 1", fallback: "S1" },
  { src: "https://i.pravatar.cc/100?img=47", alt: "Student 2", fallback: "S2" },
  { src: "https://i.pravatar.cc/100?img=32", alt: "Student 3", fallback: "S3" },
  { src: "https://i.pravatar.cc/100?img=68", alt: "Student 4", fallback: "S4" },
];

/**
 * Overlapping avatars + a "+N" counter.
 *
 * @param {Object}   props
 * @param {{src?: string, alt?: string, fallback?: string}[]} [props.avatars] max `maxVisible` are shown
 * @param {number}   [props.extraCount]  number shown as "26+". If 0/undefined, a plus icon is shown
 * @param {number}   [props.maxVisible=4]
 * @param {boolean}  [props.grayscale=false]
 * @param {string}   [props.className]
 */
export default function CourseAvatarGroup({
  avatars,
  extraCount,
  maxVisible = 4,
  grayscale = false,
  className = "",
}) {
  const list = (Array.isArray(avatars) ? avatars : DEFAULT_AVATARS).slice(
    0,
    maxVisible
  );

  // Same size on every avatar. Do NOT use size="lg" here, it would fight
  // with the responsive size classes below.
  const sizeClass = "size-8";

  return (
    <AvatarGroup className={`${grayscale ? "grayscale" : ""} ${className}`}>
      {list.map((a, i) => (
        <Avatar key={a.src ?? i} className={sizeClass}>
          <AvatarImage src={a.src} alt={a.alt ?? ""} />
          <AvatarFallback>{a.fallback ?? "?"}</AvatarFallback>
        </Avatar>
      ))}

      <AvatarGroupCount
        className={`${sizeClass} bg-[#CCF52B] font-medium text-[7px] text-neutral-900`}
      >
        {extraCount > 0 ? `${extraCount}+` : <FiPlus aria-label="More" />}
      </AvatarGroupCount>
    </AvatarGroup>
  );
}
