import SectionHeader from "../common/SectionHeader";
import Image from "next/image";
import gdpr from "../../assets/images/aboutUs/GDPR.png";
import iso from "../../assets/images/aboutUs/ISO.png";
import EQOC from "../../assets/images/aboutUs/EQOC.png";
import audit from "../../assets/images/aboutUs/audit.png";
import visa from "../../assets/images/aboutUs/visa.png";
import lawbour_law_guide from "../../assets/images/aboutUs/labour-law-guide.png";

const certificatesLogos = [gdpr, EQOC, iso, visa, lawbour_law_guide, audit];

export default function Certifications() {
  return (
    <section className="w-full bg-black py-24">
      <div className="mx-auto max-w-7xl text-center">
        <SectionHeader
          badge={"Empowering Global Success"}
          title={"Custom Workforce Solutions That Accelerate Global Growth"}
        />

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {certificatesLogos.map((logo, i) => (
            <div
              key={i}
              className="group rounded-2xlborder bg-white/[0.02]backdrop-blur-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.25) flex h-40 items-center justify-center border-white/10 transition-all duration-300 hover:border-purple-500/30"
            >
              <div className="relative h-30 w-30 overflow-hidden rounded-full md:h-47 md:w-47">
                <Image
                  src={logo}
                  alt={`${logo}-certification`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
