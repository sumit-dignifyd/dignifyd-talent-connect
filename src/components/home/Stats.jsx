import SectionHeader from "@/components/common/SectionHeader";
import InteractiveDots from "../common/cursors/InteractiveDots";
import { Globe, Handshake, Users } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Handshake size={18} />,
      value: "92%",
      title: "Client Satisfaction",
      desc: "Trusted for delivering consistent quality, reliable performance, and exceptional service excellence every time.",
    },
    {
      icon: <Users size={18} />,
      value: "95%",
      title: "Employee Retention",
      desc: "We foster supportive and growth-driven environments that keep talent engaged, motivated, and committed.",
    },
    {
      icon: <Globe  size={18} />,
      value: "4,000+",
      title: "Global Placement",
      desc: "Professionals successfully placed across diverse industries, driving growth and long-term success for businesses worldwide.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      <InteractiveDots className="absolute inset-0 z-0" />
      <SectionHeader
        badge={"Empowering Global Access"}
        title={"Custom Workforce Solution That Accelerate Global Growth"}
      />
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 backdrop-blur-xl transition duration-300 hover:border-purple-500/30"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.08)]"></div>

            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                  {item.icon}
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  {item.value}
                </h2>
              </div>

              <h3 className="mb-3 text-lg font-medium text-white">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
