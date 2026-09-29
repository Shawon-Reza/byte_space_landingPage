import { motion } from "framer-motion";
import CourseCard from "../../../components/common/courseCard/CourseCard";
import CourseAvatarGroup from "../../../components/common/courseCard/CourseAvatarGroup";

const students = {
    avatars: [
        { src: "https://i.pravatar.cc/100?img=12", alt: "Student 1", fallback: "S1" },
        { src: "https://i.pravatar.cc/100?img=47", alt: "Student 2", fallback: "S2" },
        { src: "https://i.pravatar.cc/100?img=32", alt: "Student 3", fallback: "S3" },
        { src: "https://i.pravatar.cc/100?img=68", alt: "Student 4", fallback: "S4" },
    ],
    extraCount: 26,
};






export default function SignupPromoIllustration({ className = "" }) {
    return (
        <div className={`relative aspect-[.92] w-full  ${className}`} aria-label="Featured ByteSpace courses">

            <motion.div
                initial={{ x: -32, y: 24, opacity: 0, scale: 0.90 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0,
                }}
                className="absolute left-0 top-[22%] z-10 w-[88%] shadow-lg"
            >
                {/* <CourseCard variant="secondary" /> */}
                <CourseCard className="max-w-none" />
            </motion.div>

            <motion.div
                initial={{ x: 28, y: -20, opacity: 0, scale: 0.98 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0,
                }}
                className="absolute right-0 top-0 z-50 w-[78%] shadow-lg"
            >
                <CourseCard className="max-w-none" />
            </motion.div>

            <motion.div
                initial={{ x: 24, y: 20, opacity: 0, scale: 0.96 }}
                animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0,
                }}
                className="absolute -bottom-[5%] right-0 z-30 w-[54%] rounded-2xl bg-[#CCF52B] p-2 text-neutral-950 shadow-lg sm:p-3"
            >
                <p className="text-[11px] font-semibold">Happy Students</p>
                <p className="mt-0.5 text-[9px]">4.5 /5.0 <span className="text-blue-700">★</span></p>

                <CourseAvatarGroup
                    avatars={students.avatars}
                    extraCount={students.extraCount}
                />
            </motion.div>

        </div>
    );
}
