import oppo from "../../assets/images/home/logos/oppo.png";
import derma from "../../assets/images/home/logos/derma.png";
import minimalist from "../../assets/images/home/logos/minimalist.png";
import ICCPL from "../../assets/images/home/logos/ICCPL.webp";
import nivea from "../../assets/images/home/logos/nivea.png";
import mamaearth from "../../assets/images/home/logos/mamaearth.png";
import india_filings from "../../assets/images/home/logos/india-filings.webp";
import cordelia_cruises from "../../assets/images/home/logos/cordelia-cruises.webp";
import roca from "../../assets/images/home/logos/roca.webp";
import LogoSlider from "../common/LogoSlider";

const Partners = () => {
  return (
    <section className="w-full py-16 border-t border-white/5 bg-black">
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
          Your Trusted Allies In Growth
        </p>
      </div>
      <LogoSlider
        logos={[
          oppo,
          derma,
          minimalist,
          ICCPL,
          nivea,
          mamaearth,
          india_filings,
          cordelia_cruises,
          roca,
        ]}
      />
    </section>
  );
};

export default Partners;
