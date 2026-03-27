import Image from "next/image";
import global_recruitment from "../../assets/images/services/global-recruitment.jpg";
import employer_branding from "../../assets/images/services/employer-branding.jpg";
import hr_consulting from "../../assets/images/services/hr-consulting.jpg";
import SectionHeader from "../common/SectionHeader";

const services = [
  {
    title: "Global Recruitment",
    desc: "Executive search, permanent, and contract staffing solutions.",
    img: global_recruitment,
  },
  {
    title: "HR Consulting",
    desc: "Executive search, permanent, and contract staffing solutions.",
    img: hr_consulting,
  },
  {
    title: "Employer Branding",
    desc: "Strategies for employer branding and employee value proposition.",
    img: employer_branding,
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-black py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.12),transparent_60%)]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <SectionHeader
          badge={"Our Expertise"}
          title={"Comprehensive Talent & Workforce Capabilities"}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(168,85,247,0.25)]"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-[220px] object-cover rounded-xl mb-5 transition duration-500 group-hover:scale-105"
              />

              <h3 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
