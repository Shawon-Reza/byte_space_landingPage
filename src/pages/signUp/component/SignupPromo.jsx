import SignupPromoIcons from "./SignupPromoIcons";
import SignupPromoIllustration from "./SignupPromoIllustration";
import cone1 from "../../../assets/icons/Cone.png"
import cone2 from "../../../assets/icons/Cone1.png"
import cone3 from "../../../assets/icons/Cone2.png"


export default function SignupPromo({
  heading = "Sign up and come in",
  description = "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
  className = "",
}) {
  return (
    <section className={`flex flex-col text-white ${className}`}>
      <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl">
        {heading}
      </h1>
      <p className="mt-2 max-w-md text-xs leading-relaxed text-white/90 sm:mt-3 sm:text-sm sm:leading-[1.55] lg:text-base">
        {description}
      </p>

      <div className="relative mt-5 hidden w-full max-w-[450px] sm:block lg:mt-7">
        <SignupPromoIllustration className="w-full lg:max-h-[58dvh]" />
        
        <SignupPromoIcons
          className="absolute -top-40 z-[60]"
          ring={{ src: cone1, alt: "Ring shape" }}
          triangle={{ src: cone2, alt: "Triangle shape" }}
          spiral={{ src: cone3, alt: "Spiral shape" }}
        />
      </div>

    </section>
  );
}
