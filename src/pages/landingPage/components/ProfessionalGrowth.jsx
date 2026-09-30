import GrowthPromoLeft from "./GrowthPromoLeft";
import GrowthPromoRight from "./GrowthPromoRight";

export default function ProfessionalGrowth() {
  return (
    <section className="relative isolate overflow-hidden px-5 pt-12 sm:px-8 sm:pt-16 lg:min-h-[520px] lg:px-12 lg:py-10 xl:px-20">

      <div
        className="mx-auto grid w-full max-w-[1280px] items-center gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-12">
        <GrowthPromoLeft className="mx-auto max-w-[460px] lg:mx-0" />
        <GrowthPromoRight className="mx-auto max-w-[570px]" />
      </div>
    </section>
  );
}
