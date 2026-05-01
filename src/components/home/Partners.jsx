import { partnersLogos } from "@/data/logos";
import LogoSlider from "../common/LogoSlider";

const Partners = () => {
  return (
    <section className="w-full py-16 border-t border-white/5 bg-black">
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
          Your Trusted Allies In Growth
        </p>
      </div>
      <LogoSlider logos={partnersLogos} />
    </section>
  );
};

export default Partners;
